import React from "react";

const Sectionprofile = ({ profilepic1, buttontext }) => {
  return (
    <div className="flex flex-col gap-3 justify-end font-kantumruy  mt-8">
      <img
        src={profilepic1}
        width={10}
        height={10}
        alt=""
        className="w-20 h-20 rounded-full bg-custom-tags "
      />
      <button className="bg-custom-purple font-medium font-kantumruy text-custom-white py-1 px-6 rounded-lg text-xl">
        {buttontext}
      </button>
      <div className="flex flex-nowrap">
        <p className="text-xs font-kantumruy ">2 MB max | 1:1 Ratio</p>
      </div>
    </div>
  );
};

export default Sectionprofile;
