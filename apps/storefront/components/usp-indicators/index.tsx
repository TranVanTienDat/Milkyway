import { 
  BeakerIcon, 
  ShieldCheckIcon, 
  HeartIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline'; // Mocking icons

const usps = [
  { id: 1, title: 'DỰA TRÊN KHOA HỌC', icon: BeakerIcon },
  { id: 2, title: 'LÀM ĐẸP AN TOÀN', icon: ShieldCheckIcon },
  { id: 3, title: 'THUẦN CHAY', icon: HeartIcon },
  { id: 4, title: 'THÀNH PHẦN TỰ NHIÊN', icon: SparklesIcon },
];

export default function USPIndicators() {
  return (
    <section className="w-full bg-[#FCF9F8] py-16 md:py-24 border-b border-[#E5E2E1]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {usps.map((usp, index) => (
            <div 
              key={usp.id} 
              className="flex flex-col items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 text-[#A33800] ring-1 ring-[#A33800]/10">
                <usp.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xs md:text-sm tracking-[0.15em] font-medium text-[#2C362B] uppercase">
                {usp.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
