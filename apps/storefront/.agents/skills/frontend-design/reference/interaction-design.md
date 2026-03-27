# Thiết kế Tương tác (Interaction Design)

## Tám Trạng thái Tương tác (The Eight Interactive States)

Mọi thành phần có tính tương tác đều cần được thiết kế cho các trạng thái sau:

| Trạng thái | Khi nào | Xử lý Thị giác |
|-------|------|------------------|
| **Mặc định (Default)** | Khi đang nghỉ | Kiểu dáng cơ bản |
| **Hover** | Con trỏ di chuyển qua (không dùng cho cảm ứng) | Nâng lên nhẹ, thay đổi màu sắc |
| **Tiêu điểm (Focus)** | Tiêu điểm từ bàn phím hoặc lập trình | Có vòng bao quanh (focus ring) rõ ràng (xem bên dưới) |
| **Kích hoạt (Active)** | Đang được nhấn | Nhấn lún xuống, màu tối hơn |
| **Vô hiệu hóa (Disabled)** | Không thể tương tác | Giảm độ mờ (opacity), không có con trỏ (pointer) |
| **Đang tải (Loading)** | Đang xử lý | Spinner, skeleton |
| **Lỗi (Error)** | Trạng thái không hợp lệ | Viền đỏ, icon, thông báo lỗi |
| **Thành công (Success)** | Đã hoàn thành | Dấu tích xanh, xác nhận |

**Lỗi thường gặp**: Thiết kế trạng thái hover mà quên focus, hoặc ngược lại. Chúng khác nhau. Người dùng bàn phím sẽ không bao giờ thấy trạng thái hover.

## Vòng Tiêu điểm (Focus Rings): Hãy làm đúng cách

**Tuyệt đối không sử dụng `outline: none` mà không có phương án thay thế.** Đây là một lỗi vi phạm khả năng truy cập (accessibility). Thay vào đó, hãy sử dụng `:focus-visible` để chỉ hiển thị vòng tiêu điểm cho người dùng bàn phím:

```css
/* Ẩn vòng tiêu điểm khi dùng chuột/cảm ứng */
button:focus {
  outline: none;
}

/* Hiển thị vòng tiêu điểm khi dùng bàn phím */
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

**Thiết kế vòng tiêu điểm**:
- Độ tương phản cao (tối thiểu 3:1 so với các màu liền kề).
- Độ dày 2-3px.
- Có khoảng cách (offset) so với thành phần (không nằm bên trong nó).
- Nhất quán trên tất cả các thành phần tương tác.

## Thiết kế Biểu mẫu (Form Design): Những điều không hiển nhiên

**Placeholder không phải là label**—chúng biến mất khi người dùng nhập liệu. Hãy luôn sử dụng thành phần `<label>` hiển thị rõ ràng. **Kiểm tra (validate) khi mất tiêu điểm (on blur)**, chứ không phải ở mỗi lần nhấn phím (ngoại trừ: kiểm tra độ mạnh mật khẩu). Đặt thông báo lỗi **bên dưới** các trường nhập liệu và sử dụng `aria-describedby` để kết nối chúng.

## Trạng thái Đang tải (Loading States)

**Cập nhật lạc quan (Optimistic updates)**: Hiển thị kết quả thành công ngay lập tức, hoàn tác nếu thất bại. Sử dụng cho các hành động ít rủi ro (like, follow), không dùng cho thanh toán hoặc các hành động phá hủy (destructive). **Skeleton screens > spinners**—chúng mô phỏng hình dạng nội dung và mang lại cảm giác phản hồi nhanh hơn các spinner thông thường.

## Modals: Cách tiếp cận "Vô hiệu hóa ngoại vi" (Inert Approach)

Việc bẫy tiêu điểm (focus trapping) trong các modal trước đây đòi hỏi JavaScript phức tạp. Bây giờ hãy sử dụng thuộc tính `inert`:

```html
<!-- Khi modal đang mở -->
<main inert>
  <!-- Nội dung phía sau modal không thể được focus hoặc click -->
