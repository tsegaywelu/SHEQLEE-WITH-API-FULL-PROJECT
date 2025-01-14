import React, { useState } from "react";
import Oneinputfor from "./Oneinputfor";
import blackedit from "../../assets/direction/editblack.svg";
import Mybutton from "./Mybutton";
import Divider from "./Divider";
//pass the id label and all props from user parent component
const Inputs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const updateFormData = (field, value) => {
    setFormData((prevdata) => ({
      ...prevdata,
      [field]: value,
    }));
  };
  console.table(formData);
  return (
    <div>
      <div className="">
        {/* // i have to edit this one now  */}
        <div className=" mx-5 md:mx-16 lg:mx-48 ">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="flex  max-sm:flex-col  gap-4 md:gap-8 justify-center  mt-10">
              <div className="flex flex-col flex-grow relative ">
                <Oneinputfor
                  labeltext={"Full name"}
                  warn
                  placeholder={"Muruts Yifter"}
                  icon={blackedit}
                  id={"name"}
                  formData={formData}
                  updateFormData={updateFormData}
                  correctvalue="fullName"
                />
              </div>
              <div className="flex flex-col flex-grow  relative ">
                <Oneinputfor
                  labeltext={"Email"}
                  warn
                  placeholder={"muruts.yifter@gmail.com"}
                  icon={blackedit}
                  id={"email"}
                  formData={formData}
                  updateFormData={updateFormData}
                  correctvalue="email"
                />
              </div>
            </div>
            <div className="flex  max-sm:flex-col  gap-4 md:gap-8 justify-center  mt-4 md:mt-5">
              <div className="flex flex-col flex-grow relative ">
                <Oneinputfor
                  labeltext={"Password"}
                  warn
                  placeholder={"*************"}
                  icon={blackedit}
                  id={"password"}
                  formData={formData}
                  updateFormData={updateFormData}
                  correctvalue="password"
                />
              </div>
              <div className="flex flex-col flex-grow relative  ">
                <Oneinputfor
                  labeltext={"Confirm password"}
                  warn
                  placeholder={"*************"}
                  icon={blackedit}
                  id={"confirmpassword"}
                  formData={formData}
                  updateFormData={updateFormData}
                  correctvalue="confirmPassword"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="ml-4 mr-4  md:mx-16 lg:mx-48 my-3">
          <p className="text-start  font-kantumruy text-[11px] md:text-xs">
            Leave this empty if you don't want to change your password.{" "}
          </p>
        </div>
      </div>
      {/* //butto section  */}
      <div className=" mt-10 mx-4 md:mx-12 lg:mx-52">
        <div className="flex justify-end  ">
          <Mybutton
            background={
              "bg-custom-purple font-kantumruy rounded-lg p-2 px-4 lg:py-3 lg:px-8  text-lg md:text-2xl font-medium text-custom-white"
            }
          >
            Update setting
          </Mybutton>
        </div>
      </div>
      {/* dvider part */}
      <div className="  mx-5 md:mx-16 lg:mx-48">
        <Divider></Divider>
      </div>
    </div>
  );
};

export default Inputs;
