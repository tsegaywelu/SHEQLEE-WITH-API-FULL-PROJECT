import React from "react";

const Platformstatus = () => {
  return (
    <section className="flex flex-col items-center py-10  ">
      <h2 className="text-xl md:text-3xl font-bold mb-6">Platform status</h2>
      <div className="flex flex-wrap justify-center gap-20">
        {/* for hand shake */}
        <div className="flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-purple-500 mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Handshake */}
            <path d="M12 8c1.1 0 2.1.3 3 .8l-2.3 2.3c-.4-.1-.7-.1-1 0L10.1 9c.8-.6 1.8-1 2.9-1zM4.2 12.8c-.3-.4-.5-.8-.5-1.3s.2-1 .5-1.3l3.6 3.6c-.5-.3-.9-.7-1.4-1.1zm13.6 0c-.4.5-.8.9-1.3 1.3l-3.6-3.6c.5.3.9.7 1.4 1.1L17.8 12c.3.4.5.8.5 1.3 0 .4-.2.9-.5 1.2zM7 17.5l3.3-3.3c.6.4 1.3.5 2.1.5s1.5-.2 2.1-.5L17 17.5c-.5.4-1.2.5-1.8.5s-1.3-.2-1.9-.5L9.8 21c-.5.4-1.2.5-1.8.5s-1.3-.2-1.9-.5L5.2 18C5.8 17.7 6.3 17.5 7 17.5z" />
          </svg>
          <h3 className="text-2xl font-semibold">100K+</h3>
          <p className="text-gray-600 mt-1 text-xl">
            Total jobs posted on <br />
            Sheqlee to date
          </p>
        </div>

        {/* for user icon  */}
        <div className="flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-purple-500 mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* user icon */}
            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <h3 className="text-2xl font-semibold">15K+</h3>
          <p className="text-gray-600 mt-1 text-xl ">
            Ethiopian professionals <br /> signed up so far
          </p>
        </div>

        {/* for the  */}
        <div className="flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-purple-500 mb-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* building  icon */}
            <path d="M3 21h18"></path>
            <path d="M9 21V9h6v12"></path>
            <path d="M7 7h10"></path>
            <path d="M12 7v2"></path>
            <path d="M6 3h12v4H6z"></path>
          </svg>
          <h3 className="text-2xl font-semibold">1K+</h3>
          <p className="text-gray-600 mt-1 text-xl ">
            Korean companies <br /> posting jobs daily
          </p>
        </div>
      </div>
    </section>
  );
};

export default Platformstatus;
