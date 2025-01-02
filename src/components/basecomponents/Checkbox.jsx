import React, { useState } from "react";
import checkmark from "../../assets/direction/checkmark.svg";
const Checkbox = () => {
  const [showcheckmark, setshowchekmark] = useState(false);

  return (
    <div>
      <div
        role="checkbox"
        className="w-[22px] h-[22px] bg-custom-tags rounded-[3px] cursor-pointer "
        onClick={(e) => setshowchekmark(!showcheckmark)}
      >
        {showcheckmark && (
          <img
            src={checkmark}
            alt="checkmarkicon"
            className=" translate-x-1 rotate-6"
          />
        )}
      </div>
    </div>
  );
};

export default Checkbox;
