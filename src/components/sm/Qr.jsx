import { QRCodeSVG } from "qrcode.react";
import React from "react";

const Qr = ({ url, fgColor, bgColor }) => {
  console.log(url);
  console.log(fgColor);
  console.log(bgColor);
  return (
    <QRCodeSVG
      value={url} // URL que se codifica en el QR
      size={200} // Tamaño del QR
      fgColor={fgColor} // Color principal del QR
      bgColor={bgColor} // Color de fondo del QR
    />
  );
};

export default Qr;
