import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import Layout from "../Layout";

function Mahasiswa() {
  // const [formData, setFormData] = useState({
  //   programStudi: "",
  //   mataKuliah: "",
  //   kelas: "",
  // });

  const [mahasiswaData, setMahasiswaData] = useState([
    {
      nim: "2110631170048",
      nama: "Alvito Kurnia Fahrio",
      status: "AKTIF",
    },
    {
      nim: "2110631170139",
      nama: "Rafi Kahfi Yugi",
      status: "AKTIF",
    },
    {
      nim: "2110631170139",
      nama: "Rafi Kahfi Yugi",
      status: "AKTIF",
    },
    {
      nim: "2110631170139",
      nama: "Rafi Kahfi Yugi",
      status: "AKTIF",
    },
    {
      nim: "2110631170139",
      nama: "Rafi Kahfi Yugi",
      status: "AKTIF",
    },
    {
      nim: "2110631170139",
      nama: "Rafi Kahfi Yugi",
      status: "AKTIF",
    },
    // Add more Mahasiswa data as needed
  ]);

  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  // const handleTambahMahasiswa = () => {
  //   navigate("/mahasiswa/tambah");
  // };

  const handleDeleteMahasiswa = (index) => {
    // Implement your logic to delete Mahasiswa at the given index
    // Update the mahasiswaData state accordingly
    const updatedData = [...mahasiswaData];
    updatedData.splice(index, 1);
    setMahasiswaData(updatedData);
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
              class="bg-primary hover:bg-blue-700 text-white mb font-bold py-2 px-4 rounded"
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
                    <td className="border p-2 ">{mahasiswa.nim}</td>
                    <td className="border p-2">{mahasiswa.nama}</td>
                    <td className="border p-2 text-center">
                      {mahasiswa.status}
                    </td>
                    <td className="border p-2 text-center">
                      <button
                        className="color"
                        onClick={() => handleDeleteMahasiswa(index)}
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
