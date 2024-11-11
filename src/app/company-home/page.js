"use client";
import React from "react";
import Navbar from "../components/Navbar";
import CompanyBranchCard from "../components/company-home/CompanyBranchCard";

function CompanyHome() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full mt-[100px] md:mt-[130px] xl:mt-[152px] bg-[#F9F9FF] px-4 md:px-8 lg:px-[72px]">
        <div className="flex flex-col py-16">
          <div className="flex items-center">
            <img
              src="/company-img.svg"
              alt="company-img"
              className="pe-2 py-4"
            />
            <p className="text-[#424752] text-[16px]">
              Company name{" "}
              <span className="text-[#191C21] text-[24px] font-semibold ps-4">
                Brothers Pvt Ltd
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="/no-of-branches.svg"
              alt="no-of-branches"
              className="pe-2"
            />
            <p className="text-[#424752] text-[16px]">
              No. of branches{" "}
              <span className="text-[#191C21] text-[24px] font-semibold ps-4">
                4
              </span>
            </p>
          </div>
        </div>
        <div className="w-full bg-white border-[2px] border-[#003E82] rounded-lg px-4 sm:px-8">
          <h1 className="text-[#404753] text-[20px] font-semibold py-10">
            Manage Branch / Company
          </h1>
          <button className="w-full lg:w-[596px] h-[56px] border-[#003E82] border-[2px] font-semibold bg-white text-[#003E82] text-[16px] rounded-lg hover:bg-[#003f8242]">
            + Add Branch / Company
          </button>
          <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <CompanyBranchCard />
            <CompanyBranchCard />
            <CompanyBranchCard />
            <CompanyBranchCard />
            <CompanyBranchCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyHome;
