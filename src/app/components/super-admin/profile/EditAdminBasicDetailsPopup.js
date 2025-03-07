"use client";
import axios from "axios";
import React, { useState } from "react";
import { createPortal } from "react-dom";

function EditAdminBasicDetailsPopup({
  userDetails,
  token,
  setIsEditAdminBasicDetailsOpen,
  setRenderAdminProfileToggle,
}) {
  const [updatedUserDetails, setUpdatedUserDetails] = useState(userDetails);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setUpdatedUserDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const caabId = updatedUserDetails.caab_id;
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/editCompany/${caabId}`,
        updatedUserDetails,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(response.data.message);

      setTimeout(() => {
        setIsEditAdminBasicDetailsOpen(false); //close popup
        setRenderAdminProfileToggle((prevValue) => !prevValue); //render profile page
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error("Error fetching data.");\
    }
  }

  return createPortal(
    <div className="w-screen h-screen px-4 md:px-8 lg:px-[72px] py-14 bg-[#000000c1] fixed top-0 left-0 z-50 flex justify-center items-center">
      <div className="w-[560px] h-[552px] flex flex-col gap-10 bg-white">
        <div className="p-6 bg-[#003E82] text-white text-xl font-semibold relative">
          <h3>Admin Basic Details</h3>
          <button
            onClick={() => setIsEditAdminBasicDetailsOpen(false)}
            className="absolute -top-8 right-0 sm:-right-6 rotate-45 text-3xl font-normal text-white "
          >
            +
          </button>
        </div>
        <form
          className="px-2 sm:px-6 flex flex-col gap-[72px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
              name="user_name"
              value={updatedUserDetails.user_name}
              onChange={handleOnChange}
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
              name="company_name"
              value={updatedUserDetails.company_name}
              onChange={handleOnChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-14 px-2 font-base bg-white text-[#404753] outline-none border-[#707784] border-[1px] rounded-lg"
              name="email"
              value={updatedUserDetails.email}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <button className="w-full px-4 py-6 bg-[#74CE3A] text-white text-base font-semibold rounded-2xl">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

export default EditAdminBasicDetailsPopup;
