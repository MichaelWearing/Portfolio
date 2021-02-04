import NavBar from "./components/NavBar";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

import './index.css';

function App() {
  return (
    <>
      <NavBar />
      <div className="background">
        <Info />
        {/* <div id="test">Hey</div> */}
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
