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
  images: [string, string];
}

interface CuisineItem {
  number: string;
  name: string;
  badge: string;
  tagline: string;
  desc: string;
  location: string;
  image: string;
}

interface TravelItem {
  number: string;
  name: string;
  badge: string;
  tagline: string;
  desc: string;
  bestTime: string;
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
    meaning: 'Gia đình & Garden',
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
    area: '28 m²',
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
    area: '45 m²',
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

const BRANCHES: BranchItem[] = [
  {
    number: '01',
    name: 'TIỆM NƯỚNG NHÀ GẠO',
    category: 'GARDEN BBQ & ACOUSTIC',
    distance: 'Cách ~2.6km',
    tagline: 'Than hồng · Sân vườn · Nhạc mộc',
    highlights: [
      'Bò tảng sốt phô mai kéo sợi & hải sản tươi Tam Quan',
      'Đêm nhạc Acoustic cuối tuần, phục vụ set BBQ tận homestay',
    ],
    address: 'Đ. Trường Sa, Hoài Nhơn',
    phone: '0902 286 300',
    images: ['/images/general/nhagao-1.jpg', '/images/general/nhagao-2.jpg'],
  },
  {
    number: '02',
    name: 'GAJO THÁI',
    category: 'AUTHENTIC THAI CUISINE',
    distance: 'Cách ~2.8km',
    tagline: 'Tom Yum · Pad Thai · Hải sản',
    highlights: [
      'Lẩu Thái hải sản, Tom Yum, Pad Thai chuẩn vị đầu bếp Thái',
      'Vị trí sát bờ sông ngắm trọn hoàng hôn buông',
    ],
    address: '125 Nguyễn Chí Thanh, Hoài Nhơn',
    phone: '0902 286 300',
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
      'Cà phê đặc sản rang mộc & Donuts nướng nóng mỗi sáng',
    ],
    address: '54 - 56 Phan Trọng Tuệ, Hoài Nhơn',
    phone: '0965 470 833',
    images: ['/images/general/cafe-bonjour.jpg', '/images/general/bonjour-donuts.jpg'],
  },
];

const CUISINES: CuisineItem[] = [
  {
    number: '01',
    name: 'Bún Dây Bồng Sơn',
    badge: 'ĐẶC SẢN ĐỘC BẢN HOÀI NHƠN',
    tagline: 'Sợi bún ngâm tro củi · Dầu hẹ · Mắm chua ngọt',
    desc: 'Gạo lúa cũ ngâm tro củi tự nhiên, ép thủ công thành vỉ bún vàng óng; thoa dầu hẹ thơm lừng, chấm mắm ớt tỏi chanh đường chua cay đậm vị xứ Nẫu.',
    location: 'Chợ Bồng Sơn & Chợ Tam Quan (06:00 - 09:30)',
    image: '/images/dac-san/01_bun_day_bong_son.png',
  },
  {
    number: '02',
    name: 'Bánh Mì Chả Cá',
    badge: 'HẢI SẢN TƯƠI CẢNG TAM QUAN',
    tagline: 'Chả cá quết tay · Bánh mì than hồng giòn rụm',
    desc: 'Chả cá thu, cá nhồng tươi cảng Tam Quan quết tay giòn sần sật, nướng than giòn rụm; kẹp dưa leo, rau răm và sốt mắm rim cay nồng.',
    location: 'Đ. Trần Hưng Đạo & Nguyễn Chí Thanh',
    image: '/images/dac-san/02_banh_mi_cha_ca.png',
  },
  {
    number: '03',
    name: 'Bánh Canh Cá Lóc',
    badge: 'MÓN NGON ẤM LÒNG XỨ NẪU',
    tagline: 'Nước dùng ngọt thanh · Củ nén & Nghệ tươi',
    desc: 'Nước dùng ninh xương cá lóc đồng ngọt thanh, thơm nức củ nén, nghệ tươi và tiêu rừng; sợi bánh canh gạo mềm dai, ăn một tô ấm cả người.',
    location: 'Trung tâm TX. Hoài Nhơn (Sáng & Chiều tối)',
    image: '/images/dac-san/03_banh_canh_ca_loc.png',
  },
  {
    number: '04',
    name: 'Phở Bò Bình Định',
    badge: 'ĐI BỘ 3 PHÚT (CÁCH 300M)',
    tagline: 'Nước dùng gừng nướng hoa hồi · Bò tái ngọt mềm',
    desc: 'Nước dùng bò hầm trong vắt, thơm lừng hoa hồi, thảo quả và gừng nướng than; bò tái mềm ngọt ăn cùng húng quế và ớt xiêm xanh giòn cay.',
    location: 'Quán Phở A Mãi — Cách GAJO’s HOUSE 300m',
    image: '/images/dac-san/04_pho_bo_binh_dinh.png',
  },
];

