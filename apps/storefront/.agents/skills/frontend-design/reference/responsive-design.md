# Thiết kế Đáp ứng (Responsive Design)

## Ưu tiên Di động (Mobile-First): Hãy làm đúng cách

Hãy bắt đầu với các kiểu dáng cơ bản cho di động, sau đó sử dụng các truy vấn `min-width` (min-width queries) để thêm các lớp phức tạp dần lên. Việc ưu tiên máy tính để bàn (desktop-first với `max-width`) nghĩa là thiết bị di động sẽ phải tải các kiểu dáng không cần thiết trước.

## Các điểm ngắt (Breakpoints): Dựa trên Nội dung

Đừng chạy theo kích thước của các thiết bị—hãy để nội dung cho bạn biết nơi nào cần ngắt. Hãy bắt đầu từ chiều rộng hẹp, kéo giãn cho đến khi thiết kế bị vỡ, và thêm điểm ngắt ở đó. Ba điểm ngắt thường là đủ (640, 768, 1024px). Hãy sử dụng hàm `clamp()` cho các giá trị linh hoạt mà không cần điểm ngắt.

## Phát hiện Phương thức Nhập liệu, không chỉ Kích thước Màn hình

**Kích thước màn hình không cho bạn biết phương thức nhập liệu.** Một chiếc máy tính xách tay có màn hình cảm ứng, một chiếc máy tính bảng có bàn phím—hãy sử dụng các truy vấn con trỏ (pointer) và hover:

```css
/* Con trỏ chính xác (chuột, trackpad) */
@media (pointer: fine) {
  .button { padding: 8px 16px; }
}

/* Con trỏ thô (cảm ứng, bút stylus) */
@media (pointer: coarse) {
  .button { padding: 12px 20px; }  /* Mục tiêu chạm lớn hơn */
}

/* Thiết bị hỗ trợ hover */
@media (hover: hover) {
  .card:hover { transform: translateY(-2px); }
}

/* Thiết bị không hỗ trợ hover (cảm ứng) */
@media (hover: none) {
  .card { /* Không có trạng thái hover - hãy sử dụng active thay thế */ }
}
```

**Quan trọng**: Đừng dựa vào hover cho các chức năng thiết yếu. Người dùng cảm ứng không thể thực hiện thao tác hover.

## Các vùng An toàn (Safe Areas): Xử lý phần "Tai thỏ" (Notch)

Các điện thoại hiện đại có phần tai thỏ, các góc bo tròn và các thanh chỉ báo trang chủ. Hãy sử dụng hàm `env()`:

```css
body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* Có phương án dự phòng (fallback) */
.footer {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
```

**Kích hoạt viewport-fit** trong thẻ meta của bạn:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## Hình ảnh Đáp ứng (Responsive Images): Hãy làm đúng

### srcset với Chỉ thị Chiều rộng (Width Descriptors)

```html
<img
  src="hero-800.jpg"
  srcset="
    hero-400.jpg 400w,
    hero-800.jpg 800w,
    hero-1200.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Ảnh chính (Hero image)"
>
```

**Cơ chế hoạt động**:
- `srcset` liệt kê các hình ảnh có sẵn với chiều rộng thực tế của chúng (chỉ thị `w`).
- `sizes` cho trình duyệt biết hình ảnh sẽ hiển thị rộng bao nhiêu.
- Trình duyệt sẽ chọn tệp tốt nhất dựa trên chiều rộng của khung nhìn (viewport) VÀ tỷ lệ pixel của thiết bị (device pixel ratio).

### Phân tử Picture cho Chỉ hướng Nghệ thuật (Art Direction)

Khi bạn cần các cách cắt cúp hoặc bố cục khác nhau (không chỉ là độ phân giải):

```html
<picture>
  <source media="(min-width: 768px)" srcset="wide.jpg">
  <source media="(max-width: 767px)" srcset="tall.jpg">
  <img src="fallback.jpg" alt="...">
</picture>
```

## Các Mẫu Thích nghi Bố cục (Layout Adaptation Patterns)

**Điều hướng (Navigation)**: Ba giai đoạn—menu hamburger + ngăn kéo (drawer) trên di động, hiển thị ngang thu gọn trên máy tính bảng, và đầy đủ với các nhãn trên máy tính để bàn. **Bảng (Tables)**: Chuyển đổi thành dạng thẻ (cards) trên di động bằng cách sử dụng `display: block` và các thuộc tính `data-label`. **Tiết lộ dần dần (Progressive disclosure)**: Sử dụng `<details>/<summary>` cho các nội dung có thể thu gọn trên di động.

## Kiểm tra: Đừng chỉ tin vào DevTools

Việc mô phỏng thiết bị trên DevTools rất hữu ích cho bố cục nhưng sẽ bỏ qua:

- Các tương tác chạm thực tế.
- Các giới hạn thực tế về CPU/bộ nhớ.
- Các mẫu trễ mạng (network latency).
- Sự khác biệt về hiển thị font chữ.
- Sự xuất hiện của giao diện trình duyệt/bàn phím.

**Hãy kiểm tra trên ít nhất**: Một chiếc iPhone thật, một chiếc Android thật, và một chiếc máy tính bảng nếu cần thiết. Các điện thoại Android giá rẻ sẽ tiết lộ các vấn đề về hiệu suất mà bạn không bao giờ thấy trên các trình giả lập.

---

**Tránh**: Thiết kế ưu tiên máy tính để bàn (desktop-first). Phát hiện thiết bị (device detection) thay vì phát hiện tính năng (feature detection). Tách biệt mã nguồn cho di động và máy tính để bàn. Bỏ qua máy tính bảng và chế độ xoay ngang. Giả định rằng mọi thiết bị di động đều mạnh mẽ.
