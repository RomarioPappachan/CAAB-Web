"use client";
import useUploadDocumentStore from "@/store/uploadDocumentsStore";
import React, { useState } from "react";
import { HiCalendar } from "react-icons/hi";

function DisplayDocument({ doc, setIsEditOpen }) {
  const { setSelectedDocumentIdToDelete, setIsDeleteDocumentOpen } =
    useUploadDocumentStore();
  return (
    <div className="ps-8 py-6 border-b-[1px] border-[#C2C6D4] flex flex-col lg:flex-row gap-6 relative">
      <span className="absolute top-10 left-0">1{")"}</span>
      <div className="w-full lg:w-2/3 xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p className="sm:col-span-2 h-14 text-base font-normal leading-6 text-[#191C21] flex items-center">
          {doc.document_description}
        </p>
        <p className="h-14 text-sm sm:text-base font-normal leading-6 text-[#191C21] flex items-center">
          <span className="w-2/3 sm:w-1/2 xl:w-1/3 flex items-center gap-2">
            <HiCalendar className="text-[#404753] text-xl sm:text-2xl" />
            <span className="text-[#404753]">Issue Date</span>
          </span>
          <span className="w-1/3 sm:w-1/2 xl:w-2/3">: {doc.issue_date}</span>
        </p>
        <p className="h-14 text-base font-normal leading-6 text-[#191C21] flex items-center">
          <span className="w-1/3 text-[#404753]">License No</span>
          <span className="w-2/3">: {doc.licence_no}</span>
        </p>
        <p className="row-start-3 h-14 text-sm sm:text-base font-normal leading-6 text-[#191C21] flex items-center">
          <span className="w-2/3 sm:w-1/2 xl:w-1/3 flex items-center gap-2">
            <HiCalendar className="text-[#404753] text-xl sm:text-2xl" />
            <span className="text-[#404753]">Expiry Date</span>
          </span>
          <span className="w-1/3 sm:w-1/2 xl:w-2/3">: {doc.expiry_date}</span>
        </p>
        <p className="h-14 text-base font-normal leading-6 text-[#191C21] flex items-center">
          <span className="w-1/3 text-[#404753] text-wrap">
            License Authority
          </span>
          <span className="w-2/3">: {doc.licence_authority}</span>
        </p>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col sm:flex-row gap-6 relative pb-14 sm:pb-0">
        <div className="w-36 md:w-42 lg:w-3/5 h-48 lg:h-full">
          <img className="h-full object-cover" alt="" src={doc.document_link} />
        </div>

        <span className="absolute right-0 bottom-0 flex lg:flex-col gap-4">
          <button
            className="w-24 h-10 px-4 text-sm font-semibold leading-6 text-[#612177] rounded-lg bg-white border-[1px] border-[#612177] hover:bg-[#6221771b]"
            onClick={() => {
              setIsEditOpen(true);
            }}
          >
            EDIT
          </button>
          <button
            className="w-24 h-10 px-4 text-sm font-semibold leading-6 text-[#BA1A1A] rounded-lg bg-white border-[1px] border-[#BA1A1A] hover:bg-[#ba1a1a20]"
            onClick={() => {
              setSelectedDocumentIdToDelete(doc.id);
              setIsDeleteDocumentOpen(true);
            }}
          >
            DELETE
          </button>
        </span>
      </div>
    </div>
  );
}

export default DisplayDocument;
