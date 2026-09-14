import React from 'react';

interface RoomAmenitiesProps {
  amenities: string[];
}

export const RoomAmenities: React.FC<RoomAmenitiesProps> = ({ amenities }) => {
  return (
    <div className="amenities-editorial-block">
      <div className="amenities-title">TIỆN NGHI CHỌN LỌC</div>
      <div className="amenities-grid">
        {amenities.map((item, idx) => (
          <div key={idx} className="amenity-item">
            <span className="amenity-bullet">•</span>
            <span className="amenity-name">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
