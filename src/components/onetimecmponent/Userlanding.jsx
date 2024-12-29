import React from "react";
import Postedjobs from "../basecomponents/Postedjobs";
import Tags from "../basecomponents/Tags";
import Mybutton from "../basecomponents/Mybutton";
const Userlanding = () => {
  return (
    <div className="-translate-y-14 my-4">
      <Postedjobs showtitle />
      <Tags />
      <Postedjobs />
      <div className="flex justify-center items-center  ">
        <Mybutton
          background={
            "bg-custom-purple  text-sm md:text-xl lg:text-2xl py-1 md:py-2 lg:py-3 px-5 md:px-10 lg:px-14 rounded-lg  text-white font-semibold font-kantumruy "
          }
        >
          {" "}
          View all job posts
        </Mybutton>
      </div>
    </div>
  );
};

export default Userlanding;
