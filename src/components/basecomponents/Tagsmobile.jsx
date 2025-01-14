import React from "react";
import { Totaltags } from "../../data/Tags";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Tagsmobile = ({ tags }) => {
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

  return (
    <div className=" flex flex-col md:hidden">
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
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination]}
        style={{ width: "100%" }}
      >
        {Array(Math.ceil(Totaltags.slice(0, 9).length / 3))
          .fill()
          .map((_, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-rows-3 gap-4 mb-16">
                {Totaltags.slice(index * 3, index * 3 + 3).map((tag, idx) => (
                  <Link to={`/sheqlee/${mylink}/${tag.tagname}`} key={tag.id}>
                    <div
                      className={`flex flex-col mx-3 px-6 py-3 rounded-lg border-l-[9px] border-l-black ${
                        changebackground ? "bg-custom-slate" : "bg-custom-tags"
                      }`}
                    >
                      <div className="font-kantumruy font-semibold md:font-medium text-2xl">
                        {tag.tagname}
                      </div>
                      <div className="font-kantumruy mt-2 text-[17px] text-custom-placeholder">
                        {tag.numberofjobs} jobs • {tag.numberofsubscribers}{" "}
                        subscribers
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Pagination Container */}
      {/* <div className="custom-pagination mt-14 flex justify-center" /> */}
    </div>
  );
};

export default Tagsmobile;
