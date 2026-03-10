// src/pages/Projet.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMG1 from "../assets/carnaval.jpg";
import IMG2 from "../assets/wim_photo.png";
import IMG3 from "../assets/calculator.png";
import IMG4 from "../assets/jeuchess.png";
import IMG5 from "../assets/image_t-shirt_3D.jpg";
import IMG6 from "../assets/burger-baner.png";
import IMG7 from "../assets/memeChat.png";
import IMG8 from "../assets/gestion-naissances.png";
import IMG9 from "../assets/DocuFlow.png";
import IMG10 from "../assets/vanille_mada.png";
import IMG11 from "../assets/sandaya_planning.png";
import IMG12 from "../assets/carambar_API.png";

type Project = {
  id: number;
  image: string;
  name: string;
  shortStack: string;
  stack: string[];
  description: string;
  highlights: string[];
  github: string;
  demo: string;
  featured?: boolean;
  category: "Java" | "React" | "FullStack" | "JS" | "Web";
};

const data: Project[] = [
  {
    id: 13,
    image: IMG8, // placeholder — remplace par ton image hotel si tu en as une
    name: "Réservation d'hôtels",
    shortStack: "Java · Spring Boot · React",
    stack: ["Java", "Spring Boot", "Spring Security", "MySQL", "React", "JUnit", "Git"],
    description:
      "Application web full-stack de recherche et réservation d'hôtels. Conçue en binôme avec une gestion complète des rôles utilisateur et administrateur.",
    highlights: [
      "Authentification sécurisée via Spring Security avec gestion des rôles admin",
      "CRUD complet côté back-end Java (hôtels, réservations, utilisateurs)",
      "Tests unitaires JUnit · collaboration Git en binôme",
      "Architecture structurée avec bonnes pratiques et méthode Agile",
    ],
    github: "https://github.com/Malik971",
    demo: "#",
    featured: true,
    category: "Java",
  },
  {
    id: 9,
    image: IMG9,
    name: "DocuFlow PDF",
    shortStack: "Java · React · FreeMarker",
    stack: ["Java", "Spring Boot", "React", "FreeMarker", "Dockerfile", "Tailwind CSS"],
    description:
      "Application d'automatisation de génération de formulaires et de PDF envoyés par mail. Premier projet Java sérieux en production.",
    highlights: [
      "Génération automatique de PDF via FreeMarker templates",
      "Back-end Java Spring Boot containerisé avec Docker",
      "Interface React pour la saisie et l'envoi des formulaires",
    ],
    github: "https://github.com/Malik971/DocuflowPDF",
    demo: "https://documentpdf.netlify.app/",
    featured: true,
    category: "Java",
  },
  {
    id: 8,
    image: IMG8,
    name: "Gestion des Naissances",
    shortStack: "TypeScript · React · MySQL",
    stack: ["TypeScript", "React", "JavaScript", "Postman", "MySQL"],
    description:
      "Projet full-stack de gestion de déclarations de naissances réalisé en ~15 jours. Première vraie immersion avec API et base de données.",
    highlights: [
      "API REST testée avec Postman · base de données MySQL",
      "Gestion des états React avec TypeScript strict",
      "Projet réalisé en bootcamp intensif de 15 jours",
    ],
    github: "https://github.com/Malik971/gestion-naissances",
    demo: "#",
    category: "FullStack",
  },
  {
    id: 12,
    image: IMG12,
    name: "Blagues Carambar",
    shortStack: "React · TypeScript · Howler.js",
    stack: ["React", "Vite", "TypeScript", "Howler.js", "Framer Motion", "Tailwind CSS"],
    description:
      "Application légère et fun qui génère des blagues Carambar à chaque clic, avec effets sonores et animations fluides.",
    highlights: [
      "API de blagues avec endpoint aléatoire",
      "Effets sonores via Howler.js · animations Framer Motion",
      "Déployé sur Netlify",
    ],
    github: "https://github.com/Malik971/blague-carambar",
    demo: "https://blague-carambar.netlify.app/",
    category: "React",
  },
  {
    id: 11,
    image: IMG11,
    name: "Planning Sandaya",
    shortStack: "React · Firestore · TypeScript",
    stack: ["React", "Firestore", "TypeScript", "React DnD", "date-fns"],
    description:
      "Site de planning interne développé rapidement pour organiser les équipes d'animation. Glisser-déposer pour réaffecter les créneaux.",
    highlights: [
      "Drag & Drop avec React DnD pour réorganiser les plannings",
      "Base de données temps réel Firestore",
      "Développé en situation réelle pendant l'été",
    ],
    github: "https://github.com/Malik971/green-planner",
    demo: "https://planing-sandaya.netlify.app/",
    category: "React",
  },
  {
    id: 10,
    image: IMG10,
    name: "Vanille de Madagascar",
    shortStack: "React · Node.js · PayPal",
    stack: ["React", "Node.js", "PayPal API", "Tailwind CSS"],
    description:
      "Site e-commerce de vente de vanille de Madagascar avec intégration PayPal. Projet orienté entrepreneuriat pour associer des producteurs malgaches.",
    highlights: [
      "Intégration paiement PayPal en sandbox",
      "Parcours utilisateur complet : catalogue, panier, commande",
      "Projet personnel avec vision entrepreneuriale",
    ],
    github: "https://github.com/Malik971/mada-vanille",
    demo: "https://mada-vanille.netlify.app/",
    category: "FullStack",
  },
  {
    id: 6,
    image: IMG5,
    name: "T-Shirt 3D IA",
    shortStack: "Node.js · React · OpenAI API",
    stack: ["Node.js", "React", "OpenAI API", "Three.js"],
    description:
      "Configurateur de t-shirt 3D avec génération d'image par IA. Permet de personnaliser un t-shirt en temps réel avec des visuels générés par OpenAI.",
    highlights: [
      "Rendu 3D interactif du t-shirt en temps réel",
      "Génération de motifs via l'API OpenAI DALL·E",
      "Interface React avec contrôles de personnalisation",
    ],
    github: "https://github.com/Malik971/T-Shirt-3D",
    demo: "https://t-shirt3d.netlify.app",
    category: "React",
  },
  {
    id: 7,
    image: IMG7,
    name: "Chat Random",
    shortStack: "TypeScript · React · CSS",
    stack: ["TypeScript", "React", "JavaScript", "HTML", "CSS"],
    description: "Application de chat aléatoire entre utilisateurs, avec interface moderne et animations.",
    highlights: [
      "Chat en temps réel entre utilisateurs aléatoires",
      "Interface animée et responsive",
    ],
    github: "https://github.com/Malik971/chat-random",
    demo: "https://carnaval-montpellier.netlify.app/",
    category: "React",
  },
  {
    id: 1,
    image: IMG1,
    name: "Carnaval Montpellier",
    shortStack: "HTML · CSS",
    stack: ["HTML", "CSS"],
    description: "Site vitrine pour le Carnaval de Montpellier. Premier projet web from scratch, axé sur le design et l'animation CSS.",
    highlights: ["Design festif et coloré", "Animations CSS pures", "Site statique déployé sur Netlify"],
    github: "https://github.com/Malik971/carnavalMontpellier",
    demo: "https://carnaval-montpellier.netlify.app/",
    category: "Web",
  },
  {
    id: 2,
    image: IMG2,
    name: "Work In Music",
    shortStack: "WordPress · PHP · JS",
    stack: ["WordPress", "PHP", "JavaScript"],
    description: "Site web professionnel pour la structure culturelle Work In Music. Réalisé pendant mon expérience chez Work In Music.",
    highlights: ["CMS WordPress avec thème personnalisé", "Formulaires de contact PHP", "Site en production : workinmusic.fr"],
    github: "https://github.com/Malik971/CoursPython6",
    demo: "https://workinmusic.fr/",
    category: "Web",
  },
  {
    id: 3,
    image: IMG3,
    name: "Calculatrice",
    shortStack: "JavaScript · HTML · CSS",
    stack: ["JavaScript", "HTML", "CSS"],
    description: "Calculatrice web fonctionnelle avec historique des opérations et interface soignée.",
    highlights: ["Opérations de base + historique", "Interface responsive", "JavaScript vanilla pur"],
    github: "https://github.com/Malik971/calculatrices",
    demo: "https://fabulous-otter-35c137.netlify.app/",
    category: "JS",
  },
  {
    id: 4,
    image: IMG4,
    name: "Jeu d'échecs",
    shortStack: "JavaScript · HTML",
    stack: ["JavaScript", "HTML", "CSS"],
    description: "Jeu d'échecs jouable dans le navigateur avec logique de déplacement complète des pièces.",
    highlights: ["Logique de mouvement de toutes les pièces", "Tour par tour · détection d'échec", "JavaScript pur sans librairie"],
    github: "https://github.com/Malik971/jeuChess",
    demo: "https://jeuchess.netlify.app/",
    category: "JS",
  },
  {
    id: 5,
    image: IMG6,
    name: "Site Burger",
    shortStack: "JavaScript · HTML · CSS",
    stack: ["JavaScript", "HTML", "CSS"],
    description: "Site vitrine pour un restaurant burger avec menu interactif et design appétissant.",
    highlights: ["Menu interactif avec filtres", "Animations au scroll", "Design food-oriented"],
    github: "https://github.com/Malik971/SiteBurger",
    demo: "https://main--site-burger.netlify.app/",
    category: "Web",
  },
];

const CATEGORIES = ["Tous", "Java", "FullStack", "React", "JS", "Web"] as const;
type Category = (typeof CATEGORIES)[number];

// MODAL
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Panel */}
        <motion.div
          className="relative bg-[#1a1a1a] border border-[#d4af37]/30 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
            {project.featured && (
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-[#d4af37] text-black px-2 py-1 rounded-full font-semibold">
                ★ Featured
              </span>
            )}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center text-lg transition"
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-1">{project.name}</h2>
            <p className="text-[#d4af37] text-sm mb-4">{project.shortStack}</p>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-[#d4af37] mt-0.5 shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#e3c770] px-2 py-0.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center px-4 py-2.5 border border-[#d4af37] text-[#d4af37] rounded-full text-sm font-medium hover:bg-[#d4af37] hover:text-black transition duration-200"
              >
                GitHub →
              </a>
              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#e3c770] text-black rounded-full text-sm font-semibold hover:from-[#e3c770] hover:to-[#d4af37] transition duration-200"
                >
                  Voir le site →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// CARD
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={onClick}
      className="group cursor-pointer bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_22px_rgba(212,175,55,0.18)] hover:border-[#d4af37]/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />

        {project.featured && (
          <span className="absolute top-2 left-2 text-[9px] uppercase tracking-widest bg-[#d4af37] text-black px-2 py-0.5 rounded-full font-semibold">
            ★ Featured
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/5 flex items-center justify-center transition-all duration-300">
          <motion.span
            className="opacity-0 group-hover:opacity-100 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm"
            initial={false}
          >
            Voir les détails →
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-white mb-1 truncate">
          {project.name}
        </h3>
        <p className="text-[11px] text-[#d4af37]/80 mb-3 truncate">
          {project.shortStack}
        </p>
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

// PAGE
const Project = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");

  const filtered =
    activeCategory === "Tous"
      ? data
      : data.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="bg-[#0e0e0e] text-white py-20 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="text-[#d4af37] uppercase tracking-widest text-sm mb-2">
            Mon travail le plus récent
          </h5>
          <h2 className="text-4xl font-bold">Portfolio</h2>
          <p className="text-gray-500 text-sm mt-3">
            {data.length} projets · Cliquez sur une carte pour voir les détails
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#d4af37] text-black border-[#d4af37]"
                  : "border-[#d4af37]/30 text-gray-400 hover:border-[#d4af37]/60 hover:text-[#d4af37]"
              }`}
            >
              {cat}
              <span className="ml-1.5 opacity-60">
                {cat === "Tous"
                  ? data.length
                  : data.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Project;