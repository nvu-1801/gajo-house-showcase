/**
 * Print pipeline cho GAJO'S HOUSE catalogue.
 *
 * Nguyên nhân PDF mất ảnh trước đây:
 *  1. `#print-source` dùng `display: none` -> browser không tải <img> bên trong,
 *     clone qua print-root rồi gọi window.print() ngay -> ảnh chưa kịp tải.
 *  2. Gọi window.print() đồng bộ ngay sau khi clone DOM.
 *
 * Fix: chuẩn hoá src ảnh -> tuyệt đối, chờ fonts + toàn bộ ảnh decode xong
 * (có timeout fallback) rồi mới gọi window.print().
 *
 * Khớp UI web khi in: trang web có kích thước px (vd 520x735) nhỏ hơn nửa tờ
 * A4 landscape (148.5x210mm ≈ 561x794px) nhưng cùng tỉ lệ 1:1.414. Vì nội dung
 * dùng px cố định + space-between, nếu in trực tiếp thì các khoảng trống sẽ
 * giãn ra (rõ nhất ở trang Welcome). Fix bằng cách bọc nội dung mỗi trang
 * trong wrapper có đúng kích thước px của trang web + `zoom` tỉ lệ, sao cho
 * bản in là phóng to/thu nhỏ tuyến tính 1:1 của web (chữ xuống dòng, khoảng
 * cách, màu sắc giữ nguyên).
 */

import { calculateFlipDimensions } from '@/lib/dims';

// Nửa tờ A4 landscape quy ra px CSS (96dpi): 148.5mm x 210mm
const PRINT_HALF_W_PX = (148.5 * 96) / 25.4;
const PRINT_HALF_H_PX = (210 * 96) / 25.4;

// Nửa tờ A3 landscape quy ra px CSS (96dpi): 210mm x 297mm (A4 dọc)
const PRINT_A3_HALF_W_PX = (210 * 96) / 25.4;
const PRINT_A3_HALF_H_PX = (297 * 96) / 25.4;

interface ScreenPageSize {
  w: number;
  h: number;
}

function getScreenPageSize(): ScreenPageSize {
  try {
    const d = calculateFlipDimensions();
    if (d.width > 0 && d.height > 0) return { w: d.width, h: d.height };
  } catch {
    // ignore -> dùng fallback
  }
  return { w: 520, h: 735 };
}

export async function triggerPrintStandard() {
  await prepareAndPrint('standard');
}

export async function triggerPrintA4() {
  await prepareAndPrint('standard');
}

export async function triggerPrintA3() {
  await prepareAndPrint('a3');
}

export async function triggerPrintBooklet() {
  await prepareAndPrint('booklet');
}

async function prepareAndPrint(mode: 'standard' | 'booklet' | 'a3') {
  const isA3 = mode === 'a3';
  const halfW = isA3 ? PRINT_A3_HALF_W_PX : PRINT_HALF_W_PX;
  const halfH = isA3 ? PRINT_A3_HALF_H_PX : PRINT_HALF_H_PX;

  const screen = getScreenPageSize();
  const zoom = Math.min(halfW / screen.w, halfH / screen.h);
  // Log để đối chiếu khi kiểm tra bản in (DevTools Console)
  console.info(`[print] mode=${mode} screen=${screen.w}x${screen.h} zoom=${zoom.toFixed(4)}`);

  let pageStyle = document.getElementById('dynamic-print-page-style') as HTMLStyleElement | null;
  if (!pageStyle) {
    pageStyle = document.createElement('style');
    pageStyle.id = 'dynamic-print-page-style';
    document.head.appendChild(pageStyle);
  }
  if (isA3) {
    pageStyle.textContent = `@page { size: A3 landscape; margin: 0; }`;
  } else {
    pageStyle.textContent = `@page { size: A4 landscape; margin: 0; }`;
  }

  preparePrintContainer(mode, screen, zoom);
  try {
    await waitForPrintAssets();
  } catch {
    // Timeout / lỗi asset lẻ -> vẫn in để không kẹt UI
  }
  // Cho browser 1 frame để áp CSS print trước khi mở dialog
  await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
  window.print();
}

