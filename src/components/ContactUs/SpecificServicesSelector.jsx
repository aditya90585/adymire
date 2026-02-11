import React, { forwardRef, useEffect, useRef } from 'react'
import { RxCross2 } from 'react-icons/rx'

const SpecificServicesSelector = ({ onChange, value, selectedServices, SPECIFIC_SERVICES, specificserviceOpen, setSpecificServiceOpen }, ref) => {
    const toggleSpecificService = specific_service => {
        onChange(
            value?.includes(specific_service)
                ? value.filter(s => s !== specific_service)
                : [...(value || []), specific_service]
        );
    };
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target)
            ) {
                setSpecificServiceOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={wrapperRef} className='relative'>
            <h2 className="font-semibold text-xl mb-4">
                Select Specific Service <span className='text-red-700'>*</span>
            </h2>
            <button
                type="button"
                onClick={(e) => {
                     e.stopPropagation();
                    setSpecificServiceOpen(o => !o)}}
                className="flex flex-wrap gap-2 max-h-16 overflow-y-scroll  relative w-full  border-2 border-gray-300 rounded-lg py-4 px-4 pr-10 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
            >
                {(value?.length <= 0 || selectedServices?.length <= 0) ? <div className='text-[#7F7F7F]'>Ex- Performance Ads / SEO / App dev</div>


                    : (value.map(service => (
                        <span
                            key={service}
                            className="flex items-center gap-2 bg-[#fce4c5bb] text-orange-400  px-3 py-1 rounded font-bold"
                        >
                            {service}
                            <button
                                type="button"
                                onClick={(e) => {
                                     e.stopPropagation();
                                    toggleSpecificService(service)}}
                                className="font-bold bg-yellow-400 rounded-sm cursor-pointer p-1 text-black"
                            >
                                <RxCross2 />
                            </button>
                        </span>
                    )))}
                <div className="pointer-events-none absolute h-full right-6 top-0 flex items-center">
                    <div className="h-0 w-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-gray-900"></div>
                </div>
            </button>
            {specificserviceOpen &&
                <div className=" space-y-4 absolute z-20 mt-1 overflow-y-scroll max-h-60 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                    {selectedServices?.length > 0 ?
                        (selectedServices?.map(service => (
                            <div
                                key={service}
                                className="flex flex-col  gap-3 font-semibold text-gray-700"
                            >
                                <h2 className='w-full px-8 py-2 text-gray-700 font-bold text-base bg-gray-200'>{service}</h2>
                                <div className="space-y-2 pl-8 font-semibold text-gray-700 py-2">
                                    {
                                        SPECIFIC_SERVICES[service].map((specific_service) => {
                                            return <label key={specific_service} className='flex items-center gap-3 '>
                                                <input
                                                    type="checkbox"
                                                    value={specific_service}
                                                    checked={value?.includes(specific_service)}
                                                    onChange={() =>
                                                        toggleSpecificService(specific_service)
                                                    }

                                                    className="accent-yellow-400 h-5 w-5 peer"
                                                />
                                                <span className="peer-checked:text-orange-400">{specific_service}</span>

                                            </label>
                                        })
                                    }
                                </div>
                            </div>
                        )))
                        : <div className='text-xl text-red-500 p-4 font-semibold'>Please select a service first</div>
                    }
                </div>
            }
        </div>

    )
}

export default forwardRef(SpecificServicesSelector)