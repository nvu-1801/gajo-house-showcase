# TÀI LIỆU ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS) - MODULE "ROOM SHOWCASE"
## THƯƠNG HIỆU: GAJO'S HOUSE - BOUTIQUE HOMESTAY
**BA & UI/UX Specialist Blueprint | Phiên bản 1.0**

---

## 1. TỔNG QUAN MODULE (OVERVIEW)

### 1.1 Vị trí hiển thị & Cơ chế liên kết [4, 9]
*   **Vị trí hiển thị:** Module **Room Showcase** được tích hợp trực tiếp vào trang chủ `index.html` như một phần của phễu dẫn dắt cảm xúc người dùng thông qua trải nghiệm **Cinematic Scrollytelling** [9]. Trình bày tóm tắt không gian nghỉ dưỡng một cách sống động bằng hoạt ảnh cuộn [9].
*   **Liên kết Dual-Experience:** Module này được liên kết chặt chẽ với `flipbook.html` (Mô phỏng Catalogue 3D tương tác lật sách 12 trang có âm thanh lật giấy vật lý) [4, 9]. Tại mỗi hạng phòng trên web, một nút **Call to Action (CTA)** nổi bật dạng nét thanh lịch sẽ điều hướng mượt mà khách hàng sang đúng trang tương ứng trong Catalogue để họ tìm hiểu thông tin chi tiết và đưa ra quyết định đặt phòng [4, 9].

### 1.2 Định hướng thị giác & Bố cục (Art Direction & Layout) [2, 3]
*   **Phong cách thiết kế:** Kế thừa tinh thần từ các tạp chí kiến trúc danh tiếng (**KINFOLK**, Monocle) [2]. Thiết kế hướng đến sự tối giản tuyệt đối (**"Less is More"**), tối ưu hóa khoảng trắng (negative space) để mang lại cảm giác bình yên, thư thái và mang tính chất chữa lành cho khách hàng ngay từ điểm chạm kỹ thuật số đầu tiên [2].
*   **Hệ thống lưới (Grid Layout):** Áp dụng tỷ lệ vàng hoặc **chia đôi màn hình 50/50** [3]. Một bên màn hình hiển thị hình ảnh tràn viền (Full-screen/Full-column) để tối đa thị giác, bên còn lại hiển thị nội dung văn bản tối giản với độ thoáng đạt cao [3].
*   **Hệ thống Biểu tượng (Iconography):** Sử dụng các biểu tượng dạng nét thanh mảnh đồng bộ (**Thin line-art**), đồng nhất về độ dày nét vẽ (stroke weight), tuyệt đối không dùng icon dạng mảng khối (solid) để giữ nguyên tính tinh tế và đồng bộ của ngôn ngữ Kinfolk [3].

### 1.3 Hệ thống Thiết kế (Design System) [3]
*   **Bảng màu (Color Palette):**
    *   *Nền chủ đạo (Background):* Màu Beige/Kem ấm (Cream - `#F9F6EE`) hoặc Trắng sứ (Off-white) mang lại cảm giác dễ chịu, ấm cúng [3].
    *   *Điểm nhấn (Accent):* Gỗ ấm (Warm Oak - `#B88B4A`) đại diện cho nội thất tự nhiên và Xanh rêu nhẹ (Muted Sage - `#7A9A8C`) đại diện cho yếu tố thiên nhiên tĩnh lặng [3].
    *   *Chữ chủ đạo (Typography):* Màu Đen xám (Charcoal - `#222222`) để tạo độ tương phản êm dịu, dễ đọc, tuyệt đối không dùng màu đen tuyền mệt mỏi (`#000000`) [3].
*   **Phông chữ (Typography):**
    *   *Tiêu đề (Heading - H1, H2, H3):* Phông Serif sang trọng, cổ điển như **Playfair Display** hoặc **Lora** [3].
    *   *Nội dung (Body text):* Phông Sans-serif hiện đại, sạch sẽ và thanh lịch như **Montserrat** hoặc **Inter** [3]. Giãn dòng (line-spacing) tiêu chuẩn từ `1.4` đến `1.5` để tạo khoảng thở tối đa cho mắt [3].

---

## 2. CHI TIẾT TỪNG HẠNG PHÒNG (ROOM DETAILS SPECIFICATION)

Dựa trên cơ sở dữ liệu thực tế từ hệ thống phòng của homestay [11], tài liệu đặc tả chi tiết 3 hạng phòng chính dưới đây làm blueprint cho Kỹ sư Front-end và Nhà thiết kế:

