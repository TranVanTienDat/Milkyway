# 🎨 Stitch Design System: Luminous Ivory

> **Project Name:** Glow & Pure (Luminous Ivory)
> **Stitch URL:** [https://stitch.withgoogle.com/projects/1897610937398661023](https://stitch.withgoogle.com/projects/1897610937398661023)
> **Asset ID:** `assets/408f2be49eb04403b1f9e92b76046384`

---

## 📸 1. Screens Overview (12 Screens)

Hệ thống bao gồm các màn hình chính cho Desktop (2560px width):

| ID | Label | Size | Viewport |
| :--- | :--- | :--- | :--- |
| `a179...` | **Trang chủ (Cập nhật Carousel)** | 2560 x 8072 | Desktop |
| `73fa...` | Trang Danh mục Sản phẩm (Cập nhật) | 2560 x 6770 | Desktop |
| `6d24...` | Trang Chi tiết Sản phẩm | 2560 x 4998 | Desktop |
| `2765...` | Trang Chi tiết Sản phẩm (Đồng nhất) | 2560 x 4814 | Desktop |
| `f627...` | Trang Blog (Đẹp Insights) | 2560 x 4394 | Desktop |
| `4c71...` | Trang Blog (Đồng nhất) | 2560 x 3884 | Desktop |
| `fbad...` | Trang Giỏ hàng (Đồng nhất) | 2560 x 2824 | Desktop |
| `ceae...` | Trang Giỏ hàng | 2560 x 2880 | Desktop |
| `07fd...` | Trang Thanh toán | 2560 x 2770 | Desktop |
| `d8b9...` | Đăng nhập (Không Header/Footer) | 2560 x 2116 | Desktop |
| `02bd...` | Đăng ký (Không Header/Footer) | 2560 x 2110 | Desktop |
| `2091...` | Trang Thông tin giao hàng | 2560 x 3122 | Desktop |

---

## 🌈 2. Color Palette (Material Logic)

Hệ thống màu sắc tuân thủ nguyên tắc **"The Ethereal Editor"** với độ tương phản cao và sắc độ mềm mại. Base primary (override) là màu Custom `#F06222`, cùng các token màu cốt lõi.

### Core Tokens
| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Custom Primary Color** | `#F06222` | Tuỳ chỉnh nhận diện |
| **Primary (Coral Orange)** | `#a33800` | Logo, High-Impact CTA, Accents |
| **Primary Container** | `#cc4902` | Hover states for primary items |
| **Secondary (Pastel Pink)** | `#6b5a60` | Soft accents |
| **Secondary Container**| `#f4dce4` | Background for organic line sections |
| **Surface & Background** | `#fcf9f8` | The main canvas/background |
| **On-Surface (Deep Black)** | `#1c1b1b` | Sharp typography, footer, tickers |
| **Outline** | `#8d7167` | Fallback borders |

### Surface Hierarchy & Layers
*   **Surface / Background:** `#fcf9f8` (Base canvas - Level 0)
*   **Surface Container Low:** `#f6f3f2` (Secondary block sections - Level 1)
*   **Surface Container Highest:** `#e5e2e1` (Elevated product cards/modals - Level 2)

---

## 🔡 3. Typography

Triết lý Typography: Tận dụng khoảng trắng (White Space) như một chất liệu cao cấp.

*   **Display / Headline (Plus Jakarta Sans)**
    *   **Hero Headline:** Large (`3.5rem`), bold, tight tracking (-2%).
    *   **Section Title:** `2rem`. Cảm giác hiện đại và phóng khoáng.
*   **Body (Inter)**
    *   **Body-MD:** `0.875rem` (14px). Tạo cảm xúc thời trang cao cấp (High-fashion aesthetic).
    *   **Label-SM:** `0.6875rem` (11px). All-caps, generous letter-spacing (+5%) cho thẻ tag/tiện ích.

---

## 🏛️ 4. Creative North Star: "The Ethereal Editor"

Hệ thống thiết kế tập trung vào sự không đối xứng có chủ đích (**intentional asymmetry**) và độ sâu tông màu (**tonal depth**). Vượt khỏi các grid thương mại e-commerce thông thường.

### 🚫 Quy tắc "No-Line"
**Cấm sử dụng border 1px solid để phân chia section.** Sử dụng sự thay đổi màu sắc của background để phân tách không gian. Ví dụ: Một section `surface-container-low` đặt cạnh nền `surface`.
The Ghost Border Fallback: Nếu vì lý do accessibility bắt buộc cần viền, sử dụng `outline-variant` token ở mức **15% opacity**.

### 🪟 Quy tắc "Glass & Gradient"
*   **Hero CTAs:** Sử dụng gradient tuyến tính từ `primary` (`#a33800`) sang `primary_container` (`#cc4902`).
*   **Overlays/Nav:** Sử dụng hiệu ứng **Glassmorphism** (Semi-transparent surface + backdrop-blur `20px`).

### 📦 Components Guidelines
*   **Navigation Bar:** Logo nằm giữa. Style cố định (Fixed) với nền Glassmorphic (80% opacity). Link không gạch chân; active state dùng dấu chấm `2px` màu primary.
*   **Product Cards:** Không dùng dòng kẻ phân cách. Cách biệt hình ảnh và tên sản phẩm bằng `spacing-6` (1.5rem). Tuân thủ bo góc hình ảnh `rounded-md` (0.75rem / 8px).
*   **Primary Call-to-Action (Buttons):** Nền `primary` với chữ `on-primary`. Bo góc `rounded-DEFAULT` (0.5rem - tuân theo `ROUND_EIGHT`). Khi hover background đổi màu sang `primary_container` và nâng nhẹ `2px`.
*   **Tickers / Banners:** Nền `inverse-surface` (`#313030`) với chữ `on-primary-fixed`. Cỡ chữ `label-sm` với scroll animation.
*   **Shadows:** Tránh drop-shadow truyền thống. Dùng "Ambient Shadows": shadow mờ `40px` với opacity `4%`, sử dụng tông gốc của `on-surface`.

### ✅ Do's and Don'ts
*   **Do:** Tận dụng Asymmetrical layouts, tăng "Breathing Room" (nếu thấy chật, hãy nhân đôi spacing padding).
*   **Do:** Dùng `secondary_container` cho các section "Soft" hoặc "Organic".
*   **Don't:** Dùng 1px black borders.
*   **Don't:** Dùng "Drop Shadows" kiểu cũ (thuần xám độ opacity cao).
*   **Don't:** Dùng Center-aligned text cho các đoạn copy dài. Dùng left-aligned để tạo cấu trúc editorial.

---
*Generated by Milkyway (Antigravity Assistant).*
