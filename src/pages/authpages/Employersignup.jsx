import React from "react";
import Location from "../../components/basecomponents/Location";
import { FaUser, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail, MdSubject } from "react-icons/md";
import Mybutton from "../../components/basecomponents/Mybutton";
import Divider from "../../components/basecomponents/Divider";
import { FcGoogle } from "react-icons/fc";
const Employersignup = () => {
  return (
    // for all the input fields i have to use components but for now lets t odo it
    <div>
      <div className="lg:mx-36">
        <Location />
      </div>

      {/*i am  asking  if user is frelancer */}
      <div className="relative  max-w-2xl  p-4  my-4 md:my-8  bg-slate-100 mx-auto">
        <FaUser
          size={48}
          className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-3"
        />
        <h2 className="  rounded-lg pl-16 h-full   w-full text-sm ">
          if you are freelancer please visite{" "}
          <Link className=" border-b-2 border-purple-400 font-bold">
            employer registaration{" "}
          </Link>{" "}
          page
        </h2>
      </div>
      {/* header part */}
      <div className="flex  flex-start  max-w-5xl mx-auto text-center gap-4">
        <FaBuilding size={48} className="bg-white text-purple-400" />{" "}
        <div>
          {" "}
          <h1 className="text-xl md:text-4xl text-center">
            Profetional Registration{" "}
          </h1>
        </div>
      </div>
      <form action="" className=" max-w-5xl mx-auto ">
        {/* below devide part */}
        <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
          <div className="flex flex-col flex-grow ">
            <label className="text-xl font-bold  m-3" htmlFor="companyname">
              full name <span className="text-red-700">*</span>
            </label>
            <div className="relative ">
              <MdSubject
                size={48}
                className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full"
              />
              <input
                type="text"
                className="bg-slate-200  rounded-lg pl-16 h-full outline-none p-3 w-full text-xl"
                id="companyname"
                placeholder="SHEQLEE co .Ltd"
              />
            </div>
          </div>
          <div className="flex flex-col flex-grow  ">
            <label className="text-xl font-bold m-3" htmlFor="email">
              your email <span className="text-red-700">*</span>
            </label>
            <div className="relative  ">
              <span className="bg-black text-white rounded-l-lg absolute  h-full  ">
                https://
              </span>
              <input
                type="email"
                id="email"
                className="bg-slate-200 rounded-lg  h-full outline-none p-3  w-full text-xl"
                placeholder="abebe@gmail.com "
              />
            </div>
          </div>
        </div>
        <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
          <div className="flex flex-col flex-grow ">
            <label className="text-xl font-bold  m-3" htmlFor="companyname">
              password <span className="text-red-700">*</span>
            </label>
            <div className="relative ">
              <MdSubject
                size={48}
                className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full"
              />
              <input
                type="text"
                className="bg-slate-200  rounded-lg pl-16 h-full outline-none p-3 w-full text-xl"
                id="companyname"
                placeholder="SHEQLEE co .Ltd"
              />
            </div>
          </div>
          <div className="flex flex-col flex-grow  ">
            <label className="text-xl font-bold m-3" htmlFor="email">
              confirm password <span className="text-red-700">*</span>
            </label>
            <div className="relative  ">
              <span className="bg-black text-white rounded-l-lg absolute  h-full  ">
                https://
              </span>
              <input
                type="email"
                id="email"
                className="bg-slate-200 rounded-lg  h-full outline-none p-3  w-full text-xl"
                placeholder="abebe@gmail.com "
              />
            </div>
          </div>
        </div>
        {/* //check box part */}
        <div className="m-4">
          <input type="checkbox" />{" "}
          <span>
            by creating an account , you agree to our{" "}
            <strong className="border-b-2 border-purple-400">
              terms and conditions{" "}
            </strong>{" "}
            and{" "}
            <strong className="border-b-2 border-purple-400">
              privacy policy{" "}
            </strong>{" "}
          </span>
          {/* //for the button  */}
          <div className="text-end mt-10 ">
            <p>
              already got an account?{" "}
              <strong className="border-b-2 border-purple-400">Login</strong>{" "}
              <Mybutton
                background={"bg-purple-400 rounded-lg p-1 md:p-2 lg:p-3 ml-5"}
              >
                Register
              </Mybutton>
            </p>
          </div>
        </div>
        <Divider>or continue with google</Divider>
        <button className="flex gap-4 bg-blue-600 p-3 rounded-lg text-xl mx-auto lg:px-5 mt-5">
          {" "}
          <FcGoogle size={24} />
          contniue with google
        </button>
      </form>
    </div>
  );
};

export default Employersignup;
