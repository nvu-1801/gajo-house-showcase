import React from 'react';

interface BookingCTAProps {
  roomCode: string;
  priceFormatted: string;
  priceUnit: string;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({
  roomCode,
  priceFormatted,
  priceUnit,
}) => {
  return (
    <div className="booking-cta-editorial">
      <div className="cta-price-box">
        <span className="cta-price-val">{priceFormatted}</span>
        <span className="cta-price-unit">{priceUnit}</span>
      </div>

      <div className="cta-action-group">
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-editorial-btn"
        >
          <span>ĐẶT PHÒNG</span>
          <i className="fa-solid fa-arrow-right" />
        </a>

        <div className="cta-qr-thumb" title="Quét mã Zalo để đặt phòng trực tiếp">
          <img src="images/general/qr-maps.png" alt="Zalo QR" />
        </div>
      </div>
    </div>
  );
};
