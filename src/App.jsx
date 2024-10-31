import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
const App = () => {
  console.log("<App/> rendered");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
