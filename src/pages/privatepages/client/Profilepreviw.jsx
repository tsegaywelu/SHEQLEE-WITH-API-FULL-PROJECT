import React, { useRef } from "react";
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
import PrintProfileComponent from "./PrintProfileComponent";

const Profilepreviw = () => {
  const handlePrint = () => {
    const printWindow = window.open("", "_blank"); // Open a new window/tab
    printWindow.document.write(
      "<!DOCTYPE html><html><head><title>Print</title>"
    );
    printWindow.document.write(
      "<style>@page { size: auto; margin: 0mm; }</style>"
    ); // Important for full page printing
    printWindow.document.write("</head><body>");
    printWindow.document.write(
      document.getElementById("print-content").innerHTML
    ); // Write the print component's HTML
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
    printWindow.close(); // Close the print window after printing
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

  const history =
    "Dedicated and efficient full-stack developer, with 3+ years of experience in application layers, presentation layers and database. Certified both in F/E and B/E technologies. Spearheaded transition from LAMP to MEAN which cut latency by 40% and increased effectiveness of database administration by 20%. Seeking to further improve HTML5 and CSS3 skills as the future full-stack developer at KeplerLab.";
  const name = "Tsegay Welu";
  const title = "Full-Stack Web Developer";

  //  thisi   printable page

  return (
    <div className="">
      <div>
        <Location />
      </div>
      <div className="">
        {/* //this component is hidden because it is shown only at the time of print  */}
        {/* <PrintProfileComponent
          name={name}
          title={title}
          mylinks={mylinks}
          skills={skills}
          history={history}
        /> */}
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
                onClick={handlePrint}
              >
                <h1 className="text-2xl">Print profile </h1>
                {/* when i click this button PrintProfileComponent.jsx will be called and  printed but still he is waiting the button to be clicked  */}
              </Mybutton>
            </div>
          </div>
        </div>
      </form>
      <div style={{ display: "none" }}>
        <div id="print-content">
          <PrintProfileComponent
            name={name}
            title={title}
            mylinks={mylinks}
            skills={skills}
            history={history}
          />
        </div>
      </div>
    </div>
  );
};

export default Profilepreviw;
