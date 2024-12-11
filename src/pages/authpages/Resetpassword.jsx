import React from "react";
import padlock from "../../assets/svg1/padlock.svg";
import email from "../../assets/svg1/email.svg";
const Resetpassword = () => {
  return (
    <div>
      <form action="" className="">
        <div className="flex gap-5  mt-20 justify-center items-center ">
          {" "}
          <img src={padlock} />
          <h1 className="font-kantumruy font-semibold text-[35px]">
            Reset password
          </h1>
        </div>
        <div className="w-2/5 mt-5 mx-auto ">
          <label htmlFor="email" className="font-kantumruy font-medium text-xl">
            Email
          </label>
          <div className="relative ">
            <img
              src={email}
              className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-5 "
            />

            <input
              type="password"
              className="bg-custom-tags rounded-lg pl-20 h-full outline-none p-3 w-full text-xl"
              id="companyname"
              placeholder="abebe@gmail.com"
            />
          </div>
          <p className="text-xs mt-1 font-kantumruy">
            You will receive a password reset code in your email.
          </p>
          <button></button>
        </div>
      </form>
    </div>
  );
};

export default Resetpassword;
