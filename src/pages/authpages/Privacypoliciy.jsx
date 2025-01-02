import React from "react";
import Location from "../../components/basecomponents/Location";
import Qestion from "../../components/basecomponents/Qestion";
const PrivacyPolicy = () => {
  return (
    <div>
      <div>
        <Location />
      </div>
      <div className="w-[80%] mx-auto mt-10 space-y-5 mb-16 ">
        <h2 className="font-kantumruy font-semibold text-4xl mt-5">
          Privacy Policy
        </h2>
        <div className="bg-custom-tags h-[150vh] rounded-[20px] flex justify-center items-center ">
          <h3 className="font-kantumruy text-5xl text-custom-black ">
            Formatted text
          </h3>
        </div>
      </div>
      <Qestion />
    </div>
  );
};

export default PrivacyPolicy;
