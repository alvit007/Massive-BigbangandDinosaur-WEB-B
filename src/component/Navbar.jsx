import React, { useState } from "react";
import { useNavigate , Link, useLocation  } from "react-router-dom";
import {
  Gauge,
  Book,
  User,
  GraduationCap,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";
import RightArrowIcon from "./../assets/icons/rightArrow.svg";
import LogoIMG from "./../assets/Logo.png";


const withouSidebarRoutes = ["/index","/login"];

const navLinks = [
  { name: "Dashboard", icon: Gauge, route: "/dashboard" },
  { name: "Mata Kuliah", icon: Book, route: "/matakuliah" },
  { name: "Mahasiswa", icon: User, route: "/mahasiswa" },
  { name: "Dosen", icon: GraduationCap, route: "/dosen" },
  { name: "Presensi", icon: MessageSquare, route: "/presensi" },
  { name: "Logout", icon: LogOut, route: "/logout" },
  { name: "Setting", icon: LogOut, route: "/setting" },
];

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function Navbar() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const navigate = useNavigate();

  const handleNavClick = (index, route) => {
    setActiveNavIndex(index);
    navigate(route);
  };

  const [isExpanded, setIsExpanded] = useState(true);

  const { pathname } = useLocation();
  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-2 h-screen flex flex-col bg-primary relative w-[358px]" +
        (isExpanded ? " px-0" : " px-0")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-tertiary flex justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" alt="right-arrow" />
      </div>

      <div className="flex items-center justify-center mt-8 text-white text-3xl font-semibold" >
        <img src={LogoIMG} alt="Logo" className="h-12 w-12 object-cover" />
        <span className={!isExpanded ? "hidden" : "block pl-3"}>Press</span>
      </div>

      <div className="flex flex-col mt-12 text-secondary">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center space-x-3 w-full py-7 cursor-pointer ${
              activeNavIndex === index ? 'bg-secondary text-primary' : ''
            }`}
            onClick={() => handleNavClick(index, item.route)}
          >
            <item.icon />
            <span className={isExpanded ? "block" : "hidden"}>
              {item?.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
      );
}

export default Navbar;