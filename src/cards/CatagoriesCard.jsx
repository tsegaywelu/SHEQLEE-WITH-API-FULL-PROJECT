import React from "react";

const CatagoriesCard = ({ title, jobs, subscribers, icon }) => {
  return (
    <div className="flex items-center bg-gray-50 rounded-lg shadow-md p-4 ">
      {/* Icon Section */}
      <div className="w-12 h-12  bg-black text-white flex items-center justify-center rounded-md mr-4">
        {icon}
      </div>

      {/* Text Content */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">
          {jobs} jobs • {subscribers.toLocaleString()} subscribers
        </p>
      </div>
    </div>
  );
};

export default CatagoriesCard;
