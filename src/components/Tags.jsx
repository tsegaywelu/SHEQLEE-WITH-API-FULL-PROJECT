import React, { useState } from "react";
import { Totaltags } from "../data/Tags";
const Tags = () => {
  const [loading, setloading] = useState(true);
  return (
    <>
      {loading ? (
        // page in a loading situation
        <div className=" bg-gray-200 mx-20 px-12 py-5">
          {/* top texsts */}
          <div className="flex justify-between">
            <h4 className="text-2xl">Popular Tags</h4>
            <div> &gt;</div>
          </div>
          {/* //display the tags  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Totaltags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  className=" bg-gray-400 p-10 rounded-xl border-l-[15px] border-l-black "
                >
                  <div className="font-semibold text-2xl"></div>
                  <div></div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // if the page is loaded
        <div className=" bg-gray-200 mx-20 px-12 py-5">
          {/* top texsts */}
          <div className="flex justify-between">
            <h4 className="text-2xl">Popular Tags</h4>
            <div>73+ more tags &gt;</div>
          </div>
          {/* //display the tags  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Totaltags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  className=" bg-gray-400 p-5 rounded-xl border-l-[15px] border-l-black "
                >
                  <div className="font-semibold text-2xl">{tag.tagname}</div>
                  <div>
                    {tag.numberofjobs} jobs . {tag.numberofsubscribers}{" "}
                    subscribers
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Tags);
