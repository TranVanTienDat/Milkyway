# Kiểu chữ (Typography)

## Các Nguyên tắc Kiểu chữ Kinh điển

### Nhịp điệu Theo chiều dọc (Vertical Rhythm)

Chiều cao dòng (line-height) của bạn nên là đơn vị cơ sở cho TẤT CẢ các khoảng cách theo chiều dọc. Nếu văn bản chính có `line-height: 1.5` trên cỡ chữ `16px` (= 24px), thì các giá trị khoảng cách nên là bội số của 24px. Điều này tạo ra sự hài hòa ngầm—văn bản và không gian chia sẻ chung một nền tảng toán học.

### Thang đo Mô-đun & Phân cấp (Modular Scale & Hierarchy)

Sai lầm phổ biến: có quá nhiều cỡ chữ nằm quá sát nhau (14px, 15px, 16px, 18px...). Điều này tạo ra một sự phân cấp mờ nhạt.

**Hãy sử dụng ít cỡ chữ hơn với độ tương phản cao hơn.** Một hệ thống 5 cỡ chữ là đủ cho hầu hết các nhu cầu:

| Vai trò | Tỷ lệ Điển hình | Trường hợp Sử dụng |
|------|---------------|----------|
| **xs** | 0.75rem | Chú thích, văn bản pháp lý |
| **sm** | 0.875rem | Giao diện phụ, metadata |
| **base** | 1rem | Văn bản chính |
| **lg** | 1.25-1.5rem | Tiêu đề phụ, văn bản dẫn dắt |
| **xl+** | 2-4rem | Tiêu đề chính, văn bản hero |

Các tỷ lệ phổ biến: 1.25 (major third), 1.333 (perfect fourth), 1.5 (perfect fifth). Hãy chọn một cái và trung thành với nó.

### Khả năng đọc & Độ dài dòng (Readability & Measure)

Sử dụng đơn vị `ch` để đo lường dựa trên số ký tự (`max-width: 65ch`). Chiều cao dòng tỉ lệ nghịch với độ dài dòng—các cột hẹp cần khoảng cách dòng (leading) chặt chẽ hơn, các cột rộng cần nhiều hơn.

**Điều không hiển nhiên**: Hãy tăng line-height cho văn bản sáng màu trên nền tối. Trọng lượng cảm nhận sẽ nhẹ hơn, vì vậy văn bản cần nhiều không gian để "thở" hơn. Hãy cộng thêm 0.05-0.1 vào line-height bình thường của bạn.

## Lựa chọn & Kết hợp Phông chữ (Font Selection & Pairing)

### Chọn Phông chữ có Cá tính

**Tránh các phông chữ mặc định "vô hình"**: Inter, Roboto, Open Sans, Lato, Montserrat. Những phông này xuất hiện ở khắp mọi nơi, làm cho thiết kế của bạn có cảm giác đại trà. chúng ổn cho các tài liệu hoặc công cụ mà cá tính không phải là mục tiêu—nhưng nếu bạn muốn một thiết kế khác biệt, hãy tìm kiếm ở nơi khác.

**Các lựa chọn thay thế tốt hơn trên Google Fonts**:
- Thay vì Inter → **Instrument Sans**, **Plus Jakarta Sans**, **Outfit**
- Thay vì Roboto → **Onest**, **Figtree**, **Urbanist**
- Thay vì Open Sans → **Source Sans 3**, **Nunito Sans**, **DM Sans**
- Cho cảm giác cao cấp/biên tập → **Fraunces**, **Newsreader**, **Lora**

**Phông chữ hệ thống thường bị đánh giá thấp**: `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui` mang lại cảm giác nguyên bản (native), tải tức thì và có khả năng đọc cực cao. Hãy cân nhắc điều này cho các ứng dụng mà hiệu suất quan trọng hơn cá tính.

### Các Nguyên tắc Kết hợp

**Sự thật không hiển nhiên**: Thường thì bạn không cần đến phông chữ thứ hai. Một bộ phông chữ được chọn kỹ lưỡng với nhiều độ dày (weights) khác nhau sẽ tạo ra sự phân cấp gọn gàng hơn là hai kiểu chữ cạnh tranh nhau. Chỉ thêm phông chữ thứ hai khi bạn thực sự cần độ tương phản (ví dụ: tiêu đề hiển thị + văn bản serif).

Khi kết hợp, hãy tạo sự tương phản trên nhiều phương diện:
- Serif + Sans (tương phản về cấu trúc).
- Hình học (Geometric) + Nhân bản (Humanist) (tương phản về cá tính).
- Display hẹp + Body rộng (tương phản về tỷ lệ).

**Tuyệt đối không kết hợp các phông chữ tương tự nhau nhưng không giống hệt nhau** (ví dụ: hai phông sans-serif hình học). Chúng tạo ra sự căng thẳng thị giác mà không có phân cấp rõ ràng.

### Tải Phông chữ Web (Web Font Loading)