/** Chờ fonts + tất cả <img> trong #print-root tải/decode xong (tối đa ~4s). */
function waitForPrintAssets(timeoutMs = 4000): Promise<void> {
  const jobs: Promise<unknown>[] = [];

  try {
    if (document.fonts?.ready) {
      jobs.push(
        Promise.race([
          document.fonts.ready,
          new Promise((resolve) => setTimeout(resolve, timeoutMs)),
        ]),
      );
    }
  } catch {
    // ignore
  }

  const printRoot = document.getElementById('print-root');
  const images = printRoot
    ? Array.from(printRoot.querySelectorAll<HTMLImageElement>('img'))
    : [];

  images.forEach((img) => {
    // Ảnh đã load xong trong cache
    if (img.complete && img.naturalWidth > 0) return;
    jobs.push(
      new Promise((resolve) => {
        let done = false;
        const finish = () => {
          if (!done) {
            done = true;
            resolve(null);
          }
        };
        const timer = setTimeout(finish, timeoutMs);
        img.addEventListener(
          'load',
          () => {
            clearTimeout(timer);
            finish();
          },
          { once: true },
        );
        img.addEventListener(
          'error',
          () => {
            clearTimeout(timer);
            finish();
          },
          { once: true },
        );
        // Kích hoạt decode async nếu browser hỗ trợ
        try {
          (img.decode?.() as Promise<unknown> | undefined)
            ?.then(() => {
              clearTimeout(timer);
              finish();
            })
            .catch(() => {});
        } catch {
          // ignore
        }
      }),
    );
  });

  if (jobs.length === 0) return Promise.resolve();
  return Promise.all(jobs).then(() => undefined);
}

/** Chuẩn hoá src tương đối "images/..." -> "/images/..." để in ấn luôn resolve đúng. */
function normalizeImageSrc(root: HTMLElement) {
  const imgs = root.querySelectorAll<HTMLImageElement>('img');
  imgs.forEach((img) => {
    const raw = img.getAttribute('src');
    if (raw && !raw.startsWith('/') && !raw.startsWith('http') && !raw.startsWith('data:') && !raw.startsWith('blob:')) {
      const fixed = raw.startsWith('images/') ? `/${raw}` : `/${raw.replace(/^\.?\//, '')}`;
      img.setAttribute('src', fixed);
    }
    // Ảnh in: bỏ lazy để browser tải ngay, giữ nguyên object-fit từ CSS
    img.loading = 'eager';
    img.decoding = 'sync';
  });
}

function preparePrintContainer(mode: 'standard' | 'booklet' | 'a3', screen: ScreenPageSize, zoom: number) {
  let printRoot = document.getElementById('print-root');
  if (printRoot) {
    printRoot.remove();
  }

  printRoot = document.createElement('div');
  printRoot.id = 'print-root';
  const modeClass = mode === 'booklet' ? 'print-mode-booklet' : mode === 'a3' ? 'print-mode-a3' : 'print-mode-standard';
  printRoot.className = `print-root ${modeClass}`;

  const stage = document.getElementById('print-source');
  if (!stage) return;

  const sheets = Array.from(stage.querySelectorAll('.page-sheet'));

  if (mode === 'booklet') {
    while (sheets.length % 4 !== 0) {
      const blank = document.createElement('div');
      blank.className = 'page-sheet blank-page';
      blank.innerHTML = '<div class="page"><div class="page-content" style="background:#fff;width:100%;height:100%;"></div></div>';
      sheets.splice(sheets.length - 1, 0, blank);
    }

    const totalPages = sheets.length;
    const printContainer = document.createElement('div');
    printContainer.className = 'booklet-print-container';

    const sheetsCount = totalPages / 4;
    for (let i = 0; i < sheetsCount; i++) {
      const frontLeft = sheets[totalPages - 1 - i * 2].cloneNode(true) as HTMLElement;
      const frontRight = sheets[i * 2].cloneNode(true) as HTMLElement;
      const backLeft = sheets[i * 2 + 1].cloneNode(true) as HTMLElement;
      const backRight = sheets[totalPages - 2 - i * 2].cloneNode(true) as HTMLElement;

      cleanUpClonedSheet(frontLeft, screen, zoom);
      cleanUpClonedSheet(frontRight, screen, zoom);
      cleanUpClonedSheet(backLeft, screen, zoom);
      cleanUpClonedSheet(backRight, screen, zoom);

      const sheetFront = document.createElement('div');
      sheetFront.className = 'booklet-sheet';
      sheetFront.innerHTML = `
        <div class="booklet-half"></div>
        <div class="booklet-fold-line"></div>
        <div class="booklet-half"></div>
      `;
      sheetFront.children[0].appendChild(frontLeft);
      sheetFront.children[2].appendChild(frontRight);
      printContainer.appendChild(sheetFront);

      const sheetBack = document.createElement('div');
      sheetBack.className = 'booklet-sheet';
      sheetBack.innerHTML = `
        <div class="booklet-half"></div>
        <div class="booklet-fold-line"></div>
        <div class="booklet-half"></div>
      `;
      sheetBack.children[0].appendChild(backLeft);
      sheetBack.children[2].appendChild(backRight);
      printContainer.appendChild(sheetBack);
    }
    printRoot.appendChild(printContainer);
  } else {
    // Standard Print (Spread Mode - 2 pages side-by-side)
    const printContainer = document.createElement('div');
    printContainer.className = 'standard-print-container';

    // We want Cover on the right (Blank on left), then pairs, then BackCover on left (Blank on right)
    const spreadSheets = [];
    const blankFront = document.createElement('div');
    blankFront.className = 'page-sheet blank-page';
    blankFront.innerHTML = '<div class="page"><div class="page-content" style="background:var(--paper);width:100%;height:100%;"></div></div>';
    spreadSheets.push(blankFront);

    sheets.forEach(s => spreadSheets.push(s));

    if (spreadSheets.length % 2 !== 0) {
      const blankBack = document.createElement('div');
      blankBack.className = 'page-sheet blank-page';
      blankBack.innerHTML = '<div class="page"><div class="page-content" style="background:var(--paper);width:100%;height:100%;"></div></div>';
      spreadSheets.push(blankBack);
    }

    for (let i = 0; i < spreadSheets.length; i += 2) {
      const leftPage = spreadSheets[i].cloneNode(true) as HTMLElement;
      const rightPage = spreadSheets[i + 1].cloneNode(true) as HTMLElement;

      cleanUpClonedSheet(leftPage, screen, zoom);
      cleanUpClonedSheet(rightPage, screen, zoom);

      const sheetDiv = document.createElement('div');
      sheetDiv.className = 'standard-print-sheet spread-sheet';
      sheetDiv.innerHTML = `
        <div class="spread-half"></div>
        <div class="spread-half"></div>
      `;
      sheetDiv.children[0].appendChild(leftPage);
      sheetDiv.children[1].appendChild(rightPage);

      printContainer.appendChild(sheetDiv);
    }

    printRoot.appendChild(printContainer);
  }

  normalizeImageSrc(printRoot);
  document.body.appendChild(printRoot);
}

