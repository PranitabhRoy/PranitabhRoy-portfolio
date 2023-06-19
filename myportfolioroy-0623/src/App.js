import About from './components/About';
import Contact from './components/Contact';
import Footerr from './components/Footerr';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footerr />
    </div>
  );
}
export default App;