import React, { useState } from "react";
import down from "../assets/SVG/down.svg";
import up from "../assets/SVG/up.svg";
import Location from "../components/basecomponents/Location";
import question from "../assets/SVG/question.svg";
import Dashboaredtitle from "../components/onetimecmponent/Dashboaredtitle";
import Qestion from "../components/basecomponents/Qestion";
import Pagination from "../components/basecomponents/Pagination";
import Paginationmobile from "../components/basecomponents/Paginationmobile";
const FAQ1 = () => {
  const [activetab, setactivetab] = useState("freelancers");
  const [openquestion, setopenquestion] = useState(0);
  ///////////////////////////////////////////////////
  const faqData = {
    freelancers: [
      {
        question: "How do I post a job vacancy on Sheqlee?",
        answer:
          "In order to post a job vacancy on Sheqlee, you must first create an account as a company. Company account creation is done by just filling out a few basic information about your company. Then you can easily post a job vacancy by providing the details of the job post. It takes less than 15mins to post a job.",
      },
      {
        question: "How does Sheqlee benefit freelancers?",
        answer: "Sheqlee provides ... ",
      },
      {
        question:
          "I am a developer based out of Ethiopia. How do I get a job at one of the IT companies in S. Korea and get paid?",
        answer: "Freelancers can offer ... ",
      },
      {
        question: "How does Sheqlee benefit freelancers?",
        answer: "Freelancers can offer ... ",
      },
      {
        question: "How does Sheqlee benefit freelancers?",
        answer: "Freelancers can offer ... ",
      },
      {
        question:
          "I am a developer based out of Ethiopia. How do I get a job at one of the IT companies in S. Korea and get paid?",
        answer: "Freelancers can offer ... ",
      },
      {
        question: "How does Sheqlee benefit freelancers?",
        answer: "Freelancers can offer ... ",
      },
      {
        question: "How does Sheqlee benefit freelancers?",
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
      <div className="p-6 max-w-[850px] mx-auto  mt-2   ">
        <Dashboaredtitle
          text={
            "The following are some of the most commonly asked questions by our users."
          }
          heading={"FAQ"}
          css={500}
        >
          <img src={question} width={60} height={60} />
        </Dashboaredtitle>

        {/* //button sections */}
        <div className="flex justify-center items-center  my-4 ">
          <div className="mb-4 bg-custom-tags  font-kantumruy font-medium w-fit  m-2 md:m-3  rounded-[10px] flex">
            <button
              onClick={(e) => setactivetab("freelancers")}
              className={`px-3 md:px-10 py-[6px] text-lg md:text-xl font-medium rounded-[10px] 
        ${
          activetab === "freelancers"
            ? "bg-black text-white m-2"
            : "bg-custom-tags text-custom-black"
        }`}
            >
              Freelancers
            </button>

            <button
              onClick={() => setactivetab("companies")}
              className={`px-3 md:px-10 py-[6px] text-lg  md:text-xl font-medium rounded-[10px] ${
                activetab === "companies"
                  ? "bg-black text-white m-2"
                  : "bg-custom-tags text-custom-black "
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
              <div key={index} className=" rounded-lg overflow-hidden ">
                <button
                  className="w-full px-4 md:px-8 py-3 md:py-6 text-left text-[16px] md:text-xl bg-custom-tags font-kantumruy flex  items-center justify-between"
                  onClick={() => togleanswer(index)}
                >
                  <div className="mr-4">{item.question}</div>
                  <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center  rounded-full  ">
                    {openquestion === index ? (
                      <img src={up} className="w-full h-full object-contain" />
                    ) : (
                      <img
                        src={down}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </span>
                </button>
                {openquestion === index && (
                  <div className="p-8 bg-custom-slate text-sm md:text-lg text-custom-black font-kantumruy">
                    {" "}
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="">
          <div className=" hidden md:block  mt-2">
            <Pagination totalPages={15} />
          </div>
          <div className="   md:hidden   mt-2">
            <Paginationmobile totalPages={15} />
          </div>
        </div>
      </div>
      <Qestion />
    </div>
  );
};

export default FAQ1;
