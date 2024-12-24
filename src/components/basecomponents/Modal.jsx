import React from "react";
import Mybutton from "./Mybutton";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import times from "../../assets/direction/times.svg";
export const Modal = ({ closewin, message }) => {
  return createPortal(
    <div>
      <button
        className="  fixed right-7 top-6 p-1  text-2xl font-bold  rounded-full text-white z-50  "
        onClick={closewin}
      >
        <img src={times} alt="times icon" width={32} height={32} />
      </button>
      <div className="  flex items-center justify-center h-screen w-full fixed mx-auto bg-stone-900/60 z-10 ">
        <div className=" flex flex-col items-center justify-center pt-10 pb-3 px-12  font-semibold  bg-white rounded-xl shadow-lg gap-y-5 ">
          <p className="  mx-auto  md:text-xl font-kantumruy font-medium  ">
            <div
              dangerouslySetInnerHTML={{ __html: message }}
              className="text-center"
            />
          </p>
          <div className=" flex justify-center items-center mt-5  w-full gap-5 ">
            <Link to={"/sheqlee/companysignup"}>
              <Mybutton
                background={
                  " border-[2px] border-custom-purple py-2 px-5  bg-custom-purple text-white rounded-xl font-semibold font-kantumruy"
                }
              >
                Sign Up
              </Mybutton>
            </Link>
            <Link to={"/sheqlee/login"}>
              <Mybutton
                background={
                  "border-[3px] border-custom-purple  py-2 px-5 rounded-lg m-3 font-semibold font-kantumruy"
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
