import React from "react";
import mysvg from "../../assets/SVG/footerlogo.svg";
import facebook from "../../assets/SVG/facebook.svg";
import twitter from "../../assets/SVG/twitter.svg";
import instagram from "../../assets/SVG/instagram.svg";
import telegram from "../../assets/SVG/telegram.svg";
import linkedin from "../../assets/SVG/linkedin.svg";
import youtube from "../../assets/SVG/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* //here it was having mt-5 but i deleted it because of clinet.jsx check for others effect  */}
      <footer className="bg-black text-white  pt-8 lg:pt-16 pb-4 ">
        <div className=" mx-auto pl-8 flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-start gap-8 md:gap-10 px-2  md:px-10 ">
          {/*  Address Section    */}
          <div className=" mr-5 order-1 md:order-none   text-center sm:text-left mb-6 sm:mb-0 md:self-start flex-[1.5] mt-4 ">
            <div className="flex  flex-col items-center justify-center sm:justify-start mb-4 gap-4  ">
              <img
                src={mysvg}
                alt="Logo loading..."
                className=" h-[70px] w-[70px]"
              />
              <h2 className="font-kantumruy font-medium">ADDRESS</h2>
            </div>
            <p className=" text-xs md:text-base font-kantumruy font-light  text-center ">
              MIT, Mekelle, Tigray
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full  space-y-2 md:space-y-0 flex-[1] ">
            <h3 className=" pr-[57%] md:pr-0 text-xl lg:text-2xl font-medium font-kantumruy  lg:mb-4 pb-3 border-b-2 border-white md:mr-10 max-sm:w-fit ">
              Links
            </h3>
            <ul className="space-y-2 md:space-y-0">
              <li>
                <Link
                  to={"/sheqlee/company"}
                  className="font-light font-kantumruy  "
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  to={"/sheqlee/categories"}
                  href="#"
                  className="font-light font-kantumruy "
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to={"/sheqlee/tags"}
                  className="font-light font-kantumruy "
                >
                  Tags
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full  space-y-2 md:space-y-0 flex-[1]">
            <h3 className=" pr-[47%] md:pr-0 text-xl  lg:text-2xl font-medium font-kantumruy  lg:mb-4 pb-3 border-b-2 border-white md:mr-10 max-sm:w-fit ">
              Company
            </h3>
            <ul className="space-y-2 md:space-y-0">
              <li>
                <a href="#" className="font-light font-kantumruy ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="font-light font-kantumruy ">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="font-light font-kantumruy ">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full  space-y-2 md:space-y-0 flex-[1]">
            <h3 className="pr-[50%] md:pr-0 text-xl  lg:text-2xl font-medium font-kantumruy  lg:mb-4 pb-3 border-b-2 border-white md:mr-10 max-sm:w-fit ">
              Support
            </h3>
            <ul className="space-y-2 md:space-y-0">
              <li>
                <a href="#" className="font-light font-kantumruy ">
                  Getting started
                </a>
              </li>
              <li>
                <Link
                  to={"/sheqlee/contact"}
                  className="font-light font-kantumruy "
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={"/sheqlee/FAQ"}
                  className="font-light font-kantumruy "
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="w-full pb-10 md:pb-0  border-b-2  md:border-none  flex-[1] space-y-2 md:space-y-0  ">
            <h3 className="pr-[57%] md:pr-0 text-xl  lg:text-2xl font-medium font-kantumruy  lg:mb-4 pb-3 border-b-2 border-white md:mr-10 max-sm:w-fit ">
              Legal
            </h3>
            <ul className="space-y-2 md:space-y-0">
              <li>
                <Link
                  to={"/sheqlee/Privacy Policy"}
                  className="font-light font-kantumruy "
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="font-light font-kantumruy ">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="font-light font-kantumruy ">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" md:px-8 mt-4 md:mt-8 flex flex-col-reverse md:flex-row flex-wrap justify-between items-center gap-y-10  ">
          <p className="font-light font-kantumruy text-xs  md:text-sm md:self-end ">
            © {new Date().getFullYear()} Sheqlee Co., Ltd. All rights reserved.
          </p>
          <div className="flex flex-col justify-center items-center gap-3 font-kantumruy font-light">
            <p className="md:self-start text-lg md:text-sm">Follow us on</p>
            <div className="flex space-x-4">
              <a href="#">
                <img
                  src={facebook}
                  alt="facebook icon"
                  width={15}
                  height={18}
                />
              </a>
              <a href="#">
                <img src={twitter} alt="facebook icon" width={15} height={18} />
              </a>
              <a href="#">
                <img
                  src={instagram}
                  alt="instagram icon"
                  width={15}
                  height={18}
                />
              </a>
              <a href="#">
                <img
                  src={telegram}
                  alt="telegram icon"
                  width={15}
                  height={18}
                />
              </a>
              <a href="">
                <img
                  src={linkedin}
                  alt="linkedin icon"
                  width={15}
                  height={18}
                />
              </a>
              <a href="www.youtube.com">
                <img src={youtube} alt="youtube icon" width={18} height={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
//this is in the app component and changing the other componnets will no rerender this
export default React.memo(Footer);
