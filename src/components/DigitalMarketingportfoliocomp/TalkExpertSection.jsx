// TalkExpertSection.jsx
// IMAGES:
//   - Tool icons row: Google (G icon), Slack, ChatGPT, WhatsApp, Power BI, Notion
//     → src/assets/google-analytics.svg, and any other tool logos you have
//   - Trusted avatars (2 faces): src/assets/Group 2683.svg  OR  about52.svg
//   - Right side illustration (duck/robot in yellow circles with ADS, HTML5, analytics icons):
//     src/assets/donotdo-img.svg  OR  infgricon01.svg / infgricon02.svg / infgricon03.svg

const tools = [
  { label: "G", bg: "bg-[#fcc719]", title: "Google" },
  { label: "S", bg: "bg-purple-600", title: "Slack" },
  { label: "AI", bg: "bg-green-500", title: "ChatGPT" },
  { label: "W", bg: "bg-green-400", title: "WhatsApp" },
  { label: "📊", bg: "bg-yellow-500", title: "Power BI" },
  { label: "N", bg: "bg-gray-800", title: "Notion" },
];

export default function TalkExpertSection() {
  return (
    <section className="bg-[#FFFBF3] py-10 sm:py-14 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#FFF8E7] border border-[#fcc719]/30 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-0">

            {/* Left content */}
            <div className="flex-1 p-7 sm:p-10 lg:p-14">
              <p className="font-bold text-[#070707] text-lg sm:text-xl mb-5">Talk Our Expert</p>

              {/* Tool icons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                {tools.map((t) => (
                  <div
                    key={t.title}
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${t.bg} rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-sm`}
                    title={t.title}
                  >
                    {/* Replace with: <img src={`/src/assets/${t.title.toLowerCase()}-icon.svg`} className="w-6 h-6 object-contain" /> */}
                    {t.label}
                  </div>
                ))}
              </div>

              {/* Trusted badge */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="flex -space-x-2">
                  {/* Replace with: <img src="/src/assets/Group 2683.svg" className="h-10" /> */}
                  {[1, 2].map((i) => (
                    <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs">👤</div>
                  ))}
                </div>
                <p className="text-[#3a3a3a] text-sm sm:text-[15px] font-medium">
                  Trusted by <span className="text-[#fcc719] font-bold">200+</span> businesses across{" "}
                  <span className="font-bold text-[#070707]">15</span> countries
                </p>
              </div>

              {/* CTA Button */}
              <button className="border-2 border-[#ff8c00] text-[#070707] font-bold text-sm sm:text-[16px] px-7 sm:px-10 py-3.5 sm:py-4 rounded-full hover:bg-[#ff8c00] hover:text-white transition-all duration-200"
                style={{ background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #ff8c00, #fcc719, #3a3a3a) border-box", border: "2px solid transparent" }}>
                Get Free Consultation
              </button>
            </div>

            {/* Right — illustration */}
            <div className="flex-shrink-0 w-full lg:w-[420px] h-[260px] sm:h-[320px] lg:h-[340px] flex items-center justify-center relative overflow-hidden">
              {/*
                Replace with:
                <img src="/src/assets/donotdo-img.svg" alt="Expert Illustration" className="w-full h-full object-contain" />
              */}
              <div className="relative flex items-center justify-center w-[260px] sm:w-[300px] h-[260px] sm:h-[300px]">
                {/* Outer circle */}
                <div className="absolute w-full h-full rounded-full bg-[#fcc719]/20" />
                <div className="absolute w-[75%] h-[75%] rounded-full bg-[#fcc719]/30" />
                {/* Center duck/robot icon */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center text-4xl sm:text-5xl shadow-lg">
                  🦆
                  {/* Replace: <img src="/src/assets/donotdo-img.svg" className="w-full h-full object-contain" /> */}
                </div>
                {/* Floating icons */}
                <div className="absolute top-[10%] right-[10%] w-10 h-10 sm:w-12 sm:h-12 bg-[#070707] rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-md">
                  {/* infgricon / HTML icon */}
                  {"</>"}
                </div>
                <div className="absolute bottom-[15%] left-[5%] w-10 h-10 sm:w-12 sm:h-12 bg-[#ff8c00] rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-md">
                  ADS
                </div>
                <div className="absolute bottom-[20%] right-[5%] w-9 h-9 sm:w-11 sm:h-11 bg-[#fcc719] rounded-xl flex items-center justify-center text-white font-bold text-base shadow-md">
                  📈
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
