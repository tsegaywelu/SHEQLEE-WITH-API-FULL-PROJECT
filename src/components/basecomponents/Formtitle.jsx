import React from "react";

const Formtitle = ({
  children,
  building1,
  profetional,
  titletext,
  margintop,
}) => {
  return (
    <>
      <div className="relative  max-w-[620px]   py-3 md:p-6   md:my-7  bg-custom-slate mx-auto mt-7 rounded-r-[10px] ">
        <img
          src={building1}
          className="bg-black w-[50px] md:w-[70px] text-white rounded-l-[10px] absolute left-0 top-0  h-full p-4 md:p-6"
        />
        {children}
      </div>
      {/* header part */}
      {titletext && (
        <div
          className={`flex  flex-col md:flex-row  md:flex-start  items-center max-w-4xl mx-auto text-center gap-3 md:gap-7 mt-10  md:${margintop}`}
        >
          <img src={profetional} width={40} height={40} />
          <div>
            {" "}
            <h1 className="text-2xl md:text-4xl text-center font-semibold  font-kantumruy">
              {titletext}
            </h1>
          </div>
        </div>
      )}
    </>
  );
};
export default Formtitle;
