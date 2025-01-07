"use client";
import useAuthStore from "@/store/authStore";
import React from "react";

function CompanyBranchCard({ branch }) {
  const { user } = useAuthStore();

  return (
    <div className="w-full border-[1px] border-[#C0C7D5] shadow-lg rounded-lg p-4">
      <div>
        <div>
          <table className="flex flex-col gap-y-2">
            <tr className="pt-2">
              <td className="text-[#424752] text-[14px] sm:text-[16px]">
                Company / Branch Name
              </td>
              <td className="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                : {user?.company_name}
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
          </table>
        </div>
      </div>

      <div className="flex justify-end">
        <img src="chart.svg" alt="chart" />
      </div>
    </div>
  );
}

export default CompanyBranchCard;
