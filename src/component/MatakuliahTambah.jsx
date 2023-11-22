import React from "react";


function MatakuliahTambah() {
  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full bg-background">
      <div className=" flex flex-row justify-between mb-[26px]">
        <h1 className="text-3xl font-semibold text-primary">Mata Kuliah</h1>
        <h2 className="self-center">
          <span className="text-primary text-xl font-semibold">Mata Kuliah / </span><span className="text-sky-600 text-xl font-semibold ">Tambah</span></h2>
      </div>
      <div className="container w-full h-[400px] rounded-lg overflow-hidden bg-white p-5">
        <div className="flex justify-between mb-5">
          <span className="text-primary text-xl font-medium self-center">Mata Kuliah</span>
          <input type="text" placeholder="Mata Kuliah" className="px-3 py-2 border shadow rounded w-[720px] focus:outline-none focus:ring-1 focus:ring-primary bg-background" />
        </div>
        <div className="flex justify-between mb-5">
          <span className="text-primary text-xl font-medium self-center">Dosen</span>
          <input type="text" placeholder="Dosen" className="px-3 py-2 border shadow rounded w-[720px] focus:outline-none focus:ring-1 focus:ring-primary bg-background" />
        </div>
        <div className="flex justify-between mb-5">
          <span className="text-primary text-xl font-medium self-center">Ruangan</span>
          <input type="text" placeholder="Ruangan" className="px-3 py-2 border shadow rounded w-[720px] focus:outline-none focus:ring-1 focus:ring-primary bg-background" />
        </div>
        <div className="flex justify-between mb-5">
          <span className="text-primary text-xl font-medium self-center">Jam Mulai</span>
          <input type="text" placeholder="Jam Mulai" className="px-3 py-2 border shadow rounded w-[720px] focus:outline-none focus:ring-1 focus:ring-primary bg-background" />
        </div>
        <div className="flex justify-between mb-5">
          <span className="text-primary text-xl font-medium self-center">Jam Selesai</span>
          <input type="text" placeholder="Jam Selesai" className="px-3 py-2 border shadow rounded w-[720px] focus:outline-none focus:ring-1 focus:ring-primary bg-background" />
        </div>
        <div className="flex justify-end mb-5">
        <button className="bg-primary text-white rounded-lg px-3 py-2 hover:bg-[#071B4E] text-md ml-2">Tambah</button>
        </div>
      </div>
    </div>
  );
}

export default MatakuliahTambah;