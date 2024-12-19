import React from "react";
import delete1 from "../../assets/direction/delete.svg";
import Dropdownprofile from "../basecomponents/Dropdownprofile";
import { useState } from "react";
const Linkstabble = ({ mylinks }) => {
  const [showmodal, setshowmodal] = useState(false);
  return (
    <div>
      {showmodal && <Dropdownprofile message={"Add a new link"} />}
      <div className="space-y-3 mb-5">
        <h2 className="font-kantumruy text-xl font-medium">Your profiles</h2>
        <p className="font-kantumruy ">
          Adding your links to your profiles make more credible. Profiles could
          be GitHub, LinkedIn etc.
        </p>
      </div>
      <div className="rounded-[15px]  overflow-hidden h-fit w-fll ">
        <table className="w-full font-kantumruy  " style={{ padding: "10px" }}>
          <thead className="bg-custom-placeholder     ">
            <tr>
              <th className="text-start font-kantumruy font-medium text-white p-4 text-xl">
                Profile name
              </th>
              <th className="text-end p-0 ">
                <div className="text-xl  ">
                  <p className="text-start w-full font-kantumruy font-medium text-white ">
                    URL
                  </p>
                </div>
              </th>
              <th className="text-end  pr-4 font-kantumruy font-medium text-white text-xl">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-custom-tags  rounded-b-[15px] overflow-hidden ">
            {mylinks.map((thelink, index) => (
              <tr key={index} className="border-b-2 border-custom-placeholder">
                {" "}
                <td className="text-start  pl-3">{thelink.profile}</td>
                <td className="text-sart py-5 ">{thelink.link}</td>
                <td className="text-end pr-3  ">
                  <button
                    onClick={() => onDeleteSkill(index)}
                    className="bg-custom-purple p-2 rounded-md"
                  >
                    <img src={delete1} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-end my-10">
        <button
          className="font-kantumruy font-semibold bg-custom-purple px-5 py-2 rounded-[5px] text-white"
          onClick={(e) => setshowmodal(true)}
        >
          Add a link
        </button>
      </div>
    </div>
  );
};

export default Linkstabble;
