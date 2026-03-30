"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterDocument } from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [register, { loading }] = useMutation(RegisterDocument, {
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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullname || formData.fullname.length < 3) {
      newErrors.fullname = "Họ và tên phải có ít nhất 3 ký tự";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Xác nhận mật khẩu không trùng khớp";
    }
    if (!formData.terms) {
      newErrors.terms = "Bạn cần đồng ý với điều khoản dịch vụ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    await register({
      variables: {
        username: formData.fullname,
        email: formData.email,
        password: formData.password,
      },
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label
          htmlFor="fullname"
          className={errors.fullname ? "text-error" : ""}
        >
          Họ và Tên
        </Label>
        <Input
          id="fullname"
          placeholder="Lão đại Glow & Pure"
          value={formData.fullname}
          onChange={(e) =>
            setFormData({ ...formData, fullname: e.target.value })
          }
          className={
            errors.fullname ? "border-error focus-visible:ring-error" : ""
          }
        />
        {errors.fullname && (
          <p className="text-[10px] text-error font-medium">
            {errors.fullname}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={errors.email ? "text-error" : ""}>
          Email
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

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="password"
            className={errors.password ? "text-error" : ""}
          >
            Mật khẩu
          </Label>
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
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="confirm-password"
            className={errors.confirmPassword ? "text-error" : ""}
          >
            Xác nhận
          </Label>
          <Input
            id="confirm-password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className={
              errors.confirmPassword
                ? "border-error focus-visible:ring-error"
                : ""
            }
          />
        </div>
      </div>
      {(errors.password || errors.confirmPassword) && (
        <p className="text-[10px] text-error font-medium">
          {errors.password || errors.confirmPassword}
        </p>
      )}

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 w-4 h-4 rounded-sm border-none bg-surface-container-low accent-primary appearance-none checked:bg-primary transition-all cursor-pointer relative after:absolute after:hidden checked:after:block after:content-['✓'] after:text-[10px] after:text-white after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
          checked={formData.terms}
          onChange={(e) =>
            setFormData({ ...formData, terms: e.target.checked })
          }
        />
        <Label
          htmlFor="terms"
          className={`capitalize tracking-normal font-normal leading-tight h-auto ${errors.terms ? "text-error" : "text-on-surface/50"}`}
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
