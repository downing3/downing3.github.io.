import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Photography from "./components/Photography";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/hero" element={<Hero />} />
        <Route exact path="/about" element={<AboutMe />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/photography" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
