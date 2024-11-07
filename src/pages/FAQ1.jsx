import React, { useState } from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import Location from "../components/basecomponents/Location";

const FAQ1 = () => {
  const [activetab, setactivetab] = useState("freelancers");
  const [openquestion, setopenquestion] = useState(null);
  ///////////////////////////////////////////////////
  const faqData = {
    freelancers: [
      {
        question: "How does Sheqlee benefit freelancers?",
        answer: "Sheqlee provides ... ",
      },
      {
        question: "What services can freelancers offer?",
        answer: "Freelancers can offer ... ",
      },
    ],
    companies: [
      {
        question: "How do I post a job vacancy on Sheqlee?",
        answer: "In order to post a job ... ",
      },
      {
        question: "What information is required to create a company account?",
        answer: "To create a company account ... ",
      },
    ],
  };
  ///////////////////////////////////////////////
  function togleanswer(index) {
    return setopenquestion(openquestion === index ? null : index);
  }
  return (
    <div>
      <Location />
      <div className="p-6 max-w-4xl mx-auto  mt-2 md:mt-6 ">
        <HiOutlineQuestionMarkCircle
          size={62}
          className="mx-auto p-1 text-purple-500"
        />
        <h1 className="text-3xl font-bold text-center mb-4 p-2">FAQ</h1>
        <p className="text-center mb-6 text-sm md:text-xl lg:text-2xl max-w-2xl mx-auto">
          The following are some of the most commonly asked questions by our
          users.
        </p>

        {/* //button sections */}

        <div className="flex justify-center  mb-4">
          <button
            onClick={(e) => setactivetab("freelancers")}
            className={`px-8 py-4 font-semibold rounded-lg 
        ${
          activetab === "freelancers"
            ? "bg-black text-white"
            : "bg-gray-200 text-gray-800"
        }`}
          >
            freelancers
          </button>

          <button
            onClick={() => setactivetab("companies")}
            className={`px-8 py-4 font-semibold rounded-lg ${
              activetab === "companies"
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Companies
          </button>
        </div>

        {/* //questions list  */}

        <div className="space-y-4">
          {faqData[activetab].map((item, index) => {
            return (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 md:px-12 py-3 md:py-6 text-left text-sm md:text-xl bg-gray-200 font-semibold"
                  onClick={() => togleanswer(index)}
                >
                  {item.question}
                  <span className="float-right">
                    {openquestion === index ? "▲" : "▼"}
                  </span>
                </button>
                {openquestion === index && (
                  <div className="p-4 bg-gray-100 text-gray-700">
                    {" "}
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ1;
