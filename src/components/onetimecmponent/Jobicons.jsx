import React from "react";

const Jobicons = ({ children, text }) => {
  return (
    <div className="px-1.5 py-1 flex justify-start items-center gap-x-1.5  bg-custom-tags text-xs rounded-[3px] font-kantumruy">
      {children}
      <span className="text-[11px] xl:text-[8px] "> {text}</span>
    </div>
  );
};

export default Jobicons;
