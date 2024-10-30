"use client";
import React, { useState, useEffect } from "react";
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

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
   
  useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000);

      return () => clearTimeout(timer);
   }, []);




  if(isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-[#000000c1]">
        <div className="size-24 rounded-full animate-spin">
            <img 
              src="/caab-score-icon.jpg" 
              alt="Logo"
              className='w-full object-cover rounded-full'
            />
        </div>
      </div>
    )
  }

  return (
    <div className="w-screen h-screen m-0 p-0">
      <div className="m-0 p-0 w-full">
        <Navbar />
      </div>
      <div className="p-0 mt-[100px] md:mt-[130px] xl:mt-[152px]">
        <HeroSection/>
      </div>

      <IntroSection/>

      <RoleSection/>

      <OurApproachSection/>

      <OurTeamSection/>

      <FeatureSection/>

      <Footer/>

    </div>
  );
};

export default Home;
