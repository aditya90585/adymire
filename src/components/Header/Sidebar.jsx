import React from 'react'
import {
    Facebook3dLogo,
    Instagram3dLogo,
    Linkedin3dLogo,
    X3dLogo,
    Youtube3dLogo,
} from "@/assets";
import { NavLink } from 'react-router-dom';
import ChatOnWhatsappButton from '../UI/NavButtons/ChatOnWhatsappButton';
import BookCallButton from '../UI/NavButtons/BookCallButton';

const Sidebar = () => {

    const links = [
        {
            text: "Welcome",
            routeLink: "/"
        },
        {
            text: "About me",
            routeLink: "/about"
        },
        {
            text: "My services",
            routeLink: "/services"
        },
        {
            text: "Portfolio",
            routeLink: "/portfolio"
        },
        {
            text: "Pricing Plans",
            routeLink: "/pricingplans"
        }
    ]

    const socialIcons = [
        { img: Youtube3dLogo, alt: "Youtube" },
        { img: Linkedin3dLogo, alt: "LinkedIn" },
        { img: X3dLogo, alt: "X" },
        { img: Instagram3dLogo, alt: "Instagram" },
        { img: Facebook3dLogo, alt: "Facebook" },
    ];

    return (
        <div className='w-full h-full bg-white p-8 '>
            <div>
                <div className='flex flex-col gap-8' >
                    {links?.map((link) => (
                        <NavLink key={link.text} className={({ isActive }) => isActive ? `bg-[#ffe2bc] header-text-ani -translate-y-0.5 cursor-pointer hover:text-white rounded py-1 px-4 text-base` : "bg-none px-4 cursor-pointer hover:scale-105 header-text-ani"} to={link.routeLink ? `${link.routeLink}` : "/"}>{link.text}</NavLink>
                    ))}
                </div>
                <div className='grid grid-cols-2 items-center justify-center gap-5 mt-10'>
                    <ChatOnWhatsappButton className="h-8 font-bold" textSize='xs' />
                    <BookCallButton className='h-8 font-bold font-sans' textSize='xs' paddingX='5' />
                </div>
                 <div className="grid grid-cols-5 gap-2 w-full mt-20">
            {socialIcons.map((item, index) => (
              <img className='bg-gray-200 rounded-xl'  key={index} src={item.img} alt={item.alt} />
            ))}
          </div>
            </div>
        </div>
    )
}

export default Sidebar