import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export const BackCover: React.FC = () => {
  return (
    <PageSheet density="hard" isHardCover={true} className="page-cover cover-back">
      <img className="cover-bg" src="/images/general/gajo-interior.jpg" alt="Back Cover" />
      <div className="cover-grad" />
      <div className="cover-frame" aria-hidden="true" />
      <div className="back-inner">
        <div>
          <div className="back-eyebrow">CẢM ƠN BẠN ĐÃ LỰA CHỌN</div>
          <h2 className="back-title">GAJO&apos;S HOUSE</h2>
          <div className="back-sub">Nơi lưu giữ những khoảnh khắc bình yên</div>
        </div>

        <div className="back-qr-box">
          <div className="back-qr-frame">
            <img src="/images/general/qr-maps.png" alt="QR Google Maps" />
          </div>
          <div className="back-qr-title">&starf; ĐÁNH GIÁ 5 SAO GOOGLE MAPS &starf;</div>
          <div className="back-qr-desc">Quét mã nhận ngay Voucher 50.000 VNĐ tiệc nướng BBQ</div>
          <div className="back-btns">
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="btn-back">
              <i className="fa-solid fa-location-dot" /> Hoài Nhơn, Bình Định
            </a>
          </div>
        </div>

        <div className="back-footer">WWW.GAJOHOUSE.VN &bull; 2026 EDITION</div>
      </div>
    </PageSheet>
  );
};
