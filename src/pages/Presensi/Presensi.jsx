import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

function Presensi() {
  return (
    <>
      <Layout>
      <div className="flex flex-col h-screen bg-background">
        <div className="flex flex-row justify-between mb-[26px]">
          <h1 className="text-3xl font-semibold text-primary">Presensi</h1>
          <h2 className="text-sky-600 text-xl font-semibold mr-2 self-center">
            Presensi
          </h2>
        </div>

        <div className="p-5 rounded-r-sm bg-white h-[250px]">
          <p className="text-blue-400">S1 Teknik Informatika</p>
          <h4>Frontend Programming</h4>
          <hr className="bg-dark-500" />
          <p className="mt-2">Hari : Senin</p>
          <p>Waktu : 07.00 - 09.00</p>
          <p>Ruangan 22-5</p>
          <p>SKS:3</p>
          <div className="flex mt-2">
            <Link
              to="/presensi/mulai-presensi"
              className="bg-merah text-white rounded-lg p-3 text-center  w-[170px] hover:bg-[#071B4E] text-md"
            >
              Mulai Presensi
            </Link>
            <Link
              to="/presensi/rekap-presensi"
              className="bg-primary text-white text-center p-3 rounded-lg w-[170px] hover:bg-[#920202] text-md ml-5"
            >
              Rekap Presensi
            </Link>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default Presensi;
