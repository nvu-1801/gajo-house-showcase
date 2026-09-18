import React from 'react';
import { rooms } from '@/data/rooms';

interface RoomIndexProps {
  onJump?: (pageIndex: number) => void;
}

export const RoomIndex: React.FC<RoomIndexProps> = ({ onJump }) => {
  // Page mapping: Room 1 -> Page 3, Room 2 -> Page 5, ..., Room 9 -> Page 19
  const getRoomPage = (idx: number) => 3 + (idx - 1) * 2;

  return (
    <div 
      className="room-index-page"
      onPointerDown={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="index-header">
        <span className="index-eyebrow">ROOM DIRECTORY</span>
        <h3 className="index-title">FIND YOUR ROOM</h3>
        <p className="index-desc">Chạm vào phòng bạn yêu thích để khám phá chi tiết</p>
      </div>

      <div className="index-grid">
        {rooms.map((r) => {
          const targetPage = getRoomPage(r.index);
          return (
            <div
              key={r.id}
              className="index-card"
              onClick={(e) => {
                e.stopPropagation();
                onJump?.(targetPage);
              }}
              onPointerDown={(e) => e.stopPropagation()}
              title={`Xem ${r.code} - ${r.type}`}
            >
              <div className="index-thumb">
                <img src={r.heroImage || '/images/general/gajo-interior.jpg'} alt={r.code} />
              </div>
              <div className="index-info">
                <span className="index-room-name">{r.code}</span>
                <span className="index-person">{r.personality}</span>
                <span className="index-price">{r.priceFormatted} <small>đ</small></span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="index-footer">
        <span>GAJO&apos;S HOUSE &bull; GIA LAI</span>
        <span>LẬT TIẾP ĐỂ XEM CHI TIẾT &rarr;</span>
      </div>
    </div>
  );
};
