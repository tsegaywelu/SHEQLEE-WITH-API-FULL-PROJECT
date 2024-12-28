import React from "react";
import { MdEdit } from "react-icons/md";
const Oneinputfor = ({ labeltext, warn, placeholder, icon, id, value }) => {
  return (
    <div className="relative  flex flex-col ">
      <label htmlFor={id} className="text-xl   my-3 font-kantumruy font-medium">
        {labeltext}
        {warn && <span className="text-red-700 p-2">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className=" bg-custom-tags  rounded-lg  pl-5 pr-5 h-full outline-none p-3 w-full text-xl font-kantumruy placeholder:text-custom-placeholder"
        id={id}
        value={value}
      />
      <div className="absolute right-5 bottom-4 max-h-full max-w-full">
        <img src={icon} alt="" width={14} height={14} />
      </div>
    </div>
  );
};

export default Oneinputfor;
