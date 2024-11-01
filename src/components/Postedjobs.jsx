import React, { useState } from "react";
import { Jobs } from "../data/Postedjobs";
const Postedjobs = () => {
  const [loading, setloading] = useState(true);
  return (
    <>
      {loading ? (
        <div className="mx-20 py-12">
          <h3 className="text-2xl font-semibold mb-6">latest job posts </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* ///////////////////// */}

            {Jobs.map((jobsall) => {
              return (
                <div className=" bg-slate-200 rounded-2xl p-20">
                  <div className="text-xl font-semibold"></div>
                  <p className="text-sm "></p>
                  <div className="">
                    <div className="flex  justify-between">
                      <div className="px-2 py-3"></div>
                      <div className="px-2 py-3"></div>
                      <div className="px-2 py-3"></div>
                    </div>
                    <div className="flex justify-between">
                      <div className="px-2 py-3"></div>
                      <div className="px-2 py-3"></div>
                      <div className="px-2 py-3"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="mx-20 py-12">
          <h3 className="text-2xl font-semibold mb-6">latest job posts </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* ///////////////////// */}

            {Jobs.map((jobsall) => {
              return (
                <div className=" bg-slate-100 rounded-2xl p-5">
                  <div className="text-xl font-semibold">{jobsall.title}</div>
                  <p className="text-sm ">{jobsall.descreiption}</p>
                  <div className="">
                    <div className="flex  justify-between">
                      <div className="px-2 py-3">{jobsall.level}</div>
                      <div className="px-2 py-3">{jobsall.time}</div>
                      <div className="px-2 py-3">{jobsall.companyname}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="px-2 py-3">{jobsall.work}</div>
                      <div className="px-2 py-3">{jobsall.salary}</div>
                      <div className="px-2 py-3">icons</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Postedjobs);
