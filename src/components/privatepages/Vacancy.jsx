import React from "react";
import Location from "../basecomponents/Location";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
const Vacancy = () => {
  return (
    <div>
      <Location />
      <div className="relative  max-w-2xl  p-4  my-4 md:my-8  bg-slate-100 mx-auto">
        <FaReact
          size={48}
          className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-3"
        />
        <h2 className="  rounded-lg pl-16 h-full   w-full text-sm ">
          to speed up the process of posting a job try using
          <Link className=" border-b-2 border-purple-400 font-bold">
            JOB templates
          </Link>{" "}
          page
        </h2>
      </div>

      {/* text parts  */}
      <div>
        <h1>Add vacancy [1/2]</h1>
        <p>next and final step is preview and final confirmation !!</p>

        <form action="">
          <label htmlFor="jobtitle">
            Jop title <span className="text-red-600">*</span>
          </label>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Vacancy;
