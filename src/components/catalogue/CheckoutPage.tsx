import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export const CheckoutPage: React.FC = () => {
  return (
    <PageSheet density="soft" isHardCover={false}>
      <div className="checkout-editorial-page">
        <div className="checkout-header">
          <span className="checkout-eyebrow">DEPARTURE NOTES</span>
          <h2 className="checkout-title">BEFORE YOU LEAVE</h2>
          <p className="checkout-sub">Một vài điều nhỏ trước khi bạn tiếp tục hành trình mới</p>
        </div>

        <div className="checkout-review-card">
          <div className="review-stars">&starf; &starf; &starf; &starf; &starf;</div>
          <h4 className="review-prompt">Loved your stay?</h4>
          <p className="review-desc">
            Hãy để lại đánh giá 5★ trên Google Maps để nhận ngay <strong>Voucher BBQ 50.000 VNĐ</strong> cho lần ghé thăm kế tiếp!
          </p>
        </div>

        <div className="checkout-steps">
          <div className="step-item">
            <span className="step-idx">01</span>
            <p>Gửi lại chìa khóa tại quầy lễ tân hoặc khay check-out tự động.</p>
          </div>
          <div className="step-item">
            <span className="step-idx">02</span>
            <p>Kiểm tra lại tư trang, sạc điện thoại và giấy tờ tùy thân.</p>
          </div>
          <div className="step-item">
            <span className="step-idx">03</span>
            <p>Homestay hỗ trợ đặt xe đưa đón và gửi hành lý miễn phí trong ngày.</p>
          </div>
        </div>

        <div className="checkout-footer">
          <span>HẸN GẶP LẠI BẠN TẠI GAJO&apos;S HOUSE</span>
          <span>CHÚC BẠN VẠN DẶM BÌNH AN &rarr;</span>
        </div>
      </div>
    </PageSheet>
  );
};
