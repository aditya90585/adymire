// CertificationSection.jsx
// IMAGES:
//   - Certificate 1 (Google Ads Search Cert): src/assets/certificate.svg  OR  1oEfMFNFIsTmw0JSSwdiIAQ.svg
//   - Certificate 2 (Google Digital Garage - Fundamentals): src/assets/NoPath - Copy (21).svg (or similar cert img)
//   - Certificate 3 (LinkedIn Learning - Advanced Google Ads): src/assets/1695281987943.svg
//   - Color gradient divider bar: CSS gradient (orange → dark)

const certs = [
  {
    id: "google-search",
    title: "Google Ads Search Certification",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780244452/certificate_znc3xm.webp",
    imgPlaceholder: "certificate.svg\n(Google Ads Search Certification\nBenjamin Mangold)",
    iconBg: "bg-[#fcc719]/10",
  },
  {
    id: "digital-garage",
    title: "Fundamental of Digital marketing",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780244461/NoPath_-_Copy_5_tri20d.webp",
    imgPlaceholder: "1oEfMFNFIsTmw0JSSwdiIAQ.svg\n(Google Digital Garage\nAayush Agrawal)",
    iconBg: "bg-blue-50",
  },
  {
    id: "linkedin-advanced",
    title: "Advanced Google Ads",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1780244459/1695281987943_yzoarp.webp",
    imgPlaceholder: "1695281987943.svg\n(LinkedIn Learning\nAdvanced Google Ads cert)",
    iconBg: "bg-blue-900/5",
  },
  {
    id: "linkedin-advanced",
    title: "Meta Ads Marketing Certification",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1782023197/certificate-04-F21fam8o_qz2fyy.svg",
    imgPlaceholder: "1695281987943.svg\n(LinkedIn Learning\nAdvanced Google Ads cert)",
    iconBg: "bg-blue-900/5",
  },
  {
    id: "linkedin-advanced",
    title: "LinkedIn Ads marketing",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1782023248/certificate-01-D2SC-aLd_xxhnw1.svg",
    imgPlaceholder: "1695281987943.svg\n(LinkedIn Learning\nAdvanced Google Ads cert)",
    iconBg: "bg-blue-900/5",
  },
  {
    id: "linkedin-advanced",
    title: "MOZ SEO Certification",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1782023300/certificate-08-BcDp_QBa_ko0ed4.svg",
    imgPlaceholder: "1695281987943.svg\n(LinkedIn Learning\nAdvanced Google Ads cert)",
    iconBg: "bg-blue-900/5",
  },
  {
    id: "linkedin-advanced",
    title: "HubSpot Marketing Certification",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1782023361/certificate-09-Dz8lTW58_gcvrwa.svg",
    imgPlaceholder: "1695281987943.svg\n(LinkedIn Learning\nAdvanced Google Ads cert)",
    iconBg: "bg-blue-900/5",
  },
  {
    id: "linkedin-advanced",
    title: "Digital marketing Professional",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1782023527/certificate-07-CFcCEVWs_gnwqbp.svg",
    imgPlaceholder: "1695281987943.svg\n(LinkedIn Learning\nAdvanced Google Ads cert)",
    iconBg: "bg-blue-900/5",
  },
  {
    id: "linkedin-advanced",
    title: "Fundamental of Digital marketing",
    imgSrc: "https://res.cloudinary.com/dm3xoqps6/image/upload/v1782023556/certificate-02-eJZwd8lx_q2a2fz.svg",
    imgPlaceholder: "1695281987943.svg\n(LinkedIn Learning\nAdvanced Google Ads cert)",
    iconBg: "bg-blue-900/5",
  },
];

export default function CertificationSection() {
  return (
    <section className="bg-white py-4 sm:py-10 px-5 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-bold text-5xl sm:text-6xl lg:text-[72px] leading-tight text-[#070707]">
            Verified <span className="text-[#fcc719]">Certification</span>
          </h2>
          <p className="text-[#3a3a3a]  font-bold text-lg sm:text-[25px] mt-3">
            Key Factor that <span className="text-[#ff8c00] italic">Bring the Result!</span>
          </p>
        </div>

        
        <div className="w-[60%] mx-auto h-[5px] sm:h-[6px]  mb-10 sm:mb-14"
          style={{ background: "linear-gradient(to right, #ff8c00, #fcc719, #3a3a3a, #070707)" }} />

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {certs.map((cert) => (
            <div key={cert.id} className="bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Certificate image */}
              <div className={`${cert.iconBg} w-full flex items-center justify-center border-b border-gray-100 overflow-hidden`}>
            
                  <img src={cert.imgSrc} alt={cert.title} className="w-full h-full object-contain" />
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-4 sm:py-5">
                <p className="font-bold text-[#070707] text-sm sm:text-[16px] leading-tight flex-1 pr-3">
                  {cert.title}
                </p>
                {/* External link icon */}
                <button className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-[#fcc719]/20 rounded-lg flex items-center justify-center text-[#ff8c00] hover:bg-[#fcc719] hover:text-[#070707] transition-colors group-hover:scale-110 duration-200">
                  {/* Replace: <img src="/src/assets/external-link-icon.svg" className="w-4 h-4" /> */}
                  ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
