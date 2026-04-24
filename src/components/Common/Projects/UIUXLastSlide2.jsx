import Figma from '@/assets/icons/UIUXToolsIcons/Figma.svg'
import Xd from '@/assets/icons/UIUXToolsIcons/Xd.svg'
import AdymireLogo2  from "@/assets/logo/AdymireLogo2.webp";
import dribbble from "../../../assets/icons/dribbble.webp"


export default function UIUXLastSlide2({ className }) {


    return (
        <div className={`${className} flex items-center justify-center  font-sans`}>
            <div className="relative h-full  bg-white flex flex-col">

                <div
                    className="py-2 md:py-8 text-center
                 bg-[url('/src/assets/illustrations/uiuxLastslideBg.webp')] 
                 bg-center bg-cover bg-no-repeat"
                >

                    <div className="flex justify-center mb-4">
                        <div className="w-10 h-10 md:w-20 md:h-20
                        overflow-hidden rounded-full shadow-lg 
                        shadow-green-400/30 flex items-center justify-center">
                            <img src="https://res.cloudinary.com/dm3xoqps6/image/upload/v1776852693/Founder3_n2gix9.png"
                                alt="founder"
                                className="w-full h-full" />
                        </div>
                    </div>


                    <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                        Yashveer Giri
                    </h1>

                    <p className="text-sm sm:text-base font-medium text-gray-800 mt-2">
                        UI & UX Designer
                    </p>

                    <div className="flex justify-center gap-4 mt-1 md:mt-4">
                        <img src={Figma} alt="figma" className="h-4 sm:h-8 md:h-8" />
                        <img src={Xd} alt="xd" className="h-4 sm:h-8 md:h-8" />
                    </div>
                </div>


                <div className="h-px bg-gray-200" />


                <div className="px-6 sm:px-8 py-2 flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shrink-0 
                      shadow-md shadow-yellow-400/30 flex items-center justify-center">
                        <img src={AdymireLogo2} alt="logo" className="w-full h-full object-contain" />
                    </div>

                    <p className="font-bold text-sm sm:text-base text-gray-800">
                        Adymire Technologies Pvt. Ltd.
                    </p>
                </div>

                <div className="grid grid-cols-2  gap-4 md:p-4 p-1 px-4">


                    <button
                        onClick={() => window.open("https://www.behance.net/yashveergiri", "_blank")}
                        className="flex items-center gap-3 md:rounded-xl rounded px-4 py-1
                   transition-all duration-200 cursor-pointer 
                   hover:bg-[#edf3fc] hover:-translate-y-1 
                   hover:shadow-md hover:shadow-blue-200/50
                   bg-[#dce9fd]"
                    >
                        <div className="md:w-8 md:h-8 w-4 h-4 text-sm md:text-base rounded-full bg-blue-600 
                        flex items-center justify-center text-white font-bold">
                            Bē
                        </div>
                        <span className="text-xs sm:text-base font-semibold text-gray-900">
                            See Behance
                        </span>
                    </button>

                    <button
                        onClick={() => window.open("https://dribbble.com/yashveergiri", "_blank")}
                        className="flex items-center gap-3 md:rounded-xl rounded px-4 py-1
                   transition-all duration-200 cursor-pointer 
                   hover:bg-pink-100 hover:-translate-y-1 
                   hover:shadow-md hover:shadow-pink-200/50
                   bg-pink-200"
                    >
                        <div className="md:w-8 md:h-8 w-4 h-4 rounded-full overflow-hidden bg-pink-500 
                        flex items-center justify-center text-white font-bold">
                            <img className="h-full w-full" src={dribbble} alt="dribble" />
                        </div>
                        <span className="text-xs sm:text-base font-semibold text-gray-800">
                            See Dribbble
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
}