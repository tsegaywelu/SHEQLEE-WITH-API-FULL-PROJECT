import React from "react";

const Divider = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex  justify-center items-center ">
        <div className="flex-1 h-0.5 bg-dvider "></div>
        <h1 className="text-sm md:text-xl uppercase mx-10">{children}</h1>
        <div className="flex-1 h-0.5 bg-dvider "></div>
      </div>
    </div>
  );
};

export default Divider;
