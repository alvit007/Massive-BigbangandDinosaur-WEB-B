import React from 'react'
import Layout from "../Layout"


function MatakuliahTambah() {
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
        <form action="">
          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
               Mata Kuliah
            </label>
            <input
              type="text"
              name="namaMataKuliah"
              // value={formData.namaMataKuliah}
              // onChange={handleChange}
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
              name="namaMataKuliah"
              // value={formData.namaMataKuliah}
              // onChange={handleChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Nama Mata Kuliah"
            />
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="font-medium text-primary text-1xl flex items-center w-44">
              Dosen
            </label>
            <input
              type="text"
              name="programStudi"
              // value={formData.programStudi}
              // onChange={handleChange}
              className="mt-1 p-2 w-4/5 border rounded-md pl-7 text-primary bg-background"
              placeholder="Masukkan Program Studi"
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