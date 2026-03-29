import Link from "next/link";
import RegisterClient from "./register-client";

export const metadata = {
  title: "Đăng ký | Glow & Pure",
  description: "Trở thành hội viên Glow & Pure để nhận tư vấn da liễu AI và những ưu đãi độc quyền.",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-2 text-left">
        <h2 className="text-3xl font-display font-medium tracking-tight text-on-surface">
          Đăng ký thành viên
        </h2>
        <p className="text-sm font-body text-on-surface/60">
          Gia nhập cộng đồng làm đẹp thông minh cùng AI.
        </p>
      </div>

      <RegisterClient />

      <div className="pt-4 border-t border-on-surface/5 text-center">
        <p className="text-sm text-on-surface/60">
          Đã có tài khoản tại Glow & Pure?{" "}
          <Link href="/login" className="font-display font-bold text-on-surface hover:text-primary transition-colors">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
}
