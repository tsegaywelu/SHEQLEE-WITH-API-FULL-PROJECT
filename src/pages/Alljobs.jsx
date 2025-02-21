import React, { useState } from "react";

import Mybutton from "../components/basecomponents/Mybutton";
import Postedjobs from "../components/basecomponents/Postedjobs";
import Location from "../components/basecomponents/Location";
// import arrowdown from "../../src/assets/SVG/arrowdown.svg";
import search from "../../src/assets/SVG/search.svg";
import Noresult from "../components/basecomponents/Noresult";
import Dropdownform from "../components/basecomponents/Dropdownform";
import Qestion from "../components/basecomponents/Qestion";

const Alljobs = () => {
  const [formData, setFormdata] = useState({
    category: "",
    type: "",
    level: "",
    programingName: "",
  });
  const updateFormData = (field, value) => {
    setFormdata((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <>
      <div className="relative">
        <Location />
        {/* {Object.entries(formData).map(([key, value]) => (
          <div className="flex justify-around" key={key}>
            {key}: {value}
          </div>
        ))} */}
      </div>

      <div className=" py-3 md:py-6 lg:py-10 mt-3  mb-10">
        <div className="max-w-3xl mx-auto ">
          {/* header part */}
          <h1 className="text-center font-kantumruy font-semibold text-2xl md:text-2xl lg:text-4xl mb-3   ">
            All Job Posts
          </h1>
          {/* text part */}
          <p className="text-center text-lg md:text-xl max-w-xl  mx-auto mb-10 font-kantumruy px-10  ">
            Browse the latest jobs you can take up right now.{" "}
            <span className=" hidden md:inline">
              Use filters to find the best jobs for your skillset.
            </span>
          </p>
          {/* filetr part */}

          <div className=" space-y-7 md:space-y-3 mx-5 ">
            <div className="flex flex-col md:flex-row justify-between gap-5 ">
              <div className="relative   w-full flex-[1.2] ">
                <Dropdownform
                  options={["Category 1", "Category 2", "Category 3"]}
                  defaultText="All categories"
                  updateFormData={updateFormData}
                  formData={formData}
                  correctvalue2={"category"}
                />
              </div>
              <div className="flex flex-[1.6] gap-7 md:gap-5">
                <div className="relative w-full flex-1">
                  <Dropdownform
                    options={["Type 1", "Type 2", "Type 3"]}
                    defaultText="All types"
                    updateFormData={updateFormData}
                    formData={formData}
                    correctvalue2={"type"}
                  />
                </div>
                <div className="relative w-full flex-1">
                  <Dropdownform
                    options={["Level 1", "Level 2", "Level 3"]}
                    defaultText="All levels"
                    updateFormData={updateFormData}
                    formData={formData}
                    correctvalue2={"level"}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 ">
              <div className="relative flex-[2.7] w-full">
                <input
                  // className="bg-custom-tags  placeholder:text-custom-placeholder font-kantumruy p-1  md:p-3 md:pl-12 rounded-[15px] lg:col-span-2    w-full outline-none "
                  type="text"
                  className="bg-custom-tags   rounded-lg  h-full outline-none p-3  w-full text-[15.5px]  md:text-xl font-kantumruy placeholder:text-custom-placeholder lg:col-span-2 pl-9 md:pl-12"
                  placeholder="Search by programming technology..."
                  value={formData.programingName}
                  onChange={(e) =>
                    updateFormData("programingName", e.target.value)
                  }
                />
                <img
                  src={search}
                  alt=""
                  className="absolute  left-3  bottom-[15px]  md:left-4 md:bottom-3   w-[13px] h-[13px] md:h-6 md:w-5 "
                />
              </div>

              <Mybutton background=" mx-auto  w-[50%] px-5 py-[10px] md:flex-[1] md:p-0  bg-custom-purple rounded-lg  text-[16px] md:text-xl text-white font-semibold  font-kantumruy ">
                Apply filter
              </Mybutton>
            </div>
          </div>
        </div>
      </div>
      {/* //display all jobs from postedjobs.jsx   */}
      <Postedjobs showicon5 totalPages={40} showpaginatin />
      {/* <Noresult /> */}

      <div className="mt-10">
        <Qestion />
      </div>
    </>
  );
};

export default Alljobs;
