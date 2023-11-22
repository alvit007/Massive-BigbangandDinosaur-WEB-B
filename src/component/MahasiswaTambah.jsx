import React, { useState } from "react";

function MahasiswaTambah() {
  const [formData, setFormData] = useState({
    programStudi: "",
    mataKuliah: "",
    kelas: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk menangani data formulir yang disubmit
    console.log(formData);
  };

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full bg-background">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold text-primary">Mahasiswa</h1>
        <h2 className="text-sky-600 text-xl font-semibold">Mahasiswa</h2>
      </div>

      <div className="bg-white rounded-md mt-7">
      <form onSubmit={handleSubmit} className="p-12">

        <div className="mb-4 flex flex-row justify-between">
          <label className="font-medium text-primary text-2xl flex items-center w-44">
            NIM
          </label>
          <input
            type="text"
            name="programStudi"
            value={formData.nim}
            onChange={handleChange}
            className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
            placeholder="Masukkan NIM"
            />
        </div>


        <div className="mb-4 flex flex-row justify-between">
          <label className="font-medium text-primary text-2xl flex items-center w-44">
            Nama
          </label>
          <input
            type="text"
            name="programStudi"
            value={formData.nama}
            onChange={handleChange}
            className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
            placeholder="Masukkan Nama"
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

        <button
          type="submit"
          className="bg-primary text-white p-2 rounded-md hover:bg-primary-dark"
        >
          Tambah
        </button>
      </form>
      </div>
    </div>
  );
}

export default MahasiswaTambah;
  