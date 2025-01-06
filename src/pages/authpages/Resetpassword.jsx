import React from "react";
import padlock from "../../assets/svg1/padlock.svg";
import email from "../../assets/svg1/email.svg";
import Mybutton from "../../components/basecomponents/Mybutton";
import Location from "../../components/basecomponents/Location";
import Resetpasswordcomponent from "../../components/basecomponents/Resetpasswordcomponent";
import Qestion from "../../components/basecomponents/Qestion";
import { useState } from "react";
const Resetpassword = () => {
  const [formData, setFormdata] = useState({
    email: "",
  });
  const updateFormData = (field, value) => {
    setFormdata((prevdata) => ({
      ...prevdata,
      [field]: value,
    }));
  };
  const handlesendcode = () => {
    console.log(formData.email);
  };
  return (
    <div>
      <div>
        <Location />
        {formData.email}
      </div>
      <form
        action=""
        className="flex flex-col justify-center  items-center max-w-[600px] mx-auto mb-10  gap-y-5"
      >
        <Resetpasswordcomponent
          type={"text"}
          icon={email}
          labeltext={"Email"}
          placeholder={"abebe@gmail.com"}
          id={"email"}
          clarify={" You will receive a password reset code in your email."}
          header={"Reset password"}
          showbutton
          formData={formData}
          updateFormData={updateFormData}
          code={handlesendcode}
        />
      </form>
      <Qestion />
    </div>
  );
};

export default Resetpassword;
