import React, { useState, useCallback } from "react";
// import hero from "../assets/hero.png";
import animationData from "../assets/78518.json";
import Mybutton from "../components/basecomponents/Mybutton";
import { Modal } from "../components/basecomponents/Modal";
import Tags from "../components/basecomponents/Tags";
import Postedjobs from "../components/basecomponents/Postedjobs";
import Platformstatus from "../components/onetimecmponent/Platformstatus";
//import { Player as Lottie } from "@lottiefiles/react-lottie-player";
import Lottie from "lottie-react";
import Qestion from "../components/basecomponents/Qestion";
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
        <div className="md:w-1/2 flex items-center  justify-center flex-col     ">
          <h1
            className="font-semibold font-kantumruy text-xl md:text-3xl lg:text-5xl  w-[90%] pl-16 leading-loose"
            style={{ lineHeight: "1.09" }}
          >
            Recruit <span className="text-custom-purple">affordable</span>
            <div>
              {" "}
              & <span className="text-custom-purple">skilled </span>Ethiopian
            </div>
            <div>professionals.</div>
          </h1>

          <div className=" lg:my-7 text-sm md:text-xl  w-[90%] pl-16 font-kantumruy  ">
            Web frontend, mobile app, backend, database, full-stack, data
            science, UI/UX & product design, project management, scrum master,
            etc.
          </div>
          {/* //for the  pop up text */}

          {/* //button component */}
          <div
            className=" mt-5 md:mt-5 lg:mt-7   w-[90%] pl-16     "
            onClick={openmodal}
          >
            <div className=" ">
              <Mybutton
                background={
                  "bg-custom-purple  text-sm md:text-xl lg:text-2xl py-1 md:py-2 lg:py-4 px-5 md:px-10 lg:px-16 rounded-[15px] text-white font-semibold font-kantumruy "
                }
              >
                {" "}
                Post your projects
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
        <div className="lg:w-1/2 h-auto   py-6 mr-20">
          {/* <img src={hero} alt="...loading image  " /> this was the alternative image*/}
          <div className=" float-left">
            <Lottie animationData={animationData} loop={true} autoplay={true} />
          </div>
        </div>
      </>
    );
  };
  return (
    // hero section
    <>
      {showModal && (
        <Modal
          closewin={closemodal}
          message={" Please register or login as a <br> client to post jobs."}
        />
      )}
      <div className="flex  flex-col md:flex-row  justify-start mt-16 ">
        {/* leftside text */}
        {leftsidecontents()}

        {/* right side image */}
        {rightsidecontent()}

        {/* display tags here  */}
      </div>
      <Tags />
      <Postedjobs showicon5 showtitle />
      <div className="mt-7 mb-2">
        <Qestion />
      </div>
      <Platformstatus />
    </>
  );
};

export default Landing;
