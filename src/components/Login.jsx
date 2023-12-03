import React from "react";
import Bg from "./../assets/bg.png";
import LogoIMG from "./../assets/Logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section
      className="bg-merah h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="w-[410px] h-[460px] bg-opacity-40 bg-white  flex items-center rounded-md justify-center ">
        <div className="bg-grey w-[380px] h-[430px]">
          <div className="header bg-primary  w-full h-[200px]">
            <img
              src={LogoIMG}
              alt=""
              className="mx-auto pt-[40px]"
              width={90}
            />
            <span className="text-white font-bold text-xl flex justify-center mt-7 ">
              LOGIN TO YOUR ACCOUNT
            </span>
          </div>
          <div className="body flex flex-col justify-center items-center">
            <div className="input flex flex-col items-center">
              <input
                type="text"
                placeholder="Username"
                className="border-2 border-grey w-[300px] h-[40px] rounded-md px-2 py-1 mt-5"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-2 border-grey w-[300px] h-[40px] rounded-md px-2 py-1 mt-5"
              />
            </div>
            <div className="button flex justify-center items-center">
              <Link
                to="/dashboard"
                className="bg-primary text-white w-[300px] h-[40px] rounded-md px-2 py-1 mt-5 text-center"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
