import React, { forwardRef, useId } from 'react'

const Select = ({
    options,
    label,
    labelClass = "",
    className = "",
    isRequired = false,
    multiple = false,
    ...props
}, ref) => {
    const id = useId()
    return (

        <div className='w-full relative'>
            {
                label && <label
                    className={`inline-block  mb-2 ${labelClass}`}
                    htmlFor={id}>
                    {label} {isRequired && <span className='text-red-700'>*</span>}
                </label>
            }
            <div className='relative'>
                <select
                    {...props}
                    id={id}
                    ref={ref}
                    multiple={multiple}
                    className={`px-3 py-2 appearance-none rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                >

                    {options?.map((option) => {
                        return <option key={option} value={option}>
                            {option}
                        </option>
                    })}

                </select>
                <div className="pointer-events-none absolute h-full right-6 top-0 flex items-center">
                    <div className="h-0 w-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-gray-900"></div>
                </div>
            </div>

        </div>
    )
}

export default forwardRef(Select)