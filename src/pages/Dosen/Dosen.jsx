import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2, Pencil } from "lucide-react";
import Layout from "../Layout";
import axios from "axios";

function Dosen() {
  const [DosenData, setDosenData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const response = await axios.get("api/v1/dosen", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDosenData(response.data.values);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (token) {
      fetchData();
    }
  }, []);

  const handleDeleteDosen = (index) => {
    // Implement your logic to delete Dosen at the given index
    // Update the DosenData state accordingly
    const updatedData = [...DosenData];
    updatedData.splice(index, 1);
    setDosenData(updatedData);
  };

  return (
    <Layout>
      <div className="flex flex-col h-screen bg-background">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-semibold text-primary">Dosen</h1>
          <h2 className="text-sky-600 text-xl font-semibold mr-2">
            Dosen / Tambah
          </h2>
        </div>
        <div className="bg-white rounded-md mt-7">
          <div className="p-4 mt-2">
            <Link
              to={"tambah-dosen"}
              className="bg-primary hover:bg-[#071B4E] text-white mb font-bold py-2 px-4 rounded"
            >
              Tambah Dosen
            </Link>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="border p-2 w-1/12">NO</th>
                  <th className="border p-2 w-2/12">NIP</th>
                  <th className="border p-2 w-6/12">NAMA</th>
                  <th className="border p-2 w-3/12">STATUS</th>
                  <th className="border p-2 w-3/12">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {DosenData.map((Dosen, index) => (
                  <tr key={index}>
                    <td className="border p-2 text-center">{index + 1}</td>
                    <td className="border p-2 ">{Dosen.nip}</td>
                    <td className="border p-2">{Dosen.nama_dosen}</td>
                    <td className="border p-2 text-center">{Dosen.status}</td>
                    <td className="border p-2 text-center flex justify-between">
                      <Link to={`ubah-dosen/${Dosen.id_dosen}`}
                        className="color"
                      >
                        <Pencil stroke="#26A1F4" />
                      </Link>

                      <button
                        className="color"
                        onClick={() => handleDeleteDosen(index)}
                      >
                        <Trash2 stroke="#BF0404" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dosen;
