// CreateStrategizeSection.jsx
// IMAGES:
//   - RND card icon (lightbulb with checkmark): src/assets/infgricon01.svg
//   - Strategy card icon (bar chart with sparkles): src/assets/infgricon02.svg
//   - Research card icon (sparkles + fire): src/assets/infgricon03.svg
//   - Launch card icon (layers/diamond): src/assets/a-3d-rendered-icon-of-a-dynamic.svg
//     OR any of the infgricon files
import infgricon01 from "../../assets/icons/DigitalMarketingPortfolio/infgricon01.svg"
import infgricon02 from "../../assets/icons/DigitalMarketingPortfolio/infgricon02.svg"
import infgricon03 from "../../assets/icons/DigitalMarketingPortfolio/infgricon03.svg"
import preficonn1 from "../../assets/icons/DigitalMarketingPortfolio/preficonn1.webp"
const services = [
  {
    id: "rnd",
    title: "RND",
    desc: "We Understand Your Business And Make Full Study",
    iconPlaceholder: "💡",
    iconFile: preficonn1,
  },
  {
    id: "strategy",
    title: "Strategy",
    desc: "After RND We Create Best Ads Strategy For Your Campaigns",
    iconPlaceholder: "📊",
    iconFile: infgricon03,
  },
  {
    id: "research",
    title: "Research",
    desc: "We Research about your competitors ads",
    iconPlaceholder: "✨",
    iconFile: infgricon01,
  },
  {
    id: "launch",
    title: "Launch",
    desc: "After Research we Launch your Campaigns after we got creatives",
    iconPlaceholder: "🚀",
    iconFile: infgricon02,
  },
];

export default function CreateStrategizeSection() {
  return (
    <section className="bg-white py-6 sm:py-10 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-[56px] text-[#070707] leading-tight mb-3">
            Create. Strategize. Scale.
          </h2>
          <p className="text-[#131212] font-semibold text-base sm:text-[18px]">Explore our in-depth services</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {services.map((s) => (
            <div key={s.id} className="bg-[#fcf2dd] rounded-3xl p-5 sm:p-6 border-2 border-[#fcc719]/20 hover:shadow-md transition-shadow duration-200 flex flex-col gap-4">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center text-3xl sm:text-4xl">
                <img src={`${s.iconFile}`} alt={s.title} className="w-18 h-18 object-contain" />
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl sm:text-2xl text-[#070707]">{s.title}</h3>

              {/* Description */}
              <p className="text-[#6f7071] text-sm sm:text-[15px] leading-relaxed flex-1">{s.desc}</p>

              {/* View button */}
              <button
              onClick={() => {
                window.open("/contact", '_blank', 'noopener,noreferrer');
              }}
              className="w-full border-2 border-[#fcc719] text-[#070707] font-semibold text-sm sm:text-[15px] py-3 rounded-full hover:bg-[#fcc719] transition-colors duration-200">
                View
              </button>
            </div>
          ))}
        </div>

        {/* Request a Quote CTA */}
        <div className="flex justify-center">
          <button
           onClick={() => {
                window.open("/contact", '_blank', 'noopener,noreferrer');
              }}
          className="bg-[#fcc719] text-[#070707] font-bold text-base sm:text-[18px] px-10 sm:px-14 py-4 sm:py-5 rounded-full hover:bg-[#e6b300] hover:scale-105 transition-all duration-200 shadow-lg">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
