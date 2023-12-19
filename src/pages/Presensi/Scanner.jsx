import React, { useState } from "react";
import QrReader from "react-qr-reader";

const QRCodeScanner = () => {
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      // Automatically mark attendance when a QR code is scanned
      // You can modify this part to fit your use case
      // For example, you can trigger an API call to mark attendance
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </div>
  );
};

export default QRCodeScanner;
