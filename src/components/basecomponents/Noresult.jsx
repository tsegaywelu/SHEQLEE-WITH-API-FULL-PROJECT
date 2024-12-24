import React from "react";
import error from "../../assets/SVG/error.svg";

const Noresult = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-12 space-y-6  my-20">
        {/* SVG Icon */}
        <img src={error} width={48} height={48} />
        <p className="text-2xl font-kantumruy text-custom-placeholder ">
          No results found
        </p>
      </div>
    </div>
  );
};

export default Noresult;
