import logo from "./assets/headshot-resized.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-img">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          <h2>Tiffanie Linkin</h2>
          Profile coming soon. In the meantime, find me on{" "}
          <a href="https://www.linkedin.com/in/tiffanielinkin/">LinkedIn</a>.
        </p>
      </header>
    </div>
  );
}

export default App;
