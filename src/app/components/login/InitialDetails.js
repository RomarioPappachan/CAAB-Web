"use client";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { useRouter } from "next/navigation";
import axios from "axios";
import useAuthStore from "@/store/authStore";

function InitialDetails({
  mobileNo,
  setIsOtpPopupOpen,
  setIsLoginSignupOpen,
  setIsInitialDetailsOpen,
}) {
  const [companyDetails, setCompanyDetails] = useState({
    userName: "",
    email: "",
    companyName: "",
    employerCategory: "",
  });

  const { login } = useAuthStore();
  const router = useRouter();

  function handleOnChange(event) {
    const { name, value } = event.target;

    setCompanyDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  async function handleSubmitDetails(e) {
    e.preventDefault();

    const { userName, email, companyName, employerCategory } = companyDetails;

    if (!userName || !companyName || !employerCategory) {
      if (!userName) alert("Enter a user name");
      else if (!companyName) alert("Enter your Company name");
      else if (!employerCategory) alert("Enter your Employ category");
      else alert("Enter Company details");
    } else {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/addCompany`,
          {
            user_name: userName,
            email: email,
            company_name: companyName,
            employer_category: employerCategory,
            mobile: mobileNo,
          }
        );
        console.log(response);
        const userData = response.data.data;
        login(userData);
        setTimeout(() => {
          setIsOtpPopupOpen(false);
          setIsLoginSignupOpen(false);
          setIsInitialDetailsOpen(true);
          router.push("/company-home");
        }, 1000);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  }
  return (
    <div className="w-[854px] h-[671px] py-14 border-[1px] border-[#e8e8e8] bg-white drop-shadow-xl rounded-2xl ">
      <div className="md:px-24">
        <div className="relative border-b-[1px] mx-4 lg:mx-0 border-[#C0C7D5]">
          <h1 className="text-[#191C21] font-semibold text-xl sm:text-2xl text-center pb-4 leading-7 sm:leading-10 ">
            Welcome to
            <br />
            CorpRank Advice and Audit Body Private Limited
          </h1>
          <GoDotFill className="text-[#C0C7D5] absolute -bottom-[4px] -left-[4px] size-2 " />
          <GoDotFill className="text-[#C0C7D5] absolute -bottom-[4px] -right-[4px] size-2" />
        </div>
        <div className="flex justify-center items-center gap-2 pt-5">
          <img src="/user-icon-1.svg" alt="user-icon" />
          <p className="text-[#424752] text-[16px]">
            Your account has been created
          </p>
        </div>
      </div>

      <div className=" px-4 sm:px-28 lg:px-56 pt-8 flex flex-col gap-y-4">
        <p className="text-[#2262B7] text-[16px]">Fill in necessary details</p>
        <input
          type="text"
          placeholder="Username *"
          className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black bg-white"
          name="userName"
          value={companyDetails.userName}
          onChange={handleOnChange}
        />
        <input
          type="text"
          placeholder="Email (optional)"
          className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black bg-white"
          name="email"
          value={companyDetails.email}
          onChange={handleOnChange}
        />
        <input
          type="text"
          placeholder="Company Name *"
          className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-black bg-white"
          name="companyName"
          value={companyDetails.companyName}
          onChange={handleOnChange}
        />
        <select
          className="w-full h-[56px] px-4 placeholder:text-[#404753] border-[1px] border-[#707784] rounded-lg text-[#404753] focus:text-black bg-white"
          name="employerCategory"
          value={companyDetails.employerCategory}
          onChange={handleOnChange}
        >
          <option value="" selected disabled>
            Select Employer Category
          </option>
          <option value="company">Company</option>
          <option value="proprietorship">Proprietorship</option>
          <option value="partnership">Partnership</option>
        </select>
        <button
          className="w-full h-[56px] mt-6 bg-[#74CE3A] text-white text-[14px] font-semibold flex justify-center items-center"
          onClick={handleSubmitDetails}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}

export default InitialDetails;
