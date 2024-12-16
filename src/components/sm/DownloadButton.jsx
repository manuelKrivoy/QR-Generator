import React from "react";

const DownloadButton = () => {
  const randomGradientes = [
    ["#FF5733", "#FFC300"], // Rojo anaranjado -> Amarillo cálido
    ["#4CAF50", "#81C784"], // Verde oscuro -> Verde claro
    ["#2196F3", "#90CAF9"], // Azul vibrante -> Azul claro
    ["#673AB7", "#D1C4E9"], // Púrpura intenso -> Lavanda suave
    ["#E91E63", "#F48FB1"], // Rosado oscuro -> Rosa pálido
    ["#FF9800", "#FFCC80"], // Naranja -> Naranja claro
    ["#3F51B5", "#9FA8DA"], // Azul profundo -> Azul pastel
    ["#009688", "#80CBC4"], // Verde agua -> Verde agua claro
    ["#795548", "#D7CCC8"], // Marrón oscuro -> Beige claro
    ["#607D8B", "#CFD8DC"], // Gris azulado -> Gris claro
    ["#FF6F61", "#FFD54F"], // Coral -> Amarillo pastel
    ["#00695C", "#26A69A"], // Verde bosque -> Verde menta
    ["#880E4F", "#F06292"], // Vino tinto -> Rosa vibrante
    ["#1E88E5", "#64B5F6"], // Azul rey -> Azul cielo
    ["#43A047", "#A5D6A7"], // Verde esmeralda -> Verde suave
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
      const randomGradient = randomGradientes[Math.floor(Math.random() * randomGradientes.length)];

      const gradient = context.createLinearGradient(0, 0, 0, canvasHeight);

      gradient.addColorStop(0, randomGradient[0]);
      gradient.addColorStop(1, randomGradient[1]);
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
