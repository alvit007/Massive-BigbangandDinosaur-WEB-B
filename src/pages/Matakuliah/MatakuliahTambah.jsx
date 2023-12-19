import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout";

function MatakuliahTambah() {
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    foto: null,
    id_matakuliah: "",
    kode_matakuliah: "",
    nama_matakuliah: "",
    sks: "",
    });

    useEffect(() => {
      const fetchToken = async () => {
        try {
          const tokenResponse = await axios.post("/api/v1/tambahmatakuliah", {});
          setToken(tokenResponse.data.token);
        } catch (error) {
          console.error("Gagal mengambil token:", error);
        }
      };

      fetchToken();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/v1/tambahmatakuliah", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Lakukan sesuatu dengan data yang diterima
      console.log(response.data);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = '/api/v1/tambahmatakuliah';

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(apiUrl, formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log('Mahatakuliah berhasil ditambahkan');
      } else {
        console.error('Gagal menambahkan Matakuliah');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
    <div className="flex flex-col  w-full bg-background">
      <div className=" flex flex-row justify-between mb-[26px]">
        <h1 className="text-3xl font-semibold text-primary">Matakuliah</h1>
        <h2 className="self-center">
          <span className="text-primary text-xl font-semibold">
            Mata Kuliah /{" "}
          </span>
          <span className="text-sky-600 text-xl font-semibold ">Tambah</span>
        </h2>
      </div>
      <div className="container w-[976px] h-full rounded-lg overflow-hidden bg-white p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
               Mata Kuliah
            </label>
            <input
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
              type="file"
              name="foto"
              value={formData.foto}
              onChange={handleFileChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Nama Mata Kuliah"
            />
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
              Kode Mata Kuliah
            </label>
            <input
              type="text"
              name="Kode Matkul"
              value={formData.kode_matakuliah}
              onChange={handleInputChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Kode Mata Kuliah"
            />
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
              Ruangan
            </label>
            <input
              type="text"
              name="kelas"
              // value={formData.kelas}
              // onChange={handleChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Kelas"
            />
          </div>
          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
              Jam Mulai
            </label>
            <input
              type="text"
              name="kelas"
              // value={formData.kelas}
              // onChange={handleChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Kelas"
            />
          </div>
          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
              Jam Selesai
            </label>
            <input
              type="text"
              name="kelas"
              // value={formData.kelas}
              // onChange={handleChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Kelas"
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