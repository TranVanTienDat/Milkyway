# Thiết kế Chuyển động (Motion Design)

## Thời gian (Duration): Quy tắc 100/300/500

Thời gian quan trọng hơn hiệu ứng (easing). Những khoảng thời gian này mang lại cảm giác đúng đắn cho hầu hết giao diện người dùng (UI):

| Thời gian | Trường hợp Sử dụng | Ví dụ |
|----------|----------|----------|
| **100-150ms** | Phản hồi tức thì | Nhấn nút, bật/tắt (toggle), thay đổi màu sắc |
| **200-300ms** | Thay đổi trạng thái | Mở menu, tooltip, các trạng thái hover |
| **300-500ms** | Thay đổi bố cục | Accordion, modal, ngăn kéo (drawer) |
| **500-800ms** | Hiệu ứng xuất hiện | Tải trang, tiết lộ phần chính (hero reveals) |

**Hiệu ứng biến mất nhanh hơn hiệu ứng xuất hiện**—hãy sử dụng khoảng ~75% thời gian xuất hiện.

## Hiệu ứng (Easing): Chọn đường cong phù hợp

**Đừng sử dụng `ease`.** Đây là một phương án thỏa hiệp và hiếm khi tối ưu. Thay vào đó:

| Đường cong | Sử dụng cho | CSS |
|-------|---------|-----|
| **ease-out** | Các thành phần đi vào | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **ease-in** | Các thành phần đi ra | `cubic-bezier(0.7, 0, 0.84, 0)` |
| **ease-in-out** | Các trạng thái bật/tắt (đi -> về) | `cubic-bezier(0.65, 0, 0.35, 1)` |

**Đối với các tương tác siêu nhỏ (micro-interactions), hãy sử dụng các đường cong hàm mũ (exponential curves)**—chúng mang lại cảm giác tự nhiên vì mô phỏng vật lý thực tế (ma sát, giảm tốc):

```css
/* Quart out - mượt mà, tinh tế (khuyên dùng làm mặc định) */
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);

/* Quint out - kịch tính hơn một chút */
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);

/* Expo out - nhanh gọn, tự tin */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
```

**Tránh các đường cong nảy (bounce) và đàn hồi (elastic).** Chúng đã từng là xu hướng vào năm 2015 nhưng hiện nay mang lại cảm giác rẻ tiền và thiếu chuyên nghiệp. Các vật thể thực tế không nảy khi dừng lại—chúng giảm tốc một cách mượt mà. Các hiệu ứng vượt quá (overshoot) làm người dùng chú ý vào chính hiệu ứng đó thay vì nội dung.

## Chỉ có hai Thuộc tính bạn nên tạo Chuyển động

Chỉ nên sử dụng **transform** và **opacity**—tất cả các thuộc tính khác đều gây ra việc tính toán lại bố cục (layout recalculation). Đối với hiệu ứng chiều cao (như accordions), hãy sử dụng `grid-template-rows: 0fr → 1fr` thay vì thay đổi trực tiếp `height`.

## Chuyển động So le (Staggered Animations)

Sử dụng các biến CSS (CSS custom properties) để tạo hiệu ứng so le gọn gàng hơn: `animation-delay: calc(var(--i, 0) * 50ms)` với `style="--i: 0"` trên mỗi mục. **Giới hạn tổng thời gian so le**—10 mục với 50ms = 500ms tổng cộng. Đối với nhiều mục, hãy giảm độ trễ của từng mục hoặc giới hạn số mục được so le.

## Giảm Chuyển động (Reduced Motion)

Đây không phải là một tùy chọn thêm. Các rối loạn tiền đình (vestibular disorders) ảnh hưởng đến ~35% người trưởng thành trên 40 tuổi.

