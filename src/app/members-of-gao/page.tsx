'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './members-of-gao.module.css';

interface BranchItem {
  number: string;
  name: string;
  category: string;
  distance: string;
  tagline: string;
  highlights: string[];
  address: string;
  phone: string;
  images: string[];
}

interface SpotlightItem {
  number: string;
  name: string;
  category: string;
  distance: string;
  tagline: string;
  highlights: string[];
  address: string;
  phone: string;
  image: string;
}

interface CuisineItem {
  number: string;
  name: string;
  badge: string;
  tagline: string;
  highlights: string[];
  location: string;
  image: string;
}

interface TravelItem {
  number: string;
  name: string;
  badge: string;
  tagline: string;
  highlights: string[];
  location: string;
  image: string;
}

interface StationItem {
  id: string;
  name: string;
  meaning: string;
  tagline: string;
  image: string;
  type: string;
  area: string;
  price: string;
}

const STATIONS: StationItem[] = [
  {
    id: 'AN',
    name: 'GA-AN',
    meaning: 'An yên',
    tagline: 'tìm bình yên',
    image: '/images/ga-an/ga-an-hero.jpg',
    type: 'Double',
    area: '22 m²',
    price: '400K',
  },
  {
    id: 'MO',
    name: 'GA-MO',
    meaning: 'Mơ',
    tagline: 'cho phép mình mơ',
    image: '/images/ga-mo/ga-mo-hero.jpg',
    type: 'Modern',
    area: '25 m²',
    price: '400K',
  },
  {
    id: 'DINH',
    name: 'GA-DINH',
    meaning: 'Gia đình',
    tagline: 'ở bên người thương',
    image: '/images/ga-dinh/IMG_3093.jpg',
    type: 'Family',
    area: '35 m²',
    price: '500K',
  },
  {
    id: 'GIO',
    name: 'GA-GIO',
    meaning: 'Gió',
    tagline: 'đón lấy tự do',
    image: '/images/ga-gio/IMG_6030.jpg',
    type: 'Breeze',
    area: '28 m²',
    price: '500K',
  },
  {
    id: 'MAY',
    name: 'GA-MAY',
    meaning: 'Mây',
    tagline: 'học cách chậm lại',
    image: '/images/ga-may/ga-may-hero.jpg',
    type: 'Cloud',
    area: '20 m²',
    price: '500K',
  },
  {
    id: 'NANG',
    name: 'GA-NANG',
    meaning: 'Nắng',
    tagline: 'tìm chút ấm áp',
    image: '/images/ga-nang/IMG_5982.jpg',
    type: 'Sunshine',
    area: '30 m²',
    price: '500K',
  },
  {
    id: 'MOC',
    name: 'GA-MOC',
    meaning: 'Mộc',
    tagline: 'trở về với chính mình',
    image: '/images/ga-moc/hero-new.jpg',
    type: 'VIP Suite',
    area: '35 m²',
    price: '1.000K',
  },
  {
    id: 'TRON',
    name: 'GA-TRON',
    meaning: 'Trốn',
    tagline: 'trốn khỏi bộn bề',
    image: '/images/ga-tron/IMG_6008.jpg',
    type: 'Cozy',
    area: '24 m²',
    price: '450K',
  },
  {
    id: 'LAC',
    name: 'GA-LAC',
    meaning: 'Lạc',
    tagline: 'lạc vào nơi muốn ở lại',
    image: '/images/ga-lac/IMG_6887.png',
    type: 'Wanderlust',
    area: '26 m²',
    price: '450K',
  },
];

