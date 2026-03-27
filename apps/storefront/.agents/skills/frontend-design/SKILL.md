---
name: frontend-design
description: Tạo ra các giao diện frontend độc đáo, chất lượng production với chất lượng thiết kế cao. Tạo ra mã nguồn sáng tạo, chau chuốt, tránh các thẩm mỹ AI thông thường. Sử dụng khi người dùng yêu cầu xây dựng các components web, trang, artifacts, poster hoặc ứng dụng, hoặc khi bất kỳ thiết kế nào cần ngữ cảnh của dự án.
license: Apache 2.0. Dựa trên skill frontend-design của Anthropic. Xem NOTICE.md để biết ghi nhận.
---

Skill này hướng dẫn việc tạo ra các giao diện frontend độc đáo, chất lượng production, tránh thẩm mỹ "AI thông thường" (generic AI slop). Hãy triển khai mã nguồn thực tế với sự chú ý đặc biệt đến các chi tiết thẩm mỹ và các lựa chọn sáng tạo.

## Giao thức Thu thập Ngữ cảnh (Context Gathering Protocol)

Các kỹ năng thiết kế sẽ tạo ra kết quả chung chung nếu thiếu ngữ cảnh dự án. Bạn PHẢI xác nhận ngữ cảnh thiết kế trước khi thực hiện bất kỳ công việc thiết kế nào.

**Ngữ cảnh bắt buộc** — mỗi kỹ năng thiết kế cần tối thiểu:
- **Đối tượng mục tiêu (Target audience)**: Ai sử dụng sản phẩm này và trong hoàn cảnh nào?
- **Trường hợp sử dụng (Use cases)**: Những công việc/nhiệm vụ nào họ đang cố gắng hoàn thành?
- **Cá tính/Tông màu thương hiệu (Brand personality/tone)**: Giao diện nên mang lại cảm giác như thế nào?

Mỗi skill riêng lẻ có thể yêu cầu thêm ngữ cảnh — hãy kiểm tra phần chuẩn bị của skill đó để biết chi tiết.

**LƯU Ý QUAN TRỌNG**: Bạn không thể suy luận ngữ cảnh này bằng cách đọc mã nguồn. Code cho bạn biết cái gì đã được xây dựng, chứ không phải nó dành cho ai hay nó nên mang lại cảm giác gì. Chỉ có người tạo ra nó mới có thể cung cấp ngữ cảnh này.

**Thứ tự thu thập (Gathering order):**
1. **Kiểm tra hướng dẫn hiện tại (tức thì)**: Nếu các hướng dẫn đã nạp của bạn chứa phần **Design Context**, hãy tiến hành ngay lập tức.
2. **Kiểm tra .impeccable.md (nhanh)**: Nếu không có trong hướng dẫn, hãy đọc `.impeccable.md` từ thư mục gốc của dự án. Nếu nó tồn tại và chứa ngữ cảnh bắt buộc, hãy tiến hành.
3. **Chạy teach-impeccable (BẮT BUỘC)**: Nếu cả hai nguồn đều không có ngữ cảnh, bạn PHẢI chạy `/teach-impeccable` NGAY BÂY GIỜ trước khi làm bất cứ việc gì khác. KHÔNG bỏ qua bước này. KHÔNG cố gắng suy luận ngữ cảnh từ mã nguồn thay thế.

---

## Định hướng Thiết kế (Design Direction)

Hãy cam kết với một định hướng thẩm mỹ MẠNH MẼ:
- **Mục đích (Purpose)**: Giao diện này giải quyết vấn đề gì? Ai sử dụng nó?
- **Tông màu (Tone)**: Chọn một thái cực: cực kỳ tối giản (brutally minimal), hỗn loạn tối đa (maximalist chaos), tương lai cổ điển (retro-futuristic), hữu cơ/tự nhiên (organic/natural), sang trọng/tinh tế (luxury/refined), vui tươi (playful/toy-like), phong cách tạp chí (editorial/magazine), thô mộc (brutalist/raw), hình học Art Deco, pastel nhẹ nhàng, công nghiệp/tiện dụng (industrial/utilitarian), v.v. Có rất nhiều phong cách để lựa chọn. Sử dụng những phong cách này để lấy cảm hứng nhưng hãy thiết kế một cái gì đó đúng với định hướng thẩm mỹ.
- **Ràng buộc (Constraints)**: Các yêu cầu kỹ thuật (framework, hiệu suất, khả năng truy cập - accessibility).
- **Sự khác biệt (Differentiation)**: Điều gì làm cho giao diện này KHÔNG THỂ QUÊN? Một điều mà ai đó sẽ nhớ là gì?

**QUAN TRỌNG**: Chọn một định hướng khái niệm rõ ràng và thực hiện nó một cách chính xác. Cả sự phong phú của chủ nghĩa tối đa (bold maximalism) và sự tinh tế của chủ nghĩa tối giản (refined minimalism) đều có hiệu quả—chìa khóa là sự có chủ ý (intentionality), chứ không phải cường độ (intensity).

Sau đó, triển khai mã nguồn thực tế:
- Chất lượng production và đầy đủ chức năng.
- Ấn tượng thị giác và đáng nhớ.
- Gắn kết với một quan điểm thẩm mỹ rõ ràng.
- Được chau chuốt tỉ mỉ trong từng chi tiết.

## Hướng dẫn Thẩm mỹ Frontend (Frontend Aesthetics Guidelines)

### Kiểu chữ (Typography)
→ *Tham khảo [typography reference](reference/typography.md) để biết về tỉ lệ (scales), kết hợp (pairing) và chiến lược tải (loading strategies).*

Chọn các font đẹp, độc đáo và thú vị. Kết hợp một font hiển thị (display font) đặc biệt với một font nội dung (body font) tinh tế.

**NÊN LÀM (DO)**: Sử dụng tỉ lệ kiểu chữ dạng mô-đun (modular type scale) với kích thước linh hoạt (clamp).
**NÊN LÀM (DO)**: Thay đổi độ đậm (weights) và kích thước font để tạo ra hệ thống phân cấp trực quan rõ ràng.
**KHÔNG NÊN (DON'T)**: Sử dụng các font quá phổ biến—Inter, Roboto, Arial, Open Sans, hoặc các font mặc định của hệ thống.
**KHÔNG NÊN (DON'T)**: Sử dụng font monospace như một cách tắt lười biếng để tạo cảm giác "kỹ thuật/developer".
**KHÔNG NÊN (DON'T)**: Đặt các icon lớn với các góc bo tròn phía trên mỗi tiêu đề—chúng hiếm khi thêm giá trị và khiến các trang web trông giống như bản mẫu (templated).

### Màu sắc & Chủ đề (Color & Theme)
→ *Tham khảo [color reference](reference/color-and-contrast.md) để biết về OKLCH, bảng màu (palettes) và chế độ tối (dark mode).*

Cam kết với một bảng màu gắn kết. Các màu chủ đạo với các điểm nhấn sắc nét sẽ vượt trội hơn các bảng màu rụt rè, phân bổ đều.

**NÊN LÀM (DO)**: Sử dụng các hàm màu CSS hiện đại (oklch, color-mix, light-dark) để có các bảng màu đồng nhất về mặt tri giác và dễ bảo trì.
**NÊN LÀM (DO)**: Pha trộn các màu trung tính (neutrals) với tông màu của thương hiệu—ngay cả một chút gợi ý nhỏ cũng tạo ra sự gắn kết trong tiềm thức.
**KHÔNG NÊN (DON'T)**: Sử dụng văn bản màu xám trên nền màu—nó trông bị nhạt nhòa; thay vào đó, hãy sử dụng một sắc độ của màu nền.
**KHÔNG NÊN (DON'T)**: Sử dụng màu đen thuần (#000) hoặc trắng thuần (#fff)—luôn luôn pha màu; màu đen/trắng thuần không bao giờ xuất hiện trong tự nhiên.
**KHÔNG NÊN (DON'T)**: Sử dụng bảng màu AI: màu xanh lơ trên nền tối, gradient tím sang xanh, các điểm nhấn neon trên nền tối.
**KHÔNG NÊN (DON'T)**: Sử dụng văn bản gradient để tạo "tác động"—đặc biệt là đối với các chỉ số hoặc tiêu đề; nó mang tính trang trí hơn là ý nghĩa.
**KHÔNG NÊN (DON'T)**: Mặc định sử dụng chế độ tối với các điểm nhấn rực rỡ—nó trông "ngầu" nhưng không đòi hỏi các quyết định thiết kế thực sự.

### Bố cục & Không gian (Layout & Space)
→ *Tham khảo [spatial reference](reference/spatial-design.md) để biết về grids, nhịp điệu (rhythm) và container queries.*

Tạo nhịp điệu thị giác thông qua các khoảng cách đa dạng—không phải padding ở đâu cũng giống nhau. Chấp nhận sự bất đối xứng và các bố cục bất ngờ. Phá vỡ lưới (grid) một cách có chủ ý để nhấn mạnh.

**NÊN LÀM (DO)**: Tạo nhịp điệu thị giác thông qua các khoảng cách đa dạng—các cụm chặt chẽ Xen kẽ với các khoảng cách rộng rãi.
**NÊN LÀM (DO)**: Sử dụng khoảng cách linh hoạt với `clamp()` để giao diện có không gian thở trên các màn hình lớn hơn.
**NÊN LÀM (DO)**: Sử dụng sự bất đối xứng và các bố cục bất ngờ; phá vỡ lưới (grid) một cách có chủ ý để nhấn mạnh.
**KHÔNG NÊN (DON'T)**: Gói mọi thứ vào trong các thẻ (cards)—không phải mọi thứ đều cần một container.
**KHÔNG NÊN (DON'T)**: Đặt thẻ lồng trong thẻ—gây nhiễu thị giác, hãy làm phẳng hệ thống phân cấp.
**KHÔNG NÊN (DON'T)**: Sử dụng các lưới thẻ giống hệt nhau—các thẻ có cùng kích thước với icon + tiêu đề + văn bản, lặp lại vô tận.
**KHÔNG NÊN (DON'T)**: Sử dụng bản mẫu bố cục chỉ số hero—số lớn, nhãn nhỏ, các số liệu hỗ trợ, điểm nhấn gradient.
**KHÔNG NÊN (DON'T)**: Căn giữa mọi thứ—văn bản căn lề trái với bố cục bất đối xứng mang lại cảm giác có sự đầu tư thiết kế hơn.
**KHÔNG NÊN (DON'T)**: Sử dụng cùng một khoảng cách ở mọi nơi—nếu thiếu nhịp điệu, bố cục sẽ cảm thấy đơn điệu.

### Chi tiết Thị giác (Visual Details)
**NÊN LÀM (DO)**: Sử dụng các yếu tố trang trí có chủ ý, có mục đích để củng cố thương hiệu.
**KHÔNG NÊN (DON'T)**: Sử dụng kính mờ (glassmorphism) ở mọi nơi—các hiệu ứng mờ, thẻ kính, viền sáng được sử dụng để trang trí thay vì có mục đích.
**KHÔNG NÊN (DON'T)**: Sử dụng các yếu tố bo tròn với viền màu dày ở một bên—một điểm nhấn lười biếng hầu như không bao giờ trông giống như có chủ ý.
**KHÔNG NÊN (DON'T)**: Sử dụng sparklines làm vật trang trí—các biểu đồ nhỏ trông có vẻ tinh vi nhưng không truyền tải được điều gì có ý nghĩa.
**KHÔNG NÊN (DON'T)**: Sử dụng các hình chữ nhật bo tròn với bóng đổ (drop shadows) thông thường—an toàn, dễ quên, có thể là bất kỳ kết quả AI nào.
**KHÔNG NÊN (DON'T)**: Sử dụng modals trừ khi thực sự không còn giải pháp nào tốt hơn—modals là sự lười biếng.

### Chuyển động (Motion)
→ *Tham khảo [motion reference](reference/motion-design.md) để biết về thời gian (timing), easing và giảm chuyển động (reduced motion).*

Tập trung vào những khoảnh khắc có tác động cao: một lần tải trang được dàn dựng tốt với các hiệu ứng hiển thị so le (staggered reveals) tạo ra nhiều niềm vui hơn là các tương tác siêu nhỏ (micro-interactions) rải rác.

**NÊN LÀM (DO)**: Sử dụng chuyển động để truyền tải các thay đổi trạng thái—lúc xuất hiện, lúc biến mất, phản hồi.
**NÊN LÀM (DO)**: Sử dụng các hàm easing lũy thừa (ease-out-quart/quint/expo) để giảm tốc tự nhiên.
**NÊN LÀM (DO)**: Đối với các hiệu ứng thay đổi chiều cao (height animations), hãy sử dụng chuyển tiếp `grid-template-rows` thay vì thay đổi trực tiếp thuộc tính `height`.
**KHÔNG NÊN (DON'T)**: Animate các thuộc tính bố cục (width, height, padding, margin)—chỉ sử dụng `transform` và `opacity`.
**KHÔNG NÊN (DON'T)**: Sử dụng chuyển động nảy (bounce) hoặc đàn hồi (elastic easing)—chúng cảm thấy lỗi thời và rẻ tiền; các vật thể thực tế luôn giảm tốc một cách mượt mà.

### Tương tác (Interaction)
→ *Tham khảo [interaction reference](reference/interaction-design.md) để biết về các mẫu thiết kế biểu mẫu (forms), tiêu điểm (focus) và tải dữ liệu (loading).*

Làm cho các tương tác có cảm giác nhanh chóng. Sử dụng giao diện người dùng lạc quan (optimistic UI)—cập nhật ngay lập tức, đồng bộ sau.

**NÊN LÀM (DO)**: Sử dụng tiết lộ lũy tiến (progressive disclosure)—bắt đầu đơn giản, tiết lộ sự tinh vi thông qua tương tác (các tùy chọn cơ bản trước, các tùy chọn nâng cao nằm trong các phần có thể mở rộng; các trạng thái hover tiết lộ các hành động phụ).
**NÊN LÀM (DO)**: Thiết kế các trạng thái trống (empty states) để hướng dẫn sử dụng giao diện, chứ không chỉ nói "không có gì ở đây".
**NÊN LÀM (DO)**: Làm cho mọi bề mặt tương tác đều có cảm giác có chủ ý và nhạy bén.
**KHÔNG NÊN (DON'T)**: Lặp lại cùng một thông tin—các tiêu đề lặp lại, các phần giới thiệu nói lại nội dung tiêu đề.
**KHÔNG NÊN (DON'T)**: Biến mọi nút thành nút chính (primary)—hãy sử dụng nút ghost, liên kết văn bản, các phong cách phụ (secondary); hệ thống phân cấp rất quan trọng.

### Đáp ứng (Responsive)
→ *Tham khảo [responsive reference](reference/responsive-design.md) để biết về mobile-first, thiết kế linh hoạt (fluid design) và container queries.*

**NÊN LÀM (DO)**: Sử dụng container queries (`@container`) để đảm bảo khả năng đáp ứng ở cấp độ component.
**NÊN LÀM (DO)**: Điều chỉnh giao diện cho các ngữ cảnh khác nhau—đừng chỉ thu nhỏ nó lại.
**KHÔNG NÊN (DON'T)**: Ẩn các chức năng quan trọng trên di động—hãy điều chỉnh giao diện, đừng "cắt bỏ" các tính năng.

### Viết nội dung UX (UX Writing)
→ *Tham khảo [ux-writing reference](reference/ux-writing.md) để biết về nhãn (labels), lỗi (errors) và trạng thái trống (empty states).*

**NÊN LÀM (DO)**: Hãy chắc chắn rằng mọi từ ngữ đều xứng đáng có vị trí của nó.
**KHÔNG NÊN (DON'T)**: Lặp lại thông tin mà người dùng đã có thể nhìn thấy.

---

## Kiểm tra Thẩm mỹ AI (The AI Slop Test)

**Kiểm tra chất lượng quan trọng**: Nếu bạn cho ai đó xem giao diện này và nói "AI đã làm ra cái này," liệu họ có tin bạn ngay lập tức không? Nếu có, đó chính là vấn đề.

Một giao diện đặc biệt nên khiến ai đó hỏi "làm thế nào mà cái này được tạo ra?" chứ không phải "AI nào đã tạo ra cái này?"

Hãy xem xét lại các hướng dẫn KHÔNG NÊN (DON'T) ở trên—chúng là những "dấu vân tay" của các tác phẩm do AI tạo ra từ giai đoạn 2024-2025.

---

## Nguyên tắc Triển khai (Implementation Principles)

Hãy kết hợp sự phức tạp của việc triển khai với tầm nhìn thẩm mỹ. Các thiết kế theo chủ nghĩa tối đa (Maximalist) cần mã nguồn công phu với các animation và hiệu ứng mở rộng. Các thiết kế tối giản (Minimalist) hoặc tinh tế cần sự kiềm chế, độ chính xác và sự chú ý cẩn thận đến khoảng cách, kiểu chữ và các chi tiết tinh tế.

Hãy diễn giải một cách sáng tạo và đưa ra các lựa chọn bất ngờ mang lại cảm giác thực sự được thiết kế riêng cho ngữ cảnh. Không có thiết kế nào nên giống hệt nhau. Hãy thay đổi giữa các chủ đề sáng và tối, các font chữ khác nhau, thẩm mỹ khác nhau. ĐỪNG BAO GIỜ hội tụ vào các lựa chọn chung giữa các thế hệ.

Hãy nhớ rằng: mô hình có khả năng thực hiện những công việc sáng tạo phi thường. Đừng kìm nén—hãy cho thấy những gì thực sự có thể được tạo ra khi suy nghĩ khác biệt và cam kết trọn vẹn với một tầm nhìn độc đáo.