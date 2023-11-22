import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";

const Help = () => {
  return (
<div  className='absolute left-72 top-20'>
       <p class="text-2xl mb-4 ml-4 text-[#253763]">Help</p>
       
       <div className="card w-11/12  bg-white shadow-xl">
       <div className="card-body text-[#253763]">
       <h2 className="card-title absolute ml-6 pb-2 font-extrabold">FAQ</h2> <br />
       <p className='py-6'>

       <li>Bagaimana cara mengganti password akun?</li>
       <p className='pl-6 pb-6'>: Kamu bisa klik tombol "Setting" atau pengaturan di bagian kiri bawah, setelah itu klik change pass dan kamu bisa mengganti password di sana. </p>

       <li>Bagaimana cara menampilkan Qr Code untuk presensi mahasiswa?</li>
       <p className='pl-6 pb-6'>: Kamu bisa klik tombol "Presensi" di bagian sebelah kiri, klik "Mulai Presensi" sesuai dengan mata kuliah, dan yang terakhir klik "generate QR Code."</p>

       <li>Apa yang harus saya lakukan jika saya lupa kata sandi?</li>
       <p className='pl-6 pb-6' id='p1'>: Kamu bisa hubungi bagian administrasi di Ruangan Admin Universitas Siliwangi untuk mendapatkan kata sandi, perlu diingat bahwa kamu harus membawa KTP.</p>

       <li>Bagaimana cara  menambah mata kuliah baru?</li>
       <p className='pl-6 -mb-5'>: Kamu bisa klik tombol "Mata Kuliah" di bagian kiri dan klik "Tambah Mata Kuliah" di sebelah kanan.</p>

       </p>
       </div>
       </div>

       <div className="card w-11/12  bg-white shadow-xl my-20">
       <div className="card-body text-[#253763]">
       <h2 className="card-title absolute ml-6 pb-2 font-extrabold">Kontak Kami</h2> <br />
       <p className='py-6'>

      <div className='pl-16 '>
      
       <p className='my-2'> <MdOutlineEmail className='absolute left-8 my-0.5 ml-6'> </MdOutlineEmail> bigbanganddinosaur@gmail.com</p>
       <p className='my-2'> <LuPhone className='absolute left-8 my-0.5 ml-6'> </LuPhone> 021 - 12345678</p>
       <p className='my-2'> <MdOutlineLocationOn className='absolute left-8 my-0.5 ml-6'> </MdOutlineLocationOn>  Jl. Siliwangi No. 24 Kota Tasikmalaya 46115 Jawa Barat</p>
      </div>

       </p>
       </div>
       </div>
</div>
  )
}

export default Help