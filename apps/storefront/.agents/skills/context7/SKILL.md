---
name: context7
description: Truy xuất tài liệu cập nhật cho các thư viện phần mềm, frameworks và components thông qua Context7 API. Sử dụng skill này khi cần tìm kiếm tài liệu cho bất kỳ thư viện hoặc framework lập trình nào, tìm ví dụ mã nguồn cho các API hoặc tính năng cụ thể, xác minh cách sử dụng đúng của các hàm trong thư viện, hoặc lấy thông tin hiện tại về các thư viện API có thể đã thay đổi kể từ khi quá trình huấn luyện kết thúc.
---

# Context7

## Tổng quan (Overview)

Skill này cho phép truy xuất tài liệu hiện tại cho các thư viện và thành phần phần mềm bằng cách truy vấn Context7 API thông qua curl. Hãy sử dụng nó thay vì dựa vào dữ liệu huấn luyện có thể đã lỗi thời.

## Quy trình làm việc (Workflow)

### Bước 1: Tìm kiếm thư viện (Search for the Library)

Để tìm ID thư viện trên Context7, hãy truy vấn endpoint tìm kiếm:

```bash
curl -s "https://context7.com/api/v2/libs/search?libraryName=LIBRARY_NAME&query=TOPIC" | jq '.results[0]'
```

**Tham số (Parameters):**
- `libraryName` (bắt buộc): Tên thư viện cần tìm (ví dụ: "react", "nextjs", "fastapi", "axios")
- `query` (bắt buộc): Mô tả về chủ đề để xếp hạng mức độ liên quan

**Các trường phản hồi (Response fields):**
- `id`: Định danh thư viện cho endpoint context (ví dụ: `/websites/react_dev_reference`)
- `title`: Tên thư viện dễ đọc
- `description`: Mô tả ngắn gọn về thư viện
- `totalSnippets`: Số lượng đoạn tài liệu (documentation snippets) có sẵn

### Bước 2: Lấy tài liệu (Fetch Documentation)

Để truy xuất tài liệu, hãy sử dụng ID thư viện từ bước 1:

```bash
curl -s "https://context7.com/api/v2/context?libraryId=LIBRARY_ID&query=TOPIC&type=txt"
```

**Tham số (Parameters):**
- `libraryId` (bắt buộc): ID thư viện từ kết quả tìm kiếm
- `query` (bắt buộc): Chủ đề cụ thể cần lấy tài liệu
- `type` (tùy chọn): Định dạng phản hồi - `json` (mặc định) hoặc `txt` (văn bản thuần túy, dễ đọc hơn)

## Ví dụ (Examples)

### Tài liệu về React hooks

```bash
# Tìm ID thư viện React
curl -s "https://context7.com/api/v2/libs/search?libraryName=react&query=hooks" | jq '.results[0].id'
# Trả về: "/websites/react_dev_reference"

# Lấy tài liệu về useState
curl -s "https://context7.com/api/v2/context?libraryId=/websites/react_dev_reference&query=useState&type=txt"
```

### Tài liệu về Next.js routing

```bash
# Tìm ID thư viện Next.js
curl -s "https://context7.com/api/v2/libs/search?libraryName=nextjs&query=routing" | jq '.results[0].id'

# Lấy tài liệu về app router
curl -s "https://context7.com/api/v2/context?libraryId=/vercel/next.js&query=app+router&type=txt"
```

### FastAPI dependency injection

```bash
# Tìm ID thư viện FastAPI
curl -s "https://context7.com/api/v2/libs/search?libraryName=fastapi&query=dependencies" | jq '.results[0].id'

# Lấy tài liệu về dependency injection
curl -s "https://context7.com/api/v2/context?libraryId=/fastapi/fastapi&query=dependency+injection&type=txt"
```

## Mẹo (Tips)

- Sử dụng `type=txt` để có kết quả dễ đọc hơn.
- Sử dụng `jq` để lọc và định dạng các phản hồi JSON.
- Hãy cụ thể với tham số `query` để cải thiện xếp hạng mức độ liên quan.
- Nếu kết quả tìm kiếm đầu tiên không chính xác, hãy kiểm tra các kết quả bổ sung trong mảng.
- URL-encode các tham số truy vấn chứa dấu cách (sử dụng `+` hoặc `%20`).
- Không cần API key cho việc sử dụng cơ bản (có giới hạn tần suất - rate-limited).
