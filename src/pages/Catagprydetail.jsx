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
      <div className="  ">
        <div className="flex flex-col items-center text-center px-8 pt-5 pb-14 font-sans text-black">
          <div className="mb-4 text-purple-400">
            <img
              src={product}
              className=" w-[45px] h-[45px] md:w-[70px] md:h-[70px]"
              alt="product icon "
            />
          </div>
          <h1 className=" capitalize text-2xl md:text-xl lg:text-4xl text-custom-black font-semibold font-kantumruy mb-2 md:mt-2">
            {mytitle}
          </h1>
          <p className="text-[17px] md:text-2xl text-custom-black font-kantumruy mb-4 md:mt-1">
            All job posts in the <span className="font-medium">{mytitle}</span>{" "}
            category.
          </p>

          <button
            className="flex items-center gap-5  px-4  py-3 bg-custom-purple  text-custom-white font-medium font-kantumruy rounded-[10px]  mt-2 md:mt-4 text-lg md:text-[21px]"
            onClick={openmodal}
          >
            <img
              src={bell}
              className=" h-[19px] w-[19px] md:w-[22px] md:h-[22px]"
              alt="bell icon "
            />
            <div className="pr-2">Subscribe to category</div>
          </button>

          <p className="text-lg md:text-2xl text-custom-black font-kantumruy mt-5  md:mt-7 gap-4 ">
            Subscribers: <span className="font-semibold">1,784</span>
          </p>

          <div className="flex gap-3 mt-2 md:mt-3 text-gray-700">
            <FaFacebook
              size={18}
              className="hover:text-purple-400 cursor-pointer w-[15px]  md:w-[24px]"
            />
            <FaTwitter
              size={18}
              className="hover:text-purple-400 cursor-pointer w-[15px] md:w-[24px]"
            />
            <FaTelegram
              size={18}
              className="hover:text-purple-400 cursor-pointer w-[15px] md:w-[24px]"
            />
            <FaLinkedin
              size={18}
              className="hover:text-purple-400 cursor-pointer w-[15px] md:w-[24px]"
            />
          </div>
        </div>
        <Postedjobs totalPages={15} showpaginatin />
        <div className="mx-16 my-4"></div>
        <Qestion />
      </div>
    </div>
  );
};

export default Categorydetail;
