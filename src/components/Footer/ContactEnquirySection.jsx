import { WhatsappIcon, Phonecall, EmailAniIcon } from "@/assets";
import Lottie from "lottie-react";


const ContactEnquirySection = () => {

    const navigateToWhatsapp = () => {
        const phoneNumber = "917302356804";
        const message = "Hello, I want to know more about your services";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    const navigateToBookingForm = () => {
       window.open('/contact', '_blank', 'noopener,noreferrer');
    }
    const emaiMethod = () => {
        const email = "helo@adymir.com";
        const subject = encodeURIComponent("Hello Adymire");
        const body = encodeURIComponent("Hello, I want to know more about your services");

        const gmailAppURL = `googlegmail://co?to=${email}&subject=${subject}&body=${body}`;
        const gmailWebURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

        window.open(gmailAppURL, '_blank', 'noopener,noreferrer');
        setTimeout(() => {
            window.open(gmailWebURL, '_blank', 'noopener,noreferrer');
        }, 1500);
    }

    const contactData = [
        {
            title: "Send a Email",
            subtitle: "hello@adylity.com",
            buttonText: "Send Email",
            icon: EmailAniIcon,
            method: emaiMethod
        },
        {
            title: "Call Back",
            subtitle: "+91 7302356804",
            buttonText: "Request Call Back",
            icon: Phonecall,
            method: navigateToBookingForm
        },
        {
            title: "Chat on Whatsapp",
            subtitle: "hello@adylity.com",
            buttonText: "Chat Now",
            icon: WhatsappIcon,
            method: navigateToWhatsapp
        },
    ];


    return (
        <section className="bg-white py-4">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold mb-3">
                    Contact us for
                </h2>
                <h3 className="text-3xl font-bold text-[#2d8504] mb-16">
                    Project Enquiries
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {contactData.map((item, index) => (
                        <div
                            onClick={item?.method}
                            key={index}
                            className="group  rounded-2xl border-2 border-gray-200 p-8 flex flex-col items-center text-center transition-all duration-300
                                    hover:bg-[#FFF1C6] hover:border-yellow-400 hover:scale-105 ">

                            <div className="w-25 h-25 mb-6 flex items-center justify-center">
                                <Lottie animationData={item.icon} className="" />
                            </div>

                            <h4 className="font-bold text-lg uppercase mb-3">
                                {item.title}
                            </h4>
                            <p className="text-sm font-semibold text-gray-900 mb-8">
                                {item.subtitle}
                            </p>

                            <button
                                className="px-8 py-3 cursor-pointer rounded-full font-semibold bg-[#FFF1C6] transition-all duration-300 group-hover:bg-yellow-400">
                                {item.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactEnquirySection;
