import React from "react";
import Mybutton from "./Mybutton";
export const Modal = ({ closewin }) => {
  return (
    <div className="  flex items-center justify-center h-screen w-full  fixed bg-white/20 mx-auto ">
      <div className=" flex flex-col items-center justify-center  p-6">
        <p className="w-2/3  mx-auto  md:text-xl mt-8">
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
    </div>
  );
};
