// src/components/About.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photoMalik from "../assets/photo_malik.jpg";
import cvMalik from "../assets/CV_CDA.pdf";

// ── DONNÉES ACTIVITÉS ──────────────────────────────────────────────────────
type Activity = {
  id: string;
  emoji: string;
  label: string;
  tag: string;
  color: string;        
  bg: string;           
  border: string;
  description: string;
  stats?: { label: string; value: string }[];
  link?: string;
  linkLabel?: string;
};

const activities: Activity[] = [
  {
    id: "duolingo",
    emoji: "🦉",
    label: "Duolingo",
    tag: "Anglais B2",
    color: "#58cc02",
    bg: "rgba(88,204,2,0.06)",
    border: "rgba(88,204,2,0.25)",
    description: "Pratique quotidienne de l'anglais depuis plus d'un an. Streak maintenu, vocabulaire technique et communication pro.",
    stats: [
      { label: "Streak", value: "365+ jours" },
      { label: "Niveau", value: "B2" },
    ],
    link: "https://www.duolingo.com",
    linkLabel: "duolingo.com",
  },
  {
    id: "franceioi",
    emoji: "🏆",
    label: "France IOI",
    tag: "Algo · Java · Python",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.25)",
    description: "Entraînement aux algorithmes et à la logique de programmation. Résolution de problèmes en Java et Python.",
    stats: [
      { label: "Langages", value: "Java · Python" },
      { label: "Focus", value: "Logique & algos" },
    ],
    link: "https://www.france-ioi.org/user/perso.php?sLogin=islandboy",
    linkLabel: "france-ioi.org",
  },
  {
    id: "udemy",
    emoji: "🎓",
    label: "Udemy",
    tag: "Formation en ligne",
    color: "#a435f0",
    bg: "rgba(164,53,240,0.06)",
    border: "rgba(164,53,240,0.25)",
    description: "Apprentissage continu via des cours en ligne : Spring Boot, React, DevOps, Docker et bien plus.",
    stats: [
      { label: "Domaines", value: "Java · React · DevOps" },
      { label: "Approche", value: "Projet par projet" },
    ],
    link: "https://www.udemy.com",
    linkLabel: "udemy.com",
  },
  {
    id: "dawan",
    emoji: "💻",
    label: "Formation Dawan",
    tag: "CDA · Titre Pro Bac+3",
    color: "#d4af37",
    bg: "rgba(212,175,55,0.06)",
    border: "rgba(212,175,55,0.25)",
    description: "Formation intensive Concepteur Développeur d'Applications. Java, Spring Boot, architecture logicielle, méthode Agile.",
    stats: [
      { label: "Durée", value: "2025 → 2026" },
      { label: "Niveau", value: "Titre Pro Bac+3/4" },
    ],
    link: "https://www.dawan.fr",
    linkLabel: "dawan.fr",
  },
  {
    id: "foot",
    emoji: "⚽",
    label: "Football",
    tag: "Gardien · 15+ ans en club",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.06)",
    border: "rgba(34,211,238,0.25)",
    description: "Gardien de but depuis plus de 15 ans en compétition. Le foot m'a appris la rigueur, la concentration et l'esprit d'équipe.",
    stats: [
      { label: "Poste", value: "Gardien de but" },
      { label: "Expérience", value: "15+ ans en club" },
    ],
  },
  {
    id: "basket",
    emoji: "🏀",
    label: "Basket-Ball",
    tag: "Sport collectif",
    color: "#f97316",
    bg: "rgba(249,115,22,0.06)",
    border: "rgba(249,115,22,0.25)",
    description: "Sport d'équipe pratiqué régulièrement. Endurance, stratégie et jeu collectif.",
    stats: [
      { label: "Style", value: "Jeu collectif" },
      { label: "Format", value: "Match & training" },
    ],
  },
  {
    id: "beachvolley",
    emoji: "🏐",
    label: "Beach Volley",
    tag: "Plein air",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.06)",
    border: "rgba(251,191,36,0.25)",
    description: "Beach-volley en plein air, esprit de jeu et détente. Une façon de combiner sport et convivialité.",
    stats: [
      { label: "Cadre", value: "Plein air" },
      { label: "Format", value: "2v2 / 3v3" },
    ],
  },
  {
    id: "echecs",
    emoji: "♟️",
    label: "Échecs",
    tag: "Stratégie · Logique",
    color: "#e2e8f0",
    bg: "rgba(226,232,240,0.04)",
    border: "rgba(226,232,240,0.18)",
    description: "Jeu d'échecs pour entraîner la logique, l'anticipation et la pensée stratégique. Une discipline qui me connecte à mon côté développeur.",
    stats: [
      { label: "Style", value: "Réfléchi & offensif" },
      { label: "Pratique", value: "Ligne & hors ligne" },
    ],
  },
  {
    id: "clashroyale",
    emoji: "👑",
    label: "Clash Royale",
    tag: "Jeu mobile · Stratégie",
    color: "#c084fc",
    bg: "rgba(192,132,252,0.06)",
    border: "rgba(192,132,252,0.25)",
    description: "Clash Royale pour la stratégie temps réel, la gestion de ressources et la compétition. Un jeu d'esprit sous pression.",
    stats: [
      { label: "Style", value: "Deck contrôle" },
      { label: "Ligue", value: "Arènes avancées" },
    ],
  },
];

