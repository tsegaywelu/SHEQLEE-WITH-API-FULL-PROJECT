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
            ? "md:ml-20 pl-5 flex gap-5  mt-20   items-center  w-full"
            : "flex gap-5 items-center "
        }`}
      >
        {" "}
        <img src={padlock} />
        <h1 className="font-kantumruy font-semibold text-[35px]">{header}</h1>
      </div>
      <div
        className={` ${
          showbutton
            ? "mt-5 mx-auto  space-y-3 w-4/5"
            : "flex flex-col gap-3 mt-10 w-fit "
        } `}
      >
        <label htmlFor="email" className="font-kantumruy font-medium text-xl">
          {labeltext}
        </label>
        <div>
          <div className="relative  ">
            <img
              src={icon}
              className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-4 "
            />

            <input
              type={type}
              className="bg-custom-tags  rounded-lg pl-16 h-full outline-none p-3 w-full text-xl font-kantumruy placeholder:text-custom-placeholder"
              id={id}
              placeholder={placeholder}
              value={formData[id] || ""}
              onChange={(e) => updateFormData(id, e.target.value)}
            />
          </div>
          <p className="text-sm  font-kantumruy mt-2">{clarify}</p>
        </div>

        {/* //this is inside of the flex so saying any thing will not work or make out of this  */}
        {showbutton && (
          <Link to={"Code/New Password"}>
            <div>
              <Mybutton
                background={
                  "bg-custom-purple text-white font-medium font-kantumruy text-2xl rounded-[10px] py-1 md:py-2 lg:py-3  px-4 float-right mt-5 "
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
