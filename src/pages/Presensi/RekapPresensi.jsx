import React from "react";
import Layout from "../Layout";

function RekapPresensi() {
  return (
    <Layout>
    <div className="flex flex-col  h-screen  bg-background">
      <div className=" flex flex-row justify-between">
        <h1 className="text-3xl font-semibold text-primary">Rekap Presensi</h1>
        <h2 className="self-center">
          <span className="text-primary text-xl font-semibold">
            Presensi /{" "}
          </span>
          <span className="text-sky-600 text-xl font-semibold">
            {" "}
            Rekap Absen
          </span>{" "}
        </h2>
      </div>

      <div className="bg-white rounded-md mt-7">
        <div className="p-8">
          <div>
            <h2 className="text-sky-600 text-2xl">S1 Teknik Informatika</h2>
            <h1 className="text-2xl pt-5">Frontend Programming </h1>
            <div class="border-b border-black"></div>
          </div>
          <table className="w-full mt-10">
            <thead>
              <tr>
                <th className="border p-2 w-2/12" rowSpan="2">
                  NAMA LENGKAP
                </th>
                <th className="border p-2 w-2/12" rowSpan="2">
                  NIM
                </th>
                <th className="border p-2 " colSpan="16">
                  PERTEMUAN
                </th>
              </tr>
              <tr>
                <th className="border p-2 text-center">1</th>
                <th className="border p-2 text-center">2</th>
                <th className="border p-2 text-center">3</th>
                <th className="border p-2 text-center">4</th>
                <th className="border p-2 text-center">5</th>
                <th className="border p-2 text-center">6</th>
                <th className="border p-2 text-center">7</th>
                <th className="border p-2 text-center">8</th>
                <th className="border p-2 text-center">9</th>
                <th className="border p-2 text-center">10</th>
                <th className="border p-2 text-center">12</th>
                <th className="border p-2 text-center">13</th>
                <th className="border p-2 text-center">14</th>
                <th className="border p-2 text-center">15</th>
                <th className="border p-2 text-center">16</th>
              </tr>
            </thead>
            <tbody>
              {/* You can map through your data to generate rows here */}
              <tr>
                <td className="border p-2">Alvito Kurnia Fahrio</td>
                <td className="border p-2 ">2110631170048</td>
                <td className="border p-2 text-center">S</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">A</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">S</td>
                <td className="border p-2 text-center">S</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">A</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">A</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">S</td>
              </tr>
              <tr>
                <td className="border p-2">Rafi Kahfi Yugi</td>
                <td className="border p-2 ">2110631170139</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">S</td>
                <td className="border p-2 text-center"> H</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">A</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">S</td>
                <td className="border p-2 text-center">S</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">A</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">H</td>
                <td className="border p-2 text-center">A</td>
                <td className="border p-2 text-center">H</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default RekapPresensi;
