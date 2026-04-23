import UIUXFirst from "@/assets/illustrations/UIUXprocessImages/UIUXFirst.webp"

const UIUXHero = () => {
  return (
    <section className="bg-linear-to-b from-[#fcfbfb] to-[#FFEEC6] py-20 pt-20 lg:pt-30">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className=" h-full">
          <h2 className="text-5xl font-bold text-black mb-6">
            UX & UI <span className="font-medium">Design Process</span>
          </h2>

          <div className="text-gray-500 text-2xl   max-w-md leading-relaxed">
            <div className="font-semibold text-gray-700 ">The next big thing is the one that</div>
            makes the last big thing usable
          </div>

          <h1 className=" text-[80px] md:text-[120px] font-bold text-white/80 pointer-events-none select-none">
            Lets See
          </h1>
        </div>

        <div className=" flex md:justify-end justify-center">
          <div className="bg-[#F3EAD2] w-[75%] h-full rounded-3xl shadow-[1px_1px_20px_#F3EAD2]">
            <img
              src={UIUXFirst}
              alt="UX Process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default UIUXHero