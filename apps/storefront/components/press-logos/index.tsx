const pressLogos = [
  { name: 'VOGUE', text: 'VOGUE' },
  { name: 'ELLE', text: 'ELLE' },
  { name: 'Harper\'s BAZAAR', text: 'Harper\'s BAZAAR' },
  { name: 'MARIE CLAIRE', text: 'MARIE CLAIRE' },
  { name: 'L\'OFFICIEL', text: 'L\'OFFICIEL' }
];

export default function PressLogos() {
  return (
    <section className="w-full bg-[#121212] py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {pressLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              {/* Using stylized text to mock logos since we don't have SVGs */}
              <span className="font-display text-white text-xl md:text-3xl font-light tracking-widest uppercase">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
