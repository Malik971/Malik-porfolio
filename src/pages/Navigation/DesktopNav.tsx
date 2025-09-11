import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../utils/Nav_Link";
import Header from "./Header";

function DesktopNav() {
  const navigate = useNavigate();
  return (
    <nav className="desktop-nav z-10 bg-[#0e0e0e] w-64 fixed flex flex-col justify-between text-center top-0 left-0 bottom-0 shadow-xl text-white font-medium">

      {/* En-tête */}
      <motion.div
        className="p-6 border-b border-[#d4af37]/30"
        whileHover={{ boxShadow: "0 0 8px #d4af37" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <Header />
      </motion.div>

      {/* Liens de navigation */}
      <ul className="flex-1">
        {NAV_LINKS.map(({ to, label }, index) => (
          <motion.li
            key={`navlink-${index}`}
            className={`border-t border-[#d4af37]/20 ${
              index === NAV_LINKS.length - 1 ? "border-b" : ""
            }`}
            whileHover={{ backgroundColor: "#1a1a1a" }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={to}
              className="block px-6 py-4 text-[#d4af37] hover:text-white transition duration-300 ease-in-out"
            >
              {label}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Bouton contacter */}
      <motion.div
        className="p-6"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => navigate("/private/Contact")}
          className="w-full bg-gradient-to-r from-[#d4af37] to-[#e3c770] text-black font-semibold py-3 rounded-full shadow hover:from-[#e3c770] hover:to-[#d4af37] transition duration-300"
        >
          Me contacter
        </button>
      </motion.div>
    </nav>
  );
}

export default DesktopNav;
