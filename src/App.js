import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/nav";
import About from "./components/about";
import Experience from "./components/experience";
import TechStack from "./components/techStack";

function App() {
  return (
    <div className="App">
      <Nav />
      <TechStack />
      <About />
      <Experience />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
