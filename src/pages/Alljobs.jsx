import React from "react";

import Mybutton from "../components/basecomponents/Mybutton";
import Postedjobs from "../components/basecomponents/Postedjobs";
import Location from "../components/basecomponents/Location";
import Noresult from "../components/basecomponents/Noresult";
const Alljobs = () => {
  return (
    <>
      <Location />

      <div className=" px-3 md:px-6 lg:px-12 my-3 md:my-6 lg:my-12 p-3 md:p-6 lg:p-10 ">
        <div>
          {/* header part */}
          <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl ">
            all job posts{" "}
          </h1>
          {/* text part */}
          <p className="text-center text-sm md:text-xl ">
            browse the lates tjobs that you want to search to day on line fome
            the interne <br /> want to search to day on line fome the internet
          </p>
          {/* filetr part */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mx-5 md:mx-10 lg:mx-20 ">
            <input
              className="bg-slate-300 p-1  md:p-3 rounded-lg"
              type="text"
              placeholder="all catagoris "
            />
            <input
              className="bg-slate-300 p-1  md:p-3 rounded-lg"
              type="text"
              placeholder="all types "
            />
            <input
              className="bg-slate-300 p-1  md:p-3 rounded-lg"
              type="text"
              placeholder="all levels "
            />
            <input
              className="bg-slate-300 p-1  md:p-3 rounded-lg lg:col-span-2"
              type="text"
              placeholder="search by programing name"
            />
            <Mybutton background="bg-indigo-600">apply all</Mybutton>
          </div>
        </div>

        {/* //display all jobs from postedjobs.jsx   */}
        {/* <Postedjobs /> */}
        <Noresult />
      </div>
    </>
  );
};

export default Alljobs;
