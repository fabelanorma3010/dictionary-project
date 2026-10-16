import logo from "./logo.png";
import "./App.css";
import Dictonary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <header className="App-header">
          <img
            src={logo}
            class
            Name="App-logo
img-fluid"
            alt="logo"
          />
        </header>
        <main>
          <Dictonary />
        </main>
        <footer className="text-center">coded by Norma Fabela</footer>
      </div>
    </div>
  );
}
