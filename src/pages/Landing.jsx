import React, { useState, useCallback } from "react";
import hero from "../assets/hero.png";
import Mybutton from "../components/Mybutton";
import { Modal } from "../components/Modal";
import Tags from "../components/Tags";
import Postedjobs from "../components/Postedjobs";
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
          <div className="mt-20" onClick={openmodal}>
            <Mybutton background={"bg-indigo-600 text-2xl p-3 rounded-lg "}>
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
        <div className="w-1/2 h-auto ">
          <img src={hero} alt="...loading image  " />
        </div>
      </>
    );
  };
  return (
    // hero section
    <>
      {showModal && <Modal closewin={closemodal} />}
      <div className="flex justify-between ">
        {/* leftside text */}
        {leftsidecontents()}

        {/* right side image */}
        {rightsidecontent()}

        {/* display tags here  */}
      </div>
      <Tags />
      <Postedjobs />
    </>
  );
};

export default Landing;
