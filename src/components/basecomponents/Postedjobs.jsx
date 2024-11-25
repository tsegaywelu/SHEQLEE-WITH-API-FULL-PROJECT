import React, { useEffect, useState } from "react";
import { FaUserTie, FaRegClock, FaDollarSign } from "react-icons/fa";
import { BiBuilding, BiBriefcase } from "react-icons/bi";
import Mybutton from "./Mybutton";
import { Link } from "react-router-dom";
import Rightarrow from "../../assets/SVG/Right.svg";
import devops from "../../assets/SVG/devops.svg";
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
        <div className=" py-3 md:py-6 lg:py-12 ">
          <div className="flex justify-between">
            <h4 className="text-[50px] font-kantumruy my-3">
              latest job posts{" "}
            </h4>
            <div className="flex justify-center items-center gap-2 relative ">
              <div className="w-24 h-4 bg-custom-tags  "></div>
              <div className=" absolute  w-1/2 h-[7px] bg-custom-purple left-0 bottom-6"></div>
              <img src={Rightarrow} alt="" width={8} height={12} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
            {/* ///////////////////// */}
            {emptyRectangles.map((jobsall, index) => {
              return (
                <div
                  className=" bg-custom-slate rounded-2xl md:p-3 lg:pr-10  lg:pt-5  "
                  key={index}
                >
                  <div className="flex  justify-center items-center gap-5">
                    <div className=" w-7 h-7 rounded-full bg-custom-tags "></div>
                    <div className="h-4 w-full bg-custom-tags"></div>
                  </div>
                  <div>
                    <p className="h-2 w-full bg-custom-tags mt-10"></p>
                    <p className="h-2 w-1/2 bg-custom-tags mt-2"></p>
                  </div>

                  <div className="mt-10">
                    <div className="flex  justify-between">
                      <div className="flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1">
                        <div className=" w-4 h-4 rounded-full bg-custom-load "></div>
                        <div className="h-2 w-16 flex-grow bg-custom-load"></div>
                      </div>
                      {/* /////////////// */}
                      <div className="flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1">
                        <div className=" w-4 h-4 rounded-full bg-custom-load "></div>
                        <div className="h-2 w-16 flex-grow bg-custom-load"></div>
                      </div>
                      {/* /////////////// */}
                      <div className="flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1">
                        <div className=" w-4 h-4 rounded-full bg-custom-load "></div>
                        <div className="h-2 w-16 flex-grow bg-custom-load"></div>
                      </div>
                    </div>

                    <div className="flex  justify-between">
                      <div className=" flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1">
                        <div className=" w-4 h-4 rounded-full bg-custom-load "></div>
                        <div className="h-2 w-16 flex-grow bg-custom-load"></div>
                      </div>
                      {/* /////////////// */}
                      <div className="flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1">
                        <div className=" w-4 h-4 rounded-full bg-custom-load "></div>
                        <div className="h-2 w-16 flex-grow bg-custom-load"></div>
                      </div>
                      {/* /////////////// */}
                      <div className="h-5 w-1/4 flex gap-2 justify-center items-center mt-5 bg-custom-tags p-1 border-8 border-custom-purple"></div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-16 ">
              {/* ///////////////////// */}

              {Jobs.map((jobsall) => {
                return (
                  <div
                    className=" bg-custom-slate rounded-2xl md:pr-5 p-2 "
                    key={jobsall.title + Math.random()}
                  >
                    <div className=" flex gap-5">
                      <img src={devops} width={32} height={32} />
                      <p className="text-3xl font-semibold font-kantumruy">
                        {jobsall.title}
                      </p>
                    </div>
                    <p className="text-xs mt-7 font-kantumruy ">
                      {jobsall.descreiption}
                    </p>
                    <div className="mt-5  mr-6">
                      <div className="flex  justify-between  mb-3 gap-1 ">
                        <div className="px-2 py-1 flex justify-start items-center  bg-custom-tags text-xs">
                          <FaRegClock className="mr-1" />
                          {jobsall.time}
                        </div>
                        <div className="px-2 py-1 flex justify-start items-center text-xs bg-custom-tags">
                          {" "}
                          <FaUserTie className="mr-1" />
                          {jobsall.level}
                        </div>

                        <div
                          className="px-2 py-1
                      flex justify-start items-center text-sm bg-custom-tags"
                        >
                          {" "}
                          <BiBuilding className="mr-1" />
                          {jobsall.companyname}
                        </div>
                      </div>
                      <div className="flex justify-between mr-5">
                        <div className="px-2 py-1 flex justify-start items-center bg-custom-tags text-xs ">
                          {" "}
                          <BiBriefcase className="mr-1" />
                          {jobsall.work}
                        </div>
                        <div className="px-2 py-1 flex justify-start items-center bg-custom-tags text-xs">
                          <FaDollarSign className="" />
                          {jobsall.salary}
                        </div>
                        <div className="px-3 py-1">
                          <Mybutton
                            background={
                              "bg-custom-purple  text-xs px-4 py-1 rounded-sm text-white"
                            }
                          >
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
