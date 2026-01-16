import ProcessContainer from "../ProcessContainer";


const uiuxSteps = [
  {
    step: "01",
    title: "Strategy",
    points: [
      "Market Research",
      "User Interview",
      "Brand Strategy",
      "Measure of success",
      "Project Priority",
    ],
  },
  {
    step: "02",
    title: "Discovery",
    points: [
      "Competitor Analysis",
      "Analytics Review",
      "Content Audit",
      "User Interviews",
      "Surveys",
      "User Testing",
    ],
  },
  {
    step: "03",
    title: "Analysis",
    points: [
      "Use cases",
      "Persona Creation",
      "Story Boards",
      "Red route diagram",
      "Experience Map",
      "Workflow Diagram",
    ],
  },
  {
    step: "04",
    title: "Design",
    points: [
      "Mood Board",
      "Site Map",
      "Sketching",
      "Wireframing",
      "Prototyping",
      "User Testing",
    ],
  },
  {
    step: "05",
    title: "Production",
    points: [
      "Prototyping",
      "Beta Launch",
      "User Testing",
      "Final Launch",
    ],
  },
];

const UIUXProcesssection = () => {
  return (
    <ProcessContainer
      heading="UX & UI Design Process"
      subHeading="We follow 5 stage design methods"
      steps={uiuxSteps}
    />
  );
};

export default UIUXProcesssection;
