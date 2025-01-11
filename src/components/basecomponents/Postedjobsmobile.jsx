import React from "react";
import Mybutton from "./Mybutton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Jobs } from "../../data/Postedjobs";
import Jobicons from "../onetimecmponent/Jobicons";
import Rightarrow from "../../assets/SVG/Right.svg";
import clock from "../../assets/SVG/clock.svg";
import companyb from "../../assets/SVG/companyb.svg";
import calendar from "../../assets/SVG/calendar.svg";
import qualityassurance from "../../assets/SVG/qualityassurance.svg";
const Postedjobsmobile = ({ showicon5 }) => {
  const { pathname } = useLocation();
  const actualpath = pathname.replaceAll("/", "");
  let changebackground = false;
  if (actualpath === "sheqleetags" || actualpath === "sheqleecompany") {
    changebackground = true;
  }

  return (
    <div className="  flex flex-col md:hidden ">
      {/* Add the custom CSS directly here */}
      <style>
        {`
          .swiper-pagination-bullet {
            margin:  3px !important; /* Add gap between dots */
            width: 9px; 
      height: 9px;
            
          }
            .swiper-pagination-bullet-active {
      background-color: #8967B3; /* Active dot color */
    }
        `}
      </style>

      {/* Swiper Section */}
      <Swiper
        direction="horizontal" // Left-to-right scrolling
        slidesPerView={1} // Show 2 slides at a time
        spaceBetween={10} // Space between slides
        slidesPerGroup={1} // Scroll one group at a time
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination]}
        style={{ width: "100%" }}
      >
        {Array(Math.ceil(Jobs.slice(0, 9).length / 3))
          .fill()
          .map((_, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-rows-3 gap-4 mb-16">
                {Jobs.slice(index * 3, index * 3 + 3).map((jobsall, idx) => (
                  <Link
                    to={`/sheqlee/all jobs/${jobsall.title}`}
                    key={jobsall.title + Math.random()}
                  >
                    <div
                      className=" pl-[16px]  md:mx-0 bg-custom-slate rounded-[20px]  px-2  pt-5 h-[275px] flex flex-col  justify-between  pb-4  "
                      key={jobsall.title + Math.random()}
                    >
                      <div>
                        <div className=" flex gap-5">
                          {showicon5 && (
                            <img
                              src={qualityassurance}
                              width={24}
                              height={24}
                            />
                          )}
                          <p className=" text-[20px] md:text-[22px] font-medium font-kantumruy">
                            {jobsall.title}
                          </p>
                        </div>
                        <p className="text-base my-6 font-kantumruy    line-clamp-4">
                          {jobsall.descreiption}
                        </p>
                      </div>
                      <div className="">
                        <div className="flex   flex-wrap  gap-2  ">
                          <Jobicons text={jobsall.time}>
                            <img
                              src={calendar}
                              width={14}
                              height={14}
                              className="mr-1"
                              alt=""
                            />
                          </Jobicons>
                          <Jobicons text={jobsall.companyname}>
                            <img
                              src={companyb}
                              width={14}
                              height={14}
                              className="mr-1"
                              alt=""
                            />
                          </Jobicons>

                          <Jobicons text={jobsall.work}>
                            <img
                              src={clock}
                              width={14}
                              height={14}
                              className="mr-1"
                              alt=""
                            />
                          </Jobicons>
                          {/* ///////// */}
                          <Jobicons text={jobsall.level}>
                            <img
                              src={calendar}
                              width={14}
                              height={14}
                              className="mr-1"
                              alt=""
                            />
                          </Jobicons>
                          <Jobicons text={jobsall.salary}>
                            <img
                              src={companyb}
                              width={14}
                              height={14}
                              className="mr-1"
                              alt=""
                            />
                          </Jobicons>

                          <Mybutton
                            background={
                              "bg-custom-purple  text-xs px-4 py-1 font-medium text-white font-kantumruy rounded-[5px] "
                            }
                          >
                            Apply
                          </Mybutton>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Pagination Container */}
      <div className="custom-pagination mt-10 flex justify-center" />
    </div>
  );
};

export default Postedjobsmobile;
