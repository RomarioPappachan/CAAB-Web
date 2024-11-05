"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";

function OtpPopup() {
  return (
    <div className="w-full md:max-w-[854px] h-auto md:h-[509px] py-10 bg-white drop-shadow-xl rounded-2xl flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-5/12 lg:w-1/2 p-5 h-full  md:h-full flex justify-center items-center">
        <img
          src="/otp.svg"
          alt="login-img"
          className="w-full lg:h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-7/12 lg:w-1/2 h-auto md:h-full md:ps-6 px-4 md:px-0 border-[#C0C7D5] border-t-[1px] md:border-l-[1px] md:border-t-0 text-[#C0C7D5] relative ">
        <GoDotFill className="size-0 md:absolute md:size-4 md:-left-2 md:-top-2 " />
        <GoDotFill className="size-0 md:absolute md:size-4 md:-left-2 md:-bottom-2" />

        <div className="mt-12 md:mt-16">
          <h1 className="w-full md:w-auto font-semibold text-2xl text-[#191C21]">
            Verify with OTP{" "}
          </h1>
          <p className="text-[#424752] text-xs pt-5">Sent to 9539083486</p>
        </div>
        <div className="w-[232px] mt-10 flex justify-between">
          <input
            type="tel"
            maxLength={1}
            className="w-10 h-14 border-2 border-[#707784] rounded-md text-black text-xl p-3"
          />
          <input
            type="tel"
            maxLength={1}
            className="w-10 h-14 border-2 border-[#707784] rounded-md text-black text-xl p-3"
          />
          <input
            type="tel"
            maxLength={1}
            className="w-10 h-14 border-2 border-[#707784] rounded-md text-black text-xl p-3"
          />
          <input
            type="tel"
            maxLength={1}
            className="w-10 h-14 border-2 border-[#707784] rounded-md text-black text-xl p-3"
          />
        </div>

        <p className="text-[#707784] text-xs mt-12">
          Resend OTP in <span className="text-[#191C21] text-xs"> 00:30</span>{" "}
        </p>
        <p className="text-[#424752] text-xs mt-12">
          Have trouble logging in ?{" "}
          <span className="text-[#003E82] text-sm font-semibold">Get Help</span>
        </p>
      </div>
    </div>
  );
}

export default OtpPopup;
