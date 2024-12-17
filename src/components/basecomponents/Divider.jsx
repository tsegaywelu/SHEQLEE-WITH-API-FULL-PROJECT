import React from "react";

const Divider = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex  justify-center items-center ">
        <div className="flex-1 h-[5px] bg-dvider "></div>
        <h1 className="text-sm md:text-base uppercase mx-10 text-custom-gray font-kantumruy font-medium">
          {children}
        </h1>
        <div className="flex-1 h-[5px] bg-dvider "></div>
      </div>
    </div>
  );
};

export default Divider;
