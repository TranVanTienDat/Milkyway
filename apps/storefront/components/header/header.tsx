import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Suspense } from "react";

const MENU_ITEMS = [
  { title: "Trang chủ", path: "/" },
  { title: "Sản phẩm", path: "/search" },
  { title: "Blog", path: "/blog" },
  { title: "Về chúng tôi", path: "/about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <div className="flex flex-1 items-center">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 transition-transform group-hover:scale-110">
              <StarIcon className="h-6 w-6 text-orange-600 drop-shadow-sm" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-neutral-900">
              Glow & Pure
            </span>
          </Link>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-12">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="relative py-1 text-sm font-medium text-neutral-600 transition-colors hover:text-orange-600 group"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 origin-left bg-orange-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: Actions (Search, Cart, User) */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Search Bar */}
          <div className="hidden md:relative md:flex md:w-64">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full rounded-full border border-neutral-200 bg-neutral-50 py-2.5 pl-5 pr-12 text-sm text-neutral-900 transition-all focus:border-orange-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100"
            />
            <button className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white transition-opacity hover:opacity-90">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* User Icon */}
            <Link
              href="/account"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-orange-600"
            >
              <UserIcon className="h-6 w-6" />
            </Link>

            {/* Cart Icon with Badge */}
            <Link
              href="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-orange-600"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              <div className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                0
              </div>
            </Link>

            {/* Mobile Menu Placeholder - Can be integrated with mobile menu logic */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-900 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
