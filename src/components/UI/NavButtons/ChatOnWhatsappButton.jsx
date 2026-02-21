import { WhatsappIcon } from "@/assets";
import Lottie from "lottie-react";

const ChatOnWhatsappButton = ({
    height = "40px",
    textSize = "sm",
    rounded = "md",
    paddingX = "2",
    className = ""

}) => {
    const navigateToWhatsapp = () => {
        const phoneNumber = "917302356804";
        const message = "Hello, I want to know more about your services";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        // window.location.href = url;
    }
    return (
        <button onClick={navigateToWhatsapp} className={` ${className} bg-[#dafcdb] px-${paddingX}  gap-x-2 h-[${height}] flex justify-center items-center rounded-${rounded} text-${textSize} font-semibold cursor-pointer hover:shadow-[0px_2px_4px_#65bc67] hover:-translate-y-0.5 transition-transform ease-out`} >
            <span className="h-[70%]">
                <Lottie animationData={WhatsappIcon} className="h-full" />
            </span>
            Chat on Whatsapp
        </button>
    )
}

export default ChatOnWhatsappButton