import React from "react";
import DigitalmarketingToolsIcons4 from '@/assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons4.svg'
import DigitalmarketingToolsIcons2 from '@/assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons2.svg'
import DigitalmarketingToolsIcons14 from '@/assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons14.svg'
import DigitalmarketingToolsIcons17 from '@/assets/icons/DigitalmarketingToolsIcons/DigitalmarketingToolsIcons17.svg'

const projects = [
  {
    id: 1,
    title: "Sietsfoods",
    website: "www.Sietsfoods.com",
    category: "Google Search (Lead Gen)",
    description:
      "We run highly targeted Search campaigns to capture high-intent users actively looking for your services. By using focused keywords and persuasive ad copies, we drive quality traffic to optimized landing pages.",
    metrics: [
      { label: "SPEND", value: "₹350k+" },
      { label: "CPL", value: "₹35" },
      { label: "CPC", value: "₹45" },
      { label: "CTR", value: "5.20%" },
    ],
  },
  // {
  //   id: 2,
  //   title: "Brand Campaign",
  //   website: "www.brand.com",
  //   category: "Performance Marketing",
  //   description:
  //     "Strategic ad optimization with conversion-focused creatives and audience segmentation for maximum ROI and scalable growth.",
  //   metrics: [
  //     { label: "SPEND", value: "₹200k+" },
  //     { label: "ROAS", value: "4.5x" },
  //     { label: "CTR", value: "6.8%" },
  //     { label: "CPA", value: "₹90" },
  //   ],
  // },
];

const logos = [
DigitalmarketingToolsIcons14,

DigitalmarketingToolsIcons2 ,
DigitalmarketingToolsIcons4,
];

export default function GoogleAdsProjects() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="mb-12 flex items-center gap-4">
        <div className="h-14 w-3 bg-yellow-500 rounded-full" />
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Google Ads <span className="font-normal">Projects</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-[32px] bg-[#fdfdfd] p-6 md:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              {/* Left Content */}
              <div>
                {/* Top */}
                <div className="flex items-start gap-5 mb-8">
                  
                  {/* Logo Image */}
                  <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-yellow-400 shrink-0 bg-gray-100 flex items-center justify-center">
                    {/* ADD YOUR LOGO IMAGE HERE */}
                    {/* <img src="/your-logo.png" alt="" className="h-full w-full object-cover" /> */}
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-black">
                      {project.title}
                    </h3>

                    <a
                      href="/"
                      className="text-blue-500 text-xl md:text-3xl underline break-all"
                    >
                      {project.website}
                    </a>
                  </div>
                </div>

                {/* Details */}
                <div className="mb-6">
                  <h4 className="text-2xl font-semibold mb-3">
                    Details:{" "}
                    <span className="text-orange-500 font-medium">
                      {project.category}
                    </span>
                  </h4>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    "{project.description}"
                  </p>
                </div>

                {/* Metrics */}
                <div className="mb-8">
                  <h4 className="text-3xl font-bold mb-5">Key Metrics:</h4>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-[#f6ecd2] rounded-2xl p-4 text-center"
                      >
                        <h5 className="text-3xl font-bold text-orange-500">
                          {metric.value}
                        </h5>

                        <p className="text-sm font-semibold mt-2 text-black uppercase">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Logos */}
                <div className="flex flex-wrap items-center gap-5">
                  {logos.map((item, index) => (
                    <div
                      key={index}
                      className="h-20 w-20 rounded-2xl border border-gray-200 bg-white flex items-center justify-center"
                    >
                    
                       <img src={item} alt="logo" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col items-center">
                
                {/* Main Image */}
                <div className="w-full rounded-3xl overflow-hidden border border-gray-200 bg-gray-100 aspect-[16/10]">
                  {/* ADD MAIN PROJECT IMAGE HERE */}
                  {/* <img src="/project-image.png" alt="" className="w-full h-full object-cover" /> */}
                </div>

                {/* Slider Dots */}
                <div className="flex items-center gap-4 mt-8">
                  <button className="h-14 w-14 rounded-full bg-[#f6d88d] text-3xl flex items-center justify-center">
                    ←
                  </button>

                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-gray-300" />
                    <span className="h-3 w-3 rounded-full bg-gray-300" />
                    <span className="h-3 w-3 rounded-full bg-gray-300" />
                    <span className="h-3 w-3 rounded-full bg-gray-300" />
                  </div>

                  <button className="h-14 w-14 rounded-full bg-[#f6d88d] text-3xl flex items-center justify-center">
                    →
                  </button>
                </div>

                {/* CTA */}
                <button className="mt-8 bg-[#f6e4a9] hover:bg-[#f3db8d] transition-all px-12 py-4 rounded-full text-2xl font-semibold">
                  See Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}