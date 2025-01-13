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
    <>
      <div>
        <Location />
      </div>
      <div className="mx-4">
        <form action="" className="w-fit mx-auto my-10  md:my-14">
          <div className=" space-y-5">
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

            <div className="flex  max-sm:flex-col gap-4  md:gap-8 justify-center   md:mt-10  sm:pr-0 md:pr-12">
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
          </div>
          <p className="text-xs md:text-[13px] font-kantumruy mt-3">
            Set a strong password to protect your account.
          </p>
          <div className="flex justify-end  md:pr-12  mt-10">
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
      </div>
      <Qestion />
    </>
  );
};

export default Interpasswordcode;
