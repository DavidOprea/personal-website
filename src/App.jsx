import { useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import FunFacts from "./components/facts";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    const onMove = (event) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="app-shell">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-spotlight" aria-hidden="true" />
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <FunFacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
