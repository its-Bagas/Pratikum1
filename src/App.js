import React, { useState } from "react";
import BMI from "./component/BMI";
import Cicilan from "./component/Cilcilan";
import Pembelian from "./component/Pembelian";
import Konversi from "./component/konversi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BMI />
      <Cicilan />
      <Pembelian />
      <Konversi />
    </div>
  );
}

export default App;
