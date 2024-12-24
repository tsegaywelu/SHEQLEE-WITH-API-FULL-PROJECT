import React, { Children } from "react";

const Info = ({
  subscribers,
  title,
  discriptiondetail,
  cssproperty,
  rounded,
  launched,
}) => {
  return (
    <div className={cssproperty}>
      <span
        className={`flex-shrink-0 bg-black text-white text-center text-3xl md:text-4xl lg:text-6xl font-medium font-kantumruy px-3 md:px-5 lg:px-8 py-3 md:py-5 lg:py-12 ${rounded}  `}
      >
        {subscribers}
      </span>
      <span className="bg-custom-slate h-full  py-2  px-6  ">
        <h1 className=" text-xl lg:text-3xl font-medium font-kantumruy pb-2 ">
          {title}
        </h1>

        <p className="  font-kantumruy ">{discriptiondetail}</p>
        <p>{launched}</p>
      </span>
    </div>
  );
};

export default Info;
