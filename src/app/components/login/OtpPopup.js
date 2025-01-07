"use client";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

function OtpPopup({
  mobileNo,
  setIsLoginSignupOpen,
  setIsOtpPopupOpen,
  setIsInitialDetailsOpen,
}) {
  const [otp, setOtp] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });

  const router = useRouter();
  const { login } = useAuthStore();

  function handleOnChange(event) {
    const { name, value } = event.target;
    setOtp((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  async function handleSubmitOtp(e) {
    e.preventDefault();
    const { num1, num2, num3, num4 } = otp;
    if (!num1 || !num2 || !num3 || !num4) {
      alert("Enter otp fields");
    } else {
      const fullOtp = `${num1}${num2}${num3}${num4}`;
      console.log(fullOtp);

      // API call

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/verify-otp`,
          {
            mobile: mobileNo,
            otp: fullOtp,
          }
        );

        console.log(response);
        if (response.data.activeUser) {
          // Login success and redirect
          const userData = response.data.data;
          login(userData);

          localStorage.setItem("user", JSON.stringify(userData));
          alert(response.data.message);
          router.push("/company-home");
        } else {
          // continue to get company basic details
          alert(response.data.message);
          setTimeout(() => {
            setIsOtpPopupOpen(false);
            setIsLoginSignupOpen(false);
            setIsInitialDetailsOpen(true);
          }, 1000);
        }
      } catch (error) {
        setIsOtpPopupOpen(true);
        setIsLoginSignupOpen(false);
        setIsInitialDetailsOpen(false);
      }
    }
  }

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
            Verify with OTP
          </h1>
          <p className="text-[#424752] text-xs pt-5">Sent to 9539083486</p>
        </div>
        <div className="w-[232px] mt-10 flex justify-between">
          <input
            type="tel"
            maxLength={1}
            className="w-10 h-14 border-2 border-[#707784] rounded-md bg-white text-black text-xl p-3"
            name="num1"
            value={otp.num1}
            onChange={handleOnChange}
          />
          <input
            type="tel"
            maxLength={1}
            className="w-10 h-14 border-2 border-[#707784] rounded-md bg-white text-black text-xl p-3"
            name="num2"
            value={otp.num2}
            onChange={handleOnChange}
          />
          <input
            type="tel"
            maxLength={1}
            className="w-10 h-14 border-2 border-[#707784] rounded-md bg-white text-black text-xl p-3"
            name="num3"
            value={otp.num3}
            onChange={handleOnChange}
          />
          <input
            type="tel"
            maxLength={1}
            className="w-10 h-14 border-2 border-[#707784] rounded-md bg-white text-black text-xl p-3"
            name="num4"
            value={otp.num4}
            onChange={handleOnChange}
          />
        </div>

        <p className="text-[#707784] text-xs mt-12">
          Resend OTP in <span className="text-[#191C21] text-xs"> 00:30</span>{" "}
        </p>
        <p className="text-[#424752] text-xs mt-12">
          Have trouble logging in ?{" "}
          <span className="text-[#003E82] text-sm font-semibold">Get Help</span>
        </p>
        <p
          className="bg-red-600 text-white cursor-pointer"
          onClick={handleSubmitOtp}
        >
          Go
        </p>
      </div>
    </div>
  );
}

export default OtpPopup;
