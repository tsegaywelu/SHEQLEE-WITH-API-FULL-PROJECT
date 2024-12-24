import React from "react";
import { FaCopy } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import eye from "../../assets/direction/eye1.svg";
import copy from "../../assets/direction/copy.svg";
import delete1 from "../../assets/direction/delete.svg";
import edit from "../../assets/direction/edit.svg";

const Jobdetail = () => {
  return (
    <div className="w-full overflow-auto">
      <table className="w-fit mx-auto">
        <thead className=" text-sm md:text-2xl bg-custom-tags font-kantumruy rounded-t-[20px] ">
          <th className="px-4  text-left  py-7 rounded-tl-lg font-medium ">
            JID
          </th>
          <th className="px-4  text-left font-medium">Title</th>
          <th className="px-4  text-left font-medium ">Type</th>
          <th className="px-4  text-left  font-medium">Level</th>
          <th className="px-4  text-left font-medium ">Status</th>
          <th className="px-4  text-left   font-medium">Actions</th>
        </thead>
        <tbody className="text-sm md:text-xl lg:text-2xl bg-custom-slate font-kantumruy">
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
            <td className=" px-6 ">
              <div className="flex items-center justify-center gap-1 relative">
                <button className="bg-custom-purple p-2 rounded-md">
                  {/* <img src={copy} alt="" /> */}
                  <img src={copy} alt="" />
                </button>
                <button className="bg-black py-1 px-4 rounded-lg text-white">
                  Publish
                </button>
                <button className="bg-custom-purple p-2 rounded-md">
                  {/* <MdEdit size={22} /> */}
                  <img src={edit} alt="" />
                </button>
                <button className="bg-custom-purple p-2 rounded-md">
                  {/* <img src={delete1} alt="" /> */}
                  <img src={delete1} alt="" />
                </button>
                <button className=" absolute   bg-custom-tags text-sm -bottom-6  right-0 px-1">
                  delete draft
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-b-2  border-gray-200   ">
            <td className=" px-6 py-5">2</td>
            <td className=" px-6">phython back-end developer</td>
            <td className=" px-6">part time </td>
            <td className=" px-6">Lead</td>
            <td className=" px-6">
              <div className=" rounded border-2 border-green-500 p-[1px] w-10 h-fit flex justify-center">
                <div className="min-w-3 w-3 min-h-3 h-3 rounded bg-green-500 "></div>
              </div>
            </td>
            <td className=" px-6">
              <div className="flex items-center justify-start gap-1 relative">
                <button className="bg-custom-purple p-2 rounded-md">
                  <img src={copy} alt="" />
                </button>
                <button className="bg-custom-purple p-2 rounded-md">
                  <img src={eye} alt="" />
                </button>
                <button className="bg-custom-purple p-2 rounded-md">
                  <img src={delete1} alt="" />
                </button>
                <button className=" absolute   bg-custom-tags text-sm -bottom-6 px-1 ">
                  duplicate vacancy
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-b-2  border-gray-200  ">
            <td className=" px-6 py-5">3</td>
            <td className=" px-6">react js developer</td>
            <td className=" px-6">part-time</td>
            <td className=" px-6">middle</td>
            <td className=" px-6">
              <div className=" rounded border-2 border-red-700 p-[1px] w-10 h-fit flex justify-start">
                <div className="min-w-3 w-3 min-h-3 h-3 rounded bg-red-700 "></div>
              </div>
            </td>
            <td className=" px-6 ">
              <div className="flex items-center justify-start gap-1 relative">
                <button className="bg-custom-purple p-2 rounded-md">
                  <img src={copy} alt="" />
                </button>
                <button className="bg-custom-purple p-2 rounded-md">
                  {/* <img src={eye} alt="" /> */}
                  <img src={eye} alt="" />
                </button>
                <button className="bg-custom-purple p-2 rounded-md">
                  <img src={delete1} alt="" />
                </button>
                <button className=" absolute   bg-custom-tags text-sm -bottom-6 px-1 ">
                  view details
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
