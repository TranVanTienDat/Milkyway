import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Lan Anh',
    text: 'Sản phẩm thực sự hiệu quả. Da mình bớt nhạy cảm và căng mọng hơn sau 2 tuần sử dụng.',
  },
  {
    id: 2,
    name: 'Minh Trí',
    text: 'Yêu thích triết lý thuần chay của thương hiệu. Bao bì cũng rất thân thiện với môi trường.',
  },
  {
    id: 3,
    name: 'Hoàng Yến',
    text: 'Dịch vụ Khách hàng rất tận tâm. AI phân tích da tư vấn cực kỳ chuẩn xác.',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#A33800] mb-4">
            Đánh giá từ khách hàng
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#121212] tracking-wide">
            Cảm nhận thực tế
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center p-8 bg-[#FCF9F8] rounded-xl border border-[#E5E2E1]/60 hover:shadow-lg transition-shadow duration-300">
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-[#D4B499]" />
                ))}
              </div>
              <p className="text-[#6b5a60] italic mb-6 leading-relaxed flex-grow">
                "{item.text}"
              </p>
              <div className="w-8 h-px bg-[#D4B499] mb-4" />
              <span className="text-sm font-semibold text-[#121212] uppercase tracking-wider">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
