import React from "react";
import { useLocation } from "react-router-dom";
const Location = () => {
  const { pathname } = useLocation();
  return <div className="text-sm  md:text-xl">{pathname}</div>;
};

export default Location;
