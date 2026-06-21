// GrowSection.jsx
// IMAGES:
//   - Analytics/growth chart screenshot (top right): src/assets/google-analytics.svg
//     (white card with blue/purple line chart showing growth spike at end)
//   - Yellow blob shape (left behind text): CSS or src/assets/images (3).svg (yellow blob)
//   - Small yellow blob (bottom right of chart): CSS

export default function GrowSection() {
  return (
    <section className="bg-white py-10 sm:py-16 px-5 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="flex-1 relative">
            {/* Yellow blob behind text */}
            <div className="absolute -top-4 -left-4 w-[140px] sm:w-[180px] h-[120px] sm:h-[160px] bg-[#fcc719] rounded-[50%_30%_60%_40%/40%_50%_60%_50%] -z-10 opacity-90" />

            <p className="font-bold text-[#3a3a3a] text-xs sm:text-sm tracking-widest uppercase mb-2 relative z-10">
              THE EARLIER YOU START, THE
            </p>
            <h2 className="font-bold text-[#070707] relative z-10" style={{ fontSize: "clamp(52px, 8vw, 96px)", lineHeight: 1.05 }}>
              Bigger you<br />grow.
            </h2>
          </div>

          {/* Right — growth chart card */}
          <div className="flex-1 relative flex justify-center lg:justify-end">
            {/* Chart card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 w-full max-w-[480px] sm:max-w-[560px] h-[200px] sm:h-[240px] lg:h-[220px] overflow-hidden relative">


              <img loading="lazy" src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1782022472/growthGraph_dwb4vy.svg" alt="Growth Chart" className="w-full h-full object-contain p-4" />

              {/* Mimicking the line chart */}
              <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between">
                {/* <p className="text-gray-400 text-[10px] text-center mt-1">📁 Replace: google-analytics.svg (growth line chart)</p> */}
              </div>

              {/* Yellow blob bottom-right of card */}
              <div className="absolute bottom-[-20px] right-[-10px] w-[80px] sm:w-[100px] h-[60px] sm:h-[80px] bg-[#fcc719] rounded-[50%_30%_60%_40%/40%_50%_60%_50%] opacity-80 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
