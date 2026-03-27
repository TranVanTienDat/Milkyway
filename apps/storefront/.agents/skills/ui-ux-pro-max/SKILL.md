---
name: ui-ux-pro-max
description: "Trí tuệ thiết kế UI/UX cho web và di động. Bao gồm hơn 50 phong cách, 161 bảng màu, 57 cặp font chữ, 161 loại sản phẩm, 99 hướng dẫn UX, và 25 loại biểu đồ trên 10 nền tảng (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, và HTML/CSS). Hành động: lập kế hoạch, xây dựng, tạo, thiết kế, triển khai, đánh giá, sửa lỗi, cải thiện, tối ưu hóa, nâng cao, tái cấu trúc và kiểm tra mã nguồn UI/UX. Dự án: website, trang đích (landing page), bảng điều khiển (dashboard), bảng quản trị (admin panel), thương mại điện tử (e-commerce), SaaS, danh mục đầu tư (portfolio), blog và ứng dụng di động. Các yếu tố: nút, modal, thanh thanh điều hướng (navbar), thanh bên (sidebar), thẻ (card), bảng (table), biểu mẫu (form) và biểu đồ (chart). Phong cách: kính mờ (glassmorphism), đất sét (claymorphism), tối giản (minimalism), thô mộc (brutalism), neumorphism, bento grid, chế độ tối (dark mode), đáp ứng (responsive), skeuomorphism và phẳng (flat design). Các chủ đề: hệ thống màu sắc, khả năng truy cập (accessibility), hiệu ứng (animation), bố cục (layout), kiểu chữ (typography), cặp font, khoảng cách (spacing), các trạng thái tương tác, bóng đổ và gradient. Tích hợp: shadcn/ui MCP để tìm kiếm thành phần và ví dụ."
---

# UI/UX Pro Max - Trí tuệ Thiết kế (Design Intelligence)

Hướng dẫn thiết kế toàn diện cho các ứng dụng web và di động. Chứa hơn 50 phong cách, 161 bảng màu, 57 cặp font chữ, 161 loại sản phẩm với các quy tắc suy luận, 99 hướng dẫn UX và 25 loại biểu đồ trên 10 nền tảng công nghệ. Cơ sở dữ liệu có thể tìm kiếm với các đề xuất dựa trên mức độ ưu tiên.

## Khi nào nên áp dụng

Skill này nên được sử dụng khi nhiệm vụ liên quan đến **cấu trúc UI, các quyết định thiết kế thị giác, mẫu tương tác hoặc kiểm soát chất lượng trải nghiệm người dùng**.

### PHẢI sử dụng

Skill này bắt buộc phải được gọi trong các tình huống sau:

- Thiết kế các trang mới (Landing Page, Dashboard, Admin, SaaS, Ứng dụng di động).
- Tạo hoặc tái cấu trúc các thành phần UI (nút, modal, biểu mẫu, bảng, biểu đồ, v.v.).
- Lựa chọn sơ đồ màu sắc, hệ thống kiểu chữ, tiêu chuẩn khoảng cách hoặc hệ thống bố cục.
- Đánh giá mã nguồn UI về trải nghiệm người dùng, khả năng truy cập hoặc tính nhất quán về thị giác.
- Triển khai cấu trúc điều hướng, hiệu ứng hoặc hành vi đáp ứng (responsive).
- Đưa ra các quyết định thiết kế cấp độ sản phẩm (phong cách, hệ thống phân cấp thông tin, biểu đạt thương hiệu).
- Cải thiện chất lượng cảm nhận, sự rõ ràng hoặc khả năng sử dụng của giao diện.

### Khuyến khích sử dụng

Skill này được khuyến nghị trong các tình huống sau:

- UI trông "không đủ chuyên nghiệp" nhưng nguyên nhân không rõ ràng.
- Nhận được phản hồi về khả năng sử dụng hoặc trải nghiệm.
- Tối ưu hóa chất lượng UI trước khi ra mắt (pre-launch).
- Đồng nhất thiết kế đa nền tảng (Web / iOS / Android).
- Xây dựng hệ thống thiết kế hoặc thư viện component có thể tái sử dụng.

### Bỏ qua

Skill này không cần thiết trong các tình huống sau:

