import React from "react";
import mysvg from "../../assets/SVG/logo.svg";
const Leftheader = () => {
  return (
    <>
      {/* Left section: Logo and title */}
      <div className="flex flex-col md:flex-row  mx-3  md:mx-5 lg:mx-10 gap-5 ">
        <img src={mysvg} alt="Logo loading..." className=" h-[50px] w-[50px]" />
        <h1 className="text-sm md:text-2xl font-extrabold flex justify-center items-center font-recolta">
          Sheqlee
        </h1>
        <div className="flex flex-col w-full bg-red-900"></div>
      </div>
    </>
  );
};

export default Leftheader;
