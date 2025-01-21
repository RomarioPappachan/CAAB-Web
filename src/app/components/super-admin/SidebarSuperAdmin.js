"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImTree } from "react-icons/im";
import {
  RiAccountCircleLine,
  RiDeleteBin6Line,
  RiLogoutCircleLine,
} from "react-icons/ri";
import Logout from "../Logout";

function SidebarSuperAdmin() {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const pathName = usePathname();

  return (
    <div className="w-full md:h-full bg-white">
      <ul className="flex md:flex-col overflow-x-auto">
        <Link href="/super-admin/admin-profile">
          <li
            className={`h-[72px] p-3 lg:p-6 text-xs md:text-sm font-normal flex items-center gap-2 border-[#C0C7D5] border-b-[1px] bg-white
                        ${
                          pathName === "/super-admin/admin-profile"
                            ? "text-[#2262B7]"
                            : "text-[#404753]"
                        }`}
          >
            <RiAccountCircleLine className="text-xl" />
            <span>Admin Profile</span>
          </li>
        </Link>
        <Link href="/super-admin/manage-branches">
          <li
            className={`h-[72px] p-3 lg:p-6 text-xs md:text-sm font-normal flex items-center gap-2 border-[#C0C7D5] border-b-[1px] bg-white
                        ${
                          pathName === "/super-admin/manage-branches"
                            ? "text-[#2262B7]"
                            : "text-[#404753]"
                        }`}
          >
            <ImTree className="text-xl" />
            <span>Manage Branches</span>
          </li>
        </Link>
        <Link href="/super-admin/delete-branches">
          <li
            className={`h-[72px] p-3 lg:p-6 text-xs md:text-sm font-normal flex items-center gap-2 border-[#C0C7D5] border-b-[1px] bg-white
                        ${
                          pathName === "/super-admin/delete-branches"
                            ? "text-[#2262B7]"
                            : "text-[#404753]"
                        }`}
          >
            <RiDeleteBin6Line className="text-xl" />
            <span>Delete Branch</span>
          </li>
        </Link>
        <div onClick={() => setIsLogoutOpen(true)}>
          <li
            className={`h-[72px] p-3 lg:p-6 text-xs md:text-sm font-normal flex items-center gap-2 border-[#C0C7D5] border-b-[1px] bg-white
                        ${
                          pathName === "" ? "text-[#2262B7]" : "text-[#404753]"
                        }`}
          >
            <RiLogoutCircleLine className="text-xl rotate-90" />
            <span>Logout</span>
          </li>
        </div>
      </ul>

      {isLogoutOpen && <Logout setIsLogoutOpen={setIsLogoutOpen} />}
    </div>
  );
}

export default SidebarSuperAdmin;
