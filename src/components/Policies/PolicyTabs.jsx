import { useNavigate } from "react-router-dom";

const PolicyTabs = ({ policies, activeKey }) => {
  const navigate = useNavigate()
  return (
    <nav className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden z-20 px-16 w-screen gap-6 border-y-2 bg-[#faeeb3] border-y-gray-200   p-4 pt-6 justify-evenly sticky lg:-top-1 -top-4">
      {policies.map((policy) => (
        <button
          key={policy?.key}
          onClick={() => navigate(`/policy/${policy?.key}`) }
          className={`pb-1 text-base whitespace-nowrap  border-b-3 transition ${
            activeKey === policy.key
              ? "border-yellow-400 text-gray-900 font-bold"
              : "border-transparent font-semibold text-gray-500 hover:text-gray-800"
          }`}
        >
          {policy.title}
        </button>
      ))}
    </nav>
  );
};

export default PolicyTabs;
