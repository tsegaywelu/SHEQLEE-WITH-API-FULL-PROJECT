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
        <div className=" flex flex-col items-center justify-center py-5 px-20  font-semibold  bg-white rounded-lg shadow-lg">
          <p className="  mx-auto  md:text-xl  ">
            plase register or login as a <br />
            client to post jobs
          </p>
          <div className=" ">
            <Link to={"/sheqlee/companysignup"}>
              <Mybutton background={" p-2  m-2"}>Sign Up</Mybutton>
            </Link>
            <Link to={"/sheqlee/login"}>
              <Mybutton background={"bg-indigo-700 p-2 rounded-lg m-3"}>
                Sign in{" "}
              </Mybutton>
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
