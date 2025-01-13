import React from "react";
import { Link } from "react-router-dom";
import Dashboaredtitle from "../components/onetimecmponent/Dashboaredtitle";
import categories12 from "../assets/SVG/categories.svg";
import websvg from "../assets/catagorySvgs/web.svg";
import uiuxdesign from "../assets/catagorySvgs/uiuxdesign.svg";
import product from "../assets/catagorySvgs/product.svg";
import qualityassurance from "../assets/catagorySvgs/qualityassurance.svg";
import devops from "../assets/catagorySvgs/devops.svg";
import python from "../assets/catagorySvgs/python.svg";
import CatagoriesCard from "../cards/CatagoriesCard";
import Location from "../components/basecomponents/Location";
import Qestion from "../components/basecomponents/Qestion";
import Paginationmobile from "../components/basecomponents/Paginationmobile";
const categories = [
  { title: "Web Frontend", jobs: 140, subscribers: 2173, icon: websvg, id: 1 },
  {
    title: "Backend & Database",
    jobs: 140,
    subscribers: 2173,
    icon: devops,
    id: 2,
  },
  {
    title: "UI UX & Product Design",
    jobs: 78,
    subscribers: 1045,
    icon: uiuxdesign,
    id: 3,
  },
  {
    title: "Machin learning",
    jobs: 140,
    subscribers: 2173,
    icon: qualityassurance,
    id: 4,
  },
  {
    title: "Mobile Application",
    jobs: 140,
    subscribers: 2173,
    icon: product,
    id: 5,
  },
  {
    title: "Web Full-Stack",
    jobs: 140,
    subscribers: 2173,
    icon: python,
    id: 6,
  },
  {
    title: "QA & DevOps Engineer",
    jobs: 140,
    subscribers: 2173,
    icon: qualityassurance,
    id: 7,
  },
  {
    title: "Security",
    jobs: 140,
    subscribers: 2173,
    icon: websvg,
    id: 8,
  },
  { title: "Web Frontend", jobs: 140, subscribers: 2173, icon: websvg, id: 16 },
  {
    title: "Backend & Database",
    jobs: 140,
    subscribers: 2173,
    icon: devops,
    id: 9,
  },
  {
    title: "UI UX & Product Design",
    jobs: 78,
    subscribers: 1045,
    icon: uiuxdesign,
    id: 10,
  },
  {
    title: "Machin learning",
    jobs: 140,
    subscribers: 2173,
    icon: qualityassurance,
    id: 11,
  },
  {
    title: "Mobile Application",
    jobs: 140,
    subscribers: 2173,
    icon: product,
    id: 12,
  },
  {
    title: "Web Full-Stack",
    jobs: 140,
    subscribers: 2173,
    icon: python,
    id: 13,
  },
  {
    title: "QA & DevOps Engineer",
    jobs: 140,
    subscribers: 2173,
    icon: qualityassurance,
    id: 14,
  },
  {
    title: "Security",
    jobs: 140,
    subscribers: 2173,
    icon: websvg,
    id: 15,
  },
];

const Categories = () => {
  return (
    <div>
      <div className="relative">
        <Location />
      </div>

      <div className="mt-10">
        <Dashboaredtitle
          text={
            " Job categories along with their respective number of jobs posted and" +
            " subscribers."
          }
          heading={"All Categories"}
          css={550}
        >
          <img src={categories12} width={70} height={70} />
        </Dashboaredtitle>
      </div>
      <div className="max-w-[950px] mx-auto my-8 px-4 py-2 md:p-6">
        {/* {the title } */}

        {/* Categories Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-5 text-xl  ">
          {categories.map((category) => (
            <Link to={`/sheqlee/Categories/${category.title}`}>
              <CatagoriesCard
                key={category.id}
                title={category.title}
                jobs={category.jobs}
                subscribers={category.subscribers}
              >
                <img src={category.icon} height={32} width={32} alt="" />
              </CatagoriesCard>
            </Link>
          ))}
        </div>
        <div className="  mx-2 md:hidden   mt-1">
          <Paginationmobile totalPages={15} />
        </div>
      </div>
      <Qestion />
    </div>
  );
};

export default Categories;
