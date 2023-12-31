import React, { useState, useEffect } from "react";
import matkul1_detail from "../../assets/matkul1_detail.png";
import Layout from "../Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

function MatakuliahDetail() {
  const [matakuliah, setMatakuliah] = useState([]);
  const {id_matakuliah} = useParams();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `/api/v1/matakuliahbyid/${id_matakuliah}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );
        console.log(response.data.values[0]);

      setMatakuliah(response.data.values[0]);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };


    if (token) {
      fetchMovieDetails();
    }

    fetchMovieDetails();
  }, [id_matakuliah]);

  return (
    <Layout>
    <div className="flex flex-col  w-full bg-background">
      <div className=" flex flex-row justify-between mb-[26px]">
        <h1 className="text-3xl font-semibold text-primary">Mata Kuliah</h1>
        <h2 className="self-center">
          <span className="text-primary text-xl font-semibold">
            Mata Kuliah /{" "}
          </span>
          <span className="text-sky-600 text-xl font-semibold ">Detail</span>
        </h2>
      </div>
      <div className="container w-[976px] h-full rounded-lg overflow-hidden bg-white p-5">
        <div className="flex">
          <div className="bg-blue-500 w-[300px] h-[190px] overflow-hidden rounded-lg">
            <img
              className="hover:brightness-75"
              src={matkul1_detail}
              alt="Detail Mata Kuliah 1"
            />
          </div>
          <div className="flex flex-col justify-between w-[400px] h-[190px] ml-5">
            <span className="text-primary text-4xl font-semibold">
              {matakuliah.nama_matakuliah}
            </span>
            <span className="text-primary text-2xl font-semibold">{matakuliah.kode_matakuliah}</span>
            <span className="text-primary text-2xl font-semibold">2023</span>
            <div className="bg-background w-full h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-2 w-28"></div>
            </div>
            <span className="text-primary text-base font-normal">
              30% Complete
            </span>
          </div>
          <div className="h-9 -mt-[14px] ml-[200px]">
            <span className="text-primary font-medium text-4xl">
              <a href="test">...</a>
            </span>
          </div>
        </div>
        <div className="flex flex-col h-[200px] justify-between mt-5">
          <span className="text-primary text-xl font-medium">
            Ir. Alam Rahmatulloh, ST, MT, MCE, IPM
          </span>
          <span className="text-primary text-xl font-medium">37 Mahasiswa</span>
          <span className="text-primary text-xl font-medium">16 Pertemuan</span>
          <span className="text-primary text-xl font-medium">Ruang LT1-2A</span>
          <span className="text-primary text-xl font-medium">
            09.30 - 11.00
          </span>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default MatakuliahDetail;
