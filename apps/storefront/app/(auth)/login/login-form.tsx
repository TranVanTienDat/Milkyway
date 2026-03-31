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
import { LoginDocument } from "@/gql/graphql";
import { loginSchema, type LoginInput } from "@/lib/validations/auth";
import { cn } from "@/lib/utils";

/**
 * Form Đăng nhập
 * @description Đã refactor sử dụng react-hook-form & zod để tối ưu validate.
 */
export default function LoginForm() {
  const router = useRouter();

  // Khởi tạo React Hook Form với Zod Resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  // Xử lý Mutation từ Apollo
  const [login, { loading }] = useMutation(LoginDocument, {
    onCompleted: (data) => {
      if (data?.login) {
        const { jwt } = data.login;
        localStorage.setItem("authToken", jwt || "");
        toast.success("Đăng nhập thành công! Chào mừng Lão đại.");
        router.push("/");
      }
    },
    onError: (error) => {
      toast.error(error.message || "Email hoặc mật khẩu không chính xác.");
    },
  });

  // Hàm submit form
  const onSubmit = async (data: LoginInput) => {
    await login({
      variables: {
        identifier: data.email,
        password: data.password,
      },
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className={cn(errors.email && "text-error")}>
          Email của bạn
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

      {/* Password Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label
            htmlFor="password"
            className={cn(errors.password && "text-error")}
          >
            Mật khẩu
          </Label>
          <Link
            href="/forgot-password"
            className="text-[10px] font-display uppercase tracking-wider font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Quên mật khẩu?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          {...register("password")}
          className={cn(
            errors.password && "border-error focus-visible:ring-error",
          )}
        />
        {errors.password && (
          <p className="text-[10px] text-error font-medium">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Remember Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="remember"
          {...register("remember")}
          className="w-4 h-4 rounded-sm border-none bg-surface-container-low accent-primary appearance-none checked:bg-primary transition-all cursor-pointer relative after:absolute after:hidden checked:after:block after:content-['✓'] after:text-[10px] after:text-white after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
        />
        <Label
          htmlFor="remember"
          className="capitalize tracking-normal text-on-surface/50 font-normal"
        >
          Ghi nhớ đăng nhập
        </Label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-12 text-base font-semibold uppercase tracking-widest shadow-lg shadow-primary/20"
        disabled={loading}
      >
        {loading ? "Đang xử lý..." : "Đăng nhập ngay"}
      </Button>
    </form>
  );
}
