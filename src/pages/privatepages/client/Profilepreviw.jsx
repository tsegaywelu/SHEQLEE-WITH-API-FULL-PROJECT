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
import tsegay from "../../../assets/tsegay.jpg";

const Profilepreviw = () => {
  const [skills, setSkills] = useState([
    { name: "Java", level: 3 },
    { name: "Flutter", level: 3 },
    { name: "Golang", level: 5 },
  ]);
  const [mylinks, setmylinks] = useState([
    { profile: "Github", link: "https://github.com/mygithub" },
    { profile: "linkedin", link: "https://linkedin.com/mylinkedin" },
  ]);

  const history =
    "I have been working as a software developer for the last 3+ years. I have excellent experience in backend, web frontend and mobile app development. I am extremely dedicated to completing projects on time and with splendid work quality. I would be an addition to your team.";
  const name = "Muruts Yifter";
  const title = "Full-Stack Developer";

  //
  return (
    <div>
      <div>
        <Location />
      </div>
      <div className=" flex  flex-col  items-center  gap-5 justify-center my-5 md:my-10 ">
        <Dashboaredtitle css={"max-w-[550px]"} heading={"Freelancer Profile"}>
          <img src={profilesvg} alt="company svg" width={66} height={66} />
        </Dashboaredtitle>
      </div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        {/* //inputs part */}
        <div className="flex max-sm:flex-col justify-center items-start  gap-5  max-w-5xl mx-auto ">
          <div className="flex flex-col w-2/3 gap-2 relative  ">
            <Oneinputfor
              labeltext={"Full name "}
              placeholder={"Muruts Yifter"}
              icon={blackedit}
              id={"name"}
              value={name}
            />
          </div>
          <div className="flex flex-col w-2/3 gap-2 relative">
            <Oneinputfor
              labeltext={"Title "}
              placeholder={"Full-Stack Developer"}
              icon={blackedit}
              id={"title "}
              value={title}
            />
          </div>

          <Sectionprofile profilepic1={tsegay} />
        </div>
        <div>
          <div className=" my-10 max-w-5xl mx-auto font-kantumruy space-y-4">
            <label htmlFor="bio" className="font-medium text-2xl">
              Bio
            </label>
            <textarea
              id="bio"
              rows={5}
              className="bg-custom-tags rounded-[15px] p-5  w-full resize-none outline-none text-xl"
              value={history}
            ></textarea>
          </div>
        </div>
        <div className="mx-auto  max-w-5xl space-y-8 ">
          <Skillstable skills={skills} title={"Skillset"} buttons={false} />
          <Linkstabble mylinks={mylinks} title={"Profiles"} buttons={false} />
          <Uploadcv label={"CV"} />
          <div className="flex justify-end">
            <div className="  my-16 ">
              <Mybutton
                background={
                  "bg-custom-purple font-semibold font-kantumruy  text-custom-white rounded-lg p-1 md:p-2 lg:p-3"
                }
                // onClick={window.print()} but now i will use what you say gimini
              >
                <h1 className="text-2xl">Print profile </h1>
              </Mybutton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profilepreviw;
