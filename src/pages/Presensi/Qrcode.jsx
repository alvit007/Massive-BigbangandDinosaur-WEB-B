/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import QRCode from "react-qr-code";
import Layout from "../Layout";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function Qrcode() {
  const { id_jadwal } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const randomValue = uuidv4();

  const { pertemuan, matakuliah, kode_matakuliah, npm } = location.state;

  const [isAttendanceMarked, setAttendanceMarked] = useState(false);
  const [attendees, setAttendees] = useState([]);

  const handleBacktoPresensi = () => {
    navigate(`/presensi/mulai-presensi/${id_jadwal}`);
  };

  const handleMarkAttendance = async () => {
    try {
      const token = localStorage.getItem("token");
      const waktuSekarang = new Date();
      const waktuFormatted = waktuSekarang.toISOString().split("T")[0];
      const tanggalFormatted = waktuSekarang.toLocaleDateString();
      const response = await axios.post(
        "/api/v1/tambahpresensi",
        {
          kode_matakuliah,
          waktu: waktuFormatted,
          tanggal: tanggalFormatted,
          lokasi: randomValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAttendanceMarked(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("/api/v1/mahasiswa", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        const currentUserAttendance = data.find(
          (attendee) => attendee.npm === npm
        );

        if (currentUserAttendance && currentUserAttendance.status) {
          setAttendanceMarked(true);
        }
      } catch (error) {}
    };

    fetchData();
  }, [npm]);

  const waktuSekarang = new Date();
  const jam = waktuSekarang.getHours();
  const menit = waktuSekarang.getMinutes();
  const detik = waktuSekarang.getSeconds();
  const waktuFormatted = `${jam}:${menit}:${detik}`;
  const tahun = waktuSekarang.getFullYear();
  const bulan = waktuSekarang.getMonth() + 1; 
  const tanggal = waktuSekarang.getDate();
  const tanggalFormatted = `${tahun}-${bulan < 10 ? "0" : ""}${bulan}-${tanggal < 10 ? "0" : ""}${tanggal}`;
  const qrCodeData = {
    kode_matakuliah,
    waktu: waktuFormatted,
    tanggal: tanggalFormatted,
    lokasi: randomValue,
  };

  return (
    <>
      <Layout>
        <div className="p-12">
          <div>
            <h2 className="text-sky-600 text-2xl">S1 Teknik Informatika</h2>
            <h1 className="text-2xl pt-5">
              {matakuliah}_{kode_matakuliah} - {pertemuan}
            </h1>
            <div className="border-b border-black"></div>
          </div>
          <div className="pt-8">
            {isAttendanceMarked ? (
              <div className="flex items-center justify-center">
                <CheckCircle size={48} className="text-green-500 mr-2" />
                <p className="text-green-500">Kehadiran berhasil dicatat!</p>
              </div>
            ) : (
              <div>
                <div className="w-full h-full bg-background rounded-lg flex justify-center">
                  {/* Set value prop of QRCode component */}
                  <QRCode value={JSON.stringify(qrCodeData)} size={200} />
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold">Kehadiran:</h3>
                  <ul>
                    {attendees.map((attendee) => (
                      <li key={attendee.npm}>
                        {attendee.nama} -{" "}
                        {attendee.status ? "Hadir" : "Tidak Hadir"}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <button
                    className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark w-40 h-10"
                    onClick={handleMarkAttendance}
                  >
                    Catat Kehadiran
                  </button>
                </div>
              </div>
            )}
            <div className="grid justify-items-end pt-2">
              <button
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark w-20 h-10"
                onClick={handleBacktoPresensi}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Qrcode;
