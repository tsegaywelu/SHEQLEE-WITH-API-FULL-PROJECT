import React from "react";
import Location from "../basecomponents/Location";
import error from "../../assets/SVG/error.svg";
import Qestion from "../basecomponents/Qestion";
const Lost = () => {
  return (
    <>
      {/* <Location />
      <div className="  h-screen flex  justify-center items-center ">
        <h2 className="text-red-700  text-2xl  ">404|Page not found!</h2>
      </div> */}
      <Location Lost />
      <div className="h-[400px]  flex  justify-center items-center">
        <div className="flex flex-col items-center space-y-10  ">
          {/* SVG Icon */}
          <img src={error} width={56} height={66} />
          <p className="text-2xl font-kantumruy text-custom-placeholder ">
            404 | PAGE NOT FOUND
          </p>
        </div>
      </div>
      <Qestion />
    </>
  );
};

export default Lost;