const DINING_BRANCHES: BranchItem[] = [
  {
    number: '01',
    name: 'TIỆM NƯỚNG NHÀ GẠO',
    category: 'GARDEN BBQ & ACOUSTIC',
    distance: 'Cách ~2.6km',
    tagline: 'Than hồng · Sân vườn · Nhạc mộc',
    highlights: [
      'Bò tảng sốt phô mai kéo sợi & hải sản nướng than hồng',
      'Đêm nhạc Acoustic cuối tuần, BBQ phục vụ tại homestay',
    ],
    address: 'Đ. Trường Sa, Thạnh Xuân Đông',
    phone: '0987 813 191',
    images: ['/images/general/nhagao-1.jpg', '/images/general/nhagao-2.jpg'],
  },
  {
    number: '02',
    name: "GAJO’S THAI",
    category: 'AUTHENTIC THAI CUISINE',
    distance: 'Cách ~2.8km',
    tagline: 'Tom Yum · Pad Thai · Hải sản',
    highlights: [
      'Tom Yum, Pad Thai & gỏi Som Tum chuẩn vị đầu bếp Thái',
      'Bàn view sát bờ sông, ngắm trọn hoàng hôn buông',
    ],
    address: '125 Nguyễn Chí Thanh, Tân Thành',
    phone: '0965 470 833',
    images: ['/images/general/gajothai-food.jpg', '/images/general/dining-gajothai.jpg'],
  },
  {
    number: '03',
    name: 'GẠO COFFEE',
    category: 'SEASIDE ACOUSTIC',
    distance: 'Cách ~2.5km',
    tagline: 'Coffee · Hoàng hôn · Sóng biển',
    highlights: [
      'Uji Matcha Latte đánh bọt Chasen & Cold Brew cam sảng khoái',
      'Bàn ghế bãi cát ngắm hoàng hôn, nhạc acoustic ven sóng',
    ],
    address: 'Đ. Trường Sa, Thạnh Xuân Đông',
    phone: '0902 286 300',
    images: ['/images/general/cafe-gaocoffee.jpg', '/images/general/gaocoffee-matcha.jpg'],
  },
  {
    number: '04',
    name: 'BONJOUR CAFÉ',
    category: 'REPLY 1996 VINTAGE',
    distance: 'Đi bộ 3 phút (300m)',
    tagline: 'Coffee · Donuts · Hoài niệm',
    highlights: [
      'Chỉ 300m từ homestay — 3 phút đi bộ thảnh thơi',
      'Cà phê rang mộc & Donuts nướng nóng mỗi sáng',
      'Không gian gạch nung hoài cổ, nhiều góc check-in xinh',
    ],
    address: '56 Đ. Phan Trọng Tuệ, Hoài Nhơn Đông',
    phone: '0965 470 833',
    images: ['/images/general/cafe-bonjour.jpg', '/images/general/bonjour-donuts.jpg'],
  },
];

const TILONG_MART: SpotlightItem = {
  number: '05',
  name: 'TILONG MART',
  category: 'SHOPPING & LIFESTYLE',
  distance: 'Đi bộ 2 phút (100m)',
  tagline: 'Gia dụng gia đình · Phụ kiện trendy · Quà tặng & Đồ chơi cho bé',
  highlights: [
    'Phụ kiện trendy, quà lưu niệm & văn phòng phẩm xinh xắn',
    'Gia dụng gia đình thông minh & đồ chơi an toàn cho bé',
  ],
  address: 'Khu phố trung tâm, TX. Hoài Nhơn (Cách 100m)',
  phone: '0868 770 096',
  image: '/images/general/tilong-mart.jpg',
};

const CUISINES: CuisineItem[] = [
  {
    number: '01',
    name: 'Bún Dây Bồng Sơn',
    badge: 'ĐẶC SẢN ĐỘC BẢN HOÀI NHƠN',
    tagline: 'Sợi bún ngâm tro củi · Dầu hẹ · Mắm chua ngọt',
    highlights: [
      'Gạo lúa cũ ngâm nước tro củi, ép thủ công thành vỉ bún vàng óng',
      'Thoa dầu hẹ thơm lừng, chấm mắm ớt tỏi chua ngọt đậm vị xứ Nẫu',
    ],
    location: 'Khu ẩm thực & chợ quanh Hoài Nhơn Đông (06:00 - 09:30)',
    image: '/images/dac-san/01_bun_day_bong_son.png',
  },
  {
    number: '02',
    name: 'Bánh Mì Chả Cá',
    badge: 'HẢI SẢN TƯƠI CẢNG TAM QUAN',
    tagline: 'Chả cá quết tay · Bánh mì than hồng giòn rụm',
    highlights: [
      'Chả cá thu, cá nhồng cảng Tam Quan quết tay giòn sần sật',
      'Bánh mì nướng than giòn rụm, kẹp rau răm & sốt mắm rim cay nồng',
    ],
    location: 'Dọc các tuyến đường trung tâm quanh Hoài Nhơn Đông',
    image: '/images/dac-san/02_banh_mi_cha_ca.png',
  },
  {
    number: '03',
    name: 'Bánh Canh Cá Lóc',
    badge: 'MÓN NGON ẤM LÒNG XỨ NẪU',
    tagline: 'Nước dùng ngọt thanh · Củ nén & Nghệ tươi',
    highlights: [
      'Nước dùng xương cá lóc đồng ngọt thanh, thơm củ nén & nghệ tươi',
      'Sợi bánh canh gạo mềm dai, ăn một tô ấm cả người',
    ],
    location: 'Các quán ăn bình dân quanh Hoài Nhơn Đông (Sáng & Tối)',
    image: '/images/dac-san/03_banh_canh_ca_loc.png',
  },
  {
    number: '04',
    name: 'Phở Bò Bình Định',
    badge: 'ĐI BỘ 3 PHÚT (CÁCH 300M)',
    tagline: 'Nước dùng gừng nướng hoa hồi · Bò tái ngọt mềm',
    highlights: [
      'Nước dùng bò hầm trong vắt, thơm hoa hồi, thảo quả & gừng nướng',
      'Bò tái mềm ngọt, ăn cùng húng quế & ớt xiêm xanh giòn cay',
    ],
    location: 'Quán ăn sáng địa phương quanh Hoài Nhơn Đông',
    image: '/images/dac-san/04_pho_bo_binh_dinh.png',
  },
];

