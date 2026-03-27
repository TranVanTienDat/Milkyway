---
name: seo
description: Tối ưu hóa cho khả năng hiển thị và xếp hạng của công cụ tìm kiếm. Sử dụng khi được yêu cầu "improve SEO", "optimize for search", "fix meta tags", "add structured data", "sitemap optimization", hoặc "search engine optimization".
license: MIT
metadata:
  author: web-quality-skills
  version: "1.0"
---

# Tối ưu hóa SEO (SEO optimization)

Tối ưu hóa công cụ tìm kiếm dựa trên các kiểm tra SEO của Lighthouse và hướng dẫn Tìm kiếm của Google. Tập trung vào SEO kỹ thuật (technical SEO), tối ưu hóa trên trang (on-page optimization) và dữ liệu có cấu trúc (structured data).

## Các yếu tố cơ bản của SEO (SEO fundamentals)

Các yếu tố xếp hạng tìm kiếm (ảnh hưởng xấp xỉ):

| Yếu tố | Ảnh hưởng | Skill này |
|--------|-----------|------------|
| Chất lượng & mức độ liên quan của nội dung | ~40% | Một phần (cấu trúc) |
| Backlinks & uy tín | ~25% | ✗ |
| SEO kỹ thuật (Technical SEO) | ~15% | ✓ |
| Trải nghiệm trang (Core Web Vitals) | ~10% | Xem [Core Web Vitals](../core-web-vitals/SKILL.md) |
| SEO trên trang (On-page SEO) | ~10% | ✓ |

---

## SEO kỹ thuật (Technical SEO)

### Khả năng thu thập dữ liệu (Crawlability)

**robots.txt:**
```text
# /robots.txt
User-agent: *
Allow: /

# Chặn các khu vực quản trị/riêng tư
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Không chặn các tài nguyên cần thiết cho việc hiển thị (rendering)
# ❌ Disallow: /static/

Sitemap: https://example.com/sitemap.xml
```

**Thẻ Meta robots:**
```html
<!-- Mặc định: có thể lập chỉ mục, có thể theo dõi liên kết -->
<meta name="robots" content="index, follow">

<!-- Không lập chỉ mục cho các trang cụ thể -->
<meta name="robots" content="noindex, nofollow">

<!-- Có thể lập chỉ mục nhưng không theo dõi liên kết -->
<meta name="robots" content="index, nofollow">

<!-- Kiểm soát trích dẫn (snippets) -->
<meta name="robots" content="max-snippet:150, max-image-preview:large">
```

**URL chính tắc (Canonical URLs):**
```html
<!-- Ngăn chặn các vấn đề nội dung trùng lặp -->
<link rel="canonical" href="https://example.com/page">

<!-- Tự tham chiếu canonical (khuyên dùng) -->
<link rel="canonical" href="https://example.com/current-page">

<!-- Đối với nội dung được phân trang -->
<link rel="canonical" href="https://example.com/products">
<!-- Hoặc sử dụng rel="prev" / rel="next" cho việc phân trang rõ ràng -->
```

### Sơ đồ trang web XML (XML sitemap)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/products</loc>
    <lastmod>2024-01-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Các thực hành tốt nhất cho Sitemap:**
- Tối đa 50.000 URL hoặc 50MB cho mỗi sitemap.
- Sử dụng chỉ mục sitemap (sitemap index) cho các trang web lớn hơn.
- Chỉ bao gồm các URL chính tắc (canonical) và có thể lập chỉ mục.
- Cập nhật `lastmod` khi nội dung thay đổi.
- Gửi lên Google Search Console.

### Cấu trúc URL (URL structure)

```
✅ URL tốt:
https://example.com/products/blue-widget
https://example.com/blog/how-to-use-widgets

❌ URL kém:
https://example.com/p?id=12345
https://example.com/products/item/category/subcategory/blue-widget-2024-sale-discount
```

**Hướng dẫn về URL:**
- Sử dụng dấu gạch nối (hyphens), không dùng dấu gạch dưới (underscores).
- Chỉ sử dụng chữ thường.
- Giữ ngắn gọn (< 75 ký tự).
- Bao gồm các từ khóa mục tiêu một cách tự nhiên.
- Tránh các tham số (parameters) khi có thể.
- Luôn sử dụng HTTPS.

### HTTPS & bảo mật (Security)

```html
<!-- Đảm bảo tất cả tài nguyên đều sử dụng HTTPS -->
<img src="https://example.com/image.jpg">

<!-- Tránh: -->
<img src="http://example.com/image.jpg">
```

**Các tiêu đề bảo mật để tạo tín hiệu tin cậy cho SEO:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
```

---

## SEO trên trang (On-page SEO)

### Thẻ tiêu đề (Title tags)

```html
<!-- ❌ Thiếu hoặc quá chung chung -->
<title>Page</title>
<title>Home</title>

