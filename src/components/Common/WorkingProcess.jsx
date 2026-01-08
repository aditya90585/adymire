import "./WorkingProcess.css";
import { 
  TwoPeopleSitting, 
  WorkingProcessicons1, 
  WorkingProcessicons2, 
  WorkingProcessicons3, 
  WorkingProcessicons4, 
  WorkingProcessicons5, 
  WorkingProcessicons6 
} from "@/assets";


export default function WorkingProcess() {
  const processData = [
    {
      id: 1,
      title: "Business understanding",
      desc: "We create smart, functional, and stylish plans that match your needs,lifestyles and design vision perfectly.",
      position: "top-left",
      icon:WorkingProcessicons1
    },
    {
      id: 2,
      title: "RND",
      desc: "Quality construction with trusted materials,skilled workmanship, and smooth executionto deliver durable and beautiful spaces.",
      position: "top-right",
      icon:WorkingProcessicons2
    },
    {
      id: 3,
      title: "Weekly 1:1 Update",
      desc: "We transform old or dull spaces intomodern, efficient, and stylishenvironments with minimal disruption.",
      position: "left",
      icon:WorkingProcessicons3
    },
    {
      id: 4,
      title: "Design UI & UX",
      desc: "Unique design concepts crafted creatively to reflect your personality and enhancethe overall beauty of your space.",
      position: "right",
      icon:WorkingProcessicons4
    },
    {
      id: 5,
      title: "Clean Architecture",
      desc: "Clean, thoughtful architecture focusingon smart layouts, functionality, andtimeless design aesthetics..",
      position: "bottom-left",
      icon:WorkingProcessicons5
    },
    {
      id: 6,
      title: "Development",
      desc: "Designs that blend natural light,greenery,and eco-friendly materialsto create calm,refreshing, nature-connected spaces.",
      position: "bottom-right",
      icon:WorkingProcessicons6
    },
  ];

  return (
    <section className="process-section">
      <h2 className="title">
        Working Process
        <span className="underline"></span>
      </h2>

      <div className="process-wrapper">

        <div className="center-box">
          <div className="center-image"><img src={TwoPeopleSitting} alt="TwoPeopleSitting-with-laptop-illustration" /></div>
        </div>

        {processData.map((item) => (
          <div key={item.id} className={`process-item ${item.position}`}>
            <div className="icon-circle">
                <img src={item.icon} alt={item.title} />
            </div>

            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
