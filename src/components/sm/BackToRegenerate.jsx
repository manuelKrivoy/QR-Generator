import React from "react";

const BackToRegenerate = () => {
  // Maneja la acción de volver a generar el QR
  const handleRegenerate = () => {
    setQrVisible(false); // Oculta el QR y muestra el formulario
    setUrl(""); // Resetea la URL
  };
  return (
    <button
      onClick={handleRegenerate}
      className="ml-2 mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      Volver a generar
    </button>
  );
};

export default BackToRegenerate;
