import React, { useState } from "react";

import Mybutton from "../components/basecomponents/Mybutton";
import Postedjobs from "../components/basecomponents/Postedjobs";
import Location from "../components/basecomponents/Location";
import arrowdown from "../../src/assets/SVG/arrowdown.svg";
import search from "../../src/assets/SVG/search.svg";
import Noresult from "../components/basecomponents/Noresult";
const Alljobs = () => {
  const [catagory, setcatagory] = useState(null);

  const [type, settype] = useState(null);
  const [level, setlevel] = useState(null);

  //then handling what the user hooses
  const handlecatagory = (event) => {
    setcatagory(event.target.value);
  };

  const handletype = (event) => {
    settype(event.target.value);
  };
  const handlelevel = (event) => {
    setlevel(event.target.value);
  };

  return (
    <>
      <div className="mx-20 relative">
        <Location />
        <div className="absolute w-16 h-[5px] bg-custom-purple bottom-6 md:right-80 lg:right-96 mr-7"></div>
      </div>

      <div className=" px-3 md:px-6 lg:px-8 my-3 md:my-6 lg:my-12 p-3 md:p-6 lg:p-10  ">
        <div className="max-w-4xl mx-auto ">
          {/* header part */}
          <h1 className="text-center font-kantumruy font-semibold text-xl md:text-2xl lg:text-4xl mb-3 ">
            All job posts{" "}
          </h1>
          {/* text part */}
          <p className="text-center text-sm md:text-xl max-w-xl  mx-auto mb-10 font-kantumruy  ">
            Browse the latest jobs you can take up right now. Use filters to
            find the best jobs for your skillset.
          </p>
          {/* filetr part */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mx-5 md:mx-10 lg:mx-20 text-custom-placeholder">
            <div className="relative">
              <input
                className="bg-custom-tags p-1  md:p-3 rounded-[15px] font-kantumruy  text-custom-placeholder outline-none"
                type="text"
                placeholder="All categories "
              />
              <img
                src={arrowdown}
                className="absolute right-4 bottom-4 h-2 w-4"
              />
            </div>
            <div className="relative">
              <input
                className="bg-custom-tags p-1  md:p-3 rounded-[15px] font-kantumruy  text-custom-placeholder"
                type="text"
                placeholder="All types"
              />
              <img
                src={arrowdown}
                className="absolute right-4 bottom-4 h-2 w-4"
              />
            </div>
            <div className="relative">
              <input
                className="bg-custom-tags p-1  md:p-3 rounded-[15px] font-kantumruy  text-custom-placeholder"
                type="text"
                placeholder="All levels "
              />
              <img
                src={arrowdown}
                className="absolute right-4 bottom-4 h-2 w-4"
              />
            </div>

            <div className="relative  col-span-2">
              <input
                className="bg-custom-tags p-1  md:p-3 md:pl-12 rounded-[15px] lg:col-span-2 font-kantumruy  text-custom-placeholder w-full "
                type="text"
                placeholder="Search by programming technology or field..."
              />
              <img
                src={search}
                alt=""
                className="absolute left-4 bottom-3 h-6 w-5 "
              />
            </div>

            <Mybutton background="bg-custom-purple rounded-[15px]  text-white font-semibold  font-kantumruy ">
              Apply filter
            </Mybutton>
          </div>
        </div>

        {/* //display all jobs from postedjobs.jsx   */}
        <Postedjobs />
        {/* <Noresult /> */}
      </div>
    </>
  );
};

export default Alljobs;
