import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2, Pencil } from "lucide-react";
import Layout from "../Layout";
import axios from "axios";

function Mahasiswa() {
  const [mahasiswaData, setMahasiswa] = useState([]);

  useEffect(() => {
    // Mengambil token dari local storage
    const token = localStorage.getItem("token");

    // Melakukan permintaan HTTP dengan token
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "api/v1/mahasiswa",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Menggunakan data dari server
        setMahasiswa(response.data.values);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (token) {
      fetchData();
    }
  }, []);

  const handleDeleteMahasiswa = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`/api/v1/hapusdatamahasiswa/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      // Jika penghapusan berhasil, perbarui state mahasiswaData
      // setMahasiswa((prevData) => prevData.filter(mahasiswa => mahasiswa.id !== id));
      console.log(response.data)
      console.log(id)
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };
  


  return (
    <Layout>
      <div className="flex flex-col h-screen bg-background">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold text-primary">Mahasiswa</h1>
          <h2 className="text-sky-600 text-xl font-semibold mr-2">Mahasiswa</h2>
        </div>
        <div className="bg-white rounded-md mt-7">
          <div className="p-4 mt-2">
            <Link
              to={"tambah-mahasiswa"}
              className="bg-primary hover:bg-[#071B4E] text-white mb font-bold py-2 px-4 rounded"
            >
              Tambah Mahasiswa
            </Link>
            <table className="w-full mt-5">
              <thead>
                <tr>
                  <th className="border p-2 w-1/12">NO</th>
                  <th className="border p-2 w-2/12">NIM</th>
                  <th className="border p-2 w-6/12">NAMA</th>
                  <th className="border p-2 w-3/12">STATUS</th>
                  <th className="border p-2 w-3/12">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {mahasiswaData.map((mahasiswa, index) => (
                  <tr key={index}>
                    <td className="border p-2 text-center">{index + 1}</td>
                    <td className="border p-2 ">{mahasiswa.npm}</td>
                    <td className="border p-2">{mahasiswa.nama_mahasiswa}</td>
                    <td className="border p-2 text-center">
                      {mahasiswa.status}
                    </td>
                    <td className="border p-2 text-center flex justify-between">
                      <Link to={`ubah-mahasiswa/${mahasiswa.id_mahasiswa}`}
                      >
                        <Pencil stroke="#26A1F4" />
                      </Link>
                      <button
                        className="color" onClick={() => handleDeleteMahasiswa(mahasiswa.id)}
                      >
                        <Trash2 stroke="#BF0404" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Mahasiswa;
