import {AdymireLogo2} from "@/assets";


const OurStory = () => {
  return (
    <section className="w-full bg-[#fffaf2] py-4 lg:py-6">
      <div className="text-center mb-6 px-4 lg:px-15">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">
          OUR STORY
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-3 rounded" />
      </div>

      <div className="lg:max-w-[50%] max-w-full">
        <h3 className="text-xl lg:text-2xl font-bold mb-3 px-4 lg:px-15">
          Our Journey
        </h3>

        <p className="text-gray-600 text-base lg:text-xl font-semibold w-full px-4 lg:px-15">
          We transform old or dull spaces into modern, efficient,
          and stylish environments with minimal disruption.
        </p>
      </div>

      <div className="w-full h-auto lg:h-115 mx-auto pr-4 sm:pr-15 flex items-center relative mt-6 lg:mt-0">
        <div className="h-[80%] w-full lg:w-[80%]">
          <div className="bg-[#fff0c2] px-4 lg:px-15 lg:pr-60 w-full h-full flex justify-center items-center py-6 lg:py-0">
            <p className="text-[#311804c7] text-base lg:text-2xl font-semibold font-mono leading-relaxed">
              <span className="font-bold text-[#311804c7] text-xl lg:text-3xl">
                At Adymire
              </span>
              , we started with a simple belief — that furniture should be
              more than just functional. It should feel like home.
              From our humble workshop beginnings, we’ve grown into a trusted
              furniture brand known for premium quality, handcrafted design,
              and customer-first service.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex justify-center lg:justify-end h-full aspect-square absolute right-10">
          <div className="h-full w-full rounded-full bg-[#fcfcfc] flex items-center justify-center">
            <img
              src={AdymireLogo2}
              alt="Our Story"
              className="w-full h-full p-5 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
