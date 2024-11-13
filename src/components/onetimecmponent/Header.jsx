import React, { useState } from "react";
import logo from "../../assets/logo.png";
import tsegay from "../../assets/tsegay.jpg";
import Mybutton from "../basecomponents/Mybutton";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "../basecomponents/Dropdown";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const state = "logedin";
  const state1 = "notlogin";

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
      <div className=" p-1 md:p-2 lg:p-3 ">
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
          className={`flex-grow-0 flex items-center justify-center  gap-4   md:flex lg:justify-between md:flex-row  ${
            isMenuOpen ? "flex flex-col gap-2 " : "hidden "
          }`}
        >
          <div className=" mt-1 p-1 md:p-2 lg:p-3  text-base ">
            <Link to={"/sheqlee/alljobs"}>all jobs</Link>
          </div>

          {/* Category Dropdown */}
          <Link to={"/sheqlee/catagoris"}>
            <Dropdown
              dropdowntitle={"catagory"}
              categories={[
                "Front-End",
                "Back-End",
                "Mobile App",
                "UI/UX",
                "Machine Learning",
                "Security",
                "Database",
              ]}
            />
          </Link>
          <Link to={"/sheqlee/client"}>
            <div className="mt-1 p-1 md:p-2 lg:p-3 lg:font-semibold text-sm lg:text-base ">
              {/* border-b-4 border-blue-600 lg:pb-10 self-end bg-red-500 */}
              Clients
            </div>
          </Link>

          {/* Buttons */}
          {state === "logedinw" ? (
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 lg:gap-6">
              <Link to={"/sheqlee/login"}>
                <Mybutton
                  background={
                    "border-4 border-indigo-700 rounded-lg py-1 md:py-2 px-2 md:px-5  "
                  }
                >
                  Log in
                </Mybutton>
              </Link>

              {/* here rederect user to componay sign up page or user sign up page */}
              <Link to={"/sheqlee/companysignup"}>
                <Mybutton
                  background={"bg-purple-400 rounded-lg p-1 md:p-2 lg:p-3"}
                >
                  Sign Up
                </Mybutton>
              </Link>
            </div>
          ) : (
            <div className="flex  max-sm:flex-col justify-center items-center gap-5 ">
              <Link to={"sheqlee/vacancy"}>
                <Mybutton
                  background={
                    "bg-purple-400 rounded-lg p-1 md:p-2 lg:p-3 text-sm"
                  }
                >
                  Post a job
                </Mybutton>
              </Link>
              <div className="flex  ">
                <img src={tsegay} alt="" className="w-10 h-10 rounded-full" />
                <Dropdown
                  dropdowntitle={"user profile"}
                  categories={[
                    "dashboared",
                    "company profile",
                    "account setting ",
                    "Logout",
                  ]}
                />
              </div>
            </div>
          )}
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
