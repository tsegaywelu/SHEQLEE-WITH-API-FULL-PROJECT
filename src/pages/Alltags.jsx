import React from "react";
import Tags from "../components/basecomponents/Tags";
import tag from "../assets/SVG/tag.svg";
import Dashboaredtitle from "../components/onetimecmponent/Dashboaredtitle";
import Location from "../components/basecomponents/Location";
const Alltags = () => {
  return (
    <div>
      <div className="ml-20">
        <Location />
      </div>
      <div className="mt-7">
        <Dashboaredtitle
          text={
            " Job tags along with their respective number of jobs posted and number of subscribers."
          }
          heading={"All Tags"}
          css
        >
          <img src={tag} />
        </Dashboaredtitle>
      </div>
      <Tags />

      <h1>pagination part </h1>
    </div>
  );
};

export default Alltags;
