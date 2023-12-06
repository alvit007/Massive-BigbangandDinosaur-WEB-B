import React from "react";
import profile from "../../assets/profile.png";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function GantiPassword() {
  return (
    <Layout>
      <div className="flex flex-col h-screen w-full bg-background">
        <div className="flex flex-row justify-between mb-[26px]">
          <h1 className="text-3xl font-semibold text-primary">Profile</h1>
          <h2 className="self-center">
            <span className="text-primary text-xl font-semibold">
              Settings /{" "}
            </span>
            <span className="text-sky-600 text-xl font-semibold ">Profile</span>
          </h2>
        </div>

        <div className="container w-[976px] h-[500px] rounded-lg overflow-hidden flex justify-between">
          <div className="bg-white w-[280px] h-[250px] grid grid-cols-1 justify-items-center rounded-lg">
            <img
              className="bg-cover w-[165px] h-[165px]"
              src={profile}
              alt="Profile"
            />
            <span className="font-medium text-2xl text-primary">
              Alam Rahmatulloh
            </span>
            <span className="font-semibold text-xl text-[#1E73BE]">
              S1 Teknik Informatika
            </span>
          </div>
          <div className="bg-white w-[650px] h-[340px] rounded-lg p-4">
            <div className="h-12">
              <Link to={"/profile"} className="text-primary text-[13px] p-2">
                Profile Detail
              </Link>
              <Link
                to={"/profile/edit-profile"}
                className="text-primary text-[13px] p-2"
              >
                Edit Profile
              </Link>
              <span className="text-[#1E73BE] text-[13px] border border-b-[#1E73BE] p-2 ml-3">
                Ganti Password
              </span>
            </div>
            <form action="">
              <div className="mb-4 flex flex-row justify-between">
                <label className="font-medium text-primary text-1xl flex items-center w-44">
                  Password Lama
                </label>
                <input
                  type="password"
                  name="namaMahasiswa"
                  className="mt-1 p-2 w-4/5 border rounded-md pl-3 text-primary bg-background"
                  placeholder="Masukkan Password lama"
                />
              </div>

              <div className="mb-4 flex flex-row justify-between">
                <label className="font-medium text-primary text-1xl flex items-center w-44">
                  Password Baru
                </label>
                <input
                  type="password"
                  name="npm"
                  className="mt-1 p-2 w-4/5 border rounded-md pl-3 text-primary bg-background"
                  placeholder="Masukkan Password Baru"
                />
              </div>
              <div className="mb-4 flex flex-row justify-between">
                <label className="font-medium text-primary text-1xl flex items-center w-44">
                  Konfrimasi Password
                </label>
                <input
                  type="password"
                  name="npm"
                  className="mt-1 p-2 w-4/5 border rounded-md pl-3 text-primary bg-background"
                  placeholder="Masukan Konfirmasi Password"
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-primary text-white rounded-lg px-3 py-2 hover:bg-[#071B4E] text-md ml-2">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GantiPassword;
