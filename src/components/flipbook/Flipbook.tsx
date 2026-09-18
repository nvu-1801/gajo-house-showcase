'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { PageFlip } from 'page-flip';
import { calculateFlipDimensions } from '@/lib/dims';
import { playPaperSound } from '@/lib/audio';
import { rooms } from '@/data/rooms';

import { FlipbookControls } from './FlipbookControls';
import { TocModal } from './TocModal';
import { PrintModal } from './PrintModal';

import { CoverPage } from '@/components/catalogue/CoverPage';
import { WelcomeSpread } from '@/components/catalogue/WelcomeSpread';
import { AmenitiesSpread } from '@/components/catalogue/AmenitiesSpread';
import { RoomSpread } from '@/components/catalogue/RoomSpread';
import { DiningSpread } from '@/components/catalogue/DiningSpread';
import { MenuSpread } from '@/components/catalogue/MenuSpread';
import { LocalGuideSpread } from '@/components/catalogue/LocalGuideSpread';
import { HouseRules } from '@/components/catalogue/HouseRules';
import { CheckoutPage } from '@/components/catalogue/CheckoutPage';
import { BackCover } from '@/components/catalogue/BackCover';

const CataloguePages = React.memo(function CataloguePages({
  onJump,
}: {
  onJump: (pageIndex: number) => void;
}) {
  return (
    <>
      {/* TRANG 1: FRONT COVER */}
      <CoverPage />

      {/* TRANG 2-3: WELCOME & PHILOSOPHY */}
      <WelcomeSpread onJump={onJump} />

      {/* TRANG 4-5: AMENITIES & SERVICES */}
      <AmenitiesSpread />

      {/* TRANG 4-21: 9 ROOMS (MAPPED UNIFORMLY) */}
      {rooms.map((room) => (
        <RoomSpread key={room.id} room={room} onJump={onJump} />
      ))}

      {/* TRANG 22-23: IN-HOUSE BBQ DINING */}
      <DiningSpread />

      {/* TRANG 24-25: MENU SPREAD */}
      <MenuSpread />

      {/* TRANG 26-27: LOCAL GUIDE */}
      <LocalGuideSpread />

      {/* TRANG 26: HOUSE RULES */}
      <HouseRules />

      {/* TRANG 27: CHECKOUT */}
      <CheckoutPage />

      {/* TRANG 28: BACK COVER */}
      <BackCover />
    </>
  );
});

export default function Flipbook() {
  const stageRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlip | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(32);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [isPrintOpen, setIsPrintOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const soundRef = useRef(soundEnabled);
  soundRef.current = soundEnabled;

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2000);
  }, []);

  const handleToggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      showToast(next ? 'Âm thanh: Đã bật' : 'Âm thanh: Đã tắt');
      return next;
    });
  }, [showToast]);

  const handleJumpToPage = useCallback((pageIndex: number) => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flip(pageIndex);
    }
  }, []);

  const handlePrevPage = useCallback(() => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flipPrev();
    }
  }, []);

  const handleNextPage = useCallback(() => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flipNext();
    }
  }, []);

  useEffect(() => {
    const container = stageRef.current;
    if (!container) return;

    let pf: PageFlip | null = null;
    let isCleanedUp = false;

    const animId = requestAnimationFrame(() => {
      if (isCleanedUp || !stageRef.current) return;
      const currentContainer = stageRef.current;

      const sheets = currentContainer.querySelectorAll<HTMLElement>('.page-sheet');
      if (!sheets || sheets.length === 0) {
        console.warn('Flipbook: No .page-sheet elements found');
        return;
      }

      // If container was already initialized by a previous PageFlip instance, restore sheets
      const existingWrapper = currentContainer.querySelector('.stf__wrapper');
      if (existingWrapper) {
        sheets.forEach((sheet) => {
          currentContainer.appendChild(sheet);
        });
        existingWrapper.remove();
        currentContainer.classList.remove('stf__parent');
      }

      const d = calculateFlipDimensions();

      try {
        pf = new PageFlip(currentContainer, {
          width: d.width,
          height: d.height,
          size: 'fixed',
          minWidth: 280,
          maxWidth: 540,
          minHeight: 400,
          maxHeight: 850,
          drawShadow: true,
          flippingTime: 650,
          usePortrait: d.isMobile,
          startPage: 0,
          useMouseEvents: true,
          showCover: true,
          mobileScrollSupport: true,
          clickEventForward: true,
        });

        pf.loadFromHTML(sheets);
        setTotalPages(pf.getPageCount() || 32);
        pageFlipRef.current = pf;

        pf.on('flip', (e) => {
          playPaperSound(soundRef.current);
          setCurrentPage(e.data);
        });
      } catch (err) {
        console.error('Failed to initialize PageFlip:', err);
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (pageFlipRef.current) {
        if (e.key === 'ArrowLeft') pageFlipRef.current.flipPrev();
        if (e.key === 'ArrowRight') pageFlipRef.current.flipNext();
      }
    };

    const handleResize = () => {
      if (pageFlipRef.current) {
        try {
          pageFlipRef.current.update();
        } catch {
          // ignore
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      isCleanedUp = true;
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);

      const instance = pageFlipRef.current || pf;
      if (instance && stageRef.current) {
        try {
          const c = stageRef.current;
          const currentSheets = c.querySelectorAll<HTMLElement>('.page-sheet');
          currentSheets.forEach((sheet) => {
            sheet.style.display = '';
            sheet.style.transform = '';
            sheet.style.zIndex = '';
            sheet.style.left = '';
            sheet.style.top = '';
            sheet.style.width = '';
            sheet.style.height = '';
            sheet.classList.remove('--hard', '--soft', '--simple', '--left', '--right', 'stf__item');
            c.appendChild(sheet);
          });

          const wrappers = c.querySelectorAll('.stf__wrapper');
          wrappers.forEach((w) => w.remove());
          c.classList.remove('stf__parent');

          // Prevent pf.destroy() from removing container from DOM
          const origRemove = c.remove;
          c.remove = () => {};
          try {
            instance.destroy();
          } catch {
            // cleanup safe
          }
          c.remove = origRemove;
        } catch (e) {
          console.error('Error during flipbook cleanup:', e);
        }
        pageFlipRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <FlipbookControls
        currentPage={currentPage}
        totalPages={totalPages}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenToc={() => setIsTocOpen(true)}
        onOpenPrint={() => setIsPrintOpen(true)}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        toastMessage={toastMessage}
      />

      <main className="stage-wrapper">
        <div id="flipbookStage" ref={stageRef} className="flipbook-container">
          <CataloguePages onJump={handleJumpToPage} />
        </div>
      </main>

      {/* Pristine copy of the pages for printing, unaffected by PageFlip.
          NOTE: không dùng display:none vì browser sẽ không tải <img> bên trong,
          khiến PDF in ra mất ảnh. Để off-screen để ảnh preload đầy đủ. */}
      <div id="print-source" aria-hidden="true">
        <CataloguePages onJump={handleJumpToPage} />
      </div>

      <TocModal
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        onJump={handleJumpToPage}
      />

      <PrintModal
        isOpen={isPrintOpen}
        onClose={() => setIsPrintOpen(false)}
      />
    </>
  );
}
