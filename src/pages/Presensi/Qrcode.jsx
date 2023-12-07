import React from "react";
import { useNavigate } from "react-router-dom";
import { Expand } from "lucide-react";
import qr from "../../assets/qr.png";
import Layout from "../Layout";

function QRcode() {
  const navigate = useNavigate();

  const handleBacktoPresensi = () => {
    navigate("/presensi");
  };

  return (
    <Layout>
      <div className="flex flex-col   bg-background">
        <div className=" flex flex-row justify-between">
          <h1 className="text-3xl font-semibold text-primary">QR Code</h1>
          <h2 className="self-center">
            <span className="text-primary text-xl font-semibold">
              Presensi /{" "}
            </span>
            <span className="text-sky-600 text-xl font-semibold">
              {" "}
              Generate Qr Code
            </span>{" "}
          </h2>
        </div>

        <div className="bg-white rounded-md mt-7">
          <div className="p-12">
            <div>
              <h2 className="text-sky-600 text-2xl">S1 Teknik Informatika</h2>
              <h1 className="text-2xl pt-5">Frontend Programming </h1>
              <div className="border-b border-black"></div>
            </div>
            <div className="pt-8">
              <div className="w-full h-full bg-background rounded-lg flex justify-center ">
                <img src={qr} alt="qr" className="p-8" />
                <div className="mt-auto mb-4 mr-4">{/* <Expand /> */}</div>
              </div>
            </div>
            <div className="grid justify-items-end pt-2">
              <button
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark w-20 h-10 "
                onClick={handleBacktoPresensi}
              >
                {" "}
                Tutup{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default QRcode;
