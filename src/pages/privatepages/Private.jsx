import React, { useState } from "react";
import Login from "../authpages/Login";
const Private = ({ children }) => {
  //children dashboared or inputfield or other private pages
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return isAuthenticated ? children : <Login />;
};

export default Private;
