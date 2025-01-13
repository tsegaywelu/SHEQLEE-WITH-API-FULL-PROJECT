// Company.jsx
import Tag from "../components/basecomponents/Tags";
import building from "../assets/SVG/company1.svg";
import React from "react";
import Location from "../components/basecomponents/Location";
import Dashboaredtitle from "../components/onetimecmponent/Dashboaredtitle";
const Companys = () => {
  return (
    <div>
      <div>
        <Location />
      </div>
      {/* <div className="flex flex-col items-center text-center   rounded-lg shadow-md p-3 md:p-10 mt-4 md:mt-10">
        icon
        <img src={building} height={45} width={45} />

        title
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 my-2 font-kantumruy font-medium">
          Companies on Sheqlee
        </h1>

        sub title
        <p className="text-gray-900 max-w-[500px] text-center text-sm md:text-xl font-kantumruy font-medium ">
          List of the companies on Sheqlee with their number of job posts and
          subscribers.
        </p>
      </div> */}
      <div className="mt-7 mb-5 md:mb-10 mx-4 ">
        <Dashboaredtitle
          text={
            "List of the companies on Sheqlee with their number of job posts and subscribers."
          }
          heading={"Companies on Sheqlee"}
          css={540}
        >
          <img src={building} width={50} height={50} />
        </Dashboaredtitle>
      </div>
      <Tag totalPages={15} showpagination />
    </div>
  );
};

export default Companys;
