import React from "react";

const Skillprinttable = ({ skills }) => {
  return (
    <div className="rounded-[10px] w-1/2 h-fit overflow-hidden">
      {/* <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc ml-6">
        {skills.map((skill) => (
          <li key={skill.name} className="text-lg">
            {skill.name} (Proficiency: {skill.level}/5)
          </li>
        ))}
      </ul> */}
      <table className="w-full my-10">
        <thead className="bg-itseemsgray  font-kantumruy font-medium text-2xl">
          <tr>
            <th className="text-center p-3">Skill</th>
            <th className="text-center">Proficiency</th>
          </tr>
        </thead>
        <tbody className="bg-itseemswhite rounded-b-[15px] text-2xl ">
          {skills.map((skill) => (
            <tr>
              <td className="text-center p-2">{skill.name}</td>
              <td className="text-center">{skill.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skillprinttable;
