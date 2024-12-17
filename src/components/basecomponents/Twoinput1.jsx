import React from "react";
import Oneinput from "./Oneinput";
const Twoinput1 = ({
  iconmyimage,
  iconmyimage2,
  labeltext1,
  labeltext2,
  placeholder1,
  placeholder2,
  type1,
  type2,
  id1,
  id2,
}) => {
  return (
    <div>
      <div className="flex  max-sm:flex-col m-5 gap-8 justify-center lg:px-28 md:mt-10">
        <Oneinput iconmyimage={iconmyimage} placeholder={""} />
        <Oneinput iconmyimage={iconmyimage2} placeholder={""} />

        {/* on other pages call through this  */}
        {/* <Twoinput1
          iconmyimage={idea}
          iconmyimage2={contact}
          labeltext1={""}
          labeltext2={""}
          placeholder1={""}
          placeholder2={""}
          type1={""}
          type2={""}
          id1={""}
          id2={""}
        ></Twoinput1> */}
        {/* <div className="flex flex-col flex-grow  ">
          <label className="text-xl font-bold m-3" htmlFor="email">
            your email
          </label>
          <div className="relative ">
            <img
              src={myimage2}
              className="absolute left-0 top-0 bg-black rounded-l-lg p-3   "
              style={{ width: 50, height: 52 }}
            />
            <input
              type="email"
              id="email"
              className="bg-custom-tags rounded-lg pl-16 h-full outline-none p-3  w-full text-xl"
              placeholder="abebe@gmail.com "
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Twoinput1;
