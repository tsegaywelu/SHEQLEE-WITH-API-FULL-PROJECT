import React from "react";

const Info1 = ({
  subscribers,
  title,
  discriptiondetail,
  cssproperty,
  rounded,
  launched,
  right,
  left,
}) => {
  return (
    <div className={cssproperty}>
      {/* <span
        className={`flex-shrink-0 bg-black text-white text-center text-3xl md:text-4xl lg:text-6xl font-medium font-kantumruy px-3 md:px-5 lg:px-8 py-3 md:py-5 lg:py-12 ${rounded}  `}
      >
        {subscribers}
      </span> */}
      <span
        className={`bg-black text-white text-2xl  md:text-5xl font-medium font-kantumruy w-[250px] md:w-[300px]    flex justify-center items-center overflow-hidden md:p-2 ${rounded}`}
      >
        {subscribers}
      </span>
      {right && (
        <span className="bg-custom-slate py-2  md:py-4  pl-3 md:px-6  rounded-r-2xl ">
          <h1 className=" text-[16px]  md:text-xl lg:text-3xl font-medium font-kantumruy pb-[5px] md:pb-2 ">
            {title}
          </h1>

          <p className=" text-xs md:text-lg  font-kantumruy ">
            {discriptiondetail}
          </p>
          <p className="text-xs md:text-lg">{launched}</p>
        </span>
      )}

      {left && (
        <span className="bg-custom-slate py-2  md:py-4  px-3 md:pr-6 md:pl-12 rounded-l-2xl ">
          <h1 className=" text-[16px]  md:text-xl lg:text-3xl font-medium font-kantumruy pb-[5px] md:pb-2">
            {title}
          </h1>

          <p className=" text-xs md:text-lg font-kantumruy ">
            {discriptiondetail}
          </p>
          <p className="text-xs md:text-lg">{launched}</p>
        </span>
      )}
    </div>
  );
};

export default Info1;
