import React, { useEffect, useRef, useState } from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";
import { getCountriesData } from "./CountriesData";
import CountriesSelector from "./CountriesSelector";
import CountriesCodeSelector from "./CountriesCodeSelector";
import ContactHeader from "./ContactHeader";
import { RiLinkM } from "react-icons/ri";
import { Controller, useForm, useWatch } from "react-hook-form";
import ServicesSelector from "./ServicesSelector";
import SpecificServicesSelector from "./SpecificServicesSelector";
import { Navigate, useNavigate } from "react-router-dom";
import ThankYou from "./ThankYou";
import CountriesTimezoneSelector from "./CountriesTimezoneSelector";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";


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
  "$5k-$10K",
  "$10k-$20K",
  "$20k-$50K",
  "$50k-$100K",
  "$100k-$150K",
  "$150k-$200K",
  "More than $200k"
]
const SOURCES = [
  "Google",
  "LinkedIn",
  "YouTube",
  "Website",
  "Referral",
  "Instagram",
  "Facebook",
  "Twitter",
  "Telegram",
  "WhatsApp",
  "Reddit",
  "Pinterest",
  "Quora",
  "Slack",
  "Discord",
  "Others"
];



const ApplyContactForm = () => {

  const ADYMIRE_STORAGE_KEY = "adymire_contact_form";


  const navigate = useNavigate()
  const [COUNTRIES, setCOUNTRIES] = useState([])
  const [open, setOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)
  const [specificserviceOpen, setSpecificServiceOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [openTimezone, setopenTimezone] = useState(false)

  const [submitState, setSubmitState] = useState(false)

  const [openPhone, setOpenPhone] = useState(false)
  const wrapperRef = useRef(null)


  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  // useEffect(() => {
  //   const CountriesData = getCountriesData().then((countrydata) => {
  //     setCOUNTRIES(countrydata)
  //     // setSelected(countrydata.find(c => c.code === "IN"))
  //     // setValue("country", countrydata.find(c => c.code === "IN"));
  //   })
  // }, [])



  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
    reset
  } = useForm({
    defaultValues: {
      service: [],
      specificService: [],
    }
  })


  useEffect(() => {
    const loadCountries = async () => {
      const countrydata = await getCountriesData();
      setCOUNTRIES(countrydata);

      const savedData = localStorage.getItem("adymire_contact_form");

      if (savedData) {
        const parsed = JSON.parse(savedData);

        const matchedCountry = countrydata.find(
          c => c.code === parsed?.country?.code
        );

        reset({
          ...parsed,
          country: matchedCountry || null,
        });

        setSelected(matchedCountry || null);
      } else {
        const india = countrydata.find(c => c.code === "IN");
        setSelected(india);
        setValue("country", india);
      }
      setIsLoaded(true);
    };

    loadCountries();
  }, [reset, setValue]);

  useEffect(() => {
    setValue("timezone", null)
  }, [selected])


  const selectedServices = useWatch({ control, name: "service" });
  const selectedSpecificServices = useWatch({
    control,
    name: "specificService",
  });


  useEffect(() => {
    const allowedSpecifics = selectedServices?.flatMap(
      service => SPECIFIC_SERVICES[service] || []
    );

    setValue(
      "specificService",
      (selectedSpecificServices || []).filter(item =>
        allowedSpecifics.includes(item)
      )
    );
  }, [selectedServices]);

  const formValues = watch();


  useEffect(() => {
    if (!isLoaded  || isSubmitted) return;
    localStorage.setItem(ADYMIRE_STORAGE_KEY, JSON.stringify(formValues));
  }, [formValues]);



  const decision = watch("decisionMaker");


  const submitContactForm = async (data) => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const docRef = await addDoc(
        collection(db, "adymire-client-data"),
        {
          ...data,
          createdAt: serverTimestamp(),
        }
      );

      console.log("✅ form submitted");

      localStorage.removeItem(ADYMIRE_STORAGE_KEY);
      reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("some error occured , please try again")
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <div>

              <Input
                {...register("fullName", { required: "Fullname must be required" })}
                label="Full Name"
                isRequired={true}
                placeholder="Johan Denial"
                labelClass="font-semibold text-xl mb-4"
                className="w-full border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
              />
              {errors.fullName && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.fullName?.message}</div>}
            </div>
            <div>

              <Input
                {...register("email", { required: "email must be required" })}
                label="Email Address"
                isRequired={true}
                type="email"
                placeholder="johndanial@gmail.com"
                labelClass="font-semibold text-xl mb-4"
                className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"

              />
              {errors.email && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.email?.message}</div>}

            </div>
            <div>

              <Controller
                name="country"
                control={control}
                rules={{ required: "country must be required" }}
                render={({ field }) => (
                  <CountriesSelector
                    {...field}
                    open={open}
                    setOpen={setOpen}
                    COUNTRIES={COUNTRIES}
                    selected={selected}
                    setSelected={setSelected}
                  />

                )}
              />
              {errors.country && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.country?.message}</div>}

            </div>
            <div>

              <Input
                {...register("companyName", { required: "Brand name or company name must be required" })}
                label="Company / Brand Name"
                isRequired={true}
                placeholder="Ex- Microsoft Inc."
                labelClass="font-semibold text-xl mb-4"
                className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"

              />
              {errors.companyName && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.companyName?.message}</div>}

            </div>

            <div>
              <Input
                {...register("phoneNumber", { required: "phone number must be required" })}
                label="Phone / WhatsApp Number"
                isRequired={true}
                placeholder="7017475420"
                type="number"
                labelClass="font-semibold text-xl mb-4"
                className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 pl-40 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
                element={<CountriesCodeSelector setValue={setValue} open={openPhone} setOpen={setOpenPhone} COUNTRIES={COUNTRIES} selected={selected} setSelected={setSelected} />}

              />
              <label className=" gap-3 flex  items-center mt-2">
                <input  {...register("isWhatsapp")} type="checkbox" className="accent-gray-500 h-4 w-4" />
                <span className="text-sm font-semibold text-gray-500">
                  This is my WhatsApp no
                </span>
              </label>
              {errors.phoneNumber && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.phoneNumber?.message}</div>}

            </div>

            <div>
              <Input
                {...register("web_app_url")}
                label="Website / App URL"
                placeholder="paste link here"
                labelClass="font-semibold text-xl mb-4"
                className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 pl-15 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
                element={<div className="absolute h-fit py-2 px-2"> <RiLinkM className="relative bg-[#f8eac2] p-2 rounded-lg w-auto  h-10" /> </div>}
              />
              <label className=" gap-3 flex  items-center mt-2">
                <input {...register("noWebsite")} type="checkbox" className="accent-gray-500 h-4 w-4" />
                <span className="text-sm font-semibold text-gray-500">
                  I don't have app and website
                </span>
              </label>
            </div>
            <div>
              <Select
                {...register("yourRole", { required: "this field must be required" })}
                label="Your Role"
                isRequired={true}
                options={ROLES}
                labelClass="font-semibold text-xl mb-4"
                className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
              />
              {errors.yourRole && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.yourRole?.message}</div>}

            </div>
            <Select
              {...register("ContactMode", { required: true })}
              label="Preferred Contact Mode"
              isRequired={true}
              options={CONTACT_MODES}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
            />
            <div>
              <Input
                {...register("meetingDate", { required: "this field must be required" })}
                onClick={(e) => e.target.showPicker()}
                label="Meeting Date"
                type="date"
                placeholder="paste link here"
                labelClass="font-semibold text-xl mb-4"
                className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4  font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
              />
              {errors.meetingDate && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.meetingDate?.message}</div>}

            </div>
            <div>
              <Input
                {...register("meetingTime", { required: "this field must be required" })}
                onClick={(e) => e.target.showPicker()}
                label="Meeting Time"
                type="time"
                placeholder="paste link here"
                labelClass="font-semibold text-xl mb-4"
                className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 pl-40 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
                element={<CountriesTimezoneSelector control={control} setValue={setValue} open={openTimezone} setOpen={setopenTimezone} COUNTRIES={COUNTRIES} selected={selected} setSelected={setSelected} />}

              />
              {errors.meetingTime && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.meetingTime?.message}</div>}
              {errors.timezone && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.timezone?.message}</div>}

            </div>

          </div>
        </div>

        <div className="w-full h-0.5 bg-gray-300 my-10 max-w-6xl mx-auto"></div>
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-2">Project Details :</h2>
          <p className="text-gray-600 font-semibold text-xl mb-8">
            Fill all fields Correct & carefully
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Controller
                name="service"
                control={control}
                rules={{ validate: value => value?.length > 0 || "Please select at least one service" }}
                render={({ field }) => (
                  <ServicesSelector
                    {...field}
                    serviceOpen={serviceOpen}
                    setServiceOpen={setServiceOpen}
                    SERVICES={SERVICES}
                  />

                )}
              />
              {errors.service && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.service?.message}</div>}
            </div>
            <div>
              <Controller
                name="specificService"
                control={control}
                rules={{
                  validate: value =>
                    value?.length > 0 ||
                    "Please select at least one specific service"
                }}
                render={({ field }) => (
                  <SpecificServicesSelector
                    {...field}
                    specificserviceOpen={specificserviceOpen}
                    setSpecificServiceOpen={setSpecificServiceOpen}
                    selectedServices={selectedServices}
                    SPECIFIC_SERVICES={SPECIFIC_SERVICES}
                  />
                )}

              />
              {errors.specificService && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.specificService?.message}</div>}
            </div>

            <Select
              {...register("estimatedBudget", { required: true })}
              label="Estimated Budget"
              isRequired={true}
              options={Your_Budget}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
            />
            <Select
              {...register("projectTimeline", { required: true })}
              label="Project Timeline"
              isRequired={true}
              options={TIMELINES}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
            />
            <Select
              {...register("findSource", { required: true })}
              label="How did you hear about us?"
              isRequired={true}
              options={SOURCES}
              labelClass="font-semibold text-xl mb-4"
              className="w-full  border-2 border-gray-300 rounded-lg py-4 px-4 font-semibold focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
            />

            <div>
              <label className="inline-block mb-4 text-xl font-semibold">
                Are you the decision maker? <span className='text-red-700'>*</span>
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

          <h2 className="text-2xl font-bold mt-14 mb-6">Project About <span className='text-red-700'>*</span></h2>
          <div>

            <textarea
              {...register("projectAbout", { required: "this field is required" })}
              placeholder="Describe Your project About"
              className="w-full min-h-45 border-2 border-gray-300 rounded-lg py-4 px-4 text-base font-semibold shadow-[1px_1px_8px_#d3cdcd] focus:outline-none focus:border-amber-300 focus:shadow-[0px_1px_8px_yellow]"
            />
            {errors.projectAbout && <div className="text-xs pl-1 pt-1 text-red-600">{errors?.projectAbout?.message}</div>}

          </div>

          <div className="mt-8 space-y-4 ">
            <label className=" gap-3 flex  items-center">
              <input  {...register("aggreements", { required: true })} type="checkbox" className="accent-yellow-500  mt-1 h-5 w-5" />
              <span className="text-xl font-semibold text-gray-500">
                "I confirm that all information provided is accurate and I agree to
                Adymire’s hiring terms."
              </span>
              {errors.aggreements && <span className="text-xl  text-red-600">*</span>}

            </label>
            <div>

              <label className=" gap-3 flex  items-center">
                <input  {...register("acceptTerms", { required: true })} type="checkbox" className="accent-yellow-500 mt-1 h-5 w-5" />
                <span className="text-xl font-semibold text-gray-500" >
                  Accept our{" "}
                  <span onClick={() => window.open("/policy/terms-and-conditions", '_blank', 'noopener,noreferrer')} className="text-blue-600 cursor-pointer">
                    terms and conditions
                  </span>
                </span>
                {errors.acceptTerms && <span className="text-xl  text-red-600">*</span>}
              </label>
            </div>
            <div>

              <label className=" gap-3 flex  items-center">
                <input  {...register("dataPrivacy", { required: true })} type="checkbox" className="accent-yellow-500 mt-1  h-5 w-5" />
                <span className="text-xl font-semibold text-gray-500">
                  Accept our{" "}
                  <span onClick={() => window.open("/policy/privacy-policy", '_blank', 'noopener,noreferrer')} className="text-blue-600 cursor-pointer">
                    Data Privacy Consent
                  </span>
                </span>
                {errors.dataPrivacy && <span className="text-xl  text-red-600">*</span>}
              </label>
            </div>
          </div>
          <button disabled={isSubmitting} className="cursor-pointer w-full mt-10 py-4 rounded-xl bg-yellow-100 border border-yellow-400 font-semibold text-lg hover:bg-yellow-200 transition">
             {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {/* <ThankYou submitState={submitState} setSubmitState={setSubmitState} /> */}
          {isSubmitted && (
            <ThankYou
              submitState={isSubmitted}
              setSubmitState={setIsSubmitted}
            />
          )}
        </div>
      </form>
    </section >
  );
};

export default ApplyContactForm;
