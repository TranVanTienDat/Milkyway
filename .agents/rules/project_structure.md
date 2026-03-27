# 🏗️ MILKYWAY-CORE —— Quy tắc Cấu trúc Dự án (Project Structure Rule)

> **Mục tiêu:** Đảm bảo Agent hiểu rõ bản đồ tri thức và mã nguồn để ra quyết định Implementation chuẩn xác.

## 1. Bản đồ cấu trúc (Mapping)

Hệ thống được phân cực rõ ràng giữa **Tri thức (Knowledge)** và **Thực thi (Implementation)**:

### 📂 `agent-core/` —— "Bộ não" trung tâm (The 2nd Brain)
*   **Trách nhiệm:** Lưu trữ toàn bộ linh hồn của dự án.
*   **Nội dung:**
    *   `openspec/`: Các bản đặc tả kỹ thuật (Technical Specs).
    *   `docs/`: Tài liệu nghiệp vụ, User Stories (Requirements).
    *   `knowledge-base/`: Tri thức nền tảng, Ký ức dự án (Project Memory).
*   **Quy định:** Agent **phải** thực hiện mọi tác vụ liên quan đến phân tích, lý luận và viết tài liệu tại đây. Không bao giờ được code nếu chưa có spec tại thư mục này.

### 📂 `apps/` —— "Cơ bắp" thực thi (Implementation)
*   **Trách nhiệm:** Nơi chứa mã nguồn thực tế của hệ sinh thái.
*   **3 Trụ cột chính:**
    1.  `BACKEND`: Logic nghiệp vụ, API, Database.
    2.  `STOREFRONT`: Giao diện người dùng (User Interface).
    3.  `CMS`: Hệ thống quản trị nội dung.
*   **Quy định:** Mọi thay đổi code trong `apps/` phải có tính "Audit-ready", tức là phải ánh xạ được tới một bản đặc tả cụ thể trong `agent-core/`.

---

## 2. Chỉ thị vận hành (Operational Directives)

1.  **Discovery First:** Trước khi bắt đầu một Ticket hay Feature, Agent phải dùng `grep_search` hoặc `ls` để tìm kiếm Đặc tả/Yêu cầu liên quan trong `agent-core/`.
2.  **Documentation as a Duty:** Nếu một tính năng mới được yêu cầu mà chưa có tài liệu, Agent phải tự giác đề xuất viết Spec vào `agent-core/openspec/` trước khi gõ dòng code đầu tiên.
3.  **Traceability:** Khi commit hay báo cáo, Agent phải chỉ ra mã nguồn trong `apps/` tương ứng với tài liệu nào trong `agent-core/`.

---
*MILKYWAY-CORE —— Dẫn dắt bởi Tri thức, Thực thi bằng Mã nguồn (Knowledge Driven, Code Executed).*
