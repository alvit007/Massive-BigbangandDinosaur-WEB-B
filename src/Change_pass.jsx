import React from 'react'
import Button_settings from "./component/Button_settings";


const Change_pass = () => {
  return (
    <div>
    <Button_settings />
    
    <div id='line' className="border-2 h-2/4 absolute top-20 left-1/2 border-slate-500"></div>
    <div  className="line absolute right-56 mt-24 text-black">

    <div className='absolute -right-12'>
    <p class="text-2xl mb-4 text-[#253763]">Ganti Kata Sandi Anda</p>

    <div className="form-control w-full max-w-xs">    
    <label className="label">
        <span className="label-text-alt text-black text-xs my-1 font-normal">Kata Sandi Lama</span>
      </label>
    <input type="password" placeholder="Masukkan Kata Sandi Lama" className="input -mt-2 input-bordered w-96 max-w-xs bg-white" />
    
    <label className="label">
        <span className="label-text-alt text-black text-xs my-1 font-normal">Kata Sandi Baru</span>
      </label>
    <input type="password" placeholder="Masukkan Kata Sandi Baru" className="input -mt-2 input-bordered w-96 max-w-xs bg-white" />
  
    <label className="label">
        <span className="label-text-alt text-black text-xs my-1 font-medium">Konfirmasi Sandi Baru</span>
      </label>
        <input type="password" placeholder="Konfirmasi Kata Sandi Baru" className="input -mt-2 input-bordered w-96 max-w-xs bg-white" />
    <label className="label">
        <a className="label-text-alt text-blue-700 text-xs font-bold text-right ml-56" href="/help#p1" >Lupa Kata Sandi?</a>
      </label>
    </div>
    
    <button className="btn w-80 my-5 bg-[#253763] text-white">Simpan</button>
    </div>
    


    </div>
    </div>
  )
}

export default Change_pass