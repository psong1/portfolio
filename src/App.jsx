import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import PROJECTS from "./projects";

const sectionStyles = "min-h-screen w-full flex items-center justify-center";

function App() {
  return (
    <div className="flex w-full min-h-screen relative overflow-x-hidden bg-gradient-to-br from-black via-black to gray-500">
      <NavBar />
      <main className="w-full md:ml-[200px] md:w[calc(100%-200px)] min-h-screen relative">
        <section id="home" className={sectionStyles}>
          <Home />
        </section>
        <section id="about" className={sectionStyles}>
          <About />
        </section>
        <section id="projects" className={sectionStyles}>
          <Projects projects={PROJECTS} />
        </section>
        <section id="contact" className={sectionStyles}>
          <Contact />
        </section>
        <section
          id="footer"
          className="h-[40px] flex items-center justify-center w-full"
        >
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
