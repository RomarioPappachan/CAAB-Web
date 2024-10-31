"use client";
import React from "react";

function IntroSection() {
  return (
    <div className="w-full py-20 px-4 md:px-8 lg:px-[72px] bg-white">
      <div className="w-full h-auto flex flex-col lg:flex-row block-animation">
        <div className="w-full lg:w-1/3 flex justify-center items-center gap-x-11">
          <img src="intro-section-image.jpg" alt="section2-img" className="w-96" />
        </div>
        <div className="w-full lg:w-2/3 py-4">
          <p className="w-full text-[#191C21] text-xl leading-10">
            Welcome to{" "}
            <span className="text-[#2262B7]">
              CAAB, CorpRank Advice and Audit Body (P) Ltd,
            </span>{" "}
            your trusted partner for comprehensive corporate compliance
            solutions and <span className="text-[#2262B7]">CAABScore</span>. We
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