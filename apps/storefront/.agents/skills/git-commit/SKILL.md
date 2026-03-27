---
name: git-commit
description: 'Thực hiện lệnh git commit với phân tích thông điệp commit theo chuẩn Conventional Commits, thông minh trong việc staging và tạo thông điệp. Sử dụng khi người dùng yêu cầu commit các thay đổi, tạo một git commit, hoặc đề cập đến "/commit". Hỗ trợ: (1) Tự động nhận diện loại (type) và phạm vi (scope) từ các thay đổi, (2) Tạo thông điệp commit theo chuẩn từ kết quả diff, (3) Commit tương tác với các tùy chọn ghi đè loại/phạm vi/mô tả, (4) Staging file thông minh để phân nhóm logic'
license: MIT
allowed-tools: Bash
---

# Git Commit với Conventional Commits

## Tổng quan (Overview)

Tạo ra các git commit tiêu chuẩn, mang tính ngữ nghĩa bằng cách sử dụng đặc tả Conventional Commits. Phân tích kết quả diff thực tế để xác định loại (type), phạm vi (scope) và thông điệp (message) phù hợp.

## Định dạng Conventional Commit (Format)

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Các loại Commit (Commit Types)

| Loại (Type) | Mục đích (Purpose)             |
| ---------- | ------------------------------ |
| `feat`     | Tính năng mới (New feature)    |
| `fix`      | Sửa lỗi (Bug fix)              |
| `docs`     | Chỉ tài liệu (Documentation only) |
| `style`    | Định dạng/phong cách (Formatting/style) |
| `refactor` | Tái cấu trúc mã (Code refactor) |
| `perf`     | Cải thiện hiệu suất (Performance improvement) |
| `test`     | Thêm/cập nhật kiểm thử (Add/update tests) |
| `build`    | Hệ thống build/phụ thuộc (Build system/dependencies) |
| `ci`       | Thay đổi CI/cấu hình (CI/config changes) |
| `chore`    | Bảo trì/linh tinh (Maintenance/misc) |
| `revert`   | Hoàn tác commit (Revert commit) |

## Thay đổi gây phá vỡ (Breaking Changes)

```
# Dấu chấm than sau type/scope
feat!: loại bỏ endpoint đã lỗi thời

# Footer BREAKING CHANGE
feat: cho phép cấu hình mở rộng các cấu hình khác

BREAKING CHANGE: hành vi của khóa `extends` đã thay đổi
```

## Quy trình làm việc (Workflow)

### 1. Phân tích Diff (Analyze Diff)

```bash
# Nếu các file đã được staged, sử dụng staged diff
git diff --staged

# Nếu chưa có gì được staged, sử dụng working tree diff
git diff

# Đồng thời kiểm tra trạng thái
git status --porcelain
```

### 2. Staging File (nếu cần)

Nếu chưa có gì được staged hoặc bạn muốn phân nhóm các thay đổi theo cách khác:

```bash
# Stage các file cụ thể
git add path/to/file1 path/to/file2

# Stage theo mẫu (pattern)
git add *.test.*
git add src/components/*

# Staging tương tác
git add -p
```

**Tuyệt đối không bao giờ commit các bí mật (secrets)** như (.env, credentials.json, các khóa riêng tư).

### 3. Tạo Thông điệp Commit (Generate Commit Message)

Phân tích kết quả diff để xác định:

- **Loại (Type)**: Thay đổi này thuộc loại nào?
- **Phạm vi (Scope)**: Khu vực/mô-đun nào bị ảnh hưởng?
- **Mô tả (Description)**: Bản tóm tắt một dòng về những gì đã thay đổi (thì hiện tại, câu mệnh lệnh, <72 ký tự).

### 4. Thực thi Commit (Execute Commit)

```bash
# Một dòng
git commit -m "<type>[scope]: <description>"

# Nhiều dòng với thân bài/footer
git commit -m "$(cat <<'EOF'
<type>[scope]: <description>

<optional body>

<optional footer>
EOF
)"
```

## Các thực hành tốt nhất (Best Practices)

- Một thay đổi logic cho mỗi commit.
- Sử dụng thì hiện tại: "add" thay vì "added".
- Sử dụng câu mệnh lệnh: "fix bug" thay vì "fixes bug".
- Tham chiếu đến các issues: `Closes #123`, `Refs #456`.
- Giữ mô tả dưới 72 ký tự.

## Giao thức An toàn Git (Git Safety Protocol)

- TUYỆT ĐỐI KHÔNG cập nhật cấu hình git (git config).
- TUYỆT ĐỐI KHÔNG chạy các lệnh có tính hủy hoại (--force, hard reset) mà không có yêu cầu rõ ràng.
- TUYỆT ĐỐI KHÔNG bỏ qua các hooks (--no-verify) trừ khi người dùng yêu cầu.
- TUYỆT ĐỐI KHÔNG force push vào main/master.
- Nếu commit thất bại do hooks, hãy sửa và tạo commit MỚI (đừng amend).
