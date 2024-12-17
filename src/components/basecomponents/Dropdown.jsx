import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
function Dropdown({ categories, dropdowntitle, icons, showicons }) {
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
          className="inline-flex justify-center w-full rounded-md   px-6 py-2 bg-custom-slate text-base  text-black font-medium font-kantumruy  "
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
            <div
              className={`absolute  z-40     rounded-b-[10px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                showicons ? "right-7 md:w-48 mt-2" : "w-44"
              }`}
            >
              <div className="py-1 font-medium font-kantumruy ">
                {categories.map((category, index) => (
                  <a
                    key={category}
                    href="#"
                    className="block py-2  text-sm text-custom-black hover:bg-gray-100 hover:text-gray-900 text-start "
                  >
                    <div className="">
                      <Link
                        to={
                          showicons
                            ? `/sheqlee/${category}`
                            : `/sheqle/catagory/${category}`
                        }
                        className="flex  justify-start gap-x-3  px-5"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {" "}
                        {showicons && <img src={icons[index]} alt="" />}{" "}
                        {category}
                      </Link>
                    </div>
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
