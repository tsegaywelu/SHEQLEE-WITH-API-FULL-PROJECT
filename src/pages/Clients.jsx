import React from "react";
import Location from "../components/basecomponents/Location";
import Mybutton from "../components/basecomponents/Mybutton";
import Info from "../components/onetimecmponent/Info";
const Clients = () => {
  return (
    <div>
      <div className="mx-20">
        <Location />
      </div>
      {/* //header part  */}
      <div className=" mt-5 md:mt-20 flex  flex-col gap-7 justify-center items-center">
        <h1 className=" text-2xl md:text-4xl font-semibold ">
          sheqlee for clients{" "}
        </h1>
        <p className="text-sm md:text-xl max-w-[500px] text-center">
          access a pool of talented,comptent and dedicated experts and
          profetional from ethiopia
        </p>
        <div className="mt-5 md:mt-15 flex gap-10 ">
          <Mybutton background="border-4 border-indigo-700 rounded-lg py-1 md:py-2 px-2 md:px-7">
            log in
          </Mybutton>
          <Mybutton background=" bg-purple-400 text-sm md:text-xl lg:text-2xl p-1 md:p-2 lg:p-3 rounded-lg">
            {" "}
            register as an employer
          </Mybutton>
        </div>
        {/* //information and analysis section  */}
        <div>
          <div className="flex justify-start">
            <Info
              subscribers={"1.5M+"}
              title={"unique alerts deleverd"}
              discriptiondetail={
                "we have been deliverd about 30000000 notifications about new remotejobs to job seekers since the website launched"
              }
              cssproperty="flex  justify-center text-start  w-3/4 mt-3 md:mt-10 mb-16 "
              rounded="rounded-l-3xl"
            />
          </div>
          <div className="flex justify-end">
            {/* //i have to change this to loop bcause data is not only 4 */}
            <Info
              subscribers={"49.7K+"}
              title={"Telegram channel subscriber"}
              discriptiondetail={
                "we have telegram channel with 49.716+ real subscribers our channel posts have 29.5 k views per day on average "
              }
              cssproperty="flex  justify-center text-end  flex-row-reverse w-3/4 mt-3 md:mt-10 mb-16 bg-red-700"
              rounded="rounded-r-3xl"
            />
          </div>
          <div className="flex justify-start">
            <Info
              subscribers={"1.5M+"}
              title={"unique alerts deleverd"}
              discriptiondetail={
                "we have been deliverd about 30000000 notifications about new remotejobs to job seekers since the website launched"
              }
              cssproperty="flex  justify-center text-start  w-3/4 mt-3 md:mt-10 mb-16 "
              rounded="rounded-l-3xl"
            />
          </div>
          <div className="flex justify-end">
            <Info
              subscribers={"49.7K+"}
              title={"Telegram channelsubscriber"}
              discriptiondetail={
                "we have telegram channel with 49.716+ real subscribers our channel posts have 29.5 k views per day on average "
              }
              cssproperty="flex  justify-center text-end  flex-row-reverse w-3/4 mt-3 md:mt-10 mb-16 bg-red-700"
              rounded="rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
