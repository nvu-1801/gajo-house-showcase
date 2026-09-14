import React from 'react';
import { Room } from '@/types/room';
import { PageSheet } from '@/components/flipbook/PageSheet';
import { RoomHero } from './RoomHero';
import { RoomGallery } from './RoomGallery';
import { RoomInfoRail } from './RoomInfoRail';
import { RoomAmenities } from './RoomAmenities';
interface RoomSpreadProps {
  room: Room;
  onJump?: (pageIndex: number) => void;
}

export const RoomSpread: React.FC<RoomSpreadProps> = ({ room, onJump }) => {
  return (
    <>
      {/* LEFT PAGE: 65% FULL-BLEED EDITORIAL HERO */}
      <PageSheet density="soft" isHardCover={true}>
        <RoomHero room={room} onJump={onJump} />
      </PageSheet>

      {/* RIGHT PAGE: ASYMMETRIC EDITORIAL DETAILS */}
      <PageSheet density="soft" isHardCover={false}>
        <div className="editorial-right-page">
          {/* Header */}
          <div className="ed-page-header">
            <div className="ed-brand">
              <span className="ed-brand-logo">GAJO&apos;S HOUSE</span>
              <span className="ed-brand-dot">•</span>
              <span className="ed-brand-tagline">A cozy stay, a better you</span>
            </div>
            <span className="ed-room-index-tag">{room.code}</span>
          </div>

          {/* Asymmetric Gallery */}
          <RoomGallery galleryTop={room.galleryTop} gallerySub={room.gallerySub} />

          {/* Editorial Specs Rail */}
          <RoomInfoRail specs={room.specs} />

          {/* Curated 6-8 Amenities */}
          <RoomAmenities amenities={room.curatedAmenities} />

        </div>
      </PageSheet>
    </>
  );
};
