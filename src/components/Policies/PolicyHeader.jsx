import React from 'react'
import Logo from '../Logo'

const PolicyHeader = ({ activePolicytitle, lastUpdateDate }) => {
    return (
        <section className="w-full px-20 md:px-6 py-2">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center h-full md:items-start flex-col md:flex-row justify-between">

                    <div className=" flex flex-col h-full justify-center px-10 my-auto">
                        <h1 className="text-5xl text-center md:text-start mt-4 md:mt-0 font-bold text-black">
                            {activePolicytitle}
                        </h1>

                        <p className="mt-4 max-w-lg text-base font-semibold text-gray-950">
                            Last Updated : {lastUpdateDate}
                        </p>
                    </div>
                    <div className="relative">
                        <Logo textSize="4xl" imgClass="md:h-40 h-30" />
                        <div className="absolute right-2 md:top-24 top-20 font-semibold text-2xl text-gray-500" >Digital</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PolicyHeader