import React from "react";
const Dashboaredtitle = ({ text, children, heading, css }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      {/* {<IoGridOutline size={66} className="text-purple-600" />} */}
      {children}
      <h2 className="text-xl md:text-5xl font-semibold font-kantumruy">
        {heading}
      </h2>
      <p
        className={`  text-sm  md:text-xl   text-center p-1  font-kantumruy ${
          css ? "max-w-[550px]" : "max-w-[400px]"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Dashboaredtitle;
