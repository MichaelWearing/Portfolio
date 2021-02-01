import NavBar from "./components/NavBar";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <Info />
      {/* <div id="test">Hey</div> */}
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
