import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import axios from "axios";

function Presensi() {
  const [pres, setPresensi] = useState([]);

  // fetch data
  useEffect(() => {
    // Mengambil token dari local storage
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const userid = localStorage.getItem("userid");

    // Melakukan permintaan HTTP dengan token
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/jadwal", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const filteredPresensi =
          role === "2"
            ? response.data.values.filter((jadwal) => {
                return String(jadwal.id_dosen_jadwal) === String(userid);
              })
            : response.data.values;
        setPresensi(filteredPresensi);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (token && role) {
      fetchData();
    }
  }, []);

  return (
    <>
      <Layout>
        <div className="flex flex-col  bg-background">
          <div className="flex flex-row justify-between mb-[26px]">
            <h1 className="text-3xl font-semibold text-primary">Presensi</h1>
            <h2 className="text-sky-600 text-xl font-semibold mr-2 self-center">
              Presensi
            </h2>
          </div>
          {pres.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-r-sm mb-5 bg-white h-[250px]"
            >
              <p className="text-blue-400">S1 Teknik Informatika</p>
              <h4>
                {item.nama_matakuliah}_{item.kode_matakuliah}
              </h4>
              <hr className="bg-dark-500" />
              <p className="mt-2">Hari : {item.hari}</p>
              <p>
                Waktu : {item.jam_mulai} - {item.jam_selesai}
              </p>
              <p>Ruangan {item.ruangan}</p>
              <p>SKS:{item.sks}</p>
              <div className="flex mt-2">
                <Link
                  to={`/presensi/mulai-presensi/${item.id_jadwal}`}
                  className="bg-merah text-white rounded-lg p-3 text-center  w-[170px] hover:bg-[#920202] text-md"
                >
                  Mulai Presensi
                </Link>
                <Link
                  to={`/presensi/rekap-presensi/${item.id_jadwal}`}
                  className="bg-primary text-white text-center p-3 rounded-lg w-[170px]  hover:bg-[#071B4E] text-md ml-5"
                >
                  Rekap Presensi
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Presensi;
