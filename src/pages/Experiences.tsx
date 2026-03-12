// src/pages/Experiences.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = {
  name: string;
  level: number; // 1-5
  isNew?: boolean;
};

type SkillSection = {
  category: string;
  icon: string;
  items: Skill[];
};

const skills: SkillSection[] = [
  {
    category: "Frontend",
    icon: "🖥️",
    items: [
      { name: "React", level: 4 },
      { name: "HTML / CSS", level: 5 },
      { name: "Tailwind CSS", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "TypeScript", level: 2 },
      { name: "Angular", level: 1, isNew: true },
      { name: "Figma", level: 2, isNew: true },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Java", level: 4 },
      { name: "Spring Boot", level: 4 },
      { name: "Spring Security", level: 3 },
      { name: "Node.js", level: 3 },
      { name: "API REST", level: 4 },
      { name: "Maven", level: 3 },
    ],
  },
  {
    category: "Data & BDD",
    icon: "🗄️",
    items: [
      { name: "SQL / MySQL", level: 5 },
      { name: "MongoDB", level: 3 },
      { name: "Data Warehouse", level: 2 },
      { name: "Python", level: 3 },
    ],
  },
  {
    category: "CI / DevOps",
    icon: "🔧",
    items: [
      { name: "Git / GitHub", level: 4 },
      { name: "Docker (notions)", level: 2 },
      { name: "Jenkins (notions)", level: 1 },
      { name: "FreeMarker / PDF", level: 2 },
    ],
  },
  {
    category: "Réseau & Sécurité",
    icon: "🌐",
    items: [
      { name: "Modèle OSI / TCP-IP", level: 3, isNew: true },
      { name: "DNS / DHCP / NAT-PAT", level: 1, isNew: true },
      { name: "VLAN / LAN / WAN", level: 3, isNew: true },
      { name: "Firewall / IDS / IPS", level: 2, isNew: true },
      { name: "SSL / TLS / HTTPS", level: 3, isNew: true },
      { name: "Proxy / Reverse Proxy", level: 2, isNew: true },
      { name: "Clustering / NTP", level: 1, isNew: true },
    ],
  },
  {
    category: "Méthodes & Outils",
    icon: "🧠",
    items: [
      { name: "Méthode Agile / Scrum", level: 2 },
      { name: "Tests unitaires JUnit", level: 1 },
      { name: "Postman", level: 2 },
      { name: "IntelliJ / VS Code", level: 4 },
    ],
  },
];

// Réseau concepts détaillés pour la section dédiée
const networkConcepts = [
  { label: "PAN / LAN / MAN / WAN", desc: "Topologies et portées des réseaux" },
  { label: "Adresses IP & VLAN", desc: "Adressage IPv4/IPv6 et segmentation logique" },
  { label: "Modèle OSI", desc: "7 couches du modèle de référence réseau" },
  { label: "TCP/IP", desc: "Suite de protocoles et encapsulation" },
  { label: "DNS", desc: "Résolution de noms de domaine" },
  { label: "DHCP", desc: "Attribution dynamique d'adresses IP" },
  { label: "NAT / PAT", desc: "Translation d'adresses réseau et de ports" },
  { label: "Firewall", desc: "Filtrage de trafic et règles de sécurité" },
  { label: "IDS / IPS", desc: "Détection et prévention d'intrusions" },
  { label: "Proxy & Reverse Proxy", desc: "Intermédiation et répartition de charge" },
  { label: "Clustering", desc: "Haute disponibilité et tolérance aux pannes" },
  { label: "NTP", desc: "Synchronisation du temps réseau" },
  { label: "SSL / TLS / HTTPS", desc: "Chiffrement des communications web" },
  { label: "Architecture de sécurité", desc: "DMZ, zones de confiance, segmentation" },
];

// ── BAR SKILL ───────────────────────────────────────────────────────────────
function SkillBar({ name, level, isNew, delay }: Skill & { delay: number }) {
  const pct = (level / 5) * 100;
  const label = ["", "Découverte", "Notions", "Pratique", "Maîtrise", "Expert"][level];

  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-200">{name}</span>
          {isNew && (
            <span className="text-[9px] uppercase tracking-widest bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 px-1.5 py-0.5 rounded-full">
              new
            </span>
          )}
        </div>
        <span className="text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: isNew
              ? "linear-gradient(90deg, #d4af37, #e3c770)"
              : "linear-gradient(90deg, #d4af37aa, #d4af37)",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.li>
  );
}

// ── CATEGORY CARD ────────────────────────────────────────────────────────────
function CategoryCard({ section, index }: { section: SkillSection; index: number }) {
  const hasNew = section.items.some((i) => i.isNew);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ borderColor: "rgba(212,175,55,0.45)" }}
      className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl p-6 transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{section.icon}</span>
          <h3 className="text-base font-semibold text-[#e3c770]">
            {section.category}
          </h3>
        </div>
        {hasNew && (
          <span className="text-[9px] uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 px-2 py-0.5 rounded-full">
            mis à jour
          </span>
        )}
      </div>
      <ul className="space-y-4">
        {section.items.map((item, i) => (
          <SkillBar key={item.name} {...item} delay={index * 0.06 + i * 0.05} />
        ))}
      </ul>
    </motion.div>
  );
}

// ── PAGE ────────────────────────────────────────────────────────────────────
const Experience = () => {
  const [showNetwork, setShowNetwork] = useState(false);

  return (
    <section id="experience" className="bg-[#0e0e0e] text-white py-20 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="text-[#d4af37] uppercase tracking-widest text-sm mb-2">
            Compétences techniques
          </h5>
          <h2 className="text-4xl font-bold mb-3">Mes Compétences</h2>
          <p className="text-gray-500 text-sm">
            Mis à jour · Mars 2026 — ajout réseau, Angular & Figma
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {skills.map((section, i) => (
            <CategoryCard key={section.category} section={section} index={i} />
          ))}
        </div>

        {/* Network deep-dive accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a1a] border border-[#d4af37]/25 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setShowNetwork((v) => !v)}
            className="w-full flex items-center justify-between px-6 py-5 hover:bg-white/[0.02] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">🌐</span>
              <div className="text-left">
                <p className="text-sm font-semibold text-[#e3c770]">
                  Concepts Réseau approfondis
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  14 concepts étudiés · Formation Fév. 2026
                </p>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 px-2 py-0.5 rounded-full ml-2">
                new
              </span>
            </div>
            <motion.span
              animate={{ rotate: showNetwork ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-[#d4af37] text-lg"
            >
              ▾
            </motion.span>
          </button>

          <AnimatePresence>
            {showNetwork && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-[#d4af37]/10 pt-5">
                  <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                    Apprentissage des fondamentaux réseau et sécurité en février 2026 — de l'architecture physique aux protocoles de chiffrement.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {networkConcepts.map(({ label, desc }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                        className="flex items-start gap-3 bg-white/[0.02] border border-white/5 rounded-lg px-4 py-3 hover:border-[#d4af37]/30 transition-colors"
                      >
                        <span className="text-[#d4af37] text-xs mt-0.5 shrink-0">▸</span>
                        <div>
                          <p className="text-sm font-medium text-gray-200">{label}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;