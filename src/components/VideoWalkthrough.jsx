import React from 'react'
import './VideoWalkthrough.css'
import { AdymireThumbnailVideo, CurveArrow } from "@/assets"
import { BiPlay } from 'react-icons/bi'

const VideoWalkthrough = () => {
  return (
    <section className="video-walkthrough">
      <div className="container">
        <div className='relative w-fit mx-auto'>
          <h2 className="section-title">Video Walkthrough</h2>
          <div className='absolute top-5 w-25 -rotate-80 -right-25 z-40 hidden lg:block '><img className='' src={CurveArrow} alt="arrow" /></div>
        </div>
        <p className="section-subtitle">See Our Work in just 90 Seconds</p>
        <div className="video-player-container">
          <div className="video-player relative">
            <img src={AdymireThumbnailVideo} alt="video_thumbnail" />
            <button className='absolute top-[46%]  rounded-full p-2 bg-amber-400 hover:bg-amber-300 transition-all ease-in cursor-pointer hover:scale-110 flex justify-center items-center'><BiPlay className='fill-black size-15' /> </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoWalkthrough

