import React from "react";

const Sectionprofile = ({ profilepic1, buttontext }) => {
  return (
    <div className="flex flex-col gap-3 justify-end font-kantumruy  mt-3">
      <img
        src={profilepic1}
        width={10}
        height={10}
        alt=""
        className="w-60 h-30 rounded-full bg-custom-tags "
      />
      {buttontext && (
        <button className="bg-custom-purple font-medium font-kantumruy text-custom-white py-1 px-6 rounded-lg text-xl">
          {buttontext}
        </button>
      )}
      {buttontext && (
        <div className="flex flex-nowrap">
          <p className="text-xs font-kantumruy ">2 MB max | 1:1 Ratio</p>
        </div>
      )}
    </div>
  );
};

export default Sectionprofile;
