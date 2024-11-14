import React from "react";
import Dashboaredtitle from "../../../components/onetimecmponent/Dashboaredtitle";
import { IoGridOutline } from "react-icons/io5";
import Location from "../../../components/basecomponents/Location";
const Userdashboared = () => {
  return (
    <div>
      <div className="my-5">
        <Location />
      </div>
      <div className="lg:mt-10">
        <Dashboaredtitle
          text={"these are jobs for you based on your skill"}
          heading={"Dashboared"}
        >
          <IoGridOutline size={66} className="text-purple-600" />
        </Dashboaredtitle>
      </div>
      <div>
        <form action="">
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Userdashboared;
