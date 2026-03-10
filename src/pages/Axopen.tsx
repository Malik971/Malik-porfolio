// src/pages/Axopen.tsx
import { easeOut, motion } from "framer-motion";

const reasons = [
  {
    icon: "⚙️",
    title: "Une stack qui me correspond",
    text: "Java Spring Boot est au cœur de mes projets récents. L'univers Java d'Axopen — Spring Boot, Quarkus, jHipster — est exactement l'écosystème dans lequel je veux progresser et me spécialiser sur le long terme.",
    tag: "Backend Java",
  },
  {
    icon: "🏗️",
    title: "La vision SI durable",
    text: "Axopen construit des SI solides qui durent. Cette vision me parle directement : chez Oc-Santé j'ai vu ce que ça signifie de penser architecture et durabilité des données, pas juste livrer du code.",
    tag: "Architecture",
  },
  {
    icon: "🤝",
    title: "Culture technique & humaine",
    text: "60 passionnés, petites équipes efficaces, transparence et pragmatisme. C'est l'environnement où j'apprends le mieux : des gens qui partagent leurs convictions techniques et qui codent avec exigence.",
    tag: "Culture",
  },
  {
    icon: "📈",
    title: "Montée en expertise",
    text: "Les audits de code, les bonnes pratiques, DevOps — c'est la voie que je veux prendre. Axopen offre un terrain d'apprentissage rare où chaque projet est l'occasion de progresser sur des sujets techniques profonds.",
    tag: "Progression",
  },
];

const alignments = [
  { axopen: "Spring Boot / Quarkus", moi: "Spring Boot · Spring Security · Maven" },
  { axopen: "Architecture Microservices", moi: "API REST · Conception logicielle orientée services" },
  { axopen: "Tests & Qualité de code", moi: "JUnit · bonnes pratiques · code review" },
  { axopen: "Équipes petites & efficaces", moi: "Travail en binôme · Git collaboratif · Agile" },
  { axopen: "Sincérité & Pragmatisme", moi: "Rigueur · transparence · adaptabilité" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: easeOut } },
};

function Axopen() {
  return (
    <section
      id="axopen"
      className="bg-[#0e0e0e] text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Ambient glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full"
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
            Ma candidature
          </h5>
          <h2 className="text-4xl font-bold mb-4">Pourquoi Axopen ?</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Je ne cherche pas juste un poste — je cherche un endroit où mes
            convictions techniques sont partagées et où je peux construire
            quelque chose qui dure.
          </p>
        </motion.div>

        {/* Reason cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map(({ icon, title, text, tag }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl p-6 flex flex-col gap-3 hover:border-[#d4af37]/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="text-2xl">{icon}</span>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 px-2 py-1 rounded-full">
                  {tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#e3c770]">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Alignment table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-center text-xl font-semibold text-[#e3c770] mb-6">
            Ce qu'Axopen cherche · Ce que j'apporte
          </h3>
          <div className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 bg-[#d4af37]/10 border-b border-[#d4af37]/20 px-6 py-3">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Axopen
              </span>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Malik
              </span>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {alignments.map(({ axopen, moi }, i) => (
                <motion.div
                  key={i}
                  variants={rowVariants}
                  className="grid grid-cols-2 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="text-[#d4af37]">✦</span> {axopen}
                  </span>
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="text-green-400">✓</span> {moi}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Quote / CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative border-l-4 border-[#d4af37] bg-[#1a1a1a] rounded-r-xl px-8 py-6"
        >
          <p className="text-gray-200 text-base leading-relaxed italic">
            "Chez Axopen j'ai trouvé un partenaire technique qui partage ma
            vision : du code utile, maintenable, et construit avec rigueur.
            C'est exactement le type d'équipe dans laquelle je veux évoluer
            et progresser sur les prochaines années."
          </p>
          <cite className="block mt-3 text-[#d4af37] text-xs uppercase tracking-widest not-italic">
            — Malik Ibo, candidat Développeur Java
          </cite>

          <motion.a
            href="/private/calendly"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-block bg-gradient-to-r from-[#d4af37] to-[#e3c770] text-black font-semibold py-3 px-8 rounded-full shadow hover:from-[#e3c770] hover:to-[#d4af37] transition duration-300 text-sm"
          >
            Prendre rendez-vous →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Axopen;