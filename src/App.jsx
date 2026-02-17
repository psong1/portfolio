import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

import PROJECTS from "./projects";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects projects={PROJECTS} />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
        <section id="footer" className="footer-section">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
