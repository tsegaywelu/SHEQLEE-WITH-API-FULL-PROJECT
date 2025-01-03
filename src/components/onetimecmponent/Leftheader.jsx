import React from "react";
import mysvg from "../../assets/SVG/logo.svg";
import { Link } from "react-router-dom";
const Leftheader = () => {
  return (
    <>
      {/* Left section: Logo and title */}
      <Link to={"/sheqlee"}>
        <div className="flex flex-col md:flex-row  mx-3  md:mx-5 lg:mx-10 gap-5 ">
          <img
            src={mysvg}
            alt="Logo loading..."
            className=" max-sm:h-[30px] max-sm:w-[30px] h-[50px] w-[50px]"
          />
          <h1 className="max-sm:hidden md:text-2xl font-extrabold flex justify-center items-center font-recolta">
            Sheqlee
          </h1>
        </div>
      </Link>
    </>
  );
};

export default Leftheader;
