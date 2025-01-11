import React, { useState, useEffect } from "react";
import arrowdown from "../../assets/SVG/arrowdown.svg";

const Dropdownform = ({
  options,
  defaultText,
  labeltext,
  warn,
  updateFormData,
  formData,
  correctvalue2,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedvalue, setselected] = useState(defaultText);

  useEffect(() => {
    if (formData[correctvalue2]) {
      setselected(formData[correctvalue2]);
    }
  }, [formData, correctvalue2]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setselected(option);
    updateFormData(correctvalue2, option);
    setIsOpen(false);
  };

  return (
    <div className="text-start " onMouseLeave={(e) => setIsOpen(false)}>
      {labeltext && (
        <label className="text-xl inline-block my-3 font-kantumruy font-medium">
          {labeltext} {warn && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="relative inline-block w-full">
        <button
          onClick={toggleDropdown}
          className="bg-custom-tags rounded-lg h-full outline-none  py-3 px-5 w-full text-[16px] md:text-xl text-custom-placeholder text-start font-kantumruy"
          aria-expanded={isOpen}
          aria-controls="dropdown-options"
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
          <ul
            id="dropdown-options"
            className="z-40 absolute text-custom-placeholder left-0 w-full  bg-white border border-gray-300 rounded-md "
          >
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[13px] md:text-lg"
                onClick={() => handleOptionClick(option)}
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
