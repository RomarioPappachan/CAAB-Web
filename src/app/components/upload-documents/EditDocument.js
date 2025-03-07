"use client";
import useUploadDocumentStore from "@/store/uploadDocumentsStore";
import { ImageToBase64 } from "@/utilities/ImageToBase64";
import axios from "axios";
import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

function EditDocument({ doc, department, setIsEditOpen }) {
  const token = localStorage.getItem("token");

  const [newDocumentData, setNewDocumentData] = useState({
    description: "",
    issueDate: "",
    expiryDate: "",
    licenceNo: "",
    licenceAuthority: "",
    documentLink: "",
  });

  const [isIssueFocus, setIsIssueFocus] = useState(false);
  const [isExpiryFocus, setIsExpiryFocus] = useState(false);

  const { selectedBranch, setRenderDocumentList } = useUploadDocumentStore();

  function handleOnChange(event) {
    const { name, value } = event.target;
    setNewDocumentData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  async function handleUploadImage(event) {
    const data = await ImageToBase64(event.target.files[0]);
    setNewDocumentData((prevValue) => {
      return {
        ...prevValue,
        documentLink: data,
      };
    });
  }

  // submit document API
  async function handleSubmitDocument(event) {
    event.preventDefault();

    const { branch_id } = selectedBranch;

    const {
      description,
      issueDate,
      expiryDate,
      licenceNo,
      licenceAuthority,
      documentLink,
    } = newDocumentData;

    if (
      description ||
      issueDate ||
      expiryDate ||
      licenceNo ||
      licenceAuthority ||
      documentLink
    ) {
      // Prepare JSON object
      const updatedData = {
        branch_id: branch_id,
        department_name: department,
        document_description: description
          ? description
          : doc.document_description,
        issue_date: issueDate ? issueDate : doc.issue_date,
        expiry_date: expiryDate ? expiryDate : doc.expiry_date,
        licence_no: licenceNo ? licenceNo : doc.licence_no,
        licence_authority: licenceAuthority
          ? licenceAuthority
          : doc.licence_authority,
        document_link: documentLink ? documentLink : doc.document_link, // take new input data or set previous data
      };
      console.log(updatedData);

      // API call
      try {
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/user/editDocument/${doc.id}`,
          updatedData,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log(response); // Handle the response

        setIsEditOpen(false);
        setRenderDocumentList();
      } catch (error) {
        console.error("Error submitting document:", error);
      }
    } else {
      alert("Enter the required details");
    }
  }

  return (
    <div className="ps-8 py-6 border-b-[1px] border-[#C2C6D4] flex flex-col lg:flex-row gap-6 relative">
      <span className="absolute top-10 left-0">1{")"}</span>
      <div className="w-full lg:w-2/3 xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          className="sm:col-span-2 h-14 p-4 text-base leading-6 font-normal text-black bg-white rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#782A99] placeholder:text-[#404753]"
          placeholder="Description of Document or Certificate"
          name="description"
          value={newDocumentData.description}
          onChange={handleOnChange}
        />
        <input
          type={isIssueFocus ? "date" : "text"}
          className="h-14 p-4 text-base leading-6 font-normal text-black bg-white rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#782A99] placeholder:text-[#404753]"
          placeholder="Issue Date"
          onFocus={() => setIsIssueFocus(true)}
          onBlur={() => setIsIssueFocus(false)}
          name="issueDate"
          value={newDocumentData.issueDate}
          onChange={handleOnChange}
        />
        <input
          type="text"
          className="h-14 p-4 text-base leading-6 font-normal text-black bg-white rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#782A99] placeholder:text-[#404753]"
          placeholder="License No"
          name="licenceNo"
          value={newDocumentData.licenceNo}
          onChange={handleOnChange}
        />

        <input
          type={isExpiryFocus ? "date" : "text"}
          className="row-start-3 h-14 p-4 text-base leading-6 font-normal text-black bg-white rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#782A99] placeholder:text-[#404753]"
          placeholder="Expiry Date"
          onFocus={() => setIsExpiryFocus(true)}
          onBlur={() => setIsExpiryFocus(false)}
          name="expiryDate"
          value={newDocumentData.expiryDate}
          onChange={handleOnChange}
        />
        <select
          className="h-14 p-4 text-base leading-6 font-normal text-black bg-white rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#003E82] placeholder:text-[#404753]"
          placeholder="Licence Authority"
          name="licenceAuthority"
          value={newDocumentData.licenceAuthority}
          onChange={handleOnChange}
        >
          <option className="text-[#404753]" value="" selected disabled>
            Licence Authority
          </option>
          <option value={department}>{department}</option>
        </select>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col sm:flex-row gap-6 relative pb-14 sm:pb-0">
        <label
          htmlFor="document"
          className="w-36 md:w-42 lg:w-3/5 h-48 lg:h-full flex justify-center items-center cursor-pointer"
        >
          {newDocumentData.documentLink ? (
            <img
              src={newDocumentData.documentLink}
              alt="document"
              className="h-full"
            />
          ) : (
            <span className="w-full h-full p-4 flex flex-col justify-center items-center gap-4 bg-[#D9D9D9]">
              <span>
                <MdOutlineFileUpload className="text-3xl text-[#424752]" />
              </span>
              <span className="text-base text-[#424752] text-wrap text-center">
                Upload Document
              </span>
            </span>
          )}

          <input
            id="document"
            type="file"
            accept="image/*"
            hidden
            name="documentLink"
            onChange={handleUploadImage}
          />
        </label>

        <span className="absolute right-0 bottom-0 flex lg:flex-col gap-4">
          <button
            className="w-24 h-10 px-4 text-sm font-semibold leading-6 text-[#4C5F81] rounded-lg bg-white border-[1px] border-[#4C5F81] hover:bg-[#4c5f8118]"
            onClick={() => {
              setIsEditOpen(false);
            }}
          >
            CANCEL
          </button>
          <button
            className="w-24 h-10 px-4 text-sm font-semibold leading-6 text-white rounded-lg bg-[#782A99] hover:bg-[#782a99e6]"
            onClick={handleSubmitDocument}
          >
            UPDATE
          </button>
        </span>
      </div>
    </div>
  );
}

export default EditDocument;
