/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import datamining from "./../assets/datamining.png";
import mobileprogramming from "./../assets/mobileprogramming.png";
import webprogramming from "./../assets/webprogramming.png";
import profile from "./../assets/profile.png";
import Layout from "./Layout";
import axios from "axios";
function Dashboard() {
  const [matakuliah, setMataKuliah] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const user = localStorage.getItem("user");

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/v1/matakuliah", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Menggunakan data dari server
      setMataKuliah(response.data.values);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === matakuliah.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? matakuliah.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col py-2 px-0 h-screen overflow-y-auto w-full bg-background">
          <h2 className="text-3xl font-semibold text-primary mb-[25px]">
            Dashboard
          </h2>
          <div className="container bg-white w-[976px] h-[226px] rounded-lg flex justify-evenly relative">
            {matakuliah
              .slice(currentIndex, currentIndex + 3)
              .map((item, index) => (
                // Adjust "item.name" and "item.id" based on your actual data structure
                <div
                  key={index}
                  className={`bg-blue-500 h-[147px] w-72 rounded-lg overflow-hidden self-center bg-cover bg-center relative`}
                >
                  {/* Adjust "item.name" and "item.id" based on your actual data structure */}
                  <img
                    className="hover:brightness-75 w-full h-full object-cover"
                    src={datamining}
                    alt="Data Mining"
                  />
                  <span className="text-white text-xl font-semibold w-full block text-center absolute z-10 -mt-[85px]">
                    {item.nama_matakuliah}
                  </span>
                </div>
              ))}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white  p-2 rounded-full"
              onClick={handlePrev}
            >
              {"<"}
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
              onClick={handleNext}
            >
              {">"}
            </button>
          </div>

          <div className="w-[976px] h-[300px] mt-[27px] rounded-lg flex gap-6 overflow-hidden">
            <div className="bg-white w-[280px] h-[250px] grid grid-cols-1 justify-items-center rounded-lg">
              <img
                className="bg-cover w-[165px] h-[165px] "
                src={profile}
                alt="Profile"
              />
              <span className="font-medium text-2xl text-primary">
                Selamat Datang
              </span>
              <span className="font-semibold text-2xl text-primary ">
                {user}
              </span>
            </div>
            <div className="bg-white w-[672px] h-[300px] rounded-lg p-5">
              <h2 className="text-primary font-semibold text-2xl">
                Jadwal Mengajar Hari Ini
              </h2>
              <div className="grid grid-cols-5">
                <div className=" flex flex-col w-[220px] h-[200px] justify-around">
                  <span className="text-primary font-medium text-xl">
                    Sistem Digital
                  </span>
                  <span className="text-primary font-medium text-xl">
                    Pemrograman Sistem
                  </span>
                  <span className="text-primary font-medium text-xl">
                    Sistem Digital
                  </span>
                  <span className="text-primary font-medium text-xl">
                    Aljabar Linear
                  </span>
                </div>
                <div className=" flex flex-col w-[50px] h-[200px] justify-around ml-[140px]">
                  <span className="text-primary font-medium text-xl self-center">
                    09.30
                  </span>
                  <span className="text-primary font-medium text-xl self-center">
                    07.00
                  </span>
                  <span className="text-primary font-medium text-xl self-center">
                    13.00
                  </span>
                  <span className="text-primary font-medium text-xl self-center">
                    14.00
                  </span>
                </div>
                <div className=" flex flex-col w-[64px] h-[200px] justify-around ml-[110px]">
                  <span className="text-primary font-medium text-xl self-center">
                    LT1-2A
                  </span>
                  <span className="text-primary font-medium text-xl self-center">
                    LT1-2B
                  </span>
                  <span className="text-primary font-medium text-xl self-center">
                    LT1-2A
                  </span>
                  <span className="text-primary font-medium text-xl self-center">
                    LT1-2C
                  </span>
                </div>
                <div className=" flex flex-col w-[80px] h-[200px] justify-around ml-[100px]">
                  <button className="bg-primary text-white rounded-lg hover:bg-[#071B4E] text-md ">
                    <span href="#">Selesai</span>
                  </button>
                  <button className="bg-primary text-white rounded-lg hover:bg-[#071B4E] text-md ">
                    <span href="#">Selesai</span>
                  </button>
                  <button className="bg-background text-primary border border-primary rounded-lg hover:bg-[#ccc] text-md ">
                    <span href="#">Belum</span>
                  </button>
                  <button className="bg-background text-primary border border-primary rounded-lg hover:bg-[#ccc] text-md ">
                    <span href="#">Belum</span>
                  </button>
                </div>
                <div className=" flex flex-col w-[20px] h-[200px] justify-around ml-[80px] -mt-[8px]">
                  <span className="text-primary font-medium text-3xl">
                    <span href="#">...</span>
                  </span>
                  <span className="text-primary font-medium text-3xl">
                    <span href="#">...</span>
                  </span>
                  <span className="text-primary font-medium text-3xl">
                    <span href="#">...</span>
                  </span>
                  <span className="text-primary font-medium text-3xl">
                    <span href="#">...</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
