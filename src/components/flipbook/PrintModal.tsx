import React from 'react';
import { triggerPrintBookletA4, triggerPrintBookletA3, triggerPrintPreviewUI } from '@/lib/print';

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
              triggerPrintBookletA4();
              onClose();
            }}
            style={{ 
              background: 'var(--sand)', border: '1px solid var(--gold)', borderRadius: '8px', 
              padding: '14px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            <i className="fa-solid fa-book-open" style={{ fontSize: '1.5rem', color: 'var(--charcoal)' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--charcoal)' }}>In Booklet Bản A4 (Sách Gấp Đôi)</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tự động ghép trang 1-12, 2-11... &bull; In 2 mặt (lật cạnh ngắn), gấp đôi thành cuốn catalogue A5 (148.5&times;210mm).</span>
            </div>
          </div>

          <div 
            onClick={() => {
              triggerPrintBookletA3();
              onClose();
            }}
            style={{ 
              background: 'var(--sand)', border: '1px solid var(--gold)', borderRadius: '8px', 
              padding: '14px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            <i className="fa-solid fa-book" style={{ fontSize: '1.5rem', color: 'var(--charcoal)' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--charcoal)' }}>In Booklet Bản A3 (Sách Gấp Đôi Khổ Lớn)</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tự động ghép trang khổ A3 &bull; In 2 mặt (lật cạnh ngắn), gấp đôi thành catalogue A4 (210&times;297mm) cao cấp.</span>
            </div>
          </div>

          <div 
            onClick={() => {
              triggerPrintPreviewUI();
              onClose();
            }}
            style={{ 
              background: 'var(--sand)', border: '1px solid var(--border-subtle)', borderRadius: '8px', 
              padding: '14px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left'
            }}
          >
            <i className="fa-solid fa-images" style={{ fontSize: '1.5rem', color: 'var(--charcoal)' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--charcoal)' }}>In Preview Như UI Để Xem</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Dàn từng cặp trang đôi trải phẳng y như giao diện lật sách &bull; Phù hợp xem trước hoặc gửi file PDF cho khách hàng.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
