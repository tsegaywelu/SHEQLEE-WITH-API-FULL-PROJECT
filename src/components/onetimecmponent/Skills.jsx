import React, { useState } from "react";
import delete1 from "../../assets/direction/delete.svg";
import Dropdownprofile from "../basecomponents/Dropdownprofile";

const Skills = ({ skills, title, subtitle, buttons }) => {
  const [showmodal, setshowmodal] = useState(false);

  return (
    <div>
      {showmodal && (
        <Dropdownprofile
          message={" Add a new skill"}
          placeholder1={"Objective-C"}
          placeholder2={"Skill level"}
          buttontext={"Add skill"}
          setshowmodal={setshowmodal}
          showmodal={showmodal}
          dropdown
        />
      )}
      <div className="space-y-3 mb-5">
        <h2 className="font-kantumruy text-xl font-medium">{title}</h2>
        <p className="font-kantumruy ">{subtitle}</p>
      </div>
      <div className="rounded-[15px]  overflow-hidden h-fit w-fll ">
        <table className="w-full font-kantumruy  " style={{ padding: "10px" }}>
          <thead className="bg-custom-placeholder     ">
            <tr>
              <th className="text-start font-kantumruy font-medium text-white p-4">
                Skill
              </th>
              <th className="text-end p-5 ">
                <div className="flex justify-end">
                  <p className="text-start w-1/3 font-kantumruy font-medium text-white ">
                    Level
                  </p>
                </div>
              </th>
              <th className="text-end  pr-4 font-kantumruy font-medium text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-custom-tags  rounded-b-[15px] overflow-hidden ">
            {skills.map((skill, index) => (
              <tr key={index} className="border-b-2 border-gray-400">
                {" "}
                <td className="text-start  pl-3">{skill.name}</td>
                <td className="text-end py-5 ">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      style={{
                        background: i < skill.level ? "#000000" : "#A0A0A0",
                        borderRadius: "50%",
                        textAlign: "end",
                        padding: "5px",
                        color: "white",
                        margin: "16px",
                      }}
                    >
                      {i + 1}
                    </span>
                  ))}
                </td>
                <td className="text-end pr-3  ">
                  <button
                    onClick={() => onDeleteSkill(index)}
                    className="bg-custom-purple p-2 rounded-md"
                  >
                    <img src={delete1} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {buttons && (
        <div className=" flex justify-end my-10">
          <button
            className="font-kantumruy font-semibold bg-custom-purple px-5 py-2 rounded-[5px] text-white"
            onClick={(e) => setshowmodal(true)}
          >
            Add a skill
          </button>
        </div>
      )}
    </div>
  );
};

export default Skills;
