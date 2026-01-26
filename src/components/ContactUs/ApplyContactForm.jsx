import React, { useEffect, useRef, useState } from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";
import { getCountriesData } from "./CountriesData";
import CountriesSelector from "./CountriesSelector";
import CountriesCodeSelector from "./CountriesCodeSelector";
import ContactHeader from "./ContactHeader";

const SPECIFIC_SERVICES = [
  "Performance Ads",
  "SEO",
  "Social Media Marketing",
  "Website Redesign",
  "App Development",
];

const TIMELINES = ["Immediate", "1–2 Weeks", "1 Month", "Flexible"];

const ROLES = [
  "Founder",
  "Co-Founder",
  "Marketing Head",
  "Product Manager",
  "CTO",
  "Other",
];

const CONTACT_MODES = ["Call", "WhatsApp", "Email"];

const SOURCES = [
  "Google",
  "LinkedIn",
  "YouTube",
  "Website",
  "Referral",
  "Other",
];



const ApplyContactForm = () => {
  const [COUNTRIES, setCOUNTRIES] = useState([])
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const [openPhone, setOpenPhone] = useState(false)
  const wrapperRef = useRef(null)
  useEffect(() => {
    const CountriesData = getCountriesData().then((countrydata) => {
      setCOUNTRIES(countrydata)
      setSelected(countrydata.find(c => c.code === "IN"))
    })
  }, [])

  return (
    <section className="max-w-screen mx-auto py-14">
      <ContactHeader/>
      <h1 className="font-bold text-center text-4xl my-3">Contact Us</h1>
      <div className="w-full h-0.5 bg-gray-300 my-4"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Personal Details :</h2>
        <p className="text-gray-600 font-semibold text-xl mb-8">
          Fill all fields Correct & carefully
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="Johan Denial"
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="johndanial@gmail.com"
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"

          />

          <Input
            label="Phone / WhatsApp Number"
            placeholder="7017475420"
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 pl-40 font-semibold focus:shadow-[0px_1px_8px_gray]"
            element={<CountriesCodeSelector open={openPhone} setOpen={setOpenPhone} COUNTRIES={COUNTRIES} selected={selected} setSelected={setSelected} />}

          />

          <Input
            label="Website / App URL"
            placeholder="paste link here"
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"

          />

          <Input
            label="Company / Brand Name"
            placeholder="Ex- Microsoft Inc."
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"

          />

          {/* <Input
            label="Country"
            options={COUNTRIES.name}
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
          /> */}
          <CountriesSelector open={open} setOpen={setOpen} COUNTRIES={COUNTRIES} selected={selected} setSelected={setSelected} />
          
          <Select
            label="Your Role"
            options={ROLES}
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
          />
          <Select
            label="Preferred Contact Mode"
            options={CONTACT_MODES}
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
          />
        </div>
      </div>

      <div className="w-full h-0.5 bg-gray-300 my-10"></div>
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-2">Project Details :</h2>
        <p className="text-gray-600 font-semibold text-xl mb-8">
          Fill all fields Correct & carefully
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="What service are you looking for?"
            placeholder="Ex- Digital Marketing / Software Development"
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"

          />

          <Select
            label="Select Specific Service"
            options={SPECIFIC_SERVICES}
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
          />

          <Input
            label="Estimated Budget"
            placeholder="Ex- $7,000 – $15,000"
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
          />
          <Select
            label="Project Timeline"
            options={TIMELINES}
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
          />
          <Select
            label="How did you hear about us?"
            options={SOURCES}
            labelClass="font-semibold text-xl mb-4"
            className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
          />

          <div>
            <label className="inline-block mb-3 font-medium">
              Are you the decision maker?
            </label>

            <div className="flex gap-4">

              <label className="flex items-center gap-3 px-6 py-3 rounded-full border border-yellow-400 bg-yellow-100 cursor-pointer">
                <input
                  type="radio"
                  name="decisionMaker"
                  className="hidden peer"
                  defaultChecked

                />
                <span className="w-4 h-4 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                </span>
                <span className="font-medium">Yes</span>
              </label>


              <label className="flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 cursor-pointer">
                <input
                  type="radio"
                  name="decisionMaker"
                  className="hidden peer"
                />
                <span className="w-4 h-4 rounded-full border-2 border-gray-400"></span>
                <span className="font-medium text-gray-700">No</span>
              </label>
            </div>
          </div>



        </div>

        <h2 className="text-2xl font-bold mt-14 mb-6">Project About</h2>

        <textarea
          placeholder="Describe Your project About"
          className="w-full min-h-45 border-2 border-gray-300 rounded-lg py-4 px-4 text-base font-semibold shadow-[1px_1px_8px_#d3cdcd] focus:shadow-[0px_1px_8px_gray]"
        />

        <div className="mt-8 space-y-4 ">
          <label className=" gap-3 flex  items-center">
            <input type="checkbox" className="accent-yellow-500  mt-1" />
            <span className="text-xl font-semibold text-gray-500">
              "I confirm that all information provided is accurate and I agree to
              Adymire’s hiring terms."
            </span>
          </label>

          <label className=" gap-3 flex  items-center">
            <input type="checkbox" className="accent-yellow-500 mt-1" />
            <span className="text-xl font-semibold text-gray-500" >
              Accept our{" "}
              <span className="text-blue-600 cursor-pointer">
                terms and conditions
              </span>
            </span>
          </label>

          <label className=" gap-3 flex  items-center">
            <input type="checkbox" className="accent-yellow-500 mt-1" />
            <span className="text-xl font-semibold text-gray-500">
              Accept our{" "}
              <span className="text-blue-600 cursor-pointer">
                Data Privacy Consent
              </span>
            </span>
          </label>
        </div>
        <button className="w-full mt-10 py-4 rounded-xl bg-yellow-100 border border-yellow-400 font-semibold text-lg hover:bg-yellow-200 transition">
          Submit
        </button>
      </div>
    </section>
  );
};

export default ApplyContactForm;
