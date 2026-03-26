# 🚀 MILKYWAY-APPS — Bản đồ thực thi hệ thống

> **Context:** Implementation Layer. Gốc thư mục thực thi.

## 1. Trụ cột Hệ thống (Core Architecture)
Hệ thống hiện tại gồm 2 sub-apps chính đang hoạt động:
- **`apps/cms`**: Trụ cột Nội dung & API (Strapi v5).
- **`apps/storefront`**: Trụ cột Giao diện & UX (Next.js v15).

## 2. Quy hoạch và Quy tắc
1. **SSOT:** Mọi logic code phải ánh xạ từ `agent-core/openspec/`.
2. **Connectivity:** Storefront kết nối tới CMS qua API REST.
3. **Standards:** Code sạch, tối giản, ưu tiên Performance.

## 3. Bản đồ điều hướng
- Chi tiết CMS: [apps/cms/AGENTS.md](apps/cms/AGENTS.md)
- Chi tiết Storefront: [apps/storefront/AGENTS.md](apps/storefront/AGENTS.md)

---
*MILKYWAY-CORE — Kiến tạo tương lai từ gốc rễ.*
