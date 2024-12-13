import React from "react";
import DownloadButton from "../sm/DownloadButton";
import BackToRegenerate from "../sm/BackToRegenerate";
import Qr from "../sm/Qr";
const ResultForm = ({ url, fgColor, bgColor }) => {
  return (
    <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md flex flex-col items-center">
      {/* Contenedor del QR */}
      <div className="p-4 bg-white shadow-md rounded-lg inline-block">
        <Qr url={url} fgColor={fgColor} bgColor={bgColor}></Qr>
      </div>

      <div className="mt-4 items-center">
        <DownloadButton />
        {/* Botón para volver a generar el QR */}
        <BackToRegenerate />
      </div>
    </form>
  );
};

export default ResultForm;
