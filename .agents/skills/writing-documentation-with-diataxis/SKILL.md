---
name: writing-documentation-with-diataxis
description: Áp dụng khung Diataxis để tạo hoặc cải thiện tài liệu kỹ thuật. Sử dụng khi được yêu cầu viết các Tutorials, How-to guides, Reference docs hoặc Explanations chất lượng cao, khi đánh giá chất lượng tài liệu, hoặc khi quyết định loại tài liệu nào cần tạo. Giúp xác định các loại tài liệu bằng cách sử dụng các khía cạnh Action/Cognition (Hành động/Nhận thức) và Acquisition/Application (Tiếp thu/Ứng dụng).
---

# Viết Tài liệu với Diataxis

Bạn giúp người dùng tạo và cải thiện tài liệu kỹ thuật bằng cách sử dụng khung Diataxis, khung này xác định bốn loại tài liệu riêng biệt dựa trên nhu cầu của người dùng.

## Diataxis là gì

Diataxis là một khung để tạo ra tài liệu **mang lại trải nghiệm tốt khi sử dụng** - tài liệu có tính liền mạch (flow), dự đoán được nhu cầu và phù hợp với cách con người thực sự tương tác với một kỹ năng.

**Quan trọng**: Diataxis là một phương pháp tiếp cận, không phải là một template. Đừng tạo các mục trống cho Tutorials/How-to/Reference/Explanation chỉ để cho có. Hãy tạo nội dung phục vụ nhu cầu thực tế của người dùng, áp dụng các nguyên tắc này và để cấu trúc hình thành một cách tự nhiên.

**Thông tin cốt lõi**: Tài liệu phục vụ những người thực hành trong một lĩnh vực kỹ năng. Những gì họ cần thay đổi dựa trên hai khía cạnh:
1. **Action vs Cognition** (Hành động vs Nhận thức) - làm việc vs hiểu vấn đề
2. **Acquisition vs Application** (Tiếp thu vs Ứng dụng) - học tập vs làm việc

Những điều này tạo ra đúng bốn loại tài liệu:
- **Học bằng cách thực hành** → Tutorials
- **Làm việc để đạt được mục tiêu** → How-to Guides
- **Làm việc và cần các sự thật/dữ liệu** → Reference
- **Học để hiểu** → Explanation

**Tại sao lại là bốn**: Đây không phải là các danh mục tùy tiện. Hai khía cạnh tạo ra đúng bốn phần - không thể là ba hay năm. Đây là toàn bộ phạm vi mà tài liệu phải bao phủ.

## La bàn Diataxis (Công cụ chính của bạn)

Khi không chắc chắn loại tài liệu nào là cần thiết, hãy đặt hai câu hỏi:

**1. Nội dung cung cấp thông tin cho ACTION hay COGNITION?**
- Action: các bước thực hành, thực hiện công việc
- Cognition: kiến thức lý thuyết, sự thấu hiểu

**2. Nó phục vụ việc ACQUISITION hay APPLICATION kỹ năng?**
- Acquisition: học tập, nghiên cứu
- Application: làm việc, hoàn thành công việc

Sau đó áp dụng:

| Loại nội dung | Hoạt động của người dùng | Loại tài liệu |
|--------------|-------------------------|---------------|
| Action       | Acquisition             | **Tutorial**  |
| Action       | Application             | **How-to Guide** |
| Cognition    | Application             | **Reference** |
| Cognition    | Acquisition             | **Explanation** |

## Khi tạo tài liệu mới

### 1. Xác định nhu cầu của người dùng

Tự hỏi bản thân:
- Người dùng là ai? (người học hay người thực hành)
- Họ cần gì? (làm điều gì đó hay hiểu điều gì đó)
- Họ đang ở đâu? (đang học hay đang làm việc)

### 2. Sử dụng La bàn

Áp dụng hai câu hỏi trên để xác định loại tài liệu nào phục vụ nhu cầu này.

### 3. Áp dụng các nguyên tắc cốt lõi

**Đối với Tutorials** (học bằng cách thực hành):
- Bạn chịu trách nhiệm về thành công của người học - mọi bước phải hoạt động chính xác
- Tập trung vào việc thực hành, không phải giải thích
- Hiển thị kết quả họ sẽ đạt được ngay từ đầu
- Mang lại kết quả rõ ràng sớm và thường xuyên
- Duy trì mạch dẫn dắt sự kỳ vọng ("Bạn sẽ thấy...", "Lưu ý rằng...")
- Cụ thể và chi tiết - chỉ một lộ trình duy nhất, không có phương án thay thế
- Loại bỏ những điều bất ngờ - có thể lặp lại một cách hoàn hảo
- Khuyến khích sự lặp lại để xây dựng "cảm giác thực hành"
- Hướng tới sự tin cậy hoàn hảo

