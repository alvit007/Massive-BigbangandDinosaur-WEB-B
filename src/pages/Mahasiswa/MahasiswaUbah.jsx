import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function MahasiswaUbah() {
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

  const { id_mahasiswa } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

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
        console.log(response.data.values[0])
        const mahasiswaData = response.data.values[0];
        setFormData({
          npm: mahasiswaData.npm,
          namaMahasiswa: mahasiswaData.nama_mahasiswa,
          jenisKelamin: mahasiswaData.jk,
          alamat: mahasiswaData.alamat,
          status: mahasiswaData.status,
          noTelepon: mahasiswaData.notlp,
          email: mahasiswaData.email,
          password: mahasiswaData.password,
          kelas: mahasiswaData.id_kelas,
          namaKelas: mahasiswaData.nama_kelas,
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (token) {
      fetchData();
    }
  }, [id_mahasiswa]); // Add id_mahasiswa as a dependency

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    try {
      await axios.put(
        `/api/v1/ubahdatamahasiswa/${id_mahasiswa}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Redirect to the Mahasiswa detail page or any other page you want
      navigate.push(`/ubahdatamahasiswa/${id_mahasiswa}`);
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

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
          <form onSubmit={handleUpdate}>
            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Nama Mahasiswa
              </label>
              <input
                type="text"
                name="namaMahasiswa"
                value={formData.namaMahasiswa}
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
                value={formData.npm}
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
                value={formData.jenisKelamin}
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
                value={formData.alamat}
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
                value={formData.status}
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
                value={formData.noTelepon}
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
                value={formData.email}
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
                value={formData.password}
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
                value={formData.kelas}
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
                value={formData.namaKelas}
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
