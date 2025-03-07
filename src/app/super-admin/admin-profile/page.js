"use client";

import axios from "axios";
import EditAdminBasicDetailsPopup from "@/app/components/super-admin/profile/EditAdminBasicDetailsPopup";
import EditAdminLoginNumberPopup from "@/app/components/super-admin/profile/EditAdminLoginNumberPopup";
import VerifySuperAdminOtpPopup from "@/app/components/super-admin/profile/VerifySuperAdminOtpPopup";
import ProtectedRoute from "@/components/ProtectedRoutes";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import useAuthStore from "@/store/authStore";

function SuperAdminProfile() {
  const [userDetails, setUserDetails] = useState({});

  const [updatedMobileNo, setUpdatedMobileNo] = useState(userDetails.mobile);

  const [isEditAdminBasicDetailsOpen, setIsEditAdminBasicDetailsOpen] =
    useState(false);
  const [isEditAdminLoginNumberOpen, setIsEditAdminLoginNumberOpen] =
    useState(false);
  const [isVerifyOtpOpen, setIsVerifyOtpOpen] = useState(false);

  const [renderAdminProfileToggle, setRenderAdminProfileToggle] =
    useState(false);

  const { token } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      const caabId = JSON.parse(localStorage.getItem("user")).caab_id;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/companyInfo/${caabId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setUserDetails(response.data.companyInfo);
        setUpdatedMobileNo(response.data.companyInfo.mobile);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, [renderAdminProfileToggle]);

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
                : {userDetails.user_name}
              </span>
            </p>
            <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
              <span className="w-1/2">Company Name</span>
              <span className="w-1/2 font-medium text-[#181C22]">
                : {userDetails.company_name}
              </span>
            </p>
            <p className="text-sm font-normal leading-6 text-[#404753] flex items-center">
              <span className="w-1/2">Email</span>
              <span className="w-1/2 font-medium text-[#181C22]">
                : {userDetails.email}
              </span>
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
                : {userDetails.mobile}
              </span>
            </p>
          </div>
        </div>
      </div>
      {isEditAdminBasicDetailsOpen && (
        <EditAdminBasicDetailsPopup
          userDetails={userDetails}
          token={token}
          setIsEditAdminBasicDetailsOpen={setIsEditAdminBasicDetailsOpen}
          setRenderAdminProfileToggle={setRenderAdminProfileToggle}
        />
      )}
      {isEditAdminLoginNumberOpen && (
        <EditAdminLoginNumberPopup
          userDetails={userDetails}
          token={token}
          updatedMobileNo={updatedMobileNo}
          setUpdatedMobileNo={setUpdatedMobileNo}
          setIsEditAdminLoginNumberOpen={setIsEditAdminLoginNumberOpen}
          setIsVerifyOtpOpen={setIsVerifyOtpOpen}
        />
      )}
      {isVerifyOtpOpen && (
        <VerifySuperAdminOtpPopup
          userDetails={userDetails}
          token={token}
          updatedMobileNo={updatedMobileNo}
          setUpdatedMobileNo={setUpdatedMobileNo}
          setIsVerifyOtpOpen={setIsVerifyOtpOpen}
          setRenderAdminProfileToggle={setRenderAdminProfileToggle}
        />
      )}
    </>
  );
}

// Wrapping the component with ProtectedRoute
const ProtectedSuperAdminProfile = () => (
  <ProtectedRoute allowedRoles={["admin", "manager"]}>
    <SuperAdminProfile />
  </ProtectedRoute>
);

export default ProtectedSuperAdminProfile;
