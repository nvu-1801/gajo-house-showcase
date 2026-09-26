import React from 'react';

export interface ThumbItem {
  label: string;
  page: number;
  group: string;
}

interface ThumbnailDrawerProps {
  items: ThumbItem[];
  activePage: number;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (page: number) => void;
}

export const ThumbnailDrawer: React.FC<ThumbnailDrawerProps> = ({
  items,
  activePage,
  isOpen,
  onClose,
  onSelect,
}) => {
  return (
    <>
      <div className={`thumb-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} aria-hidden="true" />
      <aside className={`thumb-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="thumb-drawer-head">
          <span className="thumb-drawer-title">Mục lục nhanh</span>
          <button className="thumb-drawer-close" onClick={onClose} aria-label="Đóng">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="thumb-grid">
          {items.map((item, index) => (
            <button
              key={`${item.group}-${item.page}`}
              className={`thumb-card ${activePage === item.page ? 'active' : ''}`}
              onClick={() => onSelect(item.page)}
            >
              <span className="thumb-card-num">{String(index + 1).padStart(2, '0')}</span>
              <span className="thumb-card-label">{item.label}</span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};
