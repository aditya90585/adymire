import React from 'react'
import { Controller } from 'react-hook-form'

const CountriesTimezoneSelector = ({ open, setOpen, selected, COUNTRIES, setSelected, setValue, control }) => {
    return (
        <div className="absolute">
            <Controller
                name="timezone"
                control={control}
                rules={{ required: "timezone  must be required" }}
                render={({ field }) => (
                    <div
                        {...field}
                    >
                        <button
                            type="button"
                            onClick={() => setOpen(o => !o)}
                            className="flex relative w-full  cursor-pointer  rounded-lg py-4 px-2 pr-8 font-semibold"
                        >
                            <div className="flex items-center gap-4 h-6">
                                <span className="text-gray-900 test-xl font-semibold">
                                    {field?.value || "Select "}
                                </span>

                            </div>
                            <div className="pointer-events-none absolute h-full right-2 top-0  flex items-center">
                                <div className="h-0 w-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-gray-900"></div>
                            </div>
                        </button>
                        {open && (
                            <div className="absolute z-20 mt-1  rounded-md border border-gray-200 bg-white shadow-lg">
                                <ul className="max-h-60 overflow-auto">
                                    {selected?.timezones?.map(c => (
                                        <li
                                            key={c}
                                            onClick={() => {
                                                setOpen(false)
                                                field.onChange(c)
                                            }}
                                            className="flex h-8 cursor-pointer items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100"
                                        >

                                            <span className="font-semibold text-base text-gray-700">{c}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            />
        </div>

    )
}

export default CountriesTimezoneSelector