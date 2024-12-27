import React from "react";
import Private from "../pages/privatepages/Private";
import Vacancyform from "../pages/privatepages/postjob/Vacancyform";
import Dashboardcompany from "../pages/privatepages/Dashboaredcompany";
import Companyprofile from "../pages/privatepages/Companyprofile";
import { Companyprofilesetting } from "../pages/privatepages/Companyprofilesetting";

const CompanyRoute = [
  {
    path: "/sheqlee/vacancy",
    element: (
      <Private>
        {" "}
        <Vacancyform />
      </Private>
    ),
  },
  {
    path: "/sheqlee/dashboared",
    element: (
      <Private>
        <Dashboardcompany />
      </Private>
    ),
  },
  {
    path: "/sheqlee/company profile",
    element: (
      <Private>
        <Companyprofile />
      </Private>
    ),
  },
  {
    path: "/sheqlee/account setting",
    element: (
      <Private>
        <Companyprofilesetting />
      </Private>
    ),
  },
];
export default CompanyRoute;
