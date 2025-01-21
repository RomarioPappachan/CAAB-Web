"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import CompanyBranches from "../components/company-home/CompanyBranches";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoutes";
import useAuthStore from "@/store/authStore";

function CompanyHome() {
  const [companyInfo, setCompanyInfo] = useState({});
  // const caabId = JSON.parse(localStorage.getItem("user")).caab_id;

  const { user, initializeUser } = useAuthStore();
  const caabId = user?.caab_id;

  const router = useRouter();

  useEffect(() => {
    // Initialize the store when the component mounts
    initializeUser();
  }, [initializeUser]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/companyInfo/${caabId}`
        );

        setCompanyInfo(response.data.companyInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full h-full mt-[100px] md:mt-[130px] xl:mt-[152px] bg-[#F9F9FF] px-4 md:px-8 lg:px-[72px] pb-10">
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
                {companyInfo.company_name}
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
                {companyInfo.noOfBranch}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full bg-white border-[2px] border-[#003E82] rounded-lg px-4 sm:px-8">
          <h1 className="text-[#404753] text-[20px] font-semibold py-10">
            Manage Branch / Company
          </h1>
          <button
            className="w-full lg:w-[596px] h-[56px] border-[#003E82] border-[2px] font-semibold bg-white text-[#003E82] text-[16px] rounded-lg hover:bg-[#003f8242]"
            onClick={() => router.push("/add-branch")}
          >
            + Add Branch / Company
          </button>
          <CompanyBranches caabId={caabId} />
        </div>
      </div>
    </div>
  );
}

// Wrapping the component with ProtectedRoute
const ProtectedCompanyHome = () => (
  <ProtectedRoute allowedRoles={["admin", "manager"]}>
    <CompanyHome />
  </ProtectedRoute>
);

export default ProtectedCompanyHome;
