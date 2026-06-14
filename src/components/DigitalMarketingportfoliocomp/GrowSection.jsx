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
              {/*
                Replace with:
                <img src="/src/assets/google-analytics.svg" alt="Growth Chart" className="w-full h-full object-contain p-4" />
              */}
              {/* Mimicking the line chart */}
              <div className="w-full h-full p-3 sm:p-4 flex flex-col justify-between">
                <div className="flex-1 relative">
                  <svg viewBox="0 0 500 160" className="w-full h-full" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0,40,80,120,160].map(y=>(
                      <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#f0f0f0" strokeWidth="1"/>
                    ))}
                    {/* Chart line — spiky then sharp rise at end */}
                    <polyline
                      points="0,140 30,130 60,125 90,135 120,120 150,128 180,115 210,122 240,110 270,118 300,105 330,112 360,100 390,108 420,80 450,50 480,20 500,10"
                      fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinejoin="round"
                    />
                    {/* Fill gradient under line */}
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15"/>
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.01"/>
                      </linearGradient>
                    </defs>
                    <polygon
                      points="0,140 30,130 60,125 90,135 120,120 150,128 180,115 210,122 240,110 270,118 300,105 330,112 360,100 390,108 420,80 450,50 480,20 500,10 500,160 0,160"
                      fill="url(#chartGrad)"
                    />
                    {/* Green dot at peak */}
                    <circle cx="490" cy="12" r="7" fill="#22c55e"/>
                    <circle cx="490" cy="12" r="12" fill="#22c55e" fillOpacity="0.2"/>
                  </svg>
                </div>
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
