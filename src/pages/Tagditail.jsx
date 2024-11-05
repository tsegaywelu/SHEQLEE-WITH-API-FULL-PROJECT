import React from "react";
import Postedjobs from "../components/basecomponents/Postedjobs";
import {
  FaBell,
  FaLightbulb,
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import Location from "../components/basecomponents/Location";
const Catagprydetail = () => {
  return (
    <div className="md:mt-3 lg:mt-5">
      <div className="ml-20">
        <Location />
      </div>
      <div className="flex flex-col items-center text-center p-8 font-sans text-black">
        <div className="w-20 h-20 bg-yellow-400 flex items-end justify-end text-3xl font-extrabold m-3 p-2">
          JS
        </div>
        <h1 className="text-lg md:text-xl lg:text-4xl font-bold mb-2">
          JavaScript
        </h1>
        <p className="text-sm md:text-xl lg:text-2xl text-gray-900 mb-4">
          All job posts with the Tag <strong>JavaScript</strong>
        </p>

        <button className="flex items-center gap-5 px-4 py-2 md:px-8 md:py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg transition duration-300">
          <FaBell /> Subscribe to tags
        </button>

        <p className="text-sm md:text-2xl text-gray-900 mt-4 gap-4 ">
          Subscribers: <span className="font-bold">842</span>
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
  );
};

export default Catagprydetail;
