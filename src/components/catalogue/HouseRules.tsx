import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export const HouseRules: React.FC = () => {
  return (
    <PageSheet density="soft" isHardCover={false}>
      <div className="rules-editorial-page">
        <div className="rules-header">
          <span className="rules-eyebrow">HOUSE GUIDELINES</span>
          <h2 className="rules-title">YOUR STAY</h2>
          <p className="rules-sub">Để kỳ nghỉ của bạn và mọi vị khách đều trọn vẹn sự an yên</p>
        </div>

        <div className="rules-list">
          <div className="rule-item">
            <span className="rule-num">01</span>
            <div className="rule-body">
              <strong>Check-in &amp; Check-out</strong>
              <p>Nhận phòng từ 13:00 &bull; Trả phòng trước 11:00 trưa hôm sau (liên hệ lễ tân nếu muốn trả phòng muộn hơn).</p>
            </div>
          </div>

          <div className="rule-item">
            <span className="rule-num">02</span>
            <div className="rule-body">
              <strong>Giờ Yên Tĩnh (Quiet Hours)</strong>
              <p>Từ 23:00 đến 06:00 sáng. Giữ âm lượng vừa phải, không mở nhạc lớn để giữ không gian an lành.</p>
            </div>
          </div>

          <div className="rule-item">
            <span className="rule-num">03</span>
            <div className="rule-body">
              <strong>Không Gian Không Khói Thuốc &amp; An Toàn</strong>
              <p>Không hút thuốc trong phòng ngủ (chỉ hút tại sân vườn). Không mang chất dễ cháy nổ vào khách sạn.</p>
            </div>
          </div>

          <div className="rule-item">
            <span className="rule-num">04</span>
            <div className="rule-body">
              <strong>Bảo Vệ Môi Trường &amp; Thiết Bị</strong>
              <p>Tắt điều hòa và các thiết bị điện khi rời phòng. Giữ gìn trang thiết bị và tài sản chung.</p>
            </div>
          </div>
        </div>

        <div className="rules-footer">
          <span>GAJO&apos;S HOUSE &bull; NGÕ 23 PHAN TRỌNG TUỆ</span>
          <span>HOTLINE 24/7: 0902 286 300</span>
        </div>
      </div>
    </PageSheet>
  );
};
