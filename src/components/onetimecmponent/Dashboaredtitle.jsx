import React from "react";
const Dashboaredtitle = ({ text, children }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/* {<IoGridOutline size={66} className="text-purple-600" />} */}
      {children}
      <h2 className="text-xl md:text-4xl font-extrabold">Dashboared</h2>
      <p className="text-sm md:text-2xl max-w-[400px] text-center p-1">
        {text}
      </p>
    </div>
  );
};

export default Dashboaredtitle;
