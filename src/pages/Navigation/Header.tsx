import photoMalik from "../../assets/img_Malik.jpg";
import { motion } from "framer-motion";

function Header() {
  return (
    <header>
      <motion.div
        className="rounded-lg shadow-xl"
        whileHover={{ boxShadow: "0 0 8px #d4af37" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <div className="ademir">
          <img src={photoMalik} className="rounded-lg shadow-xl" alt="img" />
        </div>
      </motion.div>
      <h1 className="text-xl font-extrabold">Bienvenue dans mon portfolio</h1>
    </header>
  );
}

export default Header;
