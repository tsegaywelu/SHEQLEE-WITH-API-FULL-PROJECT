import React, { useState } from "react";

import arrowdown from "../../assets/direction/arrowdown.svg";

const SalaryInput = ({
  salary,
  currency,
  rate,
  setSalary,
  setCurrency,
  setRate,
}) => {
  return (
    <div className="">
      {/* <label htmlFor="salary" className="text-xl   my-3 font-kantumruy font-medium text-start">
        Salary <span className="text-sm text-gray-400">(fixed or range)</span>
      </label> */}
      <div className="flex items-center  justify-between w-full">
        {/* Currency Dropdown */}
        <div className="relative  w-1/6">
          <select
            className="appearance-none bg-black text-white text-xl  p-3  rounded-l-md w-full font-kantumruy"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="$">$</option>
            <option value="€">€</option>
            <option value="£">£</option>
          </select>

          {/* Down Arrow SVG */}
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none ">
            <img
              src={arrowdown}
              alt=""
              width={10}
              height={10}
              // className="absolute right-0 top-1/2  transform -translate-y-1/2 pointer-events-none "
              className={``}
            />
          </div>
        </div>

        {/* Input Field */}
        <input
          type="text"
          id="salary"
          placeholder="Enter salary..."
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="bg-custom-tags   h-full outline-none p-3 w-2/3 text-xl font-kantumruy placeholder:text-custom-placeholder text-start"
        />

        {/* Rate Dropdown */}
        <div className="relative w-1/3 font-kantumruy ">
          <select
            className="appearance-none bg-black text-white py-3 rounded-r-md p-4 w-full text-lg  font-kantumruy"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          >
            <option value="/hour">/hour</option>
            <option value="/day">/day</option>
            <option value="/month">/month</option>
            <option value="/year">/year</option>
          </select>
          {/* Down Arrow SVG */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none ">
            <img
              src={arrowdown}
              alt=""
              width={10}
              height={10}
              // className="absolute right-0 top-1/2  transform -translate-y-1/2 pointer-events-none "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryInput;