</main>
<dialog open>
  <h2>Tiêu đề Modal</h2>
  <!-- Tiêu điểm nằm bên trong modal -->
</dialog>
```

Hoặc sử dụng thành phần `<dialog>` thuần túy (native):

```javascript
const dialog = document.querySelector('dialog');
dialog.showModal();  // Mở với bẫy tiêu điểm, đóng khi nhấn Escape
```

## Popover API

Đối với tooltips, dropdowns và các lớp phủ không phải modal, hãy sử dụng popover thuần túy:

```html
<button popovertarget="menu">Mở menu</button>
<div id="menu" popover>
  <button>Tùy chọn 1</button>
  <button>Tùy chọn 2</button>
</div>
```

**Lợi ích**: Tự động đóng khi click ra ngoài (light-dismiss), xếp lớp đúng cách, không bị xung đột z-index, và mặc định có khả năng truy cập tốt.

## Định vị Dropdown & Lớp phủ (Overlay)

Các dropdown được render với `position: absolute` bên trong một container có `overflow: hidden` hoặc `overflow: auto` sẽ bị cắt mất (clipped). Đây là lỗi dropdown phổ biến nhất trong các mã nguồn được tạo tự động.

### CSS Anchor Positioning

Giải pháp hiện đại sử dụng CSS Anchor Positioning API để gắn một lớp phủ vào phần tử kích hoạt của nó mà không cần JavaScript:

```css
.trigger {
  anchor-name: --menu-trigger;
}

.dropdown {
  position: fixed;
  position-anchor: --menu-trigger;
  position-area: block-end span-inline-end;
  margin-top: 4px;
}

/* Đảo lên trên nếu bên dưới không đủ chỗ */
@position-try --flip-above {
  position-area: block-start span-inline-end;
  margin-bottom: 4px;
}
```

Bởi vì dropdown sử dụng `position: fixed`, nó thoát khỏi bất kỳ sự cắt xén `overflow` nào ở các phần tử tổ tiên. Khối `@position-try` tự động xử lý các cạnh của khung nhìn (viewport). **Hỗ trợ trình duyệt**: Chrome 125+, Edge 125+. Chưa có trên Firefox hoặc Safari - hãy sử dụng phương án dự phòng (fallback) cho các trình duyệt đó.

### Kết hợp Popover + Anchor

Việc kết hợp Popover API với định vị neo (anchor positioning) mang lại khả năng xếp lớp, tự động đóng, khả năng truy cập và định vị chính xác trong một mẫu duy nhất:

```html
<button popovertarget="menu" class="trigger">Mở</button>
<div id="menu" popover class="dropdown">
  <button>Tùy chọn 1</button>
  <button>Tùy chọn 2</button>
