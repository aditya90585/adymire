import React, { forwardRef, useEffect, useState } from 'react'

const CountriesSelector = forwardRef(({ open, setOpen, selected, COUNTRIES, setSelected, value, onChange }, ref) => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(COUNTRIES);
  useEffect(() => {
    if (!search) {
      setFilteredCountries(COUNTRIES);
    } else {
      setFilteredCountries(
        COUNTRIES.filter(c =>
          c.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, COUNTRIES]);
  return (
    <div className="relative">
      <div className="font-semibold text-xl mb-4">Country <span className='text-red-700'>*</span> </div>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex relative w-full  border-2 border-gray-300 rounded-lg py-3 px-2 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
      >
        <div className="flex items-center gap-4 h-8 ">
          {selected && !open && (
            <img
              src={`https://flagcdn.com/${selected.code.toLowerCase()}.svg`}
              className="h-full w-auto "
              alt=""
            />
          )}
          <input
            type="text"
            value={open ? search : selected?.name || ""}
            onChange={e => setSearch(e.target.value)}
            placeholder="Select country"
            className="w-full outline-none pl-4 text-xl text-gray-700 bg-transparent"
          />
        </div>
        <div className="pointer-events-none absolute h-full right-6 top-0 flex items-center">
          <div className="h-0 w-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      </button>
      {open && (
        <div className="absolute z-20 mt-1 w-full  rounded-md border border-gray-200 bg-white shadow-lg">

          <ul className="max-h-60 overflow-auto">
            {filteredCountries.map(c => (
              <li
                key={c.code}
                onClick={() => {
                  setSelected(c)
                  onChange(c)
                  setOpen(false)
                }}
                className="flex h-8  cursor-pointer items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100"
              >
                <img
                  src={`https://flagcdn.com/${c.code.toLowerCase()}.svg`}
                  className="h-full w-20 object-contain max-w-20 "
                  alt=""
                />
                <span className="font-semibold text-base  text-gray-700">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  )
})

export default CountriesSelector