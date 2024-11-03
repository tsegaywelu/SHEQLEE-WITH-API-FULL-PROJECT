import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Mybutton from "../basecomponents/Mybutton";
import Select from "react-select";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //this is using the react-select modul to list te drop downs
  const options = [
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "java", label: "Java" },
    { value: "phpofthegreate", label: "phpofthegreate" },
  ];

  // left component
  const leftsidecontent = () => {
    return (
      <>
        {/* Left section: Logo and title */}
        <div className="flex flex-col md:flex-row  mx-3  md:mx-5 lg:mx-10 ">
          <img src={logo} alt="Logo loading..." className=" h-10 md:h-20" />
          <h1 className="text-sm md:text-xl font-bold  flex justify-center items-center">
            Sheqlee
          </h1>
        </div>
      </>
    );
  };
  // right component
  const rightsidecontent = () => {
    return (
      <div className=" p-1 md:p-2 lg:p-3">
        {isMenuOpen ? (
          <FaTimes
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex-grow-0 text-xl text-red-800 cursor-pointer md:hidden mx-auto"
          />
        ) : (
          <FaBars
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex-grow-0 text-3xl cursor-pointer md:hidden"
          />
        )}
        {/* Right section: Navigation and buttons */}
        <div
          className={`flex-grow flex items-center justify-center  md:flex lg:justify-evenly md:flex-row  ${
            isMenuOpen ? "flex flex-col gap-2 " : "hidden "
          }`}
        >
          <div className=" mt-1 p-1 md:p-2 lg:p-3 lg:font-semibold text-sm lg:text-xl  ">
            <Link to={"/sheqlee/alljobs"}>alljobs</Link>
          </div>

          {/* Category Dropdown */}
          <Link to={"/sheqlee/catagoris"}>
            <div>
              <Select
                options={options}
                placeholder="Categories"
                className="bg-slate-600"
              />
            </div>
          </Link>
          <div className="mt-1 p-1 md:p-2 lg:p-3 lg:font-semibold text-sm lg:text-xl">
            Clients
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:lg-3 lg:gap-4">
            <Mybutton
              background={"bg-indigo-500    rounded-lg p-1 md:p-2 lg:p-3"}
            >
              Log in
            </Mybutton>
            <Mybutton background={"bg-green-900 rounded-lg p-1 md:p-2 lg:p-3"}>
              Sign Up
            </Mybutton>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Main container */}
      <div className="bg-slate-100 flex  justify-between items-center py-1 md:py-2  lg:py-4 px-2 md:px-5 lg:px-10   lg:rounded-lg">
        {/* left side part */}
        {leftsidecontent()}

        {/* wright side part */}
        {rightsidecontent()}
      </div>
    </>
  );
};
//this is in the app component and changing the other componnets will no rerender this
export default React.memo(Header);
