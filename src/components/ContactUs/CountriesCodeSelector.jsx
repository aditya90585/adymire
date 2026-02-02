import React from 'react'

const CountriesCodeSelector = ({open,setOpen,selected,COUNTRIES,setSelected,setValue}) => {
   return (
    <div className="absolute">
           
            <button
              type="button"
              onClick={() => setOpen(o => !o)}
              className="flex relative w-full  cursor-pointer  rounded-lg py-4 px-2 pr-8 font-semibold"
            >
              <div className="flex items-center gap-4 h-6">
                {selected && (
                  <img
                    src={`https://flagcdn.com/${selected.code.toLowerCase()}.svg`}
                    className="h-full w-auto"
                    alt=""
                  />
                )}
                 <span className="text-gray-500 test-xl font-semibold">
                  {selected?.phone || "Select "}
                </span>
  
              </div>
              <div className="pointer-events-none absolute h-full right-2 top-0  flex items-center">
                <div className="h-0 w-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-gray-900"></div>
              </div>
            </button>
            {open && (
              <div className="absolute z-20 mt-1  rounded-md border border-gray-200 bg-white shadow-lg">
                <ul className="max-h-60 overflow-auto">
                  {COUNTRIES.map(c => (
                    <li
                      key={c.code}
                      onClick={() => {
                        setSelected(c)
                         setValue("country",c);
                        setOpen(false)
                      }}
                      className="flex h-8 cursor-pointer items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      <img
                        src={`https://flagcdn.com/${c.code.toLowerCase()}.svg`}
                        className="h-full w-20 object-contain max-w-20 "
                        alt=""
                      />
                      <span className="font-semibold text-base text-gray-700">{c.phone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

  )
}

export default CountriesCodeSelector