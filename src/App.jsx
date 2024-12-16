import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ResultForm from "./components/med/ResultForm";
import GenerateForm from "./components/med/GenerateForm";
import DarkModeButton from "./components/sm/DarkModeButton";
import { HistoryContext } from "./context/HistoryContext";
import History from "./components/med/History";
const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const [qrVisible, setQrVisible] = useState(false); // Visibilidad del QR
  const [url, setUrl] = useState(""); // URL ingresada
  const [fgColor, setFgColor] = useState("#000000"); // Color del QR
  const [bgColor, setBgColor] = useState("#ffffff"); // Fondo del QR
  const { addQr } = useContext(HistoryContext);

  useEffect(() => {
    // Carga inicial del estado de visibilidad del QR
    const qrStatus = JSON.parse(localStorage.getItem("qrVisible")) || false;
    setQrVisible(qrStatus);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQrVisible(true);
    localStorage.setItem("qrVisible", true);
    addQr({ url, fgColor, bgColor });
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <DarkModeButton />
      <h1 className="text-3xl font-bold mb-6">Generador de QR</h1>

      {!qrVisible && (
        <div>
          <GenerateForm
            url={url}
            setUrl={setUrl}
            fgColor={fgColor}
            setFgColor={setFgColor}
            bgColor={bgColor}
            setBgColor={setBgColor}
            handleSubmit={handleSubmit}
          />
          <History />
        </div>
      )}

      {qrVisible && <ResultForm url={url} fgColor={fgColor} bgColor={bgColor} />}
    </div>
  );
};

export default App;
