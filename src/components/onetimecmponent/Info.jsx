import React, { Children } from "react";

const Info = ({
  subscribers,
  title,
  discriptiondetail,
  cssproperty,
  rounded,
}) => {
  return (
    <div className={cssproperty}>
      <span
        className={`bg-black text-white text-center text-3xl md:text-4xl lg:text-6xl font-extrabold px-3 md:px-5 lg:px-8 py-3 md:py-5 lg:py-8 ${rounded}  `}
      >
        {subscribers}
      </span>
      <span className="bg-purple-50 h-full p-9 ">
        <h1 className=" text-xl lg:text-2xl font-semibold ">{title}</h1>

        <p className="text-sm">{discriptiondetail}</p>
        <p> (launched 4 years age )</p>
      </span>
    </div>
  );
};

export default Info;
