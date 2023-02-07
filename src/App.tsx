import React from "react";
import "./App.css";
import Card from "./components/Card/Gentleman";
import gentlemanArray from "./Data/data";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      {gentlemanArray.map(gentleman => (
        <Card gentleman={gentleman} />
      ))}
      ;
    </div>
  );
}

export default App;
