import React from "react";
import { useLocation } from "react-router-dom";
import place from "../../assets/svg1/placeholder.svg";

const Location = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);
  return (
    <div className="text-sm flex  items-center justify-start gap-3  ">
      <div className="32">
        <img src={place} width={12} height={12} />
      </div>
      {pathSegments.map((segment, index) => (
        <span key={index}>
          {segment} {index < pathSegments.length - 1 && ">"}
        </span>
      ))}
    </div>
  );
};

export default Location;
