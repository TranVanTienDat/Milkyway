# Màu sắc & Độ tương phản (Color & Contrast)

## Không gian màu: Hãy sử dụng OKLCH

**Hãy ngừng sử dụng HSL.** Thay vào đó, hãy sử dụng OKLCH (hoặc LCH). Nó đồng nhất về mặt tri giác (perceptually uniform), nghĩa là các bước thay đổi độ sáng bằng nhau sẽ *trông* bằng nhau—không giống như HSL, nơi độ sáng 50% ở màu vàng trông rất rực rỡ trong khi 50% ở màu xanh dương trông lại rất tối.

```css
/* OKLCH: độ sáng/lightness (0-100%), độ bão hòa/chroma (0-0.4+), tông màu/hue (0-360) */
--color-primary: oklch(60% 0.15 250);      /* Xanh dương */
--color-primary-light: oklch(85% 0.08 250); /* Cùng tông, sáng hơn */
--color-primary-dark: oklch(35% 0.12 250);  /* Cùng tông, tối hơn */
```

**Điểm mấu chốt**: Khi bạn tiến dần về màu trắng hoặc đen, hãy giảm độ bão hòa (chroma). Độ bão hòa cao ở các mức độ sáng cực hạn trông rất lòe loẹt. Một màu xanh dương nhạt ở độ sáng 85% cần chroma khoảng ~0.08, chứ không phải 0.15 như màu cơ bản của bạn.

## Xây dựng Bảng màu Chức năng (Functional Palettes)

### Cái bẫy của màu Trung tính Thuần (The Tinted Neutral Trap)

**Màu xám thuần túy đã lỗi thời.** Hãy thêm một chút sắc thái của màu thương hiệu vào tất cả các màu trung tính:

```css
/* Màu xám "chết" (Dead grays) */
--gray-100: oklch(95% 0 0);     /* Không có cá tính */
--gray-900: oklch(15% 0 0);

/* Màu xám tông ấm (thêm sự ấm áp của thương hiệu) */
--gray-100: oklch(95% 0.01 60);  /* Một chút ấm áp */
--gray-900: oklch(15% 0.01 60);

/* Màu xám tông lạnh (công nghệ, chuyên nghiệp) */
--gray-100: oklch(95% 0.01 250); /* Một chút xanh dương */
--gray-900: oklch(15% 0.01 250);
```

Chroma rất nhỏ (0.01) nhưng vẫn có thể cảm nhận được. Nó tạo ra sự gắn kết ngầm giữa màu thương hiệu và UI của bạn.

### Cấu trúc Bảng màu

Một hệ thống hoàn chỉnh cần:

| Vai trò | Mục đích | Ví dụ |
|------|---------|---------|
| **Chính (Primary)** | Thương hiệu, CTAs, hành động chính | 1 màu, 3-5 sắc độ |
| **Trung tính (Neutral)** | Văn bản, nền, viền | Thang đo 9-11 sắc độ |
| **Ngữ nghĩa (Semantic)** | Thành công, lỗi, cảnh báo, thông tin | 4 màu, 2-3 sắc độ mỗi loại |
| **Bề mặt (Surface)** | Thẻ (cards), modals, lớp phủ (overlays) | 2-3 cấp độ cao (elevation) |

**Hãy bỏ qua màu phụ/màu cấp ba trừ khi bạn thực sự cần.** Hầu hết các ứng dụng hoạt động tốt chỉ với một màu nhấn (accent color). Thêm nhiều màu hơn sẽ gây ra sự mệt mỏi khi đưa ra quyết định và tạo ra nhiễu thị giác.

### Quy tắc 60-30-10 (Áp dụng đúng cách)

Quy tắc này nói về **trọng lượng thị giác**, không phải số lượng pixel:

- **60%**: Nền trung tính, khoảng trắng, các bề mặt cơ sở.
- **30%**: Các màu thứ cấp—văn bản, viền, các trạng thái không hoạt động.
- **10%**: Màu nhấn—CTAs, các điểm nổi bật, các trạng thái focus.

Sai lầm phổ biến: sử dụng màu nhấn ở khắp mọi nơi vì đó là "màu thương hiệu". Màu nhấn phát huy tác dụng *bởi vì* chúng hiếm. Lạm dụng sẽ làm mất đi sức mạnh của chúng.

## Độ tương phản & Khả năng truy cập (Contrast & Accessibility)

### Các yêu cầu của WCAG

| Loại nội dung | Mức tối thiểu AA | Mục tiêu AAA |
|--------------|------------|------------|
| Văn bản chính (Body text) | 4.5:1 | 7:1 |
| Văn bản lớn (18px+ hoặc 14px bold) | 3:1 | 4.5:1 |
| Các thành phần UI, icon | 3:1 | 4.5:1 |
| Trang trí không thiết yếu | Không có | Không có |

