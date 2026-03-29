import Link from "next/link";
import LoginClient from "./login-client";

export const metadata = {
  title: "Đăng nhập | Glow & Pure",
  description: "Truy cập tài khoản cá nhân của bạn để nhận lộ trình chăm sóc da chuyên sâu.",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-2 text-left">
        <h2 className="text-3xl font-display font-medium tracking-tight text-on-surface">
          Đăng nhập
        </h2>
        <p className="text-sm font-body text-on-surface/60">
          Chào mừng Lão đại trở lại. Chúc Lão đại một ngày rạng rỡ.
        </p>
      </div>

      <LoginClient />

      <div className="pt-4 border-t border-on-surface/5 text-center">
        <p className="text-sm text-on-surface/60">
          Bạn mới đến với Glow & Pure?{" "}
          <Link href="/register" className="font-display font-bold text-on-surface hover:text-primary transition-colors">
            Đăng ký tài khoản
          </Link>
        </p>
      </div>
    </div>
  );
}
