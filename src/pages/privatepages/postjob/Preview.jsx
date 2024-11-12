import React from "react";

const Preview = ({ formData, onBack }) => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Preview Vacancy</h1>

      <p>
        <strong>Job Title:</strong> {formData.jobTitle}
      </p>
      <p>
        <strong>Category:</strong> {formData.category}
      </p>
      <p>
        <strong>Job Type:</strong> {formData.jobType}
      </p>
      <p>
        <strong>Skill Level:</strong> {formData.skillLevel}
      </p>
      <p>
        <strong>Salary:</strong> {formData.salary}
      </p>

      <h3>Requirements</h3>
      <div dangerouslySetInnerHTML={{ __html: formData.requirements }} />
      <h3>shortdescription</h3>
      <div dangerouslySetInnerHTML={{ __html: formData.shortdescription }} />
      <h3>jobDescription</h3>
      <div dangerouslySetInnerHTML={{ __html: formData.jobDescription }} />

      <h3>applyInstructions</h3>
      <div dangerouslySetInnerHTML={{ __html: formData.applyInstructions }} />

      <p>
        <strong>Skills:</strong> {formData.skills}
      </p>

      <p>
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
  );
};

export default Preview;

// jobTitle: "",
// category: "",
// jobType: "",
// skillLevel: "",
// salary: "",
// shortdescription: "",
// requirements: "",
// jobDescription: "",
// applyInstructions: "",
// skills: "",
// applyLink: "",
