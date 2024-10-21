"use client";
import React from "react";

const Features = () => {
  return (
    <div className="w-full mt-5 m-0 pt-10 pb-20 px-24">
      <h2 className="text-[#181c22] font-medium text-5xl text-center">
        Benefits of working with us
      </h2>
      <div className="w-full pt-28 flex justify-between items-center">

        {/* feature 1  */}
        <div className="w-[320px] h-[360px] px-5 bg-[#F1F3FC] border-[1px] border-[#224167] rounded-lg flex flex-col justify-center items-center relative">
          <img
            src="/feature-flexible.svg"
            alt="flexible scheduling"
            className="size-[140px] absolute -top-[70px]"
          />
          <h1 className="mt-4 text-[#224167] text-[32px]">Flexible </h1>
          <h1 className=" text-[#224167] text-[32px]">Scheduling </h1>
          <p className="mt-5 text-[#404753] text-base flex justify-center items-center text-center">
            Allows firms to adjust their work hours or location, improving
            work-life balance and productivity.
          </p>
        </div>

        {/* feature 2  */}
        <div className="w-[320px] h-[360px] px-5 bg-[#F1F3FC] border-[1px] border-[#224167] rounded-lg flex flex-col justify-center items-center relative">
          <img
            src="/feature-growth.svg"
            alt="flexible scheduling"
            className="size-[140px] absolute -top-[70px]"
          />
          <h1 className="mt-4 text-[#224167] text-[32px]">Opportunity for</h1>
          <h1 className=" text-[#224167] text-[32px]">Growth </h1>
          <p className="mt-5 text-[#404753] text-base flex justify-center items-center text-center">
          Expanding into product development or diversifying services can drive growth for a service-based company.
          </p>
        </div>

        {/* feature 3  */}
        <div className="w-[320px] h-[360px] px-5 bg-[#F1F3FC] border-[1px] border-[#224167] rounded-lg flex flex-col justify-center items-center relative">
          <img
            src="/feature-brand.svg"
            alt="flexible scheduling"
            className="size-[140px] absolute -top-[70px]"
          />
          <h1 className="mt-4 text-[#224167] text-[32px]">Strengthen Brand </h1>
          <h1 className=" text-[#224167] text-[32px]">Reputation</h1>
          <p className="mt-5 text-[#404753] text-base flex justify-center items-center text-center">
          Builds trust, enhances customer loyalty, and drives business success through ethical and transparent practices.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Features;
