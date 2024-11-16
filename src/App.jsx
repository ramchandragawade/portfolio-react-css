import Navbar from "./components/Navbar/Navbar"
import About from "./components/Pages/About/About"
import Hero from "./components/Pages/Hero/Hero"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App