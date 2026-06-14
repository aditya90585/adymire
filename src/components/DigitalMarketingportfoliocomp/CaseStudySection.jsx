// CaseStudySection.jsx
// IMAGES: client-testpass-CxVJvY8K.svg, client-ivypro-C4Pm4Tyy.svg, client-stellargreen-Bo5LsnzN.svg, client-edvisor-DbUbcZVC.svg

const cases = [
  { id: "testpass", label: "Test Pass", year: "2025", type: "App\nPromotion", sub: "APP INSTALL AT ₹10\nSPENDING ₹20K ONLY", tag: "ONLINE/TEST PLATFORM", bg: "bg-[#a8c5e0]", highlight: "App Install at ₹10", companyBg: "bg-[#d45a8e]", company: "Pet Tech Compney", desc: "How did we decrease CAC by over 50% while driving growth for a leading pet tech company with Google Ads?", imgPlaceholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780222888/WordPress-36-768x402_ddmgxq.webp" },
  { id: "ivypro", label: "Ivy Pro Scool", year: "2025", type: "Search\nAds", sub: "GOT WEBINAR FULL\nWITH 100% SEAT CAPACITY", tag: "DATA & AI TRAINING", bg: "bg-[#b0cce8]", highlight: "100% Webinar Seats", companyBg: "bg-[#d45a8e]", company: "Pet Tech Compney", desc: "How did we decrease CAC by over 50% while driving growth for a leading pet tech company with Google Ads?", imgPlaceholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780222889/WordPress-6-768x402_xzo1au.webp" },
];

export default function CaseStudySection() {
  return (
    <section className="bg-[#ffecb5] py-6 sm:py-10 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-3 h-12 sm:h-14 bg-[#ff8c00]  flex-shrink-0 mt-1" />
            <h2 className="font-bold text-3xl sm:text-5xl lg:text-[58px] leading-tight">
              <span className="text-[#ff8c00]">Brands</span> <span className="text-[#ff6600]">Case</span> <span className="text-[#DE0933]">study</span> <span className="text-[#070707]">That Inspired You</span>
            </h2>
          </div>
          <p className="text-[#131212] font-semibold text-base sm:text-[18px] ml-5">See how my campaigns outperformed major competitors across multiple industries and countries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {cases.map(cs => (
            <div key={cs.id} className="bg-white overflow-hidden border-8 border-white shadow-sm hover:shadow-md transition-all duration-200">
              <div className={`${cs.bg} w-full  relative`}>
                <img src={`${cs.imgPlaceholder}`} className="w-full h-full object-cover" />

              </div>
              <div className="px-4 sm:px-5 pt-10 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-x-2">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${cs.companyBg} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>m</div>
                        <p className="font-bold text-sm sm:text-[20px] text-[#070707]">{cs.company}</p>
                      </div>
                      <p className="text-[#19191a] pl-14 font-semibold text-[12px] sm:text-[14px] leading-snug mt-0.5">{cs.desc}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-[#fcc719]/20 rounded-lg flex items-center justify-center font-bold text-sm">G</div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
