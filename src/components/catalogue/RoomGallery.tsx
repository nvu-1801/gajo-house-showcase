import React from 'react';
import { GalleryItem } from '@/types/room';

interface RoomGalleryProps {
  galleryTop: GalleryItem | null;
  gallerySub: GalleryItem[];
}

export const RoomGallery: React.FC<RoomGalleryProps> = ({ galleryTop, gallerySub }) => {
  const subItem0 = gallerySub[0];
  const subItem1 = gallerySub[1];

  return (
    <div className="room-gallery-grid">
      {/* Image 1 (Main/Top Hero): Spans 2 columns, aspect-ratio 16/9 */}
      <div className="gallery-item gallery-item-hero">
        {galleryTop?.src ? (
          <>
            <img
              src={galleryTop.src}
              alt={galleryTop.label || 'Toàn cảnh phòng'}
              className="gallery-image"
              
              style={{ objectPosition: galleryTop.objectPosition || 'center' }}
            />
            <div className="gallery-gradient-overlay">
              <span className="gallery-caption">{galleryTop.label}</span>
            </div>
          </>
        ) : (
          <div className="gallery-placeholder">
            <i className="fa-solid fa-image" />
            <span>TOÀN CẢNH — ĐANG CẬP NHẬT</span>
          </div>
        )}
      </div>

      {/* Image 2 (Bottom Left): Span 1 column, aspect-ratio 4/3 */}
      <div className="gallery-item gallery-item-sub">
        {subItem0?.src ? (
          <>
            <img
              src={subItem0.src}
              alt={subItem0.label || 'Chi tiết không gian'}
              className="gallery-image"
              
              style={{ objectPosition: subItem0.objectPosition || 'center' }}
            />
            <div className="gallery-gradient-overlay">
              <span className="gallery-caption">{subItem0.label}</span>
            </div>
          </>
        ) : (
          <div className="gallery-placeholder">
            <i className="fa-solid fa-image" />
            <span>GÓC PHÒNG</span>
          </div>
        )}
      </div>

      {/* Image 3 (Bottom Right): Span 1 column, aspect-ratio 4/3 */}
      <div className="gallery-item gallery-item-sub">
        {subItem1?.src ? (
          <>
            <img
              src={subItem1.src}
              alt={subItem1.label || 'Chi tiết nội thất'}
              className="gallery-image"
              
              style={{ objectPosition: subItem1.objectPosition || 'center' }}
            />
            <div className="gallery-gradient-overlay">
              <span className="gallery-caption">{subItem1.label}</span>
            </div>
          </>
        ) : (
          <div className="gallery-placeholder">
            <i className="fa-solid fa-image" />
            <span>CHI TIẾT</span>
          </div>
        )}
      </div>
    </div>
  );
};
