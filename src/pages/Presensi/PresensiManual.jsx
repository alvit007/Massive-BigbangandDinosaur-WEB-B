import React from 'react'
import Layout from '../Layout'

function PresensiManual() {
  return (
    <Layout>
    <div className="flex flex-col h-screen w-full bg-background">
      <div className=" flex flex-row justify-between">
        <h1 className="text-3xl font-semibold text-primary">QR Code</h1>
        <h2 className="self-center">
        <span className="text-primary text-xl font-semibold">Presensi / </span><span className="text-sky-600 text-xl font-semibold"> Generate Qr Code</span> </h2>
        </div>

      <div className="bg-white rounded-md mt-7">
        <div className="p-12">
            <div>
                <h2 className="text-sky-600 text-2xl">S1 Teknik Informatika</h2>
                <h1 className="text-2xl pt-5">Frontend Programming </h1>
                <div className="border-b border-black"></div>
            </div>
            <div className="pt-8">
            <table className="w-full mt-5">
            <thead>
              <tr>
                <th className="border p-2 w-3/12">NAMA</th>
                <th className="border p-2 w-1/12">NIM</th>
                <th className="border p-2 w-2/12">TANGGAL</th>
                <th className="border p-2 w-3/12">WAKTU</th>           
                <th className="border p-2 w-3/12">ACTION</th>           
              </tr>
            </thead>
            <tbody>
              {/* You can map through your data to generate rows here */}
              <tr>
                <td className="border p-2">Alvito Kurnia Fahrio</td>
                <td className="border p-2 ">2110631170048</td>
                <td className="border p-2 text-center">13-11-23</td>
                <td className="border p-2 text-center">08:30 - 10:50</td>
                <td className="border p-2 ">
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Action</option>
                    <option value="H">Hadir</option>
                    <option value="S">Sakit</option>
                    <option value="I">Izin</option>
                    <option value="A">Alfa</option>
                    </select>  </td>
              </tr>
              <tr>
                <td className="border p-2">Rafi Kahfi Yugi</td>
                <td className="border p-2 ">2110631170139</td>
                <td className="border p-2 text-center">13-11-23</td>
                <td className="border p-2 text-center">08:30 - 10:50</td>
                <td className="border p-2 ">
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Action</option>
                    <option value="H">Hadir</option>
                    <option value="S">Sakit</option>
                    <option value="I">Izin</option>
                    <option value="A">Alfa</option>
                    </select>   </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>

            </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default PresensiManual