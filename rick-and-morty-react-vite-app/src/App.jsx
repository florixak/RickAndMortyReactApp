import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters/Characters";
import Locations from "./components/Locations/Locations";
import Episodes from "./components/Episodes/Episodes";
import Footer from "./components/Footer";
import PageNotFoundError from "./components/PageNotFoundError";

const App = () => {
  return (
    <div className="flex flex-col w-full h-full items-center gap-5 bg-slate-800 text-white">
      <Header />
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route path="/characters" element={<Characters />}>
          <Route path=":id" element={<Characters />} />
        </Route>
        <Route path="/locations" element={<Locations />}>
          <Route path=":id" element={<Locations />} />
        </Route>
        <Route path="/episodes" element={<Episodes />}>
          <Route path=":id" element={<Episodes />} />
        </Route>
        <Route path="/*" element={<PageNotFoundError />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
