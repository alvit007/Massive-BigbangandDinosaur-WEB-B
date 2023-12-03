import React from "react";
import matkul1 from "../../assets/matkul1.png";
import matkul2 from "../../assets/matkul2.png";
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Layout from "../Layout";

function Matakuliah() {
  
  const navigate = useNavigate(); 

  const handleTambahMatakuliah = () => {
    navigate('/matakuliah/tambah');
  };

  const handleDetailMatakuliah = () => {
    navigate('/matakuliah/detail');
  };

  return (
    <Layout>
    <div className="flex flex-col h-screen  bg-background">
      <div className="flex flex-row justify-between mb-[26px]">
        <h1 className="text-3xl font-semibold text-primary">Mata Kuliah</h1>
        <h2 className="text-sky-600 text-xl font-semibold mr-2 self-center">Mata Kuliah</h2>
      </div>

      <div className="container w-full h-full rounded-lg overflow-hidden">
        <div className="flex gap-12">
          <div>
          {/* Matkul Pendek */}
          <div className="bg-white w-[600px] h-[228px] pl-[50px] rounded-lg grid grid-cols-3 justify-items-center hover:brightness-75 hover:transition-all cursor-pointer" onClick={handleDetailMatakuliah}>
            <div className="w-[255px] h-[178px] overflow-hidden rounded-lg self-center">
            <img src={matkul1} alt="Mata Kuliah 1"/>
            </div>
            <div className="flex flex-col justify-between mt-[25px] ml-32 w-[220px] h-[175px]">
              <span className="text-primary text-sm font-medium">S1 Teknik Informatika</span>
              <span className="text-primary text-base font-medium">Sistem Digital_FKAZA_2023</span>
              <span className="text-primary text-base font-medium flex"><MapPin />LT1-2A</span>
              <button className="bg-primary text-white rounded-lg w-[90px] hover:bg-[#071B4E] text-md">09.30 WIB</button>
              <button className="bg-[#BF0404] text-white rounded-lg w-[90px] hover:bg-[#920202] text-md">11.00 WIB</button>
            </div>
            <div className="h-10 mt-[5px] ml-[150px]">
            <span className="text-primary font-medium text-3xl"><a href="detail">...</a></span>
            </div>
          </div>

          {/* Matkul Panjang */}
          <div className="bg-white w-[600px] h-[228px] pl-[50px] rounded-lg grid grid-cols-3 mt-5 justify-items-center hover:brightness-75 hover:transition-all cursor-pointer">
            <div className="w-[255px] h-[178px] overflow-hidden rounded-lg self-center">
            <img className="hover:brightness-75"src={matkul1} alt="Mata Kuliah 1"/>
            </div>
            <div className="flex flex-col justify-between mt-[25px] ml-[195px] w-[290px] h-[175px]">
              <span className="text-primary text-sm font-medium">S1 Teknik Informatika</span>
              <span className="text-primary text-base font-medium">Pemrograman Sistem_FKAZA_2023</span>
              <span className="text-primary text-base font-medium flex"><MapPin />LT1-2A</span>
              <button className="bg-primary text-white rounded-lg w-[90px] hover:bg-[#071B4E] text-md">09.30 WIB</button>
              <button className="bg-[#BF0404] text-white rounded-lg w-[90px] hover:bg-[#920202] text-md">11.00 WIB</button>
            </div>
            <div className="h-10 mt-[5px]">
            <span className="text-primary font-medium text-3xl ml-[145px]"><a href="detail">...</a></span>
            </div>
          </div>
          <div className="bg-white w-[600px] h-[228px] pl-[50px] rounded-lg grid grid-cols-3 justify-items-center mt-5">
            <div className="w-[255px] h-[178px] overflow-hidden rounded-lg self-center">
            <img className="hover:brightness-75"src={matkul2} alt="Mata Kuliah 1"/>
            </div>
            <div className="flex flex-col justify-between mt-[25px] ml-[195px] w-[290px] h-[175px]">
              <span className="text-primary text-sm font-medium">S1 Teknik Informatika</span>
              <span className="text-primary text-base font-medium">Pemrograman Sistem_FKAZA_2023</span>
              <span className="text-primary text-base font-medium flex"><MapPin />LT1-2A</span>
              <button className="bg-primary text-white rounded-lg w-[90px] hover:bg-[#071B4E] text-md">09.30 WIB</button>
              <button className="bg-[#BF0404] text-white rounded-lg w-[90px] hover:bg-[#920202] text-md">11.00 WIB</button>
            </div>
            <div className="h-10 mt-[5px]">
            <span className="text-primary font-medium text-3xl ml-[145px]"><a href="detail">...</a></span>
            </div>
          </div>
          </div>
          <div>
          <div className="bg-white h-[140px] w-[330px] rounded-lg p-5">
            <span className="text-primary text-base font-medium">Cari Mata Kuliah</span>
            <br />
            <hr className="border border-primary"/>
            <form className="mt-5">
              <input type="text" placeholder="Search" className="px-3 py-2 border shadow rounded w-[224px] focus:outline-none focus:ring-1 focus:ring-primary" />
              <button className="bg-primary text-white rounded-lg px-3 py-2 hover:bg-[#071B4E] text-md ml-2">Cari</button>
            </form>
          </div>
          <div>
          <button className="bg-[#BF0404] text-white rounded-lg w-full hover:bg-[#920202] text-md py-2 mt-2"
          onClick={handleTambahMatakuliah}
          >Tambah Mata Kuliah</button>
          </div>
        </div>
        </div> 
      </div>
    </div>
    </Layout>
  );
}

export default Matakuliah;