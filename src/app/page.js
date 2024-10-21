"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Features from "./components/Home/Features";

const Home = () => {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-x-hidden">
      <div className="w-full min-h-[630px] m-0 p-0 px-24 bg-home-page">
        <Navbar />

        {/* Hero Section  */}
        <div className="w-full p-0 m-0 mt-14 flex">
          <div className="w-1/2 text-left">
            <p className="text-[#404753] font-bold text-5xl leading-[64px]">
              Discover, <br />
              Compare & Analyse <br />
              Financial Products and <br />
              Services with <br />
              Comprehensive Ratings
            </p>
          </div>
          <div className="w-1/2 relative">
            <Image
              className="absolute -bottom-2/4 left-1/4"
              width="323"
              height="403"
              src="/hero-image.svg"
              alt="hero-image"
            />
          </div>
        </div>
      </div>

      {/* Section  */}
      <div className="w-full h-[528px] m-0 px-24 flex">
        <div className="w-2/5 m-0 p-0">
          <img
            className="size-[528px]"
            src="/office-management.svg"
            alt="hero-image"
          />
        </div>
        <div className="w-3/5 ps-44 m-0 pe-5 py-28">
          <h2 className="text-[#181c22] font-medium text-5xl leading-[64px]">
            Improve Your Financial <br />
            Rating
          </h2>
          <p className="my-5 w-[510px] text-[#404753] text-base font-normal leading-6">
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

export default Home;
