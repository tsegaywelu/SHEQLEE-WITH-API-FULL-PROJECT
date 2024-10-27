import React, { Children } from "react";

const Mybutton = ({ children, background = "", closewindow }) => {
  return (
    <>
      <button className={background} onClick={closewindow}>
        {children}
      </button>
    </>
  );
};
export default Mybutton;
