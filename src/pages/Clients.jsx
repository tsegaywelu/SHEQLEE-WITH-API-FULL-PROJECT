import React from "react";
import Location from "../components/basecomponents/Location";
import Mybutton from "../components/basecomponents/Mybutton";
import Info from "../components/onetimecmponent/Info";
import Trusted from "../components/onetimecmponent/Trusted";
import { Link } from "react-router-dom";
const Clients = () => {
  return (
    <div>
      <div className="relative">
        <Location />
        <div className="absolute w-16 h-[5px] bg-custom-purple bottom-8 md:right-85 md:right-66 lg:right-64 mr-2"></div>
      </div>
      {/* //header part  */}
      <div className=" mt-5 md:mt-10 flex  flex-col gap-7 justify-center items-center">
        <h1 className=" text-xl md:text-5xl font-semibold font-kantumruy ">
          sheqlee for clients{" "}
        </h1>
        <p className=" max-w-[500px] text-xl   text-center p-1 font-kantumruy ">
          Access a pool of talented,comptent and dedicated experts and
          profetional from Ethiopia.
        </p>
        <div className="mt-5 md:mt-15 flex gap-10 ">
          <Link to={"/sheqlee/login"}>
            {" "}
            <Mybutton background="border-[4px] border-custom-purple rounded-lg py-1 md:py-2 px-2 md:px-4 text-xl font-kantumruy font-medium">
              Log in
            </Mybutton>
          </Link>

          <Mybutton background=" bg-custom-purple text-custom-white text-sm md:text-xl lg:text-2xl py-1 md:py-2 lg:py-3 px-5 rounded-lg font-kantumruy font-medium">
            {" "}
            Register as an employer
          </Mybutton>
        </div>
        {/* //information and analysis section  */}
        <div>
          <div className="flex justify-start">
            <Info
              subscribers={"1.5M+"}
              title={"Unique alerts delivered"}
              discriptiondetail={
                "We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched."
              }
              cssproperty="flex  justify-center text-start  w-3/4 mt-3 md:mt-10 mb-16 font-kantumruy "
              rounded="rounded-l-3xl"
              launched={"(Launched: 1 YEAR AGO)"}
            />
          </div>
          <div className="flex justify-end">
            {/* //i have to change this to loop bcause data is not only 4 */}
            <Info
              subscribers={"49.7K+"}
              title={"Telegram channel subscriber"}
              discriptiondetail={
                "We have a telegram channel with 49,716+ real subscribers. Our channel posts have 29.5K views per day on average."
              }
              cssproperty="flex  justify-center text-end  flex-row-reverse w-3/4 mt-3 md:mt-10 mb-16 font-kantumruy "
              rounded="rounded-r-3xl"
            />
          </div>
          <div className="flex justify-start">
            <Info
              subscribers={"1.5M+"}
              title={"Unique alerts delivered"}
              discriptiondetail={
                "We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched."
              }
              cssproperty="flex  justify-center text-start  w-3/4 mt-3 md:mt-10 mb-16 font-kantumruy "
              rounded="rounded-l-3xl"
              launched={"(Launched: 1 YEAR AGO)"}
            />
          </div>
          <div className="flex justify-end">
            <Info
              subscribers={"49.7K+"}
              title={"Telegram channel subscriber"}
              discriptiondetail={
                "We have a telegram channel with 49,716+ real subscribers. Our channel posts have 29.5K views per day on average."
              }
              cssproperty="flex  justify-center text-end  flex-row-reverse w-3/4 mt-3 md:mt-10 mb-16 font-kantumruy "
              rounded="rounded-r-3xl"
            />
          </div>
        </div>
      </div>
      <div className="mb-32">
        <div className=" flex justify-center items-center">
          <Mybutton
            background={
              "bg-custom-purple  text-sm md:text-xl lg:text-2xl py-1 md:py-2 lg:py-4 px-5 md:px-10 lg:px-16 rounded-lg  text-white font-semibold font-kantumruy "
            }
          >
            {" "}
            Post a job now
          </Mybutton>
        </div>
      </div>
      <div>
        <Trusted />
      </div>
    </div>
  );
};

export default Clients;
