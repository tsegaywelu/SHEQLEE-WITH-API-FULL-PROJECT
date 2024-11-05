import React from "react";
import Tags from "../components/basecomponents/Tags";
import { FaTag } from "react-icons/fa";
import Location from "../components/basecomponents/Location";
const Alltags = () => {
  return (
    <div>
      <div className="ml-20">
        <Location />
      </div>
      <div className="flex flex-col items-center text-center p-8 font-sans text-gray-800">
        <div className="mb-4 text-purple-400">
          <FaTag size={48} />
        </div>
        <h1 className="text-2xl font-bold mb-2">All Tags</h1>
        <p className="text-lg text-gray-600 flex justify-center items-center">
          Job tags along with their respective number of <br />
          jobs posted and number of subscribers.
        </p>
      </div>
      <Tags />

      <h1>pagination part </h1>
    </div>
  );
};

export default Alltags;
