import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Suspense } from "react";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const copyrightName = COMPANY_NAME || SITE_NAME || "Glow & Pure";

  return (
    <footer className="bg-on-surface text-surface font-body overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand section */}
          <div className="lg:col-span-4">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                <StarIcon className="h-7 w-7 text-primary" />
              </div>
              <span className="font-display text-3xl font-bold tracking-tight text-surface">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-surface/60 font-body">
              Mang đến vẻ đẹp thuần khiết và tỏa sáng tự nhiên. Chúng tôi không chỉ bán mỹ phẩm,
              chúng tôi truyền cảm hứng cho một lối sống cao cấp và bền vững.
            </p>
            <div className="mt-8 flex space-x-5">
              {["Instagram", "Facebook", "Pinterest", "Twitter"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-surface/40 hover:text-primary transition-colors text-xs uppercase tracking-widest font-medium"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-surface/40">
                Mua sắm
              </h3>
              <ul className="mt-6 space-y-4">
                {["Tất cả sản phẩm", "Bộ sưu tập mới", "Sản phẩm bán chạy", "Quà tặng"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-surface/70 hover:text-primary transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-surface/40">
                Hỗ trợ
              </h3>
              <ul className="mt-6 space-y-4">
                {["Giao hàng", "Đổi trả", "Liên hệ", "Câu hỏi thường gặp"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-surface/70 hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:block">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-surface/40">
                Chính sách
              </h3>
              <ul className="mt-6 space-y-4">
                {["Điều khoản sử dụng", "Chính sách bảo mật", "Cookies"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-surface/70 hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-surface/40">
              Newsletter
            </h3>
            <p className="mt-6 text-sm text-surface/60">
              Nhận thông tin về các dòng sản phẩm mới và cảm hứng làm đẹp.
            </p>
            <form className="mt-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full bg-surface/5 border-none px-4 py-3 text-sm text-surface placeholder:text-surface/20 focus:ring-1 focus:ring-primary rounded-sm transition-all outline-none"
                />
                <button
                  type="submit"
                  className="mt-3 w-full bg-primary py-3 text-xs font-bold uppercase tracking-widest text-surface hover:bg-primary-container transition-all"
                >
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 border-t border-surface/10 pt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-[10px] uppercase tracking-widest text-surface/30">
            &copy; {copyrightDate} {copyrightName}. All rights reserved.
            <span className="mx-2">|</span> Powered by Milkyway
          </p>
          <div className="flex items-center space-x-6">
            {/* Visual indicators for payment methods - simplified as text for aesthetic */}
            {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((method) => (
              <span key={method} className="text-[10px] uppercase tracking-widest text-surface/20">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
