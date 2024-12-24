import React from "react";
import { useLocation } from "react-router-dom";
import place from "../../assets/svg1/placeholder.svg";
import greater from "../../assets/SVG/greater.svg";
const Location = ({ Lost }) => {
  let { pathname } = useLocation();
  if (Lost) {
    pathname = "sheqlee/Page Not Found";
  }
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="  font-kantumruy text-black bg-custom-location py-1">
      <div className="mx-20 flex  items-center justify-start gap-3 py-1">
        <div className="ml-24">
          <img src={place} width={12} height={12} />
        </div>
        {pathSegments.map((segment, index) => (
          <span key={index} className="flex justify-center items-center">
            {decodeURIComponent(segment.replace(/%20/g, " "))}

            {index < pathSegments.length - 1 && (
              <img src={greater} width={6} height={6} className="ml-3" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Location;
