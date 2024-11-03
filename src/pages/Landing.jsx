import React, { useState, useCallback } from "react";
import hero from "../assets/hero.png";
import Mybutton from "../components/basecomponents/Mybutton";
import { Modal } from "../components/basecomponents/Modal";
import Tags from "../components/basecomponents/Tags";
import Postedjobs from "../components/basecomponents/Postedjobs";
import { useLocation } from "react-router-dom";
import Platformstatus from "../components/onetimecmponent/Platformstatus";
const Landing = () => {
  const [showModal, setshowModal] = useState(false);
  // function closemodal() {
  //   setshowModal(false);
  // }
  // function openmodal() {
  //   setshowModal(true);
  // }
  //this is the best because if no change on showModal no rerender will occur
  const closemodal = useCallback(() => setshowModal(false), []);
  const openmodal = useCallback(() => setshowModal(true), []);

  //left side component
  const leftsidecontents = () => {
    return (
      <>
        <h1 className=" absolute right-10 top-3 px-2 text-2xl font-bold border-4 border-white rounded-full text-white z-50 ">
          &times;
        </h1>
        <div className="md:w-1/2 flex items-center flex-col justify-center md:mx-10">
          <h1 className="font-semibold text-xl md:text-3xl lg:text-5xl mx-2 md:mx-5 lg:mx-10">
            Recurit{" "}
            <span style={{ color: "indigo" }}>
              affordable & skilled ethiopian
            </span>{" "}
            <br />
            proffetionals.
          </h1>
          <p className="mx-2 md:text-5 lg:mx-10 text-wrap text-sm md:text-xl">
            and they let you protect passwords, download videos, find deals,
            block annoying ads, change how your browser looks, and much mor e.
            These small software programs are often developed b
          </p>
          {/* //for the  pop up text */}

          {/* //button component */}
          <div className=" mt-5 md:mt-10 lg:mt-20" onClick={openmodal}>
            <Mybutton
              background={
                "bg-indigo-600 text-sm md:text-xl lg:text-2xl p-1 md:p-2 g;p-3 rounded-lg "
              }
            >
              {" "}
              Post Your Projects
            </Mybutton>
          </div>
        </div>
      </>
    );
  };

  //right side component
  const rightsidecontent = () => {
    return (
      <>
        <div className="lg:w-1/2 h-auto ">
          <img src={hero} alt="...loading image  " />
        </div>
      </>
    );
  };
  return (
    // hero section
    <>
      {showModal && <Modal closewin={closemodal} />}
      <div className="flex  flex-col md:flex-row justify-between ">
        {/* leftside text */}
        {leftsidecontents()}

        {/* right side image */}
        {rightsidecontent()}

        {/* display tags here  */}
      </div>
      <Tags />
      <Postedjobs />
      <Platformstatus />
    </>
  );
};

export default Landing;
