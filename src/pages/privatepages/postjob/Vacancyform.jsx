import React from "react";
import Inputfields from "./Inputfields";
import Preview from "./Preview";
import { useState } from "react";
import Location from "../../../components/basecomponents/Location";
const Vacancyform = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    category: "",
    jobType: "",
    skillLevel: "",
    salary: "",
    rate: "",
    currency: "",
    shortdescription: "",
    requirements: "",
    jobDescription: "",
    applyInstructions: "",
    skills: "",
    applyLink: "",
    display_company_name: "false",
    publish_status: "",
  });
  const [showPreview, setShowPreview] = useState(false);

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <div>
      <Location />

      {showPreview ? (
        <Preview formData={formData} onBack={() => setShowPreview(false)} />
      ) : (
        <Inputfields
          formData={formData}
          updateFormData={updateFormData}
          onPreview={() => setShowPreview(true)}
        />
      )}
    </div>
  );
};

export default Vacancyform;
