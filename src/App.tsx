import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <label htmlFor="">Ingrese URL a codificar:</label>
      <input type="text" />
      <button className="bg-black">Codificar</button>
    </div>
  );
}

export default App;
