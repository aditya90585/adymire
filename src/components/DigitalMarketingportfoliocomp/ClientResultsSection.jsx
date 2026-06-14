
import { useState } from "react";

const clients = [
  { id: 1, company: "Adymire Tecnologies Pvt Ltd.", desc: "We Run Google Ads And Meta Ads For Adymire Technologies And Campaign Type Is Google Search And Meta Sales And We Convert The Growth", highlight: "5X ROAS", highlightColor: "text-[#ff8c00]", types: ["meta", "google"], metrics: [{ v: "350K+", l: "SPEND" }, { v: "5X", l: "ROAS" }, { v: "$0.60", l: "CPC" }, { v: "3.5%", l: "CTR" }], imgPlaceholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780221716/665fe400848921f3e8cce2c9_meta-ad_tx3nnd.webp" },
  { id: 2, company: "Sietsfoods", website: "www.Sietsfoods.com", desc: "We run highly targeted Search campaigns to capture high-intent users actively looking for your services.", highlight: "Google Search (Lead Gen)", highlightColor: "text-[#ff8c00]", types: ["google"], metrics: [{ v: "₹350k+", l: "SPEND" }, { v: "₹35", l: "CPL" }, { v: "₹45", l: "CPC" }, { v: "5.20%", l: "CTR" }], imgPlaceholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780221716/665fe400848921f3e8cce2c9_meta-ad_tx3nnd.webp", logo: "🦅", logoBg: "bg-[#1a1a3a]" },
];

export default function ClientResultsSection() {
  const [idx, setIdx] = useState(0);
  const c = clients[idx];
  return (
    <section className="bg-white py-6 sm:py-10 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <div className="w-3 h-12 sm:h-14 bg-[#fcc719]  flex-shrink-0" />
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-[54px] leading-tight">
            Here is <span className="text-[#fcc719]">Clients Results</span> we delivered
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
    
          <div className="w-full lg:flex-1">
            <div className="bg-[#f8f8fc] rounded-3xl  overflow-hidden h-[280px] sm:h-[360px] lg:h-[400px] flex items-center justify-center border-8 border-gray-200 shadow-sm">
             <img src={c.imgPlaceholder} className="w-full h-full object-contain" />
            </div>
          </div>
          {/* Details */}
          <div className="w-full lg:flex-1">
            {c.logo && (
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${c.logoBg} rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0`}>{c.logo}</div>
                <div>
                  <p className="font-bold text-xl sm:text-[26px] text-[#070707]">{c.company}</p>
                  {c.website && <a href="#" className="text-blue-500 text-sm">{c.website}</a>}
                </div>
              </div>
            )}
            {!c.logo && <h3 className="font-bold text-xl sm:text-[28px] text-[#070707] mb-4">{c.company}</h3>}
            <p className="text-[#1f1e1e] text-sm font-semibold sm:text-[19px] leading-relaxed mb-2">
              {c.desc} <span className={`font-bold ${c.highlightColor}`}>{c.highlight}</span>
            </p>
            <div className="mt-4 mb-4">
              <p className="font-bold text-[#070707] text-sm sm:text-[15px] mb-2">Campaign  Type</p>
              <div className="flex gap-3">
                {c.types.includes("meta") && <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">∞</div>}
                {c.types.includes("google") && <div className="w-9 h-9 bg-[#fcc719]/20 rounded-xl flex items-center justify-center font-bold">G</div>}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
              {c.metrics.map(m => (
                <div key={m.l} className="bg-[#FFFBF3] rounded-xl sm:rounded-2xl px-2 sm:px-4 py-3 sm:py-4 border border-[#fcc719]/30">
                  <p className="font-bold text-[#ff8c00] text-base sm:text-[22px] leading-tight">{m.v}</p>
                  <p className="text-[#6f7071] text-[10px] sm:text-[11px] font-semibold tracking-wider mt-1">{m.l}</p>
                </div>
              ))}
            </div>
            <button className=" bg-[#fcc719] px-6 text-[#070707] font-bold text-base sm:text-[17px] py-3.5 sm:py-4 rounded-full hover:bg-[#e6b300] transition-colors">Talk to Our Marketing Expert</button>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0} className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fcc719] rounded-full flex items-center justify-center font-bold text-lg hover:bg-[#e6b300] disabled:opacity-40">←</button>
          <div className="flex gap-2">{clients.map((_, i) => <button key={i} onClick={() => setIdx(i)} className={`h-3 rounded-full transition-all ${i === idx ? "bg-[#fcc719] w-6" : "bg-gray-200 w-3"}`} />)}</div>
          <button onClick={() => setIdx(Math.min(clients.length - 1, idx + 1))} disabled={idx === clients.length - 1} className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fcc719] rounded-full flex items-center justify-center font-bold text-lg hover:bg-[#e6b300] disabled:opacity-40">→</button>
        </div>
      </div>
    </section>
  );
}
