import React from "react";

const Divider = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex  justify-center items-center ">
        <div className="flex-1 h-px bg-slate-600 "></div>
        <h1 className="text-sm md:text-2xl uppercase">{children}</h1>
        <div className="flex-1 h-px bg-slate-600 "></div>
      </div>
    </div>
  );
};

export default Divider;
