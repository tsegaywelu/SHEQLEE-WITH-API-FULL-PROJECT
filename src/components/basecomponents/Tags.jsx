import React, { useEffect, useState } from "react";
import Rightarrow from "../../assets/SVG/Right.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Totaltags } from "../../data/Tags";
import Pagination from "./Pagination";
import Tagsmobile from "./Tagsmobile";
import Paginationmobile from "./Paginationmobile";
const emptyRectangles = [{}, {}, {}, {}, {}, {}];
const Tags = ({ showmobile, showpagination, totalPages }) => {
  const { pathname } = useLocation();
  const actualpath = pathname.replaceAll("/", "");
  let changebackground = false;
  if (actualpath === "sheqleetags" || actualpath === "sheqleecompany") {
    changebackground = true;
  }

  const mylink = pathname.includes("tags")
    ? "tag"
    : pathname.includes("company")
    ? "company"
    : "tag";
  const [loading, setloading] = useState(false);
  // const [Totaltags, setTotaltags] = useState(new Array(8));
  // useEffect(() => {
  //   async function fetchtags() {
  //     try {
  //       setloading(true);
  //       const response = await fetch("http://localhost:3000/tags");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch jobs");
  //       }
  //       const result = await response.json();
  //       setTotaltags(result);
  //       setloading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchtags();
  // }, []);
  return (
    <>
      {loading ? (
        // page in a loading situation

        <div
          className={` px-3 md:px-6 lg:px-16 pb-5 ${
            changebackground ? "bg-white" : "bg-custom-slate"
          }   `}
        >
          {/* top texsts */}

          {actualpath === "sheqlee" && (
            <div className="flex justify-between py-3">
              <h4 className="text-[14px] md:text-[33px]  font-kantumruy font-medium">
                Popular tags
              </h4>
              <div className="flex justify-center items-center gap-2 relative ">
                <div className="w-24 h-4 bg-custom-tags  rounded-[2px] "></div>
                <div className=" absolute  w-1/3 h-[4px] bg-custom-purple left-0 bottom-1 "></div>
                <img src={Rightarrow} alt="" width={8} height={12} />
              </div>
            </div>
          )}
          {/* //display the tags  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-5 gap-x-16 animate-pulse">
            {emptyRectangles.map((tag) => {
              return (
                <div
                  key={tag.id}
                  className={` p-4 md:p-3 lg:p-6 rounded-xl border-l-[5px] md:border-l-[20px] lg: border-l-black ${
                    changebackground ? "bg-custom-slate" : "bg-custom-tags"
                  }  `}
                >
                  <div className="font-semibold text-2xl w-1/2 h-3 bg-custom-load mb-4 rounded-[3px]"></div>
                  <div className=" flex justify-center  items-center gap-2 w-1/2">
                    {" "}
                    <span className="w-1/2 h-2 bg-custom-load rounded-[3px]"></span>
                    <span className="w-fit h-1 flex justify-center items-center text-xl text-custom-placeholder ">
                      •
                    </span>
                    <span className="w-1/2 h-2 bg-custom-load rounded-[3px]"></span>{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // if the page is loaded
        <div
          className={` px-2 md:px-5 lg:px-16 py-1 md:py-3 lg:pt-2  lg:pb-7 ${
            changebackground ? "bg-white" : "bg-custom-slate"
          } `}
        >
          {/* actualpath==='sheqleetags' */}
          {actualpath === "sheqlee" && (
            <div className="flex justify-between my-3">
              <h4 className=" text-[23px]    md:text-[33px]  font-kantumruy font-medium pb-2">
                Popular tags
              </h4>
              <div className="flex justify-center items-center gap-2 relative pb-4">
                <p className=" text-xs md:text-sm font-kantumruy font-medium">
                  73+ more tags{" "}
                </p>
                <div className=" absolute  w-1/2 h-[4px] bg-custom-purple left-0 bottom-3 md:bottom-5"></div>
                <img src={Rightarrow} alt="" width={8} height={12} />
              </div>
            </div>
          )}

          {/* //display the tags  */}
          <div
            className={` ${
              showmobile ? "hidden" : "grid"
            } md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-20 gap-y-5 md:gap-y-8`}
          >
            {Totaltags.slice(0, 6).map((tag) => {
              return (
                <Link to={`/sheqlee/${mylink}/${tag.tagname}`}>
                  <div
                    key={tag.id}
                    className={`mx-3 md:mx-0  px-6 md:px-4 py-[6px] md:py-3 rounded-[10px] md:rounded-xl border-l-[12px] md:border-l-[15px] border-l-black ${
                      changebackground ? "bg-custom-slate" : "bg-custom-tags"
                    }   `}
                  >
                    <div className="font-kantumruy font-medium  text-lg md:text-2xl">
                      {tag.tagname}
                    </div>
                    <div className="font-kantumruy mt-[5px] md:mt-2  text-[14px] md:text-[17px]  text-custom-placeholder">
                      {tag.numberofjobs} jobs • {tag.numberofsubscribers}{" "}
                      subscribers
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {showmobile && <Tagsmobile />}
        </div>
      )}

      {showpagination && (
        <div className="">
          <div className=" hidden md:block  mb-10 mx-16">
            <Pagination totalPages={totalPages} />
          </div>
          <div className="  mx-5 md:hidden   mt-1">
            <Paginationmobile totalPages={totalPages} />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Tags);
