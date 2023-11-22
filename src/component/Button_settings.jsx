import React from 'react'
import { Button } from 'flowbite-react';
import { FaHeadset } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const Button_settings = () => {
  return (
       <div  className="absolute left-72 mt-24 text-black ">
       <p class="text-2xl mb-7 text-[#253763]">Settings</p>
      
       <Button className='w-56' color="gray" href='/'>
         <FaRegUserCircle className="mr-3 -ml-24 h-4 w-4"></FaRegUserCircle>
         Edit Profile
         <FaAngleRight className="-mr-36 ml-29 absolute left-20"></FaAngleRight>
       </Button>
       
       <Button  className='w-56 my-3'  color="gray" href='/change_pass'>
         <MdOutlinePassword className="mr-3 -ml-24  h-4 w-4"></MdOutlinePassword>
         Change Pass
         <FaAngleRight className="-mr-36 ml-15"></FaAngleRight>
       </Button>
       <Button  className='w-56 my-3'  color="gray" href='/help'>
         <FaHeadset className="mr-3 -ml-24  h-4 w-4"></FaHeadset>
         Help
         <FaAngleRight className="-mr-36 ml-30"></FaAngleRight>
       </Button>
       <Button  className='w-56 my-3'  color="gray" href='/about_us'>
         <MdOutlinePeopleAlt className="mr-3 -ml-24  h-4 w-4"></MdOutlinePeopleAlt>
         About Us
         <FaAngleRight className="-mr-36 ml-22"></FaAngleRight>
       </Button>
     </div>
  )
}

export default Button_settings;