import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

import "./index.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
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
