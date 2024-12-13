import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // Importamos el componente para generar QR

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

  // Maneja la acción de volver a generar el QR
  const handleRegenerate = () => {
    setQrVisible(false); // Oculta el QR y muestra el formulario
    setUrl(""); // Resetea la URL
  };

  // Genera el enlace de descarga para el QR
  const handleDownload = () => {
    const svg = document.querySelector("svg");
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "qrcode.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Generador de QR</h1>

      {!qrVisible && (
        <form
          onSubmit={handleSubmit} // Llama a la función handleSubmit al enviar
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-md flex flex-col items-center"
        >
          {/* Campo de entrada para la URL */}
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="url">
              Ingresa una URL:
            </label>
            <input
              id="url"
              type="text"
              required
              value={url} // Enlaza el valor con el estado
              onChange={(e) => setUrl(e.target.value)} // Actualiza el estado al cambiar
              placeholder="https://ejemplo.com"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Selector de color para el QR */}
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fgColor">
              Color del QR:
            </label>
            <input
              id="fgColor"
              type="color"
              value={fgColor} // Enlaza el color seleccionado con el estado
              onChange={(e) => setFgColor(e.target.value)} // Actualiza el color
              className="w-full h-10 border rounded-lg"
            />
          </div>

          {/* Selector de color para el fondo del QR */}
          <div className="mb-4 w-full">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="bgColor">
              Fondo del QR:
            </label>
            <input
              id="bgColor"
              type="color"
              value={bgColor} // Enlaza el color seleccionado con el estado
              onChange={(e) => setBgColor(e.target.value)} // Actualiza el color de fondo
              className="w-full h-10 border rounded-lg"
            />
          </div>

          {/* Botón para enviar el formulario y generar el QR */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Generar QR
          </button>
        </form>
      )}
      {/* Sección para mostrar el QR generado */}
      {qrVisible && url && (
        <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md flex flex-col items-center">
          {/* Contenedor del QR */}
          <div className="p-4 bg-white shadow-md rounded-lg inline-block">
            <QRCodeSVG
              value={url} // URL que se codifica en el QR
              size={200} // Tamaño del QR
              fgColor={fgColor} // Color principal del QR
              bgColor={bgColor} // Color de fondo del QR
            />
          </div>

          <div className="mt-4 items-center">
            <button
              onClick={handleDownload}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Descargar QR
            </button>

            {/* Botón para volver a generar el QR */}
            <button
              onClick={handleRegenerate}
              className="ml-2 mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Volver a generar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default App;
