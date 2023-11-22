import React from "react";
import datamining from "./../assets/datamining.png";
import mobileprogramming from "./../assets/mobileprogramming.png";
import webprogramming from "./../assets/webprogramming.png";
import profile from "./../assets/profile.png";


function Dashboard() {
  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full bg-background">
      <h2 className="text-3xl font-semibold text-primary mb-[26px]">Dashboard</h2>
      <div className="container bg-white w-[976px] h-[226px] rounded-lg flex justify-evenly">
        <div className="bg-blue-500 h-[147px] w-72 rounded-lg overflow-hidden self-center bg-cover bg-center relative">
        <img className="hover:brightness-75"src={datamining} alt="Data Mining"/>
        <span className="text-white text-xl font-semibold w-full block text-center absolute z-10 -mt-[85px]">Data Mining</span>
        </div>
        <div className="bg-blue-500 h-[147px] w-72 rounded-lg overflow-hidden self-center bg-cover bg-center relative">
        <img className="hover:brightness-75"src={mobileprogramming} alt="Mobile Programming"/>
        <span className="text-white text-xl font-semibold w-full block text-center absolute z-10 -mt-[85px]">Mobile Programming</span>
        </div>
        <div className="bg-blue-500 h-[147px] w-72 rounded-lg overflow-hidden self-center bg-cover bg-center relative">
        <img className="hover:brightness-75"src={webprogramming} alt="Web Programming"/>
        <span className="text-white text-xl font-semibold w-full block text-center absolute z-10 -mt-[85px]">Web Programming</span>
        </div>
      </div>

      <div className="w-[976px] h-[300px] mt-[27px] rounded-lg flex gap-6 overflow-hidden">
        <div className="bg-white w-[280px] h-[250px] grid grid-cols-1 justify-items-center rounded-lg">
          <img className="bg-cover w-[165px] h-[165px] " src={profile} alt="Profile"/>
          <span className="font-medium text-2xl text-primary">Selamat Datang</span>
          <span className="font-semibold text-2xl text-primary ">Alam Rahmatulloh</span>
        </div>
        <div className="bg-white w-[672px] h-[300px] rounded-lg p-5">
          <h2 className="text-primary font-semibold text-2xl">Jadwal Mengajar Hari Ini</h2>
          <div className="grid grid-cols-5">
            <div className=" flex flex-col w-[220px] h-[200px] justify-around">
              <span className="text-primary font-medium text-xl">Sistem Digital</span>
              <span className="text-primary font-medium text-xl">Pemrograman Sistem</span>
              <span className="text-primary font-medium text-xl">Sistem Digital</span>
              <span className="text-primary font-medium text-xl">Aljabar Linear</span>
            </div>
            <div className=" flex flex-col w-[50px] h-[200px] justify-around ml-[140px]">
              <span className="text-primary font-medium text-xl self-center">09.30</span>
              <span className="text-primary font-medium text-xl self-center">07.00</span>
              <span className="text-primary font-medium text-xl self-center">13.00</span>
              <span className="text-primary font-medium text-xl self-center">14.00</span>
            </div>
            <div className=" flex flex-col w-[64px] h-[200px] justify-around ml-[110px]">
              <span className="text-primary font-medium text-xl self-center">LT1-2A</span>
              <span className="text-primary font-medium text-xl self-center">LT1-2B</span>
              <span className="text-primary font-medium text-xl self-center">LT1-2A</span>
              <span className="text-primary font-medium text-xl self-center">LT1-2C</span>
            </div>
            <div className=" flex flex-col w-[80px] h-[200px] justify-around ml-[100px]">
              <button className="bg-primary text-white rounded-lg hover:bg-[#071B4E] text-md "><a href="#">Selesai</a></button>
              <button className="bg-primary text-white rounded-lg hover:bg-[#071B4E] text-md "><a href="#">Selesai</a></button>
              <button className="bg-background text-primary border border-primary rounded-lg hover:bg-[#ccc] text-md "><a href="#">Belum</a></button>
              <button className="bg-background text-primary border border-primary rounded-lg hover:bg-[#ccc] text-md "><a href="#">Belum</a></button>
            </div>
            <div className=" flex flex-col w-[20px] h-[200px] justify-around ml-[80px] -mt-[8px]">
              <span className="text-primary font-medium text-3xl"><a href="#">...</a></span>
              <span className="text-primary font-medium text-3xl"><a href="#">...</a></span>
              <span className="text-primary font-medium text-3xl"><a href="#">...</a></span>
              <span className="text-primary font-medium text-3xl"><a href="#">...</a></span>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Dashboard;