import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "./../assets/bg.png";
import LogoIMG from "./../assets/Logo.png";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [userType, setUserType] = useState("admin"); // Default to admin
  const navigate = useNavigate();

  const auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/v1/login${userType}`, {
        [userType === "admin" ? "email" : "nip"]: email, 
        password: password,
      });
      
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userid", response.data.userid);
        localStorage.setItem("user", response.data.user);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("expires", response.data.expires);
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

                <div className="radio-group flex  mt-3">
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="admin"
                      checked={userType === "admin"}
                      onChange={() => setUserType("admin")}
                    />
                    Admin
                  </label>
                  <label className="radio-label ml-2">
                    <input
                      type="radio"
                      value="dosen"
                      checked={userType === "dosen"}
                      onChange={() => setUserType("dosen")}
                    />
                    Dosen
                  </label>
                </div>
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
