import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PageNotFoundError from "./components/PageNotFoundError";
import Loader from "./components/Loader";

const CharacterList = lazy(() => import("./components/characters/CharacterList"));
const LocationList = lazy(() => import("./components/locations/LocationList"));
const EpisodeList = lazy(() => import("./components/episodes/EpisodeList"));

const CharacterDetails = lazy(() => import("./components/characters/CharacterDetails"));
const LocationDetails = lazy(() => import("./components/locations/LocationDetails"));
const EpisodeDetails = lazy(() => import("./components/episodes/EpisodeDetails"));

const App = () => {
  return (
    <div className="relative flex flex-col w-full h-full min-h-[100vh] pb-[5rem] lg:pb-[5rem] items-center gap-5 bg-slate-800 text-white">
      <Header />
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route
          path="characters"
          element={
            <Suspense fallback={<Loader />}>
              <CharacterList />
            </Suspense>
          }
        />
        <Route
          path="characters/:id"
          element={
            <Suspense fallback={<Loader />}>
              <CharacterDetails id={0} />
            </Suspense>
          }
        />
        <Route
          path="locations"
          element={
            <Suspense fallback={<Loader />}>
              <LocationList />
            </Suspense>
          }
        />
        <Route
          path="locations/:id"
          element={
            <Suspense fallback={<Loader />}>
              <LocationDetails id={0} />
            </Suspense>
          }
        />
        <Route
          path="episodes"
          element={
            <Suspense fallback={<Loader />}>
              <EpisodeList />
            </Suspense>
          }
        />
        <Route
          path="episodes/:id"
          element={
            <Suspense fallback={<Loader />}>
              <EpisodeDetails />
            </Suspense>
          }
        />
        <Route path="*" element={<PageNotFoundError />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
