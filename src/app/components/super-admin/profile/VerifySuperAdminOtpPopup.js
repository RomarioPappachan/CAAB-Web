"use client";
import React from "react";
import { createPortal } from "react-dom";

function VerifySuperAdminOtpPopup(props) {
  function handleVerifyOtp() {
    props.setIsVerifyOtpOpen(false);
  }
  return createPortal(
    <div className="w-screen h-screen px-4 md:px-8 lg:px-[72px] py-14 bg-[#000000c1] fixed top-0 left-0 z-50 flex justify-center items-center">
      <div className="w-[560px] h-[472px] flex flex-col gap-10 bg-white">
        <div className="p-6 bg-[#003E82] text-white text-xl font-semibold relative">
          <h3>Admin Login Number</h3>
          <button
            onClick={() => props.setIsVerifyOtpOpen(false)}
            className="absolute -top-8 right-0 sm:-right-6 rotate-45 text-3xl font-normal text-white "
          >
            +
          </button>
        </div>

        <div className="px-2 sm:px-6 flex justify-between items-center">
          <span className="text-xl text-[#404753] font-semibold">
            Verify OTP
          </span>
          <button className="text-base text-[#2262B7] font-semibold bg-transparent outline-none">
            Resend OTP
          </button>
        </div>

        <div className="px-2 sm:px-6 flex flex-col gap-[72px]">
          <input
            type="text"
            placeholder="Enter OTP send to "
            className="w-full h-14 px-2 font-base text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
          />

          <button
            className="w-full px-4 py-6 bg-[#74CE3A] text-white text-base font-semibold rounded-2xl"
            onClick={handleVerifyOtp}
          >
            Submit
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default VerifySuperAdminOtpPopup;
