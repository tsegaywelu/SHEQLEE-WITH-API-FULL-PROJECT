import React from "react";
import Mybutton from "./Mybutton";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
export const Dropdownprofile = ({ closewin, message }) => {
  return createPortal(
    <div className="">
      <div className="  flex items-center justify-center h-screen w-full fixed mx-auto bg-stone-900/60 z-10 ">
        <div className=" flex flex-col items-center justify-center w-1/2 h-1/2  font-semibold  bg-white rounded-xl shadow-lg  space-y-6">
          <p className="  mx-auto  md:text-xl font-kantumruy font-medium   ">
            <div dangerouslySetInnerHTML={{ __html: message }} />
          </p>

          <form
            action="
           "
            className="  w-4/5  "
          >
            <div className="flex flex-col justify-center items-center gap-4 w-full">
              <input
                type="text"
                id="programing"
                placeholder="Rust"
                className="bg-custom-tags p-4 placeholder:text-custom-placeholder w-4/5 rounded-lg outline-none "
              />

              <input
                type="text"
                id="programing"
                placeholder="juniour"
                className="bg-custom-tags p-4 placeholder:text-custom-placeholder w-4/5 rounded-lg outline-none "
              />
              <div className="flex justify-end  ">
                <Mybutton
                  background={
                    "bg-custom-purple font-semibold font-kantumruy  text-custom-white rounded-lg px-8 py-3"
                  }
                >
                  <h1 className="text-2xl">Add skill </h1>
                </Mybutton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Dropdownprofile;
