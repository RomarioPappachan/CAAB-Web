"use client";
import EditAdminBasicDetailsPopup from "@/app/components/super-admin/profile/EditAdminBasicDetailsPopup";
import EditAdminLoginNumberPopup from "@/app/components/super-admin/profile/EditAdminLoginNumberPopup";
import VerifySuperAdminOtpPopup from "@/app/components/super-admin/profile/VerifySuperAdminOtpPopup";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";

function SuperAdminProfile() {
  const [isEditAdminBasicDetailsOpen, setIsEditAdminBasicDetailsOpen] =
    useState(false);
  const [isEditAdminLoginNumberOpen, setIsEditAdminLoginNumberOpen] =
    useState(false);
  const [isVerifyOtpOpen, setIsVerifyOtpOpen] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col gap-y-14">
        <div className="py-2 border-[#C0C7D5] border-b-[1px]">
          <h2 className="font-medium text-xl leading-6 text-[#404753]">
            Admin Profile
          </h2>
        </div>
        <div className="w-[317px] flex flex-col gap-y-6">
          <h5 className="text-[#404753] text-base font-semibold flex items-center gap-6">
            <span>Admin Basic Details</span>
            <span
              className="cursor-pointer"
              onClick={() => setIsEditAdminBasicDetailsOpen(true)}
            >
              <FiEdit className="text-xl text-[#782A99]" />
            </span>
          </h5>
          <div className="ps-10 flex flex-col gap-y-6">
            <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
              <span className="w-1/2">Username</span>
              <span className="w-1/2 font-medium text-[#181C22]">
                : Sunny Joseph
              </span>
            </p>
            <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
              <span className="w-1/2">Company Name</span>
              <span className="w-1/2 font-medium text-[#181C22]">
                : Brothers Pvt Ltd
              </span>
            </p>
            <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
              <span className="w-1/2">Email</span>
              <span className="w-1/2 font-medium text-[#181C22]">: NA</span>
            </p>
          </div>
        </div>
        <div className="w-[317px] flex flex-col gap-y-6">
          <h5 className="text-[#404753] text-base font-semibold flex items-center gap-6">
            <span>Admin Login Number</span>
            <span
              className="cursor-pointer"
              onClick={() => setIsEditAdminLoginNumberOpen(true)}
            >
              <FiEdit className="text-xl text-[#782A99]" />
            </span>
          </h5>
          <div className="ps-10 flex flex-col gap-y-6">
            <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
              <span className="w-1/2">Mobile Number</span>
              <span className="w-1/2 font-medium text-[#181C22]">
                : +91 9574894889
              </span>
            </p>
          </div>
        </div>
      </div>
      {isEditAdminBasicDetailsOpen && (
        <EditAdminBasicDetailsPopup
          setIsEditAdminBasicDetailsOpen={setIsEditAdminBasicDetailsOpen}
        />
      )}
      {isEditAdminLoginNumberOpen && (
        <EditAdminLoginNumberPopup
          setIsEditAdminLoginNumberOpen={setIsEditAdminLoginNumberOpen}
          setIsVerifyOtpOpen={setIsVerifyOtpOpen}
        />
      )}
      {isVerifyOtpOpen && (
        <VerifySuperAdminOtpPopup setIsVerifyOtpOpen={setIsVerifyOtpOpen} />
      )}
    </>
  );
}

export default SuperAdminProfile;
