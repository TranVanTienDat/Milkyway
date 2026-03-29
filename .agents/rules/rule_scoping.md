# 🔍 RULE-SCOPING —— Quy tắc Áp dụng Luật lệ theo Dự án (Project-Based Rule Application)

> **Mục tiêu:** Đảm bảo Agent luôn vận hành đúng "phong tục tập quán" và các tiêu chuẩn kỹ thuật riêng biệt của từng dự án thành phần (storefront, backend, cms) trong hệ sinh thái Milkyway.

## 1. Nguyên tắc Thực thi (Execution Principles)

1. **Ưu tiên Luật lệ Dự án (Project-First Priority):** Khi nhận được yêu cầu liên quan đến một dự án cụ thể (như `apps/storefront`, `apps/cms`), Agent PHẢI chủ động tìm kiếm và nạp các quy tắc nằm trong thư mục `.agents/rules/` của chính dự án đó.
2. **Quy tắc "Nhập gia tùy tục" (Strict Adherence):** Nếu một dự án có bộ quy tắc riêng (ví dụ: `apps/storefront/.agents/rules/stitch_compliance.md`), Agent phải coi đó là điều kiện tiên quyết và không được phép áp dụng các tiêu chuẩn chung chung nếu chúng mâu thuẫn với luật lệ của dự án.
3. **Phân cấp Quy tắc (Rule Hierarchy):** 
    - Các quy tắc trong thư mục gốc `.agents/rules/` là khung sườn chung. 
    - Quy tắc cụ thể trong từng dự án thành phần (Project-specific rules) sẽ **ghi đè (override)** lên quy tắc chung khi thực hiện các task liên quan đến dự án đó.

## 2. Quy trình "Nhập gia tùy tục" (Discovery Workflow)

1. **Xác định Phạm vi (Scope Identification):** Trước khi gõ code, Agent phải xác định task thuộc về dự án nào.
2. **Nạp Ngữ cảnh (Context Loading):** Truy cập ngay vào thư mục `.agents/` của dự án tương ứng để đọc các chỉ thị đặc thù.
3. **Xác nhận Tuân thủ (Compliance Confirmation):** Trong bước lập kế hoạch (Plan), Agent nên nêu rõ các rule dự án sẽ được áp dụng để User yên tâm.

---

_RULE-SCOPING —— Một Dự án, Một Luật lệ, Một Mục tiêu Hoàn mỹ. (One Project, One Rule, One Goal)._
