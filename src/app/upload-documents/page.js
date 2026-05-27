"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import BranchDocsStatusBanner from "../components/upload-documents/BranchDocsStatusBanner";
import DepartmentWiseForm from "../components/upload-documents/DepartmentWiseForm";
import useUploadDocumentStore from "@/store/uploadDocumentsStore";
import DeleteDocument from "../components/upload-documents/DeleteDocument";
import ProtectedRoute from "@/components/ProtectedRoutes";
import Link from "next/link";

function UploadDocuments() {
  const [isLoading, setIsLoading] = useState(true);
  // const [departmentList, setDepartmentList] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  // const businessType = localStorage.getItem("businessType");

  const {
    businessType,
    selectedBranch,
    setBranchDocuments,
    departmentList,
    setDepartmentList,
    renderDocumentList,
    isDeleteDocumentOpen,
    initializeStore,
  } = useUploadDocumentStore();

  useEffect(() => {
    initializeStore();
  }, []);

  //Initial Department list api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/getDepartmentsByBusinessType/${businessType}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );

        // console.log(response);
        // const departments = response.data;

        const departments = response.data.split(",").map((item) => item.trim());

        // console.log(departments);
        setDepartmentList(departments);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, [businessType]);

  // submitted documents api
  useEffect(() => {
    const fetchData = async () => {
      const branchId = selectedBranch?.branch_id;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/branchDocuments/${branchId}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );

        // console.log(response);
        setBranchDocuments(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");
      }
    };

    fetchData();
  }, [renderDocumentList, selectedBranch]);

  console.log(departmentList);

  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen mt-[100px] md:mt-[130px] xl:mt-[152px] bg-[#F9F9FF] px-4 md:px-8 lg:px-[72px] pb-20">
        <p className="text-[#707784] text-[14px] py-6">
          <Link href={"/company-home"}>Home</Link> {">"}{" "}
          <Link href={"/company-rating"}>{user?.company_name}</Link> {">"}{" "}
          Update Documents
        </p>

        <BranchDocsStatusBanner />

        {departmentList?.length > 0 &&
          departmentList?.map((department) => (
            <DepartmentWiseForm key={department} department={department} />
          ))}
      </div>
      {isDeleteDocumentOpen && <DeleteDocument />}
    </div>
  );
}

// Wrapping the component with ProtectedRoute
const ProtectedUploadDocuments = () => (
  <ProtectedRoute allowedRoles={["admin", "manager"]}>
    <UploadDocuments />
  </ProtectedRoute>
);

export default ProtectedUploadDocuments;
