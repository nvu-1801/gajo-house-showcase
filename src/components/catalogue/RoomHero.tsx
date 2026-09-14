import React from 'react';
import { Room } from '@/types/room';

interface RoomHeroProps {
  room: Room;
  onJump?: (pageIndex: number) => void;
}

export const RoomHero: React.FC<RoomHeroProps> = ({ room }) => {
  const roomIndexFormatted = room.index < 10 ? `0${room.index}` : room.index;

  return (
    <div className="hero-editorial-page">
      {room.heroImage ? (
        <img
          className="hero-editorial-img"
          src={room.heroImage}
          alt={room.code}
          loading="lazy"
        />
      ) : (
        <div className="hero-editorial-placeholder">
          <i className="fa-solid fa-camera-retro ph-icon" />
          <span className="ph-code">{room.code}</span>
          <span className="ph-note">HÌNH ẢNH ĐANG CẬP NHẬT</span>
        </div>
      )}

      {/* Subtle vignettes for text legibility without obscuring photography */}
      <div className="hero-vignette-top" />
      <div className="hero-vignette-bottom" />

      {/* Top editorial brand & index counter */}
      <div className="hero-editorial-header">
        <div className="hero-editorial-brand">
          <span className="brand-dot" />
          <span className="brand-title">GAJO&apos;S HOUSE</span>
          <span className="brand-sub">EDITORIAL</span>
        </div>
        <div className="hero-editorial-counter">
          <span>{roomIndexFormatted}</span>
          <span className="counter-sep">/</span>
          <span>09</span>
        </div>
      </div>

      {/* Bottom typography block: pure typography, no heavy card container */}
      <div className="hero-editorial-footer">
        <div className="hero-room-meta">
          <span className="hero-room-personality">{room.personality}</span>
          <h2 className="hero-room-code">{room.code}</h2>
          <span className="hero-room-type">{room.type}</span>
        </div>

        <p className="hero-room-quote">
          &ldquo;{room.tagline}&rdquo;
        </p>

        <div className="hero-price-line">
          <div className="price-num">{room.priceFormatted}</div>
          <div className="price-unit">{room.priceUnit}</div>
        </div>
      </div>
    </div>
  );
};
