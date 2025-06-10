import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Contact from "./components/Contact/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";

import PROJECTS from "./projects";

function App() {
  return (
    <>
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects projects={PROJECTS} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
