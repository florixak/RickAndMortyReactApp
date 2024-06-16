import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Planets from "./components/Planets";
import Footer from "./components/Footer";
import PageNotFoundError from "./components/PageNotFoundError";

const App = () => {
  return (
    <div className="bg-slate-800 text-white">
      <Header />
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route path="characters/:page" element={<Characters />} />
        <Route path="locations/:page" element={<Locations />} />
        <Route path="planets/:page" element={<Planets />} />
        <Route path="*" element={<PageNotFoundError />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
