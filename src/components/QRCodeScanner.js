import React, { useState } from 'react';
import {QrReader}  from 'react-qr-reader';

const QRCodeScanner = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      console.log(data)
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className=' items-center justify-center w-[500px]'>
      <QrReader  onError = {
        handleError
      }
      onResult = {
        handleScan
      }
      style = {
        {
          width: '300px',
          height: '300px',
          objectFit: 'cover', // Ensure the QR code scanner fits within the specified width and height
        }
      } >
      </QrReader>
      <p>{result}</p>
    </div>
  );
};

export default QRCodeScanner;
