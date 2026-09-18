import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

export const MenuSpread: React.FC = () => {
  return (
    <>
      {/* ==================== LEFT PAGE: THE TASTE OF GAJO ==================== */}
      <PageSheet density="soft" isHardCover={false}>
        <div className="menu-ed-page">
          {/* Editorial Header */}
          <div className="ed-page-header">
            <div className="ed-brand">
              <span className="ed-brand-logo">GAJO&apos;S HOUSE</span>
              <span className="ed-brand-dot">•</span>
              <span className="ed-brand-tagline">Hương vị mộc mạc</span>
            </div>
            <span className="ed-room-index-tag">01 / MORNING &amp; SIPS</span>
          </div>

          {/* Hero Visual Duo: Asymmetric Editorial Balance */}
          <div className="menu-visual-duo">
            <div className="menu-visual-box">
              <img
                src="/images/general/dining-gajothai.jpg"
                alt="The Taste of Gajo"
              />
              <span className="menu-visual-badge">GAJO&apos;S KITCHEN</span>
            </div>
            <div className="menu-visual-box">
              <img
                src="/images/general/cafe-gaocoffee.jpg"
                alt="Coffee &amp; Tea Sips"
              />
              <span className="menu-visual-sublabel">SLOW MORNING</span>
            </div>
          </div>

          {/* Editorial Title Block */}
          <div className="menu-title-block">
            <span className="menu-eyebrow">FROM OUR KITCHEN TO TABLE</span>
            <h2 className="menu-main-title">THE TASTE OF GAJO</h2>
            <p className="menu-motto">“Local flavours, slow moments.”</p>
          </div>

          {/* 01 — LOCAL BREAKFAST */}
          <div className="menu-breakfast-box">
            <div className="breakfast-top">
              <div className="menu-sec-bar clean-sec-bar">
                <span className="menu-sec-num">01</span>
                <span className="menu-sec-title">LOCAL BREAKFAST</span>
              </div>
              <span className="breakfast-badge">ĐIỂM TÂM BẢN ĐỊA</span>
            </div>
            <p className="breakfast-quote">
              Phục vụ các món đặc sản địa phương thay đổi theo ngày:
            </p>
            <div className="breakfast-dishes">
              <span>Phở khô Gia Lai</span>
              <span className="dish-sep">✦</span>
              <span>Bún chả cá</span>
              <span className="dish-sep">✦</span>
              <span>Bánh hỏi lòng heo</span>
              <span className="dish-sep">✦</span>
              <span>Bò né</span>
            </div>
            <p className="breakfast-hint">
              * Ask our team for today&apos;s morning selection.
            </p>
          </div>

          {/* 02 & 03 — DRINKS (DUAL COLUMNS) */}
          <div className="menu-drinks-dual">
            {/* Coffee & Tea */}
            <div className="drinks-col">
              <div className="menu-sec-bar">
                <span className="menu-sec-num">02</span>
                <span className="menu-sec-title">COFFEE &amp; TEA</span>
              </div>
              <div className="menu-price-table">
                <div className="menu-price-item">
                  <span className="menu-item-text">Cà phê đen</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-val">20K</span>
                </div>
                <div className="menu-price-item">
                  <span className="menu-item-text">Cà phê sữa</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-val">23K</span>
                </div>
                <div className="menu-price-item">
                  <span className="menu-item-text">Cà phê kem trứng</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-val">30K</span>
                </div>
                <div className="menu-price-item">
                  <span className="menu-item-text">Trà me</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-val">33K</span>
                </div>
                <div className="menu-price-item">
                  <span className="menu-item-text">Trà đào</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-val">32K</span>
                </div>
              </div>
            </div>

            {/* Juice & Soda */}
            <div className="drinks-col">
              <div className="menu-sec-bar">
                <span className="menu-sec-num">03</span>
                <span className="menu-sec-title">JUICE &amp; SODA</span>
              </div>
              <div className="menu-price-table">
                <div className="menu-price-item">
                  <span className="menu-item-text">Ép cam tươi</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-val">27K</span>
                </div>
                <div className="menu-price-item">
                  <span className="menu-item-text">Soda bạc hà</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-val">30K</span>
                </div>
                <div className="menu-price-item">
                  <span className="menu-item-text">Soda blue</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-val">30K</span>
                </div>
                <div className="menu-price-item">
                  <span className="menu-item-text">Soda việt quất</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-val">30K</span>
                </div>
                <div className="menu-price-item">
                  <span className="menu-item-text">Soda đào</span>
                  <span className="menu-item-dots"></span>
                  <span className="menu-item-val">30K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSheet>

      {/* ==================== RIGHT PAGE: GATHER AROUND THE TABLE ==================== */}
      <PageSheet density="soft" isHardCover={false}>
        <div className="menu-ed-page">
          {/* Editorial Header */}
          <div className="ed-page-header">
            <div className="ed-brand">
              <span className="ed-brand-logo">GAJO&apos;S HOUSE</span>
              <span className="ed-brand-dot">•</span>
              <span className="ed-brand-tagline">Tiệc tối sân vườn</span>
            </div>
            <span className="ed-room-index-tag">02 / EVENING GATHERING</span>
          </div>

          {/* Evening Header & BBQ Visual Hero */}
          <div className="menu-evening-header-grid">
            <div className="evening-title-col">
              <span className="menu-eyebrow">BBQ &middot; HOT POT &middot; SHARING</span>
              <h2 className="menu-main-title">GATHER AROUND<br />THE TABLE</h2>
              <p className="menu-motto">
                Bữa tối ấm cúng bên bếp than hồng và hương vị kết nối.
              </p>
            </div>
            <div className="evening-banner-img-box">
              <img
                src="/images/general/nhagao-2.jpg"
                alt="BBQ Gathering Table"
              />
              <span className="evening-banner-caption">TIỆM NƯỚNG NHÀ GẠO</span>
            </div>
          </div>

          {/* 04 — SIGNATURE SET MENU (4 SETS) */}
          <div className="menu-sec-wrap">
            <div className="menu-sec-bar">
              <span className="menu-sec-num">04</span>
              <span className="menu-sec-title">SIGNATURE SET MENU</span>
            </div>
            <div className="menu-sets-grid">
              {/* SET 01 */}
              <div className="menu-set-card">
                <div className="set-card-header">
                  <div className="set-card-title-wrap">
                    <span className="set-card-name">SET <span className="card-num">01</span></span>
                    <span className="set-card-serves">2–3 KHÁCH</span>
                  </div>
                  <span className="set-card-price">215.000đ</span>
                </div>
                <p className="set-card-items">
                  Khoai tây chiên &middot; Salad nhà gạo &middot; Cơm chiên phỉ thúy &middot; Canh Tomyum
                </p>
              </div>

              {/* SET 02 */}
              <div className="menu-set-card">
                <div className="set-card-header">
                  <div className="set-card-title-wrap">
                    <span className="set-card-name">SET <span className="card-num">02</span></span>
                    <span className="set-card-serves">3–4 KHÁCH</span>
                  </div>
                  <span className="set-card-price">315.000đ</span>
                </div>
                <p className="set-card-items">
                  Khoai sọ lệ phố &middot; Salad &middot; Cơm chiên / Udon &middot; Nghêu sốt Thái &middot; Tôm rang muối
                </p>
              </div>

              {/* SET 03 */}
              <div className="menu-set-card highlight-set">
                <div className="set-card-header">
                  <div className="set-card-title-wrap">
                    <span className="set-card-name">SET <span className="card-num">03</span></span>
                    <span className="set-card-serves highlight-serves">THỊNH SOẠN</span>
                  </div>
                  <span className="set-card-price">499.000đ</span>
                </div>
                <p className="set-card-items">
                  Nghêu sốt Thái &middot; Tôm rang muối &middot; Vây cá hồi &middot; Ba chỉ bò BBQ &middot; Lẩu Thái hải sản
                </p>
              </div>

              {/* BEER CHILL */}
              <div className="menu-set-card">
                <div className="set-card-header">
                  <div className="set-card-title-wrap">
                    <span className="set-card-name">BEER CHILL</span>
                    <span className="set-card-serves">NHÂM NHI</span>
                  </div>
                  <span className="set-card-price">499.000đ</span>
                </div>
                <p className="set-card-items">
                  Chả ram tôm đất &middot; Gỏi nghêu &middot; Mực chiên giòn &middot; Bẹ sữa nướng &middot; Lẩu gà lá giang
                </p>
              </div>
            </div>
          </div>

          {/* 05 — FROM THE GRILL */}
          <div className="menu-sec-wrap">
            <div className="menu-sec-bar">
              <span className="menu-sec-num">05</span>
              <span className="menu-sec-title">FROM THE GRILL</span>
            </div>
            <div className="menu-grill-duo">
              <div className="menu-combo-card">
                <div className="combo-card-header">
                  <div className="combo-card-title-wrap">
                    <span className="combo-card-name">COMBO <span className="card-num">01</span></span>
                    <span className="combo-card-serves">2–3 KHÁCH</span>
                  </div>
                  <span className="combo-card-price">279.000đ</span>
                </div>
                <p className="combo-card-items">
                  Tomyum &middot; Ba chỉ bò cuộn &middot; Cánh gà nướng &middot; Hàu nướng mỡ hành
                </p>
              </div>

              <div className="menu-combo-card">
                <div className="combo-card-header">
                  <div className="combo-card-title-wrap">
                    <span className="combo-card-name">COMBO <span className="card-num">02</span></span>
                    <span className="combo-card-serves">3–4 KHÁCH</span>
                  </div>
                  <span className="combo-card-price">389.000đ</span>
                </div>
                <p className="combo-card-items">
                  Ba chỉ bò &middot; Mực baby &middot; Tôm nướng thảo&nbsp;mộc &middot; Lẩu hải sản
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Footnote */}
          <div className="menu-editorial-foot">
            <span className="foot-ornament">✦ &bull; ✦</span>
            <p>* Vui lòng đặt trước 17:00 hằng ngày để bếp tuyển chọn nguyên liệu tươi ngon nhất.</p>
          </div>
        </div>
      </PageSheet>
    </>
  );
};
