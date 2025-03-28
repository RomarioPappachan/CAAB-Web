"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useAuthStore from "@/store/authStore";
import ProtectedRoute from "@/components/ProtectedRoutes";
import useUploadDocumentStore from "@/store/uploadDocumentsStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

function CompanyRating() {
  const [userData, setUserData] = useState({});
  const { user, token } = useAuthStore();
  const { businessType, selectedBranch } = useUploadDocumentStore();

  const [rating, setRating] = useState("");

  const router = useRouter();

  useEffect(() => {
    setUserData(user && user);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/grading`,
          { branch_id: selectedBranch.branch_id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response);
        setRating(response.data.gravityPercentage);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full h-full mt-[100px] md:mt-[130px] xl:mt-[152px] bg-white px-4 md:px-8 lg:px-[72px]">
        <p className="text-[#707784] text-[14px] py-10">
          <Link href={"/company-home"}>Home</Link> {">"}{" "}
          <Link href={"/company-rating"}>{userData?.company_name}</Link>
        </p>
        <div className="flex flex-col lg:flex-row gap-y-16 lg:gap-y-0 gap-x-5">
          <div className="w-full lg:w-3/5 border-[#707784] border-[1px] bg-[#F9F9FF] flex flex-col md:flex-row gap-8 md:gap-0 p-6 rounded-lg shadow-lg">
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h1 className="text-[#181C22] text-[24px]">Generate Rating</h1>
              <p className="text-[#707784] text-[16px]">
                Company name :
                <span className="text-[#181C22] text-[16px]">
                  {userData?.company_name}
                </span>
              </p>
              <p className="text-[#707784] text-[16px]">
                Business Type :
                <span className="text-[#181C22] text-[16px]">
                  {businessType && businessType}
                </span>
              </p>
              <div className="border-[#ABC8F6] border-[2px] p-4 rounded-2xl">
                <p className="text-[#181C22] text-[16px]">
                  "Please upload all required documents and certificates,
                  including government-issued and other relevant certifications,
                  to enable an accurate assessment and assignment of your
                  grade."
                </p>
              </div>
              <button
                className="w-full h-[64px]  bg-[#74CE3A] rounded-2xl text-white text-[16px] flex justify-center items-center"
                onClick={() => {
                  router.push("/upload-documents");
                }}
              >
                Submit Details
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-[#181C22] text-[24px] md:px-8 mb-4">
                Current Rating
              </h1>
              <div className="w-full h-full flex justify-center items-center relative">
                <img src="/chart.svg" alt="" className="size-80" />
                {rating ? (
                  <span className="absolute bottom-10 right-1/2 translate-x-7 font-bold text-[#404753] text-[40px]">
                    {rating}
                  </span>
                ) : (
                  <span className="absolute bottom-14 right-1/2 translate-x-7 font-bold text-[#404753] text-sm">
                    Not Rated
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="max-h-[424px] w-full lg:w-2/5 overflow-y-auto lg:pt-0">
            <h1 className="text-[20px] text-[#404A38] pb-4">
              Updates on submitted data
            </h1>
            <div className="overflow-scroll flex flex-col gap-y-4">
              {/* <div className="border-[2px] border-[#BFCAB3] rounded-[8px] p-6">
                <div className="relative">
                  <p className="text-[#173B00] text-[16px]">
                    The document submitted on 21/10/2024 has been accepted.
                  </p>
                  <span className="absolute right-0 -top-4 rotate-45 text-[#404A38] text-4xl font-thin">
                    +
                  </span>
                </div>
                <div className="text-[#173B00] text-[11px] flex justify-between items-center pt-4">
                  <p>21/10/2024</p>
                  <p>10:00 AM</p>
                </div>
              </div>
              <div className="border-[2px] border-[#BFCAB3] rounded-[8px] p-6">
                <div className="relative">
                  <p className="text-[#173B00] text-[16px]">
                    The document submitted on 21/10/2024 has been accepted.
                  </p>
                  <span className="absolute right-0 -top-4 rotate-45 text-[#404A38] text-4xl font-thin">
                    +
                  </span>
                </div>
                <div className="text-[#173B00] text-[11px] flex justify-between items-center pt-4">
                  <p>21/10/2024</p>
                  <p>10:00 AM</p>
                </div>
              </div>
              <div className="border-[2px] border-[#BFCAB3] rounded-[8px] p-6">
                <div className="relative">
                  <p className="text-[#173B00] text-[16px]">
                    The document submitted on 21/10/2024 has been accepted.
                  </p>
                  <span className="absolute right-0 -top-4 rotate-45 text-[#404A38] text-4xl font-thin">
                    +
                  </span>
                </div>
                <div className="text-[#173B00] text-[11px] flex justify-between items-center pt-4">
                  <p>21/10/2024</p>
                  <p>10:00 AM</p>
                </div>
              </div>
              <div className="border-[2px] border-[#BFCAB3] rounded-[8px] p-6">
                <div className="relative">
                  <p className="text-[#173B00] text-[16px]">
                    The document submitted on 21/10/2024 has been accepted.
                  </p>
                  <span className="absolute right-0 -top-4 rotate-45 text-[#404A38] text-4xl font-thin">
                    +
                  </span>
                </div>
                <div className="text-[#173B00] text-[11px] flex justify-between items-center pt-4">
                  <p>21/10/2024</p>
                  <p>10:00 AM</p>
                </div>
              </div>
              <div className="border-[2px] border-[#BFCAB3] rounded-[8px] p-6">
                <div className="relative">
                  <p className="text-[#173B00] text-[16px]">
                    The document submitted on 21/10/2024 has been accepted.
                  </p>
                  <span className="absolute right-0 -top-4 rotate-45 text-[#404A38] text-4xl font-thin">
                    +
                  </span>
                </div>
                <div className="text-[#173B00] text-[11px] flex justify-between items-center pt-4">
                  <p>21/10/2024</p>
                  <p>10:00 AM</p>
                </div>
              </div>
              <div className="border-[2px] border-[#BFCAB3] rounded-[8px] p-6">
                <div className="relative">
                  <p className="text-[#173B00] text-[16px]">
                    The document submitted on 21/10/2024 has been accepted.
                  </p>
                  <span className="absolute right-0 -top-4 rotate-45 text-[#404A38] text-4xl font-thin">
                    +
                  </span>
                </div>
                <div className="text-[#173B00] text-[11px] flex justify-between items-center pt-4">
                  <p>21/10/2024</p>
                  <p>10:00 AM</p>
                </div>
              </div>
              <div className="border-[2px] border-[#BFCAB3] rounded-[8px] p-6">
                <div className="relative">
                  <p className="text-[#173B00] text-[16px]">
                    The document submitted on 21/10/2024 has been accepted.
                  </p>
                  <span className="absolute right-0 -top-4 rotate-45 text-[#404A38] text-4xl font-thin">
                    +
                  </span>
                </div>
                <div className="text-[#173B00] text-[11px] flex justify-between items-center pt-4">
                  <p>21/10/2024</p>
                  <p>10:00 AM</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="py-20 flex flex-col gap-y-2">
          <h1 className="text-[#191C21] text-[24px] font-medium">
            Guidelines to complete rating.
          </h1>

          <p>
            1.Lorem ipsum dolor sit amet consectetur. Eu nunc pretium enim
            gravida interdum. Cras consectetur nisl sit aliquam in maecenas
            proin. Viverra adipiscing auctor magna felis elit pharetra id. Ut
            massa libero tempor curabitur neque morbi. Ut praesent nunc eget id
            velit pellentesque pretium. Cursus urna massa tincidunt sit sit
            interdum enim bibendum mi. Ultrices velit morbi a euismod magna at.
          </p>
          <p>
            2.Lorem ipsum dolor sit amet consectetur. Eu nunc pretium enim
            gravida interdum. Cras consectetur nisl sit aliquam in maecenas
            proin. Viverra adipiscing auctor magna felis elit pharetra id. Ut
            massa libero tempor curabitur neque morbi. Ut praesent nunc eget id
            velit pellentesque pretium. Cursus urna massa tincidunt sit sit
            interdum enim bibendum mi. Ultrices velit morbi a euismod magna at.
          </p>
          <p>
            3.Lorem ipsum dolor sit amet consectetur. Eu nunc pretium enim
            gravida interdum. Cras consectetur nisl sit aliquam in maecenas
            proin. Viverra adipiscing auctor magna felis elit pharetra id. Ut
            massa libero tempor curabitur neque morbi. Ut praesent nunc eget id
            velit pellentesque pretium. Cursus urna massa tincidunt sit sit
            interdum enim bibendum mi. Ultrices velit morbi a euismod magna at.
          </p>
          <p>
            4.Lorem ipsum dolor sit amet consectetur. Eu nunc pretium enim
            gravida interdum. Cras consectetur nisl sit aliquam in maecenas
            proin. Viverra adipiscing auctor magna felis elit pharetra id. Ut
            massa libero tempor curabitur neque morbi. Ut praesent nunc eget id
            velit pellentesque pretium. Cursus urna massa tincidunt sit sit
            interdum enim bibendum mi. Ultrices velit morbi a euismod magna at.
          </p>
          <p>
            5.Lorem ipsum dolor sit amet consectetur. Eu nunc pretium enim
            gravida interdum. Cras consectetur nisl sit aliquam in maecenas
            proin. Viverra adipiscing auctor magna felis elit pharetra id. Ut
            massa libero tempor curabitur neque morbi. Ut praesent nunc eget id
            velit pellentesque pretium. Cursus urna massa tincidunt sit sit
            interdum enim bibendum mi. Ultrices velit morbi a euismod magna at.
          </p>
        </div>
      </div>
    </div>
  );
}

// Wrapping the component with ProtectedRoute
const ProtectedCompanyRating = () => (
  <ProtectedRoute allowedRoles={["admin", "manager"]}>
    <CompanyRating />
  </ProtectedRoute>
);

export default ProtectedCompanyRating;