</div>
```

Thuộc tính `popover` đặt phần tử vào **lớp trên cùng (top layer)**, lớp này nằm trên tất cả các nội dung khác bất kể z-index hay overflow. Không cần dùng cổng (portal).

### Mẫu Cổng / Dịch chuyển (Portal / Teleport Pattern)

Trong các framework thành phần (component frameworks), hãy render dropdown ở gốc của tài liệu và định vị nó bằng JavaScript:

- **React**: `createPortal(dropdown, document.body)`
- **Vue**: `<Teleport to="body">`
- **Svelte**: Sử dụng thư viện portal hoặc gắn trực tiếp vào `document.body`

Tính toán vị trí từ `getBoundingClientRect()` của phần tử kích hoạt, sau đó áp dụng `position: fixed` với các giá trị `top` và `left`. Tính toán lại khi cuộn trang hoặc thay đổi kích thước cửa sổ.

### Phương án dự phòng với Fixed Positioning

Đối với các trình duyệt không hỗ trợ định vị neo (anchor positioning), việc sử dụng `position: fixed` với tọa độ thủ công sẽ giúp tránh bị cắt xén do overflow:

```css
.dropdown {
  position: fixed;
  /* top/left được thiết lập qua JS từ getBoundingClientRect() của trigger */
}
```

Hãy kiểm tra các ranh giới của khung nhìn trước khi render. Nếu dropdown vượt quá cạnh dưới, hãy đảo nó lên trên phần tử kích hoạt. Nếu nó vượt quá cạnh phải, hãy căn nó theo cạnh phải của phần tử kích hoạt.

### Các mẫu Sai lầm (Anti-Patterns)

- **`position: absolute` bên trong `overflow: hidden`** - Dropdown sẽ bị cắt. Hãy sử dụng `position: fixed` hoặc lớp trên cùng (top layer).
- **Các giá trị z-index tùy tiện** như `z-index: 9999` - Hãy sử dụng thang đo z-index ngữ nghĩa: `dropdown (100) -> sticky (200) -> modal-backdrop (300) -> modal (400) -> toast (500) -> tooltip (600)`.
- **Render mã nguồn dropdown nội dòng** mà không có lối thoát khỏi v ngữ cảnh xếp lớp (stacking context) của cha. Hãy sử dụng `popover` (top layer), portal, hoặc `position: fixed`.

## Các hành động Phá hủy (Destructive Actions): Hoàn tác > Xác nhận

**Hoàn tác (Undo) tốt hơn các hộp thoại xác nhận (confirmation dialogs)**—người dùng thường click qua các hộp thoại xác nhận một cách vô thức. Hãy xóa ngay khỏi UI, hiển thị thông báo "hoàn tác" (undo toast), và chỉ thực sự xóa sau khi thông báo hết hạn. Chỉ sử dụng xác nhận cho các hành động thực sự không thể đảo ngược (xóa tài khoản), các hành động tốn kém hoặc các thao tác hàng loạt.

## Các Mẫu Điều hướng Bàn phím (Keyboard Navigation Patterns)

### Roving Tabindex

Đối với các nhóm thành phần (tabs, menu items, radio groups), một mục có thể được tab vào; các phím mũi tên sẽ di chuyển bên trong:

```html
<div role="tablist">
  <button role="tab" tabindex="0">Tab 1</button>
  <button role="tab" tabindex="-1">Tab 2</button>
  <button role="tab" tabindex="-1">Tab 3</button>
</div>
```

Các phím mũi tên di chuyển `tabindex="0"` giữa các mục. Phím Tab sẽ di chuyển sang thành phần tiếp theo hoàn toàn.

### Liên kết Bỏ qua (Skip Links)

Cung cấp các liên kết bỏ qua (`<a href="#main-content">Bỏ qua để đến nội dung chính</a>`) cho người dùng bàn phím để nhảy qua phần điều hướng. Ẩn khỏi màn hình, chỉ hiển thị khi được focus.

## Khả năng khám phá Cử chỉ (Gesture Discoverability)

Vuốt để xóa (Swipe-to-delete) và các cử chỉ tương tự là vô hình. Hãy gợi ý về sự tồn tại của chúng:

- **Tiết lộ một phần (Partially reveal)**: Hiển thị một phần của nút xóa ở cạnh.
- **Hướng dẫn (Onboarding)**: Hiển thị các chỉ dẫn (coach marks) trong lần sử dụng đầu tiên.
- **Phương án thay thế**: Luôn cung cấp một phương án dự phòng hiển thị rõ ràng (ví dụ: menu với nút "Xóa").

Đừng để cử chỉ là cách duy nhất để thực hiện các hành động.

---

**Tránh**: Loại bỏ chỉ báo focus mà không có phương án thay thế. Sử dụng văn bản gợi ý làm nhãn. Mục tiêu chạm <44x44px. Thông báo lỗi chung chung. Các bộ điều khiển tùy chỉnh mà không hỗ trợ ARIA/bàn phím.
