import Phonecall from '@/assets/icons/Phonecall.json'
import Lottie from "lottie-react";
import "./BookCallButton.css"
import { useHref } from 'react-router-dom';

const BookCallButton = (
  {
    text = "Book Free Call",
    height = "40px",
    textSize = "sm",
    rounded = "md",
    paddingX = "3",
    paddingY = "0",
    borderstate = false,
    className = "",
    attention = false
  }
) => {
const href = useHref("/contact");
  const navigateToBookingForm = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className="relative inline-block group call-button-wrapper ">
      {attention && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="attention-ring" />
        </div>
      )}
      <div
        className={`
            absolute inset-0
            rounded-xl
            gradient-spin
            bg-[conic-gradient(from_var(--angle),red,orange,yellow,green,blue,indigo,violet,red)]
            
            [animation-duration:3s]
            group-hover:blur-md
            transition-all duration-300
          `}

      />

      <button onClick={navigateToBookingForm} className={` ${className} relative z-10 bg-[#fcd444]  py-${paddingY}  px-${paddingX}  gap-x-2 h-[${height}] flex justify-center items-center rounded-${rounded} text-${textSize} font-semibold cursor-pointer hover:shadow-[0px_2px_4px_#ba945d] hover:-translate-y-0.5 transition-transform ease-out`} >
        <span className="h-full">
          <Lottie animationData={Phonecall} className="h-full" />
        </span>
        {text}
      </button>
    </div>
  )
}

export default BookCallButton
