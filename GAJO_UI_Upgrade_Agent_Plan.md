# GAJO'S HOUSE - Kế hoạch nâng cấp UI catalogue

**Ngày:** 25/09/2026  
**Repository:** https://github.com/nvu-1801/gajo-house-showcase  
**Mục tiêu:** Giao diện đẹp, sáng, mềm mại và có chiều sâu biên tập; đọc thoải mái trên web và khi xuất PDF.  
**Định hướng chốt:** Soft Boutique Editorial - tạp chí nghỉ dưỡng mộc, ấm, tinh giản, ưu tiên ảnh thật.

## 1. Phạm vi và bằng chứng

Kế hoạch dựa trên việc xem toàn bộ PDF `GAJO'S HOUSE — In Room Catalogue 2026.pdf` và xem phóng lớn các spread phòng GA-AN, menu, nội quy. Tài liệu Markdown trong repo đã được đọc ở phiên trước tại commit `44d4d57ce166961c3c47f434df97f9689538da57`; agent phải kiểm tra phiên bản hiện tại trước khi triển khai.

PDF có **17 trang ngang, khoảng 297 × 210 mm**. Mỗi trang thể hiện một spread gồm hai mặt dọc; trang đầu có nửa trái trống, trang cuối có nửa phải trống. Nếu không tính hai nửa trống, có 32 mặt nội dung. Đây là cách đếm từ PDF, chưa phải số trang trong state của ứng dụng.

Người dùng gọi đây là UI hiện tại của home. Trong tác vụ này, hiểu phạm vi là **giao diện catalogue được thể hiện trong PDF**, kể cả khi nó được nhúng trong route home. Không tự xây một landing page khác hoặc thay toàn bộ homepage không liên quan. Khi tìm thấy route home và catalogue riêng biệt, sửa renderer và giao diện bao quanh catalogue; ghi rõ file nào phụ trách phần nào.

Chưa kiểm tra source code trong lượt lập kế hoạch này. Các tên component bên dưới là đề xuất trách nhiệm, không khẳng định chúng đã tồn tại.

## 2. Chẩn đoán giao diện hiện tại

| Vị trí theo trang PDF | Quan sát | Hướng xử lý |
|---|---|---|
| 1 và 17 - bìa | Ảnh phủ tối nhiều; hai nửa trắng có thể là mô phỏng bìa sách | Làm sáng ảnh, giữ một thông điệp chính; xác định chế độ export trước khi xử lý nửa trống |
| 2 - lời ngỏ, mục lục | Nửa ảnh tối đối lập với nửa chữ sáng; nhiều nhãn nhỏ | Làm phần lời ngỏ nhẹ hơn, mục lục có nhịp lớn nhỏ rõ |
| 3 - tiện ích, dịch vụ | Nhiều khoảng trống phía dưới trong khi phần chữ tập trung ở trên | Phân bổ lại ảnh và thông tin theo chiều cao, không kéo giãn chữ để lấp chỗ |
| 4-12 - 9 phòng | Cùng mẫu ảnh lớn trái, gallery phải; vùng câu chuyện tối; tên phòng chưa giữ vai trò tiêu đề chính đủ rõ | Dùng 2 biến thể cùng hệ lưới; đưa câu chuyện về nền giấy, tăng vai trò tên phòng |
| 4 - GA-AN | Ảnh chi tiết và ảnh hero đều mạnh, cụm thông số nằm trong thẻ trắng nổi | Chọn một ảnh dẫn dắt; biến thông số thành một dải chữ gọn trên nền giấy |
| 13-15 - dining, menu, local guide | Ảnh khác nhiệt độ màu; menu nhiều card, nhãn và khoảng trống không đều | Đồng bộ cách chọn ảnh, tiết chế card, chia menu theo hàng/cột dễ quét |
| 16 - nội quy | Nhiều thẻ trắng bo góc, shadow và pattern nền; đoạn trống lớn dưới tiêu đề | Dùng danh sách biên tập, ít nền nổi, thông tin thiết yếu nổi bật |
| 17 - bìa cuối | PDF trích xuất có chuỗi `&starf ;`; cần kiểm tra cách render ký tự | Sửa nguồn ký tự/entity nếu lỗi hiện diện trong renderer; dùng icon nét mảnh hoặc ký tự đúng |

