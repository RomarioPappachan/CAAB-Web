"use client";
import useAuthStore from "@/store/authStore";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function BranchList({
  setSelectedBranchId,
  setIsBranchDeletionPopupOpen,
  renderBranchList,
}) {
  const { token } = useAuthStore();

  const [branchList, setBranchList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const caabId = JSON.parse(localStorage.getItem("user")).caab_id;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/listBranches/${caabId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setBranchList(response.data.branches);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Error fetching data.");\
      }
    };

    fetchData();
  }, [renderBranchList]);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
      {branchList[0] ? (
        branchList.map((branch) => (
          <div
            className="p-6 bg-[#CBDBFF] rounded-lg flex justify-between items-center gap-2"
            key={branch.branch_id}
          >
            <div className="flex flex-col">
              <span className="text-base font-medium leading-6 text-[#224167]">
                {branch.branch_name}
              </span>
              <span className="text-xs font-medium leading-6 text-[#224167]">
                {branch.city}
              </span>
            </div>
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsBranchDeletionPopupOpen(true);
                setSelectedBranchId(branch.branch_id);
              }}
            >
              <RiDeleteBin6Line className="text-xl text-[#BA1A1A]" />
            </span>
          </div>
        ))
      ) : (
        <span> No branches present</span>
      )}
    </div>
  );
}

export default BranchList;
