import React, { useState } from "react";
import nextpage from "../../assets/direction/nextpage.svg";
import previouspage from "../../assets/direction/previouspage.svg";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    if (totalPages <= 9) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      for (let i = currentPage; i <= currentPage + 8; i++) {
        pages.push(i);
      }
      pages.push("•••");
      pages.push(totalPages - 1, totalPages);
      return pages;
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between py-10">
      <div className="flex items-center justify-center space-x-3 ">
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            className={`w-8 h-8   font-kantumruy font-medium rounded-[10px] text-[16px] text-center  transition-colors duration-200 ${
              page === currentPage
                ? "bg-black text-white"
                : "bg-custom-tags text-black "
            } ${page === "•••" && "bg-white"}`}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-[10px] bg-custom-tags disabled:opacity-50"
        >
          <img src={previouspage} alt="Previous" className="w-3 h-3" />
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-[10px] bg-custom-purple  disabled:opacity-50"
        >
          <img src={nextpage} alt="Next" className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
