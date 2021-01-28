import NavBar from "./components/NavBar";

import "./styles/App.css";

function App() {
  return (
    <>
      <div className="nav-bar">
        <NavBar />
      </div>

      <div className="App">
        <h1>Hello, my name is Michael and I am a full stack Developer.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          turpis lectus, consequat et dictum vitae, rutrum in est. Duis dapibus
          vitae enim ac aliquet. Vivamus at gravida nisl. Duis mi lectus,
          interdum ac lorem sed, consequat ullamcorper augue. Donec dictum lacus
          id ultrices laoreet. Duis consectetur egestas justo, vitae feugiat
          justo viverra a. Proin pellentesque elit in sem tristique tincidunt.
          Donec cursus lorem eu massa rhoncus molestie. Cras ac commodo justo.
          Nam mollis lacus id tellus molestie egestas.
        </p>
      </div>
    </>
  );
}

export default App;
