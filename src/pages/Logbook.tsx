// src/pages/Logbook.tsx
import { motion, easeOut } from "framer-motion";

type TimelineEntry = {
  date: string;
  title: string;
  org: string;
  type: "xp" | "edu";
  location: string;
  bullets?: string[];
};

const entries: TimelineEntry[] = [
  {
    date: "Sept. 2025 → Jan. 2026",
    title: "Concepteur Développeur d'Applications",
    org: "Formation Dawan",
    type: "edu",
    location: "Montpellier",
    bullets: [
      "Titre professionnel niveau 6 (équivalent Bac+3/4)",
      "Projet de réservation d'hôtels full-stack en méthode Agile",
      "Montée en compétences Java · Spring Boot · Spring MVC",
    ],
  },
  {
    date: "Sept. 2025 → Jan. 2026",
    title: "Projet applicatif Full-Stack",
    org: "Jehanne D.",
    type: "xp",
    location: "Montpellier",
    bullets: [
      "Conception d'une application web de recherche d'hôtels",
      "Authentification & rôles administrateur via Spring Security",
      "CRUD back-end Java · tests unitaires JUnit · Git en binôme",
    ],
  },
  {
    date: "Juillet – Août 2025",
    title: "Animateur & Développeur interne",
    org: "Camping Sandaya",
    type: "xp",
    location: "France",
    bullets: [
      "Développement rapide d'un site de planning interne",
      "Stack : React · Firestore · TypeScript · React DnD",
      "Expérience mêlant animation et développement terrain",
    ],
  },
  {
    date: "Sept. 2023 → Déc. 2023",
    title: "Développeur Full-Stack & IA",
    org: "Oc-Santé",
    type: "xp",
    location: "Montpellier",
    bullets: [
      "Requêtes SQL complexes pour diffusion de données médicales",
      "Système d'automatisation des processus d'extraction",
      "Contribution à une stratégie Data Warehouse → Data Lake",
    ],
  },
  {
    date: "Avr. 2023 → Juin 2023",
    title: "Concepteur de systèmes d'information",
    org: "Work In Music",
    type: "xp",
    location: "Cap Omega, Montpellier",
    bullets: [
      "Création d'un système d'automatisation",
      "Dépannage réseau & création de site web avec formulaire",
    ],
  },
  {
    date: "2022 → 2023",
    title: "Administrateur des Systèmes d'Information",
    org: "Keyce Academy",
    type: "edu",
    location: "Montpellier",
  },
  {
    date: "2020 → 2022",
    title: "BTS SIO — Option SLAM",
    org: "Lycée Baimbridge",
    type: "edu",
    location: "Guadeloupe 971",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: easeOut } },
};

function Logbook() {
  return (
    <section id="timeline" className="bg-[#0e0e0e] text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="text-[#d4af37] uppercase tracking-widest text-sm mb-2">
            Mon parcours
          </h5>
          <h2 className="text-4xl font-bold">Timeline</h2>
        </motion.div>

        {/* Legend */}
        <div className="flex gap-6 mb-10 justify-center">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="w-3 h-3 rounded-full bg-[#d4af37] inline-block" />
            Expérience professionnelle
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="w-3 h-3 rounded-full bg-[#47b8ff] inline-block" />
            Formation / Diplôme
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-[22px] top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #d4af37, #47b8ff 60%, transparent)",
            }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {entries.map((entry, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative pl-14"
              >
                {/* Dot */}
                <div
                  className={`absolute left-[16px] top-[6px] w-[13px] h-[13px] rounded-full border-2 border-[#0e0e0e] ${
                    entry.type === "xp"
                      ? "bg-[#d4af37]"
                      : "bg-[#47b8ff]"
                  }`}
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    borderColor: "rgba(212,175,55,0.5)",
                    boxShadow: "0 0 16px rgba(212,175,55,0.08)",
                  }}
                  className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl p-5 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span
                      className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                        entry.type === "xp"
                          ? "text-[#d4af37] bg-[#d4af37]/10 border-[#d4af37]/20"
                          : "text-[#47b8ff] bg-[#47b8ff]/10 border-[#47b8ff]/20"
                      }`}
                    >
                      {entry.type === "xp" ? "Expérience" : "Formation"}
                    </span>
                    <span className="text-xs text-gray-500">{entry.date}</span>
                  </div>

                  <h3 className="text-base font-semibold text-white mt-1">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {entry.org} · {entry.location}
                  </p>

                  {entry.bullets && (
                    <ul className="space-y-1">
                      {entry.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-sm text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-[#d4af37] mt-0.5 shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Logbook;
