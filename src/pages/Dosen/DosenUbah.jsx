import React, { useState, useEffect } from  "react";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

function DosenUbah() {
  const [dosen, setDosen] = useState([]);

  const [formData, setFormData] = useState({
    namaDosen: "",
    nip: "",
    jenisKelamin: "",
    alamat: "",
    foto: null,
    status: "",
    noTelepon: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;


    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const { id_dosen } = useParams();

  useEffect(() => {
    // Mengambil token dari local storage
    const token = localStorage.getItem("token");

    // Melakukan permintaan HTTP dengan token
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/dosenbyid/${id_dosen}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const dosenData = response.data.values[0];
        setDosen(dosenData);
        setFormData({
          namaDosen: dosenData.nama_dosen,
          nip: dosenData.nip,
          jenisKelamin: dosenData.jk,
          alamat: dosenData.alamat,
          status: dosenData.status,
          noTelepon: dosenData.notlp,
          email: dosenData.email,
          password: "", 
        });
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
            Form Dosen
          </h1>
          <h2 className="self-center">
            <span className="text-primary text-xl font-semibold">
              Dosen /{" "}
            </span>
            <span className="text-sky-600 text-xl font-semibold ">Ubah</span>
          </h2>
        </div>
        <div className="container w-[976px] h-full rounded-lg overflow-hidden bg-white p-5">
          <form action="">
            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Nama Dosen
              </label>
              <input
                type="text"
                name="namaDosen"
                value={formData.namaDosen}
                onChange={handleChange}
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
                name="npm"
                value={formData.nip}
                onChange={handleChange}
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

export default DosenUbah;
