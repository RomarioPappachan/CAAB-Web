"use client";
import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { ImageToBase64 } from "@/utilities/ImageToBase64";
import useUploadDocumentStore from "@/store/uploadDocumentsStore";
import axios from "axios";

function InsertDocument({ department, setIsInsertDocumentOpen }) {
  const [inputData, setInputData] = useState({
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
    setInputData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  async function handleUploadImage(event) {
    const data = await ImageToBase64(event.target.files[0]);
    setInputData((prevValue) => {
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
    } = inputData;

    if (
      branch_id &&
      department &&
      description &&
      issueDate &&
      expiryDate &&
      licenceNo &&
      licenceAuthority &&
      documentLink
    ) {
      // Prepare JSON object
      const requestData = {
        branch_id: branch_id,
        department_name: department,
        document_description: description,
        issue_date: issueDate,
        expiry_date: expiryDate,
        licence_no: licenceNo,
        licence_authority: licenceAuthority,
        document_link: documentLink, // Base64 as is
      };
      console.log(requestData);

      // API call
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/newDocument`,
          requestData
        );

        console.log(response.data); // Handle the response

        setInputData({
          description: "",
          issueDate: "",
          expiryDate: "",
          licenceNo: "",
          licenceAuthority: "",
          documentLink: "",
        });
        setIsInsertDocumentOpen(false);
        setRenderDocumentList();
      } catch (error) {
        // console.error("Error submitting document:", error);
        console.error("Server Error:", error.response.data);
        console.error("Status Code:", error.response.status);
        // Optionally, show an error message
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
          className="sm:col-span-2 h-14 p-4 text-base leading-6 font-normal text-black bg-white rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#003E82] placeholder:text-[#404753]"
          placeholder="Description of Document or Certificate"
          name="description"
          value={inputData.description}
          onChange={handleOnChange}
        />
        <input
          type={isIssueFocus ? "date" : "text"}
          className="h-14 p-4 text-base leading-6 font-normal text-black bg-white rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#003E82] placeholder:text-[#404753]"
          placeholder="Issue Date"
          onFocus={() => setIsIssueFocus(true)}
          onBlur={() => setIsIssueFocus(false)}
          name="issueDate"
          value={inputData.issueDate}
          onChange={handleOnChange}
        />
        <input
          type="text"
          className="h-14 p-4 text-base leading-6 font-normal text-black bg-white rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#003E82] placeholder:text-[#404753]"
          placeholder="Licence No"
          name="licenceNo"
          value={inputData.licenceNo}
          onChange={handleOnChange}
        />

        <input
          type={isExpiryFocus ? "date" : "text"}
          className="row-start-3 h-14 p-4 text-base leading-6 font-normal text-black bg-white rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#003E82] placeholder:text-[#404753]"
          placeholder="Expiry Date"
          onFocus={() => setIsExpiryFocus(true)}
          onBlur={() => setIsExpiryFocus(false)}
          name="expiryDate"
          value={inputData.expiryDate}
          onChange={handleOnChange}
        />
        <select
          className="h-14 p-4 text-base leading-6 font-normal text-black bg-white rounded-lg border-[1px] border-[#707784] outline-none focus:border-2 focus:border-[#003E82] placeholder:text-[#404753]"
          placeholder="Licence Authority"
          name="licenceAuthority"
          value={inputData.licenceAuthority}
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
          {inputData.documentLink ? (
            <img
              src={inputData.documentLink}
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

        <button
          className="absolute right-0 bottom-0 w-24 h-10 px-4 text-sm font-semibold leading-6 text-[#BA1A1A] rounded-lg bg-white border-[1px] border-[#BA1A1A] hover:bg-[#ba1a1a20]"
          onClick={() => setIsInsertDocumentOpen(false)}
        >
          REMOVE
        </button>
      </div>

      <button
        className="absolute -bottom-20 md:w-72 h-12 px-4 py-3 text-base font-semibold leading-6 text-white rounded-lg bg-[#74CE3A] border-[1px] border-[#BFCAB3] hover:bg-[#75ce3ae1]"
        onClick={handleSubmitDocument}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default InsertDocument;
