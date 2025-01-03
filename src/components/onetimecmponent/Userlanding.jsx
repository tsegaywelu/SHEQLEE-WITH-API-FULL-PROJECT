import React from "react";
import Postedjobs from "../basecomponents/Postedjobs";
import Tags from "../basecomponents/Tags";
import Mybutton from "../basecomponents/Mybutton";
const Userlanding = () => {
  return (
    <div className="-translate-y-2 ">
      <Postedjobs showtitle />
      <div className="my-4">
        <Tags />
      </div>
      <Postedjobs />
      <div className="flex justify-center items-center  my-3 ">
        <Mybutton
          background={
            "bg-custom-purple  text-sm md:text-xl  py-1 md:py-2  px-5 md:px-10 lg:px-14 rounded-lg  text-white font-semibold font-kantumruy "
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
