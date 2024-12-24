import React from "react";
import google from "../../assets/SVG/google.svg";
const Continuewithgoogle = () => {
  return (
    <div>
      <button
        className="flex  items-center gap-4 bg-custom-blue p-3 
         text-xl mx-auto lg:px-10 my-10 text-white font-kantumruy font-medium rounded-[10px]"
      >
        <img src={google} width={16} height={16} />
        contniue with google
      </button>
    </div>
  );
};

export default Continuewithgoogle;
