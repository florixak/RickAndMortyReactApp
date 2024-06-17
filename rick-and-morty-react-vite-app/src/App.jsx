import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters/Characters";
import CharacterDetails from "./components/Characters/CharacterDetails";
import Locations from "./components/Locations/Locations";
import LocationDetails from "./components/Locations/LocationDetails";
import Episodes from "./components/Episodes/Episodes";
import EpisodesDetails from "./components/Episodes/EpisodeDetails";
import Footer from "./components/Footer";
import PageNotFoundError from "./components/PageNotFoundError";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-slate-800 text-white">
      <Header />
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:locationId" element={<LocationDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:episodeId" element={<EpisodesDetails />} />
        <Route path="/*" element={<PageNotFoundError />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
