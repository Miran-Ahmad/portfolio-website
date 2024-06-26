import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
