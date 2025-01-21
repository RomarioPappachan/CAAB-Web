"use client";

import React, { useState, useEffect } from "react";

function EditDataPopup({
  item,
  setIsEditing,
  updateSubmittedData,
  updateSubmittedFile,
}) {
  // Ensure that item has all required properties before initializing state
  const [formData, setFormData] = useState({
    description: item?.description || "",
    issueDate: item?.issueDate || "",
    licenceNo: item?.licenceNo || "",
    expiryDate: item?.expiryDate || "",
    authority: item?.authority || "",
    fileUrl: item?.fileUrl || "",
    fileName: item?.fileName || "",
  });

  useEffect(() => {
    if (item) {
      setFormData({
        description: item.description || "",
        issueDate: item.issueDate || "",
        licenceNo: item.licenceNo || "",
        expiryDate: item.expiryDate || "",
        authority: item.authority || "",
        fileUrl: item.fileUrl || "",
        fileName: item.fileName || "",
      });
    }
  }, [item]);

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      const fileName = file.name;
      setFormData((prevData) => ({
        ...prevData,
        fileUrl,
        fileName,
      }));
      updateSubmittedFile(fileUrl, fileName); // Pass the new file to the parent component
    }
  };

  const handleSave = () => {
    if (formData) {
      updateSubmittedData(formData);
      setIsEditing(null); // Close the popup after saving
    }
  };

  if (!item) return null; // Return null or a loading spinner if the item is undefined

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-50">
      <div className="bg-white rounded-lg w-full lg:w-1/2 p-8">
        <h2 className="text-xl font-semibold mb-6">Edit Submitted Data</h2>
        <div className="flex flex-col space-y-4">
          {/* Description */}
          <div className="flex items-center relative">
            <span className="absolute -left-5">1)</span>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => handleInputChange(e, "description")}
              placeholder="Description"
              className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
            />
          </div>

          {/* Issue Date */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              value={formData.issueDate}
              onChange={(e) => handleInputChange(e, "issueDate")}
              className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
            />
            <input
              type="tel"
              value={formData.licenceNo}
              onChange={(e) => handleInputChange(e, "licenceNo")}
              placeholder="Licence No"
              className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
            />
          </div>

          {/* Expiry Date */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              value={formData.expiryDate}
              onChange={(e) => handleInputChange(e, "expiryDate")}
              className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
            />
            <input
              type="text"
              value={formData.authority}
              onChange={(e) => handleInputChange(e, "authority")}
              placeholder="Licence Authority"
              className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black"
            />
          </div>

          {/* File Upload */}
          <div>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full px-4 bg-[#D9D9D9] placeholder:text-[#404753] border-[1px] border-[#707784] rounded-sm text-black mb-2"
            />
            {formData.fileUrl && (
              <a
                href={formData.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {formData.fileName || "View PDF"}
              </a>
            )}
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={() => setIsEditing(null)} // Close the popup without saving
              className="w-[103px] h-[40px] border-[#BA1A1A] border-2 text-[14px] font-semibold text-[#BA1A1A] bg-white rounded-lg"
            >
              CANCEL
            </button>
            <button
              onClick={handleSave}
              className="w-[103px] h-[40px] bg-[#74CE3A] text-white rounded-lg"
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDataPopup;
