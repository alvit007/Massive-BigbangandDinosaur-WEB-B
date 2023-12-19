import React, { useState} from "react";
import Layout from "../Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DosenTambah() {
  const [formData, setFormData] = useState({
    nama_dosen: "",
    nip: "",
    jk: "",
    alamat: "",
    foto: null,
    status: "",
    notlp: "",
    email: "",
    password: "",
  });

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
    formDatatoSend.append("nama_dosen", formData.nama_dosen);
    formDatatoSend.append("nip", formData.nip);
    formDatatoSend.append("jk", formData.jk);
    formDatatoSend.append("alamat", formData.alamat);
    formDatatoSend.append("foto", formData.foto);
    formDatatoSend.append("status", formData.status);
    formDatatoSend.append("notlp", formData.notlp);
    formDatatoSend.append("email", formData.email);
    formDatatoSend.append("password", formData.password);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/v1/tambahdatadosen",
        formDatatoSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("dosen berhasil ditambahkan");
        alert("dosen Berhasil di tambahkan")
        navigate("/dosen"); // Ganti dengan path yang sesuai
      } else {
        console.error("Gagal menambahkan dosen");
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
            Form Dosen
          </h1>
          <h2 className="self-center">
            <span className="text-primary text-xl font-semibold">
              Dosen /{" "}
            </span>
            <span className="text-sky-600 text-xl font-semibold ">Tambah</span>
          </h2>
        </div>
        <div className="container w-[976px] h-full rounded-lg overflow-hidden bg-white p-5">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Nama Dosen
              </label>
              <input
                type="text"
                name="nama_dosen"
                value={formData.nama_dosen}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Nama Dosen"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                NIP
              </label>
              <input
                type="text"
                name="nip"
                value={formData.nip}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan NIP"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Jenis Kelamin
              </label>
              <input
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
                type="file"
                name="foto"
                onChange={handleFileChange}
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
                type="text"
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
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Password"
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

export default DosenTambah;
