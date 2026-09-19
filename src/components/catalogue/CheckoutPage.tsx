import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export const CheckoutPage: React.FC = () => {
  return (
    <PageSheet density="soft" isHardCover={false}>
      <div className="checkout-editorial-page">
        {/* Editorial Top Brand Header */}
        <div className="ed-page-header">
          <div className="ed-brand">
            <span className="ed-brand-logo">GAJO&apos;S HOUSE</span>
            <span className="ed-brand-dot">•</span>
            <span className="ed-brand-tagline">Lời chào tạm biệt</span>
          </div>
          <span className="ed-room-index-tag">PAGE 27 / FAREWELL</span>
        </div>

        {/* Editorial Title Block with Framed Photo */}
        <div className="checkout-hero-grid">
          <div className="checkout-title-col">
            <span className="checkout-eyebrow">DEPARTURE NOTES</span>
            <h2 className="checkout-title">BEFORE YOU LEAVE</h2>
            <p className="checkout-sub">Một vài điều nhỏ trước khi bạn tiếp tục hành trình mới</p>
          </div>
          <div className="checkout-photo-box">
            <img src="/images/general/cafe-bonjour.jpg" alt="Farewell Moments" />
            <span className="checkout-photo-tag">BÌNH AN</span>
          </div>
        </div>

        {/* Google Review Invitation Card */}
        <div className="checkout-review-card">
          <span className="review-card-glow" aria-hidden="true" />
          <div className="review-card-left">
            <div className="review-stars-row">
              <span className="star-icon">★</span>
              <span className="star-icon">★</span>
              <span className="star-icon">★</span>
              <span className="star-icon">★</span>
              <span className="star-icon">★</span>
              <span className="review-stars-label">GOOGLE REVIEWS</span>
            </div>
            <h4 className="review-prompt">Loved your stay at GAJO&apos;S HOUSE?</h4>
            <p className="review-desc">
              Một đánh giá 5★ của bạn là món quà ý nghĩa nhất — giúp GAJO&apos;S HOUSE thêm ấm áp và được nhiều du khách biết đến hơn.
            </p>
            <div className="review-signature">
              <i className="fa-solid fa-heart review-heart"></i>
              <span>Cảm ơn bạn, hẹn gặp lại tại GAJO&apos;S HOUSE!</span>
            </div>
          </div>
          <div className="review-card-qr">
            <div className="review-qr-frame">
              <img src="/images/general/qr-maps.png" alt="Google Maps QR Code" />
            </div>
            <span className="review-qr-label">Quét mã để đánh giá &rarr;</span>
          </div>
        </div>

        {/* 4 Checkout Steps Cards List */}
        <div className="checkout-steps-list">
          {/* Step 01 */}
          <div className="checkout-step-card">
            <div className="step-card-num">01</div>
            <div className="step-card-body">
              <div className="step-card-heading">
                <i className="fa-solid fa-key step-icon"></i>
                <strong className="step-card-title">Gửi lại chìa khóa phòng</strong>
              </div>
              <p className="step-card-desc">Gửi lại chìa khóa tại quầy Lễ tân hoặc gửi vào khay check-out trước 12:00 AM.</p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="checkout-step-card">
            <div className="step-card-num">02</div>
            <div className="step-card-body">
              <div className="step-card-heading">
                <i className="fa-solid fa-suitcase-rolling step-icon"></i>
                <strong className="step-card-title">Kiểm tra kỹ hành lý &amp; tư trang</strong>
              </div>
              <p className="step-card-desc">Kiểm tra ví tiền, sạc điện thoại, laptop và giấy tờ tùy thân tại khu vực phòng ngủ.</p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="checkout-step-card">
            <div className="step-card-num">03</div>
            <div className="step-card-body">
              <div className="step-card-heading">
                <i className="fa-solid fa-power-off step-icon"></i>
                <strong className="step-card-title">Tắt thiết bị điện &amp; khóa nước</strong>
              </div>
              <p className="step-card-desc">Tắt máy lạnh, quạt và kiểm tra khóa vòi nước phòng tắm trước khi khép cửa rời phòng.</p>
            </div>
          </div>

          {/* Step 04 */}
          <div className="checkout-step-card">
            <div className="step-card-num">04</div>
            <div className="step-card-body">
              <div className="step-card-heading">
                <i className="fa-solid fa-car-side step-icon"></i>
                <strong className="step-card-title">Hỗ trợ xe đưa đón &amp; giữ hành lý</strong>
              </div>
              <p className="step-card-desc">Homestay hỗ trợ đặt xe ra sân bay / bến xe và nhận giữ hành lý miễn phí trong ngày.</p>
            </div>
          </div>
        </div>

        {/* Farewell Footer */}
        <div className="checkout-footer">
          <span>HẸN GẶP LẠI BẠN TẠI GAJO&apos;S HOUSE</span>
          <span className="farewell-arrow">CHÚC BẠN VẠN DẶM BÌNH AN &rarr;</span>
        </div>
      </div>
    </PageSheet>
  );
};
