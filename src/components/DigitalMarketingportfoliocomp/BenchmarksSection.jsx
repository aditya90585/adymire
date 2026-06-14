// BenchmarksSection.jsx
// IMAGES: The 4 benchmark chart screenshots (bar charts)
//   - Average Click-Through Rate (blue bars): src/assets/WordPress-36-768x402.svg
//   - Average Cost Per Lead (pink bars): src/assets/WordPress-6-768x402.svg
//   - Average Click-Through Rate part 2 (blue bars continued)
//   - Average Cost Per Click (yellow bars): src/assets/strategy-roas-BaKmEN2B.svg  OR  NoPath - Copy (22).svg
//   - Average Conversion Rate (red bars): src/assets/NoPath - Copy (5).svg
//   All chart images come from the WordStream 2025 Search Advertising Benchmarks.
//
// NOTE: These are full screenshot images. Just drop them into a 2-column grid.
// The dark/black background is part of this section's design.

const charts = [
  {
    id: "ctr",
    title: "Average Click-Through Rate",
    color: "bg-blue-600",
    colorBar: "#3b82f6",
    headerBg: "bg-blue-600",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781434793/benchmark-ctr-Bqzmwi6q_pvo1lp.jpg",
    imgPlaceholder: "WordPress-36-768x402.svg\n(Blue bars — CTR by industry)",
  },
  {
    id: "cpl",
    title: "Average Cost Per Lead",
    color: "bg-pink-500",
    headerBg: "bg-pink-500",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781434793/benchmark-cpl-CloRY4zA_xrlers.jpg",
    imgPlaceholder: "WordPress-6-768x402.svg\n(Pink/magenta bars — CPL by industry)",
  },
  {
    id: "cpc",
    title: "Average Cost Per Click",
    color: "bg-[#fcc719]",
    headerBg: "bg-[#ff8c00]",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781434795/benchmark-cpc-CzkDxK0g_yby24k.jpg",
    imgPlaceholder: "NoPath - Copy (22).svg\n(Yellow/orange bars — CPC by industry)",
  },
  {
    id: "cvr",
    title: "Average Conversion Rate",
    color: "bg-red-500",
    headerBg: "bg-red-500",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1781434793/benchmark-conversion-CyRAGnYe_okpznd.jpg",
    imgPlaceholder: "NoPath - Copy (5).svg\n(Red bars — CVR by industry)",
  },
];

export default function BenchmarksSection() {
  return (
    <section className="bg-[#0a0a0a] py-14 sm:py-20 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-[60px] leading-tight mb-5 text-white">
            Industry Specific{" "}
            <span className="text-[#fcc719]">Benchmarks in US 2026</span>
          </h2>
          <p className="text-gray-300 font-semibold text-base sm:text-[22px] max-w-3xl mx-auto leading-relaxed">
            According to WordStream 2025 Search Advertising Benchmarks, the average CPC on Google Ads across
            all industries is approximately{" "}
            <span className="text-[#fcc719] font-bold">$5.26,</span>{" "}
            while the average CPL is around{" "}
            <span className="text-[#fcc719] font-bold">$70.11.</span>
          </p>
          <p className="text-white font-semibold text-base sm:text-[22px] mt-4">
            On average, businesses spend between{" "}
            <span className="text-[#fcc719] font-bold">$1,000</span> and{" "}
            <span className="text-[#fcc719] font-bold">$10,000</span>{" "}
            per month on Google Ads campaigns in US.
          </p>
        </div>

        {/* Charts 2×2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {charts.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl overflow-hidden shadow-xl">
              {/* Chart header bar */}
              {/* <div className={`${c.headerBg} px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3`}>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-xs">
                  {c.id === "ctr" ? "📊" : c.id === "cpl" ? "💰" : c.id === "cpc" ? "🖱" : "🔄"}
                </div>
                <div>
                  <p className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-wider">SEARCH ADVERTISING BENCHMARKS 2025</p>
                  <p className="text-white font-bold text-sm sm:text-[17px]">{c.title}</p>
                </div>
              </div> */}

              {/* Chart image area */}
              <div className="w-full  flex items-center justify-center bg-white">
                <img src={c.imgSrc} alt={c.title} className="w-full h-full object-contain p-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Get Full Pricing CTA */}
        <div className="flex justify-center">
          <button onClick={() => {
            window.open("/pricing-plans", '_blank', 'noopener,noreferrer');
          }} className="bg-[#fcc719] text-[#070707] font-bold text-base sm:text-[18px] px-10 sm:px-14 py-4 sm:py-5 rounded-full hover:bg-[#e6b300] hover:scale-105 transition-all duration-200 shadow-lg">
            Get Full Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
