import React from "react";
import Private from "../pages/privatepages/Private";
import Userdashboared from "../pages/privatepages/client/Userdashboared";
import Userprofile from "../pages/privatepages/client/Userprofile";
import { Companyprofilesetting } from "../pages/privatepages/Companyprofilesetting";
import Profilepreviw from "../pages/privatepages/client/Profilepreviw";

const Freelancerroute = [
  {
    path: "/sheqlee/dashboared",
    element: (
      <Private>
        <Userdashboared />
      </Private>
    ),
  },
  {
    path: "/sheqlee/profile",
    element: (
      <Private>
        <Userprofile />
      </Private>
    ),
  },
  // do not consuse woith   Companyprofile  because i am using this for both hence they are equal
  {
    path: "/sheqlee/account setting",
    element: (
      <Private>
        <Companyprofilesetting />
      </Private>
    ),
  },
  {
    path: "/sheqlee/Profile Preview",
    element: (
      <Private>
        <Profilepreviw />
      </Private>
    ),
  },
];

export default Freelancerroute;
