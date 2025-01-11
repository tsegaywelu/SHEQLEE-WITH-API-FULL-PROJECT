import React, { useState } from "react";
import nextpage from "../../assets/direction/nextpage.svg";
import previouspage from "../../assets/direction/previouspage.svg";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activepage, setactivepage] = useState(1);
  const handlePageChange = (page) => {
    if (page < 1) {
      return setCurrentPage(1);
    }
    if (page >= 1 && page + 3 <= totalPages) {
      return setCurrentPage(page);
    }
    if (page <= totalPages) {
      setCurrentPage(totalPages - 2);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      for (let i = currentPage; i <= currentPage + 2; i++) {
        pages.push(i);
      }

      return pages;
    }
    return pages;
  };
  const changeonlythecolor = (page) => {
    if (page < 1) {
      return setactivepage(1);
    }
    setactivepage(page);
  };

  return (
    <div className="flex items-center justify-between py-10">
      <div className="flex items-center justify-center space-x-3 ">
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && changeonlythecolor(page)}
            className={`w-8 h-8   font-kantumruy font-medium rounded-[10px] text-[16px] text-center  transition-colors duration-200 ${
              page === activepage
                ? "bg-custom-purple text-white"
                : "bg-custom-tags text-black "
            } ${page === "•••" && "bg-white"}`}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => {
            changeonlythecolor(currentPage - 3);
            handlePageChange(currentPage - 3);
          }}
          disabled={currentPage === 1}
          className="p-2 rounded-[10px] bg-custom-purple disabled:opacity-40"
        >
          <img
            src={previouspage}
            alt="Previous"
            className="w-3 h-3"
            style={{ fill: "white" }}
          />
        </button>
        <button
          onClick={() => {
            changeonlythecolor(currentPage + 3);
            handlePageChange(currentPage + 3);
          }}
          disabled={currentPage + 2 === totalPages}
          className="p-2 rounded-[10px] bg-custom-purple  disabled:opacity-40"
        >
          <img src={nextpage} alt="Next" className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
