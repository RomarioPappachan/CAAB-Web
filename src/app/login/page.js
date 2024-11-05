"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";
import Navbar from "../components/Navbar";
import LoginSignupPopup from "../components/login/LoginSignupPopup";
import OtpPopup from "../components/login/OtpPopup";
import InitialDetails from "../components/login/InitialDetails";

function Login() {
  return (
    <div className="w-screen h-screen m-0 p-0 bg-white">
      <div className="m-0 p-0 w-full">
        <Navbar />
      </div>

      <div className="bg-login-page w-full mt-[100px] md:mt-[130px] xl:mt-[152px] py-10 px-4 md:px-8 lg:px-[72px] flex justify-center items-center relative">
        {/* <LoginSignupPopup /> */}
        {/* <OtpPopup /> */}
        <InitialDetails />
      </div>
    </div>
  );
}

export default Login;
