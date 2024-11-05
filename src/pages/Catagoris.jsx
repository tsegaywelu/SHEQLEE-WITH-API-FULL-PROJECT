import React from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaDatabase,
  FaBrush,
  FaMobileAlt,
  FaRobot,
  FaCode,
  FaShieldAlt,
  FaWrench,
} from "react-icons/fa";
import { GiMagnifyingGlass, GiGearHammer } from "react-icons/gi";
import CatagoriesCard from "../cards/CatagoriesCard";
import Location from "../components/basecomponents/Location";

const categories = [
  { title: "Web Frontend", jobs: 140, subscribers: 2173, icon: <FaGlobe /> },
  {
    title: "Backend & Database",
    jobs: 140,
    subscribers: 2173,
    icon: <FaDatabase />,
  },
  {
    title: "UI/UX & Product Design",
    jobs: 78,
    subscribers: 1045,
    icon: <FaBrush />,
  },
  {
    title: "Mobile Application",
    jobs: 140,
    subscribers: 2173,
    icon: <FaMobileAlt />,
  },
  {
    title: "Machine Learning",
    jobs: 140,
    subscribers: 2173,
    icon: <FaRobot />,
  },
  { title: "Web Full-Stack", jobs: 140, subscribers: 2173, icon: <FaCode /> },
  { title: "Security", jobs: 140, subscribers: 2173, icon: <FaShieldAlt /> },
  {
    title: "QA & DevOps Engineer",
    jobs: 140,
    subscribers: 2173,
    icon: <FaWrench />,
  },
  {
    title: "Web Frontend",
    jobs: 140,
    subscribers: 2173,
    icon: <GiMagnifyingGlass />,
  },
  {
    title: "UI/UX & Product Design",
    jobs: 78,
    subscribers: 1045,
    icon: <FaBrush />,
  },
  {
    title: "Mobile Application",
    jobs: 140,
    subscribers: 2173,
    icon: <FaMobileAlt />,
  },
  {
    title: "Backend & Database",
    jobs: 140,
    subscribers: 2173,
    icon: <FaDatabase />,
  },
  {
    title: "Machine Learning",
    jobs: 140,
    subscribers: 2173,
    icon: <FaRobot />,
  },
  {
    title: "Web Full-Stack",
    jobs: 140,
    subscribers: 2173,
    icon: <FaCode />,
  },
  {
    title: "Security",
    jobs: 140,
    subscribers: 2173,
    icon: <FaShieldAlt />,
  },
];

const Catagoris = () => {
  const fakeid = "catagorydetail";
  return (
    <div>
      <Location />
      <div className="max-w-4xl mx-auto my-8 p-6">
        {/* {the title } */}
        <div className="text-center mb-8">
          <div className="flex justify-center text-purple-500 text-4xl mb-2">
            <FaGlobe />
          </div>
          <h1 className="text-3xl font-bold">All Categories</h1>
          <p className="text-gray-500 mt-2">
            Job categories along with their respective number of jobs posted and
            number of subscribers.
          </p>
        </div>

        {/* Categories Grid */}
        <Link to={`/sheqle/catagory/${fakeid}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xl p-3">
            {categories.map((category) => (
              <CatagoriesCard
                key={category.title}
                title={category.title}
                jobs={category.jobs}
                subscribers={category.subscribers}
                icon={category.icon}
              />
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Catagoris;
