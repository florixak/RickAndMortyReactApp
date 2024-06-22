import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters/Characters";
import Character from "./components/Characters/Character";
import Locations from "./components/Locations/Locations";
import Location from "./components/Locations/Location";
import Episodes from "./components/Episodes/Episodes";
import Episode from "./components/Episodes/Episode";
import Footer from "./components/Footer";
import PageNotFoundError from "./components/PageNotFoundError";

const App = () => {
  return (
    <div className="relative flex flex-col w-full h-full min-h-[100vh] pb-[5rem] md:pb-[2.5rem] items-center gap-5 bg-slate-800 text-white">
      <Header />
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character id={0} />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<Location id={0} />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<Episode />} />
        <Route path="/*" element={<PageNotFoundError />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
