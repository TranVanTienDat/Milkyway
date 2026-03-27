---
name: tailwind-design-system
description: Xây dựng các hệ thống thiết kế có khả năng mở rộng với Tailwind CSS v4, design tokens, thư viện component và các mẫu thiết kế đáp ứng (responsive). Sử dụng khi tạo thư viện component, triển khai hệ thống thiết kế hoặc tiêu chuẩn hóa các mẫu UI.
---

# Hệ thống Thiết kế Tailwind (v4)

Xây dựng các hệ thống thiết kế sẵn sàng cho production với Tailwind CSS v4, bao gồm cấu hình ưu tiên CSS (CSS-first configuration), design tokens, các biến thể component (variants), mẫu thiết kế đáp ứng (responsive) và khả năng truy cập (accessibility).

> **Lưu ý**: Skill này dành cho Tailwind CSS v4 (2024+). Đối với các dự án v3, hãy tham khảo [hướng dẫn nâng cấp](https://tailwindcss.com/docs/upgrade-guide).

## Khi nào nên sử dụng Skill này

- Tạo thư viện component với Tailwind v4.
- Triển khai design tokens và giao diện (theming) với cấu hình ưu tiên CSS.
- Xây dựng các component có khả năng đáp ứng và truy cập tốt.
- Tiêu chuẩn hóa các mẫu UI trong toàn bộ mã nguồn.
- Di chuyển từ Tailwind v3 sang v4.
- Thiết lập chế độ tối (dark mode) với các tính năng CSS thuần (native).

## Các thay đổi chính trong v4

| Mẫu v3                                | Mẫu v4                                                                |
| ------------------------------------- | --------------------------------------------------------------------- |
| `tailwind.config.ts`                  | `@theme` trong CSS                                                    |
| `@tailwind base/components/utilities` | `@import "tailwindcss"`                                               |
| `darkMode: "class"`                   | `@custom-variant dark (&:where(.dark, .dark *))`                      |
| `theme.extend.colors`                 | `@theme { --color-*: value }`                                         |
| `require("tailwindcss-animate")`      | CSS `@keyframes` trong `@theme` + `@starting-style` cho hiệu ứng hiển thị |

## Bắt đầu Nhanh (Quick Start)

```css
/* app.css - Cấu hình ưu tiên CSS của Tailwind v4 */
@import "tailwindcss";

/* Định nghĩa giao diện của bạn với @theme */
@theme {
  /* Các thẻ màu ngữ nghĩa (Semantic color tokens) sử dụng OKLCH để cảm nhận màu sắc tốt hơn */
  --color-background: oklch(100% 0 0);
  --color-foreground: oklch(14.5% 0.025 264);

  --color-primary: oklch(14.5% 0.025 264);
  --color-primary-foreground: oklch(98% 0.01 264);

  --color-secondary: oklch(96% 0.01 264);
  --color-secondary-foreground: oklch(14.5% 0.025 264);

  --color-muted: oklch(96% 0.01 264);
  --color-muted-foreground: oklch(46% 0.02 264);

  --color-accent: oklch(96% 0.01 264);
  --color-accent-foreground: oklch(14.5% 0.025 264);

  --color-destructive: oklch(53% 0.22 27);
  --color-destructive-foreground: oklch(98% 0.01 264);

  --color-border: oklch(91% 0.01 264);
  --color-ring: oklch(14.5% 0.025 264);

  --color-card: oklch(100% 0 0);
  --color-card-foreground: oklch(14.5% 0.025 264);

  /* Khoảng cách vòng (Ring offset) cho các trạng thái focus */
  --color-ring-offset: oklch(100% 0 0);

  /* Thẻ bán kính (Radius tokens) */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;

  /* Thẻ hiệu ứng (Animation tokens) - các keyframes bên trong @theme sẽ được xuất ra khi được tham chiếu bởi các biến --animate-* */
  --animate-fade-in: fade-in 0.2s ease-out;
  --animate-fade-out: fade-out 0.2s ease-in;
  --animate-slide-in: slide-in 0.3s ease-out;
  --animate-slide-out: slide-out 0.3s ease-in;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes slide-in {
    from {
      transform: translateY(-0.5rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-0.5rem);
      opacity: 0;
    }
  }
}

/* Biến thể Dark mode - sử dụng @custom-variant cho dark mode dựa trên class */
@custom-variant dark (&:where(.dark, .dark *));

/* Ghi đè giao diện Dark mode */
.dark {
  --color-background: oklch(14.5% 0.025 264);
  --color-foreground: oklch(98% 0.01 264);

  --color-primary: oklch(98% 0.01 264);
  --color-primary-foreground: oklch(14.5% 0.025 264);

  --color-secondary: oklch(22% 0.02 264);
  --color-secondary-foreground: oklch(98% 0.01 264);

  --color-muted: oklch(22% 0.02 264);
  --color-muted-foreground: oklch(65% 0.02 264);

  --color-accent: oklch(22% 0.02 264);
  --color-accent-foreground: oklch(98% 0.01 264);

  --color-destructive: oklch(42% 0.15 27);
  --color-destructive-foreground: oklch(98% 0.01 264);

  --color-border: oklch(22% 0.02 264);
  --color-ring: oklch(83% 0.02 264);

  --color-card: oklch(14.5% 0.025 264);
  --color-card-foreground: oklch(98% 0.01 264);

  --color-ring-offset: oklch(14.5% 0.025 264);
}

/* Các phong cách cơ bản (Base styles) */
@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground antialiased;
  }
}
```

## Các Khái niệm Cốt lõi (Core Concepts)

### 1. Phân cấp Design Token (Design Token Hierarchy)

```
Thương hiệu (Brand Tokens - trừu tượng)
    └── Ngữ nghĩa (Semantic Tokens - mục đích)
        └── Thành phần (Component Tokens - cụ thể)

Ví dụ:
    oklch(45% 0.2 260) → --color-primary → bg-primary
```

### 2. Kiến trúc Thành phần (Component Architecture)

```
Phong cách cơ bản (Base styles) → Biến thể (Variants) → Kích thước (Sizes) → Trạng thái (States) → Ghi đè (Overrides)
```

## Các Mẫu thiết kế (Patterns)

### Mẫu 1: Các Component CVA (Class Variance Authority)

```typescript
// components/ui/button.tsx
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Phong cách cơ bản - v4 sử dụng các biến CSS thuần
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

// React 19: Không cần forwardRef
export function Button({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
}

// Cách sử dụng
<Button variant="destructive" size="lg">Xóa</Button>
<Button variant="outline">Hủy</Button>
<Button asChild><Link href="/home">Trang chủ</Link></Button>
```

### Mẫu 2: Các Component Phức hợp (Compound Components - React 19)

```typescript
// components/ui/card.tsx
import { cn } from '@/lib/utils'

// React 19: ref là một thuộc tính thông thường, không cần forwardRef
export function Card({
  className,
  ref,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({
  className,
  ref,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
}

export function CardTitle({
  className,
  ref,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ref,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { ref?: React.Ref<HTMLParagraphElement> }) {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ref,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
}

export function CardFooter({
  className,
  ref,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
}

// Cách sử dụng
<Card>
  <CardHeader>
    <CardTitle>Tài khoản</CardTitle>
    <CardDescription>Quản lý các cài đặt tài khoản của bạn</CardDescription>
  </CardHeader>
  <CardContent>
    <form>...</form>
  </CardContent>
  <CardFooter>
    <Button>Lưu</Button>
  </CardFooter>
</Card>
```

... [Và các phần khác như Forms, Grid, Animations, Dark Mode, Utility Functions, v.v. được bỏ qua để ngắn gọn] ...

## Danh sách Kiểm tra Di chuyển v3 sang v4 (Migration Checklist)

- [ ] Thay thế `tailwind.config.ts` bằng khối `@theme` trong CSS.
- [ ] Thay đổi `@tailwind base/components/utilities` thành `@import "tailwindcss"`.
- [ ] Chuyển các định nghĩa màu sắc vào `@theme { --color-*: value }`.
- [ ] Thay thế `darkMode: "class"` bằng `@custom-variant dark`.
- [ ] Di chuyển `@keyframes` vào trong các khối `@theme`.
- [ ] Thay thế `require("tailwindcss-animate")` bằng các hiệu ứng CSS thuần.
- [ ] Cập nhật `h-10 w-10` thành `size-10` (tiện ích mới).
- [ ] Loại bỏ `forwardRef` (React 19 truyền ref như một thuộc tính).
- [ ] Cân nhắc sử dụng màu OKLCH để cảm nhận màu sắc tốt hơn.
- [ ] Thay thế các plugin tùy chỉnh bằng các chỉ thị `@utility`.

## Các thực hành tốt nhất (Best Practices)

### Nên (Do's)

- **Sử dụng các khối `@theme`** - Cấu hình ưu tiên CSS là mẫu cốt lõi của v4.
- **Sử dụng màu OKLCH** - Tính đồng nhất về tri giác tốt hơn so với HSL.
- **Kết hợp với CVA** - Tạo các biến thể an toàn về kiểu dữ liệu (type-safe).
- **Sử dụng các thẻ ngữ nghĩa (semantic tokens)** - Sử dụng `bg-primary` thay vì `bg-blue-500`.
- **Sử dụng `size-*`** - Cách viết tắt mới cho `w-* h-*`.
- **Thêm khả năng truy cập (accessibility)** - Các thuộc tính ARIA, trạng thái focus.

### Không nên (Don'ts)

- **Đừng sử dụng `tailwind.config.ts`** - Hãy sử dụng CSS `@theme` thay thế.
- **Đừng sử dụng các chỉ thị `@tailwind`** - Hãy sử dụng `@import "tailwindcss"`.
- **Đừng sử dụng `forwardRef`** - React 19 truyền ref như một thuộc tính (prop).
- **Đừng sử dụng các giá trị tùy tiện (arbitrary values)** - Hãy mở rộng `@theme` thay thế.
- **Đừng hardcode màu sắc** - Hãy sử dụng các thẻ màu ngữ nghĩa.
- **Đừng quên chế độ tối (dark mode)** - Hãy kiểm tra trên cả hai giao diện.
