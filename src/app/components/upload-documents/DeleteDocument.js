"use client";

import useUploadDocumentStore from "@/store/uploadDocumentsStore";
import axios from "axios";
import React from "react";
import { createPortal } from "react-dom";

function DeleteDocument() {
  const token = localStorage.getItem("token");
  const {
    setRenderDocumentList,
    setIsDeleteDocumentOpen,
    selectedDocumentIdToDelete,
    setSelectedDocumentIdToDelete,
  } = useUploadDocumentStore();

  console.log(selectedDocumentIdToDelete);

  //   handle Delete

  async function handleDeleteDocument() {
    if (selectedDocumentIdToDelete) {
      // API call
      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/user/deleteDocument/${selectedDocumentIdToDelete}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log(response); // Handle the response

        setSelectedDocumentIdToDelete(null);
        setIsDeleteDocumentOpen(false);
        setRenderDocumentList();
      } catch (error) {
        console.error("Error submitting document:", error);
      }
    }
  }

  return createPortal(
    <div className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center p-2 sm:p-4 md:p-8 lg:p-[72px] bg-[#0000003e] z-50">
      <div className="w-[500px] h-[250px] p-4 flex flex-col justify-center gap-6 bg-white rounded-lg border-2 border-red-500">
        <div className="flex justify-center">
          <p>Do you want to delete this document ?</p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <button
            className="w-24 h-10 px-4 text-sm font-semibold leading-6 text-[#BA1A1A] rounded-lg bg-white border-[1px] border-[#BA1A1A] hover:bg-[#ba1a1a20]"
            onClick={handleDeleteDocument}
          >
            DELETE
          </button>
          <button
            className="w-24 h-10 px-4 text-sm font-semibold leading-6 text-[#BA1A1A] rounded-lg bg-white border-[1px] border-[#BA1A1A] hover:bg-[#ba1a1a20]"
            onClick={() => setIsDeleteDocumentOpen(false)}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default DeleteDocument;
