"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Features from "./components/Home/Features";

const HomeOld = () => {
  return (
    <div className="w-screen h-screen m-0 p-0">
      <div className="w-full min-h-[630px] m-0 p-0 bg-home-page">
        <Navbar />

        {/* Hero Section  */}
        <div className="w-full p-0 m-0 px-5 sm:px10 md:px-16 lg:px-24 lg:flex">
          <div className="w-full lg:w-1/2 text-left">
            <p className="text-[#404753] font-bold text-3xl lg:text-5xl lg:leading-[64px]">
              Discover, <br />
              Compare & Analyse <br />
              Financial Products and <br />
              Services with <br />
              Comprehensive Ratings
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Image
              className="lg:absolute lg:-bottom-2/4 lg:left-1/4"
              width="323"
              height="403"
              src="/hero-image.svg"
              alt="hero-image"
            />
          </div>
        </div>
      </div>

      {/* Section  */}
      <div className="w-full md:h-[528px] m-0 px-5 sm:px10 md:px-16 lg:px-24 md:flex justify-between items-center">
        <div className="w-full md:w-1/2 lg:2/5 m-0 p-0 flex justify-center items-center">
          <img
            className="w-full sm:w-3/4 md:w-full m-0"
            src="/office-management.svg"
            alt="hero-image"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 m-0 lg:ps-44 lg:pe-5 py-5 md:py-10 ">
          <h2 className="text-[#181c22] font-medium text-4xl lg:text-5xl lg:leading-[64px]">
            Improve Your Financial
            Rating
          </h2>
          <p className="my-5 w-full text-[#404753] text-base font-normal leading-6 text-wrap">
            A strong financial rating is essential for attracting investors and
            securing favorable loan terms. Implement effective financial
            management strategies to improve your firm's bottom line and enhance
            its overall financial health.
          </p>
          <button className="w-[188px] h-10 bg-[#782A99] text-white text-base font-semibold rounded-2xl">
            Improve Your Rating
          </button>
        </div>
      </div>

      {/* Features Section  */}
      <Features/>


      {/* Footer Section  */}
      <div className="w-full h-[312px] bg-[#2D3137] text-white flex justify-center items-center">
        <span>© { new Date().getFullYear() } CorpRank Advice & Audit body. All right reserved.</span>
      </div>


    </div>
  );
};

export default HomeOld;
