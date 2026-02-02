import React, { useEffect, useRef, useState } from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";
import { getCountriesData } from "./CountriesData";
import CountriesSelector from "./CountriesSelector";
import CountriesCodeSelector from "./CountriesCodeSelector";
import ContactHeader from "./ContactHeader";
import { RiLinkM } from "react-icons/ri";
import { Controller, useForm } from "react-hook-form";


const SERVICES = [
  "UI UX Design",
  "App Development",
  "Web Development",
  "Digital Marketing",
  "AI Automation",
];
const SPECIFIC_SERVICES = {
  "UI UX Design": [
    "Mobile App UI",
    "Website UI",
    "Game UI",
    "App + Website UI",
    "App + Website + Admin Dashboard UI",
  ],

  "App Development": [
    "Android App",
    "iOS App",
    "Cross Platform (Flutter / React Native)",
    "App + Admin Dashboard",
    "Windows App",
  ],

  "Web Development": [
    "Website / Landing Page",
    "Web Apps",
    "Website + Admin Panel",
    "Mobile App + Website + Admin Panel",
  ],

  "Digital Marketing": [
    "Social Media Marketing (SMM)",
    "SEO",
    "Performance Marketing (Meta / Google Ads)",
    "More Services",
  ],

  "AI Automation": [
    "Voice Agents",
    "Chat Bots",
    "Business Automation",
    "WhatsApp Automation",
    "Leads Automation",
    "Other",
  ],
};


const TIMELINES = ["Immediate", "1–2 Weeks", "1 Month", "Flexible"];

const ROLES = [
  "Founder",
  "Co-Founder",
  "CEO",
  "Marketing Head",
  "Product Manager",
  "CTO",
  "Other",
];