function cleanUpClonedSheet(sheet: HTMLElement, screen: ScreenPageSize, zoom: number) {
  sheet.style.display = 'block';
  sheet.style.transform = 'none';
  sheet.style.zIndex = 'auto';
  sheet.style.left = '0';
  sheet.style.top = '0';
  sheet.style.width = '100%';
  sheet.style.height = '100%';
  sheet.style.position = 'relative';
  sheet.style.overflow = 'hidden';
  sheet.style.flexShrink = '0';

  sheet.classList.remove('--hard', '--soft', '--simple', '--left', '--right', 'stf__item');

  const page = sheet.querySelector('.page') as HTMLElement;
  if (page) {
    page.style.width = '100%';
    page.style.height = '100%';
    page.style.transform = 'none';
  }

  // Reset mọi phần tử con bị PageFlip gán inline-transform/position tuyệt đối
  sheet.querySelectorAll<HTMLElement>('.stf__item').forEach((el) => {
    el.classList.remove('stf__item', '--hard', '--soft', '--simple', '--left', '--right');
  });

  // Bọc nội dung trong wrapper đúng kích thước px trang web + scale tỉ lệ,
  // để bản in là bản phóng tuyến tính 1:1 của web (khoảng trống, xuống dòng giữ nguyên).
  // Dùng transform:scale (thay vì zoom) vì tương thích chắc chắn khi in/PDF.
  // Bỏ qua trang trắng (blank) vốn đã rỗng.
  if (!sheet.classList.contains('blank-page') && screen.w > 0 && zoom > 0) {
    const wrap = document.createElement('div');
    wrap.className = 'print-scale-wrap';
    wrap.style.width = `${screen.w}px`;
    wrap.style.height = `${screen.h}px`;
    wrap.style.transform = `scale(${zoom})`;
    wrap.style.transformOrigin = 'top left';
    while (sheet.firstChild) {
      wrap.appendChild(sheet.firstChild);
    }
    sheet.appendChild(wrap);
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('afterprint', () => {
    const printRoot = document.getElementById('print-root');
    if (printRoot) {
      printRoot.remove();
    }
    const pageStyle = document.getElementById('dynamic-print-page-style');
    if (pageStyle) {
      pageStyle.remove();
    }
  });
}
