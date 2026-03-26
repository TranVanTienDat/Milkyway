# MILKYWAY-CORE: Hệ Điều Hành Agile Tích Hợp AI (Version 1.0)

**MILKYWAY-CORE** là hệ điều hành phát triển phần mềm tiên tiến nhất, được thiết kế để tối ưu hóa sự cộng tác giữa Human và Agentic AI. Hệ thống vận hành dựa trên triết lý **Spec-Driven Development (SDD)**, biến AI từ công cụ hỗ trợ thành một cộng sự thực thụ trong mọi giai đoạn của SDLC.

---

## Mục lục (Table of Contents)

1. [Tầm Nhìn & Triết Lý (Vision & Philosophy)](#1-tầm-nhìn--triết-lý-vision--philosophy)
2. [Nguyên Tắc & Kỷ Luật Làm Việc (Core Principles & Disciplines)](#2-nguyên-tắc--kỷ-luật-làm-việc-core-principles--disciplines)
3. [Giao Thức Vận Hành Gốc (Core Execution Protocol)](#3-giao-thức-vận-hành-gốc-core-execution-protocol)
4. [Cài Đặt & Thiết Lập (Installation & Setup)](#4-cài-đặt--thiết-lập-installation-setup)
5. [Hệ Thống Vai Trò AI (AI Roles & Skills)](#5-hệ-thống-vai-trò-ai-ai-roles--skills)
6. [Quy Trình Non-Coding (Intel Construction)](#6-quy-trình-non-coding-intel-construction)
7. [Quy Trình Coding (Spec-Driven Development)](#7-quy-trình-coding-spec-driven-development)
8. [Cấu Trúc Thư Mục (Directory Structure)](#8-cấu-trúc-thư-mục-directory-structure)
9. [Hệ Thống Tri Thức & Quy Định Tài Liệu](#9-hệ-thống-tri-thức--quy-định-tài-liệu)
10. [Hỏi Đáp Thường Gặp (Q&A)](#10-hỏi-đáp-thường-gặp-qa)
11. [Tài Liệu Tham Khảo (References)](#11-tài-liệu-tham-khảo-references)

---

## 1. Tầm Nhìn & Triết Lý (Vision & Philosophy)

**MILKYWAY-CORE** không đơn thuần là một bộ mã nguồn, mà là một **"Hệ điều hành cho Team"** (Operating System for Teams). Mục tiêu cốt lõi là chuyển đổi triết lý Agile và Scrum truyền thống sang mô hình **AI-Native** Agile/Scrum:

*   **Bộ não thứ 2 (The 2nd Brain):** Hệ lưu trữ tập trung tri thức, quy trình và thuật toán (SSOT). Giảm tải ghi nhớ cho Human, tập trung nguồn lực cho các quyết định chiến lược.
*   **AI-Native Agile:** Tích hợp AI vào mọi nhánh của Software Development Life Cycle (SDLC), từ Discovery Requirements đến Deployment & Ops.

---

## 2. Nguyên Tắc & Kỷ Luật Làm Việc (Core Principles & Disciplines)

MILKYWAY-CORE vận hành dựa trên sự kết hợp giữa các nguyên tắc kiến trúc và kỷ luật thực thi nghiêm ngặt:

### 2.1 Các Nguyên Tắc "Bất Di Bất Dịch"
- **Single Source of Truth (SSOT):** Mọi tri thức nằm tại `docs/` (dự án cụ thể) và `knowledge-base/` (nền tảng). Tuyệt đối không có ngoại lệ.
- **Dewey Decimal Standard:** Tổ chức tài liệu theo hệ thống phân loại số (Taxonomy).
- **Spec Before Code:** Không Implementation nếu chưa có Specs được chứng thực.
- **Context-Aware Action:** Buộc Agent thực hiện **Discovery** trước khi đưa ra hành động.
- **Identity First (Role Priority):** Xác định **Role** (Mindset) trước khi kích hoạt **Skills** (Tools).

### 2.2 Kỷ Luật Giao Tiếp & Thực Thi (Agentic Rules)
- **Định danh MILKYWAY-CORE:** AI luôn tự xưng là **"MILKYWAY-CORE"** - Trợ lý vận hành toàn năng.
- **Giao thức Plan & Approve:** Bắt buộc trình bày **Step-by-Step Plan** và giải thích logic "Tại sao" trước mọi thay đổi hệ thống.
- **Hybrid Communication:** Ngôn ngữ Tiếng Việt chủ đạo kết hợp thuật ngữ IT (English) để đạt độ chính xác kỹ thuật tối đa.
- **Research-First:** Ưu tiên `search_web` tìm Best Practices quốc tế cho các bài toán quan trọng. Lưu kết quả tại `docs/050-Research/`.

### 2.3 Tiêu Chuẩn Clean Code & Bảo Mật
- **Tiêu chuẩn Code:** Tuân thủ SOLID, DRY, KISS. Tuyệt đối không sử dụng comment inline.
- **Header Định danh:** Mọi file mới hoặc chỉnh sửa lớn phải có header `// AI Coding` hoặc `# AI Coding`.
- **Bảo mật:** Tuyệt đối không hardcode API Keys/Secrets; chỉ sử dụng biến môi trường (`.env`).
- **Phạm vi (Boundaries):** AI chỉ hoạt động trong thư mục gốc của dự án. Mọi script auto phải nằm trong `/scripts`.

---

## 3. Giao Thức Vận Hành Gốc (Core Execution Protocol)

> [!IMPORTANT]
> **BẮT BUỘC:** LUÔN LUÔN khởi động phiên làm việc bằng lệnh `/wake-up`. Đây là "chìa khóa" để AI nạp toàn bộ bối cảnh hệ thống, danh tính vai trò và các quy tắc dự án. Tuyệt đối không thực hiện bất kỳ task nào nếu chưa kích hoạt hệ thống qua lệnh này.

Đây là "Hiến pháp tư duy" của MILKYWAY-CORE, áp dụng cho cả Coding và Non-Coding tasks. AI luôn đảm bảo thực hiện đúng **6 bước**: Discovery → Solution Design → Planning → Implementation → Verification → Finalize & Learning Loop.

> 📖 **Chi tiết:** Xem mô tả đầy đủ tại [AGENTS.md](./AGENTS.md#3-universal-workflow-6-bước) (Primary Context cho Agent) và [OS-Handbook.md](./OS-Handbook.md#9-quy-trình-làm-việc-chuẩn-universal-workflow) (Hướng dẫn chi tiết).

---

## 4. Cài Đặt & Thiết Lập (Installation & Setup)

### 4.1 Yêu Cầu Môi Trường
- **IDE Khuyến Nghị:** **Antigravity**.
- **Node.js:** Phiên bản **20.19.0** trở lên.
- **Package Manager:** `npm`

### 4.2 Cài Đặt Công Cụ
Nếu bạn là DEV hoặc tham gia vào quá trình phát triển CODING, hãy cài đặt **OpenSpec CLI** toàn cục:
```bash
npm install -g @fission-ai/openspec@latest
```

### 4.3 Chuẩn Bị Dự Án (Setup)
1. **Clone Project:**
   ```bash
   git clone git@github.com:tenomad-company/TNM-TEAM-OS.git
   cd TNM-TEAM-OS
   ```
2. **Cấu hình môi trường:** (Optional)
   Hệ thống yêu cầu các biến môi trường để tích hợp với Microsoft Teams và ClickUp.
   ```bash
   cp .env.example .env
   # Cập nhật API Keys, Workspace IDs cần thiết
   ```
3. **Khởi động hệ thống (Bắt buộc):**
   Gõ lệnh sau vào trình chat để đánh thức hệ điều hành và nạp bối cảnh:
   ```bash
   /wake-up
   ```
4. **Kích hoạt Role (Mindset):**
   Chỉ cần gõ tên Role muốn sử dụng (Ví dụ: `Product Owner`). AI sẽ tự động nạp mindset và bộ kỹ năng tương ứng.
   
5. **Thực thi & Sử dụng Kỹ năng (Action & Skills):**
   Giao việc cho AI theo công thức đơn giản: `[Nhiệm vụ] + [@Tài liệu] + [Định dạng]`
   
   **💡 Khai thác Kỹ năng (Skills):**
   AI sẽ tự động chọn Skill phù hợp, nhưng bạn có thể yêu cầu đích danh để kích hoạt bộ công cụ chuyên sâu:
   *   **ClickUp:** "Dùng skill `clickup-expert` để tìm task có tên 'Login' và báo cáo trạng thái."
   *   **Design/UI:** "Dùng skill `ui-ux-pro-max` để phân tích UI tại @index.html."
   
   **🚀 Mẫu lệnh theo vai trò (Role-based Examples):**
   *   **Product Manager (PM):** "Dựa trên @Strategy.md, hãy xây dựng Roadmap 3 tháng tới dưới dạng bảng."
   *   **Product Owner (PO):** "Viết User Story chuẩn INVEST cho tính năng mới tại @Requirement-A.md."
   *   **Business Analyst (BA):** "Phân tích Edge-cases và logic nghiệp vụ cho luồng thanh toán tại @Use-Case.md."
   *   **Software Engineer:** "Refactor @main.ts tuân thủ Clean Code và viết Unit Test hoàn chỉnh."

---

## 5. Hệ Thống Vai Trò AI (AI Roles & Skills)

### 5.1 Nguyên Tắc Vận Hành: "Role-Playing First"
Trong MILKYWAY-CORE, kỹ năng (Skills) chỉ là công cụ. Để sử dụng công cụ hiệu quả, trước tiên AI phải xác định được **"Mình là ai?"** và **"Mình tư duy như thế nào?"**.

> ⚠️ **Quy tắc Bắt buộc:** 
> Trước khi thực hiện bất kỳ workflow phức tạp nào, User/AI hãy kích hoạt Role tương ứng bằng cách đọc file định nghĩa Role (`.agent/roles/*.md`).

### 5.2 Danh Sách Vai Trò (Layered Personas)

MILKYWAY-CORE phân cấp các vai trò chuyên gia. Mỗi Role có Mindset và bộ Skill riêng biệt.

> 🛠️ **Sử dụng:** Gõ lệnh mẫu: **"Hãy đóng vai trò [Tên Role]"** trước khi giao Task.

| Role | Định Nghĩa (Persona & Mindset) | Nhiệm Vụ Cốt Lõi |
|------|---------------------------------|------------------|
| **PM** | [`.agent/roles/product-manager.md`](.agent/roles/product-manager.md) | Quản trị Roadmap, Chiến lược & ROI. |
| **PO** | [`.agent/roles/product-owner.md`](.agent/roles/product-owner.md) | Quản trị Backlog, Sprint & Thực thi. |
| **BA** | [`.agent/roles/business-analyst.md`](.agent/roles/business-analyst.md) | Phân tích nghiệp vụ & Requirements. |
| **Architect** | [`.agent/roles/architect.md`](.agent/roles/architect.md) | Thiết kế hệ thống & Architecture. |
| **Senior AI Engineer** | [`.agent/roles/senior-ai-engineer.md`](.agent/roles/senior-ai-engineer.md) | Kiến tạo & tối ưu hóa "Bộ não" AI. |
| **Designer** | [`.agent/roles/product-designer.md`](.agent/roles/product-designer.md) | Thiết kế hệ thống UI/UX & Design System. |
| **Engineer** | [`.agent/roles/software-engineer.md`](.agent/roles/software-engineer.md) | Xây dựng mã nguồn (Clean Code). |
| **QA** | [`.agent/roles/quality-assurance.md`](.agent/roles/quality-assurance.md) | Gác cổng chất lượng & Testing. |
| **Security Validator** | [`.agent/roles/security-auditor.md`](.agent/roles/security-auditor.md) | Kiểm toán bảo mật & DevSecOps. |
| **Researcher** | [`.agent/roles/researcher.md`](.agent/roles/researcher.md) | Nghiên cứu dữ liệu & Evidence. |
| **DevOps** | [`.agent/roles/devops-engineer.md`](.agent/roles/devops-engineer.md) | Hạ tầng & Automation Pipeline. |
| **Context Auditor** | [`.agent/roles/context-auditor.md`](.agent/roles/context-auditor.md) | Kiểm toán nhất quán Context & Knowledge Hygiene. |

> 📗 **Học cách làm chủ Roles & Skills:** Xem tại [OS-Handbook.md](./OS-Handbook.md#3-roles--skills).

## 6. Quy Trình Non-Coding (Intel Construction)

Quy trình dành cho việc xây dựng tài liệu, chiến lược và đặc tả (BA, PM, Architect, Designer, QA). 

MILKYWAY-CORE áp dụng triết lý **"Documentation as Code"**: Tri thức được cấu trúc hóa, có liên kết chặt chẽ và định danh số (Dewey).

> 📘 **Hướng dẫn SOP:** Xem chi tiết luồng Intel Construction tại [OS-Handbook.md](./OS-Handbook.md#7-cấu-trúc-tri-thức-và-ssot-project-knowledge-architecture).

## 7. Quy Trình Coding (Spec-Driven Development)

Quy trình dành cho Software Engineers vận hành theo kỷ luật **Spec-Driven Development (SDD)** thông qua OpenSpec (OPSX).

> 🛠️ **Thực thi:** Sử dụng các lệnh `/opsx-...` để bắt đầu chu kỳ: **Spec-First, Code-Later**.

> 💻 **Hướng dẫn SOP:** Xem chi tiết luồng Coding thực chiến tại [OS-Handbook.md](./OS-Handbook.md#9-quy-trình-làm-việc-chuẩn-universal-workflow).

---

## 8. Cấu Trúc Thư Mục (Directory Structure)

Dự án được tổ chức theo mô hình hiện đại, tối ưu cho cả AI và Con người, tuân thủ nghiêm ngặt chuẩn Dewey Decimal:

```text
milkyway-core/
├── .agent/                  # Bộ não AI: Định nghĩa hành vi và năng lực
│   ├── roles/               # Định nghĩa các vai trò (Persona & Mindset)
│   ├── rules/               # Các quy tắc ràng buộc hành vi của AI
│   ├── skills/              # Bộ kỹ năng chuyên môn hỗ trợ công cụ
│   └── workflows/           # Quy trình thực thi các lệnh Slash Commands
├── docs/                    # Tài liệu dự án (Project Docs) - Dewey Decimal
│   ├── 000-Index.md         # TRANG CHỦ - Mục lục tài liệu tổng thể
│   ├── 010-Planning/        # Chiến lược: Roadmap, OKRs, Sprints, Estimates
│   ├── 020-Requirements/    # Nghiệp vụ: BRD, Use Cases, PRD
│   ├── 022-User-Stories/    # Agile Backlog: Epics, Stories, Active Sprint
│   ├── 030-Specs/           # Đặc tả: Architecture (ADR, RFC), API, Schema
│   ├── 035-QA/              # Chất lượng: Test Plans, Cases, Reports
│   ├── 040-Design/          # UI/UX: Design System, Wireframes, Specs
│   ├── 050-Research/        # Khám phá: User Interviews, Market Research
│   ├── 060-Manuals/         # Hướng dẫn: User Guide, Admin Guide
│   ├── 070-Deployment/      # Triển khai: Release Notes, Runbooks
│   ├── 080-Operations/      # Vận hành: Incidents, SLAs
│   ├── 090-Archive/         # Lưu trữ tài liệu cũ (không bao giờ xóa)
│   └── 999-Resources/       # Meeting Notes, Glossary, Templates
├── knowledge-base/          # Hệ thống tri thức chuyên biệt (Shared Knowledge)
│   ├── 01-Metas/            # Từ điển thuật ngữ (Glossary/Ontology)
│   ├── 10-Technical/        # Tiêu chuẩn Coding, Kiến trúc Agent
│   ├── 20-Project/          # Quản trị (PMP), Governance, SOPs
│   ├── 30-Domain/           # Kiến thức nghiệp vụ đặc thù
│   ├── 40-Memory/           # Bài học kinh nghiệm (Lessons Learned)
│   ├── 45-Role-Memory/      # Ký ức riêng của từng AI Role
│   └── 99-Templates/        # Mẫu tài liệu chuẩn (CO-STAR, Agile)
├── openspec/                # Quy trình Spec-Driven Development (SDD)
├── src/                     # Mã nguồn chính của dự án 
├── OS-Handbook.md           # Cẩm nang vận hành chi tiết
├── OS-Cheatsheet.md         # Bảng tra cứu nhanh lệnh & quy trình
└── README.md                # Tài liệu hướng dẫn này
```

---

## 9. Hệ Thống Tri Thức & Quy Định Tài Liệu

Thư mục `knowledge-base/` là "Bộ nhớ dài hạn" của hệ thống, chứa các tri thức nền tảng không thay đổi theo từng task nhưng áp dụng cho toàn dự án.

### 9.1 Vai Trò của AI Agent (Kỷ luật Dewey)
Mọi AI Agent khi bắt đầu một nhiệm vụ **BẮT BUỘC** phải:
1.  **Tra cứu Tiêu chuẩn:** Kiểm tra `10-Technical/Coding-Standards.md` để đảm bảo code viết ra tuân thủ Style Guide.
2.  **Sử dụng Ngôn ngữ chung:** Tham chiếu `01-Metas/Glossary.md` để dùng đúng thuật ngữ chuyên môn.
3.  **Áp dụng Prompt Engineering:** Tuân thủ khung **CO-STAR** tại `99-Templates/` để cải thiện chất lượng suy luận.
4.  **Học hỏi kinh nghiệm:** Đọc `40-Memory/` để tránh các lỗi đã từng xảy ra trong lịch sử.

### 9.2 Phân Loại Dewey (Taxonomy)
Hệ thống sử dụng mã số phân loại để tổ chức tri thức:
- **01 - 09 (Metas):** Tri thức về siêu dữ liệu, thuật ngữ và ngôn ngữ.
- **10 - 19 (Instructions):** Tiêu chuẩn kỹ thuật, Coding Standards.
- **20 - 29 (Governance):** Quy trình quản lý, PMP, SOP vận hành dự án.
- **30 - 39 (Domain):** Kiến thức nghiệp vụ chuyên biệt theo lĩnh vực.
- **40 - 49 (Memory):** Lưu trữ kinh nghiệm (Project/Role Memory).

> 💡 **Lưu ý:** Thư mục dự án `docs/` dùng mã 3 chữ số (VD: `020-Requirements`), trong khi `knowledge-base/` dùng mã 2 chữ số (VD: `30-Domain`).

---

## 10. Hỏi Đáp Thường Gặp (Q&A)

**H: Sự khác biệt giữa `docs/` và `knowledge-base/` là gì?**
- **Đ:** `docs/` chứa các tài liệu **đặc thù của dự án** (như PRD của tính năng X, Design của App Y). `knowledge-base/` chứa các **nguyên tắc nền tảng** (như Cách viết code chuẩn, Cách quản lý dự án chuẩn) áp dụng chung cho mọi tính năng.

**H: Làm sao để cập nhật kiến thức cho AI?**
- **Đ:** Khi gặp một bài học mới, hãy cập nhật vào `40-Memory/After-Action-Review.md`. AI sẽ tự động đọc file này trong các task tương lai để cải thiện hành vi.

---

## 11. Tài Liệu Tham Khảo (References)

1. [AGENTS.md (Long-term AI Memory)](./AGENTS.md)
2. [OS-Handbook (Cẩm nang vận hành)](./OS-Handbook.md)
3. [OS-Cheatsheet (Tra cứu nhanh)](./OS-Cheatsheet.md)
4. [Hướng dẫn cài đặt OpenSpec chi tiết](./openspec/docs/installation.md)
5. [Tìm hiểu về OPSX Workflow](./openspec/docs/opsx.vi.md)
6. [Các khái niệm cốt lõi của OpenSpec](./openspec/docs/concepts.vi.md)
7. [Quy trình Development (Workflows)](./openspec/docs/workflows.vi.md)
8. [Mục lục hệ thống Tri thức](./knowledge-base/00-Index.md)

---
*Tài liệu được khởi tạo và quản lý bởi MILKYWAY-CORE Antigravity - Hệ Điều Hành Agile AI-Native.*
