import { Innovation ,Quality,Customer,Transparency} from "@/assets";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { staggerFadeInOnScroll } from "../../animations/stagger";

const VisionValues = () => {
    const vvcontref = useRef()
    useGSAP(() => {
      staggerFadeInOnScroll(".vv-trigger-ani",{trigger:vvcontref.current,y:70,stagger:0.3,delay:0.8})
    },{scope:vvcontref})
  const values = [
    {
      title: "Innovation",
      desc: "We design modern solutions that elevate everyday living with creativity.",
      icon:Innovation
    },
    {
      title: "Quality",
      desc: "Premium materials and skilled craftsmanship ensure long-lasting, reliable results.",
      icon:Quality,
    },
    {
      title: "Transparency",
      desc: "Clear communication and honest processes build trust throughout every project.",
      icon:Transparency,
    },
    {
      title: "Customer-First",
      desc: "Your needs guide every decision to deliver spaces you truly love.",
      icon:Customer,
    },
  ];

  return (
    <section ref={vvcontref} className="w-full bg-[#fffaf2] py-4">
      <div className="text-center mb-22">
        <h2 className="text-3xl font-bold text-gray-900 tracking-wider vv-trigger-ani">
          Our Vision & Values
        </h2>
        <div className="w-38 h-0.75 bg-yellow-400 mx-auto mt-2 rounded" />
        <p className="mt-4 text-gray-500 font-semibold text-xl tracking-wider vv-trigger-ani">
          What We Stand For
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((item, index) => (
          <div
            key={index}
            className="vv-trigger-ani relative mt-15 sm:mt-0 bg-white rounded-2xl border border-gray-200 pt-20 pb-10 px-6 text-center shadow-sm"
          >
            <div className="absolute -top-15 left-1/2 -translate-x-1/2">
              <div className="w-30 h-30 p-4 rounded-full bg-[#fff0c2] flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full aspect-square object-contain animate-pulse"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-500 text-base font-semibold">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionValues;
