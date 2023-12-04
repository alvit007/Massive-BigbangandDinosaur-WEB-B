import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  Gauge,
  Book,
  User,
  GraduationCap,
  MessageSquare,
  LogOut,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import LogoIMG from "./../assets/Logo.png";

const withouSidebarRoutes = ["/index", "/login"];

const navLinks = [
  { name: "Dashboard", icon: Gauge, route: "/dashboard" },
  { name: "Mata Kuliah", icon: Book, route: "/matakuliah" },
  { name: "Mahasiswa", icon: User, route: "/mahasiswa" },
  { name: "Dosen", icon: GraduationCap, route: "/dosen" },
  { name: "Presensi", icon: MessageSquare, route: "/presensi" },
  { name: "Help", icon: Settings, route: "/setting" },
  { name: "Logout", icon: LogOut, route: "/logout" },
];

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (route) => {
    navigate(route);
    setIsExpanded(false);
  };

  if (withouSidebarRoutes.some((item) => location.pathname.includes(item)))
    return null;

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-2  flex flex-col bg-primary relative w-[358px]" +
        (isExpanded ? " px-0" : " px-0")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-11 top-3 flex items-center justify-center "
      >
        <Menu className="w-8 h-8 text-primary" />
      </div>

      <div className="flex items-center justify-center mt-8 text-white text-3xl font-semibold">
        <img src={LogoIMG} alt="Logo" className="h-12 w-12 object-cover" />
        <span className={!isExpanded ? "hidden" : "block pl-3"}>Press</span>
      </div>
      <div className="flex flex-col mt-12 text-secondary">
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.route}
            className={`flex justify-center space-x-3 w-full py-6 cursor-pointer ${
              location.pathname.includes(item.route)
                ? "bg-secondary text-primary"
                : ""
            }`}
            onClick={() => handleNavClick(item.route)}
          >
            <item.icon />
            <span className={isExpanded ? "block w-24" : "hidden"}>
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
}

export default Sidebar;
