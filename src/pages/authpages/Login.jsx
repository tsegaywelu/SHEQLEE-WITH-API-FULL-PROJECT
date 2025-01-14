import React, { useState } from "react";
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
import Qestion from "../../components/basecomponents/Qestion";
const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const updateFormData = (field, value) => {
    setFormdata((prevdata) => ({
      ...prevdata,
      [field]: value,
    }));
  };
  const closewindow = () => {
    console.table(formData);
    //lets send here the user email as user type

    dispatch(
      signinSuccess({
        role: formData.email,
        id: 1,
        name: "Test User",
        email: "test@example.com",
      })
    );
  };
  return (
    // for all the input fields i have to use components but for now lets to do it
    <div>
      <div className="">
        <Location />
      </div>

      {/* header part */}
      <div className="flex  flex-col items-center  md:flex-row md:flex-start  max-w-4xl mx-auto text-center  gap-4 md:gap-12 mt-10 md:mt-20">
        <img
          src={enter}
          className="w-[40px] h-[40px] md:w-[45px] md:h-[45px]"
        />
        <div>
          {" "}
          <h1 className="text-[22px] md:text-4xl text-center font-kantumruy font-semibold">
            Login to your account
          </h1>
        </div>
      </div>
      <form
        action=""
        className=" max-w-4xl mx-auto "
        onSubmit={(e) => e.preventDefault()}
      >
        {/* below devide part */}
        <div className="flex  max-sm:flex-col  m-5 md:m-2  gap-4 md:gap-8 justify-center mt-4 md:mt-5">
          <Oneinput
            iconmyimage={email}
            placeholder={"abebe@gmail.com"}
            labeltext={"Email"}
            type={"email"}
            id={"email"}
            formData={formData}
            updateFormData={updateFormData}
            correctvalue={"email"}
            changetheicon={"p-[15px]"}
          />
          <Oneinput
            iconmyimage={key}
            placeholder={"**********"}
            labeltext={"Password"}
            type={"password"}
            id={"password"}
            showeyeicon
            formData={formData}
            updateFormData={updateFormData}
            correctvalue={"password"}
            changetheicon={"p-[14px]"}
          />
        </div>
        {/* //checkbox */}
        <div className="m-5 md:mt-4 md:m-2">
          <div className="flex gap-4  items-center">
            <Checkbox />
            <span className=" text-sm md:text-base font-kantumruy">
              {" "}
              Remember me next time
            </span>
          </div>
          {/* //for the button  */}
          <div className="text-end mt-10 text-sm md:text-base ">
            <p className="font-kantumruy">
              Forget password?
              <Link to={"/sheqlee/reset password"}>
                <span className="pb-1 border-b-2   border-custom-purple font-kantumruy font-semibold ml-2 ">
                  Reset
                </span>{" "}
              </Link>
              <Mybutton
                background={
                  "bg-custom-purple text-white text-lg  md:text-xl font-medium  font-kantumruy  rounded-lg py-2 lg:py-3 px-6 ml-5"
                }
                closewindow={closewindow}
              >
                Login
              </Mybutton>
            </p>
          </div>
        </div>
        <Divider>or continue with </Divider>
        <Continuewithgoogle />
      </form>
      <Qestion />
    </div>
  );
};

export default Login;
