# Hướng dẫn bổ sung và Tài liệu tham khảo

File này chứa khung chất lượng, hướng dẫn cho các tình huống phức tạp, các giới hạn và các tài liệu tham khảo khác để áp dụng Diataxis.

## Hiểu về Chất lượng trong Tài liệu

Tài liệu có hai loại chất lượng riêng biệt:

### Chất lượng Chức năng (Functional Quality - Khách quan, có thể đo lường)

Các đặc điểm này độc lập với nhau:

- **Tính chính xác (Accuracy)**: Tài liệu khớp với thực tế.
- **Tính đầy đủ (Completeness)**: Bao phủ tất cả những gì cần thiết.
- **Tính nhất quán (Consistency)**: Không có mâu thuẫn.
- **Tính chuẩn xác (Precision)**: Rõ ràng và không gây mơ hồ.
- **Tính hữu dụng (Usefulness)**: Phục vụ nhu cầu thực tế.

Tài liệu có thể chính xác nhưng không đầy đủ, hoặc đầy đủ nhưng không nhất quán. Mỗi điều là một ràng buộc mà bạn phải đáp ứng thông qua sự siêng năng và kiến thức chuyên môn.

**Diataxis không thể mang lại cho bạn chất lượng chức năng**. Nó đòi hỏi kỹ năng kỹ thuật và việc giữ cho tài liệu luôn đồng bộ với sản phẩm.

Tuy nhiên, Diataxis có thể **phơi bày** những thiếu sót về chất lượng chức năng:
- Cấu trúc reference để phản chiếu mã nguồn giúp các lỗ hổng trở nên rõ ràng.
- Chuyển phần giải thích ra khỏi tutorials làm nổi bật các bước không rõ ràng.
- Tách biệt các mối quan tâm giúp tiết lộ sự không nhất quán.

### Chất lượng Chiều sâu (Deep Quality - Chủ quan, mang tính cảm nhận)

Các đặc điểm này phụ thuộc lẫn nhau - là các khía cạnh của cùng một thực thể:

- Cảm giác sử dụng tốt.
- Có tính liền mạch (flow).
- Phù hợp với nhu cầu con người.
- Dự đoán được người dùng.
- Mang lại cảm giác đẹp đẽ (vâng, điều này rất quan trọng).

Bạn không thể đo lường những điều này bằng con số, chỉ có thể nhận ra chúng qua quá trình sử dụng. Giống như một bộ quần áo vừa vặn với cơ thể, tài liệu tốt mang lại cảm giác "đúng" khi bạn sử dụng nó.

Chất lượng chiều sâu **phụ thuộc vào chất lượng chức năng**. Không ai cảm thấy tài liệu đẹp nếu nó không chính xác hoặc không nhất quán. Những thiếu sót về chất lượng chức năng sẽ làm mờ nhạt trải nghiệm ngay lập tức.

**Diataxis giải quyết chất lượng chiều sâu**. Nó tạo ra các điều kiện để tính liền mạch, dự đoán và "phù hợp với nhu cầu của tôi" trở nên khả thi. Nó sẽ không làm cho tài liệu của bạn chính xác (đó là việc của bạn), nhưng nó có thể làm cho tài liệu chính xác mang lại cảm giác đúng đắn khi sử dụng.

### Mối quan hệ giữa chúng

Hãy nghĩ theo cách này:
- **Chất lượng chức năng** = Các ràng buộc bạn phải tuân thủ.
- **Chất lượng chiều sâu** = Sự giải phóng, sáng tạo và gu thẩm mỹ.

Chất lượng chức năng là một gánh nặng - những bài kiểm tra mà bạn có thể thất bại. Chất lượng chiều sâu là niềm vui khi tạo ra thứ gì đó hoạt động tốt.

Diataxis giúp theo đuổi chất lượng chiều sâu, điều này làm cho những thiếu sót về chất lượng chức năng trở nên dễ thấy hơn, từ đó giúp bạn cải thiện chất lượng chức năng, và sau đó cho phép chất lượng chiều sâu tỏa sáng.

## Xử lý các tình huống phức tạp

### Diataxis là một phương pháp tiếp cận, không phải một Template

Diataxis không phải là bốn cái hộp để lấp đầy. Đó là một cách tư duy về tài liệu nhằm xác định bốn nhu cầu và sử dụng chúng để soạn thảo và cấu trúc nội dung một cách hiệu quả.

Tài liệu thực tế thường đối mặt với sự phức tạp không khớp hoàn toàn vào các cấu trúc đơn giản. Điều đó không sao cả. **Hãy để tài liệu phức tạp như nó cần phải thế**, miễn là nó logic và phục vụ nhu cầu người dùng.

### Nhiều loại người dùng

Sản phẩm của bạn có thể phục vụ:
- Người dùng cuối (End users) tiêu thụ sản phẩm.
- Lập trình viên (Developers) xây dựng dựa trên nó.
- Những người đóng góp (Contributors) bảo trì nó.

Đây thực chất là những sản phẩm khác nhau dành cho những nhóm người khác nhau. Mỗi nhóm có mối quan hệ riêng với sản phẩm.

**Hãy nghĩ đến người dùng trên hết**:
- Lập trình viên có cần hiểu các mối quan tâm của người dùng trước không?
  - Nếu có: Hãy để developer tutorials đi sau user tutorials.
- Những người đóng góp có cần các quy trình làm việc (workflows) riêng biệt không?
  - Nếu có: Hãy tách biệt hoàn toàn các how-to guides của họ.
- Mỗi nhóm có cần tất cả bốn loại tài liệu không?
  - Có thể không - chỉ cung cấp những gì mỗi nhóm thực sự cần.

