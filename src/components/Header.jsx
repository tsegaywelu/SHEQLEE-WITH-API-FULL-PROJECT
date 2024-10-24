import React from "react";
import logo from "../assets/logo.png";
import Mybutton from "./Mybutton";

const Header = () => {
  return (
    <>
      {/* Main container */}
      <div className="bg-slate-200 flex justify-between items-center  py-4 mx-10">
        {/* Left section: Logo and title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="svg loading..." className="h-14" />
          <h1 className="text-xl font-bold">Sheqlee</h1>
        </div>

        {/* Right section: Navigation and buttons */}
        <div className="md:flex space-x-8 items-center">
          <div>All jobs</div>
          <select>
            <option value="phython">phyton</option>
            <option selected value="javascript">
              javascript
            </option>
            <option value="java">java</option>
          </select>
          <div>Clients</div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Mybutton background={"bg-indigo-500"}>Sign In</Mybutton>
            <Mybutton background={"border-red-600 "}>Sign Up</Mybutton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
