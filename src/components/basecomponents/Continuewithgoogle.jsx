import React from "react";
import google from "../../assets/SVG/google.svg";
const Continuewithgoogle = () => {
  return (
    <div>
      <button
        className="flex  items-center gap-4 bg-custom-blue p-3  text-lg
         md:text-xl mx-auto px-5 lg:px-10 my-10  text-white font-kantumruy font-medium rounded-[10px]"
      >
        <img src={google} className=" w-[14px] h-[14px] md:w-4 md:h-4" />
        contniue with google
      </button>
    </div>
  );
};

export default Continuewithgoogle;
