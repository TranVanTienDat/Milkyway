import HeroBanner from '../components/hero-banner';
import USPIndicators from '../components/usp-indicators';
import FeaturedProducts from '../components/featured-products';
import AIAdvisor from '../components/ai-advisor';
import Testimonials from '../components/testimonials';
import PressLogos from '../components/press-logos';

export const metadata = {
  description: "Glow & Pure - Bí quyết chăm sóc da thuần chay, an toàn và thiên nhiên",
  title: "Glow & Pure | Skincare from Nature & Science",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroBanner />
      <USPIndicators />
      <FeaturedProducts />
      <AIAdvisor />
      <Testimonials />
      <PressLogos />
    </main>
  );
}
