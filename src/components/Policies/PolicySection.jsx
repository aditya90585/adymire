import { useEffect, useRef } from "react";

const PolicySection = ({ section, setActiveSection, setActiveSubSection, scrollRoot }) => {
  const sectionRef = useRef(null);
  const subRefs = useRef({});

  useEffect(() => {
    if (!scrollRoot?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(section.id);
          setActiveSubSection(null); 
        }
      },
      {
        root: scrollRoot.current,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [section.id]);

  useEffect(() => {
    if (!scrollRoot?.current || !section.subSections) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSubSection(entry.target.id);
          setActiveSection(null)
        }
      },
      {
        root: scrollRoot.current,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );
    section.subSections.forEach((sub) => {
      if (subRefs.current[sub.id]) {
        observer.observe(subRefs.current[sub.id]);
      }
    });

    return () => observer.disconnect();
  }, [section.subSections,scrollRoot,section.id]);
  return (
    <section ref={sectionRef} id={section.id} className="mt-14 scroll-mt-40">


      <h2 className="text-2xl font-semibold text-gray-900  py-3 mb-8 border-gray-600 border-y-2 border-dashed">
        {section.heading?.toUpperCase()}
      </h2>


      {section.content?.map((text, idx) => (
        <p key={idx} className="text-gray-500 text-lg font-semibold leading-7 mb-3">
          {text}
        </p>
      ))}

      {section.bullets && (
        <ul className="list-disc pl-6 space-y-2 text-gray-500 text-lg font-semibold mt-4 mb-3">
          {section.bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      {section.note && (
        <p className="text-gray-500 text-lg font-semibold leading-7 mb-6">
          {section.note}
        </p>
      )}

      {section.subSections?.map((sub) => (
        <div  ref={(el) => (subRefs.current[sub.id] = el)} key={sub.id} id={sub.id} className="mt-8 scroll-mt-40">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            {sub.heading}
          </h3>

          {sub.content?.map((text, idx) => (
            <p key={idx} className="text-gray-500 text-lg font-semibold leading-7 mb-6">
              {text}
            </p>
          ))}

          {sub.bullets && (
            <ul className="list-disc pl-6 space-y-2 font-semibold text-gray-500 text-lg mt-4 mb-6">
              {sub.bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {sub.note && (
            <p className="text-gray-500 text-lg font-semibold leading-7 mb-6">
              {sub.note}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default PolicySection;
