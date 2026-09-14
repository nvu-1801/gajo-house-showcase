import React from 'react';

interface RoomIndexRailProps {
  currentRoomIndex: number; // 1 to 9
  onJump?: (pageIndex: number) => void;
}

export const RoomIndexRail: React.FC<RoomIndexRailProps> = ({ currentRoomIndex, onJump }) => {
  // Page mapping: Room 1 -> Page 3, Room 2 -> Page 5, ..., Room 9 -> Page 19
  const getRoomPage = (idx: number) => 3 + (idx - 1) * 2;

  return (
    <div className="room-index-rail">
      <span className="ri-title">
        ROOM<br />INDEX
      </span>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => {
        const page = getRoomPage(idx);
        const isActive = idx === currentRoomIndex;
        return (
          <span
            key={idx}
            className={`ri-item ${isActive ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onJump?.(page);
            }}
            title={`Chuyển đến phòng 0${idx}`}
          >
            {idx < 10 ? `0${idx}` : idx}
          </span>
        );
      })}
    </div>
  );
};
