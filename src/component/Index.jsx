import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Bg from "./../assets/bg.png";
import LogoIMG from "./../assets/Logo.png";

function Index({ showNavbar, onNavigate }) {
  const navigate = useNavigate();



  return (
    <section id="landing-page" className="landing-page">
      <div className="container relative">
        {/* Background Image */}
        <div className="bg-cover w-[100vw] h-[1024px] absolute " style={{ backgroundImage: `url(${Bg})` }}></div>

        {/* Content */}
        <div className="bg-primary w-[592px] h-[1024px] absolute z-10 text-white">
          <img src={LogoIMG} className="block mx-auto mt-32" alt="Logo" width="163px" height="136px" />
          <span className="text-4xl tracking mx-auto block text-center font-bold mt-[52px]">SELAMAT
            DATANG</span>
          <span className="text-[30px] font-medium mx-auto block text-center mt-2">DI SISTEM
            PRESENSI</span>
          <span className="text-[30px] font-medium mx-auto block text-center mt-2">UNIVERSITAS
            SILIWANGI</span>
          <span className="text-2xl font-medium mx-auto block text-center mt-[69px]">LOGIN AS</span>
          <div className="flex justify-evenly mt-8">
            {/* Menggunakan Link untuk navigasi ke "/dashboard" */}
            <Link to="/login" className="bg-white text-[#1d3163] py-[6px] px-[35px] rounded-[10px] font-semibold" onClick={onNavigate}>DOSEN</Link>
            <button className="bg-white text-[#1d3163] py-[6px] px-[35px] rounded-[10px] font-semibold"><a
              href="#">ADMIN</a></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
