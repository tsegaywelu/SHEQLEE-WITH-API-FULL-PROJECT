import React from "react";
import { FaCopy } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
const Jobdetail = () => {
  return (
    <div className="w-full overflow-auto">
      <table className="w-fit mx-auto">
        <thead className=" text-sm md:text-2xl">
          <th className="px-4 bg-slate-300 text-left  py-7 rounded-tl-lg">
            JID
          </th>
          <th className="px-4 bg-slate-300 text-left">Title</th>
          <th className="px-4 bg-slate-300 text-left ">Type</th>
          <th className="px-4 bg-slate-300 text-left ">Level</th>
          <th className="px-4 bg-slate-300 text-left ">Status</th>
          <th className="px-4 bg-slate-300 text-left  rounded-tr-lg">
            Actions
          </th>
        </thead>
        <tbody className="text-sm md:text-xl lg:text-2xl">
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
                <button className="bg-purple-600 p-2 rounded-md">
                  <FaCopy size={22} />
                </button>
                <button className="bg-black py-1 px-4 rounded-lg text-white">
                  Publish
                </button>
                <button className="bg-purple-600 p-2 rounded-md">
                  <MdEdit size={22} />
                </button>
                <button className="bg-purple-600 p-2 rounded-md">
                  <MdDelete size={22} />
                </button>
                <button className=" absolute   bg-gray-400 text-sm -bottom-6  right-0">
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
                <button className="bg-purple-600 p-2 rounded-md">
                  <FaCopy size={22} />
                </button>
                <button className="bg-purple-600 p-2 rounded-md">
                  <FaEye size={22} />
                </button>
                <button className="bg-purple-600 p-2 rounded-md">
                  <MdDelete size={22} />
                </button>
                <button className=" absolute   bg-gray-400 text-sm -bottom-6 ">
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
                <button className="bg-purple-600 p-2 rounded-md">
                  <FaCopy size={22} />
                </button>
                <button className="bg-purple-600 p-2 rounded-md">
                  <FaEye size={22} />
                </button>
                <button className="bg-purple-600 p-2 rounded-md">
                  <MdDelete size={22} />
                </button>
                <button className=" absolute   bg-gray-400 text-sm -bottom-6 ">
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
