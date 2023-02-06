import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/Gentleman";
import gentlemanArray from "./Data/data";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {gentlemanArray.map(gentleman => (
        <Card gentleman={gentleman} />
      ))}
    </div>
  );
}

export default App;
