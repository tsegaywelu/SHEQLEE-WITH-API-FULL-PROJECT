import React from "react";
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
const Employersignup = () => {
  return (
    // for all the input fields i have to use components but for now lets t odo it
    <div>
      <div className="">
        <Location />
      </div>

      {/*i am  asking  if user is frelancer */}
      <div className="relative  max-w-2xl  p-6  my-4 md:my-8  bg-custom-slate mx-auto mt-3">
        {/* <FaUser
          size={48}
          className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-3"
        /> */}
        <img
          src={building1}
          className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-6"
        />
        <h2 className="  rounded-lg pl-16 h-full   w-full text-lg    font-kantumruy">
          If you are an employer, please visit{" "}
          <Link
            to={"/sheqlee/companysignup"}
            className=" border-b-2 border-purple-400 font-semibold font-kantumruy"
          >
            employers registration
          </Link>{" "}
          page.
        </h2>
      </div>
      {/* header part */}
      <div className="flex  flex-start  max-w-4xl mx-auto text-center gap-7 mt-20">
        <img src={profetional} width={45} height={45} />
        <div>
          {" "}
          <h1 className="text-2xl md:text-4xl text-center font-semibold  font-kantumruy">
            Professional Registration{" "}
          </h1>
        </div>
      </div>
      <form action="" className=" max-w-4xl mx-auto ">
        {/* below devide part */}
        <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
          <Oneinput
            iconmyimage={user}
            placeholder={"Abebe Bekila"}
            labeltext={"Full name"}
            type={"text"}
            id={"fullname"}
            warn
          />
          <Oneinput
            iconmyimage={email}
            placeholder={"abebe@gmail.com"}
            labeltext={"Email"}
            type={"email"}
            id={"email"}
            warn
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
          />
          <Oneinput
            iconmyimage={key}
            placeholder={"**********"}
            labeltext={"Confirm password"}
            type={"password"}
            id={"password1"}
            warn
          />
        </div>
        {/* //check box part */}
        <div className="my-4">
          <div className="flex items-center gap-3">
            <Checkbox />
            <span className="text-sm font-kantumruy">
              by creating an account , you agree to our{" "}
              <span className="border-b-2 border-custom-purple font-kantumruy font-semibold">
                terms and conditions{" "}
              </span>{" "}
              and{" "}
              <span className="border-b-2 border-custom-purple font-kantumruy font-semibold">
                privacy policy{" "}
              </span>{" "}
            </span>
          </div>
          {/* //for the button  */}
          <div className="text-end mt-10 ">
            <p className="text-sm font-kantumruy">
              already got an account?{" "}
              <Link to={"/sheqlee/login"}>
                <span className="border-b-2   border-custom-purple font-kantumruy font-semibold">
                  Login
                </span>
              </Link>
              <Mybutton
                background={
                  "bg-custom-purple text-white font-semibold font-kantumruy text-xl rounded-lg p-1 md:p-2 lg:p-3 ml-5 "
                }
              >
                Register
              </Mybutton>
            </p>
          </div>
        </div>
        <Divider>or continue with google</Divider>
        <Continuewithgoogle />
      </form>
    </div>
  );
};

export default Employersignup;
