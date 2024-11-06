import React from "react";
import logo from "../../assets/logoblack.png";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white px-2 md:px-2 lg:px-4 py-2 md:py-3 lg:py-8">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-between">
          {/* Address Section */}
          <div className="w-full sm:w-1/4 text-center sm:text-left mb-6 sm:mb-0">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <img src={logo} alt="Logo" className="w-20 h-20  mr-2" />
              <h2 className="text-xl font-semibold">ADDRESS</h2>
            </div>
            <p>MIT, Mekelle, Tigray</p>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white ">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Tags
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Getting started
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="container mx-auto mt-8 flex flex-wrap items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 Sheqlee Co., Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#">
              <FaFacebook size={24} />
            </a>
            <a href="#">
              <FaTwitter size={24} />
            </a>
            <a href="#">
              <FaInstagram size={24} />
            </a>
            <a href="#">
              <FaTelegram size={24} />
            </a>
            <a href="#">
              <FaLinkedin size={24} />
            </a>
            <a href="#">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
//this is in the app component and changing the other componnets will no rerender this
export default React.memo(Footer);
