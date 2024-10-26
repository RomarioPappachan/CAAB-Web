"use client";
import React from "react";

function IntroSection() {
  return (
    <div className="w-full py-28 px-4 md:px-8 lg:px-20 xl:px-24">
      <div className=" w-full  h-auto flex md:flex-row  flex-col">
        <div className=" md:w-[40%] w-full px-4  flex justify-center items-center">
          <img src="intro-section-image.jpg" alt="section2-img" className="w-96 " />
        </div>
        <div className="md:w-[60%] w-full">
          <p className="w-full py-2 text-[#191C21] text-xl ">
            Welcome to{" "}
            <span className="text-[#2262B7]">
              CAAB, CorpRank Advice and Audit Body (P) Ltd,
            </span>{" "}
            your trusted partner for comprehensive corporate compliance
            solutions and <span className="text-[#2262B7]">CAABScore</span> . We
            are dedicated to help businesses of all sizes navigate the complex
            regulatory landscape and achieve lasting success. Our expert TEAM
            lies in providing customized solutions and needs of all enforcement
            authorities under one umbrella that address your specific compliance
            portfolios, ensuring your organization remains compliant, ethical,
            and resilient in today's dynamic business environment. We are happy
            to introduce the innovative 'CAABScore' the unique and as well as
            the first and only corporate compliance rating score in the
            corporate world and it's benefits.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;