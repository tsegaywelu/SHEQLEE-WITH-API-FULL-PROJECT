import React, { Children } from "react";

const Mybutton = ({ children, background = "" }) => {
  return (
    <>
      <button className={background}>{children}</button>
    </>
  );
};
export default Mybutton;
