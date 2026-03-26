# 🌌 Milkyway Storefront

Hệ thống giao diện người dùng hiện đại cho dự án Milkyway, sử dụng **Yarn** để quản lý gói.

## 🚀 Công nghệ (Tech Stack)
- **Framework**: [Next.js v15.6 (Canary)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Package Manager**: [Yarn](https://yarnpkg.com/).

## 📂 Cấu trúc (Folder Structure)
- **`/app`**: Hệ thống routing và layout chính (App Router).
- **`/components`**: Các thành phần UI có khả năng tái sử dụng (Atomic components).
- **`/lib`**: Thư viện chứa API fetchers, hooks và utilities dùng chung.
- **`/fonts`**: Các font chữ được tối ưu hóa cho dự án.

## 🛠️ Lệnh vận hành (Commands)
```bash
# Cài đặt thư viện
yarn install

# Khởi động môi trường phát triển (Dev)
yarn dev

# Xây dựng phiên bản Production
yarn build

# Kiểm tra định dạng code
yarn test
```

## 📜 Quy tắc chung (Directives)
- **Architecture**: Sử dụng kiến trúc hiện đại của Next.js, ưu tiên các Server Components.
- **Styling**: Tận dụng tối đa sức mạnh của Tailwind v4 ngay trong các file CSS.
- **UX/UI**: Đảm bảo mọi component đều chuẩn Responsive và có Micro-animations (hiệu ứng mượt mà).

---
*MILKYWAY-CORE — Standardized with Yarn.*