Điểm cần giữ: ảnh phòng thật giàu chất liệu, nền kem, ý tưởng 9 trạm dừng, nội dung cảm xúc, định dạng spread, các liên kết đặt phòng và QR hiện có.

**Mềm mại không đồng nghĩa với bo tròn tất cả.** Sự mềm mại đến từ ánh sáng ảnh, màu giấy, nhịp chữ, khoảng cách và giảm các đường phân chia cạnh tranh nhau.

## 3. Nguyên tắc thiết kế bắt buộc

1. Ảnh là yếu tố chủ đạo; mỗi trang có một điểm nhìn chính.
2. Chỉ một tiêu đề chính cho mỗi mặt nội dung; nhãn phụ không giành sự chú ý.
3. Phần lớn nội dung dài nằm trên nền sáng. Không phủ đen toàn ảnh để chứa cả đoạn văn.
4. Dùng tối đa hai họ font, hỗ trợ đầy đủ dấu tiếng Việt. Ưu tiên font local đang có nếu đạt chất lượng.
5. Tránh phong cách dashboard: không bọc từng thông số, tiện ích, dòng menu vào một card.
6. Không thêm gradient màu rực, glassmorphism, glow, icon solid, sticker hoặc blob trang trí.
7. Không thay ảnh phòng bằng ảnh AI/stock. Không gán ảnh phòng này cho phòng khác để làm bố cục đẹp hơn.
8. Không tự thay giá, sức chứa, tiện ích, địa chỉ, Wi-Fi, giờ hoạt động hoặc chính sách.

## 4. Design tokens đề xuất

Các giá trị là điểm khởi đầu để agent triển khai và kiểm tra thực tế, không phải lý do thay toàn bộ cấu hình hiện có.

| Token | Giá trị | Vai trò |
|---|---|---|
| paper | `#F9F6EE` | Nền chính |
| paper-deep | `#F0EBE1` | Mảng nền phụ nhỏ |
| ink | `#222222` | Tiêu đề, nội dung quan trọng |
| ink-muted | `#625D55` | Nội dung phụ vẫn cần đọc rõ |
| oak | `#B88B4A` | Điểm nhấn thương hiệu, chi tiết trang trí |
| oak-text | `#76552F` | Chữ nhấn trên nền kem |
| sage | `#7A9A8C` | Điểm nhấn thiên nhiên, không dùng cho chữ nhỏ chưa kiểm tra tương phản |
| sage-wash | `#E8EEE8` | Một mảng nền nhẹ khi cần |
| rule | `#DED5C6` | Đường kẻ 1px web / khoảng 0.5pt in |
| radius-image | 12-18px web / 3-4mm in | Gallery và ảnh nội dung |
| radius-panel | 10-14px web / 2.5-3.5mm in | Chỉ cho panel cần gom thông tin |
| shadow | `0 4px 16px rgba(50,40,28,.04)` | Chỉ cho UI web nổi; bỏ khi in |

### Chữ và khoảng cách

- Tiêu đề: Lora hoặc serif hiện có có nét gần tương đương; body: Inter hoặc sans hiện có. Không tải đồng thời nhiều lựa chọn font.
- Web: body 15-16px, line-height 1.55-1.65; caption 12-13px; tiêu đề trang 30-42px, bìa 48-64px tùy khung.
- In: body mục tiêu 10.5-11pt, thông tin phụ 9-9.5pt, không dùng dưới 9pt cho thông tin thiết yếu; tiêu đề 22-30pt, bìa 34-44pt. Nếu khung hiện tại không chứa đủ, biên tập hoặc tái bố cục trước khi giảm cỡ chữ.
- Nhãn chữ hoa: tracking 0.10-0.14em, dùng ít; không giãn chữ quá rộng cho câu dài tiếng Việt.
- Web spacing: 4 / 8 / 12 / 16 / 24 / 32 / 48px. In: 2 / 3 / 4 / 6 / 8 / 12mm.
- Mỗi mặt trang dùng chung vị trí header, footer và baseline. Lề ngoài khoảng 9-11mm; lề phía gáy 11-13mm nếu chuẩn bị đóng cuốn, cần hiệu chỉnh theo khổ in thực tế.
- Không sao chép thông số pt/mm sang UI web một cách máy móc. Có tokens screen và print riêng.

## 5. Bố cục mục tiêu theo nhóm trang

