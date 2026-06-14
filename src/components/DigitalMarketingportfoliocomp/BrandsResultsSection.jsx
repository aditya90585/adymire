// BrandsResultsSection.jsx
// IMAGES: NoPath - Copy (2).svg (Sietsfoods SIETE logo), Untitled-design-2.svg (Google Ads dashboard)

import { useState } from "react";

const brands = [
  { id:1, name:"Sietsfoods", website:"www.Sietsfoods.com", detail:"Google Search (Lead Gen)", quote:'"We run highly targeted Search campaigns to capture high-intent users actively looking for your services."', metrics:[{v:"₹350k+",l:"SPEND"},{v:"₹35",l:"CPL"},{v:"₹45",l:"CPC"},{v:"5.20%",l:"CTR"}], logo:"🦅", logoBg:"bg-[#1a1a3a]", dashPlaceholder:"Untitled-design-2.svg\n(Google Ads Campaigns view)" },
];

export default function BrandsResultsSection() {
  const [idx] = useState(0);
  const b = brands[idx % brands.length];
  return (
    <section className="bg-white py-14 sm:py-20 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-5xl sm:text-6xl lg:text-[72px] leading-tight text-center mb-10 sm:mb-12">
          Brands <span className="text-[#fcc719]">Results</span>
        </h2>
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left */}
            <div className="lg:w-[360px] p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${b.logoBg} rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl flex-shrink-0`}>{b.logo}</div>
                  <div>
                    <p className="font-bold text-xl sm:text-[28px] text-[#070707]">{b.name}</p>
                    <a href="#" className="text-blue-500 text-sm">{b.website}</a>
                  </div>
                </div>
                <p className="text-[#3a3a3a] font-semibold text-sm sm:text-[16px] mb-2">Details: <span className="text-[#ff8c00]">{b.detail}</span></p>
                <p className="text-[#3a3a3a] text-sm sm:text-[15px] leading-relaxed italic mb-6">{b.quote}</p>
                <p className="font-bold text-[#070707] text-sm sm:text-[16px] mb-3">Key Metrics:</p>
                <div className="grid grid-cols-2 gap-3">
                  {b.metrics.map(m=>(
                    <div key={m.l} className="bg-[#FFFBF3] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 border border-[#fcc719]/30">
                      <p className="font-bold text-[#ff8c00] text-lg sm:text-[20px] leading-tight">{m.v}</p>
                      <p className="text-[#6f7071] text-[10px] sm:text-[11px] font-semibold tracking-wider mt-0.5">{m.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="w-9 h-9 sm:w-10 sm:h-10 bg-[#fcc719] rounded-full flex items-center justify-center font-bold hover:bg-[#e6b300] transition-colors">←</button>
                <div className="flex gap-2">{[0,1,2,3,4].map(i=><div key={i} className={`w-2.5 h-2.5 rounded-full ${i===0?"bg-[#fcc719]":"bg-gray-200"}`}/>)}</div>
                <button className="w-9 h-9 sm:w-10 sm:h-10 bg-[#fcc719] rounded-full flex items-center justify-center font-bold hover:bg-[#e6b300] transition-colors">→</button>
              </div>
            </div>
            {/* Right — dashboard */}
            <div className="flex-1 p-4 sm:p-6 bg-gray-50 flex items-center justify-center">
              {/* Replace: <img src="/src/assets/Untitled-design-2.svg" className="w-full h-full object-contain rounded-2xl" /> */}
              <div className="w-full h-[300px] sm:h-[400px] lg:h-[480px] bg-white rounded-2xl border border-gray-200 shadow-inner p-4 sm:p-5 overflow-hidden">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Campaign status: Enabled, Paused","Ad group status: Enabled, Paused"].map(t=>(
                    <span key={t} className="bg-gray-100 text-gray-600 text-[10px] sm:text-[11px] px-2 sm:px-3 py-1.5 rounded-full border border-gray-200">{t}</span>
                  ))}
                </div>
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="p-3 sm:p-4 border-b border-gray-50 flex items-center justify-between">
                    <h3 className="font-bold text-sm text-gray-700">Campaigns</h3>
                    <button className="w-7 h-7 bg-blue-500 rounded-full text-white text-sm font-bold">+</button>
                  </div>
                  {["Local store visits and promotions-Local-1","Campaign #1","Business 2","Business","Adwords Holiday Offers"].map((c,i)=>(
                    <div key={i} className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 accent-blue-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="text-blue-600 text-[11px] sm:text-[13px] hover:underline">{c}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs text-gray-300 mt-2">📁 Untitled-design-2.svg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
