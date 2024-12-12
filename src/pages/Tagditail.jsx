import React, { useState } from "react";
import Postedjobs from "../components/basecomponents/Postedjobs";
import bell from "../assets/SVG/bell.svg";
import { useParams } from "react-router-dom";
import Mybutton from "../components/basecomponents/Mybutton";
import { FaFacebook, FaTwitter, FaTelegram, FaLinkedin } from "react-icons/fa";
import Location from "../components/basecomponents/Location";
import { Modal } from "../components/basecomponents/Modal";
const Catagprydetail = () => {
  const { theidtodisplay } = useParams();
  const mytitle = theidtodisplay;
  const logo = mytitle.slice(0, 2);
  const [showModal, setshowModal] = useState(false);
  const openmodal = () => {
    setshowModal(true);
  };
  const closemodal = () => {
    setshowModal(false);
  };
  return (
    <div>
      {showModal && (
        <Modal
          message={
            "Please register or login before  you <br/>could subscribe to tags."
          }
          closewin={closemodal}
        />
      )}
      <div className="">
        <Location />
      </div>
      <div className="">
        <div className="flex flex-col items-center text-center px-8 font-sans text-black ">
          <div className="w-20 h-20 bg-yellow-400 flex items-end justify-end text-4xl m-3 p-2  font-kantumruy font-bold uppercase">
            {logo}
          </div>
          <h1 className="text-lg md:text-xl lg:text-4xl text-custom-black font-semibold font-kantumruy mb-2 mt-4 capitalize">
            {mytitle}
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl text-custom-black font-kantumruy mb-4 mt-1">
            All job posts with the tag{" "}
            <span className="font-medium ">{mytitle}</span>
          </p>

          <button
            className="flex items-center gap-5  px-5 py-3 bg-custom-purple  text-custom-white font-medium font-kantumruy rounded-[10px]  mt-3 text-2xl"
            onClick={openmodal}
          >
            <img src={bell} width={20} height={20} alt="" /> Subscribe to tag
          </button>

          <p className="text-sm md:text-2xl text-custom-black font-kantumruy mt-7 gap-4  ">
            Subscribers: <span className="font-semibold">842</span>
          </p>

          <div className="flex gap-4 mt-6 text-gray-700">
            <FaFacebook
              size={20}
              className="hover:text-purple-400 cursor-pointer"
            />
            <FaTwitter
              size={20}
              className="hover:text-purple-400 cursor-pointer"
            />
            <FaTelegram
              size={20}
              className="hover:text-purple-400 cursor-pointer"
            />
            <FaLinkedin
              size={20}
              className="hover:text-purple-400 cursor-pointer"
            />
          </div>
        </div>
        <Postedjobs />
      </div>
    </div>
  );
};

export default Catagprydetail;
