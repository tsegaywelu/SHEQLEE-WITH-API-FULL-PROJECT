// i will this one as  modal for all header links

import React, { Children, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Reusablemodal = ({ children, open }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showmodal();
    }
  }, [open]);
  return (
    createPortal(<dialog ref={dialog}>{children}</dialog>),
    document.getElementById("modal")
  );
};

export default Reusablemodal;
