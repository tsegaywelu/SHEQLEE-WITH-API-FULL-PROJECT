import React from "react";
import { useLocation } from "react-router-dom";
const Location = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);
  return (
    <div className="text-sm  ">
      {pathSegments.map((segment, index) => (
        <span key={index}>
          {segment} {index < pathSegments.length - 1 && ">"}
        </span>
      ))}
    </div>
  );
};

export default Location;