const TRAVEL_PLACES: TravelItem[] = [
  {
    number: '01',
    name: 'Cửa Biển Tam Quan',
    badge: 'CÁCH 12KM · 20 PHÚT',
    tagline: 'Toàn cảnh Sông Lại Giang & Cửa biển trù phú',
    desc: 'Bức tranh phong cảnh ngoạn mục nơi dòng sông Lại Giang bồi đắp cồn cát trù phú trước khi vươn ra biển Đông; dạo thuyền ngắm hoàng hôn và khám phá chợ cá ngừ Tam Quan tấp nập.',
    bestTime: '05:00 - 07:30 sáng hoặc 16:30 chiều',
    image: '/images/members-of-gao/travel/tam-quan-sea-gate.jpg',
  },
  {
    number: '02',
    name: 'Gành Hoài Hải',
    badge: 'CÁCH 14KM · BIỂN HOÀI HẢI',
    tagline: 'Bãi đá trầm tích · Cung đường đá ven sóng biển',
    desc: 'Cung đường đi bộ ven rạn đá trầm tích tuyệt đẹp ôm trọn làn nước biển xanh ngọc bích trong vắt; điểm check-in hoang sơ và đón gió biển hùng vĩ bậc nhất Hoài Nhơn.',
    bestTime: 'Sáng sớm hoặc sau 15:30',
    image: '/images/members-of-gao/travel/ganh-hoai-hai.jpg',
  },
  {
    number: '03',
    name: 'Đèo Lộ Diêu (ĐT639)',
    badge: 'CUNG ĐƯỜNG VEN BIỂN HÙNG VĨ',
    tagline: 'Men sườn núi đá & Toàn cảnh làng chài',
    desc: 'Cung đường đèo uốn lượn ngoạn mục, một bên vách núi đá dựng đứng, một bên đại dương bao la; điểm dừng ngắm toàn cảnh làng chài Lộ Diêu.',
    bestTime: 'Chiều mát ngắm biển lộng gió',
    image: '/images/members-of-gao/travel/deo-hoaihai-lodieu.jpg',
  },
  {
    number: '04',
    name: 'Cao Nguyên La Vuông',
    badge: 'CÁCH 25KM · CAO 700M',
    tagline: 'Săn mây 05:30 · Đồi cỏ & Cắm trại',
    desc: 'Khí hậu se lạnh quanh năm, đồi cỏ xanh ngút ngàn, rừng thông lộng gió và biển mây bồng bềnh — thiên đường săn mây, picnic và cắm trại.',
    bestTime: '05:30 săn mây hoặc 15:00 cắm trại',
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
                    lưu trú boutique, ẩm thực nướng BBQ sân vườn, tinh hoa ẩm thực Thái Lan và cà phê
                    acoustic ven biển. Mỗi cơ sở là một mảnh ghép mang cá tính riêng, cùng chung một
                    tình yêu với sự mộc mạc và chân thành.
                  </p>
                  <div className={styles.introStats}>
                    <div className={styles.introStat}>
                      <strong>05</strong>
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
                            {st.type} · {st.area}
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
                  <span className={styles.headerTag}>Hệ thống 4 điểm đến ẩm thực &amp; cà phê</span>
                  <span className={styles.pagePill}>Trang 02 / 04</span>
                </div>
              </header>

              <section className={styles.intro}>
                <span className={styles.eyebrow}>Hệ sinh thái Gạo</span>
                <span className={styles.partLabel}>Phần 02 · Ẩm thực &amp; Cà phê</span>
                <h1 className={styles.introHeading}>4 ĐIỂM ĐẾN ẨM THỰC &amp; CÀ PHÊ</h1>
                <p className={styles.introLead}>
                  Bốn điểm đến trong cùng một hệ sinh thái — mỗi không gian một cá tính, tất cả đều dành
                  đặc quyền ưu đãi riêng cho khách lưu trú GAJO&apos;S HOUSE.
                </p>
                <p className={styles.introQuote}>
                  Từ bàn tiệc BBQ sân vườn đến ly cà phê ven biển — trọn vẹn một Hoài Nhơn mộc mạc.
                </p>
              </section>

              <section className={styles.grid2}>
                {BRANCHES.map((branch) => (
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
                      <div>
                        <div className={styles.cardTitleRow}>
                          <span className={styles.cardIndex}>{branch.number}</span>
                          <h2 className={styles.cardTitle}>{branch.name}</h2>
                        </div>
                        <div className={styles.cardTagline}>{branch.tagline}</div>
                        <div className={styles.cardBullets}>
                          {branch.highlights.map((h, idx) => (
                            <div key={idx} className={styles.bulletRow}>
                              <i className="fa-solid fa-circle-check" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={styles.cardFooter}>
                        <span><i className="fa-solid fa-location-dot" /> {branch.address}</span>
                        <span><i className="fa-solid fa-phone" /> <strong>{branch.phone}</strong></span>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              <section className={`${styles.banner} ${styles.bannerVip}`}>
                <div className={styles.vipBadge}>
                  <i className="fa-solid fa-crown" />
                  <span>ĐẶC QUYỀN VIP</span>
                </div>
                <div className={styles.vipItems}>
                  <div className={styles.vipItem}>
                    <i className="fa-solid fa-couch" />
                    <div>
                      <strong>Ưu tiên bàn view đẹp</strong>
                      <p>Giữ chỗ sát sông/sát biển tại Nhà Gạo, GAJO Thái &amp; Gạo Coffee.</p>
                    </div>
                  </div>
                  <div className={styles.vipItem}>
                    <i className="fa-solid fa-fire-burner" />
                    <div>
                      <strong>Setup BBQ sân vườn</strong>
                      <p>Giao nguyên liệu &amp; phục vụ bếp than hồng tận homestay.</p>
                    </div>
                  </div>
                  <div className={styles.vipItem}>
                    <i className="fa-solid fa-tag" />
                    <div>
                      <strong>Ưu đãi 10% / khai vị</strong>
                      <p>Giảm 10% hoặc tặng món khi xuất trình chìa khóa phòng.</p>
                    </div>
                  </div>
                </div>
              </section>

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
                    <span>Định vị 5 cơ sở Gạo</span>
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
                      <div>
                        <div className={styles.cardTitleRow}>
                          <span className={styles.cardIndex}>{item.number}</span>
                          <h2 className={styles.cardTitle}>{item.name}</h2>
                        </div>
                        <div className={styles.cardTagline}>{item.tagline}</div>
                        <p className={styles.cardDesc}>{item.desc}</p>
                      </div>

                      <div className={styles.cardFooter}>
                        <span><i className="fa-solid fa-map-pin" /> {item.location}</span>
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
                      <div>
                        <div className={styles.cardTitleRow}>
                          <span className={styles.cardIndex}>{place.number}</span>
                          <h2 className={styles.cardTitle}>{place.name}</h2>
                        </div>
                        <div className={styles.cardTagline}>{place.tagline}</div>
                        <p className={styles.cardDesc}>{place.desc}</p>
                      </div>

                      <div className={styles.cardFooter}>
                        <span><i className="fa-solid fa-clock" /> Thời điểm đẹp: <strong>{place.bestTime}</strong></span>
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
