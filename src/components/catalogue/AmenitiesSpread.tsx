import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export const AmenitiesSpread: React.FC = () => {
  return (
    <>
      {/* LEFT PAGE */}
      <PageSheet density="soft" isHardCover={false}>
        <div className="editorial-left-page" style={{ padding: '24px 32px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          
          {/* TOP HALF: PHOTO */}
          <div style={{ width: '100%', height: '45%', borderRadius: '8px', overflow: 'hidden', marginBottom: 'var(--space-6)', position: 'relative' }}>
            <img 
              src="/images/general/gajo-sign-wall-night.jpg" 
              alt="GAJO'S HOUSE Hotel & Chill"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }} 
            />
          </div>

          {/* BOTTOM HALF: AMENITIES (LEFT SIDE) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', flex: 1 }}>
            
            <div className="amenity-group">
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal)', marginBottom: '12px', fontSize: '1.1rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Trong Phòng
                <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-sans)', color: 'var(--wood)', letterSpacing: '2px', marginTop: '2px' }}>IN-ROOM</span>
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
                Wi-Fi &middot; Smart TV &middot; Điều hòa Inverter<br />
                Tủ lạnh &middot; Nước lọc &middot; Quạt máy<br />
                Trà &amp; Cà phê &middot; Rèm chống nắng kép
              </p>
            </div>

            <div className="amenity-group">
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal)', marginBottom: '12px', fontSize: '1.1rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Dịch Vụ
                <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-sans)', color: 'var(--wood)', letterSpacing: '2px', marginTop: '2px' }}>SERVICES</span>
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
                Dọn phòng hằng ngày &middot; Đổi khăn<br />
                Giặt sấy lấy nhanh &middot; Thuê xe máy<br />
                Hỗ trợ đặt Taxi &amp; Tour du lịch
              </p>
            </div>

          </div>
        </div>
      </PageSheet>

      {/* RIGHT PAGE */}
      <PageSheet density="soft" isHardCover={false}>
        <div className="editorial-right-page" style={{ padding: '24px 32px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          
          {/* TOP HALF: INTRO */}
          <div style={{ height: '45%', marginBottom: 'var(--space-6)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--charcoal)', letterSpacing: '1px', lineHeight: '1.1', marginBottom: '8px' }}>
              ĐẶC QUYỀN<br />LƯU TRÚ
            </h2>
            <p style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '24px' }}>
              Tiện nghi &amp; Dịch vụ
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '90%' }}>
              Một không gian nghỉ dưỡng tĩnh lặng, riêng tư với những tiện nghi được tuyển chọn kỹ lưỡng. Chúng tôi chăm chút từng chi tiết nhỏ để mang đến cho bạn trải nghiệm thư giãn trọn vẹn nhất tại cao nguyên.
            </p>
          </div>

          {/* BOTTOM HALF: AMENITIES (RIGHT SIDE) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', flex: 1 }}>
            
            <div className="amenity-group">
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal)', marginBottom: '12px', fontSize: '1.1rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Phòng Tắm
                <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-sans)', color: 'var(--wood)', letterSpacing: '2px', marginTop: '2px' }}>BATHROOM</span>
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
                Phòng tắm riêng biệt &middot; Nước nóng 24/7<br />
                Khăn tắm mềm &middot; Sữa tắm thảo mộc<br />
                Bàn chải &middot; Kem đánh răng &middot; Máy sấy tóc
              </p>
            </div>

            <div className="amenity-group">
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--charcoal)', marginBottom: '12px', fontSize: '1.1rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Tiện Ích Chung
                <span style={{ display: 'block', fontSize: '0.65rem', fontFamily: 'var(--font-sans)', color: 'var(--wood)', letterSpacing: '2px', marginTop: '2px' }}>SHARED SPACES</span>
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
                Bãi đỗ ô tô an toàn &middot; Khu sinh hoạt chung<br />
                Sân vườn xanh mát &middot; Không gian nướng BBQ<br />
                Khu vực phơi đồ &middot; An ninh 24/7
              </p>
            </div>

          </div>
        </div>
      </PageSheet>
    </>
  );
};
