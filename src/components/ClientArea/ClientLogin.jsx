import React from 'react'
import Input from "../UI/Input";
import Button from "../UI/Button";
import AdymireLogo from "@/assets/logo/AdymireLogo.webp"
import { NavLink, useNavigate } from 'react-router-dom';

const ClientLogin = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-[#FFF9EE] flex items-center justify-center">
            <div className="w-full   grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-50 px-30">

                <div className="flex items-center justify-center ">
                    <img className="w-[70%] aspect-square rounded-full" src={AdymireLogo} alt="adymire-logo" />
                </div>

                <div className="flex flex-col items-center ">
                    <NavLink to={"/"} className="text-4xl font-extrabold mb-4">
                        Ady<span className="text-yellow-400">mire</span>
                    </NavLink>

                    <div className="w-full  bg-white rounded-xl shadow-[1px_2px_6px_gray] px-8 py-4">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Login
                        </h2>


                        <Input
                            type="text"
                            label=" Mobile Number Or Email"
                            labelClass="text-sm font-semibold text-gray-700 mb-3"
                            placeholder="mobile no or email"
                            parentClass="mb-5"
                            className="w-full text-sm font-bold px-4 py-4 border-none shadow-[1px_1px_8px_gray] rounded-lg focus:outline-none  focus:ring-2 focus:ring-[#daa2a9]"
                        />

                        <Input
                            type="text"
                            label="Password"
                            labelClass="text-sm font-semibold text-gray-700 mb-3"
                            placeholder="Enter Your Password"
                            parentClass="mb-5"
                            className="w-full text-sm font-bold px-4 py-4 border-none shadow-[1px_1px_8px_gray] rounded-lg focus:outline-none  focus:ring-2 focus:ring-[#daa2a9]"
                        />

                        <a className='text-blue-800 font-semibold my-2 flex justify-end' href="#">Forgot Password</a>


                        <Button onClick={() => { navigate("/client/otp") }} className="w-full text-center flex justify-center items-center shadow-[1px_1px_8px_pink] text-xl  bg-[#FFE7B3] text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-white hover:-translate-1 hover:shadow-[2px_2px_6px_gray] cursor-pointer transition">
                            Continue
                        </Button>
                    </div>

                    <Button onClick={() => { navigate("/user/signup") }} className="w-full text-center text-black mt-6 shadow-[1px_1px_8px_pink] border border-gray-400 text-xl  bg-[#c5c5c5] py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white hover:-translate-1 hover:shadow-[3px_3px_4px_gray] cursor-pointer transition">
                        Signup
                    </Button>

                </div>
            </div>
        </div>
    );
};


export default ClientLogin