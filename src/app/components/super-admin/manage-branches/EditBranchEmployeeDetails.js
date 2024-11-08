"use client";
import React from "react";
import { createPortal } from "react-dom";

function EditBranchEmployeeDetails(props) {
  return createPortal(
    <div className="w-screen h-screen px-4 md:px-8 lg:px-[72px] py-20 bg-[#000000c1] fixed top-0 left-0 z-50 flex justify-center items-center overflow-y-auto">
      <div className="w-[560px] pb-10 flex flex-col gap-10 bg-white">
        <div className="p-6 bg-[#003E82] text-white text-xl font-semibold relative">
          <h3>Labour / Employees Details</h3>
          <button
            onClick={() => props.setIsEditBranchEmployeeDetailsOpen(false)}
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
              className="w-full h-14 px-2 font-base text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            />
            <input
              type="number"
              placeholder="Total number of female labours"
              className="w-full h-14 px-2 font-base text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            />
            <input
              type="number"
              placeholder="Total number of male labours"
              className="w-full h-14 px-2 font-base text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            />
            <input
              type="number"
              placeholder="Total number of contract labours"
              className="w-full h-14 px-2 font-base text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            />
            <input
              type="number"
              placeholder="Total number of migrant labours"
              className="w-full h-14 px-2 font-base text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            />
          </div>
          <div>
            <button className="w-full px-4 py-6 bg-[#74CE3A] text-white text-base font-semibold rounded-2xl">
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
