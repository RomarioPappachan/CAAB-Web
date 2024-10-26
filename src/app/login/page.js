"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";

function Login() {
  return (
    <div className="w-full max-w-[854px] h-[auto] lg:h-[509px] py-10 bg-white drop-shadow-xl rounded-2xl flex flex-col lg:flex-row">
      {/* Image Section */}
      <div className="w-full lg:w-1/2  h-full  lg:h-full flex justify-center items-center">
        <img src="/login.svg" alt="login-img" className="w-full h-full object-cover" />
      </div>
      
      {/* Form Section */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full lg:ps-6 px-4 md:px-20 lg:px-0    border-[#C0C7D5] border-t-[1px] lg:border-l-[1px] lg:border-t-0 text-[#C0C7D5] relative ">
        <GoDotFill className=" size-0 lg:absolute lg:size-4 lg:-left-2 lg:-top-2 " />
        <GoDotFill className="size-0 lg:absolute lg:size-4 lg:-left-2 lg:-bottom-2" />

        {/* Login / Signup Header */}
        <div className="flex items-end h-10 mt-12 lg:mt-16  text-black gap-2">
          
          <h1 className="w-full lg:w-auto font-semibold text-5xl lg:text-2xl text-center">Login <span className="font-normal text-3xl lg:text-base">or</span> Signup</h1>
         
        </div>

        {/* Mobile Number Input */}
        <div className="w-full lg:w-[374px] h-[80px] lg:h-[56px] border-[1px] border-[#707784] rounded-lg flex mt-12 lg:mt-8 py-3">
          <div className="w-2/12 h-full text-[#404753] text-2xl lg:text-[16px] flex justify-center items-center border-[#707784] border-r-[1px]">
            <p>+91</p>
          </div>
          <div className="w-10/12">
            <input
              type="text"
              className="w-full h-full ps-4 outline-none text-2xl lg:text-[16px] text-[#404753] placeholder:text-[#404753]"
              placeholder="Mobile number *"
            />
          </div>
        </div>

        {/* Terms and Privacy Policy */}
        <div className="flex items-end mt-4">
          <p className="text-[#404753] text-xl lg:text-[12px] pe-2">
            By continuing, I agree to the{" "}
          </p>{" "}
          <span className="text-[#0076D2] text-2xl lg:text-[14px] font-semibold">
            Terms of Use & Privacy Policy
          </span>
        </div>

        {/* Continue Button */}
        <button className="w-full lg:w-[374px] h-[80px] lg:h-[56px] mt-8 bg-[#0076D2] text-2xl lg:text-[14px] font-semibold text-white flex justify-center items-center">
          CONTINUE
        </button>

        {/* Help Link */}
        <div className="flex items-end mt-4 lg:mt-8 mb-14 lg:mb-0">
          <p className="text-[#404753] text-xl lg:text-[12px] pe-2">
            Have trouble logging in?{" "}
          </p>{" "}
          <span className="text-[#0076D2] text-2xl lg:text-[14px] font-semibold">
            Get Help
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;