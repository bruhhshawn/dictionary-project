import logo from "./dictionary-icon.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/bruhhshawn/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Coded by Sara
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
