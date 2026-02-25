import React from "react";
import { CgClose } from "react-icons/cg";
import { AdymireLogo2 } from "../../assets";

const AlertBox = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-600 flex items-center justify-center">

      <div
        className="absolute inset-0 bg-[#5e5d5d60] backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md text-center animate-fadeIn">
        <span onClick={onClose} className="absolute cursor-pointer right-7 top-7"><CgClose/></span>
        <div className="w-full my-4 ">
            <img loading="lazy" className="mx-auto h-15 w-15" src={AdymireLogo2} alt="logo" />
            </div>
        <h2 className="text-xl font-bold mb-4">Reminder</h2>
        <p className="text-gray-600 font-semibold mb-6">{message}</p>

        <button
          onClick={onClose}
          className="px-6 py-2 w-full cursor-pointer  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AlertBox;