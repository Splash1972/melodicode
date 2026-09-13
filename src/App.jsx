import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;