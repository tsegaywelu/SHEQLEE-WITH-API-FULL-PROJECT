import React from "react";
import Dashboaredtitle from "../../../components/onetimecmponent/Dashboaredtitle";
import { IoGridOutline } from "react-icons/io5";
const Userdashboared = () => {
  return (
    <div>
      <Dashboaredtitle
        text={"these are jobs for you based on your skill"}
        heading={"Dashboared"}
      >
        <IoGridOutline size={66} className="text-purple-600" />
      </Dashboaredtitle>
    </div>
  );
};

export default Userdashboared;
