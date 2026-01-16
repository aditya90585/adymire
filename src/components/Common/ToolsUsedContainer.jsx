import { useRef } from "react";
import "./ToolsUsedContainer.css"


const ToolsUsedContainer = ({title,toolsData}) => {
    const scrollRefs = useRef([]);
    
      const scroll = (index, direction) => {
        const container = scrollRefs.current[index];
        if (!container) return;
    
        container.scrollBy({
          left: direction === "left" ? -260 : 260,
          behavior: "smooth",
        });
      };
  return (
    <section className="tools-used">
      <h2 className="tools-used__title">{title}</h2>
      <div className="h-1 rounded-full bg-amber-400 w-40 mx-auto mb-10"></div>

      {toolsData.map((section, index) => (
        <div className="tools-used__row" key={index}>
          <button
            className="tools-used__arrow rotate-180"
            onClick={() => scroll(index, "left")}
          >
            ➔
          </button>

          <div className="tools-used__section">
            <div className="tools-used__category">
              <div className="tools-used__category-img">
                <img src={section.icon} alt={section.title} />
              </div>
              <h3>{section.title}</h3>
              <p>{section.subtitle}</p>
            </div>

            <div
              className="tools-used__tools"
              ref={(el) => (scrollRefs.current[index] = el)}
            >
              {section.tools.map((tool, i) => (
                <div className="tools-used__tool-card" key={i}>
                  <div className="tools-used__tool-img aspect-square">
                    <img src={tool.icon} alt={tool.name} />
                  </div>
                  <span className="tools-used__tool-percent">
                    {tool.percentage}
                  </span>
                  <span className="tools-used__tool-name">
                    {tool.name}
                  </span>

                </div>
              ))}
            </div>
          </div>

          <button
            className="tools-used__arrow"
            onClick={() => scroll(index, "right")}
          >
            ➔
          </button>
        </div>
      ))}
    </section>
  )
}

export default ToolsUsedContainer