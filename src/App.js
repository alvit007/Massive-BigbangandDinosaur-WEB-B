import React from 'react';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from "./pages/Dashboard.jsx"
import Matakuliah from "./pages/Matakuliah/Matakuliah.jsx"
import Mahasiswa from "./pages/Mahasiswa/Mahasiswa.jsx"
import Dosen from './pages/Dosen/Dosen.jsx';
import Presensi from './pages/Presensi/Presensi.jsx';
import MatakuliahTambah from './pages/Matakuliah/MatakuliahTambah.jsx';
import MatakuliahDetail from './pages/Matakuliah/Matakuliahdetail.jsx';
import MulaiPresensi from './pages/Presensi/MulaiPresensi.jsx';
import RekapPresensi from './pages/Presensi/RekapPresensi.jsx';
import QRcode from './pages/Presensi/Qrcode.jsx';
import Login from './components/Login.jsx';
import Setting from './pages/Setting/Setting.jsx';
import MahasiswaTambah from './pages/Mahasiswa/MahasiswaTambah.jsx';
import DosenTambah from './pages/Dosen/DosenTambah.jsx';
import PresensiManual from './pages/Presensi/PresensiManual.jsx';
import Profile from './pages/Pofile/Profile.jsx';
import EditProfile from './pages/Pofile/EditProfile.jsx';
import GantiPassword from './pages/Pofile/GantiPassword.jsx';
import Help from './pages/Help/Help.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/profile/edit-profile' element={<EditProfile />}></Route>
          <Route path='/profile/ganti-password' element={<GantiPassword/>}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/matakuliah" element={<Matakuliah />} />
          <Route path="/matakuliah/tambah" element={<MatakuliahTambah />} />
          <Route path="/matakuliah/detail" element={<MatakuliahDetail/>} />
          <Route path="/mahasiswa" element={<Mahasiswa />} />
          <Route path='/mahasiswa/tambah-mahasiswa' element={<MahasiswaTambah/>}></Route>
          <Route path="/dosen" element={<Dosen />} />
          <Route path='/dosen/tambah-dosen' element={<DosenTambah />}></Route>
          <Route path='/presensi' element={<Presensi />} />
          <Route path='/presensi/mulai-presensi' element={<MulaiPresensi/>}></Route>
          <Route path='/presensi/rekap-presensi' element={<RekapPresensi/>}></Route>
          <Route path='/presensi/mulai-presensi/presensi-manual' element={<PresensiManual/>}></Route>
          <Route path='/presensi/mulai-presensi/generate-qrcode' element={<QRcode/>}></Route>
          <Route path='/help' element={<Help />}></Route>
        </Routes>
    </Router>
    </>
  );
}


export default App;
