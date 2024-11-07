import React from "react";
import { MdEmail, MdSubject } from "react-icons/md";
import Location from "../components/basecomponents/Location";
import Mybutton from "../components/basecomponents/Mybutton";
const Contact = () => {
  return (
    <div>
      <div className="mx-20">
        <Location />
      </div>
      <div className="mt-5 md:my-10">
        <div className="flex flex-col items-center">
          <MdEmail size={68} className="m-2 m:p-4" />
          <h2 className="text-xl md:text-4xl font-bold p-2 ">Contact</h2>
          <p className=" max-w-[600px] text-center text-sm md:text-2xl  ">
            Please reach out to us if you have any questions or you need our
            assistance with something.
          </p>
        </div>
        {/* inputs section */}
        <div className="flex  max-sm:flex-col m-5 gap-8 justify-center lg:px-28 md:mt-10">
          <div className="flex flex-col flex-grow ">
            <label className="text-xl font-bold  m-3" htmlFor="subject">
              Subject
            </label>
            <div className="relative ">
              <MdSubject
                size={48}
                className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full"
              />
              <input
                type="text"
                className="bg-slate-200  rounded-lg pl-16 h-full outline-none p-3 w-full text-xl"
                id="subject"
                placeholder="regarding post a job "
              />
            </div>
          </div>
          <div className="flex flex-col flex-grow  ">
            <label className="text-xl font-bold m-3" htmlFor="email">
              your email
            </label>
            <div className="relative ">
              <MdEmail
                size={48}
                className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full"
              />
              <input
                type="email"
                id="email"
                className="bg-slate-200 rounded-lg pl-16 h-full outline-none p-3  w-full text-xl"
                placeholder="abebe@gmail.com "
              />
            </div>
          </div>
        </div>
        <div className="md:px-28 mb-4 relative">
          <label className="text-xl font-bold m-3" htmlFor="message">
            message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message down..."
            rows={7}
            className="bg-slate-200 w-full rounded-lg p-4  outline-none text-2xl "
          ></textarea>
          <span className="absolute md:right-32 right-2 bottom-1">0/512</span>
        </div>
        <div className="flex justify-end mx-32 mt-10">
          <Mybutton background="bg-purple-400 p-3 rounded-lg text-white  text-2xl">
            Send message
          </Mybutton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
