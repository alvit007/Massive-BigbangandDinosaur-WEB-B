import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-[3.5rem] bg-white">
      <div className="flex justify-end items-center h-full px-4">
        <div className="mr-4">
          <div className="text-primary font-semibold text-right">Hamba Allah</div>
          <div className="text-textsm text-sm text-right">Admin</div>
        </div>
        <div className="flex items-center">
          <Link to={"profile"}>
          <div className="bg-primary rounded-full w-[3rem] h-[3rem] flex justify-center items-center">
            <div className="text-white text-2xl font-bold">A</div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
