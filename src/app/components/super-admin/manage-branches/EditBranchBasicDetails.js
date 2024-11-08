"use client";
import React from "react";
import { createPortal } from "react-dom";
import { TbAlertTriangle } from "react-icons/tb";

function EditBranchBasicDetails(props) {
  return createPortal(
    <div className="w-screen h-screen px-4 md:px-8 lg:px-[72px] py-14 bg-[#000000c1] fixed top-0 left-0 z-50 flex justify-center items-center overflow-y-auto">
      <div className="w-[560px] min-h-[768px] xl:mt-36 pb-10 flex flex-col gap-10 bg-white">
        <div className="p-6 bg-[#003E82] text-white text-xl font-semibold relative">
          <h3>Branch Admin Details</h3>
          <button
            onClick={() => props.setIsEditBranchBasicDetailsOpen(false)}
            className="absolute -top-8 right-0 sm:-right-6 rotate-45 text-3xl font-normal text-white "
          >
            +
          </button>
        </div>
        <div className="px-2 sm:px-6 flex flex-col gap-[72px]">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Branch / Company Name"
              className="w-full h-14 px-2 font-base text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full h-14 px-2 font-base text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            />
            <select
              name=""
              id=""
              placeholder="Select Sector"
              className="w-full h-14 px-2 font-base text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            >
              <option
                className="font-base text-[#404753]"
                value=""
                selected
                disabled
              >
                Select Sector
              </option>
            </select>
            <p className="text-[#BA1A1A] flex gap-1">
              <span>
                <TbAlertTriangle className="text-3xl" />
              </span>
              <span>
                Changing the sector may result in the complete loss of all data
                related to the current sector. You will have to start from the
                beginning if you proceed.
              </span>
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-14 px-2 font-base text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            />
            <input
              type="text"
              placeholder="Mobile Number"
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

export default EditBranchBasicDetails;
