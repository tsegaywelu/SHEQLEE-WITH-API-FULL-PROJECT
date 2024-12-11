import React from "react";
import { useState } from "react";
import arrowdown from "../../assets/SVG/arrowdown.svg";
const Dropdownform = ({ options, defaultText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultText);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block w-full ">
      <button
        onClick={toggleDropdown}
        className="  p-1 w-full md:p-3  bg-custom-tags  text-custom-placeholder font-kantumruy text-start rounded-[10px] "
      >
        {selectedOption}{" "}
        <img
          src={arrowdown}
          alt=""
          width={10}
          height={10}
          className="absolute top-6 right-3 "
        />
      </button>
      {isOpen && (
        <ul className="z-40 absolute text-custom-placeholder  left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdownform;
