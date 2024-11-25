import React, { useState } from "react";
import down from "../assets/SVG/down.svg";
import up from "../assets/SVG/up.svg";
import Location from "../components/basecomponents/Location";
import question from "../assets/SVG/question.svg";
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
        <div className="flex justify-center items-center">
          <img src={question} className="my-2" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-4 p-2">FAQ</h1>
        <p className="text-center mb-6 text-sm md:text-xl lg:text-2xl max-w-2xl mx-auto">
          The following are some of the most commonly asked questions by our
          users.
        </p>

        {/* //button sections */}
        <div className="flex justify-center items-center  ">
          <div className="mb-4 bg-custom-tags  w-fit m-3  rounded-xl">
            <button
              onClick={(e) => setactivetab("freelancers")}
              className={`px-8 py-4 font-semibold rounded-lg 
        ${
          activetab === "freelancers"
            ? "bg-black text-white m-3"
            : "bg-custom-tags text-gray-800"
        }`}
            >
              freelancers
            </button>

            <button
              onClick={() => setactivetab("companies")}
              className={`px-4 py-3 font-semibold rounded-lg ${
                activetab === "companies"
                  ? "bg-black text-white m-3 "
                  : "bg-custom-tags text-gray-800"
              }`}
            >
              Companies
            </button>
          </div>
        </div>

        {/* //questions list  */}

        <div className="space-y-4">
          {faqData[activetab].map((item, index) => {
            return (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 md:px-12 py-3 md:py-6 text-left text-sm md:text-xl bg-custom-tags font-semibold"
                  onClick={() => togleanswer(index)}
                >
                  {item.question}
                  <span className="float-right">
                    {openquestion === index ? (
                      <img src={up} />
                    ) : (
                      <img src={down} />
                    )}
                  </span>
                </button>
                {openquestion === index && (
                  <div className="p-4 bg-custom-slate text-gray-700">
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
