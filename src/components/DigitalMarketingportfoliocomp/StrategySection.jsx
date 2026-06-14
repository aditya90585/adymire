
const strategies = [
  { id: "testpass", label: "Test Pass", year: "2025", type: "App\nPromoti...", sub: "APP INSTALL AT ₹10\nSPENDING ₹20K ONLY", tag: "ONLINE/TEST PLATFORM", bg: "bg-[#a8c5e0]", highlight: "App Install at ₹10", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780208807/client-testpass-CxVJvY8K_lmlwbx.webp" },
  { id: "ivypro", label: "Ivy Pro Scool", year: "2025", type: "Search\nAds", sub: "GOT WEBINAR FULL\nWITH 100% SEAT CAPACITY", tag: "DATA & AI TRAINING", bg: "bg-[#b0cce8]", highlight: "100% Webinar Seats", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780208810/client-ivypro-C4Pm4Tyy_bw1o5h.webp" },
  { id: "stellar", label: "Stellar Green", year: "2026", type: "Search\nAds", sub: "CTC DOWN FROM ₹45\nTO ₹12 WITHIN 2 MONTHS", tag: "SOLAR INSTALLATION COMPANY", bg: "bg-[#b5e0b8]", highlight: "CTC Down ₹45 to ₹12", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780208811/client-stellargreen-Bo5LsnzN_uq7qpr.webp" },
  { id: "edvisor", label: "Edvisor Overseas", year: "2024", type: "P Max\nCampaig...", sub: "INCREASE FOOTFALL\nBY 250% IN ONE QUATER", tag: "EDUCATION COUNSELLING", bg: "bg-[#5b8fc9]", highlight: "250% Footfall Increase", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780208809/client-edvisor-DbUbcZVC_q4wkfn.webp" },
];

export default function StrategySection() {
  return (
    <section className="bg-[#FFFBF3] py-6 sm:py-10 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-[58px] leading-tight">
            <span className="text-[#ff8c00]">Our 15-Day</span> <span className="text-[#ff6600]">Strategy</span> <span className="text-[#070707]">That Delivers Results</span>
          </h2>
          <p className="text-[#0f0f0f] font-semibold py-2 text-base sm:text-[20px] mt-4 max-w-2xl mx-auto">See how I transform ad campaigns in just 15 days — with a full moneyback guarantee if you're not satisfied.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">
          {strategies.map(s => (
            <div key={s.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-200">
              <div className={` w-full  relative`}>
                <img src={`${s.placeholder}`} className="w-full h-full object-contain" />
              </div>
              <div className="px-4 sm:px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span className="font-semibold text-[#070707] text-sm sm:text-[15px]">{s.highlight}</span>
                </div>
                <button className="bg-[#fcc719] text-[#070707] font-bold text-sm px-4 sm:px-5 py-2 rounded-full hover:bg-[#e6b300] transition-colors">See How</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
