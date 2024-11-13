import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Dashboaredtitle from "../../components/onetimecmponent/Dashboaredtitle";
import Location from "../../components/basecomponents/Location";
import { MdEdit } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import Inputs from "../../components/basecomponents/Inputs";
import Mybutton from "../../components/basecomponents/Mybutton";
import Divider from "../../components/basecomponents/Divider";
export const Companyprofilesetting = () => {
  return (
    <div>
      <div className="my-5">
        <Location />
      </div>
      <div className=" flex  flex-col  items-center  gap-5 justify-center mt-5 md:mt-10  ">
        <Dashboaredtitle
          text={" Edit your account setting to make your account  more secure."}
          heading={"Account Setting "}
          css
        >
          <IoSettingsOutline size={66} className="text-purple-600" />
        </Dashboaredtitle>
      </div>
      {/* // input section  */}
      <div>
        <div>
          <Inputs />
          <div className="mx-5 md:mx-16 lg:mx-48 my-3">
            <p className="text-start ">
              leave this empty if you do not change your password{" "}
            </p>
          </div>
        </div>
        {/* //butto section  */}
        <div className=" mt-10 mx-4 md:mx-12 lg:mx-52">
          <div className="flex justify-end  ">
            <Mybutton background={"bg-purple-400 rounded-lg p-1 md:p-2 lg:p-3"}>
              <h1 className="text-2xl">update Setting</h1>
            </Mybutton>
          </div>
        </div>
        {/* dvider part */}
        <div className="max-w-4xl mx-auto">
          <Divider></Divider>
        </div>
      </div>
      {/* /account deletion part  */}
      <div className="max-w-4xl mx-auto p-2 my-5">
        <div className="m-2">
          <h2 className=" text-xl md:text-3xl font-semibold">
            Account deletion{" "}
          </h2>
          <p>
            please note that your account will be available for recovery for a
            period of one month after deletion. after that it will be
            permanently deleted and can not be recovered.
          </p>
        </div>
        {/* //deletion reason part  */}
        <div className="relative mt-5">
          <h2 className="text-sm md:text-xl lg:text-2xl m-3">
            Deletion reason <span className="text-red-600">*</span>
          </h2>
          <textarea
            name=""
            rows={8}
            id=""
            className="bg-slate-200 w-full rounded-xl p-4 text-xl"
            placeholder="why you are deleting your account..."
          ></textarea>
          <p className="absolute bottom-2 right-2 text-sm">0/128</p>
        </div>
        <p className="m-2 text-sm">
          give us accurate reason for your deletion will help us to make Qegnew
          better. we hope to see you back soon. Thank you.
        </p>
        {/* //button part */}
        <div className=" mt-10 ">
          <div className="flex justify-end  ">
            <Mybutton
              background={
                "bg-red-500 rounded-lg p-1 md:p-2 lg:p-3 text-white font-bold"
              }
            >
              <h1 className="text-2xl">Delete account</h1>
            </Mybutton>
          </div>
        </div>
        {/* ///////////// */}
        <div className="max-w-4xl mx-auto">
          <Divider></Divider>
          <span className="block ">
            <span className="text-red-800">*</span> all fields are required{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