const CONTACT_MODES = ["Call", "WhatsApp", "Email"];
const Your_Budget = [
  "Less than $1500",
  "$1500 – $5000",
  "$5000 – $10,000",
  "$10,000 – $15,000",
  "$15,000 – $20,000",
  "More than $20,000",
]
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
  const [currentSelectedService, setCurrentSelectedService] = useState("UI UX Design")

  const [openPhone, setOpenPhone] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const CountriesData = getCountriesData().then((countrydata) => {
      setCOUNTRIES(countrydata)
      setSelected(countrydata.find(c => c.code === "IN"))
      setValue("country", countrydata.find(c => c.code === "IN"));
    })
  }, [])


  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue
  } = useForm()

  const decision = watch("decisionMaker");

  const submitContactForm = (async (data) => {
    const formData = await data
    console.log(formData)
  })
  return (
    <section className="max-w-screen mx-auto py-14 px-4 md:px-0">
      <ContactHeader />
      <form onSubmit={handleSubmit(submitContactForm)}>
        <h1 className="font-bold text-center text-4xl my-3">Contact Us</h1>
        <div className="w-full h-0.5 bg-gray-300 my-4"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Personal Details :</h2>
          <p className="text-gray-600 font-semibold text-xl mb-8">
            Fill all fields Correct & carefully
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input
              {...register("fullName", { required: true })}
              label="Full Name"
              placeholder="Johan Denial"
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
            />

            <Input
              {...register("email", { required: true })}
              label="Email Address"
              type="email"
              placeholder="johndanial@gmail.com"
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"

            />
            <Controller
              name="country"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CountriesSelector
                  {...field}
                  open={open}
                  setOpen={setOpen}
                  COUNTRIES={COUNTRIES}
                  selected={selected}
                  setSelected={setSelected} />

              )}
            />

            <div>
              <Input
                {...register("phoneNumber", { required: true })}
                label="Phone / WhatsApp Number"
                placeholder="7017475420"
                type="number"
                labelClass="font-semibold text-xl mb-4"
                className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 pl-40 font-semibold focus:shadow-[0px_1px_8px_gray]"
                element={<CountriesCodeSelector setValue={setValue} open={openPhone} setOpen={setOpenPhone} COUNTRIES={COUNTRIES} selected={selected} setSelected={setSelected} />}

              />
              <label className=" gap-3 flex  items-center mt-2">
                <input  {...register("isWhatsapp")} type="checkbox" className="accent-gray-500 h-4 w-4" />
                <span className="text-sm font-semibold text-gray-500">
                  This is my WhatsApp no
                </span>
              </label>
            </div>

            <div>
              <Input
                {...register("web_app_url")}
                label="Website / App URL"
                placeholder="paste link here"
                labelClass="font-semibold text-xl mb-4"
                className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 pl-15 font-semibold focus:shadow-[0px_1px_8px_gray]"
                element={<div className="absolute h-fit py-2 px-2"> <RiLinkM className="relative bg-[#f8eac2] p-2 rounded-lg w-auto  h-10" /> </div>}
              />
              <label className=" gap-3 flex  items-center mt-2">
                <input {...register("noWebsite")} type="checkbox" className="accent-gray-500 h-4 w-4" />
                <span className="text-sm font-semibold text-gray-500">
                  I don't have app and website
                </span>
              </label>
            </div>

            <Input
              {...register("companyName", { required: true })}
              label="Company / Brand Name"
              placeholder="Ex- Microsoft Inc."
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"

            />


            <Select
              {...register("yourRole", { required: true })}
              label="Your Role"
              options={ROLES}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
            />
            <Select
              {...register("ContactMode", { required: true })}
              label="Preferred Contact Mode"
              options={CONTACT_MODES}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
            />
          </div>
        </div>

        <div className="w-full h-0.5 bg-gray-300 my-10 max-w-6xl mx-auto"></div>
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-2">Project Details :</h2>
          <p className="text-gray-600 font-semibold text-xl mb-8">
            Fill all fields Correct & carefully
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              {...register("service", { required: true })}
              label="What service are you looking for?"
              options={SERVICES}
              value={currentSelectedService}
              onChange={(e) => setCurrentSelectedService(e.target.value)}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
            />

            <Select
              {...register("specificService", { required: true })}
              label="Select Specific Service"
              options={SPECIFIC_SERVICES[currentSelectedService]}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
            />
            <Select
              {...register("estimatedBudget", { required: true })}
              label="Estimated Budget"
              options={Your_Budget}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
            />
            <Select
              {...register("projectTimeline", { required: true })}
              label="Project Timeline"
              options={TIMELINES}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
            />
            <Select
              {...register("findSource", { required: true })}
              label="How did you hear about us?"
              options={SOURCES}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:shadow-[0px_1px_8px_gray]"
            />

            <div>
              <label className="inline-block mb-4 text-xl font-semibold">
                Are you the decision maker?
              </label>

              <div className="flex gap-4">

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="decisionMaker"
                    className="peer hidden"
                    value="yes"
                    defaultChecked
                    {...register("decisionMaker", { required: true })}
                  />
                  <div className="flex items-center gap-3 px-6 py-3 rounded-full border peer-checked:border-yellow-400 border-gray-400 peer-checked:bg-yellow-100 cursor-pointer">
                    <span className={`w-5 h-5 rounded-full border-3 ${decision == "yes" ? "border-gray-900" : "border-gray-200"} flex items-center justify-center`}>
                      <span className={`w-full h-full rounded-full ${decision == "yes" ? " bg-yellow-500" : "bg-gray-900"}`}></span>
                    </span>
                    <span className="font-medium">Yes</span>
                  </div>
                </label>


                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="decisionMaker"
                    className=" peer hidden"
                    value="no"
                    {...register("decisionMaker", { required: true })}
                  />
                  <div className="flex items-center gap-3 px-6 py-3 rounded-full border peer-checked:border-yellow-400 border-gray-400 peer-checked:bg-yellow-100 cursor-pointer">
                    <span className={`w-5 h-5 rounded-full border-3 ${decision == "no" ? "border-gray-900" : "border-gray-200"} flex items-center justify-center`}>
                      <span className={`w-full h-full rounded-full ${decision == "no" ? " bg-yellow-500" : "bg-gray-900"}`}></span>
                    </span>
                    <span className="font-medium">No</span>
                  </div>
                </label>
              </div>
            </div>


          </div>

          <h2 className="text-2xl font-bold mt-14 mb-6">Project About</h2>

          <textarea
            {...register("projectAbout", { required: true })}
            placeholder="Describe Your project About"
            className="w-full min-h-45 border-2 border-gray-300 rounded-lg py-4 px-4 text-base font-semibold shadow-[1px_1px_8px_#d3cdcd] focus:shadow-[0px_1px_8px_gray]"
          />

          <div className="mt-8 space-y-4 ">
            <label className=" gap-3 flex  items-center">
              <input  {...register("aggrements", { required: true })} type="checkbox" className="accent-yellow-500  mt-1 h-5 w-5" />
              <span className="text-xl font-semibold text-gray-500">
                "I confirm that all information provided is accurate and I agree to
                Adymire’s hiring terms."
              </span>
            </label>

            <label className=" gap-3 flex  items-center">
              <input  {...register("acceptTerms", { required: true })} type="checkbox" className="accent-yellow-500 mt-1 h-5 w-5" />
              <span className="text-xl font-semibold text-gray-500" >
                Accept our{" "}
                <span className="text-blue-600 cursor-pointer">
                  terms and conditions
                </span>
              </span>
            </label>

            <label className=" gap-3 flex  items-center">
              <input  {...register("dataPrivacy", { required: true })} type="checkbox" className="accent-yellow-500 mt-1  h-5 w-5" />
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
      </form>
    </section >
  );
};

export default ApplyContactForm;