### 5.1. Bìa trước và bìa cuối - PDF 1, 17

**Bìa trước:** giữ ảnh kiến trúc thật. Đặt tên GAJO'S HOUSE ở vùng ảnh ít chi tiết; dòng Boutique Homestay nhỏ; một câu chào ngắn. Giảm nhãn tiếng Anh lặp nghĩa. Chỉ dùng gradient cục bộ quanh chữ, không làm tối toàn bộ ảnh. Khung kép nếu đã có: làm rất mảnh, tương phản thấp; không thêm khung lồng thứ ba.

**Bìa cuối:** tên thương hiệu, lời cảm ơn 1-2 dòng, một QR chính và chỉ dẫn rõ. Thông tin liên hệ gọn, không biến thành khối khuyến mãi lớn. Giữ nguyên nội dung ưu đãi đã được duyệt; không phát minh voucher mới.

QR giữ nền trắng và vùng trống theo dữ liệu QR; mục tiêu kích thước in 24-28mm, phải quét thử từ PDF xuất ra. Không bo/crop vào mã hoặc đặt texture dưới mã.

Nửa trang trống ở bìa phải được xử lý theo chế độ xuất, không tự xóa khỏi state của flipbook.

### 5.2. Lời ngỏ và mục lục - PDF 2

- Mặt trái: ảnh chiếm khoảng 55-65% chiều cao, phần còn lại là nền giấy cho tiêu đề và 50-75 từ giới thiệu. Nếu giữ ảnh tràn trang, chỉ đặt một câu ngắn trên ảnh và chuyển đoạn dài sang vùng giấy.
- Mặt phải: “Trong cuốn cẩm nang này” hoặc tiêu đề hiện có; 5 nhóm STAY / ROOMS / DINE / EXPLORE / ESSENTIALS, số trang thẳng hàng phải, đường kẻ nhẹ.
- Không dùng bảng mục lục như danh sách nút. Mỗi nhóm có khoảng thở rõ, ưu tiên tiếng Việt và tiếng Anh phụ.
- Số trang lấy từ manifest thực tế, không hardcode theo PDF cũ.

### 5.3. Tiện ích và dịch vụ - PDF 3

- Mặt trái: ảnh không gian đón khách lớn hơn, bên dưới là 4-6 tiện ích thiết yếu theo lưới hai cột, icon nét mảnh đồng nhất.
- Mặt phải: một tiêu đề, câu dẫn ngắn, 3 nhóm dịch vụ theo nội dung đang có. Một ảnh phụ đủ lớn làm điểm kết thay vì để trống phần đáy.
- Wi-Fi/hotline đưa vào dải tra cứu rõ chữ; không dùng icon thay nhãn.
- Nếu nội dung không đủ, tăng chất lượng/tỷ lệ ảnh; không bổ sung lời quảng cáo chỉ để lấp chỗ.

### 5.4. 09 phòng - PDF 4 đến 12, ưu tiên cao nhất

Giữ thứ tự hiện có: GA-AN, GA-MO, GA-GIO, GA-MAY, GA-NANG, GA-TRON, GA-LAC, GA-DINH, GA-MOC, trừ khi manifest nguồn đã đổi. Không sắp xếp lại theo thứ tự Markdown cũ.

**Template A - ảnh dẫn dắt và câu chuyện:**

- Mặt trái: ảnh hero chiếm khoảng 72-76% chiều cao. Dưới ảnh là nền giấy chứa tên phòng lớn, ý nghĩa tên và đoạn truyện 45-65 từ.
- Mặt phải: gallery một ảnh ngang lớn + hai ảnh nhỏ; tổng vùng ảnh khoảng 52-60% chiều cao, sau đó là thông số, tiện ích và giá.
- Chuyển giá sang vị trí nhất quán ở cuối mặt phải. Không để giá và đoạn truyện cạnh tranh trên vùng ảnh tối.

**Template B - biến thể nhịp ảnh:**

- Giữ đúng chiều trái kể chuyện / phải chi tiết để người xem không phải học lại cách đọc.
- Mặt trái có tên phòng và một câu ngắn ở trên ảnh; ảnh phía dưới; phần truyện ngắn nằm ở đáy trên nền giấy.
- Mặt phải dùng hai ảnh lớn có tỷ lệ khác nhau thay cho lưới ba ảnh nếu bộ ảnh đủ chất lượng. Không bắt buộc ba ảnh cho mọi phòng.
- Dùng B cho khoảng ba phòng có asset phù hợp, ví dụ GA-GIO, GA-NANG, GA-DINH sau khi kiểm tra ảnh. Các phòng còn lại dùng A.

**Cấu trúc thông tin dùng chung:**

1. Tên phòng, ví dụ GA-AN, là tiêu đề chính.
2. Một câu cảm xúc ngắn giữ đúng ý nghĩa trạm dừng.
3. Diện tích / giường / sức chứa: ba cột chữ trên nền giấy, phân cách bằng đường mảnh; bỏ nền trắng nổi và shadow hiện tại.
4. 4-6 tiện ích chính, hai cột; phần còn lại là một dòng dịch vụ chung hoặc nội dung mở rộng trên web. Không xóa thông tin quan trọng khỏi PDF chỉ để đẹp.
5. Giá và đơn vị tính rõ ràng, giữ điều kiện áp dụng nếu có; CTA chỉ trên web khi có đích thật.

**Ảnh:** lưu focal point cho từng asset; dùng object-position theo ảnh, không mặc định center cho tất cả. Giữ giường, cửa vòm, tranh và vật thể chính không bị cắt cụt. Không lặp cùng ảnh làm cả hero lẫn gallery nếu còn ảnh phù hợp. Không đổi màu tường/chăn/nội thất để ép về palette.

### 5.5. Dining - PDF 13

- Một ảnh bàn ăn hoặc món ăn thật đủ lớn dẫn dắt; đoạn giới thiệu trên nền kem cạnh ảnh.
- Tiệm Nướng Nhà Gạo là tiêu đề rõ; câu dẫn 25-40 từ, 2-3 nét trải nghiệm cụ thể.
- Giữ một cụm ảnh phụ, bỏ nhãn đè ảnh không cần thiết. Ảnh buổi tối xanh đậm không nên chiếm ưu thế nếu bộ ảnh có lựa chọn dịu hơn.
- Giá khởi điểm, giờ đặt và liên hệ nằm cùng một khu vực để dễ tra cứu; không chỉnh số liệu khi chưa xác minh.

### 5.6. Menu - PDF 14

- Giữ hai mặt hiện tại, không tự tăng thêm trang ở vòng nâng cấp đầu.
- Mặt sáng/café: một ảnh món hoặc đồ uống đúng nội dung ở trên. Ảnh biển/tiệc buổi tối hiện tại không diễn đạt tốt bữa sáng; thay bằng asset thật phù hợp nếu có. Nếu không có, dùng ảnh không gian café và caption trung thực.
- Tiêu đề + đoạn dẫn ngắn, một khối điểm tâm; menu nước chia hai cột, tên căn trái, giá căn phải, khoảng hàng đều.
- Mặt tối/BBQ: một ảnh đồ ăn chiếm khoảng 25-30% diện tích; các set chia lưới hai cột, mỗi set có tên / số khách / món / giá theo cùng thứ tự.
- Ưu tiên đường kẻ nhẹ để chia set; chỉ một set nổi bật có nền nhạt nếu nội dung nguồn xác định đó là set nổi bật. Không tự thêm “bán chạy”.
- Chuẩn hóa cách viết tiền về một quy ước, ví dụ `215.000đ`; giữ nguyên giá trị. Không trộn K, VNĐ và đ tùy tiện.
- Nếu thiếu chỗ: bỏ câu tiếng Anh lặp nghĩa và nhãn trang trí trước, giữ nguyên món, giá và điều kiện.

### 5.7. Café và khám phá - PDF 15

- Mặt café: ảnh lớn sáng, tiêu đề và 2-3 dòng giới thiệu trên nền giấy; tránh ảnh mờ phủ tối với đoạn chữ dài.
- Mặt khám phá: một ảnh địa phương lớn + hai điểm đến gọn có tên, khoảng cách nếu đã xác nhận, một câu trải nghiệm.
- Không chèn bản đồ minh họa như bản đồ chỉ đường chính xác. Link bản đồ/QR phải dùng địa điểm đã có đích xác thực.
- Giữ nội dung và phạm vi hiện tại; không tự mở thêm bốn trang hệ sinh thái hoặc cẩm nang.

### 5.8. Nội quy và lời chào trước khi rời đi - PDF 16

