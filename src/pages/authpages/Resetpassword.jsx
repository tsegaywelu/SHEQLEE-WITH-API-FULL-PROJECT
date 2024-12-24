import React from "react";
import padlock from "../../assets/svg1/padlock.svg";
import email from "../../assets/svg1/email.svg";
import Mybutton from "../../components/basecomponents/Mybutton";
import Location from "../../components/basecomponents/Location";
import Resetpasswordcomponent from "../../components/basecomponents/Resetpasswordcomponent";
import Qestion from "../../components/basecomponents/Qestion";
const Resetpassword = () => {
  return (
    <div>
      <div>
        <Location />
      </div>
      <form
        action=""
        className="flex flex-col justify-center  items-center max-w-[600px] mx-auto mb-20  gap-y-5"
      >
        <Resetpasswordcomponent
          icon={email}
          labeltext={"Email"}
          placeholder={"abebe@gmail.com"}
          id={"email"}
          clarify={" You will receive a password reset code in your email."}
          header={"Reset password"}
          showbutton
        />
      </form>
      <Qestion />
    </div>
  );
};

export default Resetpassword;