const TRAVEL_PLACES: TravelItem[] = [
  {
    number: '01',
    name: 'Cầu Lại Giang & Cồn "Cá Voi"',
    badge: 'CÁCH 6KM · BỒNG SƠN',
    tagline: 'Cồn cát hình chú cá voi & Vẻ đẹp sông Lại Giang',
    highlights: [
      'Cồn cát giữa dòng Lại Giang tựa chú "cá voi" khổng lồ bơi ra cửa biển',
      'Điểm ngắm bình minh – hoàng hôn sông nước bình yên',
    ],
    location: 'Cầu Lại Giang, Bồng Sơn (Ngắm hoàng hôn & bình minh)',
    image: '/images/members-of-gao/travel/tam-quan-lai-giang.jpg',
  },
  {
    number: '02',
    name: 'Gành Hoài Hải',
    badge: 'CÁCH 14KM · BIỂN HOÀI HẢI',
    tagline: 'Bãi đá trầm tích · Cung đường đá ven sóng biển',
    highlights: [
      'Rạn đá trầm tích gồ ghề hình rồng, sư tử & lưỡi câu vươn ra biển',
      'Nước biển xanh ngọc, làng chài & nghề nước mắm truyền thống',
    ],
    location: 'Xã Hoài Hải, TX. Hoài Nhơn (Sáng sớm & Chiều mát)',
    image: '/images/members-of-gao/travel/ganh-hoai-hai.jpg',
  },
  {
    number: '03',
    name: 'Đèo Lộ Diêu (ĐT639)',
    badge: 'CUNG ĐƯỜNG VEN BIỂN HÙNG VĨ',
    tagline: 'Men sườn núi đá & Toàn cảnh làng chài',
    highlights: [
      'Cung đèo ven biển ngoạn mục: một bên vách đá, một bên đại dương',
      'Ngắm toàn cảnh làng chài Lộ Diêu — "một biển ba đèo"',
    ],
    location: 'Tuyến ĐT639, Hoài Mỹ (Chiều mát ngắm biển lộng gió)',
    image: '/images/members-of-gao/travel/deo-hoaihai-lodieu.jpg',
  },
  {
    number: '04',
    name: 'Cao Nguyên La Vuông',
    badge: 'CÁCH 25KM · CAO 700M',
    tagline: 'Săn mây 05:30 · Đồi cỏ & Cắm trại',
    highlights: [
      'Cao 700m se lạnh, đồi cỏ ngút ngàn & rừng thông lộng gió',
      'Săn mây 05:30, picnic & cắm trại qua đêm',
    ],
    location: 'Xã Hoài Sơn, TX. Hoài Nhơn (05:30 săn mây hoặc 15:00)',
    image: '/images/members-of-gao/travel/la-vuong.jpg',
  },
];

interface EcosystemItem {
  no: string;
  name: string;
  role: string;
  meta: string;
  image: string;
}

const ECOSYSTEM: EcosystemItem[] = [
  {
    no: '01',
    name: "GAJO'S HOUSE",
    role: 'Boutique Homestay',
    meta: '09 trạm dừng · Flagship',
    image: '/images/general/gajo-interior.jpg',
  },
  {
    no: '02',
    name: 'TIỆM NƯỚNG NHÀ GẠO',
    role: 'Garden BBQ & Acoustic',
    meta: 'Cách ~2.6km',
    image: '/images/general/nhagao-1.jpg',
  },
  {
    no: '03',
    name: 'GAJO THÁI',
    role: 'Ẩm thực Chùa Vàng',
    meta: 'Cách ~2.8km',
    image: '/images/general/gajothai-food.jpg',
  },
  {
    no: '04',
    name: 'GẠO COFFEE',
    role: 'Seaside Acoustic',
    meta: 'Cách ~2.5km',
    image: '/images/general/cafe-gaocoffee.jpg',
  },
  {
    no: '05',
    name: 'BONJOUR CAFÉ',
    role: 'Vintage 1996',
    meta: '300m · 3 phút đi bộ',
    image: '/images/general/cafe-bonjour.jpg',
  },
  {
    no: '06',
    name: 'TILONG MART',
    role: 'Shopping & Lifestyle',
    meta: '100m · 2 phút đi bộ',
    image: '/images/general/tilong-mart.jpg',
  },
];

