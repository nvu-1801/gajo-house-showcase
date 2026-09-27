import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

interface AmenityGroupProps {
  title: string;
  sub: string;
  lines: string[];
}

const AmenityGroup: React.FC<AmenityGroupProps> = ({ title, sub, lines }) => (
  <div className="amenity-group">
    <h3 className="amenity-group-title">
      {title}
      <span className="amenity-group-sub">{sub}</span>
    </h3>
    <p className="amenity-group-lines">
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  </div>
);

export const AmenitiesSpread: React.FC = () => {
  return (
    <>
      {/* LEFT PAGE */}
      <PageSheet density="soft" isHardCover={false}>
        <div className="stay-bg">
          <div className="stay-content amenity-page-grid" style={{ padding: '24px 32px' }}>
            <div className="amenity-top-media">
              <img src="/images/general/gajo-sign-wall-night.jpg" alt="GAJO'S HOUSE Hotel & Chill" />
            </div>

            <div className="amenities-groups">
              <AmenityGroup
                title="Trong Phòng"
                sub="IN-ROOM"
                lines={[
                  'Wi-Fi \u00b7 Smart TV \u00b7 Điều hòa Inverter',
                  'Tủ lạnh \u00b7 Nước lọc \u00b7 Quạt máy',
                  'Trà & Cà phê \u00b7 Rèm chống nắng kép',
                ]}
              />
              <AmenityGroup
                title="Dịch Vụ"
                sub="SERVICES"
                lines={[
                  'Dọn phòng hằng ngày \u00b7 Đổi khăn',
                  'Giặt sấy lấy nhanh \u00b7 Thuê xe máy',
                  'Hỗ trợ đặt Taxi & Tour du lịch',
                ]}
              />
            </div>
          </div>
        </div>
      </PageSheet>

      {/* RIGHT PAGE */}
      <PageSheet density="soft" isHardCover={false}>
        <div className="stay-bg">
          <div className="stay-content amenity-page-grid" style={{ padding: '24px 32px' }}>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--charcoal)', letterSpacing: '1px', lineHeight: '1.1', marginBottom: '8px' }}>
                ĐẶC QUYỀN<br />LƯU TRÚ
              </h2>
              <p style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '24px' }}>
                Tiện nghi &amp; Dịch vụ
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '90%', margin: 0 }}>
                Một không gian nghỉ dưỡng tĩnh lặng, riêng tư với những tiện nghi được tuyển chọn kỹ lưỡng. Chúng tôi chăm chút từng chi tiết nhỏ để mang đến cho bạn trải nghiệm thư giãn trọn vẹn nhất tại cao nguyên.
              </p>
            </div>

            <div className="amenities-groups">
              <AmenityGroup
                title="Phòng Tắm"
                sub="BATHROOM"
                lines={[
                  'Phòng tắm riêng biệt \u00b7 Nước nóng 24/7',
                  'Khăn tắm mềm \u00b7 Sữa tắm thảo mộc',
                  'Bàn chải \u00b7 Kem đánh răng \u00b7 Máy sấy tóc',
                ]}
              />
              <AmenityGroup
                title="Tiện Ích Chung"
                sub="SHARED SPACES"
                lines={[
                  'Bãi đỗ ô tô an toàn \u00b7 Khu sinh hoạt chung',
                  'Sân vườn xanh mát \u00b7 Không gian nướng BBQ',
                  'Khu vực phơi đồ \u00b7 An ninh 24/7',
                ]}
              />
            </div>
          </div>
        </div>
      </PageSheet>
    </>
  );
};
