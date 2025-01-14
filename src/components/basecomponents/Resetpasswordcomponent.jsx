import React from "react";
import padlock from "../../assets/svg1/padlock.svg";
import Mybutton from "./Mybutton";
import { Link } from "react-router-dom";
const Resetpasswordcomponent = ({
  header,
  icon,
  labeltext,
  placeholder,
  id,
  clarify,
  showbutton,
  formData,
  updateFormData,
  code,
  type,
}) => {
  return (
    <>
      <div
        className={` ${
          showbutton
            ? "md:ml-20 pl-5 flex flex-col md:flex-row gap-2 md:gap-5  mt-10   items-center  w-full "
            : "flex flex-col md:flex-row gap-2 md:gap-5  items-center "
        }`}
      >
        {" "}
        <img
          src={padlock}
          className="w-[45px] h-[45px] md:w-[50px] md:h-[50px]"
        />
        <h1 className="font-kantumruy font-semibold  text-[24px] md:text-[35px]">
          {header}
        </h1>
      </div>
      <div
        className={` ${
          showbutton
            ? "md:mt-5 mx-auto  space-y-3 w-[90%] md:w-4/5 "
            : "flex flex-col gap-3 mt-10 w-fit "
        } `}
      >
        <label
          htmlFor="email"
          className="font-kantumruy font-medium  md:text-xl "
        >
          {labeltext}
        </label>
        <div>
          <div className="relative  overflow-hidden rounded-l-lg ">
            <img
              src={icon}
              style={{ width: 52, height: 52 }}
              className="bg-black text-white rounded-l-lg absolute left-0 -top-1 md:top-0  md:h-full p-4 w-[13px] "
            />

            <input
              type={type}
              className="bg-custom-tags  rounded-lg pl-16 h-full outline-none p-3 w-full  md:text-xl font-kantumruy placeholder:text-custom-placeholder"
              id={id}
              placeholder={placeholder}
              value={formData[id] || ""}
              onChange={(e) => updateFormData(id, e.target.value)}
            />
          </div>
          <p className=" text-xs md:text-[13px]  font-kantumruy mt-[7px]">
            {clarify}
          </p>
        </div>

        {/* //this is inside of the flex so saying any thing will not work or make out of this  */}
        {showbutton && (
          <Link to={"Code/New Password"}>
            <div>
              <Mybutton
                background={
                  "bg-custom-purple text-white font-medium font-kantumruy text-lg md:text-xl   rounded-[10px] py-2 lg:py-3  px-6 md:px-4 float-right mt-8 "
                }
                closewindow={code}
              >
                Send code
              </Mybutton>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default Resetpasswordcomponent;
