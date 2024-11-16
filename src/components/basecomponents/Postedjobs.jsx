import React, { useEffect, useState } from "react";
import { FaUserTie, FaRegClock, FaDollarSign } from "react-icons/fa";
import { BiBuilding, BiBriefcase } from "react-icons/bi";
import Mybutton from "./Mybutton";
import { Link } from "react-router-dom";
const emptyRectangles = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
const Postedjobs = () => {
  const [loading, setloading] = useState(true);
  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
    console.log("i am running ");

    async function fetchjobs() {
      try {
        setloading(true);
        const response = await fetch("http://localhost:3000/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const result = await response.json();
        console.log({ result }, result.length);
        setJobs(result);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchjobs();
  }, []);
  const fakeid = "job detail";
  return (
    <>
      {loading ? (
        <div className=" py-3 md:py-6 lg:py-12">
          <h3 className="text-2xl font-semibold mb-6">latest job posts </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
            {/* ///////////////////// */}
            {emptyRectangles.map((jobsall, index) => {
              return (
                <div
                  className=" bg-slate-100 rounded-2xl md:p-5 lg:p-10 "
                  key={index}
                >
                  <div className="text-xl font-semibold">{jobsall.title}</div>
                  <p className="text-sm ">{jobsall.descreiption}</p>
                  <div className="">
                    <div className="flex  justify-between">
                      <div className="px-2 py-3">{jobsall.level}</div>
                      <div className="px-2 py-3">{jobsall.time}</div>
                      <div className="px-2 py-3"> {jobsall.companyname}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="px-2 py-3">{jobsall.work}</div>
                      <div className="px-2 py-3">{jobsall.salary}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Link to={`/sheqlee/alljob/${fakeid}`}>
          <div className="py-4 md:py-8 lg:py-12">
            <h3 className="md:text-2xl font-semibold md:mb-6">
              latest job posts{" "}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-7">
              {/* ///////////////////// */}

              {Jobs.map((jobsall) => {
                return (
                  <div
                    className=" bg-custom-slate rounded-2xl md:p-5 "
                    key={jobsall.title + Math.random()}
                  >
                    <div className="text-xl font-semibold flex gap-4">
                      {" "}
                      <FaUserTie size={24} />
                      {jobsall.title}
                    </div>
                    <p className="text-sm ">{jobsall.descreiption}</p>
                    <div className="">
                      <div className="flex  justify-between">
                        <div className="px-2 py-3 flex justify-start items-center text-sm">
                          {" "}
                          <FaUserTie className="mr-1" />
                          {jobsall.level}
                        </div>
                        <div className="px-2 py-3 flex justify-start items-center text-sm">
                          <FaRegClock className="mr-1" />
                          {jobsall.time}
                        </div>
                        <div
                          className="px-2 py-3
                      flex justify-start items-center text-sm"
                        >
                          {" "}
                          <BiBuilding className="mr-1" />
                          {jobsall.companyname}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="px-2 py-3 flex justify-start items-center">
                          {" "}
                          <BiBriefcase className="mr-1" />
                          {jobsall.work}
                        </div>
                        <div className="px-2 py-3 flex justify-start items-center">
                          <FaDollarSign className="" />
                          {jobsall.salary}
                        </div>
                        <div className="px-2 py-3">
                          <Mybutton background={"bg-indigo-600  text-sm p-1"}>
                            applay
                          </Mybutton>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Postedjobs;
