import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Activities />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
