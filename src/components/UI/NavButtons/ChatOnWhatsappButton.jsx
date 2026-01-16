import { Whatsapp } from "@/assets";

const ChatOnWhatsappButton = ({
    height = "40px",
    textSize="sm",
    rounded="md",
    paddingX="2",
    className=""

}) => {
    const navigateToWhatsapp = () => {
        const phoneNumber = "917302356804";
        const message = "Hello, I want to know more about your services";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
    }
    return (
        <button onClick={navigateToWhatsapp} className={` ${className} bg-[#dafcdb] px-${paddingX}  gap-x-2 h-[${height}] flex justify-center items-center rounded-${rounded} text-${textSize} font-semibold cursor-pointer hover:shadow-[0px_2px_4px_gray] hover:-translate-y-0.5 transition-transform ease-out`} >
            <span className="h-[70%]">
                <img className=" h-full" src={Whatsapp} alt="whatsapp" />
            </span>
            Chat on Whatsapp
        </button>
    )
}

export default ChatOnWhatsappButton