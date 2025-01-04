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
        <div className="md:w-1/2 flex flex-col items-start md:items-center  justify-center my-10 md:my-0    ">
          <h1
            className="font-semibold font-kantumruy text-3xl md:text-3xl lg:text-5xl w-[87%]  md:w-[90%] pl-5 md:pl-16 leading-loose"
            style={{ lineHeight: "1.09" }}
          >
            Recruit <span className="text-custom-purple">affordable</span>
            <div className=" inline md:block">
              {" "}
              & <span className="text-custom-purple">skilled </span>Ethiopian
            </div>
            <div>professionals.</div>
          </h1>

          <div className="mt-6 md:my-7 text-[15px] md:text-xl w-[87%] md:w-[90%] pl-5 md:pl-16 font-kantumruy  ">
            Web frontend, mobile app, backend, database, full-stack, data
            science, UI/UX & product design, project management, scrum master,
            etc.
          </div>
          {/* //for the  pop up text */}

          {/* //button component */}
          <div
            className="  mt-8 lg:mt-7   md:w-[90%] pl-5 md:pl-16     "
            onClick={openmodal}
          >
            <div className=" ">
              <Mybutton
                background={
                  "bg-custom-purple  text-lg md:text-xl lg:text-2xl py-2 md:py-4 px-10 md:px-16  rounded-[5px] md:rounded-[15px] text-white font-semibold font-kantumruy "
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
        <div className="md:w-1/2 h-auto  py-4 md:py-6 md:mr-20 ">
          {/* <img src={hero} alt="...loading image  " /> this was the alternative image*/}
          <div className="  md:float-left px-10 md:px-0">
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
      <div className="flex  flex-col-reverse md:flex-row  justify-start  mt-4 md:mt-16 ">
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
