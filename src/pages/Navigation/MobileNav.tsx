import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../utils/Nav_Link";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mobile-nav fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center bg-[#0e0e0e] text-white px-6 py-4 shadow-md">
        <span className="font-bold">Malik Ibo</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          ☰
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#0e0e0e] text-white"
          >
            <ul className="flex flex-col items-center">
              {NAV_LINKS.map(({ to, label }, i) => (
                <li
                  key={`mobile-link-${i}`}
                  className="border-b border-[#d4af37]/30 w-full"
                >
                  <Link
                    to={to}
                    className="block px-6 py-4 w-full text-center hover:text-[#d4af37]"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="w-full">
                <a
                  href="https://calendly.com/malik97un/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-gradient-to-r from-[#d4af37] to-[#e3c770] text-black font-semibold py-3 text-center"
                >
                  Prendre rendez-vous
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
