import { useEffect, useRef } from "react";

const PolicySidebar = ({ sections, activeSection, activeSubSection, setActiveSection, setActiveSubSection }) => {
  const sectionRefs = useRef({});
  const subSectionRefs = useRef({});
  useEffect(() => {
    const el =
      subSectionRefs.current[activeSubSection] ||
      sectionRefs.current[activeSection];

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeSection, activeSubSection]);
  return (
    <div className="col-span-3 hidden lg:block h-full relative">
      <div className="sticky top-18 max-h-[calc(100vh-170px)] overflow-y-scroll">
        <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 px-4 py-2">
          Table of content
        </h3>

        <ul className="space-y-4 text-base pl-6">
          {sections?.map((section) => (
            <li key={section.id}>
              <a
                onClick={() => {
                  setActiveSection(section.id);
                  setActiveSubSection(null);
                }}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                href={`#${section.id}`}
                className={`block ${section.id == activeSection ? "text-yellow-400" : "text-gray-700"} font-semibold  transition`}
              >
                {section.heading}
              </a>

              {section.subSections && (
                <ul className="ml-4 mt-2 space-y-3">
                  {section.subSections.map((sub) => (
                    <li key={sub.id}>
                      <a
                        onClick={() => {
                          setActiveSection(null);
                          setActiveSubSection(sub.id);
                        }}
                        ref={(el) =>
                          (subSectionRefs.current[sub.id] = el)
                        }
                        href={`#${sub.id}`}
                        className={`  ${sub.id == activeSubSection ? "text-yellow-400" : "text-gray-700"} text-md font-semibold`}
                      >
                        {sub.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PolicySidebar;
