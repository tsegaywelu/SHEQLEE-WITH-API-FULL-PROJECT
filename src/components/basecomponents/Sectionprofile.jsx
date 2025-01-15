import React from "react";
import { useState } from "react";
import { useRef } from "react";
const Sectionprofile = ({ profilepic1, buttontext }) => {
  const [profilePic, setProfilePic] = useState(profilepic1);
  const fileInputRef = useRef(null);

  function handleclick() {
    fileInputRef.current.click();
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div
      className={` hidden md:flex flex-col gap-3 justify-center items-center font-kantumruy  w-40 h-40 ${
        buttontext ? "mt-10" : ""
      }`}
    >
      {/* if there is no upload image i want to set default image known us  {profilepic1} but if user upload image how to handle bothe  */}
      <img
        src={profilePic}
        alt=""
        className={`  rounded-full bg-custom-tags  overflow-clip w-[90px] h-[90px]`}
      />
      {buttontext && (
        <button
          className="bg-custom-purple font-medium font-kantumruy text-custom-white py-1 px-6 rounded-lg text-xl"
          onClick={handleclick}
        >
          {buttontext}
          {/* this is the button to upload my image */}
        </button>
      )}
      {buttontext && (
        <div className="flex flex-nowrap -translate-y-2">
          <p className="text-xs font-kantumruy ">2 MB max | 1:1 Ratio</p>
          <input
            ref={fileInputRef}
            type="file"
            id="upload-button"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </div>
      )}
    </div>
  );
};

export default Sectionprofile;
