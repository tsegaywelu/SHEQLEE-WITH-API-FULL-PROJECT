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
                showicons ? "right-10 md:w-[163px] " : "w-32 mt-3 "
              }`}
            >
              <div className=" font-medium font-kantumruy ">
                {categories.map((category, index) => (
                  <a
                    key={category}
                    href="#"
                    className="block  text-[13px] text-custom-black text-start hover:bg-gray-100 hover:text-gray-900   "
                  >
                    <div className="">
                      <Link
                        to={`/sheqlee/${category}`}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div
                          className={`flex  py-2 justify-start gap-x-3  px-3  
                            ${
                              pagetype === "even" && index % 2 == 0
                                ? "border-b-[2px] border-dvider pb-2 "
                                : ""
                            }      
                          
                          
                         ${
                           pagetype === "odd" && index !== categories.length - 1
                             ? "border-b-[2px] border-dvider pb-2"
                             : ""
                         } 
                          `}
                        >
                          {" "}
                          {showicons && (
                            <img
                              src={icons[index]}
                              alt="icons"
                              width={14}
                              height={14}
                            />
                          )}{" "}
                          {category}
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
