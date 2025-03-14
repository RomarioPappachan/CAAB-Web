"use client";
import React, { useState } from "react";
import { TbAlertTriangle } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import BranchDeletionPopup from "@/app/components/super-admin/delete-branches/BranchDeletionPopup";
import ProtectedRoute from "@/components/ProtectedRoutes";
import BranchList from "@/app/components/super-admin/delete-branches/BranchList";

function DeleteBranches() {
  const [isBranchDeletionPopupOpen, setIsBranchDeletionPopupOpen] =
    useState(false);

  const [selectedBranchId, setSelectedBranchId] = useState(null);
  const [renderBranchList, setRenderBranchList] = useState(false);
  return (
    <div className="w-full flex flex-col gap-y-10">
      <div className="py-2 border-[#C0C7D5] border-b-[1px]">
        <h2 className="font-medium text-xl leading-6 text-[#404753]">
          Admin Profile
        </h2>
      </div>
      {/* warning div  */}
      <div className="w-full p-6 border-[#BA1A1A] border-[1px] rounded-lg flex justify-start items-start gap-4">
        <div className="w-1/10">
          <TbAlertTriangle className="size-12 text-[#BA1A1A]" />
        </div>
        <div className="w-9/10 flex flex-col items-start justify-start gap-10">
          <p className="text-sm text-[#404753] leading-6 font-normal">
            When deleting a branch, it is important to be aware that this action
            will permanently remove all data associated with the branch. This
            includes any files, records, configurations, or transactions tied to
            it. Once the branch is deleted, the data cannot be recovered, making
            the deletion irreversible.
          </p>
          <p className="text-sm text-[#404753] leading-6 font-normal">
            Additionally, if the branch is required in the future, the entire
            process of adding and configuring the branch will need to be
            repeated from scratch. Proceed with caution to avoid unintended data
            loss.
          </p>
        </div>
      </div>

      {/* list branches  */}

      <BranchList
        setSelectedBranchId={setSelectedBranchId}
        setIsBranchDeletionPopupOpen={setIsBranchDeletionPopupOpen}
        renderBranchList={renderBranchList}
      />

      {isBranchDeletionPopupOpen && (
        <BranchDeletionPopup
          selectedBranchId={selectedBranchId}
          setSelectedBranchId={setSelectedBranchId}
          setIsBranchDeletionPopupOpen={setIsBranchDeletionPopupOpen}
          setRenderBranchList={setRenderBranchList}
        />
      )}
    </div>
  );
}

// Wrapping the component with ProtectedRoute
const ProtectedDeleteBranches = () => (
  <ProtectedRoute allowedRoles={["admin", "manager"]}>
    <DeleteBranches />
  </ProtectedRoute>
);

export default ProtectedDeleteBranches;
