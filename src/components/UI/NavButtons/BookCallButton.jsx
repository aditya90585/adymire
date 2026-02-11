import { Phonecall } from "@/assets";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const BookCallButton = (
    {
        text = "Book Free Call",
        height = "40px",
        textSize = "sm",
        rounded = "md",
        paddingX = "3",
        paddingY = "0",
        borderstate=false,
        className=""

    }
) => {
    const navigate = useNavigate()
    const navigateToBookingForm = () => {
     navigate("/contact")
    }
    return (
        <button onClick={navigateToBookingForm} className={`  ${className} bg-[#f5d29d] ${borderstate && `border border-gray-500`}  py-${paddingY}  px-${paddingX}  gap-x-2 h-[${height}] flex justify-center items-center rounded-${rounded} text-${textSize} font-semibold cursor-pointer hover:shadow-[0px_2px_4px_#ba945d] hover:-translate-y-0.5 transition-transform ease-out`} >
            <span className="h-[90%]">
                <Lottie animationData={Phonecall} className="h-full"/>
            </span>
            {text}
        </button>
    )
}

export default BookCallButton