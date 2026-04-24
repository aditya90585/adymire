import CalcyIcon from '@/assets/icons/StartupsIcons/CalcyIcon.svg'
import OrbitBrowsIcon from '@/assets/icons/StartupsIcons/OrbitBrowsIcon.svg'
import AdscyIcon from "@/assets/icons/StartupsIcons/AdscyIcon.webp";
import GiglerIcon from "@/assets/icons/StartupsIcons/GiglerIcon.webp";
import SpaceIcon from "@/assets/icons/StartupsIcons/SpaceIcon.webp";

const OurStartups = () => {
  const startups = [
  {
    name: "Adscy.io",
    icon: AdscyIcon,
  },
  {
    name: "Calcy.ai",
    icon: CalcyIcon,
  },
  {
    name: "Cybertron.ai",
    icon: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1776852783/CybertronIcon_cz8tyd.png",
  },
  {
    name: "Space research",
    icon: SpaceIcon,
  },
  {
    name: "orbit Brows",
    icon: OrbitBrowsIcon,
  },
  {
    name: "gigler.io",
    icon: GiglerIcon,
  },
];

    return (
        <section className="w-full bg-white py-4">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">
                    Launching Soon
                </h2>

                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    {startups.map((startup, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-3 bg-[#fcf1f1] border border-gray-200 rounded-lg shadow-sm min-w-40"
                        >
                            <img
                                src={startup.icon}
                                alt={startup.name}
                                className="w-6 h-6 object-contain"
                            />
                            <span className="text-gray-800 font-medium text-sm">
                                {startup.name}
                            </span>
                        </div>
                    ))}
                </div>

                <button className="px-10 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-900 transition">
                    See All Startups
                </button>
            </div>
        </section>
    );
};

export default OurStartups;
