import React from "react";
import Mybutton from "./Mybutton";
import micro from "../../assets/companysPNG/micro/micro.png";
import { Link } from "react-router-dom";
const Qestion = () => {
  return (
    <div className="bg-custom-tags flex justify-center items-center gap-x-10 py-10 ">
      <img src={micro} alt="" />
      <h1 className="font-kantumruy text-2xl font-medium">
        Are you a software developer in Ethiopia?
      </h1>
      <Link to={"/sheqlee/companysignup"}>
        <Mybutton
          background={
            " border-[2px] border-custom-purple py-3 px-3  bg-custom-purple text-white rounded-xl font-semibold font-kantumruy text-2xl"
          }
        >
          Sign Up
        </Mybutton>
      </Link>
    </div>
  );
};

export default Qestion;
