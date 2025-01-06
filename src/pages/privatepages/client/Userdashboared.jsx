import React, { useState } from "react";
import Dashboaredtitle from "../../../components/onetimecmponent/Dashboaredtitle";
import Location from "../../../components/basecomponents/Location";
import dashboared from "../../../assets/direction/dashboard.svg";
import Mybutton from "../../../components/basecomponents/Mybutton";
import Dropdownform from "../../../components/basecomponents/Dropdownform";
import Postedjobs from "../../../components/basecomponents/Postedjobs";
import Skills from "../../../components/onetimecmponent/Skills";
import Pagination from "../../../components/basecomponents/Pagination";
const Userdashboared = () => {
  const [formData, setFormdata] = useState({
    category: "",
    type: "",
    level: "",
    tag: "",
  });

  const updateFormData = (field, value) => {
    setFormdata((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <div className="">
      <div className="">
        <Location />
        {/* {Object.entries(formData).map(([key, value]) => (
          <div className="flex justify-around" key={key}>
            {key}: {value}
          </div>
        ))} */}
      </div>
      <div className="lg:mb-5 mt-16">
        <Dashboaredtitle
          text={"These are jobs for you based on your skills."}
          heading={"Dashboard"}
          css
        >
          {/* <IoGridOutline size={66} className="text-purple-600" /> */}
          <img src={dashboared} alt="dashboared svg" width={48} height={48} />
        </Dashboaredtitle>
      </div>
      <div className="max-w-3xl mx-auto ">
        <form action="" onSubmit={(e) => e.preventDefault()} className="">
          <div className="space-y-3">
            <div className="flex  justify-between gap-5 ">
              <div className="relative   w-full flex-[1.6] ">
                <Dropdownform
                  options={["Category 1", "Category 2", "Category 3"]}
                  defaultText="All categories"
                  updateFormData={updateFormData}
                  formData={formData}
                  correctvalue2={"category"}
                />
              </div>
              <div className="relative w-full flex-1">
                <Dropdownform
                  options={["Type 1", "Type 2", "Type 3"]}
                  defaultText="All types"
                  updateFormData={updateFormData}
                  formData={formData}
                  correctvalue2={"type"}
                />
              </div>
              <div className="relative w-full flex-1">
                <Dropdownform
                  options={["Level 1", "Level 2", "Level 3"]}
                  defaultText="All levels"
                  updateFormData={updateFormData}
                  formData={formData}
                  correctvalue2={"level"}
                />
              </div>
            </div>

            <div className="flex gap-5 ">
              <div className="relative flex-[2.7] w-full">
                <div className="relative  col-span-2">
                  <Dropdownform
                    options={["Tag 1", "Tag 2", "Tag 3"]}
                    defaultText="Select tags"
                    formData={formData}
                    updateFormData={updateFormData}
                    correctvalue2={"tag"}
                  />
                </div>
              </div>

              <Mybutton background=" w-full flex-[1] bg-custom-purple rounded-lg  text-xl text-white font-semibold  font-kantumruy ">
                Apply filter
              </Mybutton>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-16">
        <Postedjobs showicon5 />
      </div>
      <div className="mx-16 my-5">
        <Pagination totalPages={15} />
      </div>
    </div>
  );
};

export default Userdashboared;
