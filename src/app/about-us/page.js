"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="w-screen h-screen m-0 p-0">
      <Navbar />

      {/* About us section  */}
      <div className="w-full mt-[100px] md:mt-[130px] xl:mt-[152px] m-0 px-4 md:px-8 lg:px-[72px] py-20 bg-white">
        <h1 className="text-center text-4xl font-semibold leading-10 text-[#191C21]">
          About Us
        </h1>
        <div className="mt-5">
          <p className="text-justify text-base leading-10 font-normal text-[#424752]">
            <span className="text-[#003E82] font-semibold">
              CorpRank Advice and Audit Body Pvt Ltd
            </span>{" "}
            is passionate about corporate compliance and dedicated to deliver
            exceptional services and solutions related to corporate compliance
            needs to redefine the horizon of corporate thinking beyond the
            expectation of our esteemed clients. CAAB is a leading provider of
            corporate compliance solutions. We combine cutting-edge technology,
            expert advice and guidance, and a deep understanding of regulatory
            frameworks to empower our clients to achieve total corporate and HR
            compliance in excellence and performance audits in total compliance
            and HR activities. To realize the vision CAAB Pvt Ltd has formed a
            Team of Experts who adorned key posts in various Enforcement
            Authorities bringing years of experience to serve in tandem with the
            Rules and Regulations and provide innovative and qualitative
            services tailored to the current scenario with utmost commitment to
            full client satisfaction. We are commit about helping businesses to
            build a mentoring culture of compliance, minimize risks, mitigating
            the non-compliance gap and unlock their potential through the tag
            line CCSR , 'Corporate Compliance Social Responsibility', among the
            stake holders.
          </p>
        </div>

        <div className="w-full p-0 pt-5 md:pe-20 xl:pe-40 flex justify-center md:justify-end bg-white">
          <img
            src="/about-us-image.svg"
            alt="About Us"
            className="w-2/3 md:w-2/5 xl:w-1/4"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
