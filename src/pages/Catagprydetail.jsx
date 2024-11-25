import React from "react";
import Postedjobs from "../components/basecomponents/Postedjobs";
import product from "../assets/SVG/product.svg";
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
    <div className="md:mt-10 ">
      <div className="ml-20">
        <Location />
      </div>
      <div className="flex flex-col items-center text-center p-8 font-sans text-black">
        <div className="mb-4 text-purple-400">
          <img src={product} height={96} width={96} />
        </div>
        <h1 className="text-lg md:text-xl lg:text-4xl font-bold mb-2 mt-4">
          UI/UX & Product Design
        </h1>
        <p className="text-sm md:text-xl lg:text-2xl text-gray-900 mb-4 mt-6">
          All job posts in the <strong>UI/UX & Product Design</strong> category.
        </p>

        <button className="flex items-center gap-5 px-4 py-2 md:px-8 md:py-4 bg-custom-purple hover:bg-purple-500 text-white font-semibold rounded-lg transition duration-300 mt-6">
          <FaBell /> Subscribe to category
        </button>

        <p className="text-sm md:text-2xl text-gray-900 mt-4 gap-4 ">
          Subscribers: <span className="font-bold">1,784</span>
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
