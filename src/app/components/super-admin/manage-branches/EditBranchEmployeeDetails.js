"use client";
import useAuthStore from "@/store/authStore";
import axios from "axios";
import React, { useState } from "react";
import { createPortal } from "react-dom";

function EditBranchEmployeeDetails({
  selectedbranchId,
  selectedBranchDetail,
  setIsEditBranchEmployeeDetailsOpen,
  setBranchDetailRenderToggle,
}) {
  const { token } = useAuthStore();

  const [employeeDetails, setEmployeeDetails] = useState({
    totalLabourNumber: "",
    femaleLabourNumber: "",
    contractLabourNumber: "",
    migrantLabourNumber: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setEmployeeDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  //Update
  async function handleUpdate(e) {
    e.preventDefault();
    const {
      totalLabourNumber,
      femaleLabourNumber,
      contractLabourNumber,
      migrantLabourNumber,
    } = employeeDetails;

    const dataToSend = {
      total_employees: totalLabourNumber
        ? totalLabourNumber
        : selectedBranchDetail.total_employees,
      no_female: femaleLabourNumber
        ? femaleLabourNumber
        : selectedBranchDetail.no_female,
      no_contract: contractLabourNumber
        ? contractLabourNumber
        : selectedBranchDetail.no_contract,
      no_migrant: migrantLabourNumber
        ? migrantLabourNumber
        : selectedBranchDetail.no_migrant,
    };

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/editBranchDetails/${selectedbranchId}`,
        dataToSend,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(response.data.message);

      setTimeout(() => {
        setEmployeeDetails({
          totalLabourNumber: "",
          femaleLabourNumber: "",
          contractLabourNumber: "",
          migrantLabourNumber: "",
        });
        setBranchDetailRenderToggle((prevValue) => !prevValue);
        setIsEditBranchEmployeeDetailsOpen(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error("Error fetching data.");\
    }
  }

  return createPortal(
    <div className="w-screen h-screen px-4 md:px-8 lg:px-[72px] py-20 bg-[#000000c1] fixed top-0 left-0 z-50 flex justify-center items-start overflow-y-auto">
      <div className="w-[560px] pb-10 flex flex-col gap-10 bg-white">
        <div className="p-6 bg-[#003E82] text-white text-xl font-semibold relative">
          <h3>Labour / Employees Details</h3>
          <button
            onClick={() => setIsEditBranchEmployeeDetailsOpen(false)}
            className="absolute -top-8 right-0 sm:-right-6 rotate-45 text-3xl font-normal text-white "
          >
            +
          </button>
        </div>
        <div className="px-2 sm:px-6 flex flex-col gap-[72px]">
          <div className="flex flex-col gap-6">
            <input
              type="number"
              placeholder="Total number of labours"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
              name="totalLabourNumber"
              value={employeeDetails.totalLabourNumber}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Total number of female labours"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
              name="femaleLabourNumber"
              value={employeeDetails.femaleLabourNumber}
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Total number of contract labours"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
              name="contractLabourNumber"
              value={employeeDetails.contractLabourNumber}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Total number of migrant labours"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
              name="migrantLabourNumber"
              value={employeeDetails.migrantLabourNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="w-full px-4 py-6 bg-[#74CE3A] text-white text-base font-semibold rounded-2xl"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default EditBranchEmployeeDetails;
