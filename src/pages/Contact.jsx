import React from "react";
import contact from "../../src/assets/SVG/contact.svg";
import email from "../../src/assets/SVG/email.svg";
import idea from "../../src/assets/SVG/idea.svg";
import Location from "../components/basecomponents/Location";
import Mybutton from "../components/basecomponents/Mybutton";
import Dashboaredtitle from "../components/onetimecmponent/Dashboaredtitle";
import Oneinput from "../components/basecomponents/Oneinput";
import Qestion from "../components/basecomponents/Qestion";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const closewindow = () => {
    //handle what do you want here please
    console.table(formData);
  };
  return (
    <>
      <div className="">
        <Location />
        {formData.email}
        {formData.message}
        {formData.subject}
      </div>
      <div className="max-w-4xl mx-auto ">
        <div className="mt-5  my-10  mx-4 md:mx-2">
          <Dashboaredtitle
            text={
              "Please reach out to us if you have any questions or you need our assistance."
            }
            heading={"Contact"}
            css={540}
          >
            <img
              src={contact}
              className=" w-[50px] h-[50px] md:w-[66px] md:h-[66px]"
            />
          </Dashboaredtitle>

          {/* inputs section */}
          <div className="flex  flex-col md:flex-row my-5 gap-4 md:gap-8 justify-center  md:mt-5 ">
            <Oneinput
              iconmyimage={idea}
              placeholder={"Regarding Posting a Job"}
              labeltext={"Subject"}
              type={"text"}
              id={"subject"}
              formData={formData}
              updateFormData={updateFormData}
              correctvalue={"subject"}
              changetheicon={"p-[13px]"}
            />
            <Oneinput
              iconmyimage={email}
              placeholder={"abebe@gmail.com"}
              labeltext={"Your email"}
              type={"email"}
              id={"email"}
              formData={formData}
              updateFormData={updateFormData}
              correctvalue={"email"}
            />
          </div>

          {/* //message section  */}
          <div className=" space-y-3   relative">
            <label
              className=" text-lg md:text-xl  my-3    font-kantumruy font-medium "
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message down..."
              rows={9}
              className="placeholders text-lg md:text-xl placeholder:text-lg md:placeholder:text-xl"
              required
              value={formData.message}
              onChange={(e) => updateFormData("message", e.target.value)}
            ></textarea>
            <span className="absolute  right-3 bottom-3 font-kantumruy">
              0/512
            </span>
          </div>
          <div className="flex  justify-center md:justify-end  mt-10 ">
            <Mybutton
              background="bg-custom-purple  py-3 px-8 md:p-3 rounded-lg text-white  text-xl font-kantumruy font-medium"
              closewindow={closewindow}
            >
              Send message
            </Mybutton>
          </div>
        </div>
      </div>
      <Qestion />
    </>
  );
};

export default Contact;
