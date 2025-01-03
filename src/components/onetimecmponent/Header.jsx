import React, { useState } from "react";

import Leftheader from "./Leftheader";
import Rightheader from "./Rightheader";
const Header = () => {
  // left component

  // right component

  return (
    <>
      {/* Main container */}
      <div className="bg-custom-slate   flex max-sm:flex-row-reverse  max-sm:justify-end justify-between items-center py-1 md:py-2  lg:py-4 px-2 md:px-5 lg:px-10   lg:rounded-lg">
        {/* left side part */}
        <Leftheader />
        <Rightheader />
        {/* wright side part */}
      </div>
    </>
  );
};
//this is in the app component and changing the other componnets will no rerender this
export default React.memo(Header);
