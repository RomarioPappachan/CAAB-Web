"use client";
import useAuthStore from "@/store/authStore";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useUploadDocumentStore from "@/store/uploadDocumentsStore";
import axios from "axios";

function CompanyBranchCard({ branch }) {
  const { user, token, initializeUser } = useAuthStore();
  const {
    setBusinessType,
    selectedBranch,
    setSelectedBranch,
    initializeStore,
  } = useUploadDocumentStore();

  const [rating, setRating] = useState("");

  const router = useRouter();

  useEffect(() => {
    // Initialize the store when the component mounts
    initializeUser();
  }, [initializeUser]);

  console.log(selectedBranch);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/grading`,
          { branch_id: branch.branch_id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response);
        setRating(response.data.gravityPercentage);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="w-full border-[1px] border-[#C0C7D5] shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-md hover:shadow-[#C0C7D5]"
      onClick={() => {
        setBusinessType(branch?.business_type);
        setSelectedBranch(branch);
        router.push("/company-rating");
      }}
    >
      <div>
        <div>
          <table className="flex flex-col gap-y-2">
            <tbody>
              <tr className="pt-2">
                <td className="text-[#424752] text-[14px] sm:text-[16px]">
                  Company / Branch Name
                </td>
                <td className="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                  : {branch?.branch_name}
                </td>
              </tr>
              <tr>
                <td className="text-[#424752] text-[14px] sm:text-[16px]  ">
                  Location / City
                </td>
                <td className="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                  : {branch?.city}
                </td>
              </tr>
              <tr className="">
                <td className="text-[#424752] text-[14px] sm:text-[16px]">
                  Business Type
                </td>
                <td className="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                  : {branch?.business_type}
                </td>
              </tr>
              <tr>
                <td className="text-[#424752] text-[14px] sm:text-[16px]">
                  Branch Admin
                </td>
                <td className="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                  : {branch.branch_admin_name}
                </td>
              </tr>
              <tr>
                <td className="text-[#424752] text-[14px] sm:text-[16px]">
                  Admin Phone Number
                </td>
                <td className="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                  : {branch.admin_no}
                </td>
              </tr>
              <tr>
                <td className="text-[#424752] text-[14px] sm:text-[16px]">
                  Last Updated
                </td>
                <td className="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                  :
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {rating ? (
        <div className="flex justify-end relative">
          <img src="chart.svg" alt="chart" />
          <span className="absolute bottom-2 right-12 font-bold text-[#404753] text-base">
            {rating}
          </span>
        </div>
      ) : (
        <div className="flex justify-end relative">
          <img src="chart.svg" alt="chart" />

          <span className="absolute bottom-2 right-9 font-semibold text-gray-400 text-[10px]">
            Not Rated
          </span>
        </div>
      )}
    </div>
  );
}

export default CompanyBranchCard;
