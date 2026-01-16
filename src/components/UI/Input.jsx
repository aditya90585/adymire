import React, { useId } from 'react'
import { forwardRef } from 'react'

const Input =  forwardRef(({
    type = "text",
    placeholder = "",
    className = "",
    label,
    labelClass="",
    parentClass="",
    element,
    ...props
}, ref) => {
    const id = useId()
    return (
        <div className={`${parentClass} relative`}>
            {
                label && <label
                    className={`inline-block  mb-2 ${labelClass}`}
                    htmlFor={id}>
                    {label}
                </label>
            }
  <div className='reletive'>

            {element && <div>{element}</div>}

            <input className={`${className} `}
                type={type}
                placeholder={placeholder}
                ref={ref}
                {...props}
                id={id}
                
                />
                </div>
            

        </div>
    )
})

export default Input