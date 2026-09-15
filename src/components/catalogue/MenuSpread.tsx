import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export const MenuSpread: React.FC = () => {
  return (
    <>
      {/* LEFT PAGE: FULL BLEED PHOTO */}
      <PageSheet density="soft" isHardCover={true}>
        <div className="menu-hero-page">
          <img
            src="images/general/dining-gajothai.jpg"
            alt="From Our Kitchen"
            className="menu-hero-img"
          />
          {/* Subtle gradient just to ensure white text is readable if placed at corners */}
          <div className="menu-hero-overlay" />
          
          <div className="menu-hero-content">
            <p className="menu-hero-subtitle">EAT. DRINK. STAY.</p>
            <h2 className="menu-hero-title">FROM OUR<br />KITCHEN</h2>
          </div>
        </div>
      </PageSheet>

      {/* RIGHT PAGE: MINIMAL TYPOGRAPHIC MENU */}
      <PageSheet density="soft" isHardCover={false}>
        <div className="menu-editorial-page">
          {/* Header to match editorial consistency */}
          <div className="ed-page-header">
            <div className="ed-brand">
              <span className="ed-brand-logo">GAJO&apos;S HOUSE</span>
              <span className="ed-brand-dot">•</span>
              <span className="ed-brand-tagline">Hương vị mộc mạc</span>
            </div>
            <span className="ed-room-index-tag">THE MENU</span>
          </div>

          <div className="menu-content-wrapper">
            {/* FOOD SECTION */}
            <div className="menu-section">
              
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">GAJO BBQ SET</span>
                  <div className="menu-item-line"></div>
                  <span className="menu-item-price">450K</span>
                </div>
                <p className="menu-item-desc">Thịt bò tảng, sườn heo ướp sốt thảo mộc độc quyền & rau củ nướng</p>
              </div>

              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">LOCAL BREAKFAST</span>
                  <div className="menu-item-line"></div>
                  <span className="menu-item-price">120K</span>
                </div>
                <p className="menu-item-desc">Bún phở đặc sản địa phương, trứng ốp la & bánh mì thủ công</p>
              </div>

              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">SEASONAL SNACKS</span>
                  <div className="menu-item-line"></div>
                  <span className="menu-item-price">85K</span>
                </div>
                <p className="menu-item-desc">Trái cây theo mùa, khoai lang nướng than & hạt mắc ca Gia Lai</p>
              </div>
            </div>

            {/* MINIMAL SEPARATOR */}
            <div className="menu-separator"></div>

            {/* BEVERAGE SECTION */}
            <div className="menu-section">
              <h3 className="menu-section-title">BEVERAGE</h3>
              
              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">VIETNAMESE COFFEE</span>
                  <div className="menu-item-line"></div>
                  <span className="menu-item-price">55K</span>
                </div>
                <p className="menu-item-desc">Cà phê phin truyền thống rang xay mộc từ nông trại địa phương</p>
              </div>

              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">HERBAL TEA</span>
                  <div className="menu-item-line"></div>
                  <span className="menu-item-price">60K</span>
                </div>
                <p className="menu-item-desc">Trà thảo mộc an thần, hoa cúc & gừng ấm nóng</p>
              </div>

              <div className="menu-item">
                <div className="menu-item-header">
                  <span className="menu-item-name">FRESH JUICE</span>
                  <div className="menu-item-line"></div>
                  <span className="menu-item-price">65K</span>
                </div>
                <p className="menu-item-desc">Nước ép trái cây tươi mát theo mùa, không đường tinh luyện</p>
              </div>
            </div>
            
            <div className="menu-footer">
              <p>* Vui lòng đặt Set BBQ trước 17:00 hằng ngày.</p>
            </div>
          </div>
        </div>
      </PageSheet>
    </>
  );
};
