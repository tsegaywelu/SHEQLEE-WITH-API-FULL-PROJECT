import React from "react";

const Noresult = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-16 space-y-4">
        {/* SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-purple-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M15 15c-1.5 1.5-4.5 1.5-6 0" />
          <path d="M9 9h.01M15 9h.01" />
        </svg>
        <p className="text-xl font-medium text-gray-500">No results found</p>
      </div>
    </div>
  );
};

export default Noresult;
