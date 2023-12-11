import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
import axios from "axios";


function MahasiswaUbah() {
  
  const [mahasiswa, setMahasiswa] = useState([])

  const [formData, setFormData] = useState({
    namaMahasiswa: "",
    npm: "",
    jenisKelamin: "",
    alamat: "",
    foto: null,
    status: "",
    noTelepon: "",
    email: "",
    password: "",
    kelas: "",
    namaKelas: "",
  });

  function handleChange(event) {
    const { name, value, type, files } = event.target;

    // Menangani input tipe file (foto)
    const fileValue = type === "file" ? files[0] : null;
    setFormData({
      ...formData,
      [name]: type === "file" ? fileValue : value,
    });
  }

  const { id_mahasiswa} = useParams();

  useEffect(() => {
    // Mengambil token dari local storage
    const token = localStorage.getItem("token");

    // Melakukan permintaan HTTP dengan token
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/mahasiswabyid/${id_mahasiswa}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Menggunakan data dari server
        setMahasiswa(response.data.values[0]);
        console.log(response.data.values[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (token) {
      fetchData();
    }
  }, []);


  return (
    <Layout>
      <div className="flex flex-col  w-full bg-background">
        <div className=" flex flex-row justify-between mb-[26px]">
          <h1 className="text-3xl font-semibold text-primary">
            Form Mahasiswa
          </h1>
          <h2 className="self-center">
            <span className="text-primary text-xl font-semibold">
              Mahasiswa /{" "}
            </span>
            <span className="text-sky-600 text-xl font-semibold ">Ubah</span>
          </h2>
        </div>
        <div className="container w-[976px] h-full rounded-lg overflow-hidden bg-white p-5">
          <form action="">
            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Nama Mahasiswa
              </label>
              <input
                type="text"
                name="namaMahasiswa"
                value={mahasiswa.nama_mahasiswa}
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Nama Mahasiswa"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                NPM
              </label>
              <input
                type="text"
                name="npm"
                value={mahasiswa.npm}
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan NPM"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Jenis Kelamin
              </label>
              <input
                type="text"
                name="jenisKelamin"
                value={mahasiswa.jk}
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Jenis Kelamin"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Alamat
              </label>
              <input
                type="text"
                name="alamat"
                value={mahasiswa.alamat}
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Alamat"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Foto
              </label>
              <input
                type="file"
                name="foto"
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Pilih Foto"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Status
              </label>
              <input
                type="text"
                name="status"
                value={mahasiswa.status}
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Status"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                No Telepon
              </label>
              <input
                type="text"
                name="noTelepon"
                value={mahasiswa.notlp}
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan No Telepon"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={mahasiswa.email}
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Email"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={mahasiswa.password}
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Password"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Kelas
              </label>
              <input
                type="text"
                name="kelas"
                value={mahasiswa.id_kelas}
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Kelas"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Nama Kelas
              </label>
              <input
                type="text"
                name="namaKelas"
                value={mahasiswa.nama_kelas}
                onChange={handleChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Nama Kelas"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white mx-[188px] p-2 rounded-lg hover:bg-primary-dark w-48 h-12"
            >
              Ubah
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default MahasiswaUbah;
