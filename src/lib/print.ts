export function triggerPrintStandard() {
  preparePrintContainer('standard');
  window.print();
}

export function triggerPrintBooklet() {
  preparePrintContainer('booklet');
  window.print();
}

function preparePrintContainer(mode: 'standard' | 'booklet') {
  let printRoot = document.getElementById('print-root');
  if (printRoot) {
    printRoot.remove();
  }

  printRoot = document.createElement('div');
  printRoot.id = 'print-root';
  printRoot.className = `print-root ${mode === 'booklet' ? 'print-mode-booklet' : 'print-mode-standard'}`;
  
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
      
      cleanUpClonedSheet(frontLeft);
      cleanUpClonedSheet(frontRight);
      cleanUpClonedSheet(backLeft);
      cleanUpClonedSheet(backRight);

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
      
      cleanUpClonedSheet(leftPage);
      cleanUpClonedSheet(rightPage);
      
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
  
  document.body.appendChild(printRoot);
}

function cleanUpClonedSheet(sheet: HTMLElement) {
  sheet.style.display = 'block';
  sheet.style.transform = 'none';
  sheet.style.zIndex = 'auto';
  sheet.style.left = '0';
  sheet.style.top = '0';
  sheet.style.width = '100%';
  sheet.style.height = '100%';
  sheet.style.position = 'relative';
  
  sheet.classList.remove('--hard', '--soft', '--simple', '--left', '--right', 'stf__item');
  
  const page = sheet.querySelector('.page') as HTMLElement;
  if (page) {
    page.style.width = '100%';
    page.style.height = '100%';
    page.style.transform = 'none';
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('afterprint', () => {
    const printRoot = document.getElementById('print-root');
    if (printRoot) {
      printRoot.remove();
    }
  });
}
