import React from "react";
import Tags from "../components/basecomponents/Tags";
import tag from "../assets/SVG/tag.svg";
import Dashboaredtitle from "../components/onetimecmponent/Dashboaredtitle";
import Location from "../components/basecomponents/Location";
import Qestion from "../components/basecomponents/Qestion";
import Pagination from "../components/basecomponents/Pagination";
const Alltags = () => {
  return (
    <div>
      <div className="">
        <Location />
      </div>
      <div className="mt-7 mb-8  max-w-[500px] mx-auto ">
        <Dashboaredtitle
          text={
            " Job tags along with their respective number of jobs posted and number of subscribers."
          }
          heading={"All Tags"}
          css
        >
          <img src={tag} width={66} height={66} />
        </Dashboaredtitle>
      </div>
      <Tags />

      <div className="mx-16">
        <Pagination totalPages={15} />
      </div>
      <Qestion />
    </div>
  );
};

export default Alltags;
