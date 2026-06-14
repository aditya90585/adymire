// StatsSection.jsx
// IMAGES: a-3d-rendered-icon-of-a-dynamic.svg (runner), 3d-gold-medal-icon-perfect-for-s.svg (medal)
// 665fe400848921f3e8cce2c9_meta-ad.svg (Meta logo center)
import GoldMedal3d from "../../assets/icons/DigitalMarketingPortfolio/GoldMedal3d.webp"
import RenderIcon3d from "../../assets/icons/DigitalMarketingPortfolio/RenderIcon3d.webp"
const stats = [
  { value: "25+", label: "CLIENTS SERVED" },
  { value: "$40M+", label: "REVENUE GENERATED" },
  { value: "25+", label: "COUNTRIES" },
  { value: "15+", label: "INDUSTRIES COVERED" },
];

const highlights = [
  { iconPlaceholder: RenderIcon3d, iconBg: "bg-[#FFF0C4]", value: "$4M+", label: "Ad Spend Managed" },
  { iconPlaceholder: GoldMedal3d, iconBg: "bg-[#FFF0C4]", value: "5+ Years", label: "Experience" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#f7f7f7] py-10">
      <div className="px-5 sm:px-8 lg:px-20 pb-10 sm:pb-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row md:items-start items-center gap-10 lg:gap-16">

          <div className="flex-1 w-full">
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-[68px] leading-[1.0] text-[#070707] mb-5">
              Better <span className="text-[#ff8c00]">ROAS</span>
              <br />at Less <span className="text-[#fcc719]">Ad Spend!</span>
            </h2>
            <p className="text-[#5c5b5b] font-semibold text-base md:text-2xl leading-relaxed mb-6 max-w-2xl">
              Stop wasting money. Hire a certified Google Ads expert with{" "}
              <span className="text-[#ff8c00] font-semibold">$325K+ ad spend</span>{" "}
              managed in the last 5 years. Get 15 days moneyback guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${h.iconBg} p-1 rounded-full flex items-center justify-center text-2xl flex-shrink-0`}>
                     <img src={h.iconPlaceholder} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-bold text-[#ff8c00] text-xl leading-tight">{h.value}</p>
                    <p className="text-[#3a3a3a] text-sm sm:text-[15px]">{h.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="flex items-center justify-center">
            <div className="relative w-[340px] h-[340px]">
              {/* Top Dotted Arc */}
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => {
                  const radius = 155;
                  const totalDots = 15;
                  const startAngle = 190;
                  const endAngle = 350;
                  const angle =
                    startAngle +
                    ((endAngle - startAngle) / (totalDots - 1)) * i;

                  const x = 170 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 170 + radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <span
                      key={i}
                      className="absolute h-5 w-5 rounded-full bg-[#F5C20B]"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}
              </div>
              {/* Bottom Black Arc */}
              <div
                className="absolute inset-0 rounded-full border-[34px] border-black"
                style={{
                  clipPath: "inset(48% 0 0 0)",
                }}
              />

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Meta Logo */}
                <svg
                  width="70"
                  height="40"
                  viewBox="0 0 70 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20C12 10 18 4 24 4C30 4 35 20 35 20C35 20 40 4 46 4C52 4 58 10 58 20C58 30 52 36 46 36C40 36 35 20 35 20C35 20 30 36 24 36C18 36 12 30 12 20Z"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h3 className="mt-4 text-[18px] font-medium text-black">
                  Meta
                </h3>

                <h3 className="text-[18px] font-medium text-black">
                  Ads
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className=" py-4 sm:py-4 px-5 sm:px-8 lg:px-20">
        <div className="md:max-w-4xl max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl px-4 sm:px-6 py-5 sm:py-6 shadow-sm border border-[#f0ead8]">
              <p className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-[#ff8c00] leading-tight">{s.value}</p>
              <p className="text-[#6f7071] font-semibold text-[11px] sm:text-[13px] tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
