import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export interface ExperienceHighlight {
  icon: string;
  title: string;
  badge?: string;
  desc: string;
  logo?: string;
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
  heroImage: '/images/general/tiem-nuong-nha-gao.jpg',
  heroBrandIcon: 'fa-solid fa-fire-burner',
  heroBrandTitle: 'TIỆM NƯỚNG NHÀ GẠO',
  heroBrandSub: 'IN-HOUSE DINING',
  heroTitle: 'Tiệc Nướng BBQ',
  heroTagline: '“Hương vị ấm cúng giữa sân vườn cao nguyên thoáng đãng.”',
  heroType: 'Phục vụ khách lưu trú',
  heroPrice: 'Từ 150.000 VNĐ / SET',
  pageIndexLeft: '13 / 16',
  serviceTitle: 'TIỆM NƯỚNG NHÀ GẠO',
  emotionalDesc: 'Bữa tối BBQ bên bếp than hồng nghi ngút khói giữa không gian sân vườn thoáng đãng. Tận hưởng trọn vẹn những xiên thịt nướng ướp thảo mộc đậm đà cùng người thân trong tiết trời lộng gió của Hoài Nhơn.',
  gallery: [
    {
      src: '/images/general/dining-gajothai.jpg',
      label: 'MÓN NƯỚNG TƯƠI —',
    },
    {
      src: '/images/general/nhagao-1.jpg',
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
  ctaQr: '/images/general/qr-maps.png',
};

export const localGuideExperienceData: ExperienceData = {
  id: 'local-guide',
  categoryTag: 'LOCAL PRIVILEGES',
  motto: 'Trải nghiệm Hoài Nhơn mộc mạc',
  heroImage: '/images/general/bonjour-donuts.jpg',
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
      src: '/images/general/cuabien-tamquan.jpg',
      label: 'TAM QUAN (12KM) —',
    },
    {
      src: '/images/general/deo-lodieu.jpg',
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
      icon: 'fa-solid fa-beer-mug-empty',
      title: 'Quán Nhậu A Mãi',
      badge: '300m • Đi bộ 3p',
      desc: 'Mồi ngon xứ Nẫu đậm đà, bia ướp lạnh sảng khoái — điểm tụ họp ăn tối và lai rai bình dân gần homestay.',
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
  ctaQr: '/images/general/qr-maps.png',
};

const renderHighlightIcon = (item: ExperienceHighlight) => {
  if (item.logo) {
    return <img src={item.logo} alt={item.title} className="exp-highlight-logo" />;
  }

  const iconStr = item.icon || '';

  // Flame / BBQ / Fire
  if (iconStr.includes('fire') || iconStr.includes('grill') || iconStr.includes('flame')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2c-.67 0-1.28.37-1.58.96C8.82 6.13 6 10.42 6 14.5 6 18.09 8.69 21 12 21s6-2.91 6-6.5c0-4.08-2.82-8.37-4.42-11.54A1.75 1.75 0 0 0 12 2zm0 16.5c-1.93 0-3.5-1.57-3.5-3.5 0-1.78 1.4-3.76 2.38-5.07.56.76 1.12 1.6 1.12 2.57 0 1.1.9 2 2 2 .42 0 .81-.13 1.13-.36-.31 2.51-1.63 4.36-3.13 4.36z" />
      </svg>
    );
  }

  // Wine / Drinks / Bar
  if (iconStr.includes('wine') || iconStr.includes('glass') || iconStr.includes('drink')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6 3h12a1 1 0 0 1 1 1c0 4.42-3.13 8-7 8s-7-3.58-7-8a1 1 0 0 1 1-1zm5 10.93V19H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-5.07C16.87 13.43 20 9.87 20 5.5A2.5 2.5 0 0 0 17.5 3H6.5A2.5 2.5 0 0 0 4 5.5c0 4.37 3.13 7.93 7 8.43z" />
      </svg>
    );
  }

  // Acoustic / Guitar / Music
  if (iconStr.includes('guitar') || iconStr.includes('music')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.99 3.12a1 1 0 0 0-1.28-.77l-9 2.5A1 1 0 0 0 9 5.81v9.42A4.47 4.47 0 0 0 6.5 15C4.015 15 2 16.79 2 19s2.015 4 4.5 4S11 21.21 11 19v-9.69l7-1.94v5.86A4.47 4.47 0 0 0 15.5 13c-2.485 0-4.5 1.79-4.5 4s2.015 4 4.5 4 4.5-1.79 4.5-4V4a1 1 0 0 0-.01-.88z" />
      </svg>
    );
  }

  // Coffee / Tea / Mug
  if (iconStr.includes('mug') || iconStr.includes('coffee') || iconStr.includes('tea')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M2 19h18a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm16-14h1a4 4 0 0 1 0 8h-1v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5h16zm-2 2H4v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7zm2 2v2h1a2 2 0 1 0 0-4h-1v2z" />
      </svg>
    );
  }

  // Beer
  if (iconStr.includes('beer')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5 2h10a2 2 0 0 1 2 2v14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V4a2 2 0 0 1 2-2zm12 5h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-2v-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2V7z" />
      </svg>
    );
  }

  // Mountain / Sightseeing / Scenic
  if (iconStr.includes('mountain') || iconStr.includes('map') || iconStr.includes('pin')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8.5 7.5L9 9l5 6.5h-2.5L14 19H3l2.5-5.5zm8 0l2.5-3.5 5 7H11l2.5-3.5z" />
      </svg>
    );
  }

  return <i className={item.icon} />;
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
                <img
                  src="/images/general/logo-mark-dark.png"
                  alt="GAJO"
                  className="hero-brand-logo-mark"
                />
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
              <img
                src="/images/general/logo-mark-dark.png"
                alt="GAJO"
                className="ed-brand-logo-mark"
              />
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
                <span className="exp-highlight-icon">
                  {renderHighlightIcon(item)}
                </span>
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
