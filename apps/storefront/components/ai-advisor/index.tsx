'use client';

import { useState } from 'react';
import { CameraIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

type AIState = 'IDLE' | 'ANALYZING' | 'RESULT';

export default function AIAdvisor() {
  const [status, setStatus] = useState<AIState>('IDLE');

  const handleScan = () => {
    // Simulate image upload
    if (status !== 'IDLE') return;
    setStatus('ANALYZING');
    
    // Simulate API delay
    setTimeout(() => {
      setStatus('RESULT');
    }, 3000);
  };

  const handleReset = () => {
    setStatus('IDLE');
  };

  return (
    <section className="w-full bg-[#f4e6e0] py-20 md:py-32 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/30 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 hidden md:block" />
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <div className="flex flex-col space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/50 px-4 py-2 rounded-full w-fit mb-2">
             <SparklesIcon className="w-4 h-4 text-[#A33800]" />
             <span className="text-xs uppercase tracking-widest font-semibold text-[#A33800]">AI Technology</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-[#121212] leading-tight">
            Bác sĩ da liễu AI <br className="hidden md:block"/>
            <span className="font-semibold italic">dành riêng cho bạn</span>
          </h2>
          
          <p className="text-lg text-[#6b5a60] leading-relaxed max-w-lg">
            Khám phá thói quen chăm sóc da lý tưởng. Chỉ cần một bức ảnh selfie, công nghệ AI thông minh của chúng tôi sẽ phân tích chuyên sâu 6 chỉ số da và đưa ra phác đồ thiết kế riêng trong 30 giây.
          </p>
          
          <ul className="space-y-4 pt-4">
            {['Độ chính xác lên đến 95%', 'Được hỗ trợ bởi chuyên gia da liễu', 'Bảo mật quyền riêng tư tuyệt đối'].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-[#2C362B] font-medium">
                <CheckCircleIcon className="w-5 h-5 text-[var(--color-glow-primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Interactive Widget */}
        <div className="bg-white rounded-2xl p-8 shadow-xl relative min-h-[450px] flex flex-col items-center justify-center overflow-hidden border border-[#E5E2E1]">
          {status === 'IDLE' && (
            <div className="flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-500 w-full h-full justify-center">
              <div className="w-24 h-24 bg-[#FCF9F8] rounded-full flex items-center justify-center mb-6 text-[#A33800] ring-4 ring-[#FCF9F8]">
                <CameraIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-[#121212]">Tải ảnh selfie lên</h3>
              <p className="text-[#6b5a60] text-sm mb-8 w-3/4">Hãy chụp màn hình khuôn mặt không trang điểm ở nơi có ánh sáng tốt.</p>
              
              <button 
                onClick={handleScan}
                className="w-full py-4 bg-[#121212] text-white font-medium rounded-sm hover:bg-[#A33800] transition-colors duration-300 shadow-md flex items-center justify-center space-x-2"
              >
                <span>Bắt đầu Quét Da</span>
                <SparklesIcon className="w-5 h-5" />
              </button>
            </div>
          )}

          {status === 'ANALYZING' && (
            <div className="flex flex-col items-center justify-center w-full h-full absolute inset-0 bg-white">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#FCF9F8] mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://placehold.co/400x400/EBE5E0/2C362B?text=Face" 
                  alt="Analyzing face" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-[var(--color-glow-primary)]/20 animate-pulse" />
                {/* Scan line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-white shadow-[0_0_15px_3px_#ffffff] origin-top animate-[scan_2s_ease-in-out_infinite]" />
              </div>
              
              <h3 className="text-xl font-medium text-[#121212] animate-pulse">Đang phân tích 6 chỉ số da...</h3>
              <p className="text-sm text-[#6b5a60] mt-2">Vui lòng chờ trong giây lát</p>
            </div>
          )}
          
          {status === 'RESULT' && (
            <div className="flex flex-col justify-between w-full h-full absolute inset-0 bg-white p-8 animate-in slide-in-from-right-8 duration-500 overflow-y-auto">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-medium text-[#121212]">Kết Quả Của Bạn</h3>
                  <span className="text-sm font-semibold px-3 py-1 bg-[#FCF9F8] text-[#A33800] rounded-full">Da Hỗn Hợp</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Độ ẩm', score: '75%', status: 'Tốt' },
                    { label: 'Lỗ chân lông', score: '45%', status: 'Cần cải thiện' },
                    { label: 'Sắc tố da', score: '82%', status: 'Tốt' },
                  ].map((metric, idx) => (
                    <div key={idx} className="flex flex-col space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-[#2C362B]">{metric.label}</span>
                        <span className="text-[#6b5a60]">{metric.status}</span>
                      </div>
                      <div className="w-full bg-[#E5E2E1] h-1.5 rounded-full overflow-hidden">
                         <div className="bg-[var(--color-glow-primary)] h-full" style={{ width: metric.score }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-[#E5E2E1] pt-6 flex flex-col space-y-4">
                <button className="w-full py-3 bg-[#A33800] text-white font-medium rounded-sm hover:bg-[#cc4902] transition-colors shadow-md">
                  Xem lộ trình chi tiết
                </button>
                <button 
                  onClick={handleReset}
                  className="w-full py-3 bg-transparent text-[#121212] border border-[#121212] font-medium rounded-sm hover:bg-[#FCF9F8] transition-colors"
                >
                  Thử lại
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Tailwind bespoke keyframes for scanning animation can be resolved via inline styles or tailwind arbitrary variants, but to keep things clean we add a custom inline style tag just for the scanning effect if not configured globally */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(192px); }
        }
      `}} />
    </section>
  );
}
