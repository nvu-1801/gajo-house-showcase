import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';

interface WelcomeSpreadProps {
  onJump?: (pageIndex: number) => void;
}

const tocData = [
  {
    number: "01",
    title: "STAY",
    items: [
      { subtitle: "Đặc quyền lưu trú", page: "04" }
    ]
  },
  {
    number: "02",
    title: "ROOMS",
    items: [
      { subtitle: "Các hạng phòng", page: "06" }
    ]
  },
  {
    number: "03",
    title: "DINE",
    items: [
      { subtitle: "Trải nghiệm ẩm thực", page: "24" },
      { subtitle: "Menu & Bar", page: "26" }
    ]
  },
  {
    number: "04",
    title: "EXPLORE",
    items: [
      { subtitle: "Cẩm nang địa phương", page: "28" }
    ]
  },
  {
    number: "05",
    title: "ESSENTIALS",
    items: [
      { subtitle: "Nội quy & Check-out", page: "30" }
    ]
  },
];

export const WelcomeSpread: React.FC<WelcomeSpreadProps> = ({ onJump }) => {
  return (
    <>
      {/* PAGE 2: WELCOME LETTER & PHILOSOPHY */}
      <PageSheet density="soft" isHardCover={true}>
        <div className="welcome-editorial-page">
          <img
            src="/images/general/gajo-interior.jpg"
            alt="Welcome GAJO'S HOUSE"
            className="welcome-bg-img"
          />
          <div className="welcome-overlay" />

          <div className="welcome-content">
            <div className="welcome-top">
              <span className="welcome-eyebrow">01 &bull; LỜI NGỎ TỪ GAJO</span>
              <h2 className="welcome-title">Bình Yên<br />Tối Giản</h2>
              <p className="welcome-quote">
                &ldquo;Chốn dừng chân cho những tâm hồn mỏi mệt tìm về khoảng lặng an nhiên.&rdquo;
              </p>
            </div>

            <div className="welcome-principles">
              <div className="principle-item">
                <span className="principle-num">01</span>
                <div>
                  <strong>SIMPLICITY</strong>
                  <p>Mộc mạc, tĩnh lặng, loại bỏ những chi tiết rườm rà.</p>
                </div>
              </div>
              <div className="principle-item">
                <span className="principle-num">02</span>
                <div>
                  <strong>NATURAL LIGHT</strong>
                  <p>Ánh nắng sớm mai và làn gió trời trong lành của cao nguyên.</p>
                </div>
              </div>
              <div className="principle-item">
                <span className="principle-num">03</span>
                <div>
                  <strong>WOOD &amp; WARMTH</strong>
                  <p>Gỗ mộc ấm cúng, hương thơm dịu nhẹ và sự hiếu khách chân tình.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSheet>

      {/* PAGE 3: CONTENTS / MỤC LỤC */}
      <PageSheet density="soft" isHardCover={false}>
        <div style={{ padding: '32px 40px', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--paper)' }}>
          
          {/* HEADER */}
          <div style={{ marginBottom: '40px', marginTop: '20px' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--charcoal)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 'normal' }}>
              CONTENTS
            </h1>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '1.2rem', color: 'var(--gold)', fontStyle: 'italic', letterSpacing: '0.05em' }}>
              Mục lục
            </p>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', marginBottom: '40px' }} />

          {/* CHAPTERS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', flex: 1 }}>
            {tocData.map((chapter, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '20px' }}>
                {/* Chapter Number */}
                <div style={{ width: '28px', flexShrink: 0, marginTop: '2px' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--wood)', fontWeight: 500, letterSpacing: '0.1em' }}>
                    {chapter.number}
                  </span>
                </div>
                
                {/* Chapter Info */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Chapter Title */}
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--charcoal)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0, marginBottom: '8px', fontWeight: 'normal' }}>
                    {chapter.title}
                  </h3>
                  
                  {/* Subtitles & Pages */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {chapter.items.map((item, i) => (
                      <div 
                        key={i} 
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: onJump ? 'pointer' : 'default' }} 
                        onClick={() => onJump && onJump(parseInt(item.page, 10))}
                      >
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          {item.subtitle}
                        </span>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--charcoal)', fontWeight: 500 }}>
                          {item.page}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div style={{ marginTop: 'auto', textAlign: 'right', paddingTop: '20px' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--wood)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              GA MỘC / GAJO
            </span>
          </div>
          
        </div>
      </PageSheet>
    </>
  );
};
