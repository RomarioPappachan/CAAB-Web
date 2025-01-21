"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import EditBranchAdminDetails from "@/app/components/super-admin/manage-branches/EditBranchAdminDetails";
import EditBranchBasicDetails from "@/app/components/super-admin/manage-branches/EditBranchBasicDetails";
import EditBranchEmployeeDetails from "@/app/components/super-admin/manage-branches/EditBranchEmployeeDetails";
import ProtectedRoute from "@/components/ProtectedRoutes";
import ListCompanyBranches from "@/app/components/super-admin/manage-branches/ListCompanyBranches";

function ManageBranches() {
  const [isEditBranchAdminDetailsOpen, setIsEditBranchAdminDetailsOpen] =
    useState(false);
  const [isEditBranchBasicDetailsOpen, setIsEditBranchBasicDetailsOpen] =
    useState(false);
  const [isEditBranchEmployeeDetailsOpen, setIsEditBranchEmployeeDetailsOpen] =
    useState(false);
  const [selectedbranchId, setSelectedBranchId] = useState(null);
  const [selectedBranchDetail, setSelectedBranchDetail] = useState({});
  const [branchDetailRenderToggle, setBranchDetailRenderToggle] =
    useState(false);

  return (
    <div className="w-full flex flex-col gap-y-10">
      <div className="py-2 border-[#C0C7D5] border-b-[1px]">
        <h2 className="font-medium text-xl leading-6 text-[#404753]">
          Manage Branches
        </h2>
      </div>

      {/* list of branches  */}

      <ListCompanyBranches
        selectedbranchId={selectedbranchId}
        setSelectedBranchId={setSelectedBranchId}
        setSelectedBranchDetail={setSelectedBranchDetail}
        branchDetailRenderToggle={branchDetailRenderToggle}
        setIsEditBranchAdminDetailsOpen={setIsEditBranchAdminDetailsOpen}
        setIsEditBranchBasicDetailsOpen={setIsEditBranchBasicDetailsOpen}
        setIsEditBranchEmployeeDetailsOpen={setIsEditBranchEmployeeDetailsOpen}
      />

      {isEditBranchAdminDetailsOpen && (
        <EditBranchAdminDetails
          selectedbranchId={selectedbranchId}
          selectedBranchDetail={selectedBranchDetail}
          setIsEditBranchAdminDetailsOpen={setIsEditBranchAdminDetailsOpen}
          setBranchDetailRenderToggle={setBranchDetailRenderToggle}
        />
      )}
      {isEditBranchBasicDetailsOpen && (
        <EditBranchBasicDetails
          selectedbranchId={selectedbranchId}
          selectedBranchDetail={selectedBranchDetail}
          setIsEditBranchBasicDetailsOpen={setIsEditBranchBasicDetailsOpen}
          setBranchDetailRenderToggle={setBranchDetailRenderToggle}
        />
      )}
      {isEditBranchEmployeeDetailsOpen && (
        <EditBranchEmployeeDetails
          selectedbranchId={selectedbranchId}
          selectedBranchDetail={selectedBranchDetail}
          setIsEditBranchEmployeeDetailsOpen={
            setIsEditBranchEmployeeDetailsOpen
          }
          setBranchDetailRenderToggle={setBranchDetailRenderToggle}
        />
      )}
    </div>
  );
}

// Wrapping the component with ProtectedRoute
const ProtectedManageBranches = () => (
  <ProtectedRoute allowedRoles={["admin", "manager"]}>
    <ManageBranches />
  </ProtectedRoute>
);

export default ProtectedManageBranches;
