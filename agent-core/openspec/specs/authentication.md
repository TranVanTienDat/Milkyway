# 🚀 OpenSpec: Authentication System (Login & Register)

Tài liệu này xác định cách hệ thống xác thực của Glow & Pure được triển khai.

## 1. Yêu cầu (Requirements)
- Thành viên có thể đăng nhập bằng email và mật khẩu.
- Thành viên mới có thể đăng ký tài khoản.
- Mọi trường dữ liệu cần được kiểm tra định dạng và tính hợp lệ trên cả client và server.

## 2. Các quy tắc xác thực (Validation Rules)

### Login Form
- **Email**: Phải là định dạng email hợp lệ, không để trống.
- **Password**: Ít nhất 6 ký tự, không để trống.

### Register Form
- **Fullname**: Tối thiểu 3 ký tự.
- **Email**: Phải là định dạng email hợp lệ.
- **Password**: Tối thiểu 8 ký tự, bao gồm ít nhất một chữ hoa, một chữ thường và một số.
- **Confirm Password**: Phải trùng khớp với Password.
- **Terms**: Bắt buộc phải được chấp thuận.

## 3. Kiến trúc kỹ thuật (Technical Architecture)

### Thư viện sử dụng:
- **Form Management**: `react-hook-form`
- **Schema Validation**: `zod`
- **GraphQL Client**: `@apollo/client`
- **Notifications**: `sonner`

### Quy trình xử lý (Flow):
1. User nhập dữ liệu vào form.
2. `react-hook-form` + `zod` validate tại client.
3. Nếu hợp lệ, gọi GraphQL mutation thích hợp.
4. Xử lý kết quả:
   - Thành công: Lưu JWT, thông báo cho người dùng và chuyển hướng (về Home hoặc Dashboard).
   - Thất bại: Hiển thị lỗi từ server (ví dụ: email đã được sử dụng, sai mật khẩu).

## 4. GraphQL Mutations

Xem chi tiết tại: [API Catalog - GraphQL/Auth.md](../../docs/032-API-Catalog/GraphQL/Auth.md)

---
_Tài liệu này được Milkyway viết và sẽ được duy trì trong suốt quá trình phát triển._
