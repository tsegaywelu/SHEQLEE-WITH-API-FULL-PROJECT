import React, { useState } from "react";

import Leftheader from "./Leftheader";
import Rightheader from "./Rightheader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "../basecomponents/Dropdown";
import tsegay from "../../assets/tsegay.jpg";
import dashboaredsvg from "../../assets/direction/dashboard.svg";
import settingsvg from "../../assets/direction/settings.svg";
import logoutsvg from "../../assets/direction/logout.svg";
import companysvg from "../../assets/direction/company.svg";

const Header = () => {
  const { currentuser } = useSelector((state) => state.user);
  const state = currentuser ? currentuser.role : "guest";
  console.log("curent user is " + state + "and then ");

  return (
    <div>
      {/* Main container */}
      <div className="bg-custom-slate   flex flex-row-reverse  md:flex-row justify-end pb-[4px] pt-3 px-4 md:justify-between items-center md:py-2  lg:py-4 md:px-5 lg:px-10   lg:rounded-lg ">
        {/* left side part */}
        {state === "guest" ? (
          <div className="font-kantumruy md:hidden text-[15px] flex justify-end items-center gap-4  w-full ">
            <Link to={"/sheqlee/login"}>
              {" "}
              <button className="font-semibold">Log in</button>
            </Link>
            <Link to={"/sheqlee/company signup"}>
              <button className="bg-custom-purple py-[5px] px-[7px] rounded-[5px] text-white font-semibold">
                Sign up
              </button>
            </Link>
          </div>
        ) : state === "company" ? (
          <div className="flex  md:hidden items-center justify-end gap-2 md:gap-3  w-full   ">
            <img
              src={tsegay}
              alt="user profile"
              className="w-5 h-5 rounded-full"
            />

            <Dropdown
              dropdowntitle={"Sheqlee Co., Ltd."}
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
        ) : (
          <div className="flex w-full justify-end  md:hidden ">
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
        )}

        <Leftheader />
        <Rightheader />
        {/* wright side part */}
      </div>
    </div>
  );
};
//this is in the app component and changing the other componnets will no rerender this
export default React.memo(Header);
