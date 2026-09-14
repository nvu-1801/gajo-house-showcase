import React from 'react';
import { PageSheet } from '@/components/flipbook/PageSheet';
import { RoomIndex } from './RoomIndex';

interface WelcomeSpreadProps {
  onJump?: (pageIndex: number) => void;
}

export const WelcomeSpread: React.FC<WelcomeSpreadProps> = ({ onJump }) => {
  return (
    <>
      {/* PAGE 2: WELCOME LETTER & PHILOSOPHY */}
      <PageSheet density="soft" isHardCover={true}>
        <div className="welcome-editorial-page">
          <img
            src="images/general/gajo-interior.jpg"
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

      {/* PAGE 3: FIND YOUR ROOM (VISUAL DIRECTORY) */}
      <PageSheet density="soft" isHardCover={false}>
        <RoomIndex onJump={onJump} />
      </PageSheet>
    </>
  );
};
