"use client";
import useAuthStore from "@/store/authStore";
import useUploadDocumentStore from "@/store/uploadDocumentsStore";
import React from "react";

function BranchDocsStatusBanner() {
  const { user } = useAuthStore();
  const { businessType } = useUploadDocumentStore();

  return (
    <div className="p-6 bg-white rounded-lg border-[#C0C7D5] border-[1px] flex flex-col gap-6 lg:flex-row lg:items-center ">
      {/*   div1   */}
      <div className="w-full lg:w-2/5 flex flex-col gap-6">
        <div className="flex items-center">
          <div className="w-1/3">
            <span className="text-base font-normal text-[#404753]">
              Company
            </span>
          </div>
          <div className="w-2/3">
            <span className="text-base font-medium text-[#181C22]">
              : {user?.company_name}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3">
            <span className="text-base font-normal text-[#404753]">
              Business Type
            </span>
          </div>
          <div className="w-2/3">
            <span className="text-base font-medium text-[#181C22]">
              : {businessType && businessType}
            </span>
          </div>
        </div>
      </div>

      {/* div2  */}
      <div className="w-full lg:w-2/5 flex flex-col gap-6">
        <div className="flex items-center">
          <div className="w-1/3 lg:w-1/2 xl:w-1/3">
            <span className="text-base font-normal text-[#404753]">
              Status on rating
            </span>
          </div>
          <div className="w-1/3 lg:w-1/2 xl:w-2/3">
            <span className="text-base font-medium text-[#181C22]">
              : Processing
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3 lg:w-1/2 xl:w-1/3">
            <span className="text-base font-normal text-[#404753]">
              Status updated on
            </span>
          </div>
          <div className="w-1/3 lg:w-1/2 xl:w-2/3">
            <span className="text-base font-medium text-[#181C22]">
              : -{/* : 18/01/2025 */}
            </span>
          </div>
        </div>
      </div>

      {/* div3 */}
      <div className="w-full lg:w-1/5 flex flex-col gap-6">
        <div className="flex items-center">
          <div className="w-1/3 lg:w-1/2 xl:w-1/3">
            <span className="text-base font-normal text-[#404753]">
              Sections
            </span>
          </div>
          <div className="w-1/3 lg:w-1/2 xl:w-2/3">
            <span className="text-base font-medium text-[#181C22]">
              : -{/* : 17 / 25 */}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3 lg:w-1/2 xl:w-1/3">
            <span className="text-base font-normal text-[#404753]">Error</span>
          </div>
          <div className="w-1/3 lg:w-1/2 xl:w-2/3">
            <span className="text-base font-medium text-[#181C22]">
              : -{/* : 1 */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BranchDocsStatusBanner;
