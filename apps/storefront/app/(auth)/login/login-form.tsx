"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginDocument } from "@/gql/graphql";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

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

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!formData.email) {
      newErrors.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.password) {
      newErrors.password = "Mật khẩu không được để trống";
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    await login({
      variables: {
        identifier: formData.email,
        password: formData.password,
      },
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="email" className={errors.email ? "text-error" : ""}>
          Email của bạn
        </Label>
        <Input
          id="email"
          placeholder="example@glowpure.com"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={
            errors.email ? "border-error focus-visible:ring-error" : ""
          }
        />
        {errors.email && (
          <p className="text-[10px] text-error font-medium">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label
            htmlFor="password"
            className={errors.password ? "text-error" : ""}
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
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className={
            errors.password ? "border-error focus-visible:ring-error" : ""
          }
        />
        {errors.password && (
          <p className="text-[10px] text-error font-medium">
            {errors.password}
          </p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="remember"
          className="w-4 h-4 rounded-sm border-none bg-surface-container-low accent-primary appearance-none checked:bg-primary transition-all cursor-pointer relative after:absolute after:hidden checked:after:block after:content-['✓'] after:text-[10px] after:text-white after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
        />
        <Label
          htmlFor="remember"
          className="capitalize tracking-normal text-on-surface/50 font-normal"
        >
          Ghi nhớ đăng nhập
        </Label>
      </div>

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
