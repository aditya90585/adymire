import React from 'react'
import { useState } from 'react';
import AdymireLogo from "@/assets/logo/AdymireLogo.webp"
import { NavLink, useNavigate } from 'react-router-dom';
import Input from "../UI/Input";
import Button from "../UI/Button";

const ClientOtpVerification = () => {
    const [otp, setOtp] = useState(['', '', '', ''])
    const [timer, setTimer] = useState(59)
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-[#FFF9EE] flex items-center justify-center">
            <div className="w-full   grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-50 px-30">

                <div className="flex items-center justify-center ">
                    <img className="w-[70%] aspect-square rounded-full" src={AdymireLogo} alt="adymire-logo" />
                </div>

                <div className="flex flex-col items-center ">
                    <NavLink to={"/"} className="text-4xl font-extrabold mb-8">
                        Ady<span className="text-yellow-400">mire</span>
                    </NavLink>

                    <div className="w-full  bg-white rounded-xl shadow-[1px_2px_6px_gray] px-8 py-5">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Verify OTP
                        </h2>
                        <div className='font-semibold text-xl text-[#666666] my-4'>OTP</div>
                        <div className='flex justify-between items-center'>
                            {otp?.map((digit, index) => (
                                <Input placeholder={digit} className="shadow-[2px_2px_8px_gray] focus:bg-[#f8e3bb] w-18 h-18 rounded-lg flex justify-center items-center text-2xl font-semibold text-center" />
                            ))}
                        </div>

                        <div className='flex justify-between items-center my-12 text-blue-800 font-semibold '>
                         <span>00:59</span>
                        <a className='text-blue-800 font-semibold flex justify-end' href="#">Resend OTP</a>
                        </div>

                        <Button onClick={() => { navigate("/client/otp") }} className="w-full text-center flex justify-center items-center shadow-[1px_1px_8px_pink] text-xl  bg-[#FFE7B3] text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-white hover:-translate-1 hover:shadow-[2px_2px_6px_gray] cursor-pointer transition">
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientOtpVerification