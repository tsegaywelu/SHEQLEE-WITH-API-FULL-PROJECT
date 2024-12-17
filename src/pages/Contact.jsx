import React from "react";
import { MdEmail } from "react-icons/md";
import contact from "../../src/assets/SVG/contact.svg";
import email from "../../src/assets/SVG/email.svg";
import idea from "../../src/assets/SVG/idea.svg";
import Location from "../components/basecomponents/Location";
import Mybutton from "../components/basecomponents/Mybutton";
import Dashboaredtitle from "../components/onetimecmponent/Dashboaredtitle";
import Twoinput1 from "../components/basecomponents/Twoinput1";
import Oneinput from "../components/basecomponents/Oneinput";
import Qestion from "../components/basecomponents/Qestion";
const Contact = () => {
  return (
    <div>
      <div className="">
        <Location />
      </div>
      <div className="mt-5 md:my-10">
        {/* <div className="flex flex-col items-center">
          <img src={contact} alt="" />
          <h2 className="text-xl md:text-4xl font-bold p-2 ">Contact</h2>
          <p className=" max-w-[600px] text-center text-sm md:text-2xl  ">
            Please reach out to us if you have any questions or you need our
            assistance with something.
          </p>
        </div> */}
        <Dashboaredtitle
          text={
            "Please reach out to us if you have any questions or you need our assistance with something."
          }
          heading={"Contact"}
          css
        >
          <img src={contact} width={66} height={66} />
        </Dashboaredtitle>

        {/* inputs section */}
        <div className="flex  max-sm:flex-col my-5 gap-8 justify-center lg:px-28 md:mt-10">
          <Oneinput
            iconmyimage={idea}
            placeholder={"Regarding Posting a Job"}
            labeltext={"subject"}
            type={"text"}
            id={"subject"}
          />
          <Oneinput
            iconmyimage={email}
            placeholder={"abebe@gmail.com"}
            labeltext={"your email"}
            type={"email"}
            id={"email"}
          />
        </div>

        {/* //message section  */}
        <div className="md:px-28 space-y-3  relative">
          <label
            className="text-xl  my-3    font-kantumruy font-medium "
            htmlFor="message"
          >
            message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message down..."
            rows={7}
            className="bg-custom-tags w-full rounded-lg p-4  outline-none text-xl placeholder:font-kantumruy placeholder:text-custom-placeholder resize-none "
          ></textarea>
          <span className="absolute md:right-32 right-2 bottom-1 font-kantumruy">
            0/512
          </span>
        </div>
        <div className="flex justify-end mx-32 mt-10">
          <Mybutton background="bg-custom-purple p-3 rounded-lg text-white  text-xl font-kantumruy font-medium">
            Send message
          </Mybutton>
        </div>
      </div>
      <Qestion />
    </div>
  );
};

export default Contact;
