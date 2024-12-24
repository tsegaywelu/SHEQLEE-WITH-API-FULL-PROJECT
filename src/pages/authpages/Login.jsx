import React from "react";
import Location from "../../components/basecomponents/Location";
import Mybutton from "../../components/basecomponents/Mybutton";
import Divider from "../../components/basecomponents/Divider";

import enter from "../../assets/svg1/enter.svg";
import key from "../../assets/svg1/key1.svg";
import Continuewithgoogle from "../../components/basecomponents/Continuewithgoogle";
import user from "../../assets/svg1/user.svg";
import email from "../../assets/svg1/email.svg";
import Oneinput from "../../components/basecomponents/Oneinput";
import { Link } from "react-router-dom";
import Checkbox from "../../components/basecomponents/Checkbox";
import { useDispatch } from "react-redux";
import {
  signinStart,
  signinSuccess,
  signinFailure,
} from "../../redux/user/user.slice";
const Login = () => {
  const dispatch = useDispatch();
  return (
    // for all the input fields i have to use components but for now lets to do it
    <div>
      <div className="">
        <Location />
      </div>

      {/* header part */}
      <div className="flex  flex-start  max-w-4xl mx-auto text-center gap-8 mt-5 md:mt-20">
        <img src={enter} width={45} height={45} />
        <div>
          {" "}
          <h1 className="text-xl md:text-4xl text-center font-kantumruy font-semibold">
            Login to your account
          </h1>
        </div>
      </div>
      <form action="" className=" max-w-4xl mx-auto ">
        {/* below devide part */}
        <div className="flex  max-sm:flex-col m-5 gap-8 justify-center md:mt-10">
          <Oneinput
            iconmyimage={email}
            placeholder={"abebe@gmail.com"}
            labeltext={"Email"}
            type={"email"}
            id={"email"}
          />
          <Oneinput
            iconmyimage={key}
            placeholder={"**********"}
            labeltext={"Password"}
            type={"password"}
            id={"password"}
            showeyeicon
          />
        </div>
        {/* //checkbox */}
        <div className="m-4">
          <div className="flex gap-4  items-center">
            <Checkbox />
            <span className="font-kantumruy"> remember me next time</span>
          </div>
          {/* //for the button  */}
          <div className="text-end mt-10 ">
            <p className="font-kantumruy">
              forget password?
              <Link to={"/sheqlee/resetpassword"}>
                <span className="border-b-2   border-custom-purple font-kantumruy font-semibold">
                  Reset
                </span>{" "}
              </Link>
              <Mybutton
                background={
                  "bg-custom-purple text-white text-xl font-semibold  font-kantumruy  rounded-lg py-1 md:py-2 lg:py-3 px-5 ml-5"
                }
                // onClick={handleLogin}
              >
                Login
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

export default Login;
