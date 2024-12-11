import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Footer from "./components/onetimecmponent/Footer";
import Alljobs from "./pages/Alljobs";
import Lost from "./components/onetimecmponent/Lost";
import Header from "./components/onetimecmponent/Header";
import Catagoris from "./pages/Catagoris";
import Clients from "./pages/Clients";
import Jobdetail from "./pages/Jobdetail";
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
import Twoinput from "./components/basecomponents/Twoinput";
import Resetpassword from "./pages/authpages/Resetpassword";
const App = () => {
  console.log("<App/> rendered");
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route path="/sheqlee" element={<Landing />} />
          <Route path="/game" element={<Twoinput />} />

          <Route path="/sheqlee/alljobs" element={<Alljobs />} />

          <Route path="/sheqlee/catagoris" element={<Catagoris />} />
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
          <Route path="/sheqlee/client" element={<Clients />} />
          <Route path="/sheqlee/company" element={<Companys />} />
          <Route path="/sheqlee/contact" element={<Contact />} />
          <Route path="/sheqlee/FAQ" element={<FAQ1 />} />
          {/* /////auth pages  */}
          <Route path="/sheqlee/companysignup" element={<Companysignup />} />
          <Route path="/sheqlee/employersignup" element={<Employersignup />} />
          <Route path="/sheqlee/login" element={<Login />} />
          <Route path="/sheqlee/resetpassword" element={<Resetpassword />} />

          {/* below are all the private routes  */}

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
            path="/sheqlee/companyprofile"
            element={
              <Private>
                <Companyprofile />
              </Private>
            }
          ></Route>

          <Route
            path="/sheqlee/companyprofile/setting"
            element={
              <Private>
                <Companyprofilesetting />
              </Private>
            }
          ></Route>
          {/* //frelancer pages  */}
          <Route
            path="/sheqlee/userdashboared"
            element={
              <Private>
                <Userdashboared />
              </Private>
            }
          ></Route>
          <Route path="*" element={<Lost />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
