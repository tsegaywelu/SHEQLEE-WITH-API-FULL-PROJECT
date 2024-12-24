import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Footer from "./components/onetimecmponent/Footer";
import Alljobs from "./pages/Alljobs";
import Lost from "./components/onetimecmponent/Lost";
import Header from "./components/onetimecmponent/Header";
import Catagoris from "./pages/Catagoris";
import Clients from "./pages/Clients1";
import Jobdetail from "./pages/Jobdetail1";
import Catagprydetail from "./pages/Catagprydetail";
import Alltags from "./pages/Alltags";
import Tagdetail from "./pages/Tagditail";
import Companys from "./pages/Companys";
import Contact from "./pages/Contact";
import FAQ1 from "./pages/FAQ1";
import Companysignup from "./pages/authpages/Companysignup";
import Employersignup from "./pages/authpages/Employersignup";
import Login from "./pages/authpages/Login";
import Inputfields from "./pages/privatepages/postjob/Vacancyform";
import Private from "./pages/privatepages/Private";
import Dashboaredcompany from "./pages/privatepages/Dashboaredcompany";
import Companyprofile from "./pages/privatepages/Companyprofile";
import { Companyprofilesetting } from "./pages/privatepages/Companyprofilesetting";
import Userdashboared from "./pages/privatepages/client/Userdashboared";
import Twoinput from "./components/basecomponents/Oneinput";
import Resetpassword from "./pages/authpages/Resetpassword";
import Companydetail from "./pages/Companydetail";
import Interpasswordcode from "./pages/authpages/Interpasswordcode";
import Privacypoliciy from "./pages/authpages/Privacypoliciy";
import Logout from "./pages/privatepages/Logout";
import Userprofile from "./pages/privatepages/client/Userprofile";
import Profilepreviw from "./pages/privatepages/client/Profilepreviw";
const App = () => {
  console.log("<App/> rendered");

  // here  i have three kind of users  for my system  guest,company,frelancer  so here there is clash of routes
  //and also if user is frelancer he can not access the  company pages and reverse .
  const state = "company";
  // const state = "frelancer";
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          {/* //those are common for any user  */}
          <Route path="/sheqlee" element={<Landing />} />
          <Route path="/game" element={<Twoinput />} />

          <Route path="/sheqlee/all jobs" element={<Alljobs />} />

          <Route path="/sheqlee/Categories" element={<Catagoris />} />
          <Route path="/sheqlee/tags" element={<Alltags />} />
          <Route
            path="/sheqlee/alljob/:theidtodisplay"
            element={<Jobdetail />}
          />
          <Route
            path="/sheqle/catagory/:theidtodisplay"
            element={<Catagprydetail />}
          />
          <Route path="/sheqlee/tag/:theidtodisplay" element={<Tagdetail />} />
          <Route path="/sheqlee/clients" element={<Clients />} />
          <Route path="/sheqlee/company" element={<Companys />} />
          <Route
            path="/sheqlee/company/:theidtodisplay"
            element={<Companydetail />}
          />
          <Route path="/sheqlee/contact" element={<Contact />} />
          <Route path="/sheqlee/FAQ" element={<FAQ1 />} />
          {/* /////auth pages  */}
          <Route path="/sheqlee/companysignup" element={<Companysignup />} />
          <Route path="/sheqlee/employersignup" element={<Employersignup />} />
          <Route path="/sheqlee/login" element={<Login />} />
          <Route path="/sheqlee/reset password" element={<Resetpassword />} />
          <Route
            path="/sheqlee/reset password/Code/New Password"
            element={<Interpasswordcode />}
          />
          <Route path="/sheqlee/Logout" element={<Logout />} />
          <Route path="/sheqlee/Privacy Policy" element={<Privacypoliciy />} />

          {state === "company" ? (
            <>
              {/* below are all the private routes for company only   */}
              <Route
                path="/sheqlee/vacancy"
                element={
                  <Private>
                    <Inputfields />
                  </Private>
                }
              ></Route>

              <Route
                path="/sheqlee/dashboared"
                element={
                  <Private>
                    <Dashboaredcompany />
                  </Private>
                }
              ></Route>
              <Route
                path="/sheqlee/company profile"
                element={
                  <Private>
                    <Companyprofile />
                  </Private>
                }
              ></Route>

              <Route
                path="/sheqlee/account setting"
                element={
                  <Private>
                    <Companyprofilesetting />
                  </Private>
                }
              ></Route>
            </>
          ) : (
            <>
              {/* //below are all the private routes for users or frelancers only  */}
              <Route
                path="/sheqlee/dashboared"
                element={
                  <Private>
                    <Userdashboared />
                  </Private>
                }
              ></Route>
              <Route
                path="/sheqlee/profile"
                element={
                  <Private>
                    <Userprofile />
                  </Private>
                }
              ></Route>
              <Route
                path="/sheqlee/account setting"
                element={
                  <Private>
                    <Companyprofilesetting />
                  </Private>
                }
              ></Route>
              <Route
                path="/sheqlee/Profile Preview"
                element={
                  <Private>
                    <Profilepreviw />
                  </Private>
                }
              ></Route>
            </>
          )}

          <Route path="*" element={<Lost />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
