"use client";
import React from "react";

function CompanyBranchCard() {
  return (
    <div className="w-full border-[1px] border-[#C0C7D5] shadow-lg  rounded-lg  p-4">
      <div>
        <div>
          <table className="flex flex-col gap-y-2">
            <tr class="pt-2">
              <td class="text-[#424752] text-[14px] sm:text-[16px]">
                Company / Branch Name
              </td>
              <td class="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                : Brothers Steels and Pipes
              </td>
            </tr>
            <tr>
              <td class="text-[#424752] text-[14px] sm:text-[16px]  ">
                Location / City
              </td>
              <td class="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                : Mavelikara
              </td>
            </tr>
            <tr class="">
              <td class="text-[#424752] text-[14px] sm:text-[16px]">Sector</td>
              <td class="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                : Iron and Steel Industry
              </td>
            </tr>
            <tr>
              <td class="text-[#424752] text-[14px] sm:text-[16px]">
                Branch Admin
              </td>
              <td class="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                : Joseph John
              </td>
            </tr>
            <tr>
              <td class="text-[#424752] text-[14px] sm:text-[16px]">
                Admin Phone Number
              </td>
              <td class="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                : 8428972375
              </td>
            </tr>
            <tr>
              <td class="text-[#424752] text-[14px] sm:text-[16px]">
                Last Updated
              </td>
              <td class="text-[#191C21] text-[14px] sm:text-[16px] ps-2">
                : 21/10/2024
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
