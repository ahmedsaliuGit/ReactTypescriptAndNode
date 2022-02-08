import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings name="Ahmed Saliu" />
      </header>
    </div>
  );
}

export default App;
