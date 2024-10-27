"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Features from "./components/Home/Features";
import HeroSection from "./components/Home/HeroSection";
import IntroSection from "./components/Home/IntroSection";
import RoleSection from "./components/Home/RoleSection";
import OurApproachSection from "./components/Home/OurApproachSection";
import OurTeamSection from "./components/Home/OurTeamSection";
import FeatureSection from "./components/Home/FeatureSection";
import Footer from "./components/Footer";

const HomeOld = () => {
  return (
    <div className="w-screen h-screen m-0 p-0">
      <div className="m-0 p-0 w-full">
        <Navbar />
      </div>
      <div className="mt-[100px] md:mt-[130px] xl:mt-[152px]">
        <HeroSection/>
      </div>

      <IntroSection/>

      <RoleSection/>

      <OurApproachSection/>

      <OurTeamSection/>

      <FeatureSection/>

      <Footer/>

      {/* Footer Section  */}
      {/* <div className="w-full h-[312px] bg-[#2D3137] text-white flex justify-center items-center">
        <span>© { new Date().getFullYear() } CorpRank Advice & Audit body. All right reserved.</span>
      </div> */}


    </div>
  );
};

export default HomeOld;
