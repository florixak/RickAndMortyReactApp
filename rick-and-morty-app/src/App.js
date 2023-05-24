import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Selection from "./components/section/Selection"
import Footer from "./components/footer/Footer"
import Error from "./components/error/Error"

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
            <Route path='*' element={<Error />}/>
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App