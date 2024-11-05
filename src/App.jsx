import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Footer from "./components/onetimecmponent/Footer";
import Alljobs from "./pages/Alljobs";
import Lost from "./components/onetimecmponent/Lost";
import Header from "./components/onetimecmponent/Header";
import Catagoris from "./pages/Catagoris";
import Clints from "./pages/Clints";
import Jobdetail from "./pages/Jobdetail";
import Catagprydetail from "./pages/Catagprydetail";
import Alltags from "./pages/Alltags";
import Tagdetail from "./pages/Tagditail";
const App = () => {
  console.log("<App/> rendered");
  return (
    <BrowserRouter>
      <div className="mx-5 md:mx-10 lg:mx-20 ">
        <Header />
        <Routes>
          <Route path="/sheqlee" element={<Landing />} />
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
          <Route path="*" element={<Lost />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
