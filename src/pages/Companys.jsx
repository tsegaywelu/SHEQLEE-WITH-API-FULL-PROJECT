// Company.jsx
import Tag from "../components/basecomponents/Tags";
import building from "../assets/SVG/company1.svg";
import React from "react";
import { FaBuilding } from "react-icons/fa";
import Location from "../components/basecomponents/Location";
const Companys = () => {
  return (
    <div>
      <div>
        <Location />
      </div>
      <div className="flex flex-col items-center text-center   rounded-lg shadow-md p-3 md:p-10 mt-4 md:mt-10">
        {/* icon */}
        <img src={building} height={45} width={45} />

        {/* title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 my-2 font-kantumruy font-medium">
          Companies on Sheqlee
        </h1>

        {/* sub titl */}
        <p className="text-gray-900 max-w-[500px] text-center text-sm md:text-xl font-kantumruy font-medium ">
          List of the companies on Sheqlee with their number of job posts and
          subscribers.
        </p>
      </div>
      <Tag />
    </div>
  );
};

export default Companys;
