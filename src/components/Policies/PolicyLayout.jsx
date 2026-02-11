import PolicyTabs from "./PolicyTabs";
import PolicySidebar from "./PolicySidebar";
import PolicyContent from "./PolicyContent";
import PolicyHeader from "./PolicyHeader";
import { useRef, useState } from "react";

const PolicyLayout = ({ policies, activePolicy }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef} className=" mx-auto pt-20 h-screen overflow-y-scroll  overflow-x-hidden [&::-webkit-scrollbar]:hidden">
      <PolicyHeader activePolicytitle={activePolicy?.title} lastUpdateDate={activePolicy?.lastUpdated} />
      <PolicyTabs
        policies={policies}
        activeKey={activePolicy?.key}
      />

      <div className="grid grid-cols-12 gap-10 mt-2 h-[calc(100vh-200px)]">
        <PolicySidebar
          sections={activePolicy?.sections}
          activeSection={activeSection}
          activeSubSection={activeSubSection}
          setActiveSection={setActiveSection}
          setActiveSubSection={setActiveSubSection}
        />
        <PolicyContent
          sections={activePolicy?.sections}
          activePolicytitle={activePolicy?.title}
          company={activePolicy?.company}
          lastUpdateDate={activePolicy?.lastUpdated}
          setActiveSection={setActiveSection}
          setActiveSubSection={setActiveSubSection}
          scrollRoot={scrollRef}
        />
      </div>
    </div>
  );
};

export default PolicyLayout;
