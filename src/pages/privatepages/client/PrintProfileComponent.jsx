import React from "react";
import tsegay from "../../../assets/tsegay.jpg";
import mysvg from "../../../assets/SVG/footerlogo.svg";
import { useRef } from "react";
import Skillprinttable from "../../../components/onetimecmponent/Skillprinttable";
//this component is going to print if user clicks on the print button to Profilepreviw.jsx but now it is hidden
const PrintProfileComponent = ({ name, title, mylinks, skills, history }) => {
  console.table(mylinks);
  const printComponentRef = useRef();
  return (
    <div>
      <div ref={printComponentRef} className="   p-20 font-kantumruy">
        {" "}
        {/* Print styles here */}
        <div className="flex  flex-col items-start gap-5 mb-4">
          <div>
            <img
              src={tsegay}
              alt="Profile"
              className="w-24 h-24 rounded-full mr-4"
            />
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="text-xl">{title}</p>
          </div>
        </div>
        <div>
          <ul className="">
            {mylinks.map((link) => (
              <li key={link.profile} className="text-2xl list-none">
                {link.profile}:{" "}
                <span className="text-custom-blue font-medium font-kantumruy">
                  {link.link}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          {/* //skills table part */}
          <Skillprinttable skills={skills} />
        </div>
        <div className="mb-4">
          <h2 className="text-3xl font-medium mb-2 font-kantumruy">
            self introduction
          </h2>
          <p className="text-xl font-kantumruy">{history}</p>
        </div>
      </div>
      <div className="my-20 text-start  m-5 p-5  bg-black text-white">
        <div className="flex justify-between items-center  font-kantumruy  ">
          <img src={mysvg} alt="Logo loading..." className=" h-[50px]" />
          <p className="text-xl">
            Sheqlee — Your #1 place to find skilled professionals.
          </p>
        </div>
        <p className=" font-kantumruy font-light text-xs mt-5">
          © 2024 Sheqlee Co., Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default PrintProfileComponent;
