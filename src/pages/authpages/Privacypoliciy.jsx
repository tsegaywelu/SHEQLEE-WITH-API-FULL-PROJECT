import React from "react";
import Location from "../../components/basecomponents/Location";
import Qestion from "../../components/basecomponents/Qestion";
const Privacypoliciy = () => {
  return (
    <div>
      <div>
        <Location />
      </div>
      <div className="w-[86%] mx-auto mt-10 space-y-5 mb-16 ">
        <h2 className="font-kantumruy font-semibold text-4xl">
          Privacy Policy
        </h2>
        <div className="bg-custom-tags h-screen rounded-[20px] flex justify-center items-center ">
          <h3 className="font-kantumruy text-5xl text-custom-black">
            Formatted text
          </h3>
        </div>
      </div>
      <Qestion />
    </div>
  );
};

export default Privacypoliciy;
