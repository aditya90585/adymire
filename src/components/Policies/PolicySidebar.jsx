const PolicySidebar = ({ sections }) => {
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
                href={`#${section.id}`}
                className="block text-gray-700 font-semibold hover:text-yellow-500 transition"
              >
                {section.heading}
              </a>

              {section.subSections && (
                <ul className="ml-4 mt-2 space-y-3">
                  {section.subSections.map((sub) => (
                    <li key={sub.id}>
                      <a
                        href={`#${sub.id}`}
                        className="text-gray-600 hover:text-yellow-500 text-md font-semibold"
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
