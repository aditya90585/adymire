
import "./MyTeam.css"
import { YashveerGiri, rohan, ashish, abhisekhgiri, abhisekhmannu, aditya, neeraj, rakesh, santosh, ritugupta, ravikumar } from "@/assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';


export const teamMembers = [
    { name: "Rohan", role: "Co-Founder & CTO", image: rohan },
    { name: "Yashveer Giri Goswami", role: "Founder & CEO", image: YashveerGiri },
    { name: "Abhishek Giri", role: "COO", image: abhisekhgiri },
    { name: "Ashish Kumar", role: "Full Stack MERN Developer", image: ashish },
    { name: "Aditya Rajput", role: "Full Stack MERN Developer", image: aditya },
    { name: "Abhisekh P", role: "Full Stack Web Developer", image: abhisekhmannu },
    { name: "Rakesh Giri", role: "Flutter Developer", image: rakesh },
    { name: "Neeraj Dahit", role: "Flutter Developer", image: neeraj },
    { name: "Santosh Patel", role: "Flutter Developer", image: santosh },
    { name: "Ritu Gupta", role: "Android Developer", image: ritugupta },
    { name: "Ravi Kumar", role: "Backend Developer", image: ravikumar },
];

const MyTeam = () => {


    return (
        <section id="my-team" className="bg-[#fff8ec] py-16 md:px-18 px-4 relative">
            <div className="mx-auto max-w-7xl relative  myTeam-swiper md:px-14 px-0 overflow-x-hidden">
                <div className="mb-14 text-center">
                    <h2 className="text-3xl font-semibold text-black">My Team</h2>
                    <div className="mx-auto mt-3 h-1 w-36 rounded-full bg-yellow-400" />
                </div>

                <Swiper
                    watchOverflow={true}
                    spaceBetween={60}
                    slideToClickedSlide={true}
                    centeredSlides
                    initialSlide={1}

                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 1,
                        slideShadows: false,
                    }}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        
                        },
                        768: {
                            slidesPerView: 2,
              
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{
                        el: ".myTeam-pagination",
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: ".myTeam-prev",
                        nextEl: ".myTeam-next",
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="myTeam-swiper-inner mySwiper">
                    {teamMembers.map((member, index) => (
                        <SwiperSlide
                            key={member.name}
                            className={`myteam-slidecard relative w-[320px] flex flex-col items-center transition-transform ease-in duration-300`}
                        >  
                            <div className={` myteam-slidecard-blob absolute bottom-20 w-full h-80 rounded-tl-4xl rounded-tr-[90%] transition-colors ease-out`}>
                            </div>
                            <div className={` myteam-slidecard-image relative z-10  h-full transition-all duration-200 delay-200 ease-in `}>

                                <img
                                    src={member?.image}
                                    alt={member.name}
                                    loading="lazy"
                                    className="h-full object-cover"
                                />
                            </div>

                            <div className="relative z-10 -mt-6 w-full rounded-b-3xl border border-gray-400 border-t-0 bg-white py-4 text-center shadow-md">
                                <h3 className="text-2xl font-bold text-black">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-lg font-medium text-gray-600">
                                    {member.role}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        className="myTeam-prev w-12 h-12 text-xl cursor-pointer rounded-full rotate-180 bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
                    >
                        ➔
                    </button>
                    <div className="myTeam-pagination"></div>
                    <button
                        className="myTeam-next w-12 h-12 text-xl cursor-pointer rounded-full bg-[#FFE4A3] flex items-center justify-center hover:bg-[#FFD36A]"
                    >
                        ➔
                    </button>
                </div>

            </div>
        </section >
    );
};

export default MyTeam;
