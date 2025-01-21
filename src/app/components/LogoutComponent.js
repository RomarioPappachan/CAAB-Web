"use client";
import { useState } from "react";
import Logout from "./Logout";
import { FiLogOut } from "react-icons/fi";

function LogoutComponent() {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  return (
    <>
      <p
        className="mt-10 py-2 flex items-center gap-2 text-lg text-red-500  rounded-md cursor-pointer hover:bg-slate-100"
        onClick={() => setIsLogoutOpen(true)}
      >
        <FiLogOut />
        <span>Logout</span>
      </p>
      {isLogoutOpen && <Logout setIsLogoutOpen={setIsLogoutOpen} />}
    </>
  );
}

export default LogoutComponent;