**Lưu ý**: Văn bản gợi ý (placeholder text) vẫn cần tỷ lệ 4.5:1. Cái dòng placeholder màu xám nhạt mà bạn thấy ở khắp nơi? Thường là không đạt chuẩn WCAG.

### Các tổ hợp màu Nguy hiểm

Những tổ hợp này thường thất bại về độ tương phản hoặc gây ra vấn đề về khả năng đọc:

- Văn bản xám nhạt trên nền trắng (lỗi khả năng truy cập số 1).
- **Văn bản xám trên bất kỳ nền màu nào**—màu xám trông sẽ bị bạc màu và thiếu sức sống trên nền màu. Hãy sử dụng sắc độ tối hơn của chính màu nền đó, hoặc sử dụng độ trong suốt (transparency).
- Văn bản đỏ trên nền xanh lá (hoặc ngược lại)—8% đàn ông không thể phân biệt được hai màu này.
- Văn bản xanh dương trên nền đỏ (gây rung về thị giác).
- Văn bản vàng trên nền trắng (hầu như luôn thất bại).
- Văn bản mỏng, nhạt trên hình ảnh (độ tương phản không thể dự đoán được).

### Tuyệt đối không sử dụng màu Xám thuần hoặc Đen thuần

Màu xám thuần (`oklch(50% 0 0)`) và màu đen thuần (`#000`) không tồn tại trong tự nhiên—các bóng đổ và bề mặt thực tế luôn có một chút sắc thái màu. Thậm chí chỉ cần một chroma khoảng 0.005-0.01 là đủ để cảm thấy tự nhiên mà không bị nhuốm màu quá rõ rệt. (Xem ví dụ về màu trung tính có sắc thái ở trên).

### Kiểm tra

Đừng tin vào mắt mình. Hãy sử dụng các công cụ:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Browser DevTools → Rendering → Emulate vision deficiencies
- [Polypane](https://polypane.app/) để kiểm tra thời gian thực.

## Giao diện (Theming): Chế độ Sáng & Tối

### Chế độ Tối không phải là Chế độ Sáng đảo ngược

Bạn không thể chỉ hoán đổi màu sắc. Chế độ tối yêu cầu các quyết định thiết kế khác nhau:

| Chế độ Sáng (Light Mode) | Chế độ Tối (Dark Mode) |
|------------|-----------|
| Sử dụng bóng đổ cho độ sâu | Sử dụng bề mặt sáng hơn cho độ sâu (không dùng bóng đổ) |
| Chữ tối trên nền sáng | Chữ sáng trên nền tối (giảm độ dày font/font weight) |
| Màu nhấn rực rỡ | Giảm độ bão hòa màu nhấn một chút |
| Nền trắng | Tuyệt đối không dùng đen thuần—hãy dùng xám đậm (oklch 12-18%) |

```css
/* Độ sâu trong chế độ tối thông qua màu bề mặt, không dùng bóng đổ */
:root[data-theme="dark"] {
  --surface-1: oklch(15% 0.01 250);
  --surface-2: oklch(20% 0.01 250);  /* "Cao hơn" = sáng hơn */
  --surface-3: oklch(25% 0.01 250);
  
  /* Giảm độ dày văn bản một chút */
  --body-weight: 350;  /* Thay vì 400 */
}
```

### Phân cấp Token (Token Hierarchy)

Sử dụng hai lớp: các token nguyên bản/primitive tokens (`--blue-500`) và các token ngữ nghĩa/semantic tokens (`--color-primary: var(--blue-500)`). Đối với chế độ tối, chỉ cần định nghĩa lại lớp ngữ nghĩa—các token nguyên bản vẫn giữ nguyên.

## Alpha là một dấu hiệu thiết kế chưa tốt (Design Smell)

Việc lạm dụng độ trong suốt (rgba, hsla) thường có nghĩa là một bảng màu chưa hoàn chỉnh. Alpha tạo ra độ tương phản không thể dự đoán, gánh nặng về hiệu suất và tính không nhất quán. Hãy định nghĩa các màu lớp phủ (overlay colors) rõ ràng cho từng ngữ cảnh. Ngoại lệ: các vòng tiêu điểm (focus rings) và các trạng thái tương tác nơi cần nhìn xuyên thấu.

---

**Tránh**: Chỉ dựa vào màu sắc để truyền tải thông tin. Tạo bảng màu mà không có vai trò rõ ràng cho từng màu. Sử dụng màu đen thuần (#000) cho các diện tích lớn. Bỏ qua việc kiểm tra mù màu (ảnh hưởng đến 8% nam giới).
