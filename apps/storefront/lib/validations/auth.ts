import { z } from "zod";

/**
 * Schema cho form đăng nhập
 * @reference https://zod.dev/
 */
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .email({ message: "Email không hợp lệ" }),
  password: z
    .string()
    .min(1, { message: "Mật khẩu không được để trống" })
    .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
  remember: z.boolean().optional(),
});

/**
 * Schema cho form đăng ký
 */
export const registerSchema = z
  .object({
    fullname: z
      .string()
      .min(1, { message: "Họ và tên không được để trống" })
      .min(3, { message: "Họ và tên phải có ít nhất 3 ký tự" }),
    email: z
      .string()
      .min(1, { message: "Email không được để trống" })
      .email({ message: "Email không hợp lệ" }),
    password: z
      .string()
      .min(1, { message: "Mật khẩu không được để trống" })
      .min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Xác nhận mật khẩu không được để trống" }),
    terms: z.boolean().refine((val: boolean) => val === true, {
      message: "Bạn cần đồng ý với điều khoản dịch vụ",
    }),
  })
  .refine((data: any) => data.password === data.confirmPassword, {
    message: "Xác nhận mật khẩu không trùng khớp",
    path: ["confirmPassword"], // Hiển thị lỗi ở field confirmPassword
  });

// Định nghĩa types từ Schema
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
