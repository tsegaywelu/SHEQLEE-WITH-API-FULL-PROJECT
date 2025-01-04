import React, { useState } from "react";

import Leftheader from "./Leftheader";
import Rightheader from "./Rightheader";
const Header = () => {
  // left component

  // right component

  return (
    <div>
      {/* Main container */}
      <div className="bg-custom-slate   flex flex-row-reverse  md:flex-row justify-end py-4 px-4 md:justify-between items-center md:py-2  lg:py-4 md:px-5 lg:px-10   lg:rounded-lg">
        {/* left side part */}
        <div className="font-kantumruy text-sm md:hidden flex justify-end items-center gap-3  w-full ">
          <button className="font-semibold">Log in</button>
          <button className="bg-custom-purple py-[2px] px-[6px] rounded-[5px] text-white font-semibold">
            Sign up
          </button>
        </div>
        <Leftheader />
        <Rightheader />
        {/* wright side part */}
      </div>
    </div>
  );
};
//this is in the app component and changing the other componnets will no rerender this
export default React.memo(Header);
