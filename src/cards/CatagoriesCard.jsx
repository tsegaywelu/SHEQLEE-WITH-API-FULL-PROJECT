import React from "react";

const CatagoriesCard = ({ title, jobs, subscribers, children }) => {
  return (
    <div className="flex items-center bg-gray-50 rounded-lg shadow-md   ">
      {/* Icon Section */}
      <div className="w-20 h-20 bg-black text-white flex items-center justify-center rounded-l-md mr-4 ">
        {children}
      </div>

      {/* Text Content */}
      <div>
        <div className="  ">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 mt-3">
            {jobs} jobs • {subscribers.toLocaleString()} subscribers
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatagoriesCard;
