import React from 'react';
import { triggerPrintStandard, triggerPrintBooklet } from '@/lib/print';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="toc-modal active" onClick={onClose} style={{ zIndex: 2000 }}>
      <div className="toc-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px', textAlign: 'center' }}>
        <button className="toc-close" onClick={onClose} title="Đóng">
          <i className="fa-solid fa-xmark" />
        </button>
        <i className="fa-solid fa-print" style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '8px' }} />
        <h3 className="toc-title">TẢI VỀ & IN ẤN CATALOGUE</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
          Chọn định dạng xuất bản PDF để xem hoặc in ấn:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div 
            onClick={() => {
              triggerPrintBooklet();
              onClose();
            }}
            style={{ 
              background: 'var(--sand)', border: '1px solid var(--gold)', borderRadius: '8px', 
              padding: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left'
            }}
          >
            <i className="fa-solid fa-book-open" style={{ fontSize: '1.5rem', color: 'var(--charcoal)' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--charcoal)' }}>In Booklet A4 (Sách Gấp Đôi)</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mỗi tờ A4 chứa 4 trang. Gấp đôi lại thành cuốn Catalogue A5. Rất phù hợp in 2 mặt.</span>
            </div>
          </div>

          <div 
            onClick={() => {
              triggerPrintStandard();
              onClose();
            }}
            style={{ 
              background: 'var(--sand)', border: '1px solid var(--border-subtle)', borderRadius: '8px', 
              padding: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left'
            }}
          >
            <i className="fa-solid fa-file-pdf" style={{ fontSize: '1.5rem', color: 'var(--charcoal)' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--charcoal)' }}>Xuất PDF Từng Cặp Trang (Slide Spread)</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mỗi tờ A4 hiển thị 2 trang liền kề (trang trái & phải) giống y như xem trên web. Phù hợp để gửi file PDF cho khách hàng xem trên máy tính.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
