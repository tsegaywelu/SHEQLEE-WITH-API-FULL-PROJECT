import React from "react";
import tsegay from "../../assets/tsegay.jpg";
import Mybutton from "../basecomponents/Mybutton";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "../basecomponents/Dropdown";
import { useState } from "react";
import { useSelector } from "react-redux";
import dashboaredsvg from "../../assets/direction/dashboard.svg";
import settingsvg from "../../assets/direction/settings.svg";
import logoutsvg from "../../assets/direction/logout.svg";
import companysvg from "../../assets/direction/company.svg";
import { useLocation } from "react-router-dom";
const Rightheader = () => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentuser } = useSelector((state) => state.user);
  const state = currentuser ? currentuser.role : "guest";
  return (
    <div className=" p-1 md:p-2 lg:p-3 ">
      {isMenuOpen ? (
        <FaTimes
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex-grow-0 text-lg text-red-800 cursor-pointer md:hidden mx-auto"
          aria-expanded={isMenuOpen}
          aria-label="Close menu"
        />
      ) : (
        <FaBars
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex-grow-0 text-[10px] cursor-pointer md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        />
      )}
      {/* Right section: Navigation and buttons */}
      <div
        className={`flex-grow-0 flex items-center gap-5 lg:gap-7  md:flex md:flex-row   ${
          isMenuOpen ? "flex flex-col gap-2 " : "hidden "
        }`}
      >
        <div className=" mt-1    text-custom-black font-kantumruy font-medium relative ">
          <Link to={"/sheqlee/All jobs"} className=" inline-block relative ">
            All jobs
            {pathname.includes("job") && (
              <div className="absolute w-[56px] h-[6px] bg-custom-purple  md:bottom-[-22px] lg:bottom-[-35px] max-lg:right-1"></div>
            )}
          </Link>
        </div>

        {/* Category Dropdown */}
        <Link to={"/sheqlee/Categories"} className=" mt-1">
          <Dropdown
            dropdowntitle={"Categories"}
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
            pagetype={"odd"}
          />
        </Link>
        {state === "guest" && (
          <Link to={"/sheqlee/clients"} className="inline-block relative">
            <div className="mt-1    font-kantumruy font-medium   ">
              {/* border-b-4 border-blue-600 lg:pb-10 self-end bg-red-500 */}
              Clients
            </div>
            {pathname.includes("clients") && (
              <div className="absolute w-12 h-[6px] bg-custom-purple  md:bottom-[-22px] lg:bottom-[-26px] right-[1px]"></div>
            )}
          </Link>
        )}

        {/* Buttons */}
        {state === "guest" ? (
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 lg:gap-4">
            <Link
              to={"/sheqlee/login"}
              className={` ${
                pathname.includes("login")
                  ? "bg-black rounded-xl  border-[3px] border-white text-white md:px-4 md:p-2 lg:py-2 font-semibold font-kantumruy"
                  : "border-[3px] border-custom-purple rounded-[10px] py-1 md:py-[5px] px-2 md:px-4 text-base font-semibold font-kantumruy "
              } `}
            >
              <Mybutton>Log in</Mybutton>
            </Link>

            {/* here rederect user to componay sign up page or user sign up page */}
            <Link to={"/sheqlee/companysignup"}>
              <Mybutton
                background={
                  "bg-custom-purple rounded-[10px] md:px-3 md:p-2 lg:py-2   text-white font-semibold font-kantumruy "
                }
              >
                Sign up
              </Mybutton>
            </Link>
          </div>
        ) : state === "company" ? (
          <div className="flex  max-sm:flex-col justify-center items-center gap-6  ">
            <Link to={"sheqlee/vacancy"}>
              <Mybutton
                background={
                  "bg-custom-purple rounded-[10px] lg:px-3 md:p-2 lg:py-2   text-white font-semibold font-kantumruy "
                }
              >
                Post a job
              </Mybutton>
            </Link>
            <div className="flex  items-center justify-center gap-3   ">
              <img
                src={tsegay}
                alt="user profile"
                className="w-7 h-7 rounded-full"
              />

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
          <div className="flex  max-sm:flex-col justify-center items-center gap-5 ">
            <Link to={"sheqlee/profile"}>
              <Mybutton
                background={` rounded-[10px] lg:px-3 md:p-2 lg:py-2   text-white font-semibold font-kantumruy
                  ${
                    pathname.includes("profile")
                      ? "bg-black"
                      : "bg-custom-purple"
                  }
                     `}
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

export default Rightheader;
