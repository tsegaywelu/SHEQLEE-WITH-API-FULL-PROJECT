import React from "react";
import Mybutton from "./Mybutton";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
export const Modal = ({ closewin }) => {
  return createPortal(
    <div>
      <button
        className=" absolute right-10 top-3 px-2 text-2xl font-bold border-4 border-white rounded-full text-white z-50  "
        onClick={closewin}
      >
        &times;
      </button>
      <div className="  flex items-center justify-center h-screen w-full fixed mx-auto bg-stone-900/60 z-10 ">
        <div className=" flex flex-col items-center justify-center py-5 px-20  font-semibold  bg-white rounded-xl shadow-lg">
          <p className="  mx-auto  md:text-xl font-kantumruy font-medium  ">
            please register or login as a <br />
            client to post jobs.
          </p>
          <div className=" flex justify-around items-center mt-5  w-full ">
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
                  "border-[3px] border-custom-purple  py-2 px-4 rounded-lg m-3 font-semibold font-kantumruy"
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
