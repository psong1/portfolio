import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";

import PROJECTS from "./projects";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <ParticlesBackground />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects projects={PROJECTS} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
