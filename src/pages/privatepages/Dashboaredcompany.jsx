import React from "react";
import Location from "../../components/basecomponents/Location";
import Mybutton from "../../components/basecomponents/Mybutton";
import { Link } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
import Dashboaredtitle from "../../components/onetimecmponent/Dashboaredtitle";
import Jobdetail from "../../components/onetimecmponent/Jobcard";
import dashboared from "../../assets/direction/dashboard.svg";
const Dashboardcompany = () => {
  const job = true;
  return (
    <div>
      <div>
        <Location />
      </div>
      <div className="mt-5 ">
        <Dashboaredtitle
          text={
            job
              ? "All the jobs you have posted and are about to post."
              : " You have not posted any jobs yet. Get started by posting a job."
          }
          heading={"Dashboard"}
        >
          <img src={dashboared} alt="dashboared svg" width={48} height={48} />
        </Dashboaredtitle>
      </div>
      <div className=" flex  flex-col  items-center  gap-5 justify-center my-5 md:my-10 overflow-auto  ">
        {job ? (
          <Jobdetail />
        ) : (
          <div className="mt-2 mb-10">
            <Link to={"/sheqlee/vacancy"}>
              <Mybutton
                background={
                  "bg-custom-purple rounded-lg p-1 md:p-2 lg:py-3 lg:px-6 text-sm md:text-2xl font-medium font-kantumruy text-white"
                }
              >
                Post your first job
              </Mybutton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboardcompany;
