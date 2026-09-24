import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export const CoverPage: React.FC = () => {
  return (
    <PageSheet density="hard" isHardCover={true} className="page-cover cover-front">
      <img className="cover-bg" src="/images/general/gajo-cover-night.jpg" alt="GAJO'S HOUSE Cover" />
      <div className="cover-grad" />
      <div className="cover-frame" aria-hidden="true" />
      <div className="cover-content">
        <div className="cover-top">
          <div className="cover-eyebrow">BOUTIQUE HOMESTAY &bull; HOÀI NHƠN</div>
          <h1 className="cover-title">
            GAJO&apos;S<br />HOUSE
          </h1>
          <div className="cover-divider" />
          <div className="cover-sub">Editorial Room Catalogue 2026</div>
          <div className="cover-quote">
            &ldquo;Một trạm dừng cho những tâm hồn mỏi mệt tìm về an yên.&rdquo;
          </div>
          <div className="cover-loc">
            <i className="fa-solid fa-location-dot" />
            <span>Hoài Nhơn &bull; Bình Định</span>
          </div>
        </div>
        <div className="cover-footer">
          <span>9 PHÒNG THIẾT KẾ RIÊNG BIỆT</span>
          <span className="cover-hint">
            <i className="fa-solid fa-hand-point-right" />
            LẬT TRANG ĐỂ KHÁM PHÁ
          </span>
        </div>
      </div>
    </PageSheet>
  );
};
