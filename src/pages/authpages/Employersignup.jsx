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
    <>
      <div className="">
        <Location />
      </div>
      <div className="mx-7">
        {/*i am  asking  if user is freelancer */}
        <Formtitle
          building1={building1}
          profetional={profetional}
          titletext={"Professional Registration"}
          margintop={"mt-16"}
        >
          <h2 className="  text-sm md:text-base rounded-lg pl-16  h-full   w-full     font-kantumruy">
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
          <div className="flex  max-sm:flex-col  gap-4 md:gap-8 justify-center  mt-5 ">
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
              changetheicon={"p-[13.5px]"}
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
          <div className="flex  max-sm:flex-col  gap-4 md:gap-8 justify-center mt-4  md:mt-5">
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
              changetheicon={"p-[14px]"}
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
              changetheicon={"p-[14px]"}
            />
          </div>
          {/* //check box part */}
          <div className="my-4">
            <div className="flex md:items-center gap-3 mt-10">
              <Checkbox />
              <span className=" text-xs md:text-sm md:items-center font-kantumruy">
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
              <p className=" text-xs md:text-sm font-kantumruy  flex justify-between items-center md:flex-none md:justify-end ">
                <div>
                  Already got an account?{" "}
                  <Link to={"/sheqlee/login"}>
                    <span className="border-b-2   border-custom-purple font-kantumruy font-semibold">
                      Login
                    </span>
                  </Link>
                </div>
                <Mybutton
                  background={
                    "bg-custom-purple text-white font-semibold font-kantumruy text-xl rounded-lg py-2 lg:py-3 px-5 md:ml-5 "
                  }
                  closewindow={closewindow}
                >
                  Register
                </Mybutton>
              </p>
            </div>
          </div>
          <Divider>or continue with </Divider>
          <Continuewithgoogle />
        </form>
      </div>
      <Qestion />
    </>
  );
};

export default Employersignup;
