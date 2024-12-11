import React, { useEffect, useState } from "react";
import Rightarrow from "../../assets/SVG/Right.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import { Totaltags } from "../../data/Tags";
const emptyRectangles = [{}, {}, {}, {}, {}, {}];
const Tags = () => {
  const { pathname } = useLocation();
  const actualpath = pathname.replaceAll("/", "");
  const fakeid = "tag detail";
  const [loading, setloading] = useState(true);
  const [Totaltags, setTotaltags] = useState(new Array(8));
  useEffect(() => {
    async function fetchtags() {
      try {
        setloading(true);
        const response = await fetch("http://localhost:3000/tags");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const result = await response.json();
        setTotaltags(result);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchtags();
  }, []);
  return (
    <>
      {loading ? (
        // page in a loading situation
        <div className=" bg-custom-slate  px-3 md:px-6 lg:px-12 py-1 md:py-2 lg:py-5">
          {/* top texsts */}

          {actualpath === "sheqlee" && (
            <div className="flex justify-between">
              <h4 className="text-[40px] font-kantumruy font-medium my-3">
                Popular tags
              </h4>
              <div className="flex justify-center items-center gap-2 relative ">
                <div className="w-24 h-4 bg-custom-tags  "></div>
                <div className=" absolute  w-1/2 h-[7px] bg-custom-purple left-0 bottom-6"></div>
                <img src={Rightarrow} alt="" width={8} height={12} />
              </div>
            </div>
          )}
          {/* //display the tags  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {emptyRectangles.map((tag) => {
              return (
                <div
                  key={tag.id}
                  className=" bg-custom-tags p-4 md:p-3 lg:p-6 rounded-xl border-l-[5px] md:border-l-[20px] lg: border-l-black "
                >
                  <div className="font-semibold text-2xl w-1/2 h-5 bg-custom-load mb-4 rounded-lg"></div>
                  <div className=" flex justify-center gap-5 w-1/2">
                    {" "}
                    <span className="w-1/2 h-3 bg-custom-load rounded-lg"></span>
                    <span className="w-fit h-2  flex justify-center items-end text-3xl ">
                      .
                    </span>
                    <span className="w-1/2 h-3 bg-custom-load rounded-lg"></span>{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // if the page is loaded
        <div className=" bg-custom-slate px-2 md:px-5 lg:px-12 py-1 md:py-3 lg:py-5">
          {/* top texsts */}

          {actualpath === "sheqlee" && (
            <div className="flex justify-between">
              <h4 className="text-[50px]  font-kantumruy font-medium my-3">
                Popular tags
              </h4>
              <div className="flex justify-center items-center gap-2 relative">
                <p className="text-xs font-kantumruy font-medium">
                  745+ more tags{" "}
                </p>
                <div className=" absolute  w-1/2 h-[4px] bg-custom-purple left-0 bottom-6"></div>
                <img src={Rightarrow} alt="" width={8} height={12} />
              </div>
            </div>
          )}

          {/* //display the tags  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {Totaltags.slice(0, 6).map((tag) => {
              return (
                <Link to={`/sheqlee/tag/${fakeid}`}>
                  <div
                    key={tag.id}
                    className=" bg-custom-tags  p-5 rounded-xl border-l-[15px] border-l-black "
                  >
                    <div className="font-kantumruy font-medium text-2xl">
                      {tag.tagname}
                    </div>
                    <div className="font-kantumruy ">
                      {tag.numberofjobs} jobs . {tag.numberofsubscribers}{" "}
                      subscribers
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Tags);
