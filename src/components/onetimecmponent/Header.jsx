import React, { useState } from "react";
import tsegay from "../../assets/tsegay.jpg";
import Mybutton from "../basecomponents/Mybutton";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "../basecomponents/Dropdown";
import mysvg from "../../assets/SVG/logo.svg";
import { useSelector } from "react-redux";
import dashboaredsvg from "../../assets/direction/dashboard.svg";
import settingsvg from "../../assets/direction/settings.svg";
import logoutsvg from "../../assets/direction/logout.svg";
import companysvg from "../../assets/direction/company.svg";
import { useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentuser, loading, error } = useSelector((state) => state.user);
  const state = currentuser ? currentuser.role : "guest";

  // left component
  const leftsidecontent = () => {
    return (
      <>
        {/* Left section: Logo and title */}
        <div className="flex flex-col md:flex-row  mx-3  md:mx-5 lg:mx-10 gap-5 ">
          <img
            src={mysvg}
            alt="Logo loading..."
            className=" h-[50px] w-[50px]"
          />
          <h1 className="text-sm md:text-2xl font-extrabold flex justify-center items-center font-recolta">
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
          <div className=" mt-1 p-1 md:p-2 lg:p-3  text-custom-black font-kantumruy font-medium relative ">
            <Link to={"/sheqlee/All jobs"} className=" inline-block relative">
              All jobs
              {pathname.includes("job") && (
                <div className="absolute w-16 h-[5px] bg-custom-purple  md:bottom-[-22px] lg:bottom-[-38px]"></div>
              )}
            </Link>
          </div>

          {/* Category Dropdown */}
          <Link to={"/sheqlee/Categories"} className=" ">
            <Dropdown
              dropdowntitle={"categories"}
              categories={[
                "Front End",
                "Back End",
                "Mobile App",
                "UI UX",
                "Machine Learning",
                "Security",
                "Database",
              ]}
              underline
            />
          </Link>
          {state === "guest" && (
            <Link to={"/sheqlee/clients"} className="inline-block relative">
              <div className="mt-1 p-1 md:p-2 lg:p-3   font-kantumruy font-medium   ">
                {/* border-b-4 border-blue-600 lg:pb-10 self-end bg-red-500 */}
                Clients
              </div>
              {pathname.includes("clients") && (
                <div className="absolute w-16 h-[5px] bg-custom-purple  md:bottom-[-22px] lg:bottom-[-24px] left-3"></div>
              )}
            </Link>
          )}

          {/* Buttons */}
          {state === "guest" ? (
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 lg:gap-6">
              <Link
                to={"/sheqlee/login"}
                className={` ${
                  pathname.includes("login")
                    ? "bg-black rounded-xl text-white lg:px-4 md:p-2 lg:py-2 font-semibold font-kantumruy"
                    : "border-[3px] border-custom-purple rounded-xl py-1 md:py-[6px] px-2 md:px-4 text-base font-semibold font-kantumruy "
                } `}
              >
                <Mybutton>Log in</Mybutton>
              </Link>

              {/* here rederect user to componay sign up page or user sign up page */}
              <Link to={"/sheqlee/companysignup"}>
                <Mybutton
                  background={
                    "bg-custom-purple rounded-xl lg:px-3 md:p-2 lg:py-2   text-white font-semibold font-kantumruy "
                  }
                >
                  Sign up
                </Mybutton>
              </Link>
            </div>
          ) : state === "company" ? (
            <div className="flex  max-sm:flex-col justify-center items-center gap-10 ">
              <Link to={"sheqlee/vacancy"}>
                <Mybutton
                  background={
                    "bg-custom-purple rounded-xl lg:px-3 md:p-2 lg:py-2   text-white font-semibold font-kantumruy "
                  }
                >
                  Post a job
                </Mybutton>
              </Link>
              <div className="flex  items-center justify-center  ">
                <img src={tsegay} alt="" className="w-7 h-7 rounded-full" />

                <Dropdown
                  dropdowntitle={"Microsoft"}
                  categories={[
                    "Dashboared",
                    "Company profile",
                    "Account setting ",
                    "Logout",
                  ]}
                  icons={[dashboaredsvg, companysvg, settingsvg, logoutsvg]}
                  showicons
                  pagetype={"even"}
                />
              </div>
            </div>
          ) : (
            <div className="flex  max-sm:flex-col justify-center items-center gap-0 ">
              <Link to={"sheqlee/profile"}>
                <Mybutton
                  background={
                    "bg-custom-purple rounded-xl lg:px-3 md:p-2 lg:py-2   text-white font-semibold font-kantumruy"
                  }
                >
                  Edit profile
                </Mybutton>
              </Link>
              <div className="flex   ">
                {/* <img src={tsegay} alt="" className="w-10 h-10 rounded-full" /> */}
                <Dropdown
                  dropdowntitle={"Muruts Yifter"}
                  categories={["Dashboared", "Account setting ", "Logout"]}
                  icons={[dashboaredsvg, settingsvg, logoutsvg]}
                  showicons
                  chnagelinksurl
                  pagetype={"odd"}
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
      <div className="bg-custom-slate  flex  justify-between items-center py-1 md:py-2  lg:py-4 px-2 md:px-5 lg:px-10   lg:rounded-lg">
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
