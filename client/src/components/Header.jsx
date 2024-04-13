import React from "react";
import logo from "../assets/IMAGE.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-contain py-3 flex justify-between items-center">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" width={"38px"} height={"38px"} />
          <p className="text-lg">Realway uz</p>
        </Link>
        <div className="flex items-center gap-8">
          <div className="space-x-7">
            <Link className="hover:underline">Pricing</Link>
            <Link className="hover:underline">Roadmap</Link>
            <Link className="hover:underline">Twitter</Link>
          </div>
          <button className=" bg-base py-2 px-3 rounded transition-all hover:scale-105 active:scale-100">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
