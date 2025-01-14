import React from "react";
import handshake from "../../assets/SVG/handshake.svg";
import programmer from "../../assets/SVG/programmer.svg";
import company from "../../assets/SVG/company.svg";
const Platformstatus = () => {
  const loading = false;
  return (
    <section className="flex flex-col items-center pb-32 md:pb-16 pt-7  gap-5 ">
      <h2 className=" text-[27px] md:text-4xl  mb-6 font-medium font-kantumruy ">
        Platform stats
      </h2>
      {loading ? (
        <div className="flex flex-wrap   w-full justify-around">
          {/* for hand shake */}
          <div className="flex flex-col items-center text-center gap-5 ">
            <div>
              <img src={handshake} width={96} height={96} />
            </div>
            <h3 className="w-full h-6 bg-custom-tags  rounded-[3px]"></h3>
            <div className="w-full h-3 bg-custom-tags rounded-[7px] scale-x-150 translate-y-1 "></div>
            <p className="w-1/2  h-3 bg-custom-tags  rounded-[7px]"></p>
          </div>

          {/* for user icon  */}
          <div className="flex flex-col items-center text-center gap-5">
            <img src={programmer} width={96} height={96} />
            <h3 className="w-full h-6 bg-custom-tags  rounded-[3px]"></h3>
            <div className="w-full h-3 bg-custom-tags rounded-[7px] scale-x-150 translate-y-1"></div>
            <p className="w-1/2  h-3 bg-custom-tags  rounded-[7px]"></p>
          </div>

          {/* for the  */}
          <div className="flex flex-col items-center text-center gap-5">
            <img src={company} alt="" width={96} height={96} />
            <h3 className="w-full h-6 bg-custom-tags  rounded-[3px]"></h3>
            <div className="w-full h-3 bg-custom-tags rounded-[7px] scale-x-150 translate-y-1"></div>
            <p className="w-1/2  h-3 bg-custom-tags  rounded-[7px]"></p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap   w-full justify-evenly space-y-16 md:space-y-0">
          {/* for hand shake */}
          <div className="flex flex-col items-center text-center md:translate-y-2">
            <img
              src={handshake}
              alt="handshke svg"
              width={96}
              height={96}
              className=""
            />
            <h3 className="text-3xl font-semibold font-kantumruy mt-10  ">
              100K+
            </h3>
            <p className="font-kantumruy text-custom-black text-xl mt-4">
              Total jobs posted on <br />
              Sheqlee to date
            </p>
          </div>

          {/* for user icon  */}
          <div className="flex flex-col items-center text-center">
            <img src={programmer} alt="programer svg" width={80} height={80} />
            <h3 className="text-3xl font-semibold font-kantumruy  mt-10">
              15K+
            </h3>
            <p className="font-kantumruy text-custom-black  text-xl mt-4 ">
              Ethiopian professionals <br /> signed up so far
            </p>
          </div>

          {/* for the  */}
          <div className="flex flex-col items-center text-center">
            <img src={company} alt="company svg" width={92} height={92} />
            <h3 className="text-3xl font-semibold font-kantumruy  mt-10">
              1K+
            </h3>
            <p className="font-kantumruy text-custom-black text-xl mt-4 ">
              Korean companies <br /> posting jobs daily
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Platformstatus;
