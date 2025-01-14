import React from "react";
import Mybutton from "./Mybutton";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import times from "../../assets/direction/times.svg";
export const Modal = ({ closewin, message }) => {
  return createPortal(
    <div className="">
      <button
        className="  fixed right-2 md:right-7 top-4 md:top-6 p-1  text-2xl font-bold  rounded-full text-white z-50  "
        onClick={closewin}
      >
        <img
          src={times}
          alt="times icon"
          className=" w-[22px] h-[22px] md:w-[27px] md:h-[27px]"
        />
      </button>
      <div className="  flex items-center justify-center h-screen w-full fixed mx-auto bg-stone-900/80 z-10 ">
        <div className=" flex flex-col items-center justify-center  pt-10 pb-3 px-5 md:px-12  font-semibold  bg-white rounded-xl shadow-lg gap-y-5 mx-2 md:mx-0">
          <p className="  mx-auto  md:text-xl font-kantumruy font-medium  ">
            <div
              dangerouslySetInnerHTML={{ __html: message }}
              className="text-center text-[18px] md:text-[22px] font-normal md:font-medium"
            />
          </p>
          <div>
            <Link to={"/sheqlee/company signup"}>
              <Mybutton
                background={
                  " mt-3  md:hidden border-[2px]  text-[19px] border-custom-purple py-[9px] px-10  bg-custom-purple text-white rounded-[10px] font-semibold font-kantumruy"
                }
              >
                Ok, sign up
              </Mybutton>
            </Link>
          </div>
          <div className=" hidden md:flex justify-center items-center mt-2  w-full gap-5 ">
            <Link to={"/sheqlee/company signup"}>
              <Mybutton
                background={
                  " border-[2px]  text-[17px] border-custom-purple py-[9px] px-6  bg-custom-purple text-white rounded-[10px] font-semibold font-kantumruy"
                }
              >
                Sign Up
              </Mybutton>
            </Link>
            <Link to={"/sheqlee/login"}>
              <Mybutton
                background={
                  "border-[3px] text-[17px] border-custom-purple  py-[7px] px-6 box-border rounded-[10px] m-3 font-semibold font-kantumruy"
                }
              >
                Log in
              </Mybutton>
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
