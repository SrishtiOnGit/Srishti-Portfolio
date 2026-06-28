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
    <>
      <Navbar />
      <Hero />
      <About />
      <SKills />
      <Projects />
      <Contact />

      <div className="footer">
        <p>Made with ❤️ by Srishti</p>
        <a href="/">Back to Top</a>
      </div>
    </>
  );
}

export default App;
