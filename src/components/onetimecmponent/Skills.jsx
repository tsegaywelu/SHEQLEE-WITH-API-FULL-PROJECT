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
      <div className="rounded-lg  overflow-hidden h-fit w-fll ">
        <table className="w-full font-kantumruy  " style={{ padding: "10px" }}>
          <thead className="bg-custom-placeholder     ">
            <tr>
              <th className="text-start font-kantumruy font-medium text-white p-3 text-xl">
                Skill
              </th>
              <th
                className="text-end p-2   flex justify-center 
              "
              >
                <div className="text-center w-fit ml-52">
                  <p
                    className={` ${
                      buttons ? "text-center w-fit ml-20" : " "
                    }    font-kantumruy font-medium text-white text-xl`}
                  >
                    Level
                  </p>
                </div>
              </th>
              {buttons && (
                <th className="text-end  pr-4 font-kantumruy font-medium text-white text-xl">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-custom-tags  rounded-b-lg overflow-hidden ">
            {skills.map((skill, index) => (
              <tr
                key={index}
                className={` ${
                  index + 1 < skills.length && "border-b-2  border-slate-400"
                }`}
              >
                {" "}
                <td className="text-start  pl-3">{skill.name}</td>
                <td
                  className={`  ${
                    buttons
                      ? "text-end py-3 "
                      : "  inline-block w-full text-center ml-48 py-3    "
                  }`}
                >
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
                {buttons && (
                  <td className="text-end pr-3  ">
                    <button
                      onClick={() => onDeleteSkill(index)}
                      className="bg-custom-purple p-2 rounded-md w-7 h-7  "
                    >
                      <img src={delete1} />
                    </button>
                  </td>
                )}
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
