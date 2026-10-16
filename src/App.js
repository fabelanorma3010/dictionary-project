import logo from " ./logo.png";
import " ./App.css";
import Dictonary from " ./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <header className="App-header">
          <img src={logo} className="app-logo"
            alt="logo"/>
        </header>
        <main>
          <Dictonary defaultkeyword="sunrise"/>
        </main>
        <footer className="App-footer">
        <small> coded by Norma Fabela</small>
        </footer>
      </div>
    </div>

  );
}
