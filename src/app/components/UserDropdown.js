"use client";
import React, { useState } from "react";
import Logout from "./Logout";
import Link from "next/link";

function UserDropdown() {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  return (
    <>
      <div className="absolute right-0 -bottom-36 w-full p-2 bg-white border-[1px] border-[#C0C7D5] shadow-lg rounded-lg flex flex-col">
        <Link
          href="/company-home"
          className="px-4 py-2 text-black  hover:bg-slate-100 rounded-md"
        >
          Company Home
        </Link>
        <Link
          href="/super-admin/admin-profile"
          className="px-4 py-2 text-black hover:bg-slate-100 rounded-md"
        >
          Profile
        </Link>
        <p
          className="px-4 py-2 text-black hover:bg-slate-100 rounded-md cursor-pointer"
          onClick={() => setIsLogoutOpen(true)}
        >
          Logout
        </p>
      </div>

      {isLogoutOpen && <Logout setIsLogoutOpen={setIsLogoutOpen} />}
    </>
  );
}

export default UserDropdown;
