import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'

export default function FloatingButtons() {
  const [whatsappData, setWhatsappData] = useState(null)
  const [chatbotData, setChatbotData] = useState(null)

  useEffect(() => {
    import('@/assets/icons/WhatsappIcon.json')
      .then(m => setWhatsappData(m.default))
    import('@/assets/icons/AIchatboticon.json')
      .then(m => setChatbotData(m.default))
  }, [])

  const navigateToWhatsapp = () => {
    const phoneNumber = "917302356804"
    const message = "Hello, I want to know more about your services"
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="fixed max-w-14 md:max-w-14 right-8 bottom-10 z-100 flex flex-col items-center justify-center gap-y-2">
      <div onClick={navigateToWhatsapp} className="bg-white p-2 shadow-sm rounded-full hover:shadow-md cursor-pointer">
        {whatsappData && <Lottie animationData={whatsappData} alt="whatsapp" />}
      </div>
      <div onClick={navigateToWhatsapp} className="bg-white aspect-square flex justify-center items-center shadow-sm rounded-full hover:shadow-md cursor-pointer">
        {chatbotData && <Lottie animationData={chatbotData} alt="chat bot" />}
      </div>
    </div>
  )
}