const TAB_LABELS: { id: 'all' | 'page1' | 'page2' | 'page3' | 'page4'; label: string }[] = [
  { id: 'all', label: 'Cả 4 trang' },
  { id: 'page1', label: '01 · Homestay' },
  { id: 'page2', label: '02 · Chi nhánh Gạo' },
  { id: 'page3', label: '03 · Ẩm thực' },
  { id: 'page4', label: '04 · Khám phá' },
];

export default function MemberOfGaoMasterBooklet() {
  const [activeTab, setActiveTab] = useState<'all' | 'page1' | 'page2' | 'page3' | 'page4'>('all');

  const handlePrint = () => window.print();

  return (
    <div className={styles.workspace}>
      {/* Screen-only control bar */}
      <header className={styles.controlBar}>
        <div className={styles.barBrand}>
          <Link href="/" className={styles.btnBack}>
            <i className="fa-solid fa-arrow-left" />
            <span>Về Flipbook In-Room</span>
          </Link>
          <div className={styles.statusPill}>
            <span className={styles.liveDot} />
            <span>Member of Gạo · Cẩm nang 4 trang A4</span>
          </div>
        </div>

        <div className={styles.tabSwitcher}>
          {TAB_LABELS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.barActions}>
          <div className={styles.tipText}>
            <i className="fa-solid fa-gem" /> Bố cục Editorial chuẩn in A4 (210 × 297 mm)
          </div>
          <a
            href="/member-of-gao.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrint}
            style={{ textDecoration: 'none', background: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(217, 192, 138, 0.35)' }}
            title="Mở hoặc tải về tệp PDF gốc"
          >
            <i className="fa-solid fa-file-pdf" style={{ color: '#E0CEAC' }} />
            <span>Tải PDF gốc</span>
          </a>
          <button type="button" className={styles.btnPrint} onClick={handlePrint}>
            <i className="fa-solid fa-print" />
            <span>In trọn bộ 4 trang A4</span>
          </button>
        </div>
      </header>

      <main className={styles.viewport}>
        <div className={styles.container}>
          {/* ================= TRANG 01 / 04 ================= */}
          {(activeTab === 'all' || activeTab === 'page1') && (
            <div className={styles.sheet}>
              <header className={styles.pageHeader}>
                <div className={styles.brandLockup}>
                  <img src="/images/general/logo-mark-dark.png" alt="Gạo" className={styles.logoImg} />
                  <span className={styles.headerTag}>Member of Gạo</span>
                </div>
                <div className={styles.headerRight}>
                  <span className={styles.pagePill}>Trang 01 / 04</span>
                </div>
              </header>

              <section className={`${styles.hero} ${styles.heroFullbleed}`}>
                <img
                  src="/images/general/gajo-exterior-night.jpg"
                  alt="GAJO'S HOUSE — Member of Gạo"
                  className={styles.heroImg}
                />
                <div className={styles.heroOverlay}>
                  <div className={styles.heroKicker}>Flagship Boutique Homestay · Hoài Nhơn</div>
                  <h1 className={styles.heroTitle}>GAJO&apos;S HOUSE</h1>
                  <p className={styles.heroSub}>
                    Chốn dừng chân an yên — 09 trạm dừng cảm xúc giữa lòng xứ Nẫu
                  </p>
                </div>
                <div className={styles.heroSeal}>
                  <i className="fa-solid fa-crown" />
                  <span>Member of Gạo</span>
                </div>
              </section>

              <section className={styles.introSplit}>
                <div className={styles.introCopy}>
                  <span className={styles.eyebrow}>Lời ngỏ · Hệ sinh thái Gạo</span>
                  <p className={styles.manifesto}>
                    Hệ sinh thái GẠO tại Hoài Nhơn là chuỗi không gian trải nghiệm kết hợp hài hòa giữa
                    lưu trú boutique, ẩm thực nướng BBQ sân vườn, tinh hoa ẩm thực Thái Lan, cà phê
                    acoustic ven biển và tổ hợp mua sắm tiện ích. Mỗi cơ sở là một mảnh ghép mang cá tính riêng,
                    cùng chung một tình yêu với sự mộc mạc và chân thành.
                  </p>
                  <div className={styles.introStats}>
                    <div className={styles.introStat}>
                      <strong>06</strong>
                      <span>Cơ sở</span>
                    </div>
                    <div className={styles.introStat}>
                      <strong>09</strong>
                      <span>Trạm dừng</span>
                    </div>
                    <div className={styles.introStat}>
                      <strong>300m</strong>
                      <span>Bán kính</span>
                    </div>
                  </div>
                </div>
                <div className={styles.introVisual}>
                  <img
                    src="/images/general/gajo-interior.jpg"
                    alt="Không gian nội thất GAJO'S HOUSE"
                    className={styles.introImgMain}
                  />
                  <img
                    src="/images/general/gajo-family-room.jpg"
                    alt="Phòng gia đình GAJO'S HOUSE"
                    className={styles.introImgSub}
                  />
                  <img
                    src="/images/general/gajo-sign-wall-night.jpg"
                    alt="Biển hiệu GAJO'S HOUSE về đêm"
                    className={styles.introImgSub}
                  />
                </div>
              </section>

              <section className={styles.ecoSection}>
                <div className={styles.sectionTitle}>
                  <span className={styles.rule} />
                  <h2 className={styles.titleText}>Hệ sinh thái trong một khung nhìn</h2>
                  <span className={styles.rule} />
                </div>
                <div className={styles.ecoStrip}>
                  {ECOSYSTEM.map((eco) => (
                    <article key={eco.no} className={styles.ecoItem}>
                      <img src={eco.image} alt={eco.name} className={styles.ecoImg} />
                      <div className={styles.ecoOverlay}>
                        <span className={styles.ecoNo}>{eco.no}</span>
                        <span className={styles.ecoName}>{eco.name}</span>
                        <span className={styles.ecoRole}>{eco.role}</span>
                        <span className={styles.ecoMeta}>{eco.meta}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className={styles.stationsSection}>
                <div className={styles.sectionTitle}>
                  <span className={styles.rule} />
                  <h2 className={styles.titleText}>09 trạm dừng cảm xúc</h2>
                  <span className={styles.rule} />
                </div>

                <div className={styles.stationsGrid}>
                  {STATIONS.map((st) => (
                    <article key={st.id} className={styles.stationCard}>
                      <div className={styles.stThumb}>
                        <img src={st.image} alt={`Phòng ${st.name}`} />
                      </div>
                      <div className={styles.stBody}>
                        <div className={styles.stHead}>
                          <span className={styles.stCode}>{st.name}</span>
                          <span className={styles.stMeaning}>{st.meaning}</span>
                        </div>
                        <div className={styles.stTagline}>&ldquo;{st.tagline}&rdquo;</div>
                        <div className={styles.stMeta}>
                          <span className={styles.stType}>
                            <span className={styles.stTypeName}>{st.type}</span>
                            <span className={styles.stArea}>{st.area}</span>
                          </span>
                          <span className={styles.stPrice}>
                            {st.price}
                            <em>/đêm</em>
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <footer className={styles.pageFooter}>
                <div>
                  <div className={styles.footerBrand}>GAJO&apos;S HOUSE · A MEMBER OF GẠO</div>
                  <div className={styles.footerMeta}>
                    <span>Khu phố trung tâm, P. Tam Quan, TX. Hoài Nhơn, Bình Định</span>
                    <span className={styles.sep}>•</span>
                    <span>Hotline: <strong>0902 286 300</strong></span>
                  </div>
                </div>
                <div className={styles.footerRight}>
                  <span className={styles.footerSeal}>
                    <i className="fa-solid fa-location-dot" /> Est. Hoài Nhơn · Bình Định
                  </span>
                  <span className={styles.footerPage}>Trang 01 / 04</span>
                </div>
              </footer>
            </div>
          )}

          {/* ================= TRANG 02 / 04 ================= */}
          {(activeTab === 'all' || activeTab === 'page2') && (
            <div className={styles.sheet}>
              <header className={styles.pageHeader}>
                <div className={styles.brandLockup}>
                  <img src="/images/general/logo-mark-dark.png" alt="Gạo" className={styles.logoImg} />
                  <span className={styles.headerTag}>Member of Gạo</span>
                </div>
                <div className={styles.headerRight}>
                  <span className={styles.headerTag}>05 điểm chạm vị giác &amp; nếp sống</span>
                  <span className={styles.pagePill}>Trang 02 / 04</span>
                </div>
              </header>

              <section className={styles.intro}>
                <span className={styles.eyebrow}>Hệ sinh thái Gạo</span>
                <span className={styles.partLabel}>Phần 02 · Nếm hương vị Nẫu · Tận hưởng nhịp sống chậm</span>
                <h1 className={styles.introHeading}>05 ĐIỂM CHẠM VỊ GIÁC &amp; NẾP SỐNG</h1>
                <p className={styles.introLead}>
                  Song hành cùng 09 Trạm dừng cảm xúc của phòng nghỉ, đây là 05 Điểm chạm kết nối
                  quý khách với ẩm thực và đời sống thường nhật — trọn vẹn đặc quyền GAJO&apos;S HOUSE.
                </p>
                <p className={styles.introQuote}>
                  Từ tiệc BBQ sân vườn, ly cà phê ven sóng đến tổ hợp sắm sửa tiện nghi — trọn vẹn kỳ nghỉ.
                </p>
              </section>

              {/* 2x2 Grid: 4 Dining & Cafe Destinations */}
              <section className={styles.gridDining}>
                {DINING_BRANCHES.map((branch) => (
                  <article key={branch.number} className={styles.card}>
                    <div className={styles.cardImgWrap}>
                      <div className={styles.cardImgPair}>
                        {branch.images.map((src, idx) => (
                          <img
                            key={idx}
                            src={src}
                            alt={`${branch.name} — ảnh ${idx + 1}`}
                            className={styles.cardImg}
                          />
                        ))}
                      </div>
                      <div className={styles.cardBadges}>
                        <span className={styles.badgePrimary}>{branch.category}</span>
                        <span className={styles.badgeSecondary}>{branch.distance}</span>
                      </div>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.cardMain}>
                        <div className={styles.cardTitleRow}>
                          <span className={styles.cardIndex}>{branch.number}</span>
                          <h2 className={styles.cardTitle}>{branch.name}</h2>
                        </div>
                        <div className={styles.cardTagline}>{branch.tagline}</div>
                        <div className={styles.cardBullets}>
                          {branch.highlights.map((h, idx) => (
                            <p key={idx} className={styles.bulletRow}>
                              {h}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className={styles.cardFooter}>
                        <span>{branch.address}</span>
                        <span><strong>{branch.phone}</strong></span>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              {/* Bottom Row: 05 TiLong Mart (Left) + VIP Privileges (Right) */}
              <div className={styles.bottomRow}>
                {/* Left Card: TiLong Mart */}
                <article className={styles.martCard}>
                  <div className={styles.martImgWrap}>
                    <img
                      src={TILONG_MART.image}
                      alt={TILONG_MART.name}
                      className={styles.martImg}
                    />
                    <div className={styles.martBadges}>
                      <span className={styles.badgePrimary}>{TILONG_MART.category}</span>
                      <span className={styles.badgeWalk}>
                        <i className="fa-solid fa-person-walking" /> {TILONG_MART.distance}
                      </span>
                    </div>
                  </div>

                  <div className={styles.martBody}>
                    <div className={styles.martMain}>
                      <div className={styles.cardTitleRow}>
                        <span className={styles.cardIndex}>{TILONG_MART.number}</span>
                        <h2 className={styles.cardTitle}>{TILONG_MART.name}</h2>
                      </div>
                      <div className={styles.martTagline}>{TILONG_MART.tagline}</div>

                      <div className={styles.martBullets}>
                        {TILONG_MART.highlights.map((h, idx) => (
                          <p key={idx} className={styles.bulletRow}>
                            {h}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className={styles.martFooter}>
                      <span>Cách 100m</span>
                      <span>Hotline: <strong>{TILONG_MART.phone}</strong></span>
                    </div>
                  </div>
                </article>

                {/* Right Card: ĐẶC QUYỀN VIP PASS */}
                <article className={styles.vipCard}>
                  <div className={styles.vipCardBadge}>
                    <div className={styles.vipCrownRing}>
                      <i className="fa-solid fa-crown" />
                    </div>
                    <span className={styles.vipEyebrow}>GUEST PASS</span>
                    <span className={styles.vipMainText}>ĐẶC QUYỀN</span>
                    <span className={styles.vipPill}>★ VIP ★</span>
                  </div>

                  <div className={styles.vipCardBody}>
                    <div className={styles.vipCardItem}>
                      <div className={styles.vipIconBox}>
                        <i className="fa-solid fa-couch" />
                      </div>
                      <div className={styles.vipItemText}>
                        <div className={styles.vipItemHead}>
                          <strong>Ưu tiên bàn view đẹp</strong>
                          <span className={styles.vipMiniTag}>Sát sông · Biển</span>
                        </div>
                        <p>Giữ chỗ view sát sông &amp; biển các cơ sở Gạo.</p>
                      </div>
                    </div>

                    <div className={styles.vipCardItem}>
                      <div className={styles.vipIconBox}>
                        <i className="fa-solid fa-fire-burner" />
                      </div>
                      <div className={styles.vipItemText}>
                        <div className={styles.vipItemHead}>
                          <strong>Setup BBQ sân vườn</strong>
                          <span className={styles.vipMiniTag}>Tận homestay</span>
                        </div>
                        <p>Bếp than hồng &amp; set nướng tận homestay.</p>
                      </div>
                    </div>

                    <div className={styles.vipCardItem}>
                      <div className={styles.vipIconBox}>
                        <i className="fa-solid fa-gift" />
                      </div>
                      <div className={styles.vipItemText}>
                        <div className={styles.vipItemHead}>
                          <strong>Ưu đãi 10% &amp; Quà tặng</strong>
                          <span className={styles.discountBadge}>-10% F&amp;B</span>
                        </div>
                        <p>Giảm 10% hóa đơn F&amp;B &amp; quà tặng TiLong Mart.</p>
                      </div>
                    </div>

                    <div className={styles.vipCardNote}>
                      <i className="fa-solid fa-key" />
                      <span>Xuất trình chìa khóa GAJO&apos;S HOUSE để nhận ưu đãi</span>
                    </div>
                  </div>
                </article>
              </div>

              <footer className={styles.pageFooter}>
                <div>
                  <div className={styles.footerBrand}>GAJO&apos;S HOUSE · MEMBERS OF GẠO ECOSYSTEM</div>
                  <div className={styles.footerMeta}>
                    <span>Hotline đặt bàn &amp; hỗ trợ: <strong>0902 286 300</strong></span>
                    <span className={styles.sep}>•</span>
                    <span>Hoài Nhơn, Bình Định</span>
                  </div>
                </div>
                <div className={styles.footerRight}>
                  <div className={styles.qrWrap}>
                    <img src="/images/general/qr-maps.png" alt="Explore Gạo Maps" />
                  </div>
                  <div className={styles.qrText}>
                    <strong>QUÉT GOOGLE MAPS</strong>
                    <span>Định vị 6 cơ sở Gạo</span>
                  </div>
                  <span className={styles.footerPage}>Trang 02 / 04</span>
                </div>
              </footer>
            </div>
          )}

          {/* ================= TRANG 03 / 04 ================= */}
          {(activeTab === 'all' || activeTab === 'page3') && (
            <div className={styles.sheet}>
              <header className={styles.pageHeader}>
                <div className={styles.brandLockup}>
                  <img src="/images/general/logo-mark-dark.png" alt="Gạo" className={styles.logoImg} />
                  <span className={styles.headerTag}>Member of Gạo</span>
                </div>
                <div className={styles.headerRight}>
                  <span className={styles.headerTag}>Tinh hoa ẩm thực đặc sản xứ Nẫu</span>
                  <span className={styles.pagePill}>Trang 03 / 04</span>
                </div>
              </header>

              <section className={styles.intro}>
                <span className={styles.eyebrow}>Cẩm nang ẩm thực địa phương</span>
                <span className={styles.partLabel}>Phần 03 · Đặc sản xứ Nẫu</span>
                <h1 className={styles.introHeading}>HƯƠNG VỊ ĐẬM ĐÀ QUÊ HƯƠNG BÌNH ĐỊNH</h1>
                <p className={styles.introLead}>
                  Ẩm thực Bình Định mộc mạc mà đậm đà — từ sợi bún dây Bồng Sơn đến tô phở bò gừng
                  nướng, tất cả đều nằm trong tầm với từ homestay.
                </p>
                <p className={styles.introQuote}>
                  &ldquo;Đi để cảm nhận phong cảnh, ở để thấm đượm tình người, và ăn để nhớ mãi phong vị quê hương.&rdquo;
                </p>
              </section>

              <section className={styles.grid2}>
                {CUISINES.map((item) => (
                  <article key={item.number} className={styles.card}>
                    <div className={styles.cardImgWrap}>
                      <img src={item.image} alt={item.name} className={styles.cardImg} />
                      <div className={styles.cardBadges}>
                        <span className={styles.badgePrimary}>{item.badge}</span>
                        <span className={styles.badgeSecondary}>Món {item.number}</span>
                      </div>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.cardMain}>
                        <div className={styles.cardTitleRow}>
                          <span className={styles.cardIndex}>{item.number}</span>
                          <h2 className={styles.cardTitle}>{item.name}</h2>
                        </div>
                        <div className={styles.cardTagline}>{item.tagline}</div>
                        <div className={styles.cardBullets}>
                          {item.highlights.map((h, idx) => (
                            <p key={idx} className={styles.bulletRow}>
                              {h}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className={styles.cardFooter}>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              <section className={`${styles.banner} ${styles.bannerDark}`}>
                <div className={styles.bannerText}>
                  <i className="fa-solid fa-fire" />
                  <div>
                    <strong className={styles.bannerTitle}>Tiệc nướng BBQ sân vườn — phục vụ tận nơi tại homestay</strong>
                    <p className={styles.bannerDesc}>
                      Bò tảng sốt phô mai kéo sợi, dẻ sườn ướp thảo mộc, mực lá nướng muối ớt &amp; tôm sú than hoa.
                      Setup bếp than hồng ngay tại khuôn viên sân vườn GAJO&apos;S HOUSE.
                    </p>
                  </div>
                </div>
                <div className={styles.bannerMeta}>
                  <span className={styles.metaStrong}>18:00 - 21:30</span>
                  <span className={styles.metaSoft}>Đặt trước 16:30</span>
                </div>
              </section>

              <footer className={styles.pageFooter}>
                <div>
                  <div className={styles.footerBrand}>GAJO&apos;S HOUSE · CẨM NANG ẨM THỰC ĐỊA PHƯƠNG</div>
                  <div className={styles.footerMeta}>
                    <span>Hỗ trợ đặt bàn / đặt món tận nơi: <strong>0902 286 300</strong></span>
                  </div>
                </div>
                <div className={styles.footerRight}>
                  <span className={styles.footerPage}>Trang 03 / 04</span>
                </div>
              </footer>
            </div>
          )}

          {/* ================= TRANG 04 / 04 ================= */}
          {(activeTab === 'all' || activeTab === 'page4') && (
            <div className={styles.sheet}>
              <header className={styles.pageHeader}>
                <div className={styles.brandLockup}>
                  <img src="/images/general/logo-mark-dark.png" alt="Gạo" className={styles.logoImg} />
                  <span className={styles.headerTag}>Member of Gạo</span>
                </div>
                <div className={styles.headerRight}>
                  <span className={styles.headerTag}>Cẩm nang khám phá thiên nhiên Hoài Nhơn</span>
                  <span className={styles.pagePill}>Trang 04 / 04</span>
                </div>
              </header>

              <section className={styles.intro}>
                <span className={styles.eyebrow}>Khám phá bản địa</span>
                <span className={styles.partLabel}>Phần 04 · Khám phá Hoài Nhơn</span>
                <h1 className={styles.introHeading}>HÀNH TRÌNH CHẠM VÀO THIÊN NHIÊN NGUYÊN BẢN</h1>
                <p className={styles.introLead}>
                  Một bên là biển xanh và cung đèo ven biển hùng vĩ, một bên là đại ngàn và hồ nước tĩnh
                  lặng — Hoài Nhơn đủ gần để bạn chạm vào thiên nhiên nguyên bản.
                </p>
                <p className={styles.introQuote}>
                  &ldquo;Bước chân ra khỏi hiên nhà, bạn sẽ gặp một Hoài Nhơn vừa hùng vĩ, vừa bình yên đến ngỡ ngàng.&rdquo;
                </p>
              </section>

              <section className={styles.grid2}>
                {TRAVEL_PLACES.map((place) => (
                  <article key={place.number} className={styles.card}>
                    <div className={styles.cardImgWrap}>
                      <img src={place.image} alt={place.name} className={styles.cardImg} />
                      <div className={styles.cardBadges}>
                        <span className={styles.badgePrimary}>{place.badge}</span>
                        <span className={styles.badgeSecondary}>Điểm {place.number}</span>
                      </div>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.cardMain}>
                        <div className={styles.cardTitleRow}>
                          <span className={styles.cardIndex}>{place.number}</span>
                          <h2 className={styles.cardTitle}>{place.name}</h2>
                        </div>
                        <div className={styles.cardTagline}>{place.tagline}</div>
                        <div className={styles.cardBullets}>
                          {place.highlights.map((h, idx) => (
                            <p key={idx} className={styles.bulletRow}>
                              {h}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className={styles.cardFooter}>
                        <span>{place.location}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              <section className={`${styles.banner} ${styles.bannerLight}`}>
                <div className={styles.bannerText}>
                  <i className="fa-solid fa-compass" />
                  <div>
                    <strong className={styles.bannerTitle}>Dịch vụ hỗ trợ du lịch &amp; tham quan bản địa</strong>
                    <p className={styles.bannerDesc}>
                      Thuê xe máy đời mới • Xe 7 chỗ đưa đón sân bay Phù Cát • Hướng dẫn khám phá Rừng dừa Tam Quan
                      &amp; Hồ Đồng Mít.
                    </p>
                  </div>
                </div>
                <div className={styles.bannerMeta}>
                  <span className={styles.metaStrong}><i className="fa-solid fa-phone" /> 0902 286 300</span>
                  <span className={styles.metaSoft}>Hỗ trợ 24/7</span>
                </div>
              </section>

              <footer className={styles.pageFooter}>
                <div>
                  <div className={styles.footerBrand}>GAJO&apos;S HOUSE · CẨM NANG KHÁM PHÁ BÌNH ĐỊNH</div>
                  <div className={styles.footerMeta}>
                    <span>Chúc quý khách một kỳ nghỉ thảnh thơi và trọn vẹn kỷ niệm đẹp!</span>
                  </div>
                </div>
                <div className={styles.footerRight}>
                  <span className={styles.footerPage}>Trang 04 / 04</span>
                </div>
              </footer>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
