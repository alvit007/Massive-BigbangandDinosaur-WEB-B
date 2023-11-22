import React from 'react';
import Bg from "./../assets/bg.png";
import LogoIMG from "./../assets/Logo.png";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <body className="font-poppins">
      <section id="login-page" className="login-page">
        <div className="container relative">
          <div className="w-[500px] h-[550px] bg-[#eee] opacity-30 absolute z-10 ml-[500px] mt-[100px] shadow-xl rounded-xl"></div>
          <div>
            <div className="bg-[#253763] w-[450px] h-[250px] absolute z-20 ml-[525px] mt-[125px] rounded-t-xl">
              <span className="text-white block text-2xl font-semibold text-center mt-[180px]">LOGIN TO YOUR ACCOUNT</span>
            </div>
            <div className="bg-[#E0E0E0] w-[450px] h-[250px] absolute z-20 ml-[525px] mt-[375px] rounded-b-xl">
              <form className="mt-10">
                <input
                  type="email"
                  placeholder="Username"
                  className="px-3 py-2 border shadow rounded w-[350px] block mx-auto focus:outline-none focus:ring-1 focus:ring-[#253763]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-5 px-3 py-2 border shadow rounded w-[350px] block mx-auto focus:outline-none focus:ring-1 focus:ring-[#253763]"
                />
                <input type="checkbox" className="block ml-[50px] mt-2" />
                <div className="ml-[68px] mr-[50px] -mt-[14px] flex justify-between">
                  <span className="text-[#9e9e9e] text-[10px]">Remember Username</span>
                  <span className="text-[#253763] text-[10px]">Forgot Password?</span>
                </div>

                <Link to="/dashboard" className="w-[350px] mt-5 px-2 py-3 text-white font-semibold text-1xl border shadow rounded block mx-auto bg-[#253763] text-center">LOGIN</Link>

              </form>
            </div>
          </div>
          <div className="absolute z-20 ml-[676px] block mt-[150px]">
            <img src={LogoIMG} alt="Logo" width="163px" height="136px" />
          </div>
          <div className="bg-cover w-[100vw] h-screen relative">
            <img src={Bg} alt="Background" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </body>
  );
}

export default Login;
