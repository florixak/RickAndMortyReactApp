import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Planets from "./components/Planets";
import Footer from "./components/Footer";
import PageNotFoundError from "./components/PageNotFoundError";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setDarkTheme((prevTheme) => setDarkTheme(!prevTheme));
  };

  return (
    <div className={`w-full ${darkTheme ? "bg-black text-white" : "bg-white text-black"}`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact index element={<Home />} />
          <Route path="/characters/:page" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/*" element={<PageNotFoundError />} />
        </Routes>
        <button onClick={handleThemeChange}>Switch theme</button>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
