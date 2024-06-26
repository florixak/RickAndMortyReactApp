import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PageNotFoundError from "./components/PageNotFoundError";
import Loader from "./components/Loader";

const Characters = lazy(() => import("./components/characters/Characters"));
const Locations = lazy(() => import("./components/locations/Locations"));
const Episodes = lazy(() => import("./components/episodes/Episodes"));

const Character = lazy(() => import("./components/characters/Character"));
const Location = lazy(() => import("./components/locations/Location"));
const Episode = lazy(() => import("./components/episodes/Episode"));

const App = () => {
  return (
    <div className="relative flex flex-col w-full h-full min-h-[100vh] pb-[5rem] md:pb-[2.5rem] items-center gap-5 bg-slate-800 text-white">
      <Header />
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route
          path="characters"
          element={
            <Suspense fallback={<Loader />}>
              <Characters />
            </Suspense>
          }
        />
        <Route
          path="characters/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Character id={0} />
            </Suspense>
          }
        />
        <Route
          path="locations"
          element={
            <Suspense fallback={<Loader />}>
              <Locations />
            </Suspense>
          }
        />
        <Route
          path="locations/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Location id={0} />
            </Suspense>
          }
        />
        <Route
          path="episodes"
          element={
            <Suspense fallback={<Loader />}>
              <Episodes />
            </Suspense>
          }
        />
        <Route
          path="episodes/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Episode />
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
