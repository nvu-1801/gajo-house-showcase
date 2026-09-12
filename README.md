# GAJO'S HOUSE — BOUTIQUE HOMESTAY
## PROJECT: IN-ROOM SHOWCASE SYSTEM (GAJO HOUSE ROOM SHOWCASE)
**Định hướng Art Direction & UI/UX theo phong cách KINFOLK & Monocle | Gia Lai 2026**

---

## 1. TỔNG QUAN DỰ ÁN (PROJECT OVERVIEW)

Dự án **In-Room Showcase System** được thiết kế nhằm mang lại trải nghiệm khám phá không gian và tiện ích tại phòng (In-Room Experience) dành riêng cho khách lưu trú tại **GAJO's HOUSE - Boutique Homestay** (Hoài Nhơn Đông, Gia Lai). 

Hệ thống được phát triển theo định hướng **Dual-Experience Ecosystem**, kết nối đồng bộ giữa trải nghiệm trực tiếp tại phòng, cẩm nang du lịch kỹ thuật số, và **Catalogue 3D tương tác 12 trang (`gajo-house-flipbook.html`)**.

### Độc bản phong cách Kinfolk:
- **Tối giản & Bình yên:** Triết lý *"Less is More"*, tối ưu hóa khoảng thở (negative space), tạo cảm giác phục hồi tâm trí.
- **Bảng màu tự nhiên:** Nền Kem/Beige (`#F9F6EE`), chữ Charcoal (`#222222`), điểm nhấn Gỗ ấm (`#B88B4A`) và Xanh rêu nhẹ (`#7A9A8C`).
- **Iconography:** Sử dụng 100% nét vẽ mảnh thanh lịch (Thin line-art), không dùng khối màu đặc.
- **Vệ sinh vượt trội:** Cam kết chuẩn **"Spotless"** sạch không tì vết trên từng chi tiết.

---

## 2. CẤU TRÚC THƯ MỤC DỰ ÁN (DIRECTORY STRUCTURE)

```
GajoHouse-Room-Showcase/
├── README.md                      # Tài liệu tổng quan & Hướng dẫn sử dụng dự án In-Room
├── GA-AN.md                       # Đặc tả chi tiết Hạng phòng GA-AN (Phòng đơn - Tĩnh thức)
├── GA-MO.md                       # Đặc tả chi tiết Hạng phòng GA-MO (Phòng đơn - Mộng mơ)
├── GA-DINH.md                     # Đặc tả chi tiết Hạng phòng GA-DINH (Phòng đôi - Gắn kết)
├── IN_ROOM_GUIDE.md               # Sổ tay lưu trú & Nội quy homestay (House Rules)
├── EXTRA_SERVICES.md              # Dịch vụ bổ sung & Ưu đãi đặc quyền (BBQ, Xe máy,...)
├── room-showcase-srs.md           # Tài liệu đặc tả kỹ thuật phần mềm & GSAP interactions
├── index.html                     # Giao diện Web In-Room Showcase tương tác dành cho Tablet/Màn hình phòng
└── images/                        # Kho hình ảnh chất lượng cao phân loại theo mục
    ├── ga-an/                     # Hình ảnh phòng GA-AN (Phòng GA-AN 1.png, 2.png, JPGs)
    ├── ga-mo/                     # Hình ảnh phòng GA-MO (Phòng GA-MO 1.png, 2.png)
    ├── ga-dinh/                   # Hình ảnh phòng GA-DINH (Phòng GA-DINH 1.png, 2.png)
    ├── rules/                     # Infographic & Ảnh Nội quy lưu trú (IMG_5652.JPG)
    ├── services/                  # Hình ảnh ẩm thực & dịch vụ nướng BBQ
    └── general/                   # Hình ảnh không gian tổng thể & Logo thương hiệu
```

---

## 3. DANH MỤC CÁC HẠNG PHÒNG (ROOM DIRECTORY)

### 3.1 [Phòng đơn GA-AN (Không gian Tĩnh thức)](file:///c:/Users/Nguyen%20Vu/Downloads/GAJO's%20HOUSE/GajoHouse-Room-Showcase/GA-AN.md)
- **Đối tượng:** Du khách độc hành, người tìm kiếm sự tĩnh lặng tuyệt đối để phục hồi năng lượng.
- **Diện tích:** 22m² | 1 Giường đơn (1m6 x 2m) | Hướng cửa sổ đón nắng sớm.
- **Tiện ích chính:** Smart TV, Điều hòa 2 chiều, Nước nóng thư giãn, Giường đệm lò xo túi cao cấp, Vệ sinh chuẩn Spotless.

### 3.2 [Phòng đơn GA-MO (Góc nhỏ Mộng mơ)](file:///c:/Users/Nguyen%20Vu/Downloads/GAJO's%20HOUSE/GajoHouse-Room-Showcase/GA-MO.md)
- **Đối tượng:** Những tâm hồn lãng mạn, người làm sáng tạo, viết lách, thiết kế.
- **Diện tích:** 25m² | 1 Giường đơn (1m6 x 2m) | Tầm nhìn sân vườn xanh rêu.
- **Tiện ích chính:** Bàn làm việc mộc mạc bên cửa sổ, Bathtub/Nước nóng, Wifi tốc độ cao, Giường êm ái, Tiêu chuẩn Spotless.

### 3.3 [Phòng đôi GA-DINH (Tổ ấm Gắn kết)](file:///c:/Users/Nguyen%20Vu/Downloads/GAJO's%20HOUSE/GajoHouse-Room-Showcase/GA-DINH.md)
- **Đối tượng:** Cặp đôi, nhóm bạn thân 2-4 người, hoặc gia đình nhỏ.
- **Diện tích:** 35m² | 1 Giường King-size (1m8 x 2m) + Góc Lounge Sofa.
- **Tiện ích chính:** Smart TV 55", Điều hòa & Nước nóng công suất lớn, Ban công riêng, Bãi đậu xe ô tô an toàn.

---

## 4. TRẢI NGHIỆM ĐỊA PHƯƠNG KẾT NỐI (LOCAL NETWORK)

1. **Bữa Sáng Bản Địa — Quán A Mãi:**
   - Thưởng thức bún/phở Gia Lai ngọt thanh thơm phức vào buổi sáng. Cách GAJO's HOUSE chỉ 300m (3 phút đi bộ).
2. **Tiệc Nướng Sân Vườn — Tiệm Nướng Nhà Gạo:**
   - Thưởng thức set thịt nướng BBQ ướp sốt đậm đà được giao tận sân vườn homestay. Đặt trước qua Lễ tân.

---

## 5. HƯỚNG DẪN ỨNG DỤNG CHO LỄ TÂN & KHÁCH HÀNG

- **Mã QR In-Room:** Quét mã QR tại bàn trà phòng để mở trực tiếp `index.html` hoặc `gajo-house-flipbook.html`.
- **Đội ngũ Lễ tân:** Sử dụng file Markdown đặc tả để tư vấn hạng phòng phù hợp với tâm trạng & nhu cầu của du khách.
- **Hotline hỗ trợ 24/7:** `090x.xxx.xxx`
