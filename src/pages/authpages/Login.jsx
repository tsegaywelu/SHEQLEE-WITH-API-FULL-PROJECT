import React from "react";
import Location from "../../components/basecomponents/Location";
import Mybutton from "../../components/basecomponents/Mybutton";
import Divider from "../../components/basecomponents/Divider";
import { FcGoogle } from "react-icons/fc";
import enter from "../../assets/svg1/enter.svg";
import email from "../../assets/svg1/email.svg";
import key from "../../assets/svg1/key1.svg";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   signinStart,
//   signinSuccess,
//   signinFailure,
// } from "../../redux/user/user.slice";

// "../redux/user/user.slice";
const Login = () => {
  // const dispatch = useDispatch();
  // const handleLogin = () => {
  //   dispatch(signinStart());
  //   try {
  //     // i will call api here
  //     const user = { id: 1, name: "" }; // i will replace with actual data from back-end
  //     dispatch(signinSuccess(user));
  //   } catch (error) {
  //     dispatch(signinFailure("Login failed"));
  //   }
  // };
  return (
    // for all the input fields i have to use components but for now lets t odo it
    <div>
      <div className="lg:mx-36">
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
          <div className="flex flex-col flex-grow ">
            <label className="text-xl font-bold  m-3" htmlFor="subject">
              email <span className="text-red-600">*</span>
            </label>
            <div className="relative ">
              <img
                src={email}
                className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-5 "
              />
              <input
                type="text"
                className="bg-custom-tags  rounded-lg pl-16 h-full outline-none p-3 w-full text-xl"
                id="subject"
                placeholder="regarding post a job "
              />
            </div>
          </div>
          <div className="flex flex-col flex-grow  ">
            <label
              className="text-xl font-bold m-3 font-kantumruy"
              htmlFor="email"
            >
              password <span className="text-red-500">*</span>
            </label>
            <div className="relative ">
              <img
                src={key}
                className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-5 "
              />
              <input
                type="email"
                id="email"
                className="bg-custom-tags  rounded-lg pl-20 h-full outline-none p-3  w-full text-xl"
                placeholder="abebe@gmail.com "
              />
            </div>
          </div>
        </div>
        {/* //checkbox */}
        <div className="m-4">
          <input type="checkbox" checked /> <span>remember me next time</span>
          {/* //for the button  */}
          <div className="text-end mt-10 ">
            <p className="font-kantumruy">
              forget password?
              <strong className="border-b-2 border-purple-400">
                Reset
              </strong>{" "}
              <Mybutton
                background={
                  "bg-custom-purple text-white text-2xl font-semibold  font-kantumruy rounded-lg py-1 md:py-2 lg:py-3 px-5 ml-5"
                }
                // onClick={handleLogin}
              >
                Login
              </Mybutton>
            </p>
          </div>
        </div>
        <Divider>or continue with google</Divider>
        <button className="flex gap-4 bg-blue-600 p-3 rounded-lg text-xl mx-auto lg:px-5 mt-5 font-kantumruy text-white font-semibold">
          {" "}
          <FcGoogle size={24} />
          contniue with google
        </button>
      </form>
    </div>
  );
};

export default Login;
