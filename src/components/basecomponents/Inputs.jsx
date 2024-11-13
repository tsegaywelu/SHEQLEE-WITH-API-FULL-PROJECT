import React from "react";
import { MdEdit } from "react-icons/md";
//pass the id label and all props from user parent component
const Inputs = () => {
  return (
    <div className=" mx-5 md:mx-16 lg:mx-48">
      <form action="">
        <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
          <div className="flex flex-col flex-grow relative ">
            <label className="text-xl font-bold  m-3" htmlFor="companyname">
              full name <span className="text-red-700">*</span>
            </label>
            <div className="relative ">
              <input
                type="text"
                className="bg-slate-200  rounded-lg pl-16 h-full outline-none p-3 w-full text-xl"
                id="companyname"
                placeholder="SHEQLEE co .Ltd"
              />
            </div>
            <div className="absolute bottom-3 right-1">
              <MdEdit size={18} />
            </div>
          </div>
          <div className="flex flex-col flex-grow  relative ">
            <label className="text-xl font-bold m-3" htmlFor="email">
              your email <span className="text-red-700">*</span>
            </label>
            <div className="relative  ">
              <input
                type="email"
                id="email"
                className="bg-slate-200 rounded-lg  h-full outline-none p-3  w-full text-xl"
                placeholder="abebe@gmail.com "
              />
              <div className="absolute bottom-3 right-1">
                <MdEdit size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  max-sm:flex-col  gap-8 justify-center  md:mt-10">
          <div className="flex flex-col flex-grow relative ">
            <label className="text-xl font-bold  m-3" htmlFor="companyname">
              password <span className="text-red-700">*</span>
            </label>
            <div className="relative ">
              <input
                type="text"
                className="bg-slate-200  rounded-lg pl-16 h-full outline-none p-3 w-full text-xl"
                id="companyname"
                placeholder="SHEQLEE co .Ltd"
              />
            </div>
            <div className="absolute bottom-3 right-1">
              <MdEdit size={18} />
            </div>
          </div>
          <div className="flex flex-col flex-grow relative  ">
            <label className="text-xl font-bold m-3" htmlFor="email">
              confirm password <span className="text-red-700">*</span>
            </label>
            <div className="relative  ">
              <input
                type="email"
                id="email"
                className="bg-slate-200 rounded-lg  h-full outline-none p-3  w-full text-xl"
                placeholder="abebe@gmail.com "
              />
            </div>
            <div className="absolute bottom-3 right-1">
              <MdEdit size={18} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Inputs;
