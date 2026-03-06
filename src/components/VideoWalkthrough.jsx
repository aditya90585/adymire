import React, { useRef } from 'react'
import './VideoWalkthrough.css'
import { AdymireThumbnailVideo, CurveArrow } from "@/assets"
import { BiPlay } from 'react-icons/bi'
import { useGSAP } from '@gsap/react'
import { staggerFadeInOnScroll } from '../animations/stagger'
import gsap from 'gsap'

const VideoWalkthrough = () => {

   const vwtcontref = useRef()
      useGSAP(() => {
          const elements = gsap.utils.toArray(".vwt-ani-element");
          elements.forEach((element) => {
              staggerFadeInOnScroll(element,{trigger:element})
          });
  
      }, { scope: vwtcontref });
  

  return (
    <section ref={vwtcontref} className="video-walkthrough">
      <div className="container">
        <div className='relative w-fit mx-auto vwt-ani-element'>
          <h2 className="section-title ">Video Walkthrough</h2>
          <div className='absolute top-5 w-25 -rotate-80 -right-25 z-40 hidden lg:block '><img className='' src={CurveArrow} alt="arrow" /></div>
        </div>
        <p className="section-subtitle vwt-ani-element">See Our Work in just 90 Seconds</p>
        <div className="video-player-container vwt-ani-element">
          <div className="video-player relative rounded-full border-2 border-yellow-400">
            <img src={AdymireThumbnailVideo} alt="video_thumbnail" />
            <button className='absolute top-[41%]  rounded-full p-2 bg-amber-400 hover:bg-amber-300 transition-all ease-in cursor-pointer hover:scale-110 flex justify-center items-center'><BiPlay className='fill-black size-15' /> </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoWalkthrough

