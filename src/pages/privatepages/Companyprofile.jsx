import React from "react";
import { BsBuildings } from "react-icons/bs";
import Dashboaredtitle from "../../components/onetimecmponent/Dashboaredtitle";
import Location from "../../components/basecomponents/Location";
import tsegay from "../../assets/tsegay.jpg";
import { MdEdit } from "react-icons/md";
import Reatchtext from "../../components/basecomponents/Reatchtext";
import { FaAngleDown } from "react-icons/fa";
import Mybutton from "../../components/basecomponents/Mybutton";
import Divider from "../../components/basecomponents/Divider";
const Companyprofile = () => {
  return (
    <div>
      <div className="my-5">
        <Location />
      </div>
      <div className=" flex  flex-col  items-center  gap-5 justify-center my-5 md:my-10 ">
        <Dashboaredtitle
          text={
            " Provide accurate information about your company to make your slfe discoverable"
          }
          css={"max-w-[550px]"}
          heading={"company profile"}
        >
          <BsBuildings size={66} className="text-purple-600" />
        </Dashboaredtitle>
      </div>

      {/* // input parts  */}
      <form action="">
        <div className="flex max-sm:flex-col justify-center items-start  gap-5  mx-3 md:mx-10 lg:mx-48 p-2">
          <div className="flex flex-col w-2/3 gap-2 relative">
            <label htmlFor="name" className="text-sm md:text-xl">
              {" "}
              company name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              placeholder="Sheqlee Co., Ltd."
              className="bg-slate-200 p-3 rounded-lg outline-none"
            />
            <div className="absolute right-0 bottom-3">
              <MdEdit size={20} />
            </div>
          </div>
          <div className="flex flex-col w-2/3 gap-2 relative">
            <label htmlFor="name" className="text-sm md:text-xl">
              {" "}
              Domain <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              placeholder="http://sheqlee.com"
              className="bg-slate-200 p-3 rounded-lg outline-none"
            />
            <div className="absolute right-0 bottom-3">
              <MdEdit size={20} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <img src={tsegay} alt="" className="w-24 h-24 rounded-full" />
            <button className="bg-purple-400 py-1 px-6 rounded-lg text-xl">
              upload
            </button>
            <div className="flex flex-nowrap">
              <p className="text-xs ">2 MB max | 1:1 Ratio</p>
            </div>
          </div>
        </div>
        {/* //ritch text part */}
        <div>
          <div className=" sm:mx-3 md:mx-16 lg:mx-48">
            <Reatchtext showtext={"description"} />
          </div>
          <div>
            <div className="flex max-sm:flex-col justify-center items-center  gap-5  mx-3 md:mx-10 lg:mx-48 p-2">
              <div className="flex flex-col w-2/3 gap-2 relative">
                <label htmlFor="name" className="text-sm md:text-xl">
                  {" "}
                  company size
                </label>
                <input
                  type="text"
                  placeholder="less than 10 people"
                  className="bg-slate-200 p-3 rounded-lg outline-none text-xl"
                />
                <div className="absolute right-0 bottom-3">
                  <FaAngleDown size={20} />
                </div>
              </div>
              <div className="flex flex-col w-2/3 gap-2 relative">
                <label htmlFor="name" className="text-sm md:text-xl">
                  HQ location{" "}
                </label>
                <input
                  type="text"
                  placeholder="south koria "
                  className="bg-slate-200 p-3 rounded-lg outline-none text-xl"
                />
                <div className="absolute right-0 bottom-3">
                  <MdEdit size={20} />
                </div>
              </div>
            </div>
            <div className=" mt-14 mx-4 md:mx-12 lg:mx-52">
              <div className="flex justify-end  ">
                <Mybutton
                  background={"bg-purple-400 rounded-lg p-1 md:p-2 lg:p-3"}
                >
                  <h1 className="text-2xl">update profile</h1>
                </Mybutton>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Divider></Divider>
            <span className="block mx-32">
              <span className="text-red-800">*</span> all fields are required{" "}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Companyprofile;
