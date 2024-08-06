import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import ResumeSection from "./components/Resume"
import ContactSection from "./components/Contact"

function App() {
  return (
    <div className="bg-white min-h-screen w-full font-syne"> 
      <Navbar />
      <Hero />
      <About />
      <ResumeSection/>
      <ContactSection/>
    </div>
  )
}

export default App