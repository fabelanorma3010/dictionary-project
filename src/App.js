import "./App.css";
import Dictonary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <header className="App-header"></header>
        <main>
          <Dictonary defaultkeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small> coded by Norma Fabela</small>
        </footer>
      </div>
    </div>
  );
}
