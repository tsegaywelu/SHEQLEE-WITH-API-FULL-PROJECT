import React from "react";
import Location from "../components/basecomponents/Location";
import companylogo from "../assets/companysPNG/hotjar_logo/hotjar_logo.png";
import verify from "../assets/companysPNG/verify-_1_/verify1.png";
import compnylink from "../assets/companysPNG/link/link.png";
import employee from "../assets/companysPNG/employee/employee.png";
import employeeimage from "../assets/companysPNG/placeholder/placeholder.png";
import bell from "../assets/SVG/bell.svg";
import down from "../assets/companysPNG/down/down.png";
import Postedjobs from "../components/basecomponents/Postedjobs";
import Qestion from "../components/basecomponents/Qestion";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Companydetail = () => {
  const [isreadmore, setisreadmore] = useState(false);
  const { theidtodisplay } = useParams();
  return (
    <div>
      <div className="">
        <Location />
      </div>
      <div className="flex flex-col justify-center items-center  ">
        <img src={companylogo} alt="company logo" width={75} height={75} />
        <div className="flex gap-2 items-center  mb-8">
          <h2 className="font-kantumruy font-semibold text-4xl">
            {theidtodisplay}
          </h2>
          <div className="w-4 h-4 ">
            <img src={verify} alt="verify icon" width={24} height={12} />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center justify-center bg-dvider px-2 py-1  rounded-[5px]">
            <div className="w-3 h-3 ">
              <img src={compnylink} alt="" width={24} height={12} />
            </div>

            <a
              href="hotjar.com"
              className="text-xs  text-custom-blue font-kantumruy"
            >
              hotjar.com
            </a>
          </div>
          <div className="flex gap-2 items-center justify-center bg-dvider px-2 py-1 rounded-[5px]">
            <div className="w-3 h-3 ">
              <img src={employee} alt="" width={24} height={12} />
            </div>
            <h2 className="text-xs font-kantumruy">100-999</h2>
          </div>
          <div className="flex gap-2 items-center justify-center bg-dvider px-2 py-1 rounded-[5px]">
            <div className="w-2 h-3 ">
              <img src={employeeimage} alt="" width={12} height={6} />
            </div>
            <h2 className="text-xs font-kantumruy">Seoul, S. Korea</h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center mt-8">
          <button className="flex items-center gap-5  px-5 py-3 bg-custom-purple  text-custom-white font-medium font-kantumruy rounded-[10px]  mt-4 text-2xl">
            <img src={bell} width={20} height={20} alt="" /> Subscribe to
            company
          </button>
        </div>
        <div className="text-center ">
          <p className="text-sm md:text-xl text-custom-black font-kantumruy mt-5 gap-4  ">
            Subscribers: <span className="font-semibold">5</span>
          </p>
        </div>
      </div>
      <div className="bg-custom-slate mx-10 mt-10 p-10 relative">
        <p className="text-lg  mb-5">
          Hotjar is a successful Product Experience Insights company that
          operates on a fully remote basis, with team members spread throughout
          Europe, Africa and the Americas. Our team casts a wide net across many
          locations, lifestyles, and backgrounds. We celebrate the uniqueness
          and strength found in diversity: it’s our differences that make us
          interesting, and our shared belief in{" "}
          <span className="text-custom-blue">Hotjar’s Core Values</span> that
          bind us together. <br /> <br />
          These values form Hotjar's culture as one guided by respect,
          transparency, collaboration, and direct feedback. We put our customers
          at the heart of everything we do, and we do so through a diverse team
          working together in an honest, inclusive environment. We all commit to
          creating a safe working environment and are allies to those often
          underrepresented - including but not limited to members of BIPOC and
          LGBTQIA+ communities, people with disabilities, and all people who
          identify as women.
        </p>
        <p className={`text-lg mb-10 ${isreadmore ? "" : "hidden "}`}>
          {" "}
          We put our customers at the heart of everything we do, and we do so
          through a diverse team working together in an honest, inclusive
          environment. We all commit to creating a safe working environment and
          are allies to those often underrepresented - including but not limited
          to members of BIPOC and LGBTQIA+ communities, people with
          disabilities, and all people who identify as women.
        </p>
        <button
          className="absolute bottom-4 right-3 bg-custom-purple rounded-[5px] text-white p-2 font-kantumruy font-medium"
          onClick={(e) => setisreadmore(!isreadmore)}
        >
          <span className="flex gap-1 text-[13px]">
            {isreadmore ? <div>Read less</div> : <div>Read more </div>}
            <div className="w-2.5 h-2.5 ml-[2px] pt-[2px]">
              <img
                src={down}
                className={`${isreadmore ? "rotate-180" : "rotate-0"}`}
              />
            </div>
          </span>
        </button>
      </div>
      <div className=" mt-24">
        <h2 className="font-kantumruy font-semibold text-center text-3xl my-7">
          Job posts from {theidtodisplay}
        </h2>
      </div>
      <Postedjobs />
      <div className="mt-16">
        <Qestion />
      </div>
    </div>
  );
};

export default Companydetail;
