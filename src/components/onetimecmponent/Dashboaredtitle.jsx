import React from "react";
const Dashboaredtitle = ({ text, children, heading, css }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 ">
      {/* {<IoGridOutline size={66} className="text-purple-600" />} */}
      {children}
      <h2 className="text-xl md:text-4xl font-semibold font-kantumruy mt-3">
        {heading}
      </h2>
      <p
        className={`    md:text-[22px]  text-center   font-kantumruy `}
        style={css ? { maxWidth: `${css}px` } : { maxWidth: "400px" }}
      >
        {text}
      </p>
    </div>
  );
};

export default Dashboaredtitle;
