import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Section from "./components/section/Section"
import Footer from "./components/footer/Footer"

// ! https://rickandmortyapi.com/documentation

const App = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Section />
      <Footer />
    </div>
  )
}

export default App