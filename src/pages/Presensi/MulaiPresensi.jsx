import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
function MulaiPresensi() {
  return (
    <>
      <Layout>
        <div className="flex flex-col h-screen bg-background">
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-semibold text-primary">
              Rekap Presensi
            </h1>
            <h2 className="self-center">
              <span className="text-primary text-xl font-semibold">
                Presensi /{" "}
              </span>
              <span className="text-sky-600 text-xl font-semibold">
                {" "}
                Mulai Presensi
              </span>{" "}
            </h2>
          </div>

          <div className="bg-white rounded-md mt-7">
            <div className="p-8">
              <div>
                <h2 className="text-sky-600 text-2xl">S1 Teknik Informatika</h2>
                <h1 className="text-2xl pt-5">Frontend Programming </h1>
                <div className="border-b dark:border-neutral-300 mt-2"></div>
              </div>

              <div className="flex flex-col mt-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                        <thead className="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th
                              scope="col"
                              className="border-r px-6 py-4 dark:border-neutral-500"
                            >
                              Pertemuan
                            </th>
                            <th
                              scope="col"
                              className="border-r px-6 py-4 dark:border-neutral-500"
                            >
                              Tanggal
                            </th>
                            <th
                              scope="col"
                              className="border-r px-6 py-4 dark:border-neutral-500"
                            >
                              Ruangan
                            </th>
                            <th
                              scope="col"
                              className="border-r px-6 py-4 dark:border-neutral-500"
                            >
                              Waktu
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                              Pertemuan 1
                            </td>
                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                              Mark
                            </td>
                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                              Otto
                            </td>
                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                              @mdo
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Link
                                to="/presensi/mulai-presensi/generate-qrcode"
                                className="bg-merah text-white rounded-lg py-2 px-4 hover:bg-[#071B4E] text-md"
                              >
                                Mulai Presensi
                              </Link>
                              <Link to={"/presensi/mulai-presensi/presensi-manual"} className="bg-primary text-white rounded-lg ml-2 py-2 px-4 hover:bg-[#920202] text-md">
                                Presensi Manual
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                              Pertemuan 2
                            </td>
                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                              Jacob
                            </td>
                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                              Thornton
                            </td>
                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                              @fat
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <button className="bg-merah text-white rounded-lg py-2 px-4 hover:bg-[#071B4E] text-md">
                                Mulai Presensi
                              </button>
                              <button className="bg-primary text-white rounded-lg ml-2 py-2 px-4 hover:bg-[#920202] text-md">
                                Presensi Manual
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                              Pertemuan 3
                            </td>
                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                              Larry the Bird
                            </td>
                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                              @twitter
                            </td>
                            <td className="whitespace-nowrap border-r  dark:border-neutral-500 px-6 py-4">
                              tes
                            </td>
                            <td className="whitespace-nowrap border-r  dark:border-neutral-500 px-6 py-4">
                              <button className="bg-merah text-white rounded-lg py-2 px-4 hover:bg-[#071B4E] text-md">
                                Mulai Presensi
                              </button>
                              <button className="bg-primary text-white rounded-lg ml-2 py-2 px-4 hover:bg-[#920202] text-md">
                                Presensi Manual
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default MulaiPresensi;
