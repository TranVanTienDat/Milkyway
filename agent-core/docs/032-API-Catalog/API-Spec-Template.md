# 📝 API Specification Template (AI-Ready)

> **Mục tiêu:** Đây là file mẫu cho các API sau khi Backend hoàn thiện. Khi ghi vào Catalog, hãy điền đầy đủ thông tin bên dưới để AI có thể tự động triển khai Frontend nhanh nhất.

---

## 📡 1. Thông tin cơ bản (Metadata)
- **Name:** [Tên API - VD: Get User Profile]
- **Protocol:** [REST / GraphQL / Webhook]
- **Endpoint:** `[GET/POST/...] /api/v1/endpoint`
- **Auth:** [None / JWT / API-Key]

---

## 🏗️ 2. Request Structure (Cấu trúc đầu vào)

### 📥 Path/Query Parameters
```typescript
interface RequestParams {
  id: string; // ID của đối tượng
  limit?: number; // Số lượng bản ghi (mặc định 10)
}
```

### 📦 Request Body (For POST/PUT/PATCH)
```json
{
  "full_name": "Tên đầy đủ của người dùng",
  "email": "địa chỉ email"
}
```

---

## 📤 3. Response Structure (Cấu trúc đầu ra)

### ✅ Success (200/201 OK)
```json
{
  "status": "success",
  "data": {
    "id": "123",
    "full_name": "Nguyễn Văn A",
    "created_at": "2026-03-27T23:30:00Z"
  }
}
```

### ❌ Error (4xx/5xx Fail)
- **401 Unauthorized:** Token hết hạn hoặc không hợp lệ.
- **404 Not Found:** Không tìm thấy ID đối tượng.

---

## 💡 4. Logic & Notes (Lưu ý nghiệp vụ)
- [Ghi chú về Logic nghiệp vụ, các phụ thuộc hoặc quy tắc tính toán...]
- [Ví dụ: Cần gọi API Login trước khi gọi API này].

---
*MILKYWAY-CORE —— Bridging the gap between Backend and Frontend.*
