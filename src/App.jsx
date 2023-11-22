import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import Matakuliah from "./component/Matakuliah";
import Mahasiswa from "./component/Mahasiswa";
import Dosen from "./component/Dosen";
import Presensi from "./component/Presensi";
import Index from "./component/index";
import Login from "./component/Login";
import MahasiswaTambah from "./component/MahasiswaTambah";
import MatakuliahTambah from "./component/MatakuliahTambah";
import MatakuliahDetail from "./component/MatakuliahDetail";
import Button_settings from "./component/Button_settings";

function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  return (
    <Router>
      <div className="flex">
        {/* Side Navigation Bar */}
        {isNavbarVisible && <Navbar />}
        {/* Main component on basis of selected navigation from nav bar */}
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/index"
            element={<Index showNavbar={false} onNavigate={() => setNavbarVisible(true)} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard onNavigate={() => setNavbarVisible(false)} />}
          />
          <Route path="/matakuliah" element={<Matakuliah />} />
          <Route path="/matakuliah/tambah" element={<MatakuliahTambah />} />
          <Route path="/matakuliah/detail" element={<MatakuliahDetail/>} />
          <Route path="/mahasiswa" element={<Mahasiswa />} />
          <Route path="/mahasiswa/tambah" element={<MahasiswaTambah />} />
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/presensi" element={<Presensi />} />
          <Route path="/setting" element={<Button_settings />} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
