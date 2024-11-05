import React from "react";
import Location from "../components/basecomponents/Location";
import { useParams } from "react-router-dom";
const Jobdetail = () => {
  const params = useParams();
  console.log(params.theidtodisplay);

  return (
    <div>
      <Location />
      <h1>this is the pate detail page </h1>
    </div>
  );
};

export default Jobdetail;
