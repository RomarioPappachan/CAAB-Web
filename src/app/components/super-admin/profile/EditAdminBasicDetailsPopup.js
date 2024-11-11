// "use client";
// import React from "react";

// function EditAdminBasicDetailsPopup() {
//   return (
//     <div className="w-screen h-screen bg-[#000000c1] fixed top-0 left-0 z-50 flex justify-center items-center">
//       <div className="w-[560px] h-[552px] bg-white">
//         <div className="p-6 bg-[#003E82] text-white text-xl font-semibold">
//           <h3>Admin Basic Details</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditAdminBasicDetailsPopup;

"use client";
import React from "react";
import { createPortal } from "react-dom";

function EditAdminBasicDetailsPopup(props) {
  return createPortal(
    <div className="w-screen h-screen px-4 md:px-8 lg:px-[72px] py-14 bg-[#000000c1] fixed top-0 left-0 z-50 flex justify-center items-center">
      <div className="w-[560px] h-[552px] flex flex-col gap-10 bg-white">
        <div className="p-6 bg-[#003E82] text-white text-xl font-semibold relative">
          <h3>Admin Basic Details</h3>
          <button
            onClick={() => props.setIsEditAdminBasicDetailsOpen(false)}
            className="absolute -top-8 right-0 sm:-right-6 rotate-45 text-3xl font-normal text-white "
          >
            +
          </button>
        </div>
        <div className="px-2 sm:px-6 flex flex-col gap-[72px]">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
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

export default EditAdminBasicDetailsPopup;
