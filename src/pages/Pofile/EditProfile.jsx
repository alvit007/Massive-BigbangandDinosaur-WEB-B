import React from "react";
import profile from "../../assets/profile.png";
import { Upload } from "lucide-react";
import { Trash2 } from "lucide-react";
import Layout from "../Layout";
import { Link } from "react-router-dom";

function EditProfile() {
  return (
    <Layout>
      <div className="flex flex-col h-screen w-full bg-background">
        <div className=" flex flex-row justify-between mb-[26px]">
          <h1 className="text-3xl font-semibold text-primary">Profile</h1>
          <h2 className="self-center">
            <span className="text-primary text-xl font-semibold">
              Settings /{" "}
            </span>
            <span className="text-sky-600 text-xl font-semibold ">Profile</span>
          </h2>
        </div>

        <div>
          <div className="container  w-[976px] h-[500px] rounded-lg overflow-hidden flex justify-between">
            <div className="bg-white w-[280px] h-[250px] grid grid-cols-1 justify-items-center rounded-lg">
              <img
                className="bg-cover w-[165px] h-[165px] "
                src={profile}
                alt="Profile"
              />
              <span className="font-medium text-2xl text-primary">
                Alam Rahmatulloh
              </span>
              <span className="font-semibold text-xl text-[#1E73BE] ">
                S1 Teknik Informatika
              </span>
            </div>
            <div className="bg-white w-[650px] h-[500px] rounded-lg p-4">
              <div className="h-12">
                <Link to={"/profile"} className="text-primary text-[13px] p-2">
                  Profile Detail
                </Link>
                <span className="text-[#1E73BE] text-[13px] border border-b-[#1E73BE] p-2 ml-3">
                  Edit Profile
                </span>
              </div>
              <div className="flex h-32 items-center mb-2">
                <span className="text-primary text-xl font-medium w-[100px] ">
                  Gambar Profile
                </span>
                <img
                  className="bg-cover w-[126px] h-[123px] ml-[30px]"
                  src={profile}
                  alt="Profile"
                />
              </div>
              <div className="flex mb-5 w-[60px] justify-between ml-[140px]">
                <span className="bg-primary text-white rounded hover:bg-[#071B4E]">
                  <a href="s">
                    <Upload />
                  </a>
                </span>
                <span className="bg-red-700 text-white rounded hover:bg-red-800">
                  <a href="s">
                    <Trash2 />
                  </a>
                </span>
              </div>
              <div className="flex justify-between mb-5">
                <span className="text-primary text-xl font-medium self-center">
                  NIP
                </span>
                <input
                  type="text"
                  placeholder="NIP"
                  className="px-3 py-2 border shadow rounded w-[480px] focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                />
              </div>
              <div className="flex justify-between mb-5">
                <span className="text-primary text-xl font-medium self-center">
                  Mata Kuliah
                </span>
                <input
                  type="text"
                  placeholder="Mata Kuliah"
                  className="px-3 py-2 border shadow rounded w-[480px] focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                />
              </div>
              <div className="flex justify-between mb-5">
                <span className="text-primary text-xl font-medium self-center">
                  Alamat
                </span>
                <input
                  type="text"
                  placeholder="Alamat"
                  className="px-3 py-2 border shadow rounded w-[480px] focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                />
              </div>
              <div className="flex justify-end mb-5">
                <button className="bg-primary text-white rounded-lg px-3 py-2 hover:bg-[#071B4E] text-md ml-2">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditProfile;
