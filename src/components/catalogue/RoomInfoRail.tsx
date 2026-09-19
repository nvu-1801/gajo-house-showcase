import React from 'react';
import { RoomSpec } from '@/types/room';

interface RoomInfoRailProps {
  specs: RoomSpec[];
}

export const RoomInfoRail: React.FC<RoomInfoRailProps> = ({ specs }) => {
  return (
    <div className="info-rail-editorial">
      {specs.map((spec, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <div className="rail-divider" />}
          <div className={`rail-col ${idx === 1 ? 'rail-col-main' : 'rail-col-side'}`}>
            <span className="rail-val">{spec.value}</span>
            <span className="rail-lbl">{spec.label}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
