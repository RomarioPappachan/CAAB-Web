"use client";
import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import Navbar from "../components/Navbar";
import LoginSignupPopup from "../components/login/LoginSignupPopup";
import OtpPopup from "../components/login/OtpPopup";
import InitialDetails from "../components/login/InitialDetails";
import { useRouter } from "next/navigation";

function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginSignupOpen, setIsLoginSignupOpen] = useState(true);
  const [isOtpPopupOpen, setIsOtpPopupOpen] = useState(false);
  const [isInitialDetailsOpen, setIsInitialDetailsOpen] = useState(false);

  const [mobileNo, setMobileNo] = useState("");

  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      //if user already logged in
      router.push("/company-home");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-[#000000c1]">
        <div className="size-24 rounded-full animate-scale-up-down">
          <img
            src="/caab-score-icon.jpg"
            alt="Logo"
            className="w-full object-cover rounded-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen m-0 p-0 bg-white">
      <div className="m-0 p-0 w-full">
        <Navbar />
      </div>

      <div className="bg-login-page w-full mt-[100px] md:mt-[130px] xl:mt-[152px] py-10 px-4 md:px-8 lg:px-[72px] flex justify-center items-center relative">
        {isLoginSignupOpen && (
          <LoginSignupPopup
            mobileNo={mobileNo}
            setMobileNo={setMobileNo}
            setIsLoginSignupOpen={setIsLoginSignupOpen}
            setIsOtpPopupOpen={setIsOtpPopupOpen}
            setIsInitialDetailsOpen={setIsInitialDetailsOpen}
          />
        )}

        {isOtpPopupOpen && (
          <OtpPopup
            mobileNo={mobileNo}
            setIsLoginSignupOpen={setIsLoginSignupOpen}
            setIsOtpPopupOpen={setIsOtpPopupOpen}
            setIsInitialDetailsOpen={setIsInitialDetailsOpen}
          />
        )}

        {isInitialDetailsOpen && (
          <InitialDetails
            mobileNo={mobileNo}
            setIsLoginSignupOpen={setIsLoginSignupOpen}
            setIsOtpPopupOpen={setIsOtpPopupOpen}
            setIsInitialDetailsOpen={setIsInitialDetailsOpen}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
