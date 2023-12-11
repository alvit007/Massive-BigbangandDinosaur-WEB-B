import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import Layout from "../Layout";
import axios from "axios";
import gambarMatakuliah from "../../assets/matkul1.png"

function Matakuliah() {
  const [matakuliah, setMataKuliah] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // fetch data
  useEffect(() => {
    // Mengambil token dari local storage
    const token = localStorage.getItem("token");

    // Melakukan permintaan HTTP dengan token
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/matakuliah", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Menggunakan data dari server
        setMataKuliah(response.data.values);
        console.log(response.data.values);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (token) {
      fetchData();
    }
  }, []);
  // end fetch

  const navigate = useNavigate();
  const handleTambahMatakuliah = () => {
    navigate("/matakuliah/tambah");
  };

  const handleDetailMatakuliah = () => {
    navigate("/matakuliah/detail");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add logic for searching based on searchInput
    console.log("Searching for:", searchInput);
  };

  return (
    <Layout>
      <div className="flex flex-col bg-background">
        <div className="flex flex-row justify-between mb-26px">
          <h1 className="text-3xl font-semibold text-primary">Mata Kuliah</h1>
          <h2 className="text-sky-600 text-xl font-semibold mr-2 self-center">
            Mata Kuliah
          </h2>
        </div>

        <div className="container w-full h-full rounded-lg overflow-hidden flex mt-4">
          <div className="flex flex-col gap-12">
            {/* Matkul Pendek */}
            {matakuliah.map((matakuliah, index) => (
              <div
                key={index}
                className="bg-white w-[600px] h-[228px] pl-[50px] mb-3 rounded-lg grid grid-cols-3 justify-items-center hover:brightness-75 hover:transition-all cursor-pointer"
                onClick={handleDetailMatakuliah}
              >
                <div className="w-[255px] h-[178px] overflow-hidden rounded-lg self-center">
                  <img src={gambarMatakuliah} alt={gambarMatakuliah} />
                </div>
                <div className="flex flex-col justify-between mt-[25px] ml-32 w-[220px] h-[175px]">
                  <span className="text-primary text-sm font-medium">
                    S1 Teknik Informatika
                  </span>
                  <span className="text-primary text-base font-medium">
                    {matakuliah.nama_matakuliah}_{matakuliah.kode_matakuliah}
                  </span>
                  <span className="text-primary text-base font-medium flex">
                    <MapPin />
                    LT1-2A
                  </span>
                  <button className="bg-primary text-white rounded-lg w-90px hover:bg-[#071B4E] text-md">
                    09.30 WIB
                  </button>
                  <button className="bg-[#BF0404] text-white rounded-lg w-90px hover:bg-[#920202] text-md">
                    11.00 WIB
                  </button>
                </div>
                {/* <div className="h-10 mt-5px ml-150px">
                  <span className="text-primary font-medium text-3xl">
                    <a href="detail">...</a>
                  </span>
                </div> */}
              </div>
            ))}
          </div>

          <div className="flex flex-col ml-auto">
            {/* Cari Mata Kuliah */}
            <div className="bg-white h-140px w-330px rounded-lg p-5">
              <span className="text-primary text-base font-medium">
                Cari Mata Kuliah
              </span>
              <br />
              <hr className="border border-primary" />
              <form className="mt-5" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 border shadow rounded w-224px focus:outline-none focus:ring-1 focus:ring-primary"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="bg-primary text-white rounded-lg px-3 py-2 hover:bg-[#071B4E] text-md ml-2">
                  Cari
                </button>
              </form>
            </div>

            {/* Tambah Mata Kuliah Button */}
            <div>
              <button
                className="bg-[#BF0404] w-full text-white rounded-lg w-330px hover:bg-[#920202] text-md py-2 mt-2"
                onClick={handleTambahMatakuliah}
              >
                Tambah Mata Kuliah
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Matakuliah;
