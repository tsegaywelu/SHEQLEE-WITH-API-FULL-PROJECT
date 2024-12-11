import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
function Dropdown({ categories, dropdowntitle }) {
  const [isOpen, setIsOpen] = useState(false);

  // List of categories to display

  return (
    <div
      // onMouseLeave={() => setIsOpen(false)}
      className=" inline-block text-center"
    >
      {/* Dropdown button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          // onMouseEnter={() => setIsOpen(true)}
          // onMouseLeave={() => setIsOpen(false)}
          className="inline-flex justify-center w-full rounded-md  shadow-sm px-6 py-2 bg-slate-100 text-base  text-black font-medium font-kantumruy  "
        >
          {dropdowntitle}
          <span>
            {" "}
            <FaAngleDown
              size={10}
              className="!fill-black  absolute top-4  right-2"
            />
          </span>
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div>
          <div className=" bg-stone-900/60 z-50">
            <div className="absolute  z-50    w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
              <div className="py-1">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="block py-2  text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* // now i am doing this */}
          <div
            className="absolute top-0 left-0 w-full h-full backdrop:blur-lg z-20 bg-black opacity-45"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
