
const stats = [
  { value: "25+", label: "CLIENTS SERVED" },
  { value: "$40M+", label: "REVENUE GENERATED" },
  { value: "25+", label: "COUNTRIES" },
  { value: "15+", label: "INDUSTRIES COVERED" },
];

export default function AdsSpendSection() {
  return (
    <section className="bg-[#FFFBF3] py-10 sm:py-14 px-5 sm:px-8 lg:px-30">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border-8 border-[#fff0c4] shadow-sm px-6 sm:px-10 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <p className="text-[#3a3a3a] font-semibold text-2xl sm:text-[34px]">Total</p>
            <p className="text-[#ff8c00] font-bold text-3xl sm:text-[40px] leading-tight">Ads Spend</p>
          </div>
          <p className="font-bold text-3xl sm:text-4xl lg:text-[58px] text-[#070707] leading-tight">$556k+ | ₹10Cr+</p>
        </div>

        <div className="rounded-3xl overflow-hidden mb-10 sm:mb-12 shadow-md">
          <img src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1781434350/1780131012303_ovame6.png" alt="15 Days Free Trial" className="w-full h-auto object-cover" />
        </div>
        <div className="bg-[#FFFBF3] py-8 sm:py-10 px-5 sm:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl px-4 sm:px-6 py-5 sm:py-6 shadow-sm  shadow-[#f0ead8]">
                <p className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-[#ff8c00] leading-tight">{s.value}</p>
                <p className="text-[#6f7071] font-semibold text-[11px] sm:text-[13px] tracking-widest uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
