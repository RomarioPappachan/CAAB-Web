"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";

function LoginSignupPopup() {
  return (
    <div className="w-full md:max-w-[854px] h-auto md:h-[509px] px-2 md:py-10 bg-white drop-shadow-xl rounded-2xl flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:1/3 lg:w-1/2 h-auto md:h-full flex justify-center items-center">
        <img
          src="/login.svg"
          alt="login-img"
          className="w-3/4 md:w-full lg:h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:2/3 lg:w-1/2 h-auto md:h-full md:ps-6 px-4 md:px-0 border-[#C0C7D5] border-t-[1px] md:border-l-[1px] md:border-t-0 text-[#C0C7D5] relative ">
        <GoDotFill className=" size-0 md:absolute md:size-4 md:-left-2 md:-top-2 " />
        <GoDotFill className="size-0 md:absolute md:size-4 md:-left-2 md:-bottom-2" />

        {/* Login / Signup Header */}
        <div className="flex items-end h-10 mt-12 md:mt-16  text-black gap-2">
          <h1 className="w-full md:w-auto font-semibold text-2xl text-center">
            Login <span className="font-normal text-base">or</span> Signup
          </h1>
        </div>

        {/* Mobile Number Input */}
        <div className="w-full md:w-[374px] h-[56px] border-[1px] border-[#707784] rounded-lg flex mt-12 md:mt-8 py-3">
          <div className="w-2/12 h-full text-[#404753] text-base flex justify-center items-center border-[#707784] border-r-[1px]">
            <p>+91</p>
          </div>
          <div className="w-10/12">
            <input
              type="text"
              className="w-full h-full ps-4 outline-none text-base text-[#404753] placeholder:text-[#404753]"
              placeholder="Mobile number *"
            />
          </div>
        </div>

        {/* Terms and Privacy Policy */}
        <div className="flex items-end mt-4">
          <p className="text-[#404753] text-[12px] pe-2">
            By continuing, I agree to the{" "}
            <span className="text-[#0076D2] text-[14px] font-semibold">
              Terms of Use & Privacy Policy
            </span>
          </p>
        </div>

        {/* Continue Button */}
        <button className="w-full md:w-[374px] h-[56px] mt-8 bg-[#74CE3A] text-[14px] font-semibold text-white flex justify-center items-center">
          CONTINUE
        </button>

        {/* Help Link */}
        <div className="flex items-end mt-4 md:mt-8 mb-14 md:mb-0">
          <p className="text-[#404753] text-[12px] pe-2">
            Have trouble logging in?{" "}
            <span className="text-[#0076D2] text-[14px] font-semibold">
              Get Help
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignupPopup;