<!-- ✅ Mô tả rõ ràng với từ khóa chính -->
<title>Blue Widgets for Sale | Chất lượng Cao cấp | Cửa hàng Ví dụ</title>
```

**Hướng dẫn về thẻ tiêu đề:**
- 50-60 ký tự (Google sẽ cắt ngắn nếu ~60 ký tự).
- Từ khóa chính nằm ở phía đầu tiêu đề.
- Duy nhất cho mỗi trang.
- Tên thương hiệu ở cuối (trừ trang chủ).
- Hướng hành động khi phù hợp.

### Thẻ mô tả (Meta descriptions)

```html
<!-- ❌ Thiếu hoặc bị trùng lặp -->
<meta name="description" content="">

<!-- ✅ Hấp dẫn và duy nhất -->
<meta name="description" content="Mua sắm các widget màu xanh cao cấp với chính sách giao hàng miễn phí. Đổi trả trong 30 ngày. Được đánh giá 4.9/5 bởi 10.000+ khách hàng. Đặt hàng ngay hôm nay để tiết kiệm 20%.">
```

**Hướng dẫn về thẻ mô tả:**
- 150-160 ký tự.
- Bao gồm từ khóa chính một cách tự nhiên.
- Kêu gọi hành động hấp dẫn (compelling call-to-action).
- Duy nhất cho mỗi trang.
- Phù hợp với nội dung trang.

### Cấu trúc tiêu đề (Heading structure)

```html
<!-- ❌ Cấu trúc kém -->
<h2>Chào mừng đến với Cửa hàng</h2>
<h4>Sản phẩm</h4>
<h1>Liên hệ với Chúng tôi</h1>

<!-- ✅ Cấu trúc phân cấp đúng -->
<h1>Blue Widgets - Chất lượng Cao cấp</h1>
  <h2>Tính năng Sản phẩm</h2>
    <h3>Độ bền</h3>
    <h3>Thiết kế</h3>
  <h2>Đánh giá từ Khách hàng</h2>
  <h2>Báo giá</h2>
```

**Hướng dẫn về tiêu đề:**
- Một thẻ `<h1>` duy nhất cho mỗi trang (chủ đề chính).
- Phân cấp logic (đừng bỏ qua các cấp bậc).
- Bao gồm từ khóa một cách tự nhiên.
- Mang tính mô tả, không chung chung.

### SEO Hình ảnh (Image SEO)

```html
<!-- ❌ SEO hình ảnh kém -->
<img src="IMG_12345.jpg">

<!-- ✅ Hình ảnh được tối ưu hóa -->
<img src="blue-widget-product-photo.webp"
     alt="Widget màu xanh với lớp hoàn thiện bằng chrome, góc nhìn nghiêng hiển thị bảng điều khiển"
     width="800"
     height="600"
     loading="lazy">
```

**Hướng dẫn về hình ảnh:**
- Tên file mô tả rõ ràng với các từ khóa.
- Văn bản thay thế (alt text) mô tả nội dung hình ảnh.
- Được nén và có kích thước phù hợp.
- Sử dụng định dạng WebP/AVIF với các phương án dự phòng.
- Sử dụng Lazy load cho các hình ảnh nằm ngoài vùng nhìn thấy ban đầu (below-fold).

### Liên kết nội bộ (Internal linking)

```html
<!-- ❌ Không mang tính mô tả -->
<a href="/products">Bấm vào đây</a>
<a href="/widgets">Đọc thêm</a>

<!-- ✅ Văn bản liên kết (anchor text) mô tả rõ ràng -->
<a href="/products/blue-widgets">Khám phá bộ sưu tập widget màu xanh của chúng tôi</a>
<a href="/guides/widget-maintenance">Tìm hiểu cách bảo trì các widget của bạn</a>
```

**Hướng dẫn về liên kết:**
- Văn bản liên kết mô tả rõ ràng với các từ khóa.
- Liên kết đến các trang nội bộ có liên quan.
- Số lượng liên kết hợp lý cho mỗi trang.
- Sửa các liên kết bị hỏng kịp thời.
- Sử dụng Breadcrumbs để phân cấp.

---

## Dữ liệu có cấu trúc (Structured data - JSON-LD)

### Tổ chức (Organization)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cửa hàng Ví dụ",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "sameAs": [
    "https://twitter.com/example",
    "https://linkedin.com/company/example"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "dịch vụ khách hàng"
  }
}
</script>
```

### Bài viết (Article)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cách chọn Widget Phù hợp",
  "description": "Hướng dẫn đầy đủ về việc chọn widget cho nhu cầu của bạn.",
  "image": "https://example.com/article-image.jpg",
  "author": {
    "@type": "Person",
    "name": "Jane Smith",
    "url": "https://example.com/authors/jane-smith"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Blog Ví dụ",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-20"
}
</script>
```

### Sản phẩm (Product)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Blue Widget Pro",
  "image": "https://example.com/blue-widget.jpg",
  "description": "Widget màu xanh cao cấp với các tính năng tiên tiến.",
  "brand": {
    "@type": "Brand",
    "name": "WidgetCo"
  },
  "offers": {
    "@type": "Offer",
    "price": "49.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://example.com/products/blue-widget"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250"
  }
}
</script>
```

### FAQ (Câu hỏi thường gặp)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Có những màu sắc nào?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Các widget của chúng tôi có màu xanh, đỏ và xanh lá cây."
      }
    },
    {
      "@type": "Question",
      "name": "Chính sách bảo hành như thế nào?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tất cả các widget đều được bảo hành 2 năm."
      }
    }
  ]
}
</script>
```

### Breadcrumbs (Thanh điều hướng)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Trang chủ",
      "item": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sản phẩm",
      "item": "https://example.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Blue Widgets",
      "item": "https://example.com/products/blue-widgets"
    }
  ]
}
</script>
```

### Xác thực (Validation)

Kiểm tra dữ liệu có cấu trúc tại:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

---

## SEO cho Di động (Mobile SEO)

### Thiết kế đáp ứng (Responsive design)

```html
<!-- ❌ Không thân thiện với di động -->
<meta name="viewport" content="width=1024">

<!-- ✅ Viewport đáp ứng -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Mục tiêu chạm (Tap targets)

```css
/* ❌ Quá nhỏ cho di động */
.small-link {
  padding: 4px;
  font-size: 12px;
}

/* ✅ Có không gian chạm đầy đủ */
.mobile-friendly-link {
  padding: 12px;
  font-size: 16px;
  min-height: 48px;
  min-width: 48px;
}
```

### Kích thước Font (Font sizes)

```css
/* ❌ Quá nhỏ trên di động */
body {
  font-size: 10px;
}

/* ✅ Dễ đọc mà không cần thu phóng */
body {
  font-size: 16px;
  line-height: 1.5;
}
```

---

## SEO Quốc tế (International SEO)

### Thẻ Hreflang

```html
<!-- Đối với các trang đa ngôn ngữ -->
<link rel="alternate" hreflang="en" href="https://example.com/page">
<link rel="alternate" hreflang="es" href="https://example.com/es/page">
<link rel="alternate" hreflang="fr" href="https://example.com/fr/page">
<link rel="alternate" hreflang="x-default" href="https://example.com/page">
```

### Khai báo ngôn ngữ (Language declaration)

```html
<html lang="vi">
<!-- hoặc -->
<html lang="en-US">
```

---

## Danh sách kiểm tra SEO audit (SEO audit checklist)

### Quan trọng (Critical)
- [ ] Bật HTTPS.
- [ ] robots.txt cho phép thu thập dữ liệu.
- [ ] Không có thẻ `noindex` trên các trang quan trọng.
- [ ] Thẻ tiêu đề hiện tại và duy nhất.
- [ ] Một thẻ `<h1>` duy nhất mỗi trang.

### Ưu tiên cao (High priority)
- [ ] Có thẻ mô tả meta.
- [ ] Sitemap đã được gửi đi.
- [ ] Đã đặt URL chính tắc (canonical).
- [ ] Giao diện đáp ứng di động.
- [ ] Vượt qua các chỉ số Core Web Vitals.

### Ưu tiên trung bình (Medium priority)
- [ ] Đã triển khai dữ liệu có cấu trúc.
- [ ] Chiến lược liên kết nội bộ.
- [ ] Văn bản thay thế (alt text) cho hình ảnh.
- [ ] URL mang tính mô tả rõ ràng.
- [ ] Thanh điều hướng (breadcrumb).

### Duy trì hằng ngày (Ongoing)
- [ ] Sửa các lỗi thu thập dữ liệu trong Search Console.
- [ ] Cập nhật sitemap khi nội dung thay đổi.
- [ ] Theo dõi các thay đổi về thứ hạng.
- [ ] Kiểm tra lỗi liên kết bị hỏng (broken links).
- [ ] Xem xét các thông tin chuyên sâu (insights) từ Search Console.

---

## Công cụ (Tools)

| Công cụ | Sử dụng |
|------|-----|
| Google Search Console | Theo dõi lập chỉ mục, sửa lỗi |
| Google PageSpeed Insights | Hiệu suất + Core Web Vitals |
| Rich Results Test | Xác thực dữ liệu có cấu trúc |
| Lighthouse | Kiểm tra SEO đầy đủ |
| Screaming Frog | Phân tích thu thập dữ liệu (crawl analysis) |

## Tham khảo (References)

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Core Web Vitals](../core-web-vitals/SKILL.md)
- [Web Quality Audit](../web-quality-audit/SKILL.md)
