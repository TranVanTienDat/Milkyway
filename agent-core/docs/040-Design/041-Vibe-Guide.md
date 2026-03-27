# 🎨 MILKYWAY Vibe-Guide (Storefront)

> **Mục tiêu:** Định nghĩa "Linh hồn" và "Cảm xúc" của giao diện Storefront. Đây là kim chỉ nam cho các Agent khi thực hiện Vibe Coding, đảm bảo sản phẩm luôn Premium, nhất quán và sống động.

---

## 1. Ngôn ngữ Thị giác (Visual Language)

### 💎 Tone & Mood: Clean, Premium, Minimalist
- **Keyword:** Airy (Thoáng đãng), Precise (Chính xác), Fluid (Mượt mà).
- **Typography:** Sử dụng **Geist Sans/Mono** (Font của Vercel). Ưu tiên khoảng cách dòng (leading) rộng rãi để tăng độ đọc.
- **Surface:** Ưu tiên nền trắng (`bg-white`) hoặc xám cực nhẹ cho Light mode; và `bg-zinc-950` cho Dark mode.

### 🍱 Layout & Spacing
- **Radius:** Sử dụng `rounded-xl` (12px) hoặc `rounded-2xl` (16px) cho các Card chính. `rounded-full` cho các Action buttons nhỏ.
- **Padding:** Không bao giờ tiết kiệm padding. Một khối nội dung cần có đủ không gian để "thở".
- **Borders:** Sử dụng border mỏng (`1px`), màu sắc nhẹ (`border-zinc-200` hoặc `border-zinc-800`).

---

## 2. Chiến lược Tailwind CSS v4

### 🎭 Glassmorphism & Effects
Tailwind v4 cho phép cấu hình hiệu ứng trực tiếp. Chúng ta ưu tiên:
- **Header:** `sticky top-0 bg-white/80 backdrop-blur-md` để tạo hiệu ứng lớp kính.
- **Shadows:** Sử dụng shadow tầng (`shadow-sm` cho Card, `shadow-xl` cho Modal) với màu shadow được hòa trộn từ màu của ứng dụng.

### 🌈 Gradients
- Sử dụng **Subtle Gradients** thay vì màu phẳng đơn điệu cho các nút Call-to-Action.
- Ví dụ: `bg-linear-to-br from-zinc-900 to-zinc-700`.

---

## 3. Chuyển động & Cảm xúc (Micro-interactions)

Mọi tương tác của người dùng phải được phản hồi bằng chuyển động:

1.  **Hover State:**
    - `transition-all duration-300 ease-out`.
    - `hover:scale-[1.02]` cho các Card quan trọng.
    - `hover:shadow-lg` để tạo cảm giác "nổi lên" khỏi bề mặt.

2.  **Loading State:**
    - Luôn dùng **Skeletons** thay vì Spinner xoay truyền thống.
    - Hiệu ứng `animate-pulse` với màu xám nhẹ.

3.  **Notifications (Sonner):**
    - Thông báo xuất hiện từ góc dưới bên phải, trượt nhẹ nhàng.
    - Thành công: `text-emerald-500`. Thất bại: `text-rose-500`.

---

## 4. Chỉ dẫn Vibe Coding (Dành cho Agent)

Khi nhận được yêu cầu "Xây dựng giao diện X", hãy:
1.  **Drafting:** Phác thảo Layout với đúng Radius và Spacing đã định nghĩa ở trên.
2.  **Vibe-Check:** Thêm các lớp phủ `backdrop-blur` và `border-zinc/10` để tạo chiều sâu.
3.  **Refining:** Thêm `transition` cho mọi trạng thái `@hover` và `@active`.
4.  **Final Polish:** Kiểm tra độ tương phản giữa Geist font và nền.

---
*MILKYWAY-CORE —— Design driven by Emotion, Executed by Code.*
