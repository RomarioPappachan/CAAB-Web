"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import EditBranchAdminDetails from "@/app/components/super-admin/manage-branches/EditBranchAdminDetails";
import EditBranchBasicDetails from "@/app/components/super-admin/manage-branches/EditBranchBasicDetails";
import EditBranchEmployeeDetails from "@/app/components/super-admin/manage-branches/EditBranchEmployeeDetails";

function ManageBranches() {
  const [isEditBranchAdminDetailsOpen, setIsEditBranchAdminDetailsOpen] =
    useState(false);
  const [isEditBranchBasicDetailsOpen, setIsEditBranchBasicDetailsOpen] =
    useState(false);
  const [isEditBranchEmployeeDetailsOpen, setIsEditBranchEmployeeDetailsOpen] =
    useState(false);
  const [branchNo, setBranchNo] = useState(null);
  return (
    <div className="w-full flex flex-col gap-y-10">
      <div className="py-2 border-[#C0C7D5] border-b-[1px]">
        <h2 className="font-medium text-xl leading-6 text-[#404753]">
          Manage Branches
        </h2>
      </div>

      {/* list of branches  */}
      <div className="">
        {/* branch 1  */}
        <div className="">
          <div className="px-10 py-6 flex justify-between items-center gap-2 text-white bg-[#003E82] rounded-lg border-[#C0C7D5] border-[1px]">
            <span className="font-medium text-xl leading-6">
              Branch Name 1, <span className="text-xs">( Alappuzha )</span>
            </span>
            {branchNo === 1 ? (
              <span
                className="cursor-pointer"
                onClick={() => setBranchNo(null)}
              >
                <IoIosArrowUp className="text-3xl" />
              </span>
            ) : (
              <span className="cursor-pointer" onClick={() => setBranchNo(1)}>
                <IoIosArrowDown className="text-3xl" />
              </span>
            )}
          </div>
          {/* dropdown div  */}
          <div
            className={`overflow-hidden m-0 transition-all duration-500 ease-in-out ${
              branchNo === 1
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
                      : Brothers Pvt Ltd
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">City</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : Kochi
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Sector</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : Food and Service Industry
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Email</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : NA
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Mobile Number</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : NA
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
                    onClick={() => setIsEditBranchAdminDetailsOpen(true)}
                  >
                    <FiEdit className="text-xl text-[#782A99]" />
                  </span>
                </h5>
                <div className="ps-10 flex flex-col gap-y-6">
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Admin Name</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : Kamal Virendra
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Admin phone</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 98765335676
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Admin Email</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : NA
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
                    onClick={() => setIsEditBranchEmployeeDetailsOpen(true)}
                  >
                    <FiEdit className="text-xl text-[#782A99]" />
                  </span>
                </h5>
                <div className="ps-10 flex flex-col gap-y-6">
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Total number of labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 100
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">
                      Total number of female labours
                    </span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 50
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Total number of male labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 50
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Number of contract labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 60
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Number of migrant labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 30
                    </span>
                  </p>
                </div>
              </div>
              {/* end of grid  */}
            </div>
          </div>
        </div>

        {/* Branch 2  */}
        <div className="">
          <div className="px-10 py-6 flex justify-between items-center gap-2 text-white bg-[#003E82] rounded-lg border-[#C0C7D5] border-[1px]">
            <span className="font-medium text-xl leading-6">
              Branch Name 2, <span className="text-xs">( Kochi )</span>
            </span>
            {branchNo === 2 ? (
              <span
                className="cursor-pointer"
                onClick={() => setBranchNo(null)}
              >
                <IoIosArrowUp className="text-3xl" />
              </span>
            ) : (
              <span className="cursor-pointer" onClick={() => setBranchNo(2)}>
                <IoIosArrowDown className="text-3xl" />
              </span>
            )}
          </div>
          {/* dropdown div  */}
          <div
            className={`overflow-hidden m-0 transition-all duration-500 ease-in-out ${
              branchNo === 2
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
                      : Brothers Pvt Ltd
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">City</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : Kochi
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Sector</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : Food and Service Industry
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Email</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : NA
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Mobile Number</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : NA
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
                    onClick={() => setIsEditBranchAdminDetailsOpen(true)}
                  >
                    <FiEdit className="text-xl text-[#782A99]" />
                  </span>
                </h5>
                <div className="ps-10 flex flex-col gap-y-6">
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Admin Name</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : Kamal Virendra
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Admin phone</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 98765335676
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Admin Email</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : NA
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
                    onClick={() => setIsEditBranchEmployeeDetailsOpen(true)}
                  >
                    <FiEdit className="text-xl text-[#782A99]" />
                  </span>
                </h5>
                <div className="ps-10 flex flex-col gap-y-6">
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Total number of labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 100
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">
                      Total number of female labours
                    </span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 50
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Total number of male labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 50
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Number of contract labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 60
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Number of migrant labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 30
                    </span>
                  </p>
                </div>
              </div>
              {/* end of grid  */}
            </div>
          </div>
        </div>

        {/* Branch 3  */}
        <div className="">
          <div className="px-10 py-6 flex justify-between items-center gap-2 text-white bg-[#003E82] rounded-lg border-[#C0C7D5] border-[1px]">
            <span className="font-medium text-xl leading-6">
              Branch Name 3, <span className="text-xs">( Kottayam )</span>
            </span>
            {branchNo === 3 ? (
              <span
                className="cursor-pointer"
                onClick={() => setBranchNo(null)}
              >
                <IoIosArrowUp className="text-3xl" />
              </span>
            ) : (
              <span className="cursor-pointer" onClick={() => setBranchNo(3)}>
                <IoIosArrowDown className="text-3xl" />
              </span>
            )}
          </div>
          {/* dropdown div  */}
          <div
            className={`overflow-hidden m-0 transition-all duration-500 ease-in-out ${
              branchNo === 3
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
                      : Brothers Pvt Ltd
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">City</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : Kochi
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Sector</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : Food and Service Industry
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Email</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : NA
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Mobile Number</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : NA
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
                    onClick={() => setIsEditBranchAdminDetailsOpen(true)}
                  >
                    <FiEdit className="text-xl text-[#782A99]" />
                  </span>
                </h5>
                <div className="ps-10 flex flex-col gap-y-6">
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Admin Name</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : Kamal Virendra
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Admin phone</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 98765335676
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Admin Email</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : NA
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
                    onClick={() => setIsEditBranchEmployeeDetailsOpen(true)}
                  >
                    <FiEdit className="text-xl text-[#782A99]" />
                  </span>
                </h5>
                <div className="ps-10 flex flex-col gap-y-6">
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Total number of labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 100
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">
                      Total number of female labours
                    </span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 50
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Total number of male labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 50
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Number of contract labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 60
                    </span>
                  </p>
                  <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
                    <span className="w-1/2">Number of migrant labours</span>
                    <span className="w-1/2 font-medium text-[#181C22]">
                      : 30
                    </span>
                  </p>
                </div>
              </div>
              {/* end of grid  */}
            </div>
          </div>
        </div>
      </div>

      {isEditBranchAdminDetailsOpen && (
        <EditBranchAdminDetails
          setIsEditBranchAdminDetailsOpen={setIsEditBranchAdminDetailsOpen}
        />
      )}
      {isEditBranchBasicDetailsOpen && (
        <EditBranchBasicDetails
          setIsEditBranchBasicDetailsOpen={setIsEditBranchBasicDetailsOpen}
        />
      )}
      {isEditBranchEmployeeDetailsOpen && (
        <EditBranchEmployeeDetails
          setIsEditBranchEmployeeDetailsOpen={
            setIsEditBranchEmployeeDetailsOpen
          }
        />
      )}
    </div>
  );
}

// Wrapping the component with ProtectedRoute
const ProtectedManageBranches = () => (
  <ProtectedRoute allowedRoles={["admin", "manager"]}>
    <ManageBranches />
  </ProtectedRoute>
);

export default ProtectedManageBranches;
