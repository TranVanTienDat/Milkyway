import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-surface select-none">
      {/* Visual Side - Editorial Image */}
      <div className="hidden lg:block relative overflow-hidden bg-surface-container-low">
        <div className="absolute inset-x-0 bottom-0 top-0 m-auto flex h-fit w-full flex-col p-12 text-on-surface">
          <div className="max-w-md">
            <Link href="/" className="mb-12 block w-fit">
              <span className="text-2xl font-display font-bold tracking-tighter text-primary">
                GLOW & PURE
              </span>
            </Link>
            
            <h1 className="text-5xl font-display font-medium leading-[1.1] tracking-tight mb-8">
              The Ethereal Editor for your Skin.
            </h1>
            
            <p className="text-lg font-body leading-relaxed opacity-80 mb-12">
              Chúng tôi tin rằng việc chăm sóc da là một nghệ thuật. Mỗi bước trong quy trình là một nét vẽ tạo nên vẻ đẹp riêng biệt của bạn.
            </p>
            
            <div className="mt-auto pt-12 border-t border-on-surface/5">
              <span className="text-xs font-body tracking-[0.2em] uppercase opacity-50">
                Luminous Ivory Collection © 2026
              </span>
            </div>
          </div>
        </div>
        
        {/* Subtle Gradient / Pattern Background */}
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -left-20 bottom-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      {/* Form Side */}
      <div className="flex items-center justify-center p-6 sm:p-12 text-on-surface">
        <div className="w-full max-w-[420px] mx-auto animate-[scale-in_0.5s_ease-out]">
          <div className="mb-10 lg:hidden">
             <Link href="/" className="block">
              <span className="text-xl font-display font-bold tracking-tighter text-primary">
                GLOW & PURE
              </span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
