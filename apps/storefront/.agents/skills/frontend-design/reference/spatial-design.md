# Thiết kế Không gian (Spatial Design)

## Hệ thống Khoảng cách (Spacing Systems)

### Sử dụng Cơ số 4pt, không phải 8pt

Hệ thống 8pt quá thô—bạn sẽ thường xuyên cần mức 12px (nằm giữa 8 và 16). Hãy sử dụng cơ số 4pt để có độ chi tiết tốt hơn: 4, 8, 12, 16, 24, 32, 48, 64, 96px.

### Đặt tên Token theo Ngữ nghĩa

Đặt tên theo mối quan hệ (`--space-sm`, `--space-lg`), không đặt theo giá trị (`--spacing-8`). Hãy sử dụng `gap` thay vì margin cho khoảng cách giữa các phần tử cùng cấp—nó giúp loại bỏ việc gộp margin (margin collapse) và các thủ thuật dọn dẹp (cleanup hacks).

## Hệ thống Lưới (Grid Systems)

### Lưới tự Điều chỉnh (The Self-Adjusting Grid)

Sử dụng `repeat(auto-fit, minmax(280px, 1fr))` cho các lưới đáp ứng mà không cần điểm ngắt (breakpoints). Các cột có chiều rộng ít nhất 280px, hiển thị tối đa số cột có thể trên một hàng, và phần còn lại sẽ tự giãn ra. Đối với các bố cục phức tạp, hãy sử dụng các vùng lưới có tên (`grid-template-areas`) và định nghĩa lại chúng tại các điểm ngắt.

## Phân cấp Thị giác (Visual Hierarchy)

### Kiểm tra bằng cách "Nheo mắt" (The Squint Test)

Hãy nheo mắt lại (hoặc chụp màn hình và làm mờ nó). Bạn có còn nhận diện được:
- Phần tử quan trọng nhất?
- Phần tử quan trọng thứ hai?
- Các nhóm được phân chia rõ ràng?

Nếu mọi thứ trông có trọng lượng như nhau khi bị làm mờ, bạn đang gặp vấn đề về phân cấp.

### Phân cấp thông qua Nhiều Chiều (Dimensions)

Đừng chỉ dựa vào kích thước. Hãy kết hợp:

| Công cụ | Phân cấp Mạnh | Phân cấp Yếu |
|------|------------------|----------------|
| **Kích thước** | Tỷ lệ 3:1 hoặc hơn | Tỷ lệ <2:1 |
| **Độ dày (Weight)** | Đậm (Bold) so với Thường (Regular) | Trung bình (Medium) so với Thường |
| **Màu sắc** | Độ tương phản cao | Các tông màu tương tự |
| **Vị trí** | Trên/Trái (Chính) | Dưới/Phải |
| **Không gian** | Được bao quanh bởi khoảng trắng | Đông đúc |

**Cách phân cấp tốt nhất là sử dụng 2-3 chiều cùng lúc**: Một tiêu đề vừa lớn hơn, vừa đậm hơn, VÀ có nhiều khoảng trống phía trên hơn.

### Thẻ (Cards) không phải là Bắt buộc

Thẻ đang bị lạm dụng quá nhiều. Khoảng cách và căn lề có thể tạo ra các nhóm thị giác một cách tự nhiên. Chỉ sử dụng thẻ khi nội dung thực sự tách biệt và có thể thực hiện hành động, khi các mục cần so sánh thị giác trong một lưới, hoặc nội dung cần các ranh giới tương tác rõ ràng. **Tuyệt đối không lồng thẻ trong thẻ**—hãy sử dụng khoảng cách, kiểu chữ và các đường kẻ phân chia tinh tế để tạo phân cấp bên trong một thẻ.

## Truy vấn Container (Container Queries)

Các truy vấn khung nhìn (viewport queries) dành cho bố cục trang. **Truy vấn container dành cho các thành phần**:

```css
.card-container {
  container-type: inline-size;
}

.card {
  display: grid;
  gap: var(--space-md);
}

/* Bố cục thẻ thay đổi dựa trên container của chính nó, không phải khung nhìn */
@container (min-width: 400px) {
  .card {
    grid-template-columns: 120px 1fr;
  }
}
```

**Tại sao điều này lại quan trọng**: Một chiếc thẻ trong một thanh bên (sidebar) hẹp vẫn sẽ giữ được sự gọn gàng, trong khi chính chiếc thẻ đó khi nằm ở vùng nội dung chính sẽ tự động mở rộng ra—mà không cần đến các thủ thuật viewport.

## Điều chỉnh Thị giác (Optical Adjustments)

Văn bản tại `margin-left: 0` trông có vẻ bị thụt vào trong do khoảng trắng của các ký tự—hãy sử dụng margin âm (`-0.05em`) để căn chỉnh chính xác về mặt thị giác. Các icon được căn giữa về mặt hình học thường trông lệch tâm; icon "play" cần dịch sang phải, icon mũi tên dịch về hướng của chúng.

### Mục tiêu Chạm so với Kích thước Thị giác

Các nút có thể trông nhỏ nhưng cần mục tiêu chạm lớn (tối thiểu 44px). Hãy sử dụng padding hoặc các phần tử giả (pseudo-elements):

```css
.icon-button {
  width: 24px;  /* Kích thước thị giác */
  height: 24px;
  position: relative;
}

.icon-button::before {
  content: '';
  position: absolute;
  inset: -10px;  /* Mở rộng vùng chạm lên 44px */
}
```

## Độ sâu & Độ cao (Depth & Elevation)

Tạo các thang đo z-index theo ngữ nghĩa (dropdown → sticky → modal-backdrop → modal → toast → tooltip) thay vì các con số tùy tiện. Đối với bóng đổ, hãy tạo một thang đo độ cao nhất quán (sm → md → lg → xl). **Điểm mấu chốt**: Bóng đổ nên tinh tế—nếu bạn có thể nhìn thấy nó quá rõ ràng, có lẽ nó đang quá mạnh.

---

**Tránh**: Sử dụng các giá trị khoảng cách tùy tiện không nằm trong hệ thống. Làm cho tất cả các khoảng cách bằng nhau (sự đa dạng tạo ra phân cấp). Chỉ tạo phân cấp qua kích thước - hãy kết hợp kích thước, độ dày, màu sắc và không gian.
