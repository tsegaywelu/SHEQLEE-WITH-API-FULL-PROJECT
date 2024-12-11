import React from "react";

const Jobicons = ({ children, text }) => {
  return (
    <div className="px-2 py-1 flex justify-start items-center  bg-custom-tags text-xs rounded-[5px]">
      {children}
      {text}
    </div>
  );
};

export default Jobicons;
