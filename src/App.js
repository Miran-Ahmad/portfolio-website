import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