- Bỏ pattern hạt/lá lặp phía sau nội dung hoặc giảm đến mức gần như không nhìn thấy; chọn nền giấy phẳng là mặc định.
- Nội quy trình bày như danh sách đánh số với đường kẻ mảnh, thay cho bốn thẻ trắng có shadow.
- Rút khoảng trống giữa tiêu đề và nội dung; dùng typography để nhấn giờ check-in/out và giờ yên tĩnh.
- Wi-Fi và hotline là một dải tra cứu riêng, dễ nhìn; không đặt ở font caption quá nhỏ.
- Mặt bên phải: checklist trả phòng, một panel đánh giá/QR vừa phải, lời cảm ơn ngắn. Không để QR chiếm vai trò tiêu đề chính.

## 6. Nội dung mâu thuẫn: không tự chốt khi redesign

| Mục | PDF hiện tại | Markdown đã đọc | Cách xử lý |
|---|---|---|---|
| GA-AN | 22m², 1 giường đôi, 2 khách | File phòng ghi 1 người lớn, giường 1m6 × 2m | Giữ dữ liệu đang vận hành trong vòng sửa UI; ghi cần xác nhận |
| Giờ yên tĩnh | 23:00-06:00 ở PDF 16 | 22:00-07:00 | Không tự đồng bộ bằng phỏng đoán |
| Wi-Fi | GAJO_HOUSE / gajoshouse ở PDF 16 | GAJO_GUEST / gajohouse2026 | Xác nhận với chủ nhà trước khi đổi |
| Trả phòng/chìa khóa | 12:00; có cách ghi 12:00 AM ở checklist | 11:00 hoặc 11:00-12:00 hoặc trước 12:00 | Gắn cờ cả mốc giờ lẫn AM/PM; không tự diễn giải 12:00 AM thành giờ trưa |
| Địa danh | Có nội dung Hoài Nhơn và diễn đạt cao nguyên | Các file dùng Bình Định / Gia Lai khác nhau | Chuẩn hóa sau khi được xác nhận, không sửa như một thay đổi mỹ thuật |

PDF là nguồn tham chiếu **thị giác** cho nhiệm vụ này, không phải bằng chứng mọi số liệu trong đó đã đúng. Agent lập danh sách cần xác nhận riêng và tiếp tục phần UI không bị phụ thuộc.

## 7. Yêu cầu web, mobile, flipbook và PDF

### Web/desktop

- Giữ trải nghiệm lật trang nếu đã hoạt động ổn định. Không thay thư viện chỉ để thay phong cách.
- Thanh điều hướng bên ngoài sách: mục lục, trang trước/sau, số trang và phóng to nếu có; kích thước bấm tối thiểu 44 × 44px, có focus rõ và nhãn truy cập.
- Không thu nhỏ cả spread đến mức chữ mất khả năng đọc; cung cấp zoom hoặc chế độ đọc một trang.
- Có điều hướng bàn phím; không can thiệp mũi tên khi người dùng đang gõ trong input.

### Mobile

- Hiển thị một mặt/trang mỗi lần hoặc chế độ đọc dọc từ cùng dữ liệu nếu kiến trúc hỗ trợ; không ép hai mặt nhỏ trên màn 390px.
- Dùng body tối thiểu 15px trong chế độ đọc responsive. Nếu thư viện bắt buộc scale trang, cung cấp zoom/chế độ đọc, không coi chữ bị scale xuống là đã đạt yêu cầu.
- CTA đặt phòng không che nội dung hoặc phần điều hướng; safe-area đúng.

### Motion

- Chuyển trạng thái UI 180-260ms; reveal tùy chọn 350-500ms với dịch chuyển 8-12px.
- Không autoplay zoom tất cả ảnh, không thêm parallax vào từng trang, không tự lật sách.
- Tôn trọng prefers-reduced-motion; trang export phải hoàn toàn tĩnh và hiện đầy đủ.
- PDF không chứng minh được hiệu ứng web hiện tại có lỗi; agent phải kiểm tra thực tế trước khi sửa motion.

### Xuất PDF

