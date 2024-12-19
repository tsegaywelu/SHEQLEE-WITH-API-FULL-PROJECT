import React from "react";
import { CiGrid31 } from "react-icons/ci";
import "react-quill/dist/quill.snow.css";
import Reatchtext from "../../../components/basecomponents/Reatchtext";
import Mybutton from "../../../components/basecomponents/Mybutton";
import Oneinput from "../../../components/basecomponents/Oneinput";
import Dropdownform from "../../../components/basecomponents/Dropdownform";
import SalaryInput from "../../../components/onetimecmponent/SalaryInput";
import Checkbox from "../../../components/basecomponents/Checkbox";
import template from "../../../assets/direction/template.svg";
import Divider from "../../../components/basecomponents/Divider";
const Inputfields = ({ formData, updateFormData, onPreview }) => {
  return (
    <div>
      <div className="relative  max-w-2xl  px-4 py-7 my-4 md:my-16 bg-custom-slate mx-auto rounded-r-lg">
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

      {/* text parts  */}
      <div className="max-w-3xl mx-auto  text-center  ">
        <div className="flex flex-col   gap-1 md:gap-3">
          <div className="flex justify-center items-center gap-x-2">
            {" "}
            <h1 className="text-xl  md:text-3xl lg:text-4xl font-semibold font-kantumruy">
              Add a vacancy
            </h1>
            <span className="text-4xl font-kantumruy">[1/2]</span>
          </div>
          <p className="text-sm md:text-2xl font-kantumruy">
            Next and final step is preview and confirmation.
          </p>
        </div>
        <form
          action=""
          className="mt-5 md:mt-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col items-start ">
            <div className="w-full text-start">
              <Oneinput
                placeholder={"Siniour mobile app developer"}
                labeltext={"Jop title"}
                type={"text"}
                id={"jobtype"}
                warn
                formData={formData}
                updateFormData={updateFormData}
                correctvalue={"jobTitle"}
                nopaddingleft
              />
            </div>
          </div>
          {/* //botto input parts  */}
          <div className="flex  max-sm:flex-col  gap-8   md:mt-10">
            <div className="flex flex-col flex-grow  ">
              <Dropdownform
                options={["full time", "part time", "Category 3"]}
                defaultText="select catagory"
                value={formData.category}
                onChange={(value) => updateFormData("category", value)}
                labeltext={"catagory"}
                warn
              />
            </div>
            <div className="flex flex-col flex-grow  ">
              <Dropdownform
                options={["back-end", "front-end", "full-stack"]}
                defaultText="select type..."
                value={formData.jobType}
                onChange={(value) => updateFormData("jobType", value)}
                labeltext={"Job type"}
                warn
              />
            </div>
          </div>
          <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
            <div className="flex flex-col flex-grow   w-1/2 ">
              <label
                // className="text-xl font-bold  m-3"
                className="text-xl   my-3 font-kantumruy font-medium text-start"
                htmlFor="companyname"
              >
                Skill level <span className="text-red-700">*</span>
              </label>
              <Dropdownform
                options={["Intermidate", "expert", "fullstack"]}
                defaultText="Add skill level..."
                value={formData.skillLevel}
                onChange={(value) => updateFormData("skillLevel", value)}
              />
            </div>
            <div className="flex flex-col flex-grow w-1/2  ">
              <label
                className="text-xl   my-3 font-kantumruy font-medium text-start"
                htmlFor="email"
              >
                Salary <span className="text-sm">(fixed or range )</span>{" "}
              </label>

              <SalaryInput
                salary={formData.salary}
                currency={formData.currency}
                rate={formData.rate}
                setSalary={(value) => updateFormData("salary", value)}
                setCurrency={(value) => updateFormData("currency", value)}
                setRate={(value) => updateFormData("rate", value)}
                // i have to send props here to handle the components but how
              />
            </div>
          </div>
          <div className=" mb-4 relative text-start space-y-5 mt-10">
            <label
              className="text-xl  my-3    font-kantumruy font-medium "
              htmlFor="message"
            >
              short description <span className="text-red-700">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="We are looking for a Flutter developer with 2 years experience."
              rows={5}
              // className="bg-slate-200 w-full rounded-lg p-4  outline-none text-2xl m-3 "
              className="bg-custom-tags w-full rounded-lg p-3  outline-none text-xl placeholder:font-kantumruy placeholder:text-custom-placeholder resize-none "
              value={formData.shortdescription}
              onChange={(e) =>
                updateFormData("shortdescription", e.target.value)
              }
            ></textarea>
            <span className="absolute  bottom-12 right-3">0/128</span>
            <p className="text-start font-kantumruy">
              Who are you looking for? Give us a one-liner description of your
              ideal candidate.
            </p>
          </div>
          {/* //requirements part  */}

          <div className="space-y-10 mt-5 ">
            <Reatchtext
              showtext={"Requirements "}
              value={formData.requirements}
              onChange={(content) => updateFormData("requirements", content)}
              placeholder={"Requirements..."}
              warn
            />

            <Reatchtext
              showtext={"description"}
              value={formData.jobDescription}
              onChange={(content) => updateFormData("jobDescription", content)}
              placeholder={"Description..."}
            />
            <Reatchtext
              showtext={"how to apply"}
              value={formData.applyInstructions}
              onChange={(content) =>
                updateFormData("applyInstructions", content)
              }
              placeholder={"How can professionals apply..."}
            />
          </div>
          <div className="mt-5 text-start">
            <Oneinput
              placeholder={"NodeJS, AWS, PostgreSQL"}
              labeltext={"Skills  "}
              smalltext={"(technology names)"}
              type={"text"}
              id={"skills"}
              warn
              formData={formData}
              updateFormData={updateFormData}
              correctvalue={"skills"}
              nopaddingleft
            />
          </div>
          {/* //check box part */}

          <div className="mt-5 text-start">
            <Oneinput
              placeholder={"URL or email"}
              labeltext={" Apply link"}
              type={"text"}
              id={"applylink"}
              warn
              formData={formData}
              updateFormData={updateFormData}
              correctvalue={"applyLink"}
              nopaddingleft
            />
          </div>
          <div className="flex items-center gap-3 mt-5">
            <Checkbox />
            <span className="text-sm font-kantumruy">
              i want my company name to exclude from this vacancy{" "}
            </span>
          </div>
          <div className="flex justify-end gap-10 mt-16 ">
            <Mybutton
              background={
                "border-4 border-custom-purple rounded-lg py-1 md:py-2 px-2 md:px-5 text-2xl font-kantumruy font-medium  "
              }
            >
              save draft
            </Mybutton>
            <Mybutton
              background={
                "bg-custom-purple rounded-lg p-1 md:p-2 lg:p-3 font-kantumruy text-white"
              }
            >
              <h1 className="text-2xl font-semibold" onClick={onPreview}>
                Next{" "}
                <span className=" text-xl font-kantumruy font-normal">
                  [preview and confirm]
                </span>
              </h1>
            </Mybutton>
          </div>
        </form>
        <div className="my-10">
          <Divider />
          <span className="block text-start font-kantumruy ">
            <span className="text-red-800">*</span> all fields are required.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inputfields;
