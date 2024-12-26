import React, { useState } from "react";
import Mybutton from "./Mybutton";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Dropdownform from "./Dropdownform";
export const Dropdownprofile = ({
  closewin,
  message,
  placeholder1,
  placeholder2,
  buttontext,
  setshowmodal,
  showmodal,
  dropdown,
}) => {
  return createPortal(
    <div className="">
      {showmodal && (
        <div className="  flex items-center justify-center h-screen w-full fixed mx-auto bg-stone-900/60 z-10 ">
          <div className=" flex flex-col items-center justify-center w-1/2 h-1/2 z-50 font-semibold  bg-white rounded-xl shadow-lg  space-y-6">
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
                  placeholder={placeholder1}
                  className="bg-custom-tags p-4 placeholder:text-custom-placeholder w-4/5 rounded-lg outline-none "
                />

                {dropdown ? (
                  <div className="relative w-4/5 text-custom-placeholder font-normal ">
                    <Dropdownform
                      options={["Junior", "Intermidate", "Sunior"]}
                      defaultText="skill level"
                    />
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder={placeholder2}
                    className="bg-custom-tags p-4 placeholder:text-custom-placeholder w-4/5 rounded-lg outline-none "
                  />
                )}

                <div className="flex justify-end   ">
                  <Mybutton
                    background={
                      "bg-black font-semibold font-kantumruy  text-custom-white rounded-lg px-16 py-3"
                    }
                    onClick={(e) => setshowmodal(!showmodal)}
                  >
                    <h1 className="text-2xl">{buttontext} </h1>
                  </Mybutton>
                </div>
              </div>
            </form>
          </div>
          {/* this is the closer to the modal outside click */}
          <div
            className="absolute top-0 left-0 w-full h-full backdrop:blur-lg z-20 bg-black opacity-20"
            onClick={(e) => setshowmodal(!showmodal)}
          ></div>
        </div>
      )}
    </div>,
    document.getElementById("modal")
  );
};

export default Dropdownprofile;