- Giữ tương thích khổ hiện tại: spread A4 ngang 297 × 210mm. Mỗi nửa gần A5 dọc, **không gọi mỗi nửa là A4**.
- Không tự chuyển sang từng trang A4 dọc; nếu sản phẩm có chế độ đó, xác định riêng kích thước và bố cục.
- Ẩn mũi tên, nút, counter runtime, overlay tương tác; vẫn giữ số trang biên tập và QR. PDF hiện có dấu mũi tên/counter trong phần trích xuất, cần kiểm tra nguồn và loại bỏ nếu đó là UI web bị in lọt.
- Đợi fonts.ready và ảnh load/decode trước khi chụp/in; vô hiệu transform/perspective/animation của flipbook ở renderer in nếu chúng làm mất trang.
- Đọc xuôi cho file gửi khách; không tự áp đặt thứ tự in đóng cuốn. Nếu cần imposition cho nhà in, làm thành chế độ riêng.
- Bìa trống: giữ nếu đúng chế độ spread; chế độ trang đơn không tạo thêm mặt trắng ngoài ý muốn.
- Không raster hóa toàn bộ văn bản thành ảnh. Giữ chữ chọn/copy được, dấu tiếng Việt đúng.

## 8. Kế hoạch triển khai cho coding agent

### Phase 0 - Xác định hiện trạng

1. Kiểm tra repository, branch đang được giao và working tree. Không tự chọn branch main/dev để ghi code; nếu chưa có branch làm việc, đề xuất một branch riêng và tuân thủ quy trình của repo.
2. Đọc AGENTS.md áp dụng nếu có; đọc package.json, lockfile, README và tài liệu thiết kế liên quan.
3. Tìm bằng rg các chuỗi trong PDF như `YOUR STAY`, `GA-AN`, `THE TASTE OF GAJO` để xác định renderer thật.
4. Xác định route home, catalogue, preview/print, nguồn room data, assets, page manifest. Không giả định file flipbook.html là entry đang hoạt động.
5. Chụp baseline desktop/mobile và export PDF. Ghi page count và các luồng hiện có.

**Đầu ra:** bản đồ file ngắn + danh sách nội dung mâu thuẫn + branch/commit nền. Sau đó tiếp tục triển khai, không dừng chỉ để hỏi xác nhận màu sắc nhỏ.

### Phase 1 - Tokens và hai mẫu đại diện

1. Đưa màu, spacing, chữ, radius vào hệ token có sẵn hoặc một chỗ dùng chung.
2. Làm hoàn chỉnh spread GA-AN theo template A và spread menu.
3. Kiểm tra font, overflow, crop ảnh, web và PDF ngay trên hai mẫu này.
4. Tinh chỉnh đến khi ảnh sáng tự nhiên, đoạn văn dễ đọc, card bớt nặng, khoảng trống hợp lý rồi mới nhân rộng.

### Phase 2 - Toàn bộ catalogue

1. Áp dụng template phòng cho đủ 9 phòng; thêm biến thể B ở các phòng có ảnh phù hợp.
2. Làm bìa, lời ngỏ, mục lục, tiện ích, dining, local guide, nội quy và bìa cuối.
3. Cập nhật số trang từ manifest; giữ ID ổn định để deep link và CTA không sai trang.
4. Tái sử dụng trách nhiệm component như PageShell, RoomSpread, RoomFacts, PhotoGallery, MenuSection, StayGuidelines nếu hợp kiến trúc; không tạo abstraction cho từng dòng chữ đơn lẻ.

### Phase 3 - Responsive và export

1. Hoàn thiện đọc mobile/zoom, bàn phím, focus, reduced motion.
2. Sửa stylesheet/renderer print dùng chung dữ liệu với web; tránh bản HTML thứ hai copy nội dung dễ lệch.
3. Kiểm tra toàn bộ 17 spread tương ứng hoặc page count mới có giải thích hợp lý. Không tăng số trang chỉ vì chưa tối ưu layout.

### Phase 4 - Bàn giao

- Chạy lint/typecheck/build theo scripts thật của repo; ghi rõ script nào không có hoặc không chạy được.
- Kiểm tra tương tác chính: mục lục → đúng phòng, prev/next, CTA đặt phòng, link bản đồ, QR, export.
- Chụp trước/sau cho bìa, GA-AN, một phòng template B, menu, nội quy; kèm mobile.
- Export PDF hoàn chỉnh và xem từng trang để phát hiện tràn/cắt chữ, ảnh mất, footer lặp, trang trắng ngoài ý muốn.
- Báo file thay đổi, phần đã kiểm tra, các nội dung cần chủ nhà xác nhận. Không tự deploy/publish nếu chưa được giao.

