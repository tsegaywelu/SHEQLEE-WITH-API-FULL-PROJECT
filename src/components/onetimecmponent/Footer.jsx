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
      <footer className="bg-black text-white px-2 md:px-8 lg:px-16 pt-2 md:pt-8 lg:pt-16 pb-4">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-between gap-10">
          {/* Address Section */}
          <div className="w-full sm:w-1/4 text-center sm:text-left mb-6 sm:mb-0">
            <div className="flex  flex-col items-center justify-center sm:justify-start mb-4 gap-5">
              <img
                src={mysvg}
                alt="Logo loading..."
                className=" h-[50px] w-[50px]"
              />
              <h2 className="font-kantumruy font-medium">ADDRESS</h2>
            </div>
            <p className=" font-kantumruy font-light  text-center ">
              MIT, Mekelle, Tigray
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h3 className="lg:text-2xl font-medium font-kantumruy  lg:mb-4 lg:pb-3 border-b-2 border-white mr-20 max-sm:w-fit ">
              Links
            </h3>
            <ul>
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
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0 ">
            <h3 className="lg:text-2xl font-medium font-kantumruy  lg:mb-4 lg:pb-3 border-b-2 border-white mr-20 max-sm:w-fit ">
              Company
            </h3>
            <ul>
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
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h3 className="lg:text-2xl font-medium font-kantumruy  lg:mb-4 lg:pb-3 border-b-2 border-white mr-20 max-sm:w-fit ">
              Support
            </h3>
            <ul>
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
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h3 className="lg:text-2xl font-medium font-kantumruy  lg:mb-4 lg:pb-3 border-b-2 border-white mr-20 max-sm:w-fit ">
              Legal
            </h3>
            <ul>
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
        <div className="container mx-auto mt-8 flex flex-wrap items-end justify-between">
          <p className="font-light font-kantumruy">
            © {new Date().getFullYear()} Sheqlee Co., Ltd. All rights reserved.
          </p>
          <div className="flex flex-col justify-center items-center gap-3 font-kantumruy font-light">
            <p className="self-start">Follow us on</p>
            <div className="flex space-x-4">
              <a href="#">
                <img
                  src={facebook}
                  alt="facebook icon"
                  width={18}
                  height={18}
                />
              </a>
              <a href="#">
                <img src={twitter} alt="facebook icon" width={18} height={18} />
              </a>
              <a href="#">
                <img
                  src={instagram}
                  alt="instagram icon"
                  width={18}
                  height={18}
                />
              </a>
              <a href="#">
                <img
                  src={telegram}
                  alt="telegram icon"
                  width={18}
                  height={18}
                />
              </a>
              <a href="">
                <img
                  src={linkedin}
                  alt="linkedin icon"
                  width={18}
                  height={18}
                />
              </a>
              <a href="www.youtube.com">
                <img src={youtube} alt="youtube icon" width={22} height={22} />
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
