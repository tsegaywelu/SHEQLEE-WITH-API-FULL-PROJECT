import React, { Children } from "react";

const Info = ({ subscribers, title, discriptiondetail, cssproperty }) => {
  return (
    <div className={cssproperty}>
      <span className="bg-black text-white text-center text-4xl md:text-5xl lg:text-7xl font-extrabold px-6 md:px-10 lg:px-16 py-6 md:py-10 lg:py-16 rounded-l-xl  h-full">
        {subscribers}
      </span>
      <span className="bg-purple-50 h-full p-9 ">
        <h1 className="text-3xl font-semibold">{title}</h1>

        {discriptiondetail}
        <p> (launched 4 years age )</p>
      </span>
    </div>
  );
};

export default Info;
