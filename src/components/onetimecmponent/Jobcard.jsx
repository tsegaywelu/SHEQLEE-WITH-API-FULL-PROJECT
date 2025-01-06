import React from "react";
import eye from "../../assets/direction/eye1.svg";
import copy from "../../assets/direction/copy.svg";
import delete1 from "../../assets/direction/delete.svg";
import edit from "../../assets/direction/edit.svg";

const Jobdetail = () => {
  return (
    <div className="  overflow-hidden w-fit rounded-[15px] pb-[11px]  bg-clip-padding bg-custom-slate">
      <table className="w-fit mx-auto ">
        <thead className=" text-sm md:text-2xl bg-custom-tags font-kantumruy  ">
          <th className="px-4  text-left  py-7 rounded-tl-lg font-medium ">
            JID
          </th>
          <th className="px-4  text-left font-medium">Title</th>
          <th className="px-4  text-left font-medium ">Type</th>
          <th className="px-4  text-left  font-medium">Level</th>
          <th className="px-4  text-left font-medium ">Status</th>
          <th className="px-4  text-left   font-medium">Actions</th>
        </thead>
        <tbody className="text-sm md:text-xl lg:text-[22px] bg-custom-slate font-kantumruy ">
          <tr className="border-b-2  border-gray-200  ">
            <td className=" px-6 py-5">1</td>
            <td className=" px-6">Senior Mobile App developer</td>
            <td className=" px-6">Full-time</td>
            <td className=" px-6">Senior</td>
            <td className=" px-6">
              {" "}
              <div className=" rounded border-2 border-gray-700 p-[1px] w-10 h-fit flex justify-center">
                <div className="min-w-3 w-3 min-h-3 h-3 rounded bg-gray-700 "></div>
              </div>
            </td>
            <td className=" px-6 relative ">
              <div className="flex items-center justify-center gap-1  ">
                <button className="bg-custom-purple p-[10px] rounded-md w-8 h-8">
                  {/* <img src={copy} alt="" /> */}
                  <img src={copy} alt="" />
                </button>
                <button className="bg-black py-1 px-4 rounded-lg text-white ">
                  Publish
                </button>
                <button className="bg-custom-purple p-[10px] rounded-md w-8 h-8">
                  {/* <MdEdit size={22} /> */}
                  <img src={edit} alt="" />
                </button>
                <button className="bg-custom-purple p-[10px] rounded-md w-8 h-8">
                  {/* <img src={delete1} alt="" /> */}
                  <img src={delete1} alt="" />
                </button>
                <button className=" absolute   bg-custom-tags text-xs -bottom-2 right-0  rounded-[3px] px-2 py-[2px]">
                  Delete draft
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-b-2  border-gray-200   ">
            <td className=" px-6 py-5">2</td>
            <td className=" px-6">Phython back-end developer</td>
            <td className=" px-6">Part time </td>
            <td className=" px-6">Lead</td>
            <td className=" px-6">
              <div className=" rounded border-2 border-green-500 p-[1px] w-10 h-fit flex justify-end">
                <div className="min-w-3 w-3 min-h-3 h-3 rounded bg-green-500 "></div>
              </div>
            </td>
            <td className=" px-6 ">
              <div className="flex items-center justify-start gap-1 relative">
                <button className="bg-custom-purple p-[10px] rounded-md w-8 h-8">
                  <img src={copy} alt="" />
                </button>
                <button className="bg-custom-purple p-[8px] rounded-md w-8 h-8">
                  <img src={eye} alt="" />
                </button>
                <button className="bg-custom-purple p-[10px] rounded-md w-8 h-8">
                  <img src={delete1} alt="" />
                </button>
                <button className=" absolute   bg-custom-tags text-xs -bottom-7 rounded-[3px] px-2 py-[2px]">
                  Duplicate vacancy
                </button>
              </div>
            </td>
          </tr>
          <tr className="  ">
            <td className=" px-6 py-5">3</td>
            <td className=" px-6">React js developer</td>
            <td className=" px-6">part-time</td>
            <td className=" px-6">middle</td>
            <td className=" px-6">
              <div className=" rounded border-2 border-red-700 p-[1px] w-10 h-fit flex justify-start">
                <div className="min-w-3 w-3 min-h-3 h-3 rounded bg-red-700 "></div>
              </div>
            </td>
            <td className=" px-6 ">
              <div className="flex items-center justify-start gap-1 relative ">
                <button className="bg-custom-purple p-[10px] rounded-md w-8 h-8">
                  <img src={copy} alt="" />
                </button>
                <button className="bg-custom-purple p-[8px] rounded-md w-8 h-8">
                  {/* <img src={eye} alt="" /> */}
                  <img src={eye} alt="" />
                </button>
                <button className="bg-custom-purple p-[10px] rounded-md w-8 h-8">
                  <img src={delete1} alt="" />
                </button>
                <button className=" absolute   bg-custom-tags text-xs left-9 -bottom-7  rounded-[3px] px-2 py-[2px]">
                  View details
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Jobdetail;
