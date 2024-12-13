import React, { useState } from "react";

import ResultForm from "./components/med/ResultForm";
import GenerateForm from "./components/med/GenerateForm";

const App = () => {
  // Estados para manejar la URL, la visibilidad del QR y los colores personalizados
  const [url, setUrl] = useState(""); // Almacena la URL ingresada
  const [qrVisible, setQrVisible] = useState(false); // Controla si el QR debe mostrarse
  const [fgColor, setFgColor] = useState("#000000"); // Color del QR
  const [bgColor, setBgColor] = useState("#ffffff"); // Color de fondo del QR

  // Maneja el envío del formulario para generar el QR
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    setQrVisible(true); // Muestra el QR después del envío
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Generador de QR</h1>

      {!qrVisible && (
        <GenerateForm
          url={url}
          setUrl={setUrl}
          fgColor={fgColor}
          setFgColor={setFgColor}
          bgColor={bgColor}
          setBgColor={setBgColor}
          handleSubmit={handleSubmit}
        />
      )}
      {/* Sección para mostrar el QR generado */}
      {qrVisible && url && <ResultForm url={url} fgColor={fgColor} bgColor={bgColor} />}
    </div>
  );
};

export default App;
