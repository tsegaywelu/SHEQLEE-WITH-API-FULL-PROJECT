import React from "react";
import Location from "../components/basecomponents/Location";
import Mybutton from "../components/basecomponents/Mybutton";
import Info1 from "../components/onetimecmponent/Info1";
import Trusted from "../components/onetimecmponent/Trusted";
import { Link } from "react-router-dom";

const Clients1 = () => {
  return (
    <div>
      <div className="relative">
        <Location />
      </div>
      {/* //header part  */}
      <div className=" mt-10 flex  flex-col gap-2 md:gap-7 justify-center items-center">
        <h1 className=" text-xl md:text-5xl font-semibold font-kantumruy ">
          sheqlee for clients{" "}
        </h1>
        <p className=" max-w-[550px] text-[17px] md:text-[22px]   text-center p-1 font-kantumruy ">
          Access a pool of talented,comptent and dedicated{" "}
          <span className="hidden md:inline">experts and</span> profetional from
          Ethiopia.
        </p>
        <div className=" mt-6 md:mt-8 flex flex-col md:flex-row gap-3 md:gap-5   ">
          <Link to={"/sheqlee/login"} className="">
            {" "}
            <Mybutton background=" w-full md:w-fit border-[3.5px] border-custom-purple rounded-lg py-2  md:py-3 px-4 text-lg font-kantumruy font-medium">
              Log in
            </Mybutton>
          </Link>

          <Mybutton background=" bg-custom-purple text-custom-white text-lg lg:text-2xl py-3 px-5 rounded-lg font-kantumruy font-medium">
            {" "}
            Register as an employer
          </Mybutton>
        </div>
        {/* //Info1rmation and analysis section  */}
      </div>
      <div className="   max-w-[1100px] mx-auto mt-14 md:mt-20  space-y-5 md:space-y-14 ">
        <Info1
          subscribers={"1.5M+"}
          title={"Unique alerts delivered"}
          discriptiondetail={
            "We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched."
          }
          cssproperty="flex  justify-center text-start  w-[93%] md:w-3/4    font-kantumruy  mx-auto md:mx-0 "
          rounded="rounded-l-xl md:rounded-l-2xl"
          launched={"(Launched: 1 YEAR AGO)"}
          right
        />
        <Info1
          subscribers={"49.7K+"}
          title={"Telegram  subscriber"}
          discriptiondetail={
            "We have a telegram channel with 49,716+ real subscribers. Our channel posts have 29.5K views per"
          }
          cssproperty="flex  justify-center text-end  flex-row-reverse w-[93%] md:w-[77%] md:mr-16   font-kantumruy      mx-auto "
          rounded=" rounded-r-xl md:rounded-r-2xl"
          launched={"day on average."}
          left
        />
        <Info1
          subscribers={"1.5M+"}
          title={"Unique alerts delivered"}
          discriptiondetail={
            "We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched."
          }
          cssproperty="flex  justify-center text-start   w-[93%] md:w-3/4   font-kantumruy mx-auto md:mx-0 "
          rounded=" rounded-l-xl md:rounded-l-2xl"
          launched={"(Launched: 1 YEAR AGO)"}
          right
        />
        <Info1
          subscribers={"49.7K+"}
          title={"Telegram  subscriber"}
          discriptiondetail={
            "We have a telegram channel with 49,716+ real subscribers. Our channel posts have 29.5K views per"
          }
          cssproperty="flex  justify-center text-end  flex-row-reverse w-[93%] md:w-[77%] md:mr-16  font-kantumruy      mx-auto "
          rounded="rounded-r-xl md:rounded-r-2xl"
          launched={"day on average."}
          left
        />
      </div>
      <div className=" mb-10 md:mb-32 mt-10 md:mt-16">
        <div className=" flex justify-center items-center">
          <Mybutton
            background={
              "bg-custom-purple  text-lg lg:text-2xl py-3 lg:py-4 px-10 lg:px-16 rounded-lg  text-white font-medium md:font-semibold font-kantumruy "
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

export default Clients1;
