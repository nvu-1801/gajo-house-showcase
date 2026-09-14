import { TocItem, DiningHighlight, GuideLocation } from '@/types/catalogue';

export const tocItems: TocItem[] = [
  { pageIndex: 0, title: '01. Trang Bìa (Front Cover)', pageLabel: 'Trang 1' },
  { pageIndex: 1, title: '02. Lời Ngỏ — Bình Yên Tối Giản', pageLabel: 'Trang 2 - 3' },
  { pageIndex: 3, title: '03. GA-AN — An Yên', pageLabel: 'Trang 4 - 5' },
  { pageIndex: 5, title: '04. GA-MO — Modern', pageLabel: 'Trang 6 - 7' },
  { pageIndex: 7, title: '05. GA-GIO — Gió', pageLabel: 'Trang 8 - 9' },
  { pageIndex: 9, title: '06. GA-MAY — Mây', pageLabel: 'Trang 10 - 11' },
  { pageIndex: 11, title: '07. GA-NANG — Nắng', pageLabel: 'Trang 12 - 13' },
  { pageIndex: 13, title: '08. GA-MOC — VIP Signature', pageLabel: 'Trang 14 - 15' },
  { pageIndex: 15, title: '09. GA-TRON — Trốn', pageLabel: 'Trang 16 - 17' },
  { pageIndex: 17, title: '10. GA-LAC — Lạc', pageLabel: 'Trang 18 - 19' },
  { pageIndex: 19, title: '11. GA-DINH — Gia Đình', pageLabel: 'Trang 20 - 21' },
  { pageIndex: 21, title: '12. Tiệc Nướng BBQ Sân Vườn', pageLabel: 'Trang 22 - 23' },
  { pageIndex: 23, title: '13. Local Guide & Quán A Mãi', pageLabel: 'Trang 24 - 25' },
  { pageIndex: 25, title: '14. Your Stay & Before You Leave', pageLabel: 'Trang 26 - 27' },
  { pageIndex: 27, title: '15. Bìa Sau & Đặt Phòng', pageLabel: 'Trang 28' },
];

export const diningHighlights: DiningHighlight[] = [
  { icon: 'fa-solid fa-fire', title: 'Set Nướng Tự Chọn', desc: 'Bò tảng, sườn heo ướp sốt thảo mộc độc quyền, hải sản tươi.' },
  { icon: 'fa-solid fa-wine-glass', title: 'Rượu Vang & Đồ Uống', desc: 'Tuyển chọn vang nhẹ, craft beer và trà thảo mộc sân vườn.' },
  { icon: 'fa-solid fa-guitar', title: 'Không Gian Acoustic', desc: 'Bếp than hồng, ánh đèn vàng ấm áp và âm nhạc du dương.' }
];

export const guideLocations: GuideLocation[] = [
  { name: 'Quán A Mãi', badge: '300m — Đi bộ 3 phút', desc: 'Bún phở gia truyền nước dùng ngọt thanh ninh từ xương ống tươi.' },
  { name: 'Cua Biển Tam Quan', badge: '12km — Xe máy 20 phút', desc: 'Hải sản tươi sống đánh bắt trong ngày tại cảng cá Tam Quan.' },
  { name: 'Cung Đèo Lộ Diêu', badge: '18km — Cung đường biển đẹp nhất', desc: 'Vịnh biển hoang sơ, bờ cát vàng óng và rạn san hô tự nhiên.' }
];
