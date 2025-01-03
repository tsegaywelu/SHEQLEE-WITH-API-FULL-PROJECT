import React, { useState } from "react";

import Leftheader from "./Leftheader";
import Rightheader from "./Rightheader";
const Header = () => {
  // left component

  // right component

  return (
    <div className="flex justify-between items-center bg-custom-slate ">
      {/* Main container */}
      <div className="bg-custom-slate   flex max-sm:flex-row-reverse  max-sm:justify-end max-sm:py-4 max-sm:px-4 justify-between items-center py-1 md:py-2  lg:py-4 px-2 md:px-5 lg:px-10   lg:rounded-lg">
        {/* left side part */}
        <Leftheader />
        <Rightheader />
        {/* wright side part */}
      </div>
      <div className="font-kantumruy text-sm md:hidden flex justify-center items-center gap-2 px-4">
        <button className="font-semibold">Log in</button>
        <button className="bg-custom-purple py-[2px] px-[6px] rounded-[5px] text-white font-semibold">
          Sign up
        </button>
      </div>
    </div>
  );
};
//this is in the app component and changing the other componnets will no rerender this
export default React.memo(Header);
