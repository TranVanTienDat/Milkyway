import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="flex flex-col md:flex-row min-h-150 w-full text-[#1A1A1A]">
      <div className="w-full md:w-1/2 bg-[#FDF2F4] flex flex-col justify-center items-center p-12 text-center">
        <div className="max-w-md">
          <span className="uppercase tracking-[0.2em] text-xs mb-4 block font-medium">Glow & Pure Ritual</span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 italic tracking-tight">Khởi đầu làn da rạng rỡ</h2>
          <p className="mb-8 text-base leading-relaxed italic opacity-80">
            Khám phá bí quyết chăm sóc da thuần chay, kết hợp giữa khoa học tiên tiến và những thành phần tinh khiết nhất từ thiên nhiên.
          </p>
          <Link 
            href="/search" 
            className="inline-block border border-[#1A1A1A] px-10 py-3 uppercase text-xs font-semibold tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
          >
            Khám phá ngay
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-gray-200 relative overflow-hidden group min-h-100 md:min-h-150">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          alt="Skincare photography" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBUjVgT-h3p5dMb7jhmlEHCUjkBRSQUpaxFPDl7MYMQVNyRktRvj3fSUsUfhzk-qas3ZAnicKAfPsV9ed3-5wWVt--XvZ9i5cPY3EGPpwl_Qp8RJeOYYEzXvULbS8FvUVlZ3sgokAxHabYxgh35FDznRX8QVktzcc1CiImrNg6SdaPCi4pHbDKOHYCdB-Hi4pIFmZ_LwXexVMA9jpO1_Yl0fB0gjRiF5ROIbeDFYzy3tRK6TDu6lxH0nEik0_eGEEMsq6ej3ZXy7c"
        />
      </div>
    </section>
  );
}
