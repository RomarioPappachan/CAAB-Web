"use client";
import React from "react";
import { createPortal } from "react-dom";

function BranchDeletionPopup(props) {
  return createPortal(
    <div className="w-screen h-screen px-4 md:px-8 lg:px-[72px] py-14 bg-[#000000c1] fixed top-0 left-0 z-50 flex justify-center items-center">
      <div className="w-[480px] h-[350px] sm:h-[320px] flex flex-col gap-6 bg-white">
        <div className="p-6 bg-[#BA1A1A] text-white text-xl font-semibold relative">
          <h3>Branch Deletion</h3>
          <button
            onClick={() => props.setIsBranchDeletionPopupOpen(false)}
            className="absolute -top-8 right-0 sm:-right-6 rotate-45 text-3xl font-normal text-white "
          >
            +
          </button>
        </div>
        <div className="px-2 sm:px-6 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-center text-base text-[#181C22] font-medium">
              All data related to the branch will be permanently deleted and
              cannot be recovered.
            </p>
            <p className="text-center text-base text-[#404753] font-normal">
              Do you want to proceed with deleting this branch?
            </p>
          </div>

          <div className="flex justify-between items-center">
            <button className="w-[150px] sm:w-[204px] px-4 py-2 text-[#BA1A1A] text-base font-medium rounded-lg border-[1px] border-[#BA1A1A]">
              Delete
            </button>
            <button
              onClick={() => props.setIsBranchDeletionPopupOpen(false)}
              className="w-[150px] sm:w-[204px] px-4 py-2 bg-[#BA1A1A] text-white text-base font-medium rounded-lg"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default BranchDeletionPopup;
