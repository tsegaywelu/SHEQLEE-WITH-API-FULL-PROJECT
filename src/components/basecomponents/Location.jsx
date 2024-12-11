import React from "react";
import { useLocation } from "react-router-dom";
import place from "../../assets/svg1/placeholder.svg";
import greater from "../../assets/SVG/greater.svg";
const Location = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);
  return (
    <div className=" flex  items-center justify-start gap-3  font-kantumruy text-black bg-custom-location">
      <div className="32">
        <img src={place} width={12} height={12} />
      </div>
      {pathSegments.map((segment, index) => (
        <span key={index} className="flex justify-center items-center">
          {segment}{" "}
          {index < pathSegments.length - 1 && (
            <img src={greater} width={4} height={4} className="ml-3" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Location;
