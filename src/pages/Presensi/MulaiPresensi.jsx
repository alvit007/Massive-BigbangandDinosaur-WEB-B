/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import axios from "axios";

function MulaiPresensi() {
  const [press, setPresensi] = useState([]);
  const { id_jadwal } = useParams();
  const navigate = useNavigate();

  const sessionsData = Array.from({ length: 16 }, (_, index) => ({
    pertemuan: `Pertemuan${index + 1}`,
    hari: `${press.hari}`,
    ruangan: `${press.ruangan}`,
    jam_mulai: `${press.jam_mulai}`,
    jam_selesai: `${press.jam_selesai}`,
    matakuliah: press.nama_matakuliah,
    npm: press.npm,
    kode_matakuliah: press.kode_matakuliah,
    lokasi: press.lokasi,
  }));

  useEffect(() => {
    if (id_jadwal) {
      getJadwalPresensiById();
    }
  }, [id_jadwal]);

  async function getJadwalPresensiById() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`/api/v1/jadwalbyid/${id_jadwal}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPresensi(response.data.values[0]);
      console.log(response.data.values[0]);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  

  const handleMulaiPresensi = (session) => {
    // Redirect to the QR code component with session data
    navigate(
      `/presensi/mulai-presensi/generate-qrcode/${id_jadwal}/${session.pertemuan}`,
      {
        state: {
          pertemuan: session.pertemuan,
          matakuliah: session.matakuliah,
          kode_matakuliah: session.kode_matakuliah,
          hari: session.hari,
          ruangan: session.ruangan,
          jam_mulai: session.jam_mulai,
          jam_selesai: session.jam_selesai,
          lokasi: session.gedung,
        },
      }
    );
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col  bg-background">
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
                Mulai Presensi
              </span>{" "}
            </h2>
          </div>
          <div className="bg-white rounded-md mt-7">
            <div className="p-8">
              <div>
                <h2 className="text-sky-600 text-2xl">S1 Teknik Informatika</h2>
                <h1 className="text-2xl pt-5">
                  {press.nama_matakuliah}_{press.kode_matakuliah}
                </h1>
                <div className="border-b dark:border-neutral-300 mt-2"></div>
              </div>

              <div className="flex flex-col mt-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                        <thead className="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th
                              scope="col"
                              className="border-r px-6 py-4 dark:border-neutral-500"
                            >
                              Pertemuan
                            </th>
                            <th
                              scope="col"
                              className="border-r px-6 py-4 dark:border-neutral-500"
                            >
                              Hari
                            </th>
                            <th
                              scope="col"
                              className="border-r px-6 py-4 dark:border-neutral-500"
                            >
                              Ruangan
                            </th>
                            <th
                              scope="col"
                              className="border-r px-6 py-4 dark:border-neutral-500"
                            >
                              Waktu
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {sessionsData.map((session, index) => (
                            <tr
                              key={index}
                              className="border-b dark:border-neutral-500"
                            >
                              <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                {session.pertemuan}
                              </td>
                              <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                {session.hari}
                              </td>
                              <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                {session.ruangan}
                              </td>
                              <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                {session.jam_mulai} - {session.jam_selesai}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <button
                                  onClick={() => handleMulaiPresensi(session)}
                                  className="bg-merah text-white rounded-lg py-2 px-4  hover:bg-[#920202] text-md"
                                >
                                  Mulai Presensi
                                </button>
                                <Link
                                  to={
                                    "/presensi/mulai-presensi/presensi-manual"
                                  }
                                  className="bg-primary text-white rounded-lg ml-2 py-2 px-4  hover:bg-[#071B4E] text-md"
                                >
                                  Presensi Manual
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default MulaiPresensi;
