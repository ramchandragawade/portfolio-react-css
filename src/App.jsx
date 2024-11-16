import Navbar from "./components/Navbar/Navbar"
import About from "./Pages/About/About"
import Hero from "./Pages/Hero/Hero"
import Services from "./Pages/ServicesPage/Services"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

export default App