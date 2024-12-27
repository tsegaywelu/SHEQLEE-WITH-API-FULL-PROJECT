import React from "react";
import Location from "../../components/basecomponents/Location";
import { Link } from "react-router-dom";
import Mybutton from "../../components/basecomponents/Mybutton";
import Divider from "../../components/basecomponents/Divider";
import profetional from "../../assets/svg1/professional.svg";
import building from "../../assets/SVG/company.svg";
import building1 from "../../assets/svg1/company.svg";
import user from "../../assets/svg1/user.svg";
import email from "../../assets/svg1/email.svg";
import key from "../../assets/svg1/key1.svg";
import google from "../../assets/SVG/google.svg";
import Oneinput from "../../components/basecomponents/Oneinput";
import Continuewithgoogle from "../../components/basecomponents/Continuewithgoogle";
import Qestion from "../../components/basecomponents/Qestion";
import Checkbox from "../../components/basecomponents/Checkbox";
import { useState } from "react";
const Companysignup = () => {
  const [formData, setFormData] = useState({
    companyname: "",
    domain: "",
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    checkbox: "",
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
    <div className="">
      <div>
        <Location />
      </div>

      {/*i am  asking  if user is freelancer */}
      <div className="relative  max-w-2xl  p-7  my-4 md:my-8 bg-custom-slate mx-auto">
        <img
          src={profetional}
          className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-7"
        />
        <h2 className="  rounded-lg pl-16 h-full   w-full text-lg font-kantumruy ">
          if you are freelancer please visit{" "}
          <Link
            to={"/sheqlee/Professional Signup"}
            className=" border-b-2 border-purple-400 font-semibold font-kantumruy"
          >
            freelancer registration{" "}
          </Link>{" "}
          page.
        </h2>
      </div>
      {/* header part */}
      <div className="flex  flex-start  max-w-4xl mx-auto text-center gap-4">
        {/* <FaBuilding size={48} className="bg-white text-purple-400" />{" "} */}
        <img src={building} width={45} height={45} />
        <div>
          {" "}
          <h1 className="text-2xl md:text-4xl text-center font-semibold font-kantumruy">
            Company Registration{" "}
          </h1>
        </div>
      </div>
      <form action="" className=" max-w-4xl mx-auto ">
        <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
          <Oneinput
            iconmyimage={building1}
            placeholder={"Sheqlee Co. Ltd."}
            labeltext={"Company name"}
            type={"text"}
            id={"companyname"}
            warn
            formData={formData}
            updateFormData={updateFormData}
            correctvalue={"companyname"}
          />

          <div className="flex flex-col flex-grow  ">
            <label
              className="text-xl   my-3 font-kantumruy font-medium"
              htmlFor="email"
            >
              Domain <span className="text-red-700">*</span>
            </label>
            <div className="flex  ">
              {/* <span className="bg-black text-white rounded-l-lg absolute  h-full  ">
                https://
              </span> */}
              <span className="bg-black text-white rounded-l-lg text-xl py-2 px-3  font-kantumruy">
                https://
              </span>
              <input
                type="url"
                id="url"
                className="bg-custom-tags  rounded-r-lg  h-full outline-none p-3 w-full text-xl font-kantumruy placeholder:text-custom-placeholder"
                placeholder="sheqlee.com "
                value={formData.domain}
                onChange={(e) => updateFormData("domain", e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* // divider part */}
        <Divider> company representative</Divider>
        {/* below devide part */}
        <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
          <Oneinput
            iconmyimage={user}
            placeholder={"Abebe Bekila"}
            labeltext={"Full name"}
            type={"text"}
            id={"fullname"}
            warn
            formData={formData}
            updateFormData={updateFormData}
            correctvalue={"fullname"}
          />
          <Oneinput
            iconmyimage={email}
            placeholder={"abebe@gmail.com"}
            labeltext={"Email"}
            type={"email"}
            id={"email"}
            warn
            formData={formData}
            updateFormData={updateFormData}
            correctvalue={"email"}
          />
        </div>
        <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
          <Oneinput
            iconmyimage={key}
            placeholder={"**********"}
            labeltext={"Password"}
            type={"password"}
            id={"password"}
            warn
            showeyeicon
            formData={formData}
            updateFormData={updateFormData}
            correctvalue={"password"}
          />
          <Oneinput
            iconmyimage={key}
            placeholder={"**********"}
            labeltext={"Confirm password"}
            type={"password"}
            id={"password1"}
            warn
            formData={formData}
            updateFormData={updateFormData}
            correctvalue={"confirmpassword"}
          />
        </div>
        {/* //check box part */}
        <div className="my-4">
          {/* //<input type="checkbox" className="h-[20px] w-[20px] bg-black mt-1" /> */}
          <div className="flex items-center gap-3">
            <Checkbox />
            <span className="text-sm font-kantumruy">
              By creating an account , you agree to our{" "}
              <span className="border-b-2 border-custom-purple font-kantumruy font-semibold">
                Terms and Conditions{" "}
              </span>{" "}
              and{" "}
              <span className="border-b-2 border-custom-purple font-kantumruy font-semibold">
                Privacy Policy{" "}
              </span>{" "}
            </span>
          </div>

          {/* //for the button  */}
          <div className="text-end mt-10 ">
            <p className="text-sm font-kantumruy">
              Already got an account?{" "}
              <Link to={"/sheqlee/login"}>
                <span className="border-b-2   border-custom-purple font-kantumruy font-semibold">
                  Login
                </span>
              </Link>
              <Mybutton
                background={
                  "bg-custom-purple text-white font-semibold font-kantumruy text-xl rounded-lg py-1 md:py-2 lg:py-3 px-5 ml-5 "
                }
                closewindow={closewindow}
              >
                Register
              </Mybutton>
            </p>
          </div>
        </div>
        <Divider>or continue with google</Divider>
        <Continuewithgoogle />
      </form>
      <Qestion />
    </div>
  );
};

export default Companysignup;
