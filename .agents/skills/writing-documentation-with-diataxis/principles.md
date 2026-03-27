# Các nguyên tắc của Diataxis

Tài liệu này cung cấp các hướng dẫn và nguyên tắc chi tiết cho từng loại trong bốn loại tài liệu Diataxis.

## 1. Tutorials (Hướng dẫn học tập)

**Mục đích**: Giúp người học có được những trải nghiệm đầu tiên với sản phẩm và xây dựng năng lực cơ bản thông qua thực hành.

### Các nguyên tắc cốt lõi

- **Học bằng cách thực hành**: Người học tiếp thu thông tin hiệu quả nhất khi họ đang chủ động thực hiện một việc gì đó.
- **Bắt đầu ngay lập tức**: Giảm thiểu thời gian chuẩn bị. Đưa người học vào hành động nhanh nhất có thể.
- **Kết quả rõ ràng**: Đảm bảo mỗi bước đều dẫn đến một kết quả có thể quan sát được.
- **Độ tin cậy tuyệt đối**: Một tutorial thất bại là một thảm họa cho người học. Bạn chịu trách nhiệm cho thành công của họ.
- **Chỉ một lộ trình**: Đừng đưa ra các sự lựa chọn. Hãy chọn một con đường tiêu chuẩn, đáng tin cậy nhất và bám sát nó.
- **Cụ thể, không trừu tượng**: Sử dụng các giá trị, tên và ví dụ thực tế. Đừng nói "tạo một file", hãy nói "tạo file `index.js`".
- **Duy trì mạch dẫn dắt**: Sử dụng ngôn ngữ hỗ trợ người dùng dự đoán những gì sắp xảy ra ("Bạn sẽ thấy...", "Bây giờ, hãy lưu ý rằng...").

### Cấu trúc của một Tutorial

1. **Giới thiệu**: Cho biết người học sẽ xây dựng cái gì và họ cần những gì để bắt đầu.
2. **Thiết lập**: Các bước tối thiểu để có được môi trường hoạt động.
3. **Các bước hành động**: Một chuỗi các nhiệm vụ ngắn, liên tiếp.
4. **Kiểm tra**: Các điểm dừng để xác nhận mọi thứ đang hoạt động đúng ("Nếu bạn thấy X, nghĩa là bạn đã làm đúng").
5. **Kết luận**: Tóm tắt những gì đã đạt được và gợi ý các bước tiếp theo.

### Ngôn ngữ sử dụng

- "Chúng ta sẽ xây dựng một ứng dụng to-do đơn giản."
- "Chạy lệnh sau trong terminal của bạn:"
- "Bạn sẽ thấy thông báo 'Hello World' hiện ra."
- "Bây giờ, hãy thử thay đổi màu sắc thành màu đỏ."

---

## 2. How-to Guides (Hướng dẫn thực hiện nhiệm vụ)

**Mục đích**: Giúp người thực hành (những người đã biết cơ bản) giải quyết một vấn đề cụ thể hoặc đạt được một mục tiêu thực tế.

### Các nguyên tắc cốt lõi

- **Giải quyết vấn đề thực tế**: Tập trung vào những gì người dùng thực sự muốn làm (ví dụ: "Cách triển khai lên AWS", không phải "Các lệnh triển khai").
- **Giả định năng lực**: Đừng giải thích các khái niệm cơ bản. Người dùng đã biết họ đang làm gì, họ chỉ cần các bước để thực hiện.
- **Tính liền mạch (Flow)**: Dự đoán bước tiếp theo. Giảm thiểu việc người dùng phải dừng lại để tra cứu thứ khác.
- **Có điều kiện và linh hoạt**: Khác với tutorial, how-to guide có thể có các nhánh ("Nếu bạn dùng Docker, hãy làm X; nếu không, hãy làm Y").
- **Tập trung vào nhiệm vụ (Task-oriented)**: Mỗi hướng dẫn nên tập trung vào một nhiệm vụ cụ thể duy nhất.
- **Đầu tên bằng từ chỉ hành động**: "Cách để...", "Tạo...", "Cấu hình...".

### Cấu trúc của một How-to Guide

1. **Tiêu đề**: Phải là một mục tiêu rõ ràng.
2. **Ngữ cảnh tối thiểu**: Giải thích ngắn gọn hướng dẫn này giải quyết vấn đề gì.
3. **Các bước thực hiện**: Danh sách các hành động có đánh số.
4. **Kết quả**: Cho biết nhiệm vụ đã được hoàn thành thành công.

### Ngôn ngữ sử dụng

- "Hướng dẫn này chỉ cho bạn cách cấu hình xác thực OAuth2."
- "Để bật chế độ debug, hãy thêm dòng sau vào file config của bạn."
- "Nếu bạn đang chạy trên Windows, hãy sử dụng đường dẫn sau thay thế."

---

