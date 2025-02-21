import React, { useState } from "react";
import eye from "../../assets/direction/eye1.svg";
import copy from "../../assets/direction/copy.svg";
import delete1 from "../../assets/direction/delete.svg";
import edit from "../../assets/direction/edit.svg";

const Jobdetail = () => {
  const [jobs, setJobs] = useState([
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
    {
      jobid: "5",
      title: "Senior mobile app developer",
      jobtype: "Full-time",
      level: "Senior",
      status: "draft",
    },
    {
      jobid: "4",
      title: "Python backend developer",
      jobtype: "Part-time",
      level: "Lead",
      status: "active",
    },
    {
      jobid: "6",
      title: "ReactJS developer",
      jobtype: "Part-time",
      level: "Middle",
      status: "inactive",
    },
  ]);
  const changestatus = (jobid) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.jobid === jobid
          ? {
              ...job,
              status:
                job.status === "active"
                  ? "inactive"
                  : job.status === "inactive"
                  ? "draft"
                  : "active",
            }
          : job
      )
    );
  };
  const [hoveredIcon, setHoveredIcon] = useState({ jobid: null, text: "" });
  const handleHover = (jobid, text) => {
    setHoveredIcon({ jobid, text });
  };

  return (
    <div className="   md:mx-4 overflow-hidden w-[95%] md:w-[90%] rounded-[15px]  md:pb-[11px]  bg-clip-padding bg-custom-slate  mb-10">
      <table className="w-[100%] mx-auto ">
        <thead className=" text-[16px] md:text-2xl bg-custom-tags font-kantumruy  ">
          <th className=" px-3 md:px-4  text-left  py-7 rounded-tl-lg font-medium ">
            JID
          </th>
          <th className="px-2 md:px-4  text-left font-medium">Title</th>
          <th className="md:px-4  text-left font-medium hidden md:table-cell ">
            Type
          </th>
          <th className="md:px-4  text-left  font-medium hidden md:table-cell">
            Level
          </th>
          <th className="md:px-4  text-left font-medium ">Status</th>
          <th className="md:px-4  text-left   font-medium hidden md:table-cell md:w-[23%]">
            Actions
          </th>
        </thead>
        <tbody className="text-sm md:text-xl lg:text-[22px] bg-custom-slate font-kantumruy ">
          {jobs.map((job, index) => (
            <tr
              key={job.jobid}
              className={`  ${
                index + 1 < jobs.length && "border-b-2  border-gray-200"
              }`}
            >
              <td className=" px-3 md:px-6 py-5 max-sm:-translate-y-1">
                {job.jobid}{" "}
              </td>
              <td className=" px-3 md:px-6   ">
                <span className="flex flex-col gap-0 p-0">
                  <span className="max-sm:translate-y-4">{job.title}</span>
                  <span className=" md:hidden">
                    {" "}
                    {job.jobtype}{" "}
                    <span className="text-yellow-500 text-4xl rounded-full">
                      .
                    </span>{" "}
                    {job.level}
                  </span>
                </span>
              </td>
              <td className=" px-3 md:px-6 hidden md:table-cell">
                {job.jobtype}
              </td>
              <td className=" px-3 md:px-6 hidden md:table-cell">
                {job.level}
              </td>

              {/* //if job sttus is draft */}
              <td className=" px-3 md:px-6">
                {" "}
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
                  onClick={(e) => changestatus(job.jobid)}
                >
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
                    <button
                      className="bg-custom-purple p-[8px] rounded-md w-8 h-8"
                      onMouseEnter={() =>
                        handleHover(job.jobid, "Duplicate draft")
                      }
                      onMouseLeave={() =>
                        handleHover(job.jobid, "Delete draft")
                      }
                    >
                      {/* <img src={copy} alt="" /> */}
                      <img src={copy} alt="copy" />
                    </button>
                    <button
                      className="bg-black py-1 px-4 rounded-lg text-white  "
                      onMouseEnter={() =>
                        handleHover(job.jobid, "Publish draft")
                      }
                      onMouseLeave={() =>
                        handleHover(job.jobid, "Delete draft")
                      }
                    >
                      Publish
                    </button>
                    <button
                      className="bg-custom-purple p-[9px] rounded-md w-8 h-8"
                      onMouseEnter={() => handleHover(job.jobid, "Edit draft")}
                      onMouseLeave={() =>
                        handleHover(job.jobid, "Delete draft")
                      }
                    >
                      {/* <MdEdit size={22} /> */}
                      <img src={edit} alt="edit" />
                    </button>
                    <button
                      className="bg-custom-purple p-[9px] rounded-md w-8 h-8
                    "
                      onMouseEnter={() =>
                        handleHover(job.jobid, "Delete draft")
                      }
                      onMouseLeave={() =>
                        handleHover(job.jobid, "Delete draft")
                      }
                    >
                      {/* <img src={delete1} alt="" /> */}
                      <img src={delete1} alt="delete" />
                    </button>
                    <button className=" absolute   bg-custom-tags text-xs -bottom-2 right-0  rounded-[3px] px-2 py-[2px]">
                      {hoveredIcon.jobid === job.jobid ? (
                        <p>{hoveredIcon.text}</p>
                      ) : (
                        "Delete draft"
                      )}
                    </button>
                  </div>
                </td>
              ) : (
                <td className=" px-6 hidden md:table-cell">
                  <div className="flex items-center justify-start gap-1 relative ">
                    <button
                      className="bg-custom-purple p-[8px] rounded-md w-8 h-8"
                      onMouseEnter={() =>
                        handleHover(job.jobid, "Duplicate vacancy")
                      }
                    >
                      <img src={copy} alt="copy icon " />
                    </button>
                    <button
                      className="bg-custom-purple p-[8px] rounded-md w-8 h-8"
                      onMouseEnter={() =>
                        handleHover(job.jobid, "View details")
                      }
                    >
                      {/* <img src={eye} alt="" /> */}
                      <img src={eye} alt="show icon " />
                    </button>
                    <button
                      className="bg-custom-purple p-[9px] rounded-md w-8 h-8 "
                      onMouseEnter={() =>
                        handleHover(job.jobid, "Delete vacancy")
                      }
                    >
                      <img src={delete1} alt="delete icon" />
                    </button>
                    <button
                      className={`absolute   bg-custom-tags text-xs  -bottom-7  rounded-[3px] px-2 py-[2px] ${
                        job.status == "inactive" && "left-9"
                      }`}
                    >
                      {hoveredIcon.jobid === job.jobid ? (
                        <p>{hoveredIcon.text}</p>
                      ) : job.status === "inactive" ? (
                        " View details"
                      ) : (
                        "Duplicate vacancy"
                      )}
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
