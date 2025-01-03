import React, { useState } from "react";
import { useRef } from "react";
import dots from "../../assets/svg1/dots.svg";
const Uploadcv = ({ label, id }) => {
  // const [filename, setfilename] = useState("Resume - Muruts…2022.pdf");
  const [filename, setfilename] = useState(null);

  //this is my code to truncate the file name and its extension
  const truncateFilename = (filename, maxLength = 10) => {
    if (filename && filename.length > maxLength) {
      const extensionPart = filename.substring(filename.lastIndexOf("."));
      const namePart = filename.substring(0, filename.lastIndexOf("."));

      const truncatedName =
        namePart.substring(0, maxLength) +
        "..." +
        namePart.substring(namePart.length - 4);
      return truncatedName + extensionPart;
    }
    return filename;
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setfilename(truncateFilename(file.name));
      onUpload(file);
    } else {
      setfilename("");
    }
  };
  const fileInputRef = useRef(null);
  function handleclick() {
    fileInputRef.current.click();
  }
  return (
    <div className="space-y-5 font-kantumruy">
      <label htmlFor={id} className="font-medium font-kantumruy">
        {label}
      </label>
      {/* section for the inputs */}
      <div className="flex items-center w-fit flex-wrap border-2 border-custom-purple rounded-lg overflow-hidden ">
        <span className="font-kantumruy  py-1    bg-white flex-grow overflow-hidden  h-full ">
          {filename ? (
            <div className="px-8 py-1 font-normal font-kantumruy">
              {filename}
            </div>
          ) : (
            <div className="  flex justify-center items-baseline gap-1  px-20 pt-[17px] pb-[5px] font-normal font-kantumruy  ">
              <img src={dots} alt="" />
              <img src={dots} alt="" />
              <img src={dots} alt="" />
            </div>
          )}
        </span>
        <button
          className="bg-custom-purple px-3 py-[7px]    font-kantumruy font-semibold text-white h-full text-lg"
          onClick={handleclick}
        >
          Upload CV <span className="font-normal">[.pdf]</span>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=""
          className="hidden"
          onChange={handleFileChange}
          id={label}
        />
      </div>
    </div>
  );
};

export default Uploadcv;
