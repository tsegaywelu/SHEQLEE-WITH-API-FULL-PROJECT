import React, { useState } from "react";
import dots from "../../assets/svg1/dots.svg";

const Downloadfile = ({ label, id, fileUrl, filename }) => {
  // Truncate the filename to keep it short and display extension
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

  // Handle download button click
  const handleDownload = () => {
    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = filename || "file";
      link.click();
    }
  };

  return (
    <div className="space-y-5 font-kantumruy">
      <label htmlFor={id} className="font-medium font-kantumruy">
        {label}
      </label>

      {/* Section of the displaying file name from back-end */}
      <div className="flex items-center w-fit flex-wrap border-2 bg-custom-tags border-custom-purple rounded-lg overflow-hidden">
        <span className="font-kantumruy py-1  flex-grow overflow-hidden h-full">
          {filename ? (
            <div className="px-20 py-1 font-normal font-kantumruy">
              {truncateFilename(filename) || "You Have No  File Yet!"}
            </div>
          ) : (
            <div className="px-20 py-1 font-normal font-kantumruy">
              You Have No File Yet!
            </div>
          )}
        </span>

        {/* Download button */}
        <button
          className="bg-custom-purple px-7 py-[10px] font-kantumruy font-semibold text-white h-full text-lg"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Downloadfile;
