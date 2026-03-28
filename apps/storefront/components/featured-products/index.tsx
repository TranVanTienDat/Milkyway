'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Mock product data as per task 3.3
const featuredProducts = [
  {
    id: '1',
    name: 'SERUM DƯỠNG TRẮNG C-GLOW',
    price: '790.000₫',
    image: 'https://placehold.co/400x500/E5E2E1/2C362B?text=Serum+C-Glow',
    handle: 'serum-duong-trang-c-glow',
  },
  {
    id: '2',
    name: 'DẦU TẨY TRANG BOTANICAL',
    price: '420.000₫',
    image: 'https://placehold.co/400x500/E5E2E1/2C362B?text=Botanical+Oil',
    handle: 'dau-tay-trang-botanical',
  },
  {
    id: '3',
    name: 'MẶT NẠ ĐẤT SÉT TRẮNG',
    price: '280.000₫',
    image: 'https://placehold.co/400x500/E5E2E1/2C362B?text=Clay+Mask',
    handle: 'mat-na-dat-set',
  },
  {
    id: '4',
    name: 'KEM DƯỠNG AHA AQUAPURE',
    price: '620.000₫',
    image: 'https://placehold.co/400x500/E5E2E1/2C362B?text=AHA+AquaPure',
    handle: 'kem-duong-aha',
  },
];

function ProductCard({ product }: { product: typeof featuredProducts[0] }) {
  return (
    <div className="group flex flex-col cursor-pointer mt-4">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F6F3F2] mb-6 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-sm font-medium text-[#121212] tracking-wide mb-2 group-hover:text-[var(--color-glow-primary)] transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-[#6b5a60]">{product.price}</p>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: true
    },
    [Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#A33800] mb-4">
            Khám phá bộ sưu tập
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#121212] tracking-wide uppercase">
            Sản phẩm Nổi bật
          </h2>
        </div>
        
        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-x-4 md:gap-x-8">
              {featuredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_25%] min-w-0"
                >
                  {/* Embla slider link handler */}
                  <Link href={`/product/${product.handle}`} className="block select-none" draggable={false}>
                    <ProductCard product={product} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <button 
            onClick={scrollPrev}
            className="absolute top-[40%] -left-3 md:-left-5 lg:-left-12 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full flex items-center justify-center shadow-lg text-[#121212] hover:bg-[#121212] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Trước"
          >
            <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute top-[40%] -right-3 md:-right-5 lg:-right-12 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full flex items-center justify-center shadow-lg text-[#121212] hover:bg-[#121212] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Tiếp"
          >
            <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/collections/all" 
            className="inline-block border-b border-[#121212] text-sm uppercase tracking-widest pb-1 hover:text-[var(--color-glow-primary)] hover:border-[var(--color-glow-primary)] transition-colors duration-300"
          >
            Xem tất cả
          </Link>
        </div>
      </div>
    </section>
  );
}
