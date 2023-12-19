import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function MahasiswaTambah() {
  const [formData, setFormData] = useState({
    npm: "",
    nama_mahasiswa: "",
    jk: "",
    alamat: "",
    foto: null,
    status: "",
    email: "",
    password: "",
    id_kelas: "",
    nama_kelas: "",
    notlp: "",
  });
   const [errorMessages, setErrorMessages] = useState([]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, foto: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDatatoSend = new FormData();
    formDatatoSend.append("npm", formData.npm);
    formDatatoSend.append("nama_mahasiswa", formData.nama_mahasiswa);
    formDatatoSend.append("jk", formData.jk);
    formDatatoSend.append("alamat", formData.alamat);
    formDatatoSend.append("foto", formData.foto);
    formDatatoSend.append("status", formData.status);
    formDatatoSend.append("email", formData.email);
    formDatatoSend.append("password", formData.password);
    formDatatoSend.append("id_kelas", formData.id_kelas);
    formDatatoSend.append("nama_kelas", formData.nama_kelas);
    formDatatoSend.append("notlp", formData.notlp);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/v1/tambahmahasiswa",
        formDatatoSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Mahasiswa berhasil ditambahkan");
        alert("Mahasiswa Berhasil ditambahkan");
        setErrorMessages(""); // Reset error message
        navigate("/mahasiswa"); // Replace with the appropriate path
      } else if (response.status === 400) {
        // Handle validation errors
        setErrorMessages(response.data.error);
      } else {
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      if (error.response) {
        // Handle specific API error here
        setErrorMessages(error.response.data.error);
      } else {
        console.error("Unexpected Error:", error);
      }
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
            <span className="text-sky-600 text-xl font-semibold ">Tambah</span>
          </h2>
        </div>

        <div role="alert" className="mb-3">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Warning!!
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>
              {" "}
              {errorMessages && (
                <div className="text-red-500">{errorMessages}</div>
              )}
            </p>
          </div>
        </div>
        <div className="container w-[976px] h-full rounded-lg overflow-hidden bg-white p-5">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Nama Mahasiswa
              </label>
              <input
                required
                type="text"
                name="nama_mahasiswa"
                value={formData.nama_mahasiswa}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Nama Mahasiswa"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                NPM
              </label>
              <input
                required
                type="number"
                name="npm"
                value={formData.npm}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan NPM"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Jenis Kelamin
              </label>
              <input
                required
                type="text"
                name="jk"
                value={formData.jk}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Jenis Kelamin"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Alamat
              </label>
              <input
                required
                type="text"
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Alamat"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Foto
              </label>
              <input
                required
                type="file"
                name="foto"
                onChange={handleFileChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Status
              </label>
              <input
                required
                type="text"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Status"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                No Telepon
              </label>
              <input
                required
                type="number"
                name="notlp"
                value={formData.notlp}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan No Telepon"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Email
              </label>
              <input
                required
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Email"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Password"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Kelas
              </label>
              <select
                name="id_kelas"
                onChange={handleInputChange}
                value={formData.id_kelas}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              >
                <option value="">Pilih Kelas</option>
                <option value="1">TI-01</option>
                <option value="2">TI-02</option>
                <option value="3">TI-03</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Nama Kelas
              </label>
              <input
                required
                type="text"
                name="nama_kelas"
                value={formData.nama_kelas}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Nama Kelas"
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

export default MahasiswaTambah;
