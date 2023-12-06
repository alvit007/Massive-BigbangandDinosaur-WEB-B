import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import Bg from "./../assets/bg.png";
import LogoIMG from "./../assets/Logo.png";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/v1/loginadmin", {
        email: email,
        password: password,
      });

      if (response.data.success) {
        // Menyimpan token di local storage
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        navigate("/dashboard");
      } else {
        setMsg("Username and password are not valid");
      }
    } catch (error) {
      if (error.response?.data?.error) {
        setMsg("Username and password are not valid");
      }
    }
  };

  return (
    <section
      className="bg-merah h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <form onSubmit={auth}>
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
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-grey w-[300px] h-[40px] rounded-md px-2 py-1 mt-5"
                />
                {msg && <p className="text-red-500 mr-[28px] text-sm">{msg}</p>}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-grey w-[300px] h-[40px] rounded-md px-2 py-1 mt-3"
                />
                {msg && <p className="text-red-500 mr-[28px] text-sm">{msg}</p>}
              </div>
              <div className="button flex justify-center items-center">
                <button className="bg-primary text-white w-[300px] h-[40px] rounded-md px-2 py-1 mt-4 text-center">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Login;
