import React from "react";

const CatagoriesCard = ({ title, jobs, subscribers, children }) => {
  return (
    <div className="flex items-center  bg-custom-slate  rounded-xl    ">
      {/* Icon Section */}
      <div className="w-20 h-20 bg-black text-white flex items-center justify-center rounded-l-xl mr-4 ">
        {children}
      </div>

      {/* Text Content */}
      <div className="pr-5">
        <div className="">
          <h3 className="text-xl  font-kantumruy font-medium ">{title}</h3>
          <p className=" mt-2 text-base font-kantumruy ">
            {jobs} jobs • {subscribers.toLocaleString()} subscribers
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatagoriesCard;