// ── CARD ACTIVITÉ ──────────────────────────────────────────────────────────
function ActivityCard({ act, index }: { act: Activity; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative cursor-default rounded-2xl p-5 border transition-all duration-300 flex flex-col gap-3 overflow-hidden"
      style={{
        background: act.bg,
        borderColor: hovered ? act.color : act.border,
        boxShadow: hovered ? `0 0 24px ${act.color}22` : "none",
      }}
    >
      {/* Glow blob */}
      <div
        className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 transition-opacity duration-500"
        style={{
          background: act.color,
          opacity: hovered ? 0.12 : 0,
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between">
        <motion.span
          className="text-3xl"
          animate={{ scale: hovered ? 1.18 : 1, rotate: hovered ? 8 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {act.emoji}
        </motion.span>
        <span
          className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full border font-semibold"
          style={{ color: act.color, borderColor: `${act.color}44`, background: `${act.color}11` }}
        >
          {act.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-white">{act.label}</h3>

      {/* Description */}
      <p className="text-xs text-gray-400 leading-relaxed">{act.description}</p>

      {/* Stats */}
      {act.stats && (
        <div className="flex gap-3 mt-auto pt-2 border-t border-white/5">
          {act.stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-[10px] text-gray-600 uppercase tracking-wide">{s.label}</span>
              <span className="text-xs font-semibold" style={{ color: act.color }}>{s.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Link */}
      {act.link && (
        <a
          href={act.link}
          target="_blank"
          rel="noreferrer"
          className="text-[10px] opacity-50 hover:opacity-100 transition-opacity"
          style={{ color: act.color }}
        >
          ↗ {act.linkLabel}
        </a>
      )}
    </motion.div>
  );
}

// ── PAGE ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="bg-[#0e0e0e] text-[#f5f5f5] py-20 px-6 overflow-hidden">

      {/* ── HERO PRÉSENTATION ── */}
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="text-[#d4af37] uppercase tracking-widest text-sm mb-2">
            En savoir plus
          </h5>
          <h2 className="text-4xl font-bold text-white">À propos de moi</h2>
        </motion.div>

        {/* Photo + Bio */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">

          {/* Photo avec ring animé */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Ring pulsant */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{ boxShadow: ["0 0 0px #d4af3700", "0 0 28px #d4af3755", "0 0 0px #d4af3700"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="w-[200px] h-[270px] overflow-hidden rounded-3xl shadow-2xl border-2 border-[#d4af37]/50 relative">
              <img src={photoMalik} alt="Malik Ibo" className="object-cover w-full h-full" />
              {/* Badge overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-xs text-[#d4af37] font-semibold text-center leading-tight">
                  Concepteur Dév. d'Application
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="flex-1 space-y-4 text-gray-400 text-sm leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Chips identité */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["Java · Spring Boot", "React · TypeScript", "Guadeloupe 🌴", "Montpellier 🎓", "25 ans"].map((chip) => (
                <span key={chip} className="text-xs bg-[#1a1a1a] border border-[#d4af37]/25 text-[#e3c770] px-3 py-1 rounded-full">
                  {chip}
                </span>
              ))}
            </div>

            <p>
              Développeur full-stack passionné, je combine rigueur technique et curiosité permanente.
              Formé au titre <span className="text-[#e3c770] font-medium">Concepteur Développeur d'Applications</span>, j'ai déjà conçu des projets concrets : génération de PDF, automatisation, e-commerce, et des applications Java Spring Boot end-to-end.
            </p>
            <p>
              Ma force ? <span className="text-white font-medium">Apprendre vite et apprendre tous les jours.</span> Que ce soit sur Duolingo pour l'anglais, France IOI pour les algorithmes, ou Udemy pour approfondir mes stacks — je traite chaque compétence comme un niveau à passer.
            </p>
            <p>
              En dehors du code, je suis gardien de foot depuis 15 ans, joueur d'échecs, et accro à Clash Royale. Des activités qui entraînent la concentration, la stratégie et la résilience — exactement ce dont un bon développeur a besoin.
            </p>

            {/* CTA */}
            <div className="flex gap-3 pt-2">
              <motion.a
                href={cvMalik}
                download="CV_CDA.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-gradient-to-r from-[#d4af37] to-[#e3c770] text-black font-semibold py-3 px-7 rounded-full shadow hover:from-[#e3c770] hover:to-[#d4af37] transition duration-300 text-sm"
              >
                ↓ Télécharger CV
              </motion.a>
              {/* <motion.a
                href="/private/Axopen"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block border border-[#d4af37]/40 text-[#d4af37] font-medium py-3 px-7 rounded-full hover:border-[#d4af37] transition duration-300 text-sm"
              >
                Pourquoi Axopen →
              </motion.a> */}
            </div>
          </motion.div>
        </div>

        {/* ── SECTION ACTIVITÉS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
            <div className="text-center">
              <p className="text-[#d4af37] text-xs uppercase tracking-widest mb-1">Ce qui me définit</p>
              <h3 className="text-2xl font-bold text-white">Apprentissage & Passions</h3>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
          </div>

          {/* Subtitle row */}
          <div className="flex justify-center gap-8 mb-10 flex-wrap">
            {[
              { icon: "📚", label: "4 plateformes d'apprentissage" },
              { icon: "⚽", label: "3 sports pratiqués" },
              { icon: "🎮", label: "2 jeux de stratégie" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-500">
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── GRID ACTIVITÉS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {activities.map((act, i) => (
            <ActivityCard key={act.id} act={act} index={i} />
          ))}
        </div>

        {/* ── QUOTE FINALE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-2xl mx-auto"
        >
          <div className="text-6xl text-[#d4af37]/20 font-serif leading-none mb-2">"</div>
          <p className="text-gray-300 text-base leading-relaxed italic">
            Gardien de but, joueur d'échecs, ou développeur — j'ai toujours eu le même objectif :{" "}
            <span className="text-[#e3c770] not-italic font-semibold">lire la situation, anticiper, et exécuter.</span>
          </p>
          <div className="mt-6 text-[#d4af37] text-sm font-medium">— Malik Ibo</div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;