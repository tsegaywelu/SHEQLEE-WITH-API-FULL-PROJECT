import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Dashboaredtitle from "../../components/onetimecmponent/Dashboaredtitle";
import Location from "../../components/basecomponents/Location";
import { MdEdit } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import Inputs from "../../components/basecomponents/Inputs";
import Mybutton from "../../components/basecomponents/Mybutton";
import Divider from "../../components/basecomponents/Divider";
import settingicon from "../../assets/direction/settings1.svg";
import Oneinputfor from "../../components/basecomponents/Oneinputfor";
import blackedit from "../../assets/direction/editblack.svg";
import Deleteaccount from "../../components/onetimecmponent/Deleteaccount";
export const Companyprofilesetting = () => {
  return (
    <div>
      <div className="">
        <Location />
      </div>
      <div className=" flex  flex-col  items-center  gap-5 justify-center mt-10  ">
        <Dashboaredtitle
          text={" Edit your account setting to make your account  more secure."}
          heading={"Account Setting "}
          css={450}
        >
          <img
            src={settingicon}
            alt="setting icon"
            className="w-[45px] h-[45px] md:w-[50px] md:h-[50px]"
          />
        </Dashboaredtitle>
      </div>
      {/* // input section  */}
      <Inputs />
      {/* /account deletion part  */}
      <Deleteaccount />
    </div>
  );
};
