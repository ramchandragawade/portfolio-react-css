import Navbar from "./components/Navbar/Navbar"
import About from "./Pages/About/About"
import Contact from "./Pages/Contacts/Contact"
import Hero from "./Pages/Hero/Hero"
import Services from "./Pages/ServicesPage/Services"
import Works from "./Pages/Works/Works"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App