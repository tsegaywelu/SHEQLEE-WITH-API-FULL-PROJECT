import React from "react";
import error from "../../assets/SVG/error.svg";

const Noresult = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-12 space-y-6">
        {/* SVG Icon */}
        <img src={error} width={48} height={48} />
        <p className="text-xl font-kantumruy text-custom-placeholder ">
          No results found
        </p>
      </div>
    </div>
  );
};

export default Noresult;
