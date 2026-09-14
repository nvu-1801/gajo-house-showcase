import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export const CoverPage: React.FC = () => {
  return (
    <PageSheet density="hard" isHardCover={true}>
      <img className="cover-bg" src="images/general/gajo-interior.jpg" alt="GAJO'S HOUSE Cover" />
      <div className="cover-grad" />
      <div className="cover-content">
        <div className="cover-top">
          <div className="cover-eyebrow">BOUTIQUE HOMESTAY &bull; GIA LAI</div>
          <h1 className="cover-title">
            GAJO&apos;S<br />HOUSE
          </h1>
          <div className="cover-sub">Editorial Room Catalogue 2026</div>
          <div className="cover-quote">
            &ldquo;Một trạm dừng cho những tâm hồn mỏi mệt tìm về an yên.&rdquo;
          </div>
        </div>
        <div className="cover-footer">
          <span>9 PHÒNG THIẾT KẾ RIÊNG BIỆT</span>
          <span>LẬT TRANG ĐỂ KHÁM PHÁ &rarr;</span>
        </div>
      </div>
    </PageSheet>
  );
};
