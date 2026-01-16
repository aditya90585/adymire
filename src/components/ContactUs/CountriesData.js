export const getCountriesData = async () => {

    const API_URL = "https://restcountries.com/v3.1/all?fields=name,cca2,idd"

    const res = await fetch(API_URL)
    const json = await res.json()

    const data =await json
      .map((c) => {
        if (!c.idd?.root) return null
        return {
          name: c.name.common,
          code: c.cca2,
          phone: c.idd.root + (c.idd.suffixes?.[0] || ""),
        }
      })
       .filter(Boolean)
      .sort((a, b) => a.name.localeCompare(b.name))
    return data
}