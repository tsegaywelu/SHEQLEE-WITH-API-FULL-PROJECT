import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
function Mobilemodal({ categories, icons, showicons, pagetype }) {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();
  return (
    <div className=" block ">
      {/* Dropdown button */}
      <div className="relative"></div>

      {/* Dropdown menu */}
      {isOpen && (
        <div>
          <div className=" bg-stone-900/60 z-50">
            <div
              className={`absolute  z-40     rounded-b-[10px]  bg-white ring-1 ring-black ring-opacity-5 ${
                showicons ? "right-10 md:w-[163px] " : "w-36 mt-3 py-1 "
              }`}
            >
              <div className=" font-medium font-kantumruy ">
                {categories.map((category, index) => (
                  <a
                    key={category}
                    href="#"
                    className="block  text-[18px] text-custom-black text-start hover:bg-gray-100 hover:text-gray-900   "
                  >
                    <div className="">
                      <Link
                        to={`/sheqlee/${category}`}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div
                          className={`flex  py-1 justify-start gap-x-3  px-4  
                             
                          `}
                        >
                          <div className="relative  w-full">
                            {category}
                            {category === "Categories" && (
                              <div>
                                {" "}
                                <FaAngleDown
                                  size={16}
                                  className={`!fill-black  absolute top-2  right-0 transition duration-700 `}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* // now i am doing this */}
          <div
            className="fixed top-0 left-0 w-full h-full min-h-screen backdrop:blur-lg z-20 bg-black opacity-45"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Mobilemodal;