**Đừng ép buộc chúng vào cấu trúc cứng nhắc**. Cấu trúc đi theo nhu cầu người dùng, không phải sự thuần khiết của sơ đồ.

### Nhiều môi trường hoặc nền tảng

Triển khai lên AWS so với Azure hoặc on-premise có thể tạo ra các quy trình làm việc hoàn toàn khác nhau. Cùng một sản phẩm, nhưng các mối quan tâm khác nhau.

**Các lựa chọn**:
- Tách biệt tài liệu theo môi trường nếu trải nghiệm khác biệt lớn.
- Sử dụng cấu trúc chung ở những nơi các mối quan tâm chồng chéo.
- Để người dùng tìm thấy lộ trình dựa trên tình huống của họ.
- Cân nhắc một trang điều hướng (routing page) dẫn đến các tài liệu cụ thể của từng môi trường.

### Cấu trúc phân cấp và điều hướng phức tạp

Tài liệu thực tế có thể rất lớn. Một số hướng dẫn thực hành:

#### Trang đích (Landing Pages)

Các trang đích nên **đọc giống như các bài tổng quan**, không chỉ đơn thuần trình bày các danh sách.

Cung cấp các tiêu đề và văn bản giới thiệu để tạo ngữ cảnh:

```markdown
## How-to Guides

Các hướng dẫn này giúp bạn hoàn thành những nhiệm vụ phổ biến với nền tảng.

### Hướng dẫn Cài đặt

Chọn phương pháp cài đặt phù hợp với môi trường của bạn.
Mỗi hướng dẫn mất khoảng 15 phút để hoàn thành.

- Cài đặt cục bộ (Local installation)
- Triển khai với Docker
- Thiết lập máy ảo (Virtual machine setup)
- Cấu hình Linux container
```

#### Độ dài danh sách

**Các danh sách dài hơn 7 mục thường khó đọc** trừ khi chúng có thứ tự máy móc (bảng chữ cái, số thứ tự).

Nếu một mục có 15 how-to guides, hãy nhóm chúng vào các danh mục với các trang đích phụ của riêng chúng.

#### Độ sâu của cấu trúc

Giữ các reference **ở mức một cấp độ sâu** so với SKILL.md khi có thể. Đừng tạo ra các cấu trúc lồng nhau quá sâu vốn khó điều hướng hoặc khó hiểu.

## Những gì Diataxis không thể làm

Hãy rõ ràng về các giới hạn:

- **Nó không làm cho tài liệu của bạn chính xác**: Độ chính xác đòi hỏi kiến thức chuyên môn và việc giữ tài liệu đồng bộ.
- **Nó không đảm bảo chất lượng chiều sâu**: Diataxis tạo điều kiện, nhưng bạn vẫn cần gu thẩm mỹ, sự thấu cảm với người dùng và kỹ năng viết.
- **Nó không thể thay thế các chuyên môn khác**: UX design, visual design, technical writing... Diataxis bổ sung cho chúng, không thay thế chúng.
- **Nó không phải là đường tắt**: Tài liệu tốt cần thời gian, kỹ năng, sự lặp lại và bảo trì liên tục.

## Hành trình của Người dùng

Người dùng di chuyển qua một chu kỳ với sản phẩm của bạn:

1. **Giai đoạn Học tập (Learning phase)** - Bắt đầu làm mọi thứ dưới sự dẫn dắt (tutorials).
2. **Giai đoạn Mục tiêu (Goal phase)** - Sử dụng các kỹ năng để giải quyết các vấn đề thực tế (how-to guides).
3. **Giai đoạn Thông tin (Information phase)** - Tra cứu các sự thật khi đang làm việc (reference).
4. **Giai đoạn Thấu hiểu (Understanding phase)** - Lùi lại để phản chiếu và đào sâu kiến thức (explanation).

Đây không phải là một lộ trình tuyến tính nghiêm ngặt. Người dùng có thể nhảy giữa các loại tài liệu tùy theo nhu cầu hiện tại.

## Triết lý Lặp lại (Iterative Philosophy)

- **Bắt đầu nhỏ**: Đừng cố hiểu mọi thứ về Diataxis trước khi dùng. Hãy chọn một ý tưởng hữu ích và áp dụng ngay.
- **Tăng trưởng hữu cơ**: Hãy coi tài liệu như một cái cây, luôn hoàn thiện ở giai đoạn hiện tại nhưng luôn sẵn sàng phát triển thêm. Cấu trúc sẽ nảy sinh từ nội dung tốt.
- **Quy trình làm việc cơ bản**: Chọn một phần -> Đánh giá nó -> Quyết định một hành động cải thiện -> Thực hiện -> Lặp lại.

## Các lỗi về ranh giới thường gặp

### Nhầm lẫn Tutorial/How-to

Đây là **lỗi phổ biến nhất**.
- **Tutorials** (để học): Dành cho người mới, lộ trình được quản lý chặt chẽ, không có bất ngờ, không có lựa chọn, giáo viên chịu trách nhiệm.
- **How-to Guides** (để làm): Dành cho người có năng lực, thích ứng với độ phức tạp thực tế, có điều kiện, người dùng tự chịu trách nhiệm.

### Nhầm lẫn Reference/Explanation

- **Reference** (làm việc): Mô tả thực tại, trung lập, danh sách và bảng biểu, tra cứu khi đang làm.
- **Explanation** (học tập): Thảo luận tại sao và như thế nào, có ngữ cảnh và kết nối, có thể đọc khi thư giãn.

**Bài kiểm tra**: Đây là thứ mà ai đó sẽ tìm đến khi đang làm việc (reference) hay khi đang suy ngẫm lúc không làm việc (explanation)?
