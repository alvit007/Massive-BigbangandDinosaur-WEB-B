import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

function Mahasiswa() {
  const [formData, setFormData] = useState({
    programStudi: "",
    mataKuliah: "",
    kelas: "",
  });

  const [showTable, setShowTable] = useState(false);

  const navigate = useNavigate(); // Move the hook inside the component

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTable = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk menangani data formulir yang disubmit
    console.log(formData);
    // Toggle showTable state to display or hide the table
    setShowTable((prevShowTable) => !prevShowTable);
  };

  const handleTambahMahasiswa = () => {
    navigate('/mahasiswa/tambah');
  };

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full bg-background">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold text-primary">Mahasiswa</h1>
        <h2 className="text-sky-600 text-xl font-semibold">Mahasiswa</h2>
      </div>

      <div className="bg-white rounded-md mt-7">
        <form onSubmit={handleTable} className="p-12">
          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-2xl flex items-center w-44">
              Program Studi
            </label>
            <input
              type="text"
              name="programStudi"
              value={formData.programStudi}
              onChange={handleChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Program Studi"
            />
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-2xl flex items-center w-44">
              Mata Kuliah
            </label>
            <input
              type="text"
              name="mataKuliah"
              value={formData.mataKuliah}
              onChange={handleChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Mata Kuliah"
            />
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-2xl flex items-center w-44">Kelas</label>
            <input
              type="text"
              name="kelas"
              value={formData.kelas}
              onChange={handleChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Kelas"
            />
          </div>

          <div className="flex justify-between">
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark w-48 h-12"
          >
            {showTable ? "Sembunyikan" : "Tampilkan"}
          </button>
          
          <button
              type="button"
              className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark w-48 h-12"
              onClick={handleTambahMahasiswa}
            >
              Tambah Mahasiswa
            </button>            
          </div>
        </form>

        {showTable && (
          <div className="p-12">
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
              {/* You can map through your data to generate rows here */}
              <tr>
                <td className="border p-2 text-center">1</td>
                <td className="border p-2 ">2110631170048</td>
                <td className="border p-2">Alvito Kurnia Fahrio</td>
                <td className="border p-2 text-center">AKTIF</td>
                <td className="border p-2 text-center">  <button className="color" onClick={() => handleHapus(data.id)}><Trash2 stroke="#BF0404" /></button></td>
              </tr>
              <tr>
                <td className="border p-2 text-center">2</td>
                <td className="border p-2 ">2110631170139</td>
                <td className="border p-2">Rafi Kahfi Yugi</td>
                <td className="border p-2 text-center">AKTIF</td>
                <td className="border p-2 text-center">  <button className="color" onClick={() => handleHapus(data.id)}><Trash2 stroke="#BF0404" /></button></td>
              </tr>
              <tr>
                <td className="border p-2 text-center">2</td>
                <td className="border p-2 ">2110631170139</td>
                <td className="border p-2">Rafi Kahfi Yugi</td>
                <td className="border p-2 text-center">AKTIF</td>
                <td className="border p-2 text-center">  <button className="color" onClick={() => handleHapus(data.id)}><Trash2 stroke="#BF0404" /></button></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        )}
      </div>
    </div>
  );
}

export default Mahasiswa;
