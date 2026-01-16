import { CallContact,EmailContact } from "@/assets";

const ContactEnquirySection = () => {
    const contactData = [
        {
            title: "Send a Email",
            subtitle: "hello@adylity.com",
            buttonText: "Send Email",
            icon:EmailContact
        },
        {
            title: "Call Back",
            subtitle: "+91 7302356804",
            buttonText: "Request Call Back",
            icon:CallContact
        },
        {
            title: "Chat on Whatsapp",
            subtitle: "hello@adylity.com",
            buttonText: "Chat Now",
            icon:EmailContact
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
                            key={index}
                            className="group rounded-2xl border-2 border-gray-200 p-10 flex flex-col items-center text-center transition-all duration-300
                                    hover:bg-[#FFF1C6] hover:border-yellow-400 hover:scale-105 ">

                            <div className="w-20 h-20 mb-6 flex items-center justify-center">
                                <img src={item.icon} alt={item.title} className="" />
                            </div>

                            <h4 className="font-bold text-lg uppercase mb-3">
                                {item.title}
                            </h4>
                            <p className="text-sm font-semibold text-gray-900 mb-8">
                                {item.subtitle}
                            </p>

                            <button
                                className="px-8 py-3 rounded-full font-semibold bg-[#FFF1C6] transition-all duration-300 group-hover:bg-yellow-400">
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
