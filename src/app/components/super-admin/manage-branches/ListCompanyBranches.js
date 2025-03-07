"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import useAuthStore from "@/store/authStore";

export default function ListCompanyBranches({
  selectedbranchId,
  setSelectedBranchId,
  setSelectedBranchDetail,
  branchDetailRenderToggle,
  setIsEditBranchAdminDetailsOpen,
  setIsEditBranchBasicDetailsOpen,
  setIsEditBranchEmployeeDetailsOpen,
}) {
  const { token } = useAuthStore();

  const [branchList, setBranchList] = useState([]);

  console.log(branchList);

  useEffect(() => {
    const fetchData = async () => {
      const caabId = JSON.parse(localStorage.getItem("user")).caab_id;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/listBranches/${caabId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setBranchList(response.data.branches);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, [branchDetailRenderToggle]);

  return (
    <div className="">
      {branchList[0] ? (
        branchList.map((branch) => (
          <div className="" key={branch.branch_id}>
            <div className="px-10 py-6 flex justify-between items-center gap-2 text-white bg-[#003E82] rounded-lg border-[#C0C7D5] border-[1px]">
              <span className="font-medium text-xl leading-6">
                {branch?.branch_name},{" "}
                <span className="text-xs">{branch?.city}</span>
              </span>
              {selectedbranchId === branch.branch_id ? (
                <span
                  className="cursor-pointer"
                  onClick={() => setSelectedBranchId(null)}
                >
                  <IoIosArrowUp className="text-3xl" />
                </span>
              ) : (
                <span
                  className="cursor-pointer"
                  onClick={() => setSelectedBranchId(branch.branch_id)}
                >
                  <IoIosArrowDown className="text-3xl" />
                </span>
              )}
            </div>
            {/* dropdown div  */}
            <div
              className={`overflow-hidden m-0 transition-all duration-500 ease-in-out ${
                selectedbranchId === branch.branch_id
                  ? "px-4 py-10 md:p-10 bg-white border-[0.1px] shadow drop-shadow-sm"
                  : "max-h-0"
              }`}
            >
              {/* grid  */}
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-[72px]">
                {/* group 1  */}
                <div className="w-[317px] flex flex-col gap-y-6">
                  <h5 className="text-[#404753] text-base font-semibold flex items-center gap-6">
                    <span>Basic Details</span>
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedBranchId(branch.branch_id);
                        setSelectedBranchDetail(branch);
                        setIsEditBranchBasicDetailsOpen(true);
                      }}
                    >
                      <FiEdit className="text-xl text-[#782A99]" />
                    </span>
                  </h5>
                  <div className="ps-10 flex flex-col gap-y-6">
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">Company Name</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.branch_name}
                      </span>
                    </p>
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">City</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.city}
                      </span>
                    </p>
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">Business Type</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.business_type}
                      </span>
                    </p>
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">Branch Email</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.branch_email}
                      </span>
                    </p>
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">Mobile Number</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.branch_mobile_no}
                      </span>
                    </p>
                  </div>
                </div>

                {/* group 2  */}
                <div className="w-[317px] flex flex-col gap-y-6">
                  <h5 className="text-[#404753] text-base font-semibold flex items-center gap-6">
                    <span>Branch Admin Details</span>
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedBranchId(branch.branch_id);
                        setSelectedBranchDetail(branch);
                        setIsEditBranchAdminDetailsOpen(true);
                      }}
                    >
                      <FiEdit className="text-xl text-[#782A99]" />
                    </span>
                  </h5>
                  <div className="ps-10 flex flex-col gap-y-6">
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">Admin Name</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.branch_admin_name}
                      </span>
                    </p>
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">Admin phone</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.admin_no}
                      </span>
                    </p>
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">Admin Email</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.admin_email}
                      </span>
                    </p>
                  </div>
                </div>

                {/* group 3  */}
                <div className="w-[317px] flex flex-col gap-y-6">
                  <h5 className="text-[#404753] text-base font-semibold flex items-center gap-6">
                    <span>Labour / Employee Details</span>
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedBranchId(branch.branch_id);
                        setSelectedBranchDetail(branch);
                        setIsEditBranchEmployeeDetailsOpen(true);
                      }}
                    >
                      <FiEdit className="text-xl text-[#782A99]" />
                    </span>
                  </h5>
                  <div className="ps-10 flex flex-col gap-y-6">
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">Total number of labours</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.total_employees}
                      </span>
                    </p>
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">
                        Total number of female labours
                      </span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.no_female}
                      </span>
                    </p>
                    {/* <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">
                        Total number of male labours
                      </span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : 50
                      </span>
                    </p> */}
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">Number of contract labours</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.no_contract}
                      </span>
                    </p>
                    <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                      <span className="w-1/2">Number of migrant labours</span>
                      <span className="w-1/2 font-medium text-[#181C22]">
                        : {branch?.no_migrant}
                      </span>
                    </p>
                  </div>
                </div>
                {/* end of grid  */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <span> No branches present</span>
      )}
    </div>
  );
}
