import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export interface ExperienceHighlight {
  icon: string;
  title: string;
  badge?: string;
  desc: string;
}

export interface ExperienceGalleryItem {
  src: string;
  label: string;
}

export interface ExperienceData {
  id: string;
  categoryTag: string; // e.g. "IN-HOUSE SERVICES" | "LOCAL PRIVILEGES"
  motto: string; // e.g. "Ấm áp bữa tối sân vườn" | "Trải nghiệm Gia Lai mộc mạc"
  heroImage: string; // Left page full-bleed photo
  heroBrandIcon?: string;
  heroBrandTitle: string; // e.g. "TIỆM NƯỚNG NHÀ GẠO" | "LOCAL GUIDE"
  heroBrandSub: string; // e.g. "IN-HOUSE DINING" | "ẨM THỰC BẢN ĐỊA"
  heroTitle: string; // Floating card title
  heroTagline: string; // Floating card tagline
  heroType: string; // Floating card meta left
  heroPrice: string; // Floating card meta right
  pageIndexLeft: string; // e.g. "12 / 15"
  serviceTitle: string; // Right page main heading
  emotionalDesc: string; // Editorial paragraph
  gallery: [ExperienceGalleryItem, ExperienceGalleryItem]; // Exactly 2 non-duplicate images
  highlights: ExperienceHighlight[];
  footerTag: string;
  ctaText: string;
  ctaSub: string;
  ctaUrl: string;
  ctaQr: string;
}

export const diningExperienceData: ExperienceData = {
  id: 'dining',
  categoryTag: 'IN-HOUSE SERVICES',
  motto: 'Ấm áp bữa tối sân vườn',
  heroImage: 'images/general/tiem-nuong-nha-gao.jpg',
  heroBrandIcon: 'fa-solid fa-fire-burner',
  heroBrandTitle: 'TIỆM NƯỚNG NHÀ GẠO',
  heroBrandSub: 'IN-HOUSE DINING',
  heroTitle: 'Tiệc Nướng BBQ',
  heroTagline: '“Hương vị ấm cúng giữa sân vườn cao nguyên thoáng đãng.”',
  heroType: 'Phục vụ khách lưu trú',
  heroPrice: 'Từ 150.000 VNĐ / SET',
  pageIndexLeft: '13 / 16',
  serviceTitle: 'TIỆM NƯỚNG NHÀ GẠO',
  emotionalDesc: 'Bữa tối BBQ bên bếp than hồng nghi ngút khói giữa không gian sân vườn thoáng đãng. Tận hưởng trọn vẹn những xiên thịt nướng ướp thảo mộc đậm đà cùng người thân trong tiết trời se lạnh của Gia Lai.',
  gallery: [
    {
      src: 'images/general/dining-gajothai.jpg',
      label: 'MÓN NƯỚNG TƯƠI —',
    },
    {
      src: 'images/general/nhagao-1.jpg',
      label: 'BẾP THAN HỒNG —',
    },
  ],
  highlights: [
    {
      icon: 'fa-solid fa-fire',
      title: 'Set Nướng Tự Chọn',
      desc: 'Bò tảng, sườn heo ướp sốt thảo mộc độc quyền và hải sản tươi rói.',
    },
    {
      icon: 'fa-solid fa-wine-glass',
      title: 'Rượu Vang & Trà Ấm',
      desc: 'Tuyển chọn vang dịu nhẹ, craft beer bản địa và trà thảo mộc sân vườn.',
    },
    {
      icon: 'fa-solid fa-guitar',
      title: 'Không Gian Acoustic',
      desc: 'Ánh đèn vàng lung linh cùng giai điệu acoustic mộc mạc, thư thái.',
    },
  ],
  footerTag: 'TIỆM NƯỚNG NHÀ GẠO',
  ctaText: 'ĐẶT BÀN BBQ',
  ctaSub: 'Quét mã Zalo để đặt bàn trước 17:00',
  ctaUrl: 'https://zalo.me',
  ctaQr: 'images/general/qr-maps.png',
};

