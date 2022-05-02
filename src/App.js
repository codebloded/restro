import logo from "./logo.svg";
import "./App.css";

import NavbarX from "./components/Navbar.component";
import LogoFlex from "./components/LogoFlex";
import Lists from "./components/Lists";
import Orders from "./components/Orders";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavbarX />
      <LogoFlex />
      <Lists />
      <Orders />
      <About />
    </div>
  );
}

export default App;
