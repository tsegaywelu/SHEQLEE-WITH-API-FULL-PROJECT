import React, { useState } from "react";
import padlock from "../../assets/svg1/padlock.svg";
import code from "../../assets/svg1/code.svg";
import Mybutton from "../../components/basecomponents/Mybutton";
import Location from "../../components/basecomponents/Location";
import Resetpasswordcomponent from "../../components/basecomponents/Resetpasswordcomponent";
import Oneinput from "../../components/basecomponents/Oneinput";
import key from "../../assets/svg1/key1.svg";
import Qestion from "../../components/basecomponents/Qestion";
const Interpasswordcode = () => {
  const [formData, setFormdata] = useState({
    code: "12345",
    newpassword: "",
    confirmpassword: "",
  });
  const updateFormData = (field, value) => {
    setFormdata((prevdata) => ({
      ...prevdata,
      [field]: value,
    }));
  };
  const handlevalues = (e) => {
    e.preventDefault();
    console.table(formData);
  };
  return (
    <div>
      <div>
        <Location />
      </div>
      <form action="" className="w-fit mx-auto my-10">
        <div className="">
          <Resetpasswordcomponent
            icon={code}
            labeltext={"Enter code"}
            placeholder={"123456"}
            id={"code"}
            clarify={" Get a reset code from your email and input it above."}
            header={"Set new password"}
            formData={formData}
            updateFormData={updateFormData}
          />

          <div className="flex  max-sm:flex-col  gap-8 justify-center   md:mt-10  sm:pr-0 md:pr-12">
            <Oneinput
              iconmyimage={key}
              placeholder={"**********"}
              labeltext={"New Password"}
              type={"password"}
              id={"password"}
              formData={formData}
              updateFormData={updateFormData}
              correctvalue={"newpassword"}
            />

            <Oneinput
              iconmyimage={key}
              placeholder={"**********"}
              labeltext={"Confirm password"}
              type={"password"}
              id={"password1"}
              showeyeicon
              formData={formData}
              updateFormData={updateFormData}
              correctvalue={"confirmpassword"}
            />
          </div>
          <p className="text-sm font-kantumruy py-3">
            Set a strong password to protect your account.
          </p>
        </div>
        <div className="flex justify-end  pr-12 ">
          <Mybutton
            background={
              "bg-custom-purple text-white text-xl font-semibold  font-kantumruy  rounded-lg py-2 md:py-3 px-5 ml-5 "
            }
            closewindow={handlevalues}
          >
            Reset password
          </Mybutton>
        </div>
      </form>
      <Qestion />
    </div>
  );
};

export default Interpasswordcode;
