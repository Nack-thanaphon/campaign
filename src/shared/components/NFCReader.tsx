"use client"
import React, { useState } from "react";

const NFCReader: React.FC = () => {
  const [nfcData, setNfcData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const readNFC = async () => {
    try {
      if ("NDEFReader" in window) {
        const ndef = new NDEFReader();
        await ndef.scan();
        setError(null);
        setNfcData("Scanning for NFC card...");

        ndef.onreading = (event: NDEFReadingEvent) => {
          const message = event.message;
          let data = "";

          for (const record of message.records) {
            const textDecoder = new TextDecoder();
            data += textDecoder.decode(record.data) + " ";
          }

          setNfcData(data.trim() || "No readable data found");
        };

        ndef.onreadingerror = () => {
          setError("Error reading NFC card. Try again.");
          setNfcData(null);
        };
      } else {
        setError("Web NFC is not supported on this device/browser.");
      }
    } catch (err) {
      setError(`Failed to start NFC scan: ${(err as Error).message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        NFC Card Reader
      </h1>
      <button
        onClick={readNFC}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Scan NFC Card
      </button>
      {nfcData && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md animate-bounce">
          <p className="text-lg font-semibold text-gray-800">
            Card Contents:
          </p>
          <p className="text-xl text-green-600">{nfcData}</p>
        </div>
      )}
      {error && (
        <div className="mt-6 p-4 bg-red-100 rounded-lg">
          <p className="text-lg text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};

export default NFCReader;