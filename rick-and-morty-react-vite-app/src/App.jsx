import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PageNotFoundError from "./components/errors/PageNotFoundError";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/errors/ErrorBoundary";

const CharacterList = lazy(() =>
  import("./components/characters/CharacterList")
);
const LocationList = lazy(() => import("./components/locations/LocationList"));
const EpisodeList = lazy(() => import("./components/episodes/EpisodeList"));

const CharacterDetails = lazy(() =>
  import("./components/characters/CharacterDetails")
);
const LocationDetails = lazy(() =>
  import("./components/locations/LocationDetails")
);
const EpisodeDetails = lazy(() =>
  import("./components/episodes/EpisodeDetails")
);

const App = () => {
  return (
    <div className="overflow-x-hidden w-full h-full min-h-[100vh] relative flex flex-col gap-5 pb-[5rem] animated-background text-primary bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
      <Header />
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route
          path="characters"
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <CharacterList />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="characters/:id"
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <CharacterDetails />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="locations"
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <LocationList />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="locations/:id"
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <LocationDetails />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="episodes"
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <EpisodeList />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="episodes/:id"
          element={
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <EpisodeDetails />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<PageNotFoundError />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
