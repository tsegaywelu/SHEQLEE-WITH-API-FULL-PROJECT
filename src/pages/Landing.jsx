import React, { useState } from "react";
import hero from "../assets/hero.png";
import Mybutton from "../components/Mybutton";
const Landing = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    // hero section
    <>
      {showModal && (
        <div className="  flex items-center justify-center h-screen w-full  fixed bg-white/20 mx-auto ">
          <div className=" flex flex-col items-center justify-center  p-6">
            <p className="w-2/3  mx-auto  md:text-xl mt-8">
              dfh fhweuh s hdhfue fhd huweh dfhsd hushfuwehf usjf hhfuweah uhrfu
              hfuheru huewrfhu
            </p>
            <div className=" ">
              <Mybutton background={" p-2  m-2"}>Sign Up</Mybutton>
              <Mybutton background={"bg-indigo-700 p-2 rounded-lg m-3"}>
                Sign in{" "}
              </Mybutton>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between ">
        {/* //leftside text */}
        <div className="w-1/2 flex items-center flex-col justify-center md:mx-10">
          <h1 className="font-semibold md:text-5xl mx-10">
            Recurit{" "}
            <span style={{ color: "indigo" }}>
              affordable & skilled ethiopian
            </span>{" "}
            <br />
            proffetionals.
          </h1>
          <p className="md:mx-10 text-wrap md:text-xl">
            and they let you protect passwords, download videos, find deals,
            block annoying ads, change how your browser looks, and much mor e.
            These small software programs are often developed b
          </p>
          {/* //for the  pop up text */}

          {/* //button component */}
          <div className="mt-20" onClick={(e) => setshowModal(true)}>
            <Mybutton background={"bg-indigo-600 text-2xl p-3 rounded-lg "}>
              {" "}
              Post Your Projects
            </Mybutton>
          </div>
        </div>

        {/* //right sie image */}
        <div className="w-1/2 h-auto ">
          <img src={hero} alt="...loading image  " />
        </div>
      </div>
    </>
  );
};

export default Landing;
