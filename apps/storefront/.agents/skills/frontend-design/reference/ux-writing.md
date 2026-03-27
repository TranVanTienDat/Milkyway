# Viết cho Trải nghiệm Người dùng (UX Writing)

## Vấn đề về Nhãn của Nút (The Button Label Problem)

**Tuyệt đối không sử dụng "OK", "Gửi (Submit)", hoặc "Có/Không".** Những từ này rất lười biếng và mơ hồ. Hãy sử dụng mẫu câu cụ thể theo cấu trúc Động từ + Đối tượng:

| Tồi | Tốt | Tại sao |
|-----|------|-----|
| OK | Lưu thay đổi | Nói rõ điều gì sẽ xảy ra |
| Gửi | Tạo tài khoản | Tập trung vào kết quả |
| Có | Xóa tin nhắn | Xác nhận hành động |
| Hủy | Tiếp tục chỉnh sửa | Làm rõ nghĩa của việc "hủy" |
| Bấm vào đây | Tải xuống tài liệu PDF | Mô tả đích đến |

**Đối với các hành động phá hủy**, hãy gọi tên sự phá hủy đó:
- Sử dụng "Xóa (Delete)" thay vì "Gỡ bỏ (Remove)" (xóa là vĩnh viễn, gỡ bỏ ngụ ý có thể khôi phục).
- "Xóa 5 mục" thay vì "Xóa các mục đã chọn" (hãy hiển thị số lượng cụ thể).

## Thông báo Lỗi: Công thức

Mọi thông báo lỗi nên trả lời được: (1) Chuyện gì đã xảy ra? (2) Tại sao? (3) Làm thế nào để khắc phục? Ví dụ: "Địa chỉ email không hợp lệ. Vui lòng bao gồm ký hiệu @." chứ không phải "Dữ liệu nhập không hợp lệ".

### Các mẫu Thông báo Lỗi

| Tình huống | Mẫu câu |
|-----------|----------|
| **Lỗi định dạng** | "[Trường này] cần có định dạng [định dạng]. Ví dụ: [ví dụ]" |
| **Thiếu thông tin bắt buộc** | "Vui lòng nhập [thông tin còn thiếu]" |
| **Bị từ chối quyền truy cập** | "Bạn không có quyền truy cập vào [thứ này]. [Việc cần làm thay thế]" |
| **Lỗi mạng** | "Chúng tôi không thể kết nối tới [thứ này]. Hãy kiểm tra kết nối và [hành động]." |
| **Lỗi máy chủ** | "Đã có lỗi xảy ra từ phía chúng tôi. Chúng tôi đang kiểm tra. [Hành động thay thế]" |

### Đừng đổ lỗi cho Người dùng

Hãy thay đổi cách diễn đạt các lỗi: "Vui lòng nhập ngày theo định dạng MM/DD/YYYY" thay vì "Bạn đã nhập ngày không hợp lệ".

## Trạng thái Trống (Empty States) là Cơ hội

Trạng thái trống là những khoảnh khắc để hướng dẫn (onboarding): (1) Thừa nhận ngắn gọn, (2) Giải thích giá trị của việc điền đầy nó, (3) Cung cấp một hành động rõ ràng. "Chưa có dự án nào. Hãy tạo dự án đầu tiên của bạn để bắt đầu." chứ không chỉ nói "Không có mục nào".

## Giọng văn (Voice) và Sắc thái (Tone)

**Giọng văn (Voice)** là cá tính thương hiệu của bạn—nhất quán ở mọi nơi.
**Sắc thái (Tone)** thay đổi linh hoạt theo từng thời điểm.

| Thời điểm | Thay đổi Sắc thái |
|--------|------------|
| Thành công | Chúc mừng, ngắn gọn: "Xong! Các thay đổi của bạn đã được cập nhật." |
| Lỗi | Đồng cảm, giúp đỡ: "Đã có lỗi xảy ra. Hãy thử cách này..." |
| Đang tải | Trấn an: "Đang lưu công việc của bạn..." |
| Xác nhận phá hủy | Nghiêm túc, rõ ràng: "Xóa dự án này? Hành động này không thể hoàn tác." |

