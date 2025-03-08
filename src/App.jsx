import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";  // Ensure the correct path
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import TechSkills from "./components/TechSkills";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Skills />
              <Experience />
              <TechSkills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
        
      
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
