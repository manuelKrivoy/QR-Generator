import React, { createContext, useState, useEffect } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [qrs, setQrs] = useState(() => {
    try {
      const savedQrs = JSON.parse(localStorage.getItem("qrs"));
      return Array.isArray(savedQrs) ? savedQrs : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("qrs", JSON.stringify(qrs));
  }, [qrs]);

  const addQr = (qr) => {
    setQrs((prevQrs) => [...prevQrs, qr]);
  };

  return <HistoryContext.Provider value={{ addQr, qrs }}>{children}</HistoryContext.Provider>;
};
