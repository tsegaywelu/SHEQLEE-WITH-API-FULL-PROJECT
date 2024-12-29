import React, { useState } from "react";
import arrowdown from "../../assets/SVG/arrowdown.svg";

const Dropdownform = ({
  options,
  defaultText,
  value,
  onChange,
  labeltext,
  warn,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const [selectedvalue, setselected] = useState(defaultText);
  const handleOptionClick = (option) => {
    setselected(option); // Call the parent's `onChange` function
    setIsOpen(false); // Close dropdown
  };

  return (
    <div className="text-start">
      {labeltext && (
        <label className="text-xl inline-block my-3   font-kantumruy font-medium ">
          {labeltext} {warn && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="relative inline-block w-full ">
        <button
          onClick={toggleDropdown}
          // className="p-1 w-full md:p-3 bg-custom-tags text-custom-placeholder font-kantumruy text-start rounded-[10px]"
          className="bg-custom-tags  rounded-lg  h-full outline-none p-3 w-full text-xl   text-custom-placeholder text-start  font-kantumruy"
          value={value || defaultText}
        >
          {selectedvalue}
          <img
            src={arrowdown}
            alt=""
            width={10}
            height={10}
            className={`absolute top-6 right-3 ${
              isOpen
                ? "rotate-180 transition duration-700"
                : "rotate-0 transition duration-700"
            }`}
          />
        </button>
        {isOpen && (
          <ul className="z-40 absolute text-custom-placeholder left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={(e) => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdownform;
