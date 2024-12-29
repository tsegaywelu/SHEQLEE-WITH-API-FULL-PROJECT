import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/onetimecmponent/Footer";
import Lost from "./components/onetimecmponent/Lost";
import Header from "./components/onetimecmponent/Header";
import { useSelector } from "react-redux";
import CommonRoute from "./routes/CommonRoute.jsx";
import CompanyRoute from "./routes/CompanyRoute.jsx";
import Freelancerroute from "./routes/Freelancerroute.jsx";
import Landing from "./pages/Landing.jsx";
import Userlanding from "./components/onetimecmponent/Userlanding.jsx";
const App = () => {
  const { currentuser } = useSelector((state) => state.user);

  const state = currentuser?.role || "guest";
  return (
    <BrowserRouter>
      <div className="">
        <Header />

        <Routes>
          <Route
            path="/sheqlee"
            element={
              currentuser?.role === "freelancer" ? <Userlanding /> : <Landing />
            }
          />
          {CommonRoute.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {state === "company" &&
            CompanyRoute.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}

          {state === "freelancer" &&
            Freelancerroute.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}

          <Route path="*" element={<Lost />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
