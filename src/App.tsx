import React from "react";
import "./App.css";
import Card from "./components/Card/Gentleman";
import gentlemanArray from "./Data/data";

function App() {
  return (
    <div className="App">
      {gentlemanArray.map(gentleman => (
        <Card gentleman={gentleman} />
      ))}
      ;
    </div>
  );
}

export default App;
