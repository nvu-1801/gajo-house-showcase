import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export const HouseRules: React.FC = () => {
  return (
    <PageSheet density="soft" isHardCover={false}>
      <div className="rules-editorial-page">
        {/* Editorial Top Brand Header */}
        <div className="ed-page-header">
          <div className="ed-brand">
            <span className="ed-brand-logo">GAJO&apos;S HOUSE</span>
            <span className="ed-brand-dot">•</span>
            <span className="ed-brand-tagline">Quy định lưu trú</span>
          </div>
          <span className="ed-room-index-tag">PAGE 26 / GUIDELINES</span>
        </div>

        {/* Editorial Title Block with Framed Photo */}
        <div className="rules-hero-grid">
          <div className="rules-title-col">
            <span className="rules-eyebrow">HOSPITALITY &amp; HARMONY</span>
            <h2 className="rules-title">YOUR STAY</h2>
            <p className="rules-sub">Để kỳ nghỉ của bạn và mọi vị khách đều trọn vẹn sự an yên</p>
          </div>
          <div className="rules-photo-box">
            <img src="/images/general/gajo-interior.jpg" alt="Gajo Interior" />
            <span className="rules-photo-tag">AN YÊN</span>
          </div>
        </div>

        {/* 4 Guidelines Cards */}
        <div className="rules-cards-list">
          {/* Card 01 */}
          <div className="rule-card">
            <div className="rule-card-top">
              <span className="rule-card-num">01</span>
              <div className="rule-card-heading">
                <i className="fa-solid fa-clock rule-icon"></i>
                <strong className="rule-card-title">Check-in &amp; Check-out</strong>
              </div>
            </div>
            <p className="rule-card-desc">
              Nhận phòng từ <strong>13:00</strong> &bull; Trả phòng trước <strong>11:00</strong> trưa hôm sau (liên hệ lễ tân nếu quý khách cần hỗ trợ nhận sớm hoặc trả muộn).
            </p>
          </div>

          {/* Card 02 */}
          <div className="rule-card">
            <div className="rule-card-top">
              <span className="rule-card-num">02</span>
              <div className="rule-card-heading">
                <i className="fa-solid fa-moon rule-icon"></i>
                <strong className="rule-card-title">Giờ Yên Tĩnh (Quiet Hours)</strong>
              </div>
            </div>
            <p className="rule-card-desc">
              Từ <strong>23:00 đến 06:00</strong> sáng hôm sau. Vui lòng giữ âm lượng vừa phải, không mở loa lớn để cùng gìn giữ trọn vẹn giấc ngủ an lành.
            </p>
          </div>

          {/* Card 03 */}
          <div className="rule-card">
            <div className="rule-card-top">
              <span className="rule-card-num">03</span>
              <div className="rule-card-heading">
                <i className="fa-solid fa-ban-smoking rule-icon"></i>
                <strong className="rule-card-title">Không Gian Không Khói Thuốc</strong>
              </div>
            </div>
            <p className="rule-card-desc">
              Tuyệt đối không hút thuốc lá trong phòng ngủ (quý khách vui lòng hút tại khu vực sân vườn). Không mang chất dễ cháy nổ vào khách sạn.
            </p>
          </div>

          {/* Card 04 */}
          <div className="rule-card">
            <div className="rule-card-top">
              <span className="rule-card-num">04</span>
              <div className="rule-card-heading">
                <i className="fa-solid fa-leaf rule-icon"></i>
                <strong className="rule-card-title">Bảo Vệ Môi Trường &amp; Thiết Bị</strong>
              </div>
            </div>
            <p className="rule-card-desc">
              Vui lòng tắt điều hòa và bình nóng lạnh khi rời khỏi phòng. Trân trọng giữ gìn các trang thiết bị nội thất và tài sản chung của homestay.
            </p>
          </div>
        </div>

        {/* Fast Wi-Fi & Reception Concierge Card */}
        <div className="rules-concierge-card">
          <div className="concierge-item">
            <i className="fa-solid fa-wifi concierge-icon"></i>
            <div className="concierge-info">
              <span className="concierge-lbl">WI-FI MIỄN PHÍ</span>
              <strong className="concierge-val">GAJO_HOUSE</strong>
            </div>
          </div>
          <div className="concierge-item">
            <i className="fa-solid fa-key concierge-icon"></i>
            <div className="concierge-info">
              <span className="concierge-lbl">MẬT KHẨU</span>
              <strong className="concierge-val">gajohouse2026</strong>
            </div>
          </div>
          <div className="concierge-item">
            <i className="fa-solid fa-headset concierge-icon"></i>
            <div className="concierge-info">
              <span className="concierge-lbl">HOTLINE 24/7</span>
              <strong className="concierge-val">0902 286 300</strong>
            </div>
          </div>
        </div>

        {/* Editorial Footer */}
        <div className="rules-footer">
          <span>GAJO&apos;S HOUSE &bull; NGÕ 23 PHAN TRỌNG TUỆ</span>
          <span>HOTLINE 24/7: 0902 286 300</span>
        </div>
      </div>
    </PageSheet>
  );
};
