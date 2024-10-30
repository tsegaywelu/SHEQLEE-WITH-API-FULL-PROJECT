import React from "react";
import logo from "../assets/logo.png";
import Mybutton from "./Mybutton";
import Select from "react-select";
const Header = () => {
  //this is using the react-select modul to list te drop downs
  const options = [
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "java", label: "Java" },
  ];

  // left component
  const leftsidecontent = () => {
    return (
      <>
        {/* Left section: Logo and title */}
        <div className="md:flex items-center mx-10 ">
          <img src={logo} alt="Logo loading..." className="h-20" />
          <h1 className="md:text-xl font-bold">Sheqlee</h1>
        </div>
      </>
    );
  };
  // right component
  const rightsidecontent = () => {
    return (
      <>
        {/* Right section: Navigation and buttons */}
        <div className="md:flex space-x-8  md:flex-row">
          <div>All jobs</div>

          {/* Category Dropdown */}
          <div>
            <Select options={options} placeholder="Categories" />
          </div>
          <div>Clients</div>

          {/* Buttons */}
          <div className="md:flex md:space-x-8">
            <Mybutton background={"bg-indigo-500"}>Login In</Mybutton>
            <Mybutton background={"bg-green-900"}>Sign Up</Mybutton>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* Main container */}
      <div className="bg-slate-100 md:flex justify-between items-center  py-4 mx-20 rounded-sm">
        {/* left side part */}
        {leftsidecontent()}

        {/* wright side part */}
        {rightsidecontent()}
      </div>
    </>
  );
};

export default Header;
