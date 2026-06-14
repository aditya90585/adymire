// AboutSection.jsx
// IMAGES:
//   - 3D brain/fluid sculpture (left, orange-to-blue gradient): src/assets/image (7).svg
//     OR src/assets/infgricon01.svg (the round abstract AI brain blob)
//   - Yellow blob decoration (bottom left): CSS or src/assets/images (3).svg
//   - Lightbulb icon (inside card): src/assets/mistake-3d-icon-png-dow.svg
//     OR src/assets/infgricon02.svg
import mistake3dIcon from "../../assets/icons/DigitalMarketingPortfolio/mistake3dIcon.webp"
const tags = [
  "Customer Personas",
  "AI Powerd Market Reserch",
  "Sales Channel Strategies",
  "Contect & SEO Optimization",
  "Smart Analytics",
  "Performance Tracking",
  "Customer Personas",
  "AI Powerd Market Reserch",
  "Sales Channel Strategies",
];

export default function AboutSection() {
  return (
    <section className="bg-white py-2 sm:py-4 overflow-visible">
      <div className="max-w-screen mx-auto">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start pb-10   sm:pb-16 px-2 sm:px-16 ">
          <div className="flex-1">
            <h2 className="font-semibold text-4xl sm:text-5xl lg:text-[48px] leading-tight text-[#070707]">
              Building Quality{" "}
              <span className="text-[#ff8c00]">UI Solutions</span>{" "}
              for a Smarter Future
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-[#1b1b1b] font-semibold text-base sm:text-[20px] leading-relaxed">
              The world is marching forward and considering autonomous growth. At{" "}
              <span className="text-[#ff8c00] font-semibold">Graphio</span>, we don't just use AI in our
              operations; we tailor its usability for customers. Our AI solutions are designed for everyone,
              adapting seamlessly to any industry's unique needs. No tech expertise is required, just a vision,
              and we'll handle the rest.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 items-center relative rounded-3xl overflow-visible ">

          <div className="hidden  lg:flex -left-40 w-full overflow-visible p-15 lg:w-[600px] h-[280px] sm:h-[340px] lg:h-[600px] bg-linear-to-b   from-[#ffeecd] to-[#fcf9f3] rounded-full relative  items-center justify-center">
            <div className="absolute z-20 bottom-10 right-[45px] w-[20px] sm:w-[100px] h-[220px] sm:h-[100px] bg-[#fff0d2]  rounded-full" />
            <div className="absolute z-20 top-12 right-[50px] w-[20px] sm:w-[100px] h-[220px] sm:h-[100px] bg-[#fff0d2]  rounded-full" />
            <img src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1780227442/image_7_s752gn.webp" alt="AI Brain" className="relative z-10 w-full h-full object-contain " />
          </div>

          {/* Right content */}
          <div className="flex-1 p-6 sm:p-10 lg:p-14 static lg:absolute  sm:left-110">
            <p className="text-[#3a3a3a] font-semibold text-sm sm:text-[20px] mb-2">Tailored As Per Business Needs</p>
            <h3 className="font-bold text-3xl sm:text-4xl lg:text-[46px] leading-tight mb-6">
              <span className="text-[#fcc719]">Best Digital Marketing</span>{" "}
              <span className="text-[#8b4513]">Company</span>
            </h3>

            <div className="bg-[#ffc82d]/50 static lg:relative -left-30 rounded-full flex items-start justify-center gap-4 mb-6 sm:mb-8">
              <div className="w-20 h-20 sm:w-30 sm:h-30 p-4 bg-[#fff0d2] rounded-full flex items-center justify-center flex-shrink-0 text-2xl shadow-sm">
                <img src={mistake3dIcon} className="w-full h-full object-cover" />
                
              </div>
              <p className="text-[#161616]  my-auto font-semibold text-sm sm:text-[20px] leading-relaxed">
                Accelerate market entry and maximize visibility through tailored, AI - powered GTM and digital marketing strategies.
              </p>
            </div>

        
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tags.map((tag, i) => (
                <span key={i} className="bg-linear-to-r   from-[#ffeecd] to-[#fcf9f3] text-[#1a1919] font-medium text-xs sm:text-lg px-3 sm:px-4 py-3 rounded-full shadow-sm hover:bg-[#fcc719]/10 transition-colors ">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
