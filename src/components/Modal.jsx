import React from "react";
import Mybutton from "./Mybutton";
import { createPortal } from "react-dom";
export const Modal = ({ closewin }) => {
  return createPortal(
    <div className="  flex items-center justify-center h-screen w-full fixed mx-auto bg-stone-900/60 z-10 ">
      <div className=" flex flex-col items-center justify-center py-5  bg-white rounded-lg shadow-lg">
        <p className="w-2/3  mx-auto  md:text-xl ">
          dfh fhweuh s hdhfue fhd huweh dfhsd hushfuwehf usjf hhfuweah uhrfu
          hfuheru huewrfhu
        </p>
        <div className=" ">
          <Mybutton background={" p-2  m-2"} closewindow={closewin}>
            Sign Up
          </Mybutton>
          <Mybutton
            background={"bg-indigo-700 p-2 rounded-lg m-3"}
            closewindow={closewin}
          >
            Sign in{" "}
          </Mybutton>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
