import React from "react";
import profile from "../../assets/profile.png";
import Layout from "../Layout";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <>
      <Layout>
        <div className="flex flex-col h-screen w-full bg-background">
          <div className=" flex flex-row justify-between mb-[26px]">
            <h1 className="text-3xl font-semibold text-primary">Profile</h1>
            <h2 className="self-center">
              <span className="text-primary text-xl font-semibold">
                Settings /{" "}
              </span>
              <span className="text-sky-600 text-xl font-semibold ">
                Profile
              </span>
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
              <div className="bg-white w-[650px] h-[300px] rounded-lg p-4">
                <div className="h-12">
                  <span className="text-[#1E73BE] text-[13px] border border-b-[#1E73BE] p-2">
                    Profile Detail
                  </span>
                  <Link
                    to={"edit-profile"}
                    className="text-primary text-[13px] p-2 ml-3"
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to={"ganti-password"}
                    className="text-primary text-[13px] p-2 ml-3"
                  >
                    Ganti Password
                  </Link>
                </div>
                <div className="flex">
                  <div className=" flex flex-col w-[152px] h-[200px] justify-around">
                    <span className="text-primary font-medium text-xl">
                      <a href="tes">Nama Lengkap</a>
                    </span>
                    <span className="text-primary font-medium text-xl">
                      <a href="tes">NIP</a>
                    </span>
                    <span className="text-primary font-medium text-xl">
                      <a href="tes">Mata Kuliah</a>
                    </span>
                    <span className="text-primary font-medium text-xl">
                      <a href="tes">Alamat</a>
                    </span>
                    <span className="text-primary font-medium text-xl">
                      <a href="tes">Tahun Masuk</a>
                    </span>
                  </div>
                  <div className="flex flex-col w-[401px] h-[200px] justify-around ml-9">
                    <span className="text-primary font-light text-xl">
                      <a href="tes">Alam Rahmatulloh</a>
                    </span>
                    <span className="text-primary font-light text-xl">
                      <a href="tes">0110212110</a>
                    </span>
                    <span className="text-primary font-light text-xl">
                      <a href="tes">Backend Programming</a>
                    </span>
                    <span className="text-primary font-light text-xl">
                      <a href="tes">Jl. Yang ku lalui bersamamu, Kota Bogor</a>
                    </span>
                    <span className="text-primary font-light text-xl">
                      <a href="tes">2021</a>
                    </span>
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

export default Profile;
