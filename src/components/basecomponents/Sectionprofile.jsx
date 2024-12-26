import React from "react";

const Sectionprofile = ({ profilepic1, buttontext }) => {
  return (
    <div className="flex flex-col gap-1  justify-center font-kantumruy  w-40 h-40  ">
      <img
        src={profilepic1}
        alt=""
        className={` ${
          profilepic1 ? "" : p - 6
        } object-cover rounded-full bg-custom-tags `}
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
