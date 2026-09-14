import React from 'react';

interface FlipbookControlsProps {
  currentPage: number;
  totalPages: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenToc: () => void;
  onOpenPrint: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  toastMessage: string | null;
}

export const FlipbookControls: React.FC<FlipbookControlsProps> = ({
  currentPage,
  totalPages,
  soundEnabled,
  onToggleSound,
  onOpenToc,
  onOpenPrint,
  onPrevPage,
  onNextPage,
  toastMessage,
}) => {
  return (
    <>
      {toastMessage && (
        <div className="toast show">
          {toastMessage}
        </div>
      )}

      <header className="app-header">
        <a className="brand-logo-link" href="#">
          <span className="brand-logo-text">GAJO&apos;S HOUSE &bull; EDITORIAL</span>
        </a>
        <div className="header-actions">
          <button className="btn-icon-header" onClick={onToggleSound} title="Bật/tắt âm thanh">
            <i className={soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark'} />
            <span>{soundEnabled ? 'Âm thanh' : 'Đã tắt'}</span>
          </button>
          <button className="btn-icon-header" onClick={onOpenPrint} title="In ấn & PDF">
            <i className="fa-solid fa-print" />
            <span>In / PDF</span>
          </button>
          <button className="btn-icon-header" onClick={onOpenToc} title="Xem mục lục">
            <i className="fa-solid fa-list" />
            <span>Mục lục</span>
          </button>
        </div>
      </header>

      <nav className="bottom-toolbar">
        <button className="btn-tool" onClick={onPrevPage} title="Trang trước">
          <i className="fa-solid fa-chevron-left" />
        </button>
        <span className="pg-txt">
          Trang {currentPage + 1} / {totalPages}
        </span>
        <button className="btn-tool" onClick={onNextPage} title="Trang sau">
          <i className="fa-solid fa-chevron-right" />
        </button>
      </nav>
    </>
  );
};
