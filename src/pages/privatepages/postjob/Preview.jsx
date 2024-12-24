import React from "react";
import Mybutton from "../../../components/basecomponents/Mybutton";
import Divider from "../../../components/basecomponents/Divider";
import devops from "../../../assets/SVG/devops.svg";
import template from "../../../assets/direction/template.svg";
import Jobicons from "../../../components/onetimecmponent/Jobicons";
import clock from "../../../assets/SVG/clock.svg";
import companyb from "../../../assets/SVG/companyb.svg";
import calendar from "../../../assets/SVG/calendar.svg";
import tagsvg from "../../../assets/SVG/ags.svg";
const Preview = ({ formData, onBack }) => {
  return (
    <div className="   mx-auto mt-10">
      <div>
        <div className="relative  max-w-2xl  px-4 py-7 my-4 md:my-16 bg-slate-100 mx-auto">
          <img
            src={template}
            alt="icon"
            className="bg-black  rounded-l-lg absolute left-0 top-0  h-full p-3 w-20"
          />
          <h2 className="   pl-20 h-full   w-full text-sm font-kantumruy">
            To speed up the process of posting a job, try using
            <button className=" ml-2 border-b-[3px] border-custom-purple  font-kantumruy font-semibold">
              job templates.
            </button>{" "}
          </h2>
        </div>
      </div>

      {/* //text part  */}
      <div className=" max-w-6xl mx-auto  text-center  ">
        <div className="flex flex-col   gap-1 md:gap-3">
          <div className="flex justify-center items-center gap-x-2">
            {" "}
            <h1 className="text-xl  md:text-3xl lg:text-4xl font-semibold font-kantumruy">
              Review and Publish
            </h1>
            <span className="text-4xl font-kantumruy">[2/2]</span>
          </div>
          <p className="text-sm md:text-2xl font-kantumruy">
            Review job details before publishing.
          </p>
        </div>
        {/* //buttons part */}
        <div className="flex justify-center gap-10 mt-16 ">
          <Mybutton
            background={
              "border-4 border-custom-purple rounded-lg py-1 md:py-2 px-2 md:px-5 text-2xl font-kantumruy font-medium  "
            }
          >
            Edit
          </Mybutton>
          <Mybutton
            background={
              "bg-custom-purple rounded-lg p-1 md:p-2 lg:p-3 font-semibold font-kantumruy text-white"
            }
          >
            <h1 className="text-2xl">Publish job </h1>
          </Mybutton>
        </div>

        <Divider>VACANCY PREVIEW</Divider>
        {/* //below devider part  */}
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
          <div className="flex justify-center items-center gap-4">
            <img src={devops} alt="job icon " width={28} height={28} />
            <span className=" text-sm md:text-4xl  font-kantumruy font-medium">
              {" "}
              {formData.jobTitle}
            </span>
          </div>
          {/* <div
            className=" 
          flex gap-10 items-center justify-center mt-5"
          >
            <p className="text-3xl">
              <strong>Job Type:</strong> {formData.jobType}
            </p>
            <p className="text-3xl">
              <strong>Skill Level:</strong> {formData.skillLevel}
            </p>
            <p className="text-3xl">
              <strong>Salary:</strong> {formData.currency} {formData.salary}
              {formData.rate}
            </p>
          </div> */}
          <div className="flex justify-center items-center gap-x-5">
            <Jobicons text={"Infosys"}>
              <img
                src={companyb}
                width={14}
                height={14}
                className="mr-1"
                alt=""
              />
            </Jobicons>
            <Jobicons text={"full time"}>
              <img src={clock} width={14} height={14} className="mr-1" alt="" />
            </Jobicons>
            <Jobicons text={formData.skillLevel}>
              <img
                src={calendar}
                width={14}
                height={14}
                className="mr-1"
                alt=""
              />
            </Jobicons>
            {/* {formData.skillLevel}
            {formData.currency} {formData.salary} use those varibles ok ok ok 
            {formData.rate}
            {formData.category} */}
            <Jobicons text={"$20/hr"}>
              <img
                src={companyb}
                width={14}
                height={14}
                className="mr-1"
                alt=""
              />
            </Jobicons>
          </div>
        </div>

        <div className="bg-custom-slate text-start p-10  rounded-[15px]">
          {/* //edit this part plase and leave three divs */}
          <p className="text-3xl">
            <strong>Category:</strong> {formData.category}
          </p>

          <h3 className="text-3xl  font-kantumruy font-medium">Requirements</h3>
          <div dangerouslySetInnerHTML={{ __html: formData.requirements }} />

          <h3 className="text-3xl  font-kantumruy font-medium">
            shortdescription
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: formData.shortdescription }}
          />
          <h3 className="text-3xl  font-kantumruy font-medium">
            jobDescription
          </h3>
          <div dangerouslySetInnerHTML={{ __html: formData.jobDescription }} />

          <h3 className="text-3xl  font-kantumruy font-medium">
            applyInstructions
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: formData.applyInstructions }}
          />

          <p className="text-3xl">
            <strong>Skills:</strong> {formData.skills}
          </p>

          <p className="text-3xl">
            <strong>applyLink:</strong> {formData.applyLink}
          </p>
        </div>
        <div className="my-10 flex justify-center items-center gap-5">
          <div className="bg-black   flex justify-center items-center p-1   rounded-[4px]">
            <img src={tagsvg} width={16} height={16} className="mr-1" alt="" />
          </div>

          <Jobicons text={"Java"}></Jobicons>
          <Jobicons text={"User Interface"}></Jobicons>
          <Jobicons text={"Python"}></Jobicons>
          <Jobicons text={"C++"}></Jobicons>
          <Jobicons text={"Flutter"}></Jobicons>
        </div>
        <div className="my-10">
          <Divider />
        </div>
        <div className="flex justify-center gap-10 my-16 " onClick={onBack}>
          <Mybutton
            background={
              "border-4 border-custom-purple rounded-lg py-1 md:py-2 px-2 md:px-5 text-2xl font-kantumruy font-medium  "
            }
          >
            Edit
          </Mybutton>
          <Mybutton
            background={
              "bg-custom-purple rounded-lg p-1 md:p-2 lg:p-3 font-semibold font-kantumruy text-white"
            }
          >
            <h1 className="text-2xl">Publish job </h1>
          </Mybutton>
        </div>
      </div>
    </div>
  );
};

export default Preview;
