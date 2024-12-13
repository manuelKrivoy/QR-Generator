import React from "react";

const GenerateForm = ({ url, setUrl, fgColor, setFgColor, bgColor, setBgColor, handleSubmit }) => {
  return (
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
  );
};

export default GenerateForm;
