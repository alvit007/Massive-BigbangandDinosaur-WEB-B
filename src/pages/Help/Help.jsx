import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import Layout from "../Layout";

const Help = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full bg-background">
        <p className="text-2xl mb-4 ml-4 text-primary">Help</p>

        <div className="card  bg-white shadow-xl rounded-3xl p-5">
          <div className="card-body text-primary">
            <h2 className="card-title text-center text-3xl py-2 font-semibold">
              FAQ
            </h2>
            <ul className="py-6 list-disc pl-6">
              <li>Bagaimana cara mengganti password akun?</li>
              <p className="pb-6">
                : Kamu bisa klik tombol "Setting" atau pengaturan di bagian kiri
                bawah, setelah itu klik change pass dan kamu bisa mengganti
                password di sana.
              </p>

              <li>
                Bagaimana cara menampilkan Qr Code untuk presensi mahasiswa?
              </li>
              <p className="pb-6">
                : Kamu bisa klik tombol "Presensi" di bagian sebelah kiri, klik
                "Mulai Presensi" sesuai dengan mata kuliah, dan yang terakhir
                klik "generate QR Code."
              </p>

              <li>Apa yang harus saya lakukan jika saya lupa kata sandi?</li>
              <p className="pb-6" id="p1">
                : Kamu bisa hubungi bagian administrasi di Ruangan Admin
                Universitas Siliwangi untuk mendapatkan kata sandi, perlu
                diingat bahwa kamu harus membawa KTP.
              </p>

              <li>Bagaimana cara menambah mata kuliah baru?</li>
              <p className="-mb-5">
                : Kamu bisa klik tombol "Mata Kuliah" di bagian kiri dan klik
                "Tambah Mata Kuliah" di sebelah kanan.
              </p>
            </ul>
          </div>
        </div>

        <div className="card bg-white shadow-xl my-14 rounded-3xl">
          <div className="card-body text-primary">
            <h2 className="card-title text-center text-3xl py-4 font-semibold">
              Kontak Kami
            </h2>
            <div className="">
              <p className="my-3 flex flex-row">
                {" "}
                <MdOutlineEmail className="left-8 my-0.8 ml-6 w-8 h-7 pr-" />{" "}
                bigbanganddinosaur@gmail.com
              </p>
              <p className="my-3 flex flex-row">
                {" "}
                <LuPhone className=" left-8 my-0.8 ml-6 w-8 h-7 pr-" /> 021 -
                12345678
              </p>
              <p className="my-3 flex flex-row">
                {" "}
                <MdOutlineLocationOn className=" left-8 my-0.8 ml-6 w-8 h-7 pr-" />{" "}
                Jl. Siliwangi No. 24 Kota Tasikmalaya 46115 Jawa Barat
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