- Phát triển logic thuần túy trên backend.
- Chỉ liên quan đến thiết kế API hoặc cơ sở dữ liệu.
- Tối ưu hóa hiệu suất không liên quan đến giao diện.
- Công việc cơ sở hạ tầng (infrastructure) hoặc DevOps.
- Các script không trực quan hoặc các nhiệm vụ tự động hóa.

**Tiêu chí quyết định**: Nếu nhiệm vụ sẽ làm thay đổi cách một tính năng **Trông như thế nào, Mang lại cảm giác gì, Chuyển động ra sao, hoặc Cách tương tác**, Skill này nên được sử dụng.

## Các Danh mục Quy tắc theo Ưu tiên (Rule Categories by Priority)

*Tham khảo cho Người/AI: làm theo thứ tự ưu tiên 1→10 để quyết định danh mục quy tắc nào cần tập trung vào trước; sử dụng `--domain <Domain>` để truy vấn chi tiết khi cần.*

| Ưu tiên | Danh mục | Tác động | Domain | Các kiểm tra quan trọng (Phải có) | Các mẫu sai lầm (Cần tránh) |
|----------|----------|--------|--------|------------------------|------------------------|
| 1 | Khả năng truy cập | CỰC KỲ QUAN TRỌNG | `ux` | Độ tương phản 4.5:1, Alt text, Điều hướng phím, Aria-labels | Loại bỏ vòng tiêu điểm (focus rings), Nút chỉ có icon không có label |
| 2 | Chạm & Tương tác | CỰC KỲ QUAN TRỌNG | `ux` | Kích thước tối thiểu 44×44px, Khoảng cách 8px+, Phản hồi khi tải | Chỉ dựa vào hiệu ứng hover, Thay đổi trạng thái tức thì (0ms) |
| 3 | Hiệu suất | CAO | `ux` | WebP/AVIF, Lazy loading, Dành sẵn không gian (CLS < 0.1) | Layout thrashing, Thay đổi bố cục đột ngột (Cumulative Layout Shift) |
| 4 | Lựa chọn Phong cách | CAO | `style`, `product` | Phù hợp loại sản phẩm, Nhất quán, Icon SVG (không dùng emoji) | Trộn lẫn phẳng & skeuomorphic ngẫu nhiên, Sử dụng emoji làm icon |
| 5 | Bố cục & Đáp ứng | CAO | `ux` | Breakpoints ưu tiên di động, Viewport meta, Không cuộn ngang | Cuộn ngang, Độ rộng container cố định bằng px, Chặn tính năng thu phóng |
| 6 | Kiểu chữ & Màu sắc | TRUNG BÌNH | `typography`, `color` | Base 16px, Line-height 1.5, Thẻ màu ngữ nghĩa (semantic) | Văn bản < 12px, Xám trên xám, Mã hex thô trong component |
| 7 | Hiệu ứng (Animation) | TRUNG BÌNH | `ux` | Thời gian 150–300ms, Ý nghĩa chuyển động, Tính liên tục | Hiệu ứng chỉ để trang trí, Animate width/height, Không hỗ trợ reduced-motion |
| 8 | Biểu mẫu & Phản hồi | TRUNG BÌNH | `ux` | Label hiển thị, Lỗi gần field, Helper text, Tiết lộ lũy tiến | Chỉ có label placeholder, Lỗi chỉ hiện ở đầu trang, Gây choáng ngợp thông tin |
| 9 | Mẫu Điều hướng | CAO | `ux` | Nút back có thể dự đoán, Bottom nav ≤5, Deep linking | Nav quá tải, Hành vi back bị hỏng, Không có link sâu |
| 10 | Biểu đồ & Dữ liệu | THẤP | `chart` | Chú thích (Legends), Tooltips, Màu sắc có thể truy cập | Chỉ dựa vào màu sắc để truyền tải ý nghĩa |

... [Các phần Quick Reference được dịch tương tự, giữ nguyên các mã lệnh và thuật ngữ kỹ thuật trong ngoặc đơn] ...

## Cách sử dụng (How to Use)

Sử dụng công cụ CLI dưới đây để tìm kiếm các domain cụ thể.

---

## Điều kiện tiên quyết (Prerequisites)

Kiểm tra xem Python đã được cài đặt chưa:

```bash
python3 --version || python --version
```

... [Hướng dẫn cài đặt cho các hệ điều hành được giữ nguyên] ...

