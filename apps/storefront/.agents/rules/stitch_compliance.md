# 🎨 STITCH-COMPLIANCE —— Quy tắc Tuân thủ Thiết kế Tuyệt đối (Absolute Design Compliance Rule)

> **Mục tiêu:** Đảm bảo mọi dòng code UI trong `apps/storefront` phải là bản dịch hoàn hảo từ thiết kế Stitch, không có sự sai lệch hay tự ý sáng tạo ngoài khuôn khổ.

## 1. Nguyên tắc Cốt lõi (Core Principles)

1. **Thiết kế là Kinh thánh (Design is Truth):** Mọi thông số (Hệ màu Custom `#F06222`, Typography Plus Jakarta Sans/Inter, Spacing, Border Radius) trong file `apps/storefront/stitch-design.md` và dự án Stitch là luật lệ tối cao.
2. **Cấm Tự ý Sáng tạo (No Freelancing):** Agent KHÔNG ĐƯỢC PHÉP thay đổi màu sắc, bo góc, hay layout nếu không được chỉ định trong thiết kế. Nếu một phần UI chưa có trong thiết kế, Agent phải hỏi ý kiến User hoặc đề xuất dựa trên các token hiện có, KHÔNG ĐƯỢC tự ý hardcode giá trị mới.
3. **Tuân thủ Triết lý "The Ethereal Editor":**
    - **Quy tắc No-Line:** Tuyệt đối không dùng border 1px solid để phân chia section. Dùng Surface Container hierarchy để phân tách không gian.
    - **Glass & Gradient:** Luôn ưu tiên hiệu ứng Glassmorphism (80% opacity + backdrop-blur 20px) và gradient mượt mà cho các thành phần quan trọng (Nav, CTA).
    - **Ambient Shadows:** Chỉ sử dụng shadow mờ 40px với 4% opacity, tuyệt đối tránh shadow đậm kiểu truyền thống.

## 2. Chiến lược Thành phần (Component Strategy)

1. **Nền tảng shadcn/ui (shadcn/ui as Foundation):** Luôn ưu tiên sử dụng các thành phần từ thư viện **shadcn/ui** làm nền tảng kỹ thuật.
2. **Tùy biến "Stitch-Perfect":** Các thành phần shadcn/ui phải được tùy biến styles (Tailwind CSS) để khớp hoàn toàn với thiết kế Stitch trước khi đưa vào sử dụng. Không để nguyên style mặc định của shadcn/ui nếu nó mâu thuẫn với thiết kế.
3. **Cơ cấu Component Tập trung:** Đảm bảo mọi component UI nguyên tử (atom) đều nằm trong thư mục `components/ui/` để duy trì tính nhất quán.

## 3. Chỉ thị Vận hành (Operational Directives)

1. **Kiểm tra Spec trước khi Code:** Trước khi thực hiện bất kỳ task UI nào, Agent phải đọc lại `apps/storefront/stitch-design.md`.
2. **Audit Check:** Sau khi code xong, Agent phải tự so sánh kết quả với thiết kế và khẳng định tính tuân thủ trong báo cáo.
3. **Phản hồi khi có Xung đột:** Nếu yêu cầu của User mâu thuẫn với quy tắc thiết kế (ví dụ: yêu cầu thêm border 1px), Agent phải cảnh báo về sự vi phạm quy tắc "No-Line" trước khi thực hiện.

---

_STITCH-COMPLIANCE —— Một Pixel sai lệch là một sự thất bại. (One pixel off is a failure)._
