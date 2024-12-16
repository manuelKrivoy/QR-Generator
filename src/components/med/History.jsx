import React from "react";
import { HistoryContext } from "../../context/HistoryContext";
import Qr from "../sm/Qr";

const History = () => {
  const { qrs } = React.useContext(HistoryContext);
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setVisible(!visible)}
        className="fixed top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200 z-50"
      >
        {visible ? "Ocultar Historial" : "Ver Historial"}
      </button>

      {visible && (
        <ul className="mt-4 space-y-4">
          {qrs.length === 0 ? (
            <p className="text-gray-500">No hay QRs en el historial.</p>
          ) : (
            qrs.map((qr, index) => (
              <li
                key={index}
                className="border border-gray-300 p-4 rounded-md shadow-sm bg-white hover:shadow-md transition duration-200"
              >
                <div className="mt-4">
                  <Qr url={qr.url} fgColor={qr.fgColor} bgColor={qr.bgColor} />
                </div>

                <div className="text-sm text-gray-700">
                  <p>
                    <strong>URL:</strong> {qr.url}
                  </p>
                  <p>
                    <strong>Color del QR:</strong> {qr.fgColor}
                  </p>
                  <p>
                    <strong>Fondo del QR:</strong> {qr.bgColor}
                  </p>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default History;
