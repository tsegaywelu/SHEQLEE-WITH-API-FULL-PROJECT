// Company.jsx
import Tag from "../components/basecomponents/Tags";

import React from "react";
import { FaBuilding } from "react-icons/fa";
const Companys = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center   rounded-lg shadow-md p-3 md:p-10 mt-4 md:mt-10">
        {/* icon */}
        <FaBuilding className="text-purple-700 text-5xl mb-4" />

        {/* title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          Companies on Sheqlee
        </h1>

        {/* sub titl */}
        <p className="text-gray-900 max-w-[500px] text-center text-sm md:text-xl ">
          List of the companies on Sheqlee with their number of job posts and
          subscribers.
        </p>
      </div>
      <Tag />
    </div>
  );
};

export default Companys;