### 2.1 HẠNG PHÒNG 1: GA-AN (Phòng đơn - Không gian Tĩnh thức) [11]

*   **Định vị sản phẩm:** Căn phòng dành cho những tâm hồn độc hành hoặc những ai tìm kiếm sự tĩnh lặng tuyệt đối để đối thoại với chính mình. Định vị không gian yên tĩnh, an yên và sạch sẽ không tì vết (**"Spotless"**) [4].
*   **Đặc tả hình ảnh (Visual Assets) [3]:**
    *   *Yêu cầu kỹ thuật:* Ảnh chụp chất lượng HD trở lên, crop theo khung chữ nhật hoặc vuông sắc nét, áp dụng thuộc tính CSS `object-fit: cover` [3]. Tuyệt đối không dùng ảnh nhỏ vụn vặt, không kéo giãn sai tỷ lệ ảnh gây thiếu chuyên nghiệp [3].
    *   *Danh mục góc chụp yêu cầu (Gợi ý):*
        1.  `ga_an_bed.jpg`: Góc chụp cận cảnh giường đơn phủ ga linen màu beige tự nhiên bên cạnh cửa sổ đón nắng sớm.
        2.  `ga_an_read.jpg`: Góc đọc sách tĩnh lặng với ghế bành gỗ Oak ấm áp và một tách trà còn nghi ngút khói.
        3.  `ga_an_bathroom.jpg`: Góc phòng tắm tối giản, sạch sẽ vượt trội ("Spotless") hiển thị các lọ tinh dầu tự nhiên.
*   **Danh sách Tiện ích (Amenities) [4]:**
    *   Sử dụng icon dạng nét mảnh (Thin line-art) thể hiện các tiện ích thực tế [3, 4]:
        *   *Không gian yên tĩnh:* Đảm bảo cách âm hoàn hảo cho nhu cầu nghỉ ngơi [4].
        *   *Giường đệm cao cấp:* Đệm lò xo túi êm ái nâng niu giấc ngủ sâu [4].
        *   *Vệ sinh "Spotless":* Cam kết sạch sẽ tuyệt đối ở mọi ngóc ngách [4].
        *   *Smart TV:* Tích hợp các ứng dụng giải trí cá nhân nhẹ nhàng [4].
        *   *Điều hòa & Nước nóng:* Hệ thống ổn định nhiệt độ phòng và nước ấm [4].
*   **Gợi ý địa phương kết nối trải nghiệm (Local Network) [4]:**
    *   *Hoạt động khởi đầu ngày mới:* Gợi ý khách thưởng thức bữa sáng nhẹ nhàng với các món ăn bản địa tại **Quán A Mãi** lân cận [4].
    *   *Trải nghiệm tĩnh tâm:* Thưởng thức trà ấm trong không gian yên bình của GA-AN, kết hợp đọc một cuốn sách từ tủ sách chữa lành của homestay.

---

### 2.2 HẠNG PHÒNG 2: GA-MO (Phòng đơn - Góc nhỏ Mộng mơ) [11]

*   **Định vị sản phẩm:** Nơi khơi nguồn cho những cảm hứng lãng mạn và bay bổng. Phòng đơn ngập tràn ánh sáng tự nhiên với tầm nhìn hướng ra mảng xanh rêu nhẹ dịu mát, lý tưởng cho những người làm sáng tạo hoặc khách du lịch mộng mơ.
*   **Đặc tả hình ảnh (Visual Assets) [3]:**
    *   *Yêu cầu kỹ thuật:* Toàn bộ ảnh chất lượng cao HD, đảm bảo tỷ lệ khung ảnh nguyên bản hoặc vuông, áp dụng thuộc tính CSS `object-fit: cover` để tối ưu hóa hiển thị trên mọi kích thước màn hình [3].
    *   *Danh mục góc chụp yêu cầu (Gợi ý):*
        1.  `ga_mo_view.jpg`: Góc chụp từ giường nhìn ra khung cửa sổ lớn ngập nắng và tán cây xanh rêu nhẹ.
        2.  `ga_mo_desk.jpg`: Bàn làm việc bằng gỗ mộc mạc bên cửa sổ, nơi lý tưởng để viết lách, phác thảo hoặc làm việc sáng tạo.
        3.  `ga_mo_details.jpg`: Cận cảnh chi tiết trang trí thủ công mộc mạc như thảm dệt, lọ hoa khô dại địa phương.
