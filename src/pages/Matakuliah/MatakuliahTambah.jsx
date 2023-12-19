import React, { useState } from "react";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MatakuliahTambah() {
  const [formData, setFormData] = useState({
    nama_matakuliah: "",
    gambar: null,
    kode_matakuliah: "",
    sks: "",
    jam_mulai: "",
    jam_selesai: ""
  });



  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
   const file = e.target.files[0];
   setFormData({ ...formData, gambar: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDatatoSend = new FormData();
    formDatatoSend.append("nama_matakuliah", formData.nama_matakuliah);
    formDatatoSend.append("gambar", formData.gambar);
    formDatatoSend.append("kode_matakuliah", formData.kode_matakuliah);
    formDatatoSend.append("sks", formData.sks);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/v1/tambahmatakuliah",
        formDatatoSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Matakuliah berhasil ditambahkan");
        alert("Matakuliah Berhasil di tambahkan")
        navigate("/matakuliah"); // Ganti dengan path yang sesuai
      } else {
        console.error("Gagal menambahkan Matakuliah");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Layout>
    <div className="flex flex-col  w-full bg-background">
      <div className=" flex flex-row justify-between mb-[26px]">
        <h1 className="text-3xl font-semibold text-primary">
          Form Matakuliah
        </h1>
        <h2 className="self-center">
          <span className="text-primary text-xl font-semibold">
            Mata Kuliah /{" "}
          </span>
          <span className="text-sky-600 text-xl font-semibold ">Tambah</span>
        </h2>
      </div>
      <div className="container w-[976px] h-full rounded-lg overflow-hidden bg-white p-5">
        <form onSubmit={handleSubmit} encType="multipart/form-data"> 
          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
               Nama Mata Kuliah
            </label>
            <input required
              type="text"
              name="nama_matakuliah"
              value={formData.nama_matakuliah}
              onChange={handleInputChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Nama Mata Kuliah"
            />
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
               Gambar
            </label>
            <input
                required
                type="file"
                name="gambar"
                onChange={handleFileChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              />
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
              Kode Mata Kuliah
            </label>
            <input required
              type="text"
              name="kode_matakuliah"
              value={formData.kode_matakuliah}
              onChange={handleInputChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Kode Mata Kuliah"
            />
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
              Jumlah SKS
            </label>
            <input
                required
                type="text"
                name="sks"
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Jumlah SKS"
              />
          </div>

            <button
              type="submit"
              className="bg-primary text-white mx-[188px] p-2 rounded-lg hover:bg-primary-dark w-48 h-12"
            >
              Tambah
            </button>
        </form>
      </div>
    </div>
    </Layout>
  );
}

export default MatakuliahTambah