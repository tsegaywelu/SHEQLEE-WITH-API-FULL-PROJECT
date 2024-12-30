import React from "react";
import Location from "../../../components/basecomponents/Location";
import profilesvg from "../../../assets/direction/profilesvg.svg";
import Dashboaredtitle from "../../../components/onetimecmponent/Dashboaredtitle";
import profilepic1 from "../../../assets/direction/settings - alt2/profile.png";
import blackedit from "../../../assets/direction/editblack.svg";
import Oneinputfor from "../../../components/basecomponents/Oneinputfor";
import Sectionprofile from "../../../components/basecomponents/Sectionprofile";
import Reatchtext from "../../../components/basecomponents/Reatchtext";
import Skillstable from "../../../components/onetimecmponent/Skills";
import { useState } from "react";
import Linkstabble from "../../../components/onetimecmponent/Linkstabble";
import Uploadcv from "../../../components/onetimecmponent/Uploadcv";
import Mybutton from "../../../components/basecomponents/Mybutton";
import Divider from "../../../components/basecomponents/Divider";
const Userprofile = () => {
  const [formData, setFormdata] = useState({
    skillName: "",
    skillLevel: "",
    linkName: "",
    URL: "",
  });
  const updateFormData = (field, value) => {
    setFormdata((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const [skills, setSkills] = useState([
    { name: "Java", level: 3 },
    { name: "Flutter", level: 3 },
    { name: "Golang", level: 5 },
  ]);
  const [mylinks, setmylinks] = useState([
    { profile: "Github", link: "https://github.com/mygithub" },
    { profile: "linkedin", link: "https://linkedin.com/mylinkedin" },
  ]);

  return (
    <div>
      <div>
        <Location />
        {Object.entries(formData).map(([key, value]) => (
          <div className="flex justify-around" key={key}>
            {key}: {value}
          </div>
        ))}
      </div>
      <div className=" flex  flex-col  items-center  gap-5 justify-center my-5 md:my-10 ">
        <Dashboaredtitle
          text={
            " The more complete your profile, the easier for companies to select you for jobs."
          }
          css={"max-w-[550px]"}
          heading={"Edit Profile"}
        >
          <img src={profilesvg} alt="company svg" width={66} height={66} />
        </Dashboaredtitle>
      </div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        {/* //inputs part */}
        <div className="flex max-sm:flex-col justify-center items-start  gap-5  max-w-5xl mx-auto ">
          <div className="flex flex-col w-2/3 gap-2 relative  ">
            <Oneinputfor
              labeltext={"Full name "}
              warn
              placeholder={"Muruts Yifter"}
              icon={blackedit}
              id={"name"}
            />
          </div>
          <div className="flex flex-col w-2/3 gap-2 relative">
            <Oneinputfor
              labeltext={"Title "}
              warn
              placeholder={"Full-Stack Developer"}
              icon={blackedit}
              id={"title "}
            />
          </div>

          <Sectionprofile profilepic1={profilepic1} buttontext={"upload"} />
        </div>
        <div>
          <div className=" -translate-y-8 max-w-5xl mx-auto">
            <Reatchtext
              showtext={"Introduce yourself"}
              placeholder={"Say something appealing about yourself..."}
            />
          </div>
        </div>
        <div className="mx-auto  max-w-5xl ">
          <Skillstable
            skills={skills}
            title={"Your skills"}
            subtitle={
              " Adding your skills will help us make job suggestions more accurately."
            }
            buttons
            updateFormData={updateFormData}
            formData={formData}
          />
          <Linkstabble
            mylinks={mylinks}
            title={"Your profiles"}
            subtitle={
              "Adding your links to your profiles make more credible. Profiles could be GitHub, LinkedIn etc."
            }
            buttons
            updateFormData={updateFormData}
            formData={formData}
          />

          <Uploadcv
            label={
              <div className="font-kantumruy space-y-1">
                <h1 className="font-medium">
                  Your CV ( <span className="text-red-600">*</span>.pdf)
                </h1>
                <p className="text-sm font-normal">
                  Adding your CV will help us to know you in details and suggest
                  you to companies.
                </p>
              </div>
            }
          />

          <div className="flex justify-end  mt-10 ">
            <Mybutton
              background={
                "bg-custom-purple font-semibold font-kantumruy  text-custom-white rounded-lg p-1 md:p-2 lg:py-3 lg:px-6"
              }
            >
              <h1 className="text-2xl">Update profile </h1>
            </Mybutton>
          </div>
          <div className=" max-w-5xl  mx-auto mb-10">
            <Divider></Divider>
            <span className="block font-kantumruy text-start mt-3 ">
              <span className="text-red-600">*</span> fields are required.{" "}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Userprofile;