**Đối với How-to Guides** (làm việc để đạt mục tiêu):
- Giải quyết các vấn đề thực tế, không phải khả năng của công cụ
- Giả định người dùng đã có năng lực - họ biết mình muốn gì
- Cung cấp trình tự logic phù hợp với tư duy con người
- Giải quyết sự phức tạp của thế giới thực bằng các câu lệnh điều kiện ("Nếu X, hãy làm Y")
- **Tìm kiếm sự liền mạch (flow)** - dự đoán bước đi tiếp theo của họ, giảm thiểu việc chuyển đổi ngữ cảnh (context switching)
- Loại bỏ các chi tiết không cần thiết - tính hữu dụng thực tế quan trọng hơn sự đầy đủ
- Tập trung vào nhiệm vụ (tasks), không phải công cụ (tools)
- Đặt tên hướng dẫn rõ ràng: "Cách để [hoàn thành X]"

**Đối với Reference** (sự thật khi đang làm việc):
- Mô tả, không hướng dẫn - chỉ cung cấp các sự thật trung lập
- Cấu trúc phản ánh kiến trúc của sản phẩm
- Sử dụng các mẫu (patterns) tiêu chuẩn và nhất quán xuyên suốt
- Ngắn gọn và có thẩm quyền - không gây mơ hồ
- Tách biệt phần mô tả khỏi phần hướng dẫn
- Cung cấp các ví dụ sử dụng ngắn gọn
- Sự đầy đủ rất quan trọng ở đây (khác với how-to guides)

**Đối với Explanation** (hiểu các khái niệm):
- Thảo luận về chủ đề từ nhiều góc độ
- Trả lời câu hỏi "tại sao" - các quyết định thiết kế, lịch sử, các ràng buộc
- Tạo mối liên kết với các khái niệm liên quan
- Cung cấp ngữ cảnh và bức tranh toàn cảnh
- Cho phép đưa ra ý kiến và quan điểm - thảo luận về các sự đánh đổi (trade-offs)
- Giữ ranh giới rõ ràng - không hướng dẫn hoặc thuần túy là tham khảo
- Đưa ra góc nhìn cao hơn và rộng hơn

### 4. Sử dụng ngôn ngữ phù hợp

**Tutorials**: "Chúng ta sẽ tạo..." "Đầu tiên, làm X. Bây giờ, làm Y." "Lưu ý rằng..." "Bạn đã xây dựng thành công..."

**How-to Guides**: "Hướng dẫn này chỉ cho bạn cách..." "Nếu bạn muốn X, hãy làm Y" "Để đạt được W, hãy làm Z"

**Reference**: "X có sẵn dưới dạng Y" "Các lệnh phụ (Sub-commands) là: A, B, C" "Bạn phải sử dụng X. Tuyệt đối không dùng Y."

**Explanation**: "Lý do cho X là..." "W tốt hơn Z bởi vì..." "Một số người thích W hơn. Điều này có thể hiệu quả, nhưng..."

### 5. Kiểm tra ranh giới

Xem lại nội dung của bạn:
- Có phần nào phục vụ nhu cầu khác của người dùng không?
- Có phần giải thích (explanation) trong tutorial của bạn không? (Hãy trích xuất và liên kết đến nó)
- Bạn có đang hướng dẫn trong phần reference không? (Hãy chuyển nó sang how-to guide)
- Có chi tiết tham khảo (reference) trong phần how-to không? (Hãy liên kết đến reference thay thế)

Nếu nội dung phục vụ nhiều nhu cầu, hãy chia nhỏ và liên kết giữa các tài liệu.

## Khi đánh giá tài liệu hiện có

Sử dụng quy trình làm việc lặp đi lặp lại này:

**1. Chọn một phần** - Bất kỳ trang, mục hoặc đoạn văn nào

**2. Thử thách nó** với các câu hỏi sau:
- Phần này phục vụ nhu cầu nào của người dùng?
- Nó nên thuộc loại tài liệu nào?
- Nó có phục vụ tốt nhu cầu đó không?
- Ngôn ngữ có phù hợp với loại này không?
- Có nội dung nào thuộc về một loại khác không?

**3. Sử dụng la bàn** nếu loại tài liệu không rõ ràng

**4. Xác định một điểm cải thiện** có thể giúp ích ngay bây giờ

**5. Thực hiện cải thiện đó** theo các nguyên tắc Diataxis

**6. Lặp lại** với một phần khác

