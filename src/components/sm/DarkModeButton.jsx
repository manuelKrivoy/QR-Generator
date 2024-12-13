import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
      title={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {darkMode ? (
        <img src="./sun.svg" alt="Light mode" className="w-6 h-6" />
      ) : (
        <img src="./dark.png" alt="Dark mode" className="w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeButton;
