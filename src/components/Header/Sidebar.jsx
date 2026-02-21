import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ChatOnWhatsappButton from '../UI/NavButtons/ChatOnWhatsappButton';
import BookCallButton from '../UI/NavButtons/BookCallButton';
import SocialIcons from '../Common/SocialIcons';

const Sidebar = ({ toggleSidebar }) => {

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
    ]
    const navigate = useNavigate()
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const navigateToLink = (link) => {
        navigate(`${link?.routeLink}`)
        toggleSidebar()
    }

    return (
        <div className='w-full h-full bg-white p-8 '>
            <div>
                <div className='flex flex-col gap-8' >
                    {links?.map((link) => (
                        <div onClick={() => { navigateToLink(link) }} key={link.text} className={isActive(link?.routeLink) ? `bg-[#ffe2bc] header-text-ani -translate-y-0.5 cursor-pointer hover:text-white rounded py-1 px-4 text-base` : "bg-none px-4 cursor-pointer hover:scale-105 header-text-ani"}>{link.text}</div>
                    ))}
                </div>
                <div className='grid grid-cols-2 items-center justify-center gap-5 mt-10'>
                    <ChatOnWhatsappButton className="h-8 font-bold" textSize='xs' />
                    <BookCallButton className='h-8 w-full font-bold font-sans' textSize='xs' paddingX='5' />
                </div>
             <SocialIcons className="grid grid-cols-5 gap-6 w-full mt-10" imgClass="bg-gray-200"/>
            </div>
        </div>
    )
}

export default Sidebar