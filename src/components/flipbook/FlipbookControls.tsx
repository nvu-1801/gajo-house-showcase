import React from 'react';

interface FlipbookControlsProps {
  currentPage: number;
  totalPages: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenToc: () => void;
  onOpenPrint: () => void;
  onPrintA4?: () => void;
  onPrintA3?: () => void;
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
  onPrintA4,
  onPrintA3,
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
          <a
            href="/members-of-gao"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon-header btn-member-highlight"
            title="Mở trang in riêng: Members of GẠO"
          >
            <i className="fa-solid fa-crown" style={{ color: '#E0CEAC' }} />
            <span>Members of GẠO</span>
          </a>
          <button className="btn-icon-header" onClick={onPrintA4 || onOpenPrint} title="In Xem Trước Dạng Slide - Khổ A4 Ngang">
            <i className="fa-solid fa-print" />
            <span>In A4 Ngang</span>
          </button>
          <button className="btn-icon-header" onClick={onPrintA3 || onOpenPrint} title="In Xem Trước Dạng Slide - Khổ A3 Ngang (Khổ Lớn)">
            <i className="fa-solid fa-file-contract" />
            <span>In A3 Ngang</span>
          </button>
          <button className="btn-icon-header" onClick={onToggleSound} title="Bật/tắt âm thanh">
            <i className={soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark'} />
            <span>{soundEnabled ? 'Âm thanh' : 'Đã tắt'}</span>
          </button>
          <button className="btn-icon-header" onClick={onOpenPrint} title="Tùy chọn in ấn &amp; PDF">
            <i className="fa-solid fa-sliders" />
            <span>Tùy Chọn In</span>
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
