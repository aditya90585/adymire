// GetInTouchSection.jsx
// IMAGES:
//   - Design/creative tool illustration (right side, dark tablet with sparkles + photo/mountain):
//     src/assets/mistake-3d-icon-png-dow.svg  OR  infgricon02.svg
//     (Illustrated tablet/device with orange sparkles, a photo icon, and design elements)

export default function GetInTouchSection() {
  return (
    <section className="bg-white py-6 sm:py-10 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-[50px] leading-tight text-[#070707]">
            We are Excited to Be a Part of Your
          </h2>
          <p className="text-[#ff8c00] font-bold text-3xl sm:text-4xl lg:text-[35px] mt-1">Next Big Project!</p>
        </div>

        {/* Yellow card */}
        <div className="bg-[#ffd356] rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-0 min-h-[320px] sm:min-h-[380px]">

            {/* Left content */}
            <div className="flex-1 p-8 sm:p-10 lg:p-14">
              <p className="font-bold text-[#111111] text-sm sm:text-[20px] tracking-widest uppercase mb-3">
                LET'S WORK TOGETHER
              </p>
              <h3 className="font-bold text-[#070707] text-5xl sm:text-6xl lg:text-[72px] leading-tight mb-6 sm:mb-8">
                Get in touch.
              </h3>
              <p className="text-[#1b1b1b] font-semibold text-base sm:text-[22px] leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Have a clear vision in mind? Fantastic.<br />
                Need help bringing it to life? We've got you covered.
              </p>
              <button  onClick={() => {
                window.open("/contact", '_blank', 'noopener,noreferrer');
              }} className="bg-white text-[#070707] font-black text-base sm:text-[18px] px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-[#070707] hover:text-white transition-all duration-200 shadow-lg tracking-wide">
                BOOK A CALL NOW
              </button>
            </div>

            {/* Right — illustration */}
            <div className="flex-shrink-0 w-full lg:w-[50%] h-[240px] sm:h-[300px] lg:h-full flex items-center justify-center relative overflow-hidden">
         
                <img
                  src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1780244911/serv-gr-2x_m7sfz8.webp"
                  alt="Creative Design"
                  className="w-full h-auto object-contain"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
