import React, { useState, useCallback } from "react";
import hero from "../assets/hero.png";
import Mybutton from "../components/basecomponents/Mybutton";
import { Modal } from "../components/basecomponents/Modal";
import Tags from "../components/basecomponents/Tags";
import Postedjobs from "../components/basecomponents/Postedjobs";
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
        <div className="md:w-1/2 flex items-center  justify-center flex-col  md:mx-10 md:px-10 ">
          <h1 className="font-bold text-xl md:text-3xl lg:text-5xl mx-2 md:mx-5 lg:mx-10">
            Recurit{" "}
            <span style={{ color: "#8967B3" }}>
              affordable & skilled ethiopian
            </span>{" "}
            <br />
            proffetionals.
          </h1>
          <p className=" lg:my-7 text-wrap text-sm md:text-xl  mx-2 md:mx-5 lg:mx-10">
            Web frontend, mobile app, backend, database, full-stack, data
            science, UI/UX & product design, project management, scrum master,
            etc.
          </p>
          {/* //for the  pop up text */}

          {/* //button component */}
          <div className=" mt-5 md:mt-5 lg:mt-10  w-full" onClick={openmodal}>
            <div className=" mx-2 md:mx-5 lg:mx-10">
              <Mybutton
                background={
                  "bg-custom-purple  text-sm md:text-xl lg:text-2xl py-1 md:py-2 lg:py-4 px-5 md:px-10 lg:px-16 rounded-lg "
                }
              >
                {" "}
                Post Your Projects
              </Mybutton>
            </div>
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
      <div className="flex  flex-col md:flex-row justify-between mt-10 ">
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
