import React from 'react';
import { Room } from '@/types/room';

interface RoomHeroProps {
  room: Room;
  onJump?: (pageIndex: number) => void;
}

export const RoomHero: React.FC<RoomHeroProps> = ({ room }) => {
  const roomIndexFormatted = room.index < 10 ? `0${room.index}` : room.index;
  const meaning = room.stationStory?.meaning || room.personalityVi || room.personality;
  const shortTagline = room.stationStory?.shortTagline || room.tagline;

  return (
    <div className="hero-editorial-page hero-fullbleed">
      {/* Full-bleed hero photography */}
      <div className="hero-bg">
        {room.heroImage ? (
          <img
            className="hero-bg-img"
            src={room.heroImage}
            alt={room.code}
            style={
              {
                ...(room.heroImagePosition
                  ? { objectPosition: room.heroImagePosition }
                  : null),
                ...(room.heroImageZoom != null
                  ? { '--hero-zoom': room.heroImageZoom }
                  : null),
              } as React.CSSProperties
            }
          />
        ) : (
          <div className="hero-editorial-placeholder">
            <i className="fa-solid fa-camera-retro ph-icon" />
            <span className="ph-code">{room.code}</span>
            <span className="ph-note">HÌNH ẢNH ĐANG CẬP NHẬT</span>
          </div>
        )}
        <div className="hero-bg-scrim" aria-hidden="true" />
      </div>

      {/* Overlaid editorial header */}
      <div className="hero-editorial-header hero-header-overlay">
        <div className="hero-editorial-brand">
          <span className="brand-dot" />
          <span className="brand-title">GAJO&apos;S HOUSE</span>
          <span className="brand-sub">09 TRẠM DỪNG CẢM XÚC</span>
        </div>
        <div className="hero-editorial-counter">
          <span>Trạm {roomIndexFormatted}</span>
          <span className="counter-sep">/</span>
          <span>09</span>
        </div>
      </div>

      {/* Floating space badge */}
      <span className="hero-photo-badge hero-badge-float">KHÔNG GIAN CHÍNH</span>

      {/* Overlaid station story & emotional narrative */}
      <div className="hero-station-box hero-station-glass">
        <div className="hero-station-header">
          <div className="hero-station-titles">
            <span className="hero-station-meaning">{meaning}</span>
            <span className="hero-station-tagline">&ldquo;{shortTagline}&rdquo;</span>
          </div>
          <h2 className="hero-station-code">{room.code}</h2>
        </div>

        {room.stationStory?.story && (
          <p className="hero-station-story-text">
            {room.stationStory.story}
          </p>
        )}

        <div className="hero-station-footer">
          <span className="hero-room-type-tag">{room.type}</span>
          <div className="hero-price-tag">
            <span className="price-num">{room.priceFormatted}</span>
            <span className="price-unit">{room.priceUnit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