Vấn đề thay đổi bố cục (layout shift): phông chữ tải chậm, văn bản bị nhảy, và người dùng thấy nội dung bị dịch chuyển. Đây là cách khắc phục:

```css
/* 1. Sử dụng font-display: swap để hiển thị ngay lập tức */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}

/* 2. Căn chỉnh các thông số của phông chữ dự phòng để giảm thiểu sự dịch chuyển */
@font-face {
  font-family: 'CustomFont-Fallback';
  src: local('Arial');
  size-adjust: 105%;        /* Tỷ lệ để khớp với x-height */
  ascent-override: 90%;     /* Khớp với chiều cao phần trên */
  descent-override: 20%;    /* Khớp với chiều sâu phần dưới */
  line-gap-override: 10%;   /* Khớp với khoảng cách dòng */
}

body {
  font-family: 'CustomFont', 'CustomFont-Fallback', sans-serif;
}
```

Các công cụ như [Fontaine](https://github.com/unjs/fontaine) sẽ tự động tính toán các giá trị này.

## Kiểu chữ Web Hiện đại

### Kiểu chữ Linh hoạt (Fluid Type)

Kiểu chữ linh hoạt thông qua `clamp(min, preferred, max)` sẽ thay đổi kích thước văn bản một cách mượt mà theo khung nhìn (viewport). Giá trị ở giữa (ví dụ: `5vw + 1rem`) kiểm soát tốc độ thay đổi—vw càng cao, thay đổi càng nhanh. Hãy thêm một giá trị rem để văn bản không bị thu nhỏ về 0 trên các màn hình nhỏ.

**Sử dụng kiểu chữ linh hoạt cho**: Các tiêu đề và văn bản hiển thị trên các trang marketing/nội dung, nơi văn bản chiếm ưu thế trong bố cục và cần "thở" theo kích thước khung nhìn.

**Sử dụng thang đo `rem` cố định cho**: Giao diện ứng dụng (App UIs), bảng điều khiển (dashboards) và các giao diện có mật độ dữ liệu cao. Không có hệ thống thiết kế ứng dụng lớn nào (Material, Polaris, Primer, Carbon) sử dụng kiểu chữ linh hoạt trong giao diện sản phẩm—thang đo cố định mang lại khả năng dự đoán không gian mà các bố cục dựa trên container cần. Văn bản chính cũng nên được cố định ngay cả trên các trang marketing, vì sự khác biệt về kích thước trên các khung nhìn là quá nhỏ để cần đến tính linh hoạt này.

### Các Tính năng OpenType

Hầu hết các nhà phát triển không biết rằng những tính năng này tồn tại. Hãy sử dụng chúng để làm thiết kế tinh tế hơn:

```css
/* Số dạng bảng (Tabular numbers) để căn chỉnh dữ liệu */
.data-table { font-variant-numeric: tabular-nums; }

/* Các phân số đúng chuẩn */
.recipe-amount { font-variant-numeric: diagonal-fractions; }

/* Chữ hoa nhỏ (Small caps) cho các từ viết tắt */
abbr { font-variant-caps: all-small-caps; }

/* Tắt các chữ nối (ligatures) trong mã nguồn */
code { font-variant-ligatures: none; }

/* Bật tính năng kerning (khoảng cách giữa các chữ cái) */
body { font-kerning: normal; }
```

Kiểm tra các tính năng mà phông chữ của bạn hỗ trợ tại [Wakamai Fondue](https://wakamaifondue.com/).

## Kiến trúc Hệ thống Kiểu chữ

Đặt tên các token theo ngữ nghĩa (`--text-body`, `--text-heading`), không đặt theo giá trị (`--font-size-16`). Bao gồm các danh sách phông chữ dự phòng (font stacks), thang đo kích thước, độ dày, chiều cao dòng và khoảng cách chữ cái (letter-spacing) trong hệ thống token của bạn.

## Các Cân nhắc về Khả năng truy cập (Accessibility)

Ngoài tỷ lệ tương phản (vốn đã được ghi chép đầy đủ), hãy cân nhắc:

- **Tuyệt đối không tắt tính năng zoom**: `user-scalable=no` phá vỡ khả năng truy cập. Nếu bố cục của bạn bị vỡ ở mức zoom 200%, hãy sửa lại bố cục đó.
- **Sử dụng rem/em cho cỡ chữ**: Điều này tôn trọng cài đặt trình duyệt của người dùng. Tuyệt đối không dùng `px` cho văn bản chính.
- **Văn bản chính tối thiểu 16px**: Nhỏ hơn mức này sẽ gây mỏi mắt và không đạt chuẩn WCAG trên di động.
- **Mục tiêu chạm đầy đủ**: Các liên kết văn bản cần padding hoặc chiều cao dòng đủ để tạo ra vùng chạm 44px+.

---

**Tránh**: Sử dụng quá 2-3 bộ phông chữ trong một dự án. Bỏ qua việc định nghĩa phông chữ dự phòng. Phớt lờ hiệu suất tải phông chữ (FOUT/FOIT). Sử dụng các phông chữ trang trí cho văn bản chính.