**Tuyệt đối không hài hước khi thông báo lỗi.** Người dùng lúc đó đã đang bực bội rồi. Hãy tỏ ra hữu ích, đừng tỏ ra lém lỉnh.

## Viết cho Khả năng truy cập (Accessibility)

**Văn bản liên kết (Link text)** phải có ý nghĩa khi đứng độc lập—"Xem các gói giá" chứ không phải "Bấm vào đây". **Văn bản thay thế (Alt text)** mô tả thông tin, không phải mô tả hình ảnh—"Doanh thu tăng 40% trong quý 4" chứ không phải "Biểu đồ". Sử dụng `alt=""` cho các hình ảnh chỉ mang tính trang trí. **Các nút icon** cần có `aria-label` để trình đọc màn hình hiểu được ngữ cảnh.

## Viết để phục vụ Dịch thuật

### Dự phòng cho việc Mở rộng

Văn bản tiếng Đức dài hơn tiếng Anh khoảng 30%. Hãy dành khoảng trống:

| Ngôn ngữ | Độ giãn nở |
|----------|-----------|
| Tiếng Đức | +30% |
| Tiếng Pháp | +20% |
| Tiếng Phần Lan | +30-40% |
| Tiếng Trung | -30% (ít ký tự hơn nhưng chiều rộng tương đương) |

### Các mẫu câu Thân thiện với Dịch thuật

Giữ các con số riêng biệt ("Tin nhắn mới: 3" chứ không phải "Bạn có 3 tin nhắn mới"). Sử dụng các câu đầy đủ như một chuỗi văn bản duy nhất (thứ tự từ thay đổi theo ngôn ngữ). Tránh các cụm từ viết tắt ("5 phút trước" chứ không phải "5 ph trước"). Cung cấp ngữ cảnh cho người dịch về nơi chuỗi văn bản sẽ xuất hiện.

## Sự nhất quán: Vấn đề về Thuật ngữ

Hãy chọn một thuật ngữ và trung thành với nó:

| Không nhất quán | Nhất quán |
|--------------|------------|
| Xóa / Gỡ bỏ / Thùng rác | Xóa |
| Cài đặt / Tùy chọn / Ưu tiên | Cài đặt |
| Đăng nhập / Truy cập / Vào | Đăng nhập |
| Tạo / Thêm / Mới | Tạo |

Xây dựng một bảng thuật ngữ và tuân thủ nó. Sự đa dạng các từ đồng nghĩa chỉ gây ra sự nhầm lẫn.

## Tránh các Văn bản Thừa thãi

Nếu tiêu đề đã giải thích rồi, đoạn giới thiệu là thừa. Nếu nút bấm đã rõ ràng, đừng giải thích lại nó một lần nữa. Chỉ nói một lần, và nói thật tốt.

## Trạng thái Đang tải (Loading States)

Hãy cụ thể: "Đang lưu bản nháp của bạn..." thay vì "Đang tải...". Đối với những việc chờ đợi lâu, hãy thiết lập kỳ vọng ("Việc này thường mất khoảng 30 giây") hoặc hiển thị tiến trình.

## Hộp thoại Xác nhận: Hãy sử dụng Tiết kiệm

Hầu hết các hộp thoại xác nhận là một sự thất bại trong thiết kế—hãy cân nhắc tính năng hoàn tác (undo) để thay thế. Khi bạn buộc phải bắt xác nhận: hãy gọi tên hành động, giải thích hậu quả, và sử dụng các nút có nhãn cụ thể ("Xóa dự án" / "Giữ lại dự án", không dùng "Có" / "Không").

## Hướng dẫn Biểu mẫu (Form Instructions)

Hiển thị định dạng bằng placeholder, không dùng dòng hướng dẫn. Đối với các trường không hiển nhiên, hãy giải thích tại sao bạn lại yêu cầu thông tin đó.

---

**Tránh**: Sử dụng thuật ngữ chuyên môn mà không giải thích. Đổ lỗi cho người dùng ("Bạn đã làm sai" -> "Trường này là bắt buộc"). Các lỗi mơ hồ ("Đã có gì đó không ổn"). Thay đổi thuật ngữ chỉ để cho đa dạng. Sử dụng sự hài hước cho các lỗi.
