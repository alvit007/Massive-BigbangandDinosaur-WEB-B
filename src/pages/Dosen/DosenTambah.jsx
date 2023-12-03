import React from "react";
import Layout from "../Layout";

function DosenTambah() {
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
          <form action="">
            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                Nama Dosen
              </label>
              <input
                type="text"
                name="namaMahasiswa"
                className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
                placeholder="Masukkan Nama Mahasiswa"
              />
            </div>

            <div className="mb-4 flex flex-row justify-between">
              <label className="font-medium text-primary text-1xl flex items-center w-44">
                NIP
              </label>
              <input
                type="text"
                name="npm"
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
