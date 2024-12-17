import React from "react";
import Mybutton from "../../../components/basecomponents/Mybutton";
import { CiGrid31 } from "react-icons/ci";
import Divider from "../../../components/basecomponents/Divider";
import { FaGears } from "react-icons/fa6";

const Preview = ({ formData, onBack }) => {
  return (
    <div className="   mx-auto mt-10">
      <div>
        <div className="relative  max-w-2xl  px-4 py-7 my-4 md:my-16 bg-slate-100 mx-auto">
          <CiGrid31
            size={48}
            className="bg-black text-white rounded-l-lg absolute left-0 top-0  h-full p-3 w-20"
          />
          <h2 className="  rounded-lg pl-20 h-full   w-full text-sm ">
            to speed up the process of posting a job try using {"  "}
            <button className=" border-b-2 border-purple-400 font-bold px-1">
              JOB templates
            </button>{" "}
            page
          </h2>
        </div>
      </div>

      {/* //text part  */}
      <div className=" max-w-6xl mx-auto  text-center  ">
        <div className="flex flex-col   gap-1 md:gap-3">
          <div className="flex justify-center items-center gap-x-2">
            {" "}
            <h1 className="text-xl  md:text-3xl lg:text-4xl font-extrabold">
              Review and Publish
            </h1>
            <span className="text-2xl">[2/2]</span>
          </div>
          <p className="text-sm md:text-2xl">
            Review job detail before pusblishing !!
          </p>
        </div>
        {/* //buttons part */}
        <div className="flex justify-center gap-10 mt-16 ">
          <Mybutton
            background={
              "border-4 border-indigo-700 rounded-lg py-1 md:py-2 px-2 md:px-5 text-2xl  "
            }
          >
            Edit
          </Mybutton>
          <Mybutton background={"bg-purple-400 rounded-lg p-1 md:p-2 lg:p-3"}>
            <h1 className="text-2xl">Publish job</h1>
          </Mybutton>
        </div>

        <Divider>VACANCY PREVIEW</Divider>
        {/* //below devider part  */}
        <div>
          <div className="flex justify-center items-center gap-8">
            <FaGears size={48} />{" "}
            <span className=" text-sm md:text-3xl ">{formData.jobTitle}</span>
          </div>
          <div
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
          </div>
        </div>

        <div className="bg-slate-50 text-start pl-10 ">
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

          <button
            type="button"
            onClick={onBack}
            className="bg-gray-400 rounded-lg p-2 mt-4"
          >
            Back to Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
