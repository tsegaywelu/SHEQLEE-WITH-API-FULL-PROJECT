import React, { useState } from "react";
import Location from "../../components/basecomponents/Location";
import { FaUser, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail, MdSubject } from "react-icons/md";
import Mybutton from "../../components/basecomponents/Mybutton";
import Divider from "../../components/basecomponents/Divider";
import { FcGoogle } from "react-icons/fc";
import building1 from "../../assets/svg1/company.svg";
import building from "../../assets/SVG/company.svg";
import profetional from "../../assets/svg1/professional1.svg";
import user from "../../assets/svg1/user.svg";
import email from "../../assets/svg1/email.svg";
import key from "../../assets/svg1/key1.svg";
import google from "../../assets/SVG/google.svg";
import Oneinput from "../../components/basecomponents/Oneinput";
import Continuewithgoogle from "../../components/basecomponents/Continuewithgoogle";
import Checkbox from "../../components/basecomponents/Checkbox";
import Qestion from "../../components/basecomponents/Qestion";
import Formtitle from "../../components/basecomponents/Formtitle";
const Employersignup = () => {
  const [formData, setFormData] = useState({
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
    <div>
      <div className="">
        <Location />
      </div>

      {/*i am  asking  if user is freelancer */}
      <Formtitle
        building1={building1}
        profetional={profetional}
        titletext={"Professional Registration"}
        margintop={"mt-20"}
      >
        <h2 className="  rounded-lg pl-16  h-full   w-full     font-kantumruy">
          If you are an employer, please visit{" "}
          <Link
            to={"/sheqlee/company signup"}
            className=" border-b-2 border-custom-purple font-semibold font-kantumruy pb-[2px]"
          >
            employers registration
          </Link>{" "}
          page.
        </h2>
      </Formtitle>

      {/* ????????????????????????????????????????? */}
      <form
        action=""
        className=" max-w-4xl mx-auto "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
        <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-5">
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
          <div className="flex items-center gap-3 mt-10">
            <Checkbox />
            <span className="text-sm font-kantumruy">
              by creating an account, you agree to our{" "}
              <span className="pb-1 border-b-2 border-custom-purple font-kantumruy font-semibold">
                Terms and Conditions{" "}
              </span>{" "}
              and{" "}
              <span className="pb-1 border-b-2 border-custom-purple font-kantumruy font-semibold">
                Privacy Policy.{" "}
              </span>{" "}
            </span>
          </div>
          {/* //for the button  */}
          <div className="text-end mt-10 ">
            <p className="text-sm font-kantumruy">
              Already got an account?{" "}
              <Link to={"/sheqlee/login"}>
                <span className="pb-1 border-b-2   border-custom-purple font-kantumruy font-semibold">
                  Login
                </span>
              </Link>
              <Mybutton
                background={
                  "bg-custom-purple text-white font-semibold font-kantumruy text-xl rounded-lg p-1 md:p-2 lg:p-3 ml-5 "
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

export default Employersignup;
