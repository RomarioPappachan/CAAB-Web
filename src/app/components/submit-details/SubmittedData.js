import React from "react";

function SubmittedData({ data, setIsEditing }) {
  const deleteSubmittedData = (id) => {
    // You can implement delete logic here
  };

  return (
    <div className="mb-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col lg:flex-row border-b-[1px] border-[#707784] py-6 mb-6"
        >
          {/* Left Section: Document Details */}
          <div className="w-full lg:w-3/4">
            <div className="flex items-center relative mb-4">
              <span className="absolute -left-6">
                {item.id}
                {")"}
              </span>
              <p className="text-lg">
                Description: <strong>{item.description}</strong>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-lg">
                Issue Date: <strong>{item.issueDate}</strong>
              </p>
              <p className="text-lg">
                Licence No: <strong>{item.licenceNo}</strong>
              </p>
              <p className="text-lg">
                Expiry Date: <strong>{item.expiryDate}</strong>
              </p>
              <p className="text-lg">
                Licence Authority: <strong>{item.authority}</strong>
              </p>
            </div>
            {item.fileUrl && (
              <div className="mt-4">
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {item.fileName || "View PDF"}
                </a>
              </div>
            )}
          </div>

          {/* Right Section: Edit/Delete Buttons */}
          <div className="flex flex-col lg:flex-row items-start mt-4 lg:mt-0 lg:ml-4">
            <button
              onClick={() => setIsEditing(item.id)} // Trigger the edit popup
              className="w-[103px] h-[40px] border-[#003E82] border-2 text-[14px] font-semibold text-[#003E82] bg-white rounded-lg mb-2 lg:mb-0 lg:mr-4"
            >
              EDIT
            </button>
            <button
              onClick={() => deleteSubmittedData(item.id)}
              className="w-[103px] h-[40px] border-[#BA1A1A] border-2 text-[14px] font-semibold text-[#BA1A1A] bg-white rounded-lg"
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubmittedData;
