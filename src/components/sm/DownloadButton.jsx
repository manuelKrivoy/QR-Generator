import React from "react";

const DownloadButton = () => {
  const randomGradientes = [
    ["#", "#"],
    ["#", "#"],
  ];
  const handleDownload = () => {
    const svg = document.querySelector("svg");
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Dimensiones del lienzo.
    const canvasWidth = 500;
    const canvasHeight = 700;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const img = new Image();
    img.onload = () => {
      // Fondo con degradado.
      const gradient = context.createLinearGradient(0, 0, 0, canvasHeight);

      gradient.addColorStop(0, "#4caf50"); // Verde.
      gradient.addColorStop(1, "#81c784"); // Verde claro.
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvasWidth, canvasHeight);

      // Título encima del QR.
      context.font = "bold 28px Arial";
      context.fillStyle = "#ffffff";
      context.textAlign = "center";
      context.fillText("¡Escanea este código QR!", canvasWidth / 2, 50);

      // Fondo blanco detrás del QR.
      const qrSize = 300;
      const qrX = (canvasWidth - qrSize) / 2;
      const qrY = 100;

      // Dibuja el QR.
      context.drawImage(img, qrX, qrY, qrSize, qrSize);

      // Texto debajo del QR.
      const pageUrl = window.location.href;
      context.font = "20px Arial";
      context.fillStyle = "#ffffff";
      context.fillText(pageUrl, canvasWidth / 2, qrY + qrSize + 40);

      // Mensaje de agradecimiento.
      context.font = "italic 18px Arial";
      context.fillStyle = "#e8f5e9";
      context.fillText("Gracias por visitarnos", canvasWidth / 2, qrY + qrSize + 80);

      // Exporta el lienzo como imagen.
      const imageUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = imageUrl;
      downloadLink.download = "qr_with_url.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    };

    img.src = svgUrl;
    localStorage.setItem("qrVisible", false);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      Descargar QR
    </button>
  );
};

export default DownloadButton;
