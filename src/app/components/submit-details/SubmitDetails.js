"use client";
import React, { useState } from "react";
import SubmittedData from "./SubmittedData";
import EditDataPopup from "./EditDataPopup";

function SubmitDetails() {
  const [sections, setSections] = useState([
    {
      id: 1,
      fileUrl: null,
      fileName: null,
      description: "",
      issueDate: "",
      licenceNo: "",
      expiryDate: "",
      authority: "",
    },
  ]);
  const [submittedData, setSubmittedData] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: sections.length + 1,
        fileUrl: null,
        fileName: null,
        description: "",
        issueDate: "",
        licenceNo: "",
        expiryDate: "",
        authority: "",
      },
    ]);
  };

  const removeSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const handleFileUpload = (e, id) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      const fileName = file.name;
      setSections((prevSections) =>
        prevSections.map((section) =>
          section.id === id ? { ...section, fileUrl, fileName } : section
        )
      );
    }
  };

  const handleInputChange = (e, id, field) => {
    const value = e.target.value;
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const handleSubmit = () => {
    setSubmittedData([...submittedData, ...sections]);
    setSections([
      {
        id: 1,
        fileUrl: null,
        fileName: null,
        description: "",
        issueDate: "",
        licenceNo: "",
        expiryDate: "",
        authority: "",
      },
    ]);
  };

  return (
    <div className="pt-10 ">
      <h1>GST DEPARTMENT</h1>

      <SubmittedData
        data={submittedData}
        setIsEditing={setIsEditing} // Set the editing state to open the edit popup
      />

      {/* Form for Creating New Data */}
      {sections.map((section) => (
        <div
          key={section.id}
          className="flex flex-col lg:flex-row border-b-[1px] border-[#707784] py-10"
        >
          {/* Input fields for the sections go here */}
          <div className="w-full lg:w-3/4">
            <div className="flex items-center relative">
              <span className="absolute -left-5">
                {section.id}
                {")"}
              </span>
              <input
                type="text"
                placeholder="Description of Document or Certificate"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black "
                value={section.description}
                onChange={(e) =>
                  handleInputChange(e, section.id, "description")
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="date"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                value={section.issueDate}
                onChange={(e) => handleInputChange(e, section.id, "issueDate")}
              />
              <input
                type="tel"
                placeholder="Licence No"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                value={section.licenceNo}
                onChange={(e) => handleInputChange(e, section.id, "licenceNo")}
              />
              <input
                type="date"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                value={section.expiryDate}
                onChange={(e) => handleInputChange(e, section.id, "expiryDate")}
              />
              <input
                type="text"
                placeholder="Licence Authority"
                className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
                value={section.authority}
                onChange={(e) => handleInputChange(e, section.id, "authority")}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/4 flex items-start relative mt-4 lg:mt-0">
            <input
              type="file"
              placeholder="upload"
              accept="application/pdf"
              onChange={(e) => handleFileUpload(e, section.id)}
              className="w-1/2 lg:w-[183px] h-40 lg:h-full px-4 bg-[#D9D9D9] placeholder:text-[#404753] border-[1px] border-[#707784] rounded-sm text-black mb-2 lg:ml-4"
            />
            <div className="flex items-end h-full">
              <button
                onClick={() => removeSection(section.id)}
                className="w-[103px] h-[40px] border-[#BA1A1A] border-2 text-[14px] font-semibold text-[#BA1A1A] bg-white rounded-lg ml-2"
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-10">
        <button
          onClick={handleSubmit}
          className="w-[286px] h-[48px] bg-[#74CE3A] text-white flex justify-center items-center"
        >
          SUBMIT
        </button>
        <button
          onClick={addSection}
          className="w-[286px] h-[48px] border-[#003E82] border-2 text-[#003E82] text-[16px] font-semibold bg-white"
        >
          + ADD
        </button>
      </div>

      {isEditing && (
        <EditDataPopup
          data={submittedData.find((item) => item.id === isEditing)}
          onClose={() => setIsEditing(null)} // Close the popup
        />
      )}
    </div>
  );
}

export default SubmitDetails;
