import React, { useState } from "react";

function Dropdown({ categories }) {
  const [isOpen, setIsOpen] = useState(false);

  // List of categories to display

  return (
    <div className="relative inline-block text-center">
      {/* Dropdown button */}
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex justify-center w-full rounded-md  shadow-sm px-6 py-2 bg-slate-100 text-sm lg:text-xl font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Category
        <svg
          className="-mr-1 ml-2 h-5 md:h-7 w-5 md:w-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute     mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
          <div className="py-1">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="block py-2  text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
