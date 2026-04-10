// src/pages/Axopen.tsx
import { easeOut, motion } from "framer-motion";

const reasons = [
  {
    icon: "🔌",
    title: 'Je pense "intégration" avant "feature"',
    text: "Avec Spring Boot, j'ai construit des APIs REST, géré des flux d'authentification OAuth2 via Spring Security, lu des payloads JSON/XML, diagnostiqué des 401 vs 403. Quand un partenaire bloque sur un appel API Libriciel, je ne pars pas dans le vide, j'ai déjà vécu ce côté-là de la connexion.",
    tag: "REST · OAuth2 · Spring",
  },
  {
    icon: "🎯",
    title: "Qualifier avant d'exécuter",
    text: "Gardien de but depuis 15 ans : on ne plonge pas avant d'avoir lu la situation. Face à un partenaire éditeur, mon premier réflexe sera de poser les bonnes questions, quel flux métier, quel endpoint, quel format attendu, qui est l'interlocuteur technique, avant toute chose. C'est exactement le muscle que le poste demande.",
    tag: "Qualification",
  },
  {
    icon: "📖",
    title: "Documenter, c'est déjà ma façon de coder",
    text: "Ce portfolio est lui-même une documentation. France-IOI en accès public, Duolingo 365 jours de streak, formations structurées projet par projet, j'ai l'habitude de rendre mes apprentissages lisibles pour d'autres. Créer des guides d'intégration ou des supports sandbox pour des éditeurs partenaires, c'est dans ma nature.",
    tag: "Pédagogie",
  },
  {
    icon: "🤝",
    title: "L'ADN coopératif me parle",
    text: "Une SCOP à gouvernance démocratique, 98 % du capital détenu par les salarié·e·s, une culture logiciel libre, c'est tout le contraire du \"startup bling-bling\". J'ai grandi dans un sport collectif où l'ego individuel coule l'équipe. Chez Libriciel, je viens construire, pas juste exécuter.",
    tag: "Culture · Collectif",
  },
];

const alignments = [
  {
    libriciel: "REST / SOAP / OAuth2 / OpenID Connect",
    moi: "Spring Boot REST · Spring Security OAuth2 · payloads JSON/XML",
  },
  {
    libriciel: "Assistance technique API partenaires",
    moi: "Diagnostic HTTP · lecture d'erreurs · logique client-serveur",
  },
  {
    libriciel: "Documentation & support pédagogique",
    moi: "Portfolio public · France-IOI · formation projet par projet",
  },
  {
    libriciel: "Environnements sandbox / bac à sable",
    moi: "Docker · Git · config d'environnements de dev isolés",
  },
  {
    libriciel: "Communication écrite technique",
    moi: "Anglais B2 (365j Duolingo) · rédaction structurée",
  },
  {
    libriciel: "Curiosité logiciel libre & open source",
    moi: "GitHub public · stack open source · formation continue Udemy",
  },
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

function Libriciel() {
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
          <h2 className="text-4xl font-bold mb-4">Pourquoi Libriciel SCOP ?</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Je ne cherche pas juste un poste DevRel, je cherche un rôle où la
            technique, la pédagogie et l'utilité concrète convergent. Libriciel
            coche les trois cases.
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
            Ce que Libriciel cherche · Ce que j'apporte
          </h3>
          <div className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 bg-[#d4af37]/10 border-b border-[#d4af37]/20 px-6 py-3">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Libriciel
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
              {alignments.map(({ libriciel, moi }, i) => (
                <motion.div
                  key={i}
                  variants={rowVariants}
                  className="grid grid-cols-2 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm text-gray-300 flex items-center gap-2">
                    <span className="text-[#d4af37]">✦</span> {libriciel}
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
            "Chez Libriciel, le DEVREL est le pont entre deux systèmes qui ne se
            parlent pas encore. Ce pont, je sais le construire, j'ai appris à
            lire un flux avant d'agir, à poser la bonne question avant d'ouvrir
            Postman, et à rendre technique ce qui était flou."
          </p>
          <cite className="block mt-3 text-[#d4af37] text-xs uppercase tracking-widest not-italic">
            — Malik Ibo, candidat DEVREL
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

export default Libriciel;
