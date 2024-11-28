import Navbar from "./components/Navbar/Navbar"
import About from "./Pages/About/About"
import Contact from "./Pages/Contacts/Contact"
import ExpEdu from "./Pages/ExpEdu/ExpEdu"
import Footer from "./components/Footer/Footer"
import Hero from "./Pages/Hero/Hero"
import Services from "./Pages/ServicesPage/Services"
import Works from "./Pages/Works/Works"
import Skills from "./Pages/Skills/Skills"

const App = () => {
  return (
    <div id="top">
      <Navbar/>
      <Hero/>
      <ExpEdu/>
      {/* <About/> */}
      {/* <Services/> */}
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App