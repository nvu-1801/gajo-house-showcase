import React from 'react';
import { triggerPrintA4, triggerPrintA3, triggerPrintBooklet } from '@/lib/print';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="toc-modal active" onClick={onClose} style={{ zIndex: 2000 }}>
      <div className="toc-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px', textAlign: 'center' }}>
        <button className="toc-close" onClick={onClose} title="Đóng">
          <i className="fa-solid fa-xmark" />
        </button>
        <i className="fa-solid fa-print" style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '8px' }} />
        <h3 className="toc-title">TẢI VỀ &amp; IN ẤN CATALOGUE</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
          Chọn định dạng xuất bản PDF hoặc in ấn phù hợp:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div 
            onClick={() => {
              triggerPrintA4();
              onClose();
            }}
            style={{ 
              background: 'var(--sand)', border: '1px solid var(--gold)', borderRadius: '8px', 
              padding: '14px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            <i className="fa-solid fa-print" style={{ fontSize: '1.5rem', color: 'var(--charcoal)' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--charcoal)' }}>In A4 Ngang (Trang Đôi Sách)</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Khổ tiêu chuẩn 297&times;210mm &bull; Hiển thị từng cặp trang liền kề &bull; Phù hợp máy in văn phòng / xem PDF máy tính.</span>
            </div>
          </div>

          <div 
            onClick={() => {
              triggerPrintA3();
              onClose();
            }}
            style={{ 
              background: 'var(--sand)', border: '1px solid var(--gold)', borderRadius: '8px', 
              padding: '14px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            <i className="fa-solid fa-file-contract" style={{ fontSize: '1.5rem', color: 'var(--charcoal)' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--charcoal)' }}>In A3 Ngang (Trang Đôi Sách Khổ Lớn)</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Khổ lớn 420&times;297mm &bull; Mỗi trang con đúng bằng 1 tờ A4 dọc (210&times;297mm) &bull; Gấp đôi thành catalogue A4 siêu nét.</span>
            </div>
          </div>

          <div 
            onClick={() => {
              triggerPrintBooklet();
              onClose();
            }}
            style={{ 
              background: 'var(--sand)', border: '1px solid var(--border-subtle)', borderRadius: '8px', 
              padding: '14px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left'
            }}
          >
            <i className="fa-solid fa-book-open" style={{ fontSize: '1.5rem', color: 'var(--charcoal)' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--charcoal)' }}>In Booklet A4 (Sách Gấp Đôi 2 Mặt)</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>In 2 mặt xếp chồng &bull; Gấp đôi lại ở giữa thành cuốn Catalogue A5.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
