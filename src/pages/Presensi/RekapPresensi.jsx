import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import axios from "axios";

function RekapPresensi() {
  const [rekap, setRekap] = useState([]);
  const [data, setData] = useState([]);
  const [matakuliah, setMatakuliah] = useState("");
  const { id_jadwal } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        // Fetch matakuliah based on id_jadwal
        const responseMatakuliah = await axios.get(
          `/api/v1/jadwalbyid/${id_jadwal}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Set untuk mengambil data matakuliah
        setMatakuliah(responseMatakuliah.data.values[0]);

        // Set untuk mengambil data mahasiswa yang berdasarkan id_jadwal
        const responseMahasiswa = await axios.get(`/api/v1/jadwal`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const allMahasiswa = responseMahasiswa.data.values;
        const id_matakuliah_jadwal =
          responseMahasiswa.data.values[0]?.id_matakuliah_jadwal;
        
        console.log(id_matakuliah_jadwal)

        const filteredMahasiswaByJadwal = allMahasiswa.filter(
          (mahasiswa) => mahasiswa.id_matakuliah_jadwal === id_matakuliah_jadwal
        );

        console.log(filteredMahasiswaByJadwal);

        console.log(filteredMahasiswaByJadwal);

        setData(filteredMahasiswaByJadwal);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [id_jadwal]); // Now, this effect will re-run whenever id_jadwal changes

  return (
    <Layout>
      <div className="flex flex-col h-screen bg-background">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold text-primary">
            Rekap Presensi
          </h1>
          <h2 className="self-center">
            <span className="text-primary text-xl font-semibold">
              Presensi /{" "}
            </span>
            <span className="text-sky-600 text-xl font-semibold">
              {" "}
              Rekap Absen
            </span>{" "}
          </h2>
        </div>

        <div className="bg-white rounded-md mt-7">
          <div className="p-8">
            <div>
              <h2 className="text-sky-600 text-2xl">S1 Teknik Informatika</h2>
              <h1 className="text-2xl pt-5">
                {matakuliah.nama_matakuliah}_{matakuliah.kode_matakuliah}
              </h1>
              <div className="border-b border-black"></div>
            </div>
            <table className="w-full mt-10">
              <thead>
                <tr>
                  <th className="border p-2 w-2/12" rowSpan="2">
                    NAMA LENGKAP
                  </th>
                  <th className="border p-2 w-2/12" rowSpan="2">
                    NIM
                  </th>
                  <th className="border p-2" colSpan="16">
                    PERTEMUAN
                  </th>
                </tr>
                <tr>
                  {[...Array(16).keys()].map((meeting) => (
                    <th key={meeting} className="border p-2 text-center">
                      {meeting + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              {data.map((item, index) => (
                <tbody>
                  <tr>
                    <td className="border p-2">{item.nama_mahasiswa}</td>
                    <td className="border p-2">{item.npm}</td>
                    <td className="border p-2 text-center">H</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                    <td className="border p-2 text-center">-</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RekapPresensi;