*   **Danh sách Tiện ích (Amenities) [4]:**
    *   Sử dụng icon dạng nét mảnh (Thin line-art) thể hiện các tiện ích thực tế [3, 4]:
        *   *Giường đệm cao cấp:* Thiết kế êm dịu giúp kích thích giấc ngủ sâu và thư thái [4].
        *   *Điều hòa nhiệt độ:* Giữ không khí mát mẻ, trong lành [4].
        *   *Nước nóng tắm bồn:* Giúp thư giãn cơ thể sau một ngày khám phá [4].
        *   *Vệ sinh tiêu chuẩn "Spotless":* Không gian sạch bóng, an toàn [4].
        *   *Wifi tốc độ cao:* Phục vụ nhu cầu làm việc sáng tạo từ xa.
*   **Gợi ý địa phương kết nối trải nghiệm (Local Network) [4]:**
    *   *Hoạt động chiều muộn:* Gợi ý khách đặt một set thịt nướng BBQ ấm cúng từ **Tiệm nướng Nhà Gạo** để thưởng thức ngay tại khu vườn nhỏ của GAJO's HOUSE [4].
    *   *Khám phá lân cận:* Đi dạo quanh khu vực Hoài Nhơn Đông để tận hưởng bầu không khí trong lành của Gia Lai lúc chiều tà.

---

### 2.3 HẠNG PHÒNG 3: GA-DINH (Phòng đôi - Tổ ấm Gắn kết) [11]

*   **Định vị sản phẩm:** Không gian rộng mở, ấm cúng dành cho các cặp đôi, nhóm bạn thân hoặc gia đình nhỏ. Thiết kế chú trọng sự gắn kết giữa các thành viên thông qua khu vực sinh hoạt chung ấm áp, mộc mạc.
*   **Đặc tả hình ảnh (Visual Assets) [3]:**
    *   *Yêu cầu kỹ thuật:* Ảnh độ phân giải HD sắc nét, chụp theo bố cục chia tỷ lệ vàng 50/50 [3]. Sử dụng thuộc tính `object-fit: cover` để tránh méo hoặc vỡ ảnh [3].
    *   *Danh mục góc chụp yêu cầu (Gợi ý):*
        1.  `ga_dinh_master.jpg`: Góc chụp toàn cảnh phòng với giường đôi cỡ lớn, drap trải giường cotton mềm mại màu trắng sứ.
        2.  `ga_dinh_living.jpg`: Khu vực ngồi trò chuyện ấm cúng với những chiếc gối tựa tông màu xanh rêu và gỗ ấm.
        3.  `ga_dinh_balcony.jpg`: Ban công rộng lớn hướng tầm mắt ra cảnh quan thiên nhiên bao la xung quanh homestay.
*   **Danh sách Tiện ích (Amenities) [4]:**
    *   Sử dụng icon dạng nét mảnh (Thin line-art) thể hiện các tiện ích thực tế [3, 4]:
        *   *Giường đôi cỡ lớn (King-size premium):* Đệm lò xo bọc vải organic cao cấp nâng niu tối đa [4].
        *   *Smart TV màn hình lớn:* Phục vụ những buổi xem phim chung ấm cúng của gia đình [4].
        *   *Điều hòa & Nước nóng công suất lớn:* Phục vụ hoàn hảo cho cả gia đình [4].
        *   *Phòng tắm & Vệ sinh "Spotless" rộng rãi:* Tiện nghi tối tân, sạch sẽ tinh tươm [4].
        *   *Bãi đậu xe riêng an toàn:* Tiện lợi cho các gia đình tự lái xe du lịch [4].
*   **Gợi ý địa phương kết nối trải nghiệm (Local Network) [4]:**
    *   *Trải nghiệm ẩm thực gia đình:* Gợi ý gia đình thưởng thức set BBQ đặc biệt đặt từ **Tiệm nướng Nhà Gạo** dưới ánh đèn lung linh ngoài sân vườn [4], kết hợp ăn sáng bún/phở Gia Lai truyền thống tại **Quán A Mãi** vào sáng hôm sau [4].

---

## 3. ĐẶC TẢ HIỆU ỨNG WEB (GSAP INTERACTIONS) [5, 6, 7, 8]

