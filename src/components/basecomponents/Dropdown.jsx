import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { createPortal } from "react-dom";
function Dropdown({ categories, dropdowntitle }) {
  const [isOpen, setIsOpen] = useState(false);

  // List of categories to display

  return (
    <div
      // onMouseLeave={() => setIsOpen(false)}
      className="relative inline-block text-center"
    >
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        // onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
        className="inline-flex justify-center w-full rounded-md  shadow-sm px-6 py-2 bg-slate-100 text-base  text-black font-medium  "
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

      {/* Dropdown menu */}
      {isOpen && (
        <div className=" bg-stone-900/60">
          <div className="absolute     mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
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
      )}
    </div>
  );
}

export default Dropdown;
