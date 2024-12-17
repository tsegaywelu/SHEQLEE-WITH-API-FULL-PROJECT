import React from "react";
import mysvg from "../../assets/SVG/logo.svg";
import apple from "../../assets/companysPNG/apple/apple.png";
import microsoft from "../../assets/companysPNG/microsoft/microsoft.png";
import meta from "../../assets/companysPNG/meta/meta.png";
import google from "../../assets/companysPNG/google/google.png";

const Trusted = () => {
  return (
    <div className="bg-custom-tags  flex  flex-col justify-center items-center py-3 space-y-3">
      <div>
        <h2 className="font-kantumruy font-medium text-[50px]">Trusted by</h2>
      </div>
      <div className=" flex justify-center items-center gap-20">
        <img src={google} alt="" />
        <img src={meta} alt="" />
        <img src={microsoft} alt="" />
        <img src={apple} alt="" />
      </div>
    </div>
  );
};

export default Trusted;
