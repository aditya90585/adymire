
const cards = [
  { id: "ai", title: "AI Marketing Campaign", desc: "Leverage AI to supercharge your campaigns with smart targeting and automated optimization.", bg: "bg-[#fcc719]", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780223645/meta-ads-formats.png_hwwjnj.webp" },
  { id: "roas", title: "ROAS Optimization", desc: "High ROI, Low CPA — smart optimization strategies that maximize every dollar spent.", bg: "bg-[#F5F0E8]", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780223644/strategy-remarketing-BmH12VgI_einzak.webp" },
  { id: "remarketing", title: "Remarketing Strategies", desc: "Reconnect with smart retargeting to re-engage visitors who didn't convert the first time.", bg: "bg-[#fcc719]", placeholder: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780223642/1oEfMFNFIsTmw0JSSwdiIAQ_sfgu0n.webp" },
];

export default function AISection() {
  return (
    <section className="bg-white py-6 sm:py-10 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-4xl sm:text-5xl lg:text-[64px] leading-tight text-center mb-10 sm:mb-14">
          <span className="text-[#fcc719]">AI Came in 2026,</span> <span className="text-[#070707]">How to Use It?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map(card => (
            <div key={card.id} className="bg-white p-1  rounded-3xl border border-gray-600 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className={`${card.bg} rounded-2xl w-full flex items-center justify-center`}>
                <img src={`${card.placeholder}`} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-bold text-lg sm:text-[22px] text-[#070707] mb-3">{card.title}</h3>
                <p className="text-[#3b3b3b] font-semibold text-sm sm:text-[15px] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