## 9. Tiêu chí nghiệm thu

- [ ] Giữ đủ 9 phòng, đúng ảnh và đúng dữ liệu nguồn đang vận hành; không tự thêm tiện ích/ưu đãi.
- [ ] Bố cục sáng, ấm; câu chuyện dài trên nền giấy; không còn mảng tối lớn chỉ để chứa chữ.
- [ ] Chỉ hai họ font; tiếng Việt không lỗi; body nhất quán, không thu nhỏ chữ để chữa overflow.
- [ ] Room spread có một ảnh chính rõ, không quá ba ảnh phụ; thông số dễ quét, giá cùng vị trí.
- [ ] Ít nhãn/pill/viền hơn baseline; không card hóa mọi tiện ích và dòng menu.
- [ ] Ảnh không bị kéo méo hoặc crop mất chủ thể; ảnh in mục tiêu ≥150ppi ở kích thước dùng, ưu tiên 200-300ppi nếu nguồn có sẵn; không upscale để giả chất lượng.
- [ ] Web kiểm tra tối thiểu 390px, 768px, 1440px; không cuộn ngang ngoài vùng sách có chủ đích.
- [ ] Chữ và UI đạt tương phản phù hợp: chữ thường 4.5:1, chữ lớn 3:1; không dùng oak/sage nhạt cho body trên kem khi chưa kiểm tra.
- [ ] Menu giữ đủ món, giá và điều kiện; không cắt mất dòng cuối hoặc chú thích.
- [ ] PDF đúng khổ đã chọn, không in nút điều hướng, không còn animation/transform làm ẩn trang.
- [ ] Số trang/TOC/deep link nhất quán; nửa trắng bìa được giải thích theo chế độ export.
- [ ] QR quét được từ file xuất; hotline/CTA đi đúng đích có sẵn.
- [ ] Có ảnh trước/sau và báo cáo kiểm tra; chỉ báo pass cho phần đã thực sự chạy/xem.

## 10. Prompt giao việc dùng ngay

> Đọc toàn bộ file kế hoạch này và triển khai nâng cấp UI catalogue GAJO'S HOUSE theo hướng Soft Boutique Editorial. PDF đính kèm là baseline thị giác. Bắt đầu bằng kiểm tra đúng repository, branch làm việc, AGENTS.md, entry render catalogue và luồng xuất PDF; không giả định cấu trúc Next.js hoặc HTML cũ còn đúng. Giữ nguyên dữ liệu nghiệp vụ và ảnh phòng thật, ghi riêng mâu thuẫn nội dung. Thực hiện lần lượt Phase 0-4, làm GA-AN và menu hoàn chỉnh trước khi nhân rộng. Ưu tiên ảnh sáng, nền giấy, chữ dễ đọc, ít card/nhãn và nhịp bố cục mềm. Giữ flipbook, deep link, responsive và export hiện có. Hoàn thành code cùng kiểm tra trực quan web/mobile/PDF; bàn giao ảnh trước/sau, file thay đổi và vấn đề còn lại. Không dừng ở việc viết lại kế hoạch; không tự deploy.

## 11. Tài liệu tham chiếu để agent mở

- PDF người dùng gửi: `GAJO'S HOUSE — In Room Catalogue 2026.pdf` - nguồn kiểm tra bố cục hiện tại.
- Repository: https://github.com/nvu-1801/gajo-house-showcase
- `TONG_HOP_CAM_NANG_GAJO_HOUSE.md`: định hướng nội dung tổng thể.
- `ROOM_STORIES_9STATIONS.md`: ý nghĩa từng trạm dừng.
- `MEMBERS_OF_GAO.md`, `LOCAL_CUISINE_GUIDE.md`, `LOCAL_TRAVEL_GUIDE.md`: đối chiếu nội dung trải nghiệm.
- `IN_ROOM_GUIDE.md`, `ASSET_COMPENSATION_POLICY.md`, `GA-AN.md`, `GA-MO.md`, `GA-DINH.md`: đối chiếu nghiệp vụ, không tự ưu tiên khi xung đột PDF/dữ liệu vận hành.
- `README.md`, `room-showcase-srs.md`: định hướng thiết kế; đối chiếu source hiện tại vì có mô tả HTML/catalogue 12 trang từ giai đoạn trước.
