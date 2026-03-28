## 1. Preparation & Assets

- [x] 1.1 Khởi tạo thư mục component mới trong source code cho: `HeroBanner`, `USPs`, `FeaturedProducts`, `AIAdvisor`, `Testimonials`, `PressLogos`
- [x] 1.2 Chuẩn bị các tài nguyên (hình ảnh SVG, WebP, Fonts) từ thiết kế Glow & Pure
- [x] 1.3 Cập nhật biến CSS (CSS Variables) hoặc tokens cho typography, màu sắc thương hiệu dùng riêng trong trang chủ

## 2. Hero Banner & USPs Implementation

- [x] 2.1 Xây dựng cấu trúc UI cho `HeroBanner` với responsive background image, typography thương hiệu và nút ấn CTA
- [x] 2.2 Tạo component `USPs` sử dụng CSS Grid/Flexbox chứa 4 icon đại diện cho 4 thông điệp cốt lõi
- [x] 2.3 Thêm các CSS Keyframes cơ bản (như fade-in, slide-up) để tạo cảm giác mượt mà khi người dùng lướt tới khu vực USPs

## 3. Featured Product Grid Implementation

- [x] 3.1 Code UI component `ProductCard` độc lập, bổ sung hiệu ứng hover tinh tế (đổ bóng mượt, text highlight)
- [x] 3.2 Tổ chức layout lưới `FeaturedProducts` chứa các `ProductCard` tương ứng
- [x] 3.3 Kết nối dữ liệu vào lưới: dùng Mock JSON data ban đầu hoặc kết nối lấy dữ liệu fetch trực tiếp từ API/GraphQL của Store

## 4. AI Skincare Advisor Component

- [x] 4.1 Cắt HTML/CSS phần UI tương tác của `AIAdvisorWidget` (văn bản giới thiệu, widget tải file)
- [x] 4.2 Viết logic state UI mô phỏng quá trình AI đang phân tích sau khi click: từ IDLE -> ANALYZING (scanning animation) -> RESULT
- [x] 4.3 Hoàn thiện popup hoặc section trả về kết quả mockup chi tiết (demo chức năng)

## 5. Testimonials & Press Logos

- [x] 5.1 Cài đặt UI cho phần đánh giá khách hàng `Testimonials` dước định dạng danh sách cuộn ngang hoặc khối tĩnh thân thiện mobile
- [x] 5.2 Bố cục component hiển thị rating (ngôi sao), trích dẫn và tên người dùng
- [x] 5.3 Thiết kế khối lưới hiển thị logo báo chí (Vogue, Elle, Harper's Bazaar) ở cuối khối main content

## 6. Integration & Quality Assurance

- [x] 6.1 Combine toàn bộ 5 sections vừa tạo xếp chồng lên nhau thành một layout tổng thể trên Home route
- [x] 6.2 Kiểm tra tối ưu Mobile-responsive trên các breakpoint chuẩn (320px, 768px, 1024px)
- [x] 6.3 Checklist QA: đảm bảo các hình ảnh load nhanh (WebP), các nút CTA không bị đè và animation hoat động trơn tru
