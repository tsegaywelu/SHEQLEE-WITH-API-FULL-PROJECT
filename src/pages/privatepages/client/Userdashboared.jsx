import React from "react";
import Dashboaredtitle from "../../../components/onetimecmponent/Dashboaredtitle";
import Location from "../../../components/basecomponents/Location";
import dashboared from "../../../assets/direction/dashboard.svg";
import Mybutton from "../../../components/basecomponents/Mybutton";
import Dropdownform from "../../../components/basecomponents/Dropdownform";
import Postedjobs from "../../../components/basecomponents/Postedjobs";
import Skills from "../../../components/onetimecmponent/Skills";
const Userdashboared = () => {
  return (
    <div>
      <div className="">
        <Location />
      </div>
      <div className="lg:mt-10 ">
        <Dashboaredtitle
          text={"These are jobs for you based on your skills."}
          heading={"Dashboared"}
          css
        >
          {/* <IoGridOutline size={66} className="text-purple-600" /> */}
          <img src={dashboared} alt="dashboared svg" width={66} height={66} />
        </Dashboaredtitle>
      </div>
      <div className="max-w-4xl mx-auto">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-x-5 lg:gap-y-3 mx-1 md:mx-2 lg:mx-5 text-custom-placeholder ">
            <div className="relative   ">
              <Dropdownform
                options={["Category 1", "Category 2", "Category 3"]}
                defaultText="Select categories"
              />
            </div>
            <div className="relative">
              <Dropdownform
                options={["Type 1", "Type 2", "Type 3"]}
                defaultText="Select type"
              />
            </div>
            <div className="relative">
              <Dropdownform
                options={["Level 1", "Level 2", "Level 3"]}
                defaultText="Select level"
              />
            </div>

            <div className="relative  col-span-2">
              <Dropdownform
                options={["Tag 1", "Tag 2", "Tag 3"]}
                defaultText="Select tags"
              />
            </div>

            <Mybutton background="bg-custom-purple rounded-lg  text-xl text-white font-semibold  font-kantumruy ">
              Apply filter
            </Mybutton>
          </div>
        </form>
      </div>
      <div className="mt-8">
        <Postedjobs showicon5 />
      </div>
    </div>
  );
};

export default Userdashboared;
