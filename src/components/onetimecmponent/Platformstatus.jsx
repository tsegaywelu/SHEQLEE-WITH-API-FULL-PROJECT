import React from "react";
import handshake from "../../assets/SVG/handshake.svg";
import programmer from "../../assets/SVG/programmer.svg";
import company from "../../assets/SVG/company.svg";
const Platformstatus = () => {
  const loading = true;
  return (
    <section className="flex flex-col items-center py-10  ">
      <h2 className="text-xl md:text-3xl font-bold mb-6">Platform status</h2>
      {loading ? (
        <div className="flex flex-wrap   w-full justify-around">
          {/* for hand shake */}
          <div className="flex flex-col items-center text-center gap-5 ">
            <img src={handshake} alt="" />
            <h3 className="w-2/3 h-5 bg-custom-tags  rounded-lg"></h3>
            <div className="w-full h-3 bg-custom-tags rounded-lg"></div>
            <p className="w-1/3  h-3 bg-custom-tags  rounded-lg"></p>
          </div>

          {/* for user icon  */}
          <div className="flex flex-col items-center text-center gap-5">
            <img src={programmer} alt="" />
            <h3 className="w-2/3 h-5 bg-custom-tags  rounded-lg"></h3>
            <div className="w-full h-3 bg-custom-tags rounded-lg"></div>
            <p className="w-1/3  h-3 bg-custom-tags  rounded-lg"></p>
          </div>

          {/* for the  */}
          <div className="flex flex-col items-center text-center gap-5">
            <img src={company} alt="" />
            <h3 className="w-2/3 h-5 bg-custom-tags  rounded-lg"></h3>
            <div className="w-full h-3 bg-custom-tags rounded-lg"></div>
            <p className="w-1/3  h-3 bg-custom-tags  rounded-lg"></p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap   w-full justify-around">
          {/* for hand shake */}
          <div className="flex flex-col items-center text-center">
            <img src={handshake} alt="" />
            <h3 className="text-2xl font-semibold mt-5">100K+</h3>
            <p className="text-gray-600  text-xl mt-5">
              Total jobs posted on <br />
              Sheqlee to date
            </p>
          </div>

          {/* for user icon  */}
          <div className="flex flex-col items-center text-center">
            <img src={programmer} alt="" />
            <h3 className="text-2xl font-semibold mt-5">15K+</h3>
            <p className="text-gray-600  text-xl mt-5 ">
              Ethiopian professionals <br /> signed up so far
            </p>
          </div>

          {/* for the  */}
          <div className="flex flex-col items-center text-center">
            <img src={company} alt="" />
            <h3 className="text-2xl font-semibold mt-5">1K+</h3>
            <p className="text-gray-600  text-xl mt-5 ">
              Korean companies <br /> posting jobs daily
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Platformstatus;
