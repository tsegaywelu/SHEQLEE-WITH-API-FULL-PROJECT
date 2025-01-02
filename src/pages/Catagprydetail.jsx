import React, { useCallback, useState } from "react";
import Postedjobs from "../components/basecomponents/Postedjobs";
import product from "../assets/SVG/product.svg";
import bell from "../assets/SVG/bell.svg";
import { FaFacebook, FaTwitter, FaTelegram, FaLinkedin } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Location from "../components/basecomponents/Location";
import { Modal } from "../components/basecomponents/Modal";
import Qestion from "../components/basecomponents/Qestion";
import Pagination from "../components/basecomponents/Pagination";
const Categorydetail = () => {
  const { theidtodisplay } = useParams();
  const mytitle = theidtodisplay;
  const [showModal, setshowModal] = useState(false);
  const openmodal = useCallback(() => setshowModal(true), []);
  const closemodal = useCallback(() => setshowModal(false));
  return (
    <div>
      {showModal && (
        <Modal
          closewin={closemodal}
          message={
            "Please register or login before  you <br/>could subscribe to categories."
          }
        />
      )}
      <div className="relative">
        <Location />
      </div>
      <div className=" ">
        <div className="flex flex-col items-center text-center p-8 font-sans text-black">
          <div className="mb-4 text-purple-400">
            <img src={product} height={84} width={84} />
          </div>
          <h1 className="text-lg md:text-xl lg:text-4xl text-custom-black font-semibold font-kantumruy mb-2 mt-4">
            {mytitle}
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl text-custom-black font-kantumruy mb-4 mt-1">
            All job posts in the <span className="font-medium">{mytitle}</span>{" "}
            category.
          </p>

          <button
            className="flex items-center gap-5  px-5 py-3 bg-custom-purple  text-custom-white font-medium font-kantumruy rounded-[10px]  mt-3 text-2xl"
            onClick={openmodal}
          >
            <img src={bell} width={20} height={20} alt="" /> Subscribe to
            category
          </button>

          <p className="text-sm md:text-2xl text-custom-black font-kantumruy mt-7 gap-4 ">
            Subscribers: <span className="font-semibold">1,784</span>
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
        <div className="mx-16">
          <Pagination totalPages={15} />
        </div>
        <Qestion />
      </div>
    </div>
  );
};

export default Categorydetail;
