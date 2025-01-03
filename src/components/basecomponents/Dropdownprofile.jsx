import React, { useState } from "react";
import Mybutton from "./Mybutton";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Dropdownform from "./Dropdownform";
import times from "../../assets/direction/times.svg";
export const Dropdownprofile = ({
  closewin,
  message,
  placeholder1,
  placeholder2,
  buttontext,
  setshowmodal,
  showmodal,
  dropdown,

  updateFormData,
  formData,
  correctvalue1,
  correctvalue2,
}) => {
  return createPortal(
    <div className="">
      <button
        className="  fixed right-7 top-6 p-1  text-2xl font-bold  rounded-full text-white z-50  "
        onClick={(e) => setshowmodal(!showmodal)}
      >
        <img src={times} alt="times icon" width={32} height={32} />
      </button>
      {showmodal && (
        <div className="  flex items-center justify-center h-screen w-full fixed mx-auto bg-stone-900/60 z-10 font-kantumruy ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" flex flex-col items-center justify-center w-[40%] h-[45%] z-50 font-semibold   bg-white  rounded-xl shadow-lg  space-y-6"
          >
            <p className="  mx-auto  md:text-xl font-kantumruy font-medium   ">
              <div dangerouslySetInnerHTML={{ __html: message }} />
            </p>

            <div className="  w-4/5   ">
              <div className="flex flex-col justify-center items-center gap-4 w-full">
                <input
                  type="text"
                  placeholder={placeholder1}
                  className="bg-custom-tags p-3 text-xl font-normal  placeholder:text-custom-placeholder w-full rounded-lg outline-none font-kantumruy"
                  value={formData[correctvalue1] || ""}
                  onChange={(e) =>
                    updateFormData(correctvalue1, e.target.value)
                  }
                />

                {dropdown ? (
                  <div className="relative w-full font-normal ">
                    <Dropdownform
                      options={["Junior", "Intermidate", "Sunior"]}
                      defaultText="Skill level"
                      updateFormData={updateFormData}
                      formData={formData}
                      correctvalue2={correctvalue2}
                    />
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder={placeholder2}
                    className="bg-custom-tags p-3 font-normal text-xl placeholder:text-custom-placeholder w-full rounded-lg outline-none font-kantumruy "
                    value={formData[correctvalue2] || ""}
                    onChange={(e) =>
                      updateFormData(correctvalue2, e.target.value)
                    }
                  />
                )}

                <div className="flex justify-end   ">
                  <Mybutton
                    background={` ${
                      formData[correctvalue1] && formData[correctvalue2]
                        ? "bg-custom-purple"
                        : "bg-black"
                    } font-semibold font-kantumruy  text-custom-white rounded-lg px-16 py-3 mt-2`}
                    // onClick={(e) => setshowmodal(!showmodal)}
                    type="button"
                  >
                    <h1 className="text-xl">{buttontext} </h1>
                  </Mybutton>
                </div>
              </div>
            </div>
          </form>
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
