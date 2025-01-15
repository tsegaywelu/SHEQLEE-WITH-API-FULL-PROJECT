import React from "react";
import eye from "../../assets/direction/eye1.svg";
import copy from "../../assets/direction/copy.svg";
import delete1 from "../../assets/direction/delete.svg";
import edit from "../../assets/direction/edit.svg";

const Jobdetail = () => {
  const jobs = [
    {
      jobid: "1",
      title: "Senior mobile app developer",
      jobtype: "Full-time",
      level: "Senior",
      status: "draft",
    },
    {
      jobid: "2",
      title: "Python backend developer",
      jobtype: "Part-time",
      level: "Lead",
      status: "active",
    },
    {
      jobid: "3",
      title: "ReactJS developer",
      jobtype: "Part-time",
      level: "Middle",
      status: "inactive",
    },
  ];

  //so now i want to replace the below hardcoded with the above code
  return (
    <div className=" mx-4 overflow-hidden w-fit rounded-[15px]  md:pb-[11px]  bg-clip-padding bg-custom-slate mb-10">
      <table className="w-fit mx-auto ">
        <thead className=" text-lg md:text-2xl bg-custom-tags font-kantumruy  ">
          <th className="px-4  text-left  py-7 rounded-tl-lg font-medium ">
            JID
          </th>
          <th className="px-4  text-left font-medium">Title</th>
          <th className="px-4  text-left font-medium hidden md:table-cell ">
            Type
          </th>
          <th className="px-4  text-left  font-medium hidden md:table-cell">
            Level
          </th>
          <th className="px-4  text-left font-medium ">Status</th>
          <th className="px-4  text-left   font-medium hidden md:table-cell">
            Actions
          </th>
        </thead>
        <tbody className="text-sm md:text-xl lg:text-[22px] bg-custom-slate font-kantumruy ">
          {jobs.map((job) => (
            <tr className="border-b-2  border-gray-200  ">
              <td className=" px-6 py-5">{job.jobid}</td>
              <td className=" px-6">{job.title}</td>
              <td className=" px-6 hidden md:table-cell">{job.jobtype}</td>
              <td className=" px-6 hidden md:table-cell">{job.level}</td>

              {/* //if job sttus is draft */}
              <td className=" px-6">
                {" "}
                {/* help me here gpt if {job.status}  is active then border-green-500 and justify-end  */}
                {/* help me here gpt if {job.status}  is inactive then border-red-700 and justify-start  */}
                {/* help me here gpt if {job.status}  is draft then border-gray-700 and justify-center */}
                <div
                  className={`rounded border-2   p-[1px] w-10 h-fit flex ${
                    job.status === "active"
                      ? "border-green-500 justify-end"
                      : job.status === "inactive"
                      ? "border-red-700 justify-start"
                      : job.status === "draft"
                      ? "border-gray-700 justify-center"
                      : ""
                  }`}
                >
                  {/* help me here gpt if {job.status}  is active then bg-green-500  */}
                  {/* help me here gpt if {job.status}  is inactive then bg-red-700  */}
                  {/* help me here gpt if {job.status}  is draft then bg-gray-700  */}
                  <div
                    className={`min-w-3 w-3 min-h-3 h-3 rounded ${
                      job.status === "active"
                        ? "bg-green-500"
                        : job.status === "inactive"
                        ? "bg-red-700"
                        : job.status === "draft"
                        ? "bg-gray-700"
                        : ""
                    }`}
                  ></div>
                </div>
              </td>
              {job.status === "draft" ? (
                <td className=" px-6 relative  hidden md:table-cell">
                  <div className="flex items-center justify-center gap-1  ">
                    <button className="bg-custom-purple p-[8px] rounded-md w-8 h-8">
                      {/* <img src={copy} alt="" /> */}
                      <img src={copy} alt="" />
                    </button>
                    <button className="bg-black py-1 px-4 rounded-lg text-white  ">
                      Publish
                    </button>
                    <button className="bg-custom-purple p-[8px] rounded-md w-8 h-8">
                      {/* <MdEdit size={22} /> */}
                      <img src={edit} alt="" />
                    </button>
                    <button className="bg-custom-purple p-[8px] rounded-md w-8 h-8">
                      {/* <img src={delete1} alt="" /> */}
                      <img src={delete1} alt="" />
                    </button>
                    <button className=" absolute   bg-custom-tags text-xs -bottom-2 right-0  rounded-[3px] px-2 py-[2px]">
                      Delete draft
                    </button>
                  </div>
                </td>
              ) : (
                <td className=" px-6 hidden md:table-cell">
                  <div className="flex items-center justify-start gap-1 relative ">
                    <button className="bg-custom-purple p-[10px] rounded-md w-8 h-8">
                      <img src={copy} alt="" />
                    </button>
                    <button className="bg-custom-purple p-[8px] rounded-md w-8 h-8">
                      {/* <img src={eye} alt="" /> */}
                      <img src={eye} alt="" />
                    </button>
                    <button className="bg-custom-purple p-[10px] rounded-md w-8 h-8">
                      <img src={delete1} alt="" />
                    </button>
                    <button
                      className={`absolute   bg-custom-tags text-xs  -bottom-7  rounded-[3px] px-2 py-[2px] ${
                        job.status == "inactive" && "left-9"
                      }`}
                    >
                      View details
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jobdetail;
