// import React from 'react'
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import ChatOnWhatsappButton from '../UI/NavButtons/ChatOnWhatsappButton';
// import BookCallButton from '../UI/NavButtons/BookCallButton';
// import SocialIcons from '../Common/SocialIcons';

// const Sidebar = ({ toggleSidebar }) => {

//     const links = [
//         {
//             text: "Home",
//             routeLink: "/"
//         },
//         {
//             text: "About Us",
//             routeLink: "/about"
//         },
//         {
//             text: "Our Services",
//             routeLink: "/services"
//         },
//         {
//             text: "Portfolio",
//             routeLink: "/portfolio"
//         },
//         {
//             text: "Pricing Plans",
//             routeLink: "/pricing-plans"
//         },
//     ]
//     const navigate = useNavigate()
//     const location = useLocation();

//     const isActive = (path) => location.pathname === path;
//     const navigateToLink = (link) => {
//         navigate(`${link?.routeLink}`)
//         toggleSidebar()
//     }

//     return (
//         <div className='w-full h-full bg-white p-8 '>
//             <div>
//                 <div className='flex flex-col gap-8' >
//                     {links?.map((link) => (
//                         <div onClick={() => { navigateToLink(link) }} key={link.text} className={isActive(link?.routeLink) ? `bg-[#ffe2bc] header-text-ani -translate-y-0.5 cursor-pointer hover:text-white rounded py-1 px-4 text-base` : "bg-none px-4 cursor-pointer hover:scale-105 header-text-ani"}>{link.text}</div>
//                     ))}
//                 </div>
//                 <div className='grid grid-cols-2 items-center justify-center gap-5 mt-10'>
//                     <ChatOnWhatsappButton className="h-8 font-bold" textSize='xs' />
//                     <BookCallButton className='h-8 w-full font-bold font-sans' textSize='xs' paddingX='5' />
//                 </div>
//                 <SocialIcons className="grid grid-cols-5 gap-6 w-full mt-10" imgClass="bg-gray-200" />
//             </div>
//         </div>
//     )
// }

// export default Sidebar



import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ChatOnWhatsappButton from '../UI/NavButtons/ChatOnWhatsappButton';
import BookCallButton from '../UI/NavButtons/BookCallButton';
import SocialIcons from '../Common/SocialIcons';
import { BiChevronDown } from 'react-icons/bi';
import AlertBox from '../UI/AlertBox';

const Sidebar = ({ toggleSidebar, exploreLinks }) => {

    const [exploreOpen, setExploreOpen] = useState(false)

    const links = [
        { text: "Home", routeLink: "/" },
        { text: "About Us", routeLink: "/about" },
        { text: "Our Services", routeLink: "/services" },
        { text: "Portfolio", routeLink: "/portfolio" },
    ]

    const navigate = useNavigate()
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

   const availableRoutes = ['/', '/about', '/services', '/portfolio', '/pricing-plans']
   const [alertOpen, setAlertOpen] = useState(false);

const navigateToLink = (link) => {
    if (!availableRoutes.includes(link?.routeLink)) {
         setAlertOpen(true)
        return
    }
    navigate(`${link?.routeLink}`)
    toggleSidebar()
}
    const allExploreRoutes = [
        ...(exploreLinks?.left || []),
        ...(exploreLinks?.right || [])
    ]

    const isExploreActive = allExploreRoutes.some(l => l.routeLink === location.pathname)

    return (
        <div data-lenis-prevent className='w-full h-full bg-white p-8 overflow-y-auto'>
            <div>
                <div className='flex flex-col gap-4'>
                    {links?.map((link) => (
                        <div
                            onClick={() => navigateToLink(link)}
                            key={link.text}
                            className={isActive(link?.routeLink)
                                ? `bg-[#ffe2bc] cursor-pointer rounded py-2 px-4 text-base font-semibold`
                                : "px-4 cursor-pointer hover:scale-105 text-base transition-transform"
                            }
                        >
                            {link.text}
                        </div>
                    ))}

     
                    <div className="w-full">
                        <button
                            onClick={() => setExploreOpen(p => !p)}
                            className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-base  transition-all
                                ${isExploreActive
                                    ? 'bg-[#ffe2bc] border border-[#f5a623] font-semibold'
                                    : ''
                                }`}
                        >
                            Explore
                            <BiChevronDown
                                className={`w-5 h-5 transition-transform duration-200 ${exploreOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {/* Accordion Body */}
                        <div className={`flex flex-col gap-1 mt-1 pl-2 overflow-hidden transition-all duration-300 ${exploreOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {allExploreRoutes.map((item) => (
                                <div
                                    key={item.text}
                                    onClick={() => navigateToLink(item)}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer text-sm transition-all
                                        ${isActive(item.routeLink)
                                            ? 'bg-[#fff8e1] text-[#f5a623] font-semibold'
                                            : 'hover:bg-[#fdf6e3] text-gray-700'
                                        }`}
                                >
                                    <span className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-lg text-base flex-shrink-0">
                                        {item.icon}
                                    </span>
                                    {item.text}
                                </div>
                            ))}

                            <div
                                onClick={() => { window.open("/contact","_blank"); toggleSidebar(); }}
                                className="mt-2 bg-[#f5c430] hover:bg-[#e6b82e] text-center font-bold text-sm px-4 py-2.5 rounded-lg cursor-pointer transition-all"
                            >
                                Get Free Consultation
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 items-center justify-center gap-5 mt-10'>
                    <ChatOnWhatsappButton className="h-8 font-bold" textSize='xs' />
                    <BookCallButton className='h-8 w-full font-bold font-sans' textSize='xs' paddingX='5' />
                </div>
                <SocialIcons className="grid grid-cols-5 gap-6 w-full mt-10" imgClass="bg-gray-200" />
            </div>
            <AlertBox
        message="We are working on it, Thanks for your interest "
        isOpen={alertOpen}
        onClose={() => setAlertOpen(false)}
      />
        </div>
    )
}

export default Sidebar