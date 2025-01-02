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
        <div className="mt-5 md:my-10">
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
          <div className="flex  max-sm:flex-col my-5 gap-8 justify-center  md:mt-5">
            <Oneinput
              iconmyimage={idea}
              placeholder={"Regarding Posting a Job"}
              labeltext={"subject"}
              type={"text"}
              id={"subject"}
              formData={formData}
              updateFormData={updateFormData}
              correctvalue={"subject"}
              changetheicon={"p-3"}
            />
            <Oneinput
              iconmyimage={email}
              placeholder={"abebe@gmail.com"}
              labeltext={"your email"}
              type={"email"}
              id={"email"}
              formData={formData}
              updateFormData={updateFormData}
              correctvalue={"email"}
            />
          </div>

          {/* //message section  */}
          <div className=" space-y-3  relative">
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
              className="placeholders"
              required
              value={formData.message}
              onChange={(e) => updateFormData("message", e.target.value)}
            ></textarea>
            <span className="absolute  right-2 bottom-2 font-kantumruy">
              0/512
            </span>
          </div>
          <div className="flex justify-end  mt-10 ">
            <Mybutton
              background="bg-custom-purple p-3 rounded-lg text-white  text-xl font-kantumruy font-medium"
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
