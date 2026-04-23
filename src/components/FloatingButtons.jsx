import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'

// Import directly — NOT from barrel file
import WhatsappIcon from '@/assets/icons/WhatsappIcon.json'
import AIchatboticon from '@/assets/icons/AIchatboticon.json'

export default function FloatingButtons() {
  const navigateToWhatsapp = () => {
    const phoneNumber = "917302356804"
    const message = "Hello, I want to know more about your services"
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="fixed max-w-14 md:max-w-14 right-8 bottom-10 z-100 flex flex-col items-center justify-center gap-y-2">
      <div onClick={navigateToWhatsapp} className="bg-white p-2 shadow-sm rounded-full hover:shadow-md cursor-pointer">
        <Lottie animationData={WhatsappIcon} alt="whatsapp" />
      </div>
      <div onClick={navigateToWhatsapp} className="bg-white aspect-square flex justify-center items-center shadow-sm rounded-full hover:shadow-md cursor-pointer">
        <Lottie animationData={AIchatboticon} alt="chat bot" />
      </div>
    </div>
  )
}