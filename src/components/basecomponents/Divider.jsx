import React from "react";

const Divider = ({ children }) => {
  return (
    <div className={` ${children ? "max-w-4xl" : "w-full"} mx-auto mt-10`}>
      <div className="flex  justify-center items-center ">
        <div className="flex-1 h-[1.5px] md:h-[3px] bg-dvider w-full"></div>
        {children && (
          <h1 className="text-xs md:text-base uppercase mx-3 md:mx-10 text-custom-placeholder font-kantumruy font-medium">
            {children}
          </h1>
        )}
        <div className="flex-1 h-[1.5px] md:h-[3px] bg-dvider "></div>
      </div>
    </div>
  );
};

export default Divider;
