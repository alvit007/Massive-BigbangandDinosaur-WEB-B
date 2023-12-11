import React from "react";
import { Link } from "react-router-dom";
import GambarProfile from "../assets/profile.png";

function Navbar() {
  const user = localStorage.getItem("user");
  const role = localStorage.getItem("role");

  return (
    <div className="h-[3.5rem] bg-white">
      <div className="flex justify-end items-center h-full px-4">
        <div className="mr-4">
          <div className="text-primary font-semibold text-right">{user}</div>
          <div className="text-textsm text-sm text-right">
            {role === "1" ? "Admin" : role === "2" ? "Dosen" : ""}
          </div>
        </div>
        <div className="flex items-center">
          <Link to="/profile">
            <img src={GambarProfile} className="w-[50px]" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
