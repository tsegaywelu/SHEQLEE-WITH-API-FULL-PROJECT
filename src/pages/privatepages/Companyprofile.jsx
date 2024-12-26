import React from "react";
import Dashboaredtitle from "../../components/onetimecmponent/Dashboaredtitle";
import Location from "../../components/basecomponents/Location";
import tsegay from "../../assets/tsegay.jpg";
import { MdEdit } from "react-icons/md";
import Reatchtext from "../../components/basecomponents/Reatchtext";
import { FaAngleDown } from "react-icons/fa";
import Mybutton from "../../components/basecomponents/Mybutton";
import Divider from "../../components/basecomponents/Divider";
import building from "../../assets/SVG/company.svg";
import Oneinputfor from "../../components/basecomponents/Oneinputfor";
import blackedit from "../../assets/direction/editblack.svg";
import profilepic from "../../assets/direction/profile.svg";
import profilepic1 from "../../assets/direction/settings - alt2/profile.png";
import Sectionprofile from "../../components/basecomponents/Sectionprofile";
import Dropdownform from "../../components/basecomponents/Dropdownform";
const Companyprofile = () => {
  return (
    <div>
      <div>
        <Location />
      </div>
      <div className=" flex  flex-col  items-center  gap-5 justify-center my-5 md:my-10 ">
        <Dashboaredtitle
          text={
            " Provide accurate information about your company to make yourself discoverable."
          }
          css={"max-w-[550px]"}
          heading={"Company profile"}
        >
          <img src={building} alt="company svg" width={66} height={66} />
        </Dashboaredtitle>
      </div>

      {/* // input parts  */}
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="flex max-sm:flex-col justify-center items-start  gap-8  max-w-5xl  mx-auto">
          <div className="flex flex-col w-2/3 gap-2 relative  ">
            <Oneinputfor
              labeltext={"Company name"}
              warn
              placeholder={"Sheqlee Co., Ltd."}
              icon={blackedit}
              id={"name"}
            />
          </div>
          <div className="flex flex-col w-2/3 gap-2 relative">
            <Oneinputfor
              labeltext={"Domain"}
              warn
              placeholder={"https://sheqlee.com"}
              icon={blackedit}
              id={"Domain "}
            />
          </div>

          <Sectionprofile profilepic1={profilepic1} buttontext={"Upload"} />
        </div>
        {/* //ritch text part */}
        <div>
          <div className=" -translate-y-8 max-w-5xl  mx-auto">
            <Reatchtext
              showtext={"Description"}
              placeholder={"A brief description about your company..."}
            />
          </div>
          <div className=" -translate-y-10">
            <div className="flex max-sm:flex-col justify-center items-center  gap-5  max-w-5xl  mx-auto">
              <div className="flex flex-col w-2/3 gap-2 relative">
                <Dropdownform
                  options={["Less than 5", "Less than 10", "Less than 50"]}
                  defaultText="Company size"
                  labeltext={"Company size"}
                />
              </div>
              <div className="flex flex-col w-2/3 gap-2 relative">
                <Oneinputfor
                  labeltext={"HQ location"}
                  placeholder={"Seoul, S. Korea"}
                  icon={blackedit}
                  id={"location "}
                />
              </div>
            </div>
            <div className=" mt-14 mx-4 md:mx-12 lg:mx-52">
              <div className="flex justify-end  ">
                <Mybutton
                  background={
                    "bg-custom-purple font-semibold font-kantumruy  text-custom-white rounded-lg p-1 md:p-2 lg:p-3"
                  }
                >
                  <h1 className="text-2xl">Update profile </h1>
                </Mybutton>
              </div>
            </div>
          </div>

          <div className=" max-w-5xl  mx-auto mb-10">
            <Divider></Divider>
            <span className="block font-kantumruy text-start mt-3 ">
              <span className="text-red-800">*</span> fields are required.{" "}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Companyprofile;
