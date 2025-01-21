"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";

function EditBranchAdminDetails({
  selectedbranchId,
  selectedBranchDetail,
  setIsEditBranchAdminDetailsOpen,
  setBranchDetailRenderToggle,
}) {
  const [branchAdminData, setBranchAdminData] = useState({
    branchAdminName: "",
    branchAdminMobileNo: "",
    branchAdminEmail: "",
  });

  // onChange
  function handleChange(event) {
    const { name, value } = event.target;

    setBranchAdminData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  //Update
  async function handleUpdate(e) {
    e.preventDefault();
    const { branchAdminName, branchAdminMobileNo, branchAdminEmail } =
      branchAdminData;

    const dataToSend = {
      branch_admin_name: branchAdminName
        ? branchAdminName
        : selectedBranchDetail.branch_admin_name,
      branch_mobile_no: branchAdminMobileNo
        ? branchAdminMobileNo
        : selectedBranchDetail.branch_mobile_no,
      admin_email: branchAdminEmail
        ? branchAdminEmail
        : selectedBranchDetail.admin_email,
    };

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/editBranchDetails/${selectedbranchId}`,
        dataToSend
      );

      alert(response.data.message);

      setTimeout(() => {
        setEmployeeDetails({
          branchAdminName: "",
          branchAdminMobileNo: "",
          branchAdminEmail: "",
        });
        setBranchDetailRenderToggle((prevValue) => !prevValue);
        setIsEditBranchAdminDetailsOpen(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error("Error fetching data.");\
    }
  }

  return createPortal(
    <div className="w-screen h-screen px-4 md:px-8 lg:px-[72px] py-20 bg-[#000000c1] fixed top-0 left-0 z-50 flex justify-center items-start overflow-y-auto">
      <div className="w-[560px] h-[552px] flex flex-col gap-10 bg-white">
        <div className="p-6 bg-[#003E82] text-white text-xl font-semibold relative">
          <h3>Branch Admin Details</h3>
          <button
            onClick={() => setIsEditBranchAdminDetailsOpen(false)}
            className="absolute -top-8 right-0 sm:-right-6 rotate-45 text-3xl font-normal text-white "
          >
            +
          </button>
        </div>
        <div className="px-2 sm:px-6 flex flex-col gap-[72px]">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
              name="branchAdminName"
              value={branchAdminData.branchAdminName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
              name="branchAdminMobileNo"
              value={branchAdminData.branchAdminMobileNo}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
              name="branchAdminEmail"
              value={branchAdminData.branchAdminEmail}
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

export default EditBranchAdminDetails;
