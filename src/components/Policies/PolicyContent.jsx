import PolicySection from "./PolicySection";

const PolicyContent = ({ sections, activePolicytitle, lastUpdateDate, company }) => {
  return (
    <main className="col-span-12 lg:col-span-9 h-full pr-20 pl-8">
      <div className="border-gray-600 border-y-2 border-dashed mb-10">
        <div className="text-center text-2xl font-bold border-y-2 p-2  border-gray-600 border-dashed my-1">
          <h1>{activePolicytitle}</h1>
          <h1>{company}</h1>
        </div>
      </div>
      <div className="text-gray-600 my-2 text-base font-semibold">
        Last Updated : {lastUpdateDate}
      </div>
      {sections?.map((section) => (
        <PolicySection key={section?.id} section={section} />
      ))}
      <div className="border-gray-600 border-y-2 border-dashed my-10">
        <div className="text-2xl text-center font-semibold text-gray-900  py-3 my-1 border-gray-600 border-y-2 border-dashed">
          END OF {activePolicytitle?.toUpperCase()}
        </div>
      </div>
    </main>
  );
};

export default PolicyContent;