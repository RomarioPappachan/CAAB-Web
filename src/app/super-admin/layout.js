"use client";

import Navbar from "../components/Navbar";
import SidebarSuperAdmin from "../components/super-admin/SidebarSuperAdmin";
export default function SuperAdminLayout({ children }) {
  return (
    <div className="w-screen h-screen m-0 p-0 bg-white">
      <div className="m-0 p-0 w-full">
        <Navbar />
      </div>

      <div className="w-full mb-0 mt-[100px] md:mt-[130px] xl:mt-[152px] px-4 md:px-8 lg:px-[72px] py-14 bg-[#F8F9FF] flex flex-col gap-y-10">
        <div>
          <span className="w-full font-normal text-sm leading-6 text-[#707784]">
            Home {">"} Profile Settings
          </span>
        </div>
        <div className="w-full min-h-screen pb-16 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4 lg:w-1/5  drop-shadow-md">
            <SidebarSuperAdmin />
          </div>
          <div className="w-full md:w-3/4 lg:w-4/5 px-4 py-10 md:p-10 bg-white drop-shadow-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
