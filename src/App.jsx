import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About"; 
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import TechSkills from "./components/TechSkills";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <TechSkills />
                <Experience />
               
                <Projects />
                <Blog/>
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Hero />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
