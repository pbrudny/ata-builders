import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Process from "./components/Process"
import Roles from "./components/Roles"
import Benefits from "./components/Benefits"
import Apply from "./components/Apply"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Process />
      <Roles />
      <Benefits />
      <Apply />
      <Footer />
    </div>
  )
}

export default App
