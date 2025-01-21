"use client";
import React, { useState } from "react";
import InsertDocument from "./InsertDocument";
import SubmittedDocument from "./SubmittedDocument";
import { FaPlus } from "react-icons/fa6";
import useUploadDocumentStore from "@/store/uploadDocumentsStore";

function DepartmentWiseForm({ department }) {
  const [isInsertDocumentOpen, setIsInsertDocumentOpen] = useState(false);

  const { branchDocuments, selectedDepartmentName, setSelectedDepartmentName } =
    useUploadDocumentStore();

  return (
    <div className="">
      <h2 className="my-10 text-xl font-medium leading-6 text-[#404753]">
        {department}
      </h2>

      <div className="p-4 md:p-8 lg:p-10 border-[1px] border-[#C2C6D4] rounded-lg bg-white">
        {/* document form div  */}
        <div>
          {branchDocuments.some((doc) => doc.department_name === department) ? (
            branchDocuments
              .filter((doc) => doc.department_name === department)
              .map((doc) => (
                <SubmittedDocument
                  key={doc.id}
                  doc={doc}
                  department={department}
                />
              ))
          ) : (
            <span className="text-base text-black font-medium">
              No documents uploaded
            </span>
          )}

          {isInsertDocumentOpen && selectedDepartmentName === department && (
            <InsertDocument
              department={department}
              setIsInsertDocumentOpen={setIsInsertDocumentOpen}
            />
          )}
        </div>

        {/* button div  */}
        <div className="pt-10 flex justify-end items-center">
          {!isInsertDocumentOpen || selectedDepartmentName !== department ? (
            <button
              className="md:w-72 h-12 px-4 py-3 text-base font-semibold leading-6 text-[#003E82] rounded-lg bg-white border-[1px] border-[#003E82] hover:bg-[#003f8225] flex items-center justify-center gap-2"
              onClick={() => {
                setSelectedDepartmentName(department);
                setIsInsertDocumentOpen(true);
              }}
            >
              <FaPlus className="text-2xl" /> ADD
            </button>
          ) : (
            <div className="h-12"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DepartmentWiseForm;
