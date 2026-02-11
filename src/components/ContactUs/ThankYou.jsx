import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ThankYou = ({submitState, setSubmitState}) => {
    const navigate = useNavigate()
if(!submitState) return null
  return (
    <div className="min-h-screen fixed inset-0 z-5 flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md rounded-2xl border-2 border-gray-200 shadow-lg p-8 text-center">
        
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Thanks for Submitting Your Application
        </h2>
        <FaCircleCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />

        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          We’re reviewing it!
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          We will contact you within 10 to 20 minutes via <br />
          <span className="font-medium text-gray-800">
            Email, Call & WhatsApp
          </span>
        </p>

        <button
          onClick={() =>{setSubmitState(false)
          navigate("/")
          } }
          className="w-full bg-yellow-400 hover:bg-yellow-300 cursor-pointer text-[#1d1a1a] font-bold py-3 rounded-lg transition"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
