import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Selection from "./components/selection/Selection"
import Footer from "./components/footer/Footer"
import Error from "./components/error/Error"
import Characters from "./components/characters/Characters"
import Locations from "./components/locations/Locations"
import Episodes from "./components/episodes/Episodes"

import { BrowserRouter, Routes, Route } from "react-router-dom"

// ! https://rickandmortyapi.com/documentation

const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
          <Nav />
          <Header />
          <Routes>
            <Route path='/' exact element={<Selection />}/>
            <Route path='/uvod' element={<Selection />}/>
            <Route path='/characters' element={<Characters />}/>
            <Route path='/locations' element={<Locations />}/>
            <Route path='/episodes' element={<Episodes />}/>
            <Route path='*' element={<Error />}/>
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App