## Context

Glow & Pure là một thương hiệu mỹ phẩm hướng tới các sản phẩm thuần chay, tự nhiên và an toàn được chứng minh bằng khoa học. Hiện tại, chúng ta đang xây dựng Landing Page mới cho thương hiệu này (dựa trên thiết kế từ Stitch/Figma), với mục tiêu mang lại trải nghiệm tinh tế, chuyên nghiệp và có tỷ lệ chuyển đổi cao. Thay đổi này tập trung vào các khối chính của trang (không bao gồm Header/Footer). Điểm nhấn là một "AI Skincare Advisor" tích hợp ngay trên trang chủ để thu hút sự tương tác.

## Goals / Non-Goals

**Goals:**
- Xây dựng các Section giao diện người dùng (UI Components) cho trang chủ bằng công nghệ hiện tại của dự án kết hợp chuẩn **shadcn/ui** (React/Next.js/Tailwind CSS/shadcn) đảm bảo tính chuẩn xác về thiết kế (Pixel-perfect) và mang hiệu ứng "Wow" (Vibrant, Premium).
- Đảm bảo trải nghiệm di động/responsive tối ưu cho tất cả các thiết bị.
- Tích hợp tính năng AI Skincare Advisor ở mức giao diện frontend mượt mà (VD: thao tác tải ảnh, thanh trạng thái hiển thị đang phân tích, trả về kết quả UI).
- Tạo Product Grid liên kết chặt chẽ với kiến trúc danh mục sản phẩm hiện tại.

**Non-Goals:**
- Không chỉnh sửa hay thay đổi cấu trúc của Header và Footer globale.
- Không xây dựng hệ thống AI Deep Learning backend cho tính năng tư vấn da (chỉ mockup luồng hoặc nối với đầu API đã có).
- Không tái thiết kế trang chi tiết sản phẩm, giỏ hàng, hoặc trang thanh toán.

## Decisions

- **UI/UX Approach:** Áp dụng hệ thống kiểu chữ và màu sắc tinh tế, hiện đại, thể hiện đúng nhận diện thương hiệu. Các layout section sẽ tận dụng whitespace hợp lý, kết hợp typography rõ ràng tạo cảm giác thanh lịch, cao cấp.
- **Component Architecture:** Chia nhỏ trang chủ thành các component: `HeroBanner`, `USPIndicators`, `ProductShowcase`, `AIAdvisorWidget`, `TestimonialCarousel`, `BrandPress`. 
- **Micro-animations:** 
  - Các yếu tố USP và Text mờ hiển thị chậm (fade-in, slide-up) khi scroll tới.
  - Hover product card tạo hiệu ứng shadow mịn trơn và đổi nhẹ màu CTA.
  - Vòng quét AI (Scan effect) chuyển động ảo qua ảnh khuôn mặt người dùng tải lên.
- **Product Data Source:** Khối danh sách sản phẩm lấy dữ liệu thông qua Data Fetching (GraphQL/Shopify API) để duy trì tính đồng nhất kho hàng, thay vì hardcode.

## Risks / Trade-offs

- **[Risk] Hiệu năng (Performance) bị giảm do tải ảnh:** Banner lớn và nhiều ảnh sản phẩm.
  - *Mitigation*: Tự động optimize hình ảnh khi build (WebP), lazy load đối với section phần thân dưới.
- **[Risk] AI Flow chưa sẵn sàng backend:** Có thể làm trải nghiệm đứt gãy.
  - *Mitigation*: Nếu backend API chưa xong, xử lý luồng hiển thị form -> loading ảo -> show kết quả demo (Mock result) để giữ người dùng tiếp tục hành trình mua sắm.
- **[Risk] Đồng màu sắc với Design System hiện tại:** Đảm bảo Design System của store matching với file thiết kế Landing page mới.
  - *Mitigation*: Khai báo biến CSS (CSS Variables) chuẩn mực cho các mã màu riêng biệt của Glow & Pure trong layout này.
