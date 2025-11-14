import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Resume from "./components/resume";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div id = "app-container">
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