Để hiện thực hóa trải nghiệm web điện ảnh mượt mà 60fps trên mọi thiết bị và tránh hiện tượng giật lag do tải video nặng, Front-end team bắt buộc phải áp dụng kiến trúc hiệu ứng dưới đây [5]:

### 3.1 Thiết lập Lenis Smooth Scroll [5, 6]
Tích hợp mượt mà công cụ cuộn chuột Lenis để đồng bộ hóa hoàn hảo tiến trình cuộn với hoạt ảnh của GSAP [5, 6]:

```javascript
// Tích Hợp Lenis Smooth Scroll mượt mà 
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

### 3.2 Hiệu ứng cuộn chuyển cảnh phòng (Depth Cross-Fade & Zoom) [5, 6, 7]
Khi người dùng cuộn chuột qua từng hạng phòng, màn hình sẽ được ghim lại (`pin`) để thực hiện kỹ thuật phóng to ảnh tĩnh chất lượng cao nhẹ nhàng kết hợp chuyển cảnh chồng mờ lớp không gian mang lại cảm giác chiều sâu 3D đầy tính điện ảnh [5, 6, 7]:

```javascript
// Pinned Storytelling Depth Cross-Fade cho các hạng phòng
const roomTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#roomShowcaseSection",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: "#roomStickyContainer",
    anticipatePin: 1
  }
});

roomTl
  // Chuyển từ Phòng GA-AN sang Phòng GA-MO
  .to("#roomCardAn", { opacity: 0, y: -40, scale: 0.95, duration: 1.2 })
  .to("#roomBgAn", { scale: 1.15, duration: 2 }, "<")
  .to({}, { duration: 1 }) // Khoảng dừng cảm xúc
  .to("#roomBgMo", { opacity: 1, scale: 1.1, duration: 2 }, "<")
  .to("#roomCardMo", { opacity: 1, y: 0, scale: 1, duration: 1.5 }, "<")
  
  // Chuyển từ Phòng GA-MO sang Phòng GA-DINH
  .to("#roomCardMo", { opacity: 0, y: -40, scale: 0.95, duration: 1.2 })
  .to("#roomBgMo", { scale: 1.15, duration: 2 }, "<")
  .to({}, { duration: 1 }) // Khoảng dừng cảm xúc
  .to("#roomBgDinh", { opacity: 1, scale: 1.1, duration: 2 }, "<")
  .to("#roomCardDinh", { opacity: 1, y: 0, scale: 1, duration: 1.5 }, "<");
```

### 3.3 Hiệu ứng trượt ngang chi tiết hình ảnh phòng (Horizontal Pinned Scroll) [8]
Bên trong mỗi phòng, để khách xem các góc ảnh chi tiết mà không làm gián đoạn dòng cuộn dọc, áp dụng băng chuyền trượt ngang mượt mà bằng GSAP ScrollTrigger [8]:

```javascript
// Hoạt ảnh trượt ngang xem 3-4 góc ảnh chi tiết của phòng
const horizontalTrack = document.querySelector(".horizontal-track");

gsap.to(horizontalTrack, {
  x: () => -(horizontalTrack.scrollWidth - window.innerWidth + (window.innerWidth * 0.16)),
  ease: "none",
  scrollTrigger: {
    trigger: "#horizontalContainer",
    start: "top top",
    end: () => `+=${horizontalTrack.scrollWidth}`,
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true
  }
});
```

### 3.4 Yêu cầu hiệu năng (Performance Guidelines) [5, 10]
1.  **Tối ưu hóa GPU:** Bắt buộc áp dụng thuộc tính CSS `will-change: transform, opacity;` và ép trình duyệt render bằng phần cứng thông qua `transform: translate3d(0, 0, 0);` đối với toàn bộ các container ảnh và card thông tin phòng tham gia hoạt ảnh.
2.  **Tối ưu hóa Tốc độ:** Tuyệt đối không sử dụng video nền dạng `.mp4` (gây giật lag đáng kể và tốn băng thông trên mobile) [5]. Chỉ sử dụng từ **2–3 bức ảnh tĩnh chất lượng cao** đã được nén tối ưu (WebP hoặc AVIF) để tạo hiệu ứng giả 3D chuyển động mượt mà mà vẫn đảm bảo tổng dung lượng trang web siêu nhẹ (<2MB) [5].
3.  **FPS:** Đạt tiêu chuẩn hiển thị mượt mà **60fps** trên các thiết bị di động tầm trung trở lên [5].
