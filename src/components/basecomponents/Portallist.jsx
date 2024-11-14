import React from "react";
import { createPortal } from "react-dom";
const Portallist = ({ categorieslist }) => {
  return createPortal(
    <div className="absolute h-screen w-screen bg-stone-900/60">
      <div className="">
        <div className="bg-white text-center top-20 ">
          <div className="py-1">
            {categorieslist.map((category) => (
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
      </div>
    </div>,
    document.getElementById("modal2")
  );
};

export default Portallist;
