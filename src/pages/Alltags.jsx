import React from "react";
import Tags from "../components/basecomponents/Tags";
import tag from "../assets/SVG/tag.svg";
import Dashboaredtitle from "../components/onetimecmponent/Dashboaredtitle";
import Location from "../components/basecomponents/Location";
import Qestion from "../components/basecomponents/Qestion";

const Alltags = () => {
  return (
    <div>
      <div className="">
        <Location />
      </div>
      <div className="mt-7 mb-8  max-w-[500px] mx-auto   ">
        <div className="mx-2">
          <Dashboaredtitle
            text={
              " Job tags along with their respective number of jobs posted and  subscribers."
            }
            heading={"All Tags"}
            css
          >
            <img src={tag} width={66} height={66} />
          </Dashboaredtitle>
        </div>
      </div>
      <Tags totalPages={15} showpagination />

      <Qestion />
    </div>
  );
};

export default Alltags;
