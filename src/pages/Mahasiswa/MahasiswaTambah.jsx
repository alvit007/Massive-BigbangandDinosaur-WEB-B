import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function MahasiswaTambah() {
  const [npm, setNpm] = useState("");
  const [nama_mahasiswa, setNamaMahasiswa] = useState("");
  const [jk, setJenisKelamin] = useState("");
  const [alamat, setAlamat] = useState("");
  const [status, setStatus] = useState("");
  const [notlp, setNoTelepon] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id_kelas, setIdKelas] = useState("");
  const [nama_kelas, setNamaKelas] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "nama_mahasiswa":
        setNamaMahasiswa(value);
        break;
      case "npm":
        setNpm(value);
        break;
      case "jk":
        setJenisKelamin(value);
        break;
      case "alamat":
        setAlamat(value);
        break;
      case "status":
        setStatus(value);
        break;
      case "noTelepon":
        setNoTelepon(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "kelas":
        setIdKelas(value);
        break;
      case "namaKelas":
        setNamaKelas(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    switch (name) {
      case "foto":
        // Handle file change logic if needed
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = '/api/v1/tambahmahasiswa';

    const formDataToSend = new FormData();
    formDataToSend.append("nama_mahasiswa", nama_mahasiswa);
    formDataToSend.append("npm", npm);
    formDataToSend.append("jk", jk);
    formDataToSend.append("alamat", alamat);
    formDataToSend.append("status", status);
    formDataToSend.append("notlp", notlp);
    formDataToSend.append("email", email);
    formDataToSend.append("password", password);
    formDataToSend.append("id_kelas", id_kelas);
    formDataToSend.append("nama_kelas", nama_kelas);

    try {
      const response = await axios.post(apiUrl, formDataToSend);

      if (response.status === 200) {
        console.log('Mahasiswa berhasil ditambahkan');
        navigate('/path-setelah-submit'); // Ganti dengan path yang sesuai
      } else {
        console.error('Gagal menambahkan Mahasiswa');
      }
    } catch (error) {
      console.error('Error:', error);
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
        <div className="container w-[976px] h-full rounded-lg overflow-hidden bg-white p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Nama Mahasiswa
              </label>
              <input
                type="text"
                name="nama_mahasiswa"
                value={nama_mahasiswa}
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
                type="text"
                name="npm"
                value={npm}
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
                type="text"
                name="jk"
                value={jk}
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
                value={alamat}
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
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Status
              </label>
              <input
                type="text"
                name="status"
                value={status}
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
                name="noTelepon"
                value={notlp}
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
                value={email}
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
                value={password}
                onChange={handleInputChange}
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
                value={id_kelas}
                onChange={handleInputChange}
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
                value={nama_kelas}
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
