import React from "react";
import error from "../../assets/SVG/error.svg";

const Noresult = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-16 space-y-8">
        {/* SVG Icon */}
        <img src={error} />
        <p className="text-xl font-medium text-gray-500 ">No results found</p>
      </div>
    </div>
  );
};

export default Noresult;