Đừng cố gắng tái cấu trúc mọi thứ cùng một lúc. Cấu trúc sẽ hình thành từ việc cải thiện từng phần riêng lẻ.

## Các nguyên tắc chính

**Tính liền mạch (flow) là tối quan trọng**: Tài liệu nên di chuyển mượt mà cùng người dùng, dự đoán nhu cầu tiếp theo của họ. Đặc biệt đối với how-to guides, hãy nghĩ: Người dùng phải ghi nhớ điều gì trong đầu? Khi nào họ có thể giải tỏa những suy nghĩ đó? Họ sẽ tìm kiếm điều gì tiếp theo?

**Ranh giới mang tính bảo vệ**: Giữ các loại tài liệu riêng biệt. Sai lầm phổ biến nhất là trộn lẫn tutorials (học tập) với how-to guides (làm việc).

**Cấu trúc đi theo nội dung**: Đừng tạo các mục trống. Hãy viết nội dung phục vụ nhu cầu thực tế, áp dụng các nguyên tắc Diataxis và để cấu trúc hình thành một cách tự nhiên.

**Một nhu cầu tại một thời điểm**: Mỗi phần tài liệu phục vụ một nhu cầu duy nhất của người dùng. Nếu người dùng cần nhiều thứ, hãy tạo nhiều phần và liên kết giữa chúng.

**Tài liệu tốt mang lại cảm giác tốt**: Ngoài tính chính xác, tài liệu nên dự đoán nhu cầu, có tính liền mạch và phù hợp với cách con người làm việc.

## Các lỗi thường gặp cần tránh

1. **Nhầm lẫn giữa Tutorial/How-to** - Tutorials dành cho việc học (nghiên cứu), how-to guides dành cho việc làm. Dấu hiệu bạn đã trộn lẫn chúng:
   - "Tutorial" của bạn giả định người dùng biết họ muốn làm gì
   - "Tutorial" của bạn đưa ra nhiều cách tiếp cận
   - "How-to guide" của bạn cố gắng dạy các khái niệm cơ bản
   - "Tutorial" của bạn giải quyết sự phức tạp thực tế

2. **Giải thích quá nhiều trong tutorials** - Hãy tin rằng việc học diễn ra thông qua thực hành. Chỉ đưa ra giải thích tối thiểu và liên kết đến phần giải thích chi tiết ở nơi khác.

3. **How-to guides mang tính giảng dạy** - Hãy giả định người dùng đã có năng lực. Đừng giải thích những điều cơ bản.

4. **Reference mang tính hướng dẫn** - Reference là mô tả, nó không bảo bạn phải làm gì.

5. **Explanation trong các tài liệu thiên về hành động (action-oriented)** - Hãy chuyển nó sang tài liệu giải thích và liên kết đến nó.

## Bảng tra cứu nhanh

| Khía cạnh | Tutorials | How-to Guides | Reference | Explanation |
|-----------|-----------|---------------|-----------|-------------|
| **Trả lời cho** | "Bạn có thể dạy tôi không?" | "Tôi làm cách nào để...?" | "Cái này là gì...?" | "Tại sao...?" |
| **Người dùng đang** | Học bằng cách thực hành | Làm việc với nhiệm vụ | Làm việc, cần sự thật | Nghiên cứu để hiểu |
| **Nội dung** | Các bước hành động | Các bước hành động | Thông tin | Thông tin |
| **Hình thức** | Một bài học | Các chỉ dẫn | Mô tả | Thảo luận |
| **Trách nhiệm** | Thuộc về người dạy | Thuộc về người dùng | Trung lập | Chia sẻ |
| **Giọng văn** | Hỗ trợ, dẫn dắt | Trực tiếp, có điều kiện | Ngắn gọn, thực tế | Lan man, theo ngữ cảnh |

## Các file hỗ trợ

Để biết thêm hướng dẫn chi tiết, hãy tham khảo:
- **principles.md** - Các nguyên tắc toàn diện cho từng loại tài liệu kèm theo ví dụ
- **reference.md** - Khung chất lượng, các tình huống phức tạp và hướng dẫn bổ sung

## Yêu cầu đầu ra

Khi áp dụng Diataxis:
- Trực tiếp và thực tế
- Tập trung vào phục vụ nhu cầu người dùng
- Sử dụng la bàn để giải quyết sự không chắc chắn
- Trích dẫn loại tài liệu bạn đang áp dụng và lý do
- Nếu đánh giá tài liệu, hãy cụ thể về loại tài liệu đó nên là gì và cách cải thiện nó
- Sử dụng chính tả Tiếng Anh Anh (British English) xuyên suốt (trong các phần tiếng Anh)