## 3. Reference (Tài liệu tham khảo)

**Mục đích**: Cung cấp các thông tin kỹ thuật chính xác, trung lập mà người dùng cần tra cứu khi đang làm việc.

### Các nguyên tắc cốt lõi

- **Mô tả, không hướng dẫn**: Reference cho biết "nó là cái gì" và "nó hoạt động như thế nào", không bảo người dùng "phải làm gì".
- **Cấu trúc phản ánh sản phẩm**: Nếu code của bạn có 5 module, tài liệu tham khảo nên có 5 phần tương ứng.
- **Nhất quán là trên hết**: Sử dụng cùng một cấu trúc cho mọi trang tham khảo (ví dụ: Tên, Mô tả, Tham số, Ví dụ, Giá trị trả về).
- **Ngôn ngữ trung lập**: Tránh các từ ngữ cảm xúc hoặc hỗ trợ. Chỉ đưa ra sự thật.
- **Đầy đủ**: Đây là nơi duy nhất sự đầy đủ quan trọng hơn tính dễ đọc.
- **Chính xác tuyệt đối**: Reference phải luôn đồng bộ với phiên bản hiện tại của sản phẩm.

### Cấu trúc của một trang Reference

1. **Tên thực thể**: Tên hàm, lệnh, hoặc thuộc tính.
2. **Tóm tắt**: Một câu mô tả chức năng chính.
3. **Cú pháp/Sử dụng**: Cách viết hoặc gọi thực thể đó.
4. **Tham số/Thuộc tính**: Danh sách chi tiết các đầu vào, kiểu dữ liệu và ý nghĩa.
5. **Ví dụ**: Các đoạn mã ngắn, độc lập minh họa cách dùng.

### Ngôn ngữ sử dụng

- "`timeout`: Kiểu `number`. Thời gian chờ tính bằng mili giây. Mặc định là 5000."
- "Hàm này trả về một `Promise` chứa dữ liệu người dùng."
- "Lưu ý: Thuộc tính này chỉ có hiệu lực trong môi trường production."

---

## 4. Explanation (Tài liệu giải thích)

**Mục đích**: Cung cấp sự hiểu biết sâu sắc về các khái niệm, thiết kế và bức tranh toàn cảnh của sản phẩm.

### Các nguyên tắc cốt lõi

- **Mở rộng kiến thức**: Trả lời câu hỏi "Tại sao?". Giải thích các quyết định thiết kế, các sự đánh đổi (trade-offs).
- **Bối cảnh và Lịch sử**: Đưa sản phẩm vào một bức tranh lớn hơn. Nó liên quan thế nào đến các công nghệ khác?
- **Nghiên cứu từ nhiều góc độ**: Thay vì chỉ mô tả một tính năng, hãy giải thích nó giải quyết vấn đề gì và tại sao phương pháp này được chọn.
- **Cho phép đưa ra quan điểm**: Đây là nơi bạn có thể thảo luận về các cách tiếp cận khác nhau và đưa ra lời khuyên dựa trên kinh nghiệm.
- **Tính kết nối**: Tạo mối liên hệ giữa các phần khác nhau của hệ thống.
- **Đọc được "trong bồn tắm"**: Đây là loại tài liệu mà người dùng có thể đọc khi không ngồi trước máy tính để hiểu sâu hơn về hệ thống.

### Cấu trúc của một bài Explanation

1. **Chủ đề**: Khái niệm hoặc thành phần hệ thống cần giải thích.
2. **Đặt vấn đề**: Giải thích lý do tại sao khái niệm này tồn tại.
3. **Thảo luận**: Phần nội dung chính với các lập luận, biểu đồ và so sánh.
4. **Các sự đánh đổi**: Phân tích ưu và nhược điểm.
5. **Kết luận**: Tóm tắt triết lý hoặc hướng đi tương lai.

### Ngôn ngữ sử dụng

- "Kiến trúc microservices được chọn để cho phép các team làm việc độc lập."
- "Trong khi REST phổ biến hơn, chúng tôi sử dụng GraphQL vì khả năng truy vấn linh hoạt của nó."
- "Có một sự đánh đổi giữa hiệu suất và tính nhất quán dữ liệu ở đây."

---

## Bảng tổng kết ranh giới

| Nếu bạn đang làm... | Đừng đưa vào... | Thay vào đó hãy... |
|---------------------|-----------------|--------------------|
| **Tutorial**        | Giải thích lý thuyết dài dòng | Liên kết sang phần **Explanation**. |
| **How-to Guide**    | Các bước cài đặt cơ bản | Giả định người dùng đã làm xong **Tutorial**. |
| **Reference**       | Hướng dẫn từng bước cách làm | Di chuyển chúng sang **How-to Guide**. |
| **Explanation**     | Danh sách các tham số API | Để người dùng tra cứu ở **Reference**. |