export const localGuideExperienceData: ExperienceData = {
  id: 'local-guide',
  categoryTag: 'LOCAL PRIVILEGES',
  motto: 'Trải nghiệm Gia Lai mộc mạc',
  heroImage: 'images/general/bonjour-donuts.jpg',
  heroBrandIcon: 'fa-solid fa-map-pin',
  heroBrandTitle: 'LOCAL GUIDE',
  heroBrandSub: 'ẨM THỰC & CẢNH SẮC',
  heroTitle: 'Café Bonjour',
  heroTagline: '“Không gian cà phê & bánh ngọt thủ công đầy thư thái.”',
  heroType: 'Tiệm cà phê & Bánh',
  heroPrice: 'Thức uống & Bánh',
  pageIndexLeft: '14 / 16',
  serviceTitle: 'ĐIỂM CHẠM BẢN ĐỊA',
  emotionalDesc: 'Những điểm đến ẩm thực và cung đường cảnh sắc độc đáo được chọn lọc kỹ lưỡng quanh homestay. Từ ly cà phê ấm nóng góc quán quen đến những khúc đèo lộng gió ngắm biển hoang sơ.',
  gallery: [
    {
      src: 'images/general/cuabien-tamquan.jpg',
      label: 'TAM QUAN (12KM) —',
    },
    {
      src: 'images/general/deo-lodieu.jpg',
      label: 'ĐÈO LỘ DIÊU (18KM) —',
    },
  ],
  highlights: [
    {
      icon: 'fa-solid fa-mug-hot',
      title: 'Café Bonjour',
      badge: '300m • Đi bộ 3p',
      desc: 'Thưởng thức trà Matcha, cà phê đặc sản và bánh ngọt thủ công.',
    },
    {
      icon: 'fa-solid fa-water',
      title: 'Cua Biển Tam Quan',
      badge: '12km • Xe máy 20p',
      desc: 'Hải sản tươi sống mua trực tiếp từ thuyền đánh bắt tại cảng cá.',
    },
    {
      icon: 'fa-solid fa-mountain-sun',
      title: 'Cung Đèo Lộ Diêu',
      badge: '18km • Biển hoang sơ',
      desc: 'Cung đường biển hùng vĩ với bãi cát vàng óng và rạn san hô tự nhiên.',
    },
  ],
  footerTag: 'HƯỚNG DẪN ĐỊA PHƯƠNG',
  ctaText: 'CHỈ ĐƯỜNG',
  ctaSub: 'Quét mã xem vị trí trên Google Maps',
  ctaUrl: 'https://maps.google.com',
  ctaQr: 'images/general/qr-maps.png',
};

interface ExperienceSpreadProps {
  data?: ExperienceData;
}

export const ExperienceSpread: React.FC<ExperienceSpreadProps> = ({
  data = diningExperienceData,
}) => {
  return (
    <>
      {/* LEFT PAGE: 100% FULL-BLEED HEROIC PHOTO */}
      <PageSheet density="soft" isHardCover={true}>
        <div className="hero-spread">
          <img
            className="hero-photo"
            src={data.heroImage}
            alt={data.heroTitle}
            
          />
          <div className="hero-grad-overlay" />

          {/* Top Brand Bar */}
          <div className="hero-top-bar">
            <div className="hero-brand">
              <span className="hb-logo">
                {data.heroBrandIcon && (
                  <i
                    className={data.heroBrandIcon}
                    style={{ color: 'var(--gold)', marginRight: '6px' }}
                  />
                )}
                {data.heroBrandTitle}
              </span>
              <span className="hb-sub">{data.heroBrandSub}</span>
            </div>
          </div>

          {/* Floating Editorial Card */}
          <div className="hero-floating-card">
            <div className="hfc-title">{data.heroTitle}</div>
            <div className="hfc-tagline">{data.heroTagline}</div>
            <div className="hfc-divider" />
            <div className="hfc-meta">
              <span className="hfc-type">{data.heroType}</span>
              <span className="hfc-price">{data.heroPrice}</span>
            </div>
          </div>

          {/* Nav Indicator */}
          <div className="hero-nav-dots">
            <span>{data.pageIndexLeft}</span>
            <span>&larr; &rarr;</span>
          </div>
        </div>
      </PageSheet>

      {/* RIGHT PAGE: EDITORIAL SPREAD MIMICKING ROOM LAYOUT */}
      <PageSheet density="soft" isHardCover={false}>
        <div className="editorial-right-page exp-right-page">
          {/* Header */}
          <div className="ed-page-header">
            <div className="ed-brand">
              <span className="ed-brand-logo">GAJO&apos;S HOUSE</span>
              <span className="ed-brand-dot">•</span>
              <span className="ed-brand-tagline">{data.motto}</span>
            </div>
            <span className="ed-room-index-tag">{data.categoryTag}</span>
          </div>

          {/* Service Title & Emotional Description */}
          <div className="exp-narrative-block">
            <h3 className="exp-service-title">{data.serviceTitle}</h3>
            <p className="exp-emotional-desc">{data.emotionalDesc}</p>
          </div>

          {/* 2-Image Elegant Side-by-Side Gallery (aspect-ratio: 4/3, object-fit: cover) */}
          <div className="exp-gallery-grid">
            {data.gallery.map((item, idx) => (
              <div key={idx} className="exp-gallery-card">
                <img
                  src={item.src}
                  alt={item.label}
                  className="exp-gallery-img"
                  
                />
                <div className="gallery-gradient-overlay">
                  <span className="gallery-caption">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Curated Highlights List */}
          <div className="exp-highlights-list">
            {data.highlights.map((item, idx) => (
              <div key={idx} className="exp-highlight-item">
                <i className={`${item.icon} exp-highlight-icon`} />
                <div className="exp-highlight-text">
                  <div className="exp-highlight-header">
                    <strong className="exp-highlight-title">{item.title}</strong>
                    {item.badge && (
                      <span className="exp-highlight-badge">{item.badge}</span>
                    )}
                  </div>
                  <p className="exp-highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </PageSheet>
    </>
  );
};
