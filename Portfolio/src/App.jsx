import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SKills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  console.log(Navbar);
  return (
    <section id="home">
      <Navbar />
      <Hero />
      <About />
      <SKills />
      <Projects />
      <Contact />

      <div className="footer">
        <p>Made with ❤️ by Srishti</p>
        <a href="#home">Back to Top</a>
      </div>
    </section>
  );
}

export default App;
