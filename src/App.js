import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Photography from "./components/Photography";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/about" element={<AboutMe />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/photography" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