```css
/* Định nghĩa hiệu ứng bình thường */
.card {
  animation: slide-up 500ms ease-out;
}

/* Cung cấp phương án thay thế khi người dùng muốn giảm chuyển động */
@media (prefers-reduced-motion: reduce) {
  .card {
    animation: fade-in 200ms ease-out;  /* Sử dụng hiệu ứng mờ dần thay vì chuyển động */
  }
}

/* Hoặc tắt hoàn toàn */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Những gì cần giữ lại**: Các hiệu ứng chức năng như thanh tiến trình (progress bars), spinner đang tải (được làm chậm lại) và các chỉ báo tiêu điểm (focus indicators) vẫn nên hoạt động—chỉ là không có chuyển động trong không gian.

## Hiệu suất Cảm nhận (Perceived Performance)

**Không ai quan tâm trang web của bạn nhanh đến mức nào—họ chỉ quan tâm nó mang lại cảm giác nhanh đến mức nào.** Cảm nhận có thể hiệu quả tương đương với hiệu suất thực tế.

**Ngưỡng 80ms**: Bộ não của chúng ta đệm thông tin giác quan trong khoảng ~80ms để đồng bộ hóa cảm nhận. Bất cứ điều gì dưới 80ms đều mang lại cảm giác tức thì và đồng thời. Đây là mục tiêu của bạn cho các tương tác siêu nhỏ.

**Thời gian chủ động và thụ động**: Chờ đợi thụ động (nhìn chằm chằm vào một spinner) có cảm giác lâu hơn so với tham gia chủ động. Các chiến lược để thay đổi sự cân bằng:

- **Bắt đầu sớm (Preemptive start)**: Bắt đầu các quá trình chuyển đổi ngay lập tức trong khi đang tải (giống như phóng to ứng dụng trên iOS, skeleton UI). Người dùng cảm thấy công việc đang diễn ra.
- **Hoàn thành sớm**: Hiển thị nội dung dần dần—đừng đợi tất cả mọi thứ. Đệm video (video buffering), hình ảnh tăng dần (progressive images), streaming HTML.
- **UI Lạc quan (Optimistic UI)**: Cập nhật giao diện ngay lập tức, xử lý các lỗi một cách khéo léo. Nút like trên Instagram hoạt động ngay cả khi ngoại tuyến—UI cập nhật tức thì, đồng bộ sau. Sử dụng cho các hành động ít rủi ro; tránh dùng cho thanh toán hoặc các thao tác phá hủy.

**Hiệu ứng ảnh hưởng đến thời gian cảm nhận**: Ease-in (tăng tốc về phía kết thúc) làm cho các nhiệm vụ có cảm giác ngắn hơn vì hiệu ứng "đỉnh-kết" (peak-end effect) nhấn mạnh vào những khoảnh khắc cuối cùng. Ease-out mang lại cảm giác hài lòng khi bắt đầu, nhưng ease-in về phía kết thúc nhiệm vụ sẽ nén thời gian cảm nhận lại.

**Thận trọng**: Phản hồi quá nhanh có thể làm giảm giá trị cảm nhận. Người dùng có thể không tin tưởng các kết quả tức thì cho các thao tác phức tạp (tìm kiếm, phân tích). Đôi khi một sự trì hoãn ngắn báo hiệu rằng "công việc thực tế" đang được thực hiện.

## Hiệu suất (Performance)

Đừng sử dụng `will-change` một cách tùy tiện—chỉ dùng khi hiệu ứng sắp xảy ra (`:hover`, `.animating`). Đối với các hiệu ứng kích hoạt khi cuộn (scroll-triggered), hãy sử dụng Intersection Observer thay vì các sự kiện scroll; hãy ngắt quan sát (unobserve) sau khi hiệu ứng đã diễn ra một lần. Tạo các mã hiệu ứng (motion tokens) để đạt được sự nhất quán (thời gian, hiệu ứng, các chuyển đổi phổ biến).

---

**Tránh**: Tạo hiệu ứng cho tất cả mọi thứ (sự mệt mỏi vì hiệu ứng là có thật). Sử dụng >500ms cho các phản hồi UI. Bỏ qua `prefers-reduced-motion`. Sử dụng hiệu ứng để che giấu việc tải trang chậm.
