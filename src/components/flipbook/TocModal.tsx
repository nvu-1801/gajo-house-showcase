import React from 'react';
import { tocItems } from '@/data/catalogue';

interface TocModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJump: (pageIndex: number) => void;
}

export const TocModal: React.FC<TocModalProps> = ({ isOpen, onClose, onJump }) => {
  if (!isOpen) return null;

  return (
    <div className="toc-modal active" onClick={onClose}>
      <div className="toc-card" onClick={(e) => e.stopPropagation()}>
        <button className="toc-close" onClick={onClose} title="Đóng mục lục">
          <i className="fa-solid fa-xmark" />
        </button>
        <h3 className="toc-title">Mục Lục Editorial Catalogue</h3>
        <ul className="toc-list">
          {tocItems.map((item) => (
            <li
              key={item.pageIndex}
              className="toc-item"
              onClick={() => {
                onJump(item.pageIndex);
                onClose();
              }}
            >
              <span>{item.title}</span>
              <span>{item.pageLabel}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