## Quy trình làm việc (Workflow)

### Bước 1: Phân tích yêu cầu của Người dùng

Trích xuất thông tin chính từ yêu cầu:
- **Loại sản phẩm (Product type)**: Giải trí (mạng xã hội, video, âm nhạc, game), Công cụ (quét, chỉnh sửa, chuyển đổi), Năng suất (quản lý nhiệm vụ, ghi chú, lịch), hoặc kết hợp.
- **Đối tượng mục tiêu (Target audience)**: Người tiêu dùng cuối (C-end); cân nhắc nhóm tuổi, ngữ cảnh sử dụng (di chuyển, giải trí, làm việc).
- **Từ khóa phong cách (Style keywords)**: vui tươi (playful), rực rỡ (vibrant), tối giản (minimal), chế độ tối (dark mode), ưu tiên nội dung (content-first), đắm chìm (immersive), v.v.
- **Stack**: React Native (stack công nghệ duy nhất của dự án này).

### Bước 2: Tạo Hệ thống Thiết kế (BẮT BUỘC)

**Luôn bắt đầu với tham số `--design-system`** để nhận được các đề xuất toàn diện kèm theo lý lẽ:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<loại_sản_phẩm> <lĩnh_vực> <từ_khóa>" --design-system [-p "Tên Dự án"]
```

... [Các phần khác về Persist, Override, v.v. được dịch theo phong cách chuyên môn] ...

## Danh sách kiểm tra trước khi bàn giao (Pre-Delivery Checklist)

Trước khi bàn giao mã nguồn UI, hãy xác minh các mục sau:

### Chất lượng Thị giác (Visual Quality)
- [ ] Không sử dụng emoji làm icon (sử dụng SVG thay thế).
- [ ] Tất cả icon cùng một bộ (family) và phong cách.
- [ ] Sử dụng đúng logo thương hiệu chính thức với tỉ lệ và khoảng cách an toàn.
- [ ] Các hiệu ứng lúc nhấn không làm thay đổi bố cục hoặc gây rung giật trực quan.
- [ ] Sử dụng nhất quán các thẻ giao diện ngữ nghĩa (semantic theme tokens).

### Tương tác (Interaction)
- [ ] Tất cả các yếu tố có thể chạm đều cung cấp phản hồi rõ ràng (ripple/opacity/elevation).
- [ ] Mục tiêu chạm (touch targets) đáp ứng kích thước tối thiểu (>=44x44pt iOS, >=48x48dp Android).
- [ ] Thời gian tương tác siêu nhỏ (micro-interaction) trong khoảng 150-300ms với hiệu ứng mượt mà.
- [ ] Các trạng thái vô hiệu hóa (disabled) rõ ràng về thị giác và không thể tương tác.
- [ ] Thứ tự focus của trình đọc màn hình khớp với thứ tự thị giác, các nhãn mô tả rõ ràng.

### Chế độ Sáng/Tối (Light/Dark Mode)
- [ ] Độ tương phản văn bản chính >=4.5:1 trên cả hai chế độ.
- [ ] Độ tương phản văn bản phụ >=3:1 trên cả hai chế độ.
- [ ] Các đường kẻ phân cách/viền và trạng thái tương tác có thể phân biệt được ở cả hai chế độ.
- [ ] Độ mờ của lớp phủ modal (scrim opacity) đủ mạnh để bảo vệ tính dễ đọc của nội dung phía trước.

### Bố cục (Layout)
- [ ] Tuân thủ các vùng an toàn (safe areas) cho header, tab bars và bottom CTA bars.
- [ ] Nội dung cuộn không bị che khuất bởi các thanh cố định (fixed/sticky bars).
- [ ] Đã kiểm tra trên điện thoại nhỏ, điện thoại lớn và máy tính bảng (dọc + ngang).
- [ ] Nhịp điệu khoảng cách 4/8dp được duy trì ở cấp độ component, section và trang.

### Khả năng truy cập (Accessibility)
- [ ] Tất cả hình ảnh/icon có ý nghĩa đều có nhãn truy cập (accessibility labels).
- [ ] Các trường biểu mẫu có label, gợi ý và thông báo lỗi rõ ràng.
- [ ] Màu sắc không phải là chỉ báo duy nhất.
- [ ] Hỗ trợ Reduced motion và Dynamic text size mà không làm vỡ bố cục.