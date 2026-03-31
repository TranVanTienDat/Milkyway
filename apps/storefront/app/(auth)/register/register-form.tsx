"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterDocument } from "@/gql/graphql";
import { registerSchema, type RegisterInput } from "@/lib/validations/auth";
import { cn } from "@/lib/utils";

/**
 * Form Đăng ký
 * @description Đã refactor sử dụng react-hook-form & zod.
 */
export default function RegisterForm() {
  const router = useRouter();

  // Khởi tạo React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  // Mutation đăng ký
  const [registerAccount, { loading }] = useMutation(RegisterDocument, {
    onCompleted: (data) => {
      if (data?.register) {
        const { jwt } = data.register;
        localStorage.setItem("authToken", jwt || "");
        toast.success(
          "Đăng ký thành công! Chào mừng Lão đại gia nhập cộng đồng.",
        );
        router.push("/");
      }
    },
    onError: (error) => {
      toast.error(error.message || "Đã xảy ra lỗi trong quá trình đăng ký.");
    },
  });

  // Xử lý submit
  const onSubmit = async (data: RegisterInput) => {
    await registerAccount({
      variables: {
        username: data.fullname,
        email: data.email,
        password: data.password,
      },
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Fullname Field */}
      <div className="space-y-2">
        <Label
          htmlFor="fullname"
          className={cn(errors.fullname && "text-error")}
        >
          Họ và Tên
        </Label>
        <Input
          id="fullname"
          placeholder="Lão đại Glow & Pure"
          {...register("fullname")}
          className={cn(
            errors.fullname && "border-error focus-visible:ring-error",
          )}
        />
        {errors.fullname && (
          <p className="text-[10px] text-error font-medium">
            {errors.fullname.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className={cn(errors.email && "text-error")}>
          Email
        </Label>
        <Input
          id="email"
          placeholder="example@glowpure.com"
          type="email"
          {...register("email")}
          className={cn(
            errors.email && "border-error focus-visible:ring-error",
          )}
        />
        {errors.email && (
          <p className="text-[10px] text-error font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Passwords Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="password"
            className={cn(errors.password && "text-error")}
          >
            Mật khẩu
          </Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            className={cn(
              errors.password && "border-error focus-visible:ring-error",
            )}
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="confirm-password"
            className={cn(errors.confirmPassword && "text-error")}
          >
            Xác nhận
          </Label>
          <Input
            id="confirm-password"
            type="password"
            {...register("confirmPassword")}
            className={cn(
              errors.confirmPassword && "border-error focus-visible:ring-error",
            )}
          />
        </div>
      </div>
      {(errors.password || errors.confirmPassword) && (
        <p className="text-[10px] text-error font-medium">
          {errors.password?.message || errors.confirmPassword?.message}
        </p>
      )}

      {/* Terms Checkbox */}
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="terms"
          {...register("terms")}
          className="mt-1 w-4 h-4 rounded-sm border-none bg-surface-container-low accent-primary appearance-none checked:bg-primary transition-all cursor-pointer relative after:absolute after:hidden checked:after:block after:content-['✓'] after:text-[10px] after:text-white after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
        />
        <Label
          htmlFor="terms"
          className={cn(
            "capitalize tracking-normal font-normal leading-tight h-auto",
            errors.terms ? "text-error" : "text-on-surface/50",
          )}
        >
          Tôi đồng ý với{" "}
          <Link href="/terms" className="font-bold underline">
            Điều khoản dịch vụ
          </Link>{" "}
          và{" "}
          <Link href="/privacy" className="font-bold underline">
            Chính sách bảo mật
          </Link>
        </Label>
      </div>
      {errors.terms && (
        <p className="text-[10px] text-error font-medium">
          {errors.terms.message}
        </p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-12 text-base font-semibold uppercase tracking-widest shadow-lg shadow-primary/20 bg-primary/95 hover:bg-primary transition-all"
        disabled={loading}
      >
        {loading ? "Đang xử lý..." : "Tạo tài khoản ngay"}
      </Button>
    </form>
  );
}
