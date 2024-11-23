import Navbar from "./components/Navbar/Navbar"
import About from "./Pages/About/About"
import Contact from "./Pages/Contacts/Contact"
import ExpEdu from "./Pages/ExpEdu/ExpEdu"
import Footer from "./Pages/Footer/Footer"
import Hero from "./Pages/Hero/Hero"
import Services from "./Pages/ServicesPage/Services"
import Works from "./Pages/Works/Works"

const App = () => {
  return (
    <div>
      <div id="top"></div>
      <Navbar/>
      <Hero/>
      {/* <ExpEdu/> */}
      <About/>
      <Services/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App