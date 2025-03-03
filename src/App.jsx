import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import TechSkills from "./components/TechSkills";
function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <TechSkills />
      <About />

      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
