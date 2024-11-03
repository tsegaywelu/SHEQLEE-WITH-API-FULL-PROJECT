import React from "react";
import Location from "../basecomponents/Location";

const Lost = () => {
  return (
    <>
      <Location />
      <div className="bg-gray-50  h-screen flex  justify-center items-center ">
        <h2 className="text-red-700  text-2xl  ">404|Page not found!</h2>
      </div>
    </>
  );
};

export default Lost;
