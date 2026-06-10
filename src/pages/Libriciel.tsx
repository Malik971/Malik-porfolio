// src/pages/Libriciel.tsx
import { easeOut, motion } from "framer-motion";
import IMG_PASTELL from "../assets/pastell-demo.png";
import IMG_HOTEL from "../assets/hotel_montpellier.png";

/* ------------------------------------------------------------------ */
/*  DONNÉES                                                            */
/* ------------------------------------------------------------------ */

// Liens de démo (depuis le README - le plus à jour)
const links = {
  app: "https://hotel-montpellier.netlify.app",
  docs: "https://hotel-montpellier.netlify.app/admin/docs",
  dashboard: "https://pastell-demo.netlify.app",
  github: "#", // ← repo « SpringHotel » : remplacer par l'URL publique, ou laisser "#" si privé
};

const techBadges = [
  "Spring Boot 4",
  "Java 21",
  "React 19",
  "Keycloak 26",
  "PostgreSQL",
  "Docker · Railway",
];

// Flux d'architecture (rendu en colonne)
const flow = [
  {
    layer: "Front React 19",
    host: "hotel-montpellier.netlify.app",
    detail: "REST / JSON + JWT Bearer (axios). 27 pages, carte Leaflet, panel admin.",
    accent: "#61dafb",
  },
  {
    layer: "sejour-backend · Spring Boot 4",
    host: "sejour-backend.up.railway.app",
    detail:
      "Resource Server OAuth2. Persiste la réservation, publie un événement, orchestre Pastell.",
    accent: "#6db33f",
  },
  {
    layer: "Keycloak 26",
    host: "realm springhotel · PKCE · Google IdP",
    detail: "Émet et valide les tokens OIDC. La techno d'iparapheur v5 de Libriciel.",
    accent: "#4d4dff",
  },
  {
    layer: "pastell-mock · le bus",
    host: "pastell-mock.up.railway.app",
    detail:
      "HTTP Basic (creds rotatifs HMAC), multipart en entrée / JSON en sortie. Machine à états + journal.",
    accent: "#d4af37",
  },
  {
    layer: "PostgreSQL",
    host: "Railway · Flyway V1 → V7",
    detail: "~14 tables. Migration MySQL → PostgreSQL effectuée au Sprint 4.",
    accent: "#336791",
  },
];

// Les prouesses techniques (le « waouh » pour un public Libriciel)
const highlights = [
  {
    icon: "🔐",
    title: "Credentials Pastell rotatifs par HMAC-SHA256",
    text: "Aucun mot de passe partagé stocké : username stable, password dérivé chaque jour UTC d'un secret maître. Le RotatingBasicAuthInterceptor recalcule l'en-tête Authorization à chaque requête (celui de Spring fige les valeurs au constructeur), avec tolérance ±24h au passage de minuit.",
    tag: "Sécurité · HMAC",
  },
  {
    icon: "🔄",
    title: "Synchronisation bidirectionnelle + détection de divergence",
    text: "Montante : événementielle, création de dossier sur POST /api/v2/.../document en multipart. Descendante : polling du journal toutes les 30s avec curseur persistant - aucune entrée rejouée, même après redémarrage. En cas d'incohérence métier → statut DIVERGENCE, jamais résolu seul : Sejour reste l'autorité.",
    tag: "Intégration · Bus",
  },
  {
    icon: "🛡️",
    title: "CompositeJwtDecoder à 3 émetteurs",
    text: "Une même page de login, trois modes dispatchés par le claim iss du token : JWT maison HS256 (comptes locaux), Keycloak RS256 via Authorization Code + PKCE (S256), et Google via kc_idp_hint. Sessions stateless, CORS durci, rate-limit maison (10 req/IP/60s).",
    tag: "OAuth2 · OIDC",
  },
  {
    icon: "♻️",
    title: "Résilience : retry à 2 niveaux",
    text: "Niveau 1, RetryTemplate Spring : 3 tentatives, backoff exponentiel. Niveau 2, un scheduler repasse toutes les 5 min sur les dossiers EN_RETRY jusqu'à un max, puis bascule EN_ERREUR. Défense en profondeur : un 2xx avec id_d vide est traité comme une anomalie.",
    tag: "Robustesse",
  },
  {
    icon: "🧪",
    title: "Un mock Pastell fidèle, pas un stub",
    text: "Faute d'instance réelle, j'ai reproduit l'API dans un module Maven séparé : multipart/JSON, HTTP Basic, machine à états du document, journal à id_j uniques (AtomicLong). Le backend n'a aucune dépendance sur le mock - il parle à « un Pastell » par contrat HTTP, et pointerait sur une vraie instance sans changer une ligne.",
    tag: "Compréhension produit",
  },
  {
    icon: "📖",
    title: "Le code parle le vocabulaire Libriciel",
    text: "Discipline assumée : dossier (pas sync), étape circuit (pas status), anomalie (pas error), relancer (pas retry), bus d'orchestration. Plus une page /admin/docs : une doc d'intégration embarquée dans l'app elle-même.",
    tag: "Domaine métier",
  },
];

// Stack par couche
const stack = [
  {
    couche: "Back-end",
    items: "Java 21 · Spring Boot 4 · Security · OAuth2 Resource Server · Data JPA · Flyway · jjwt · Spring Retry",
  },
  {
    couche: "Front-end",
    items: "React 19 · Vite 7 · Tailwind v4 · axios · react-router 7 · Leaflet · lucide · sonner",
  },
  {
    couche: "Auth",
    items: "Keycloak 26 · OAuth2 / OIDC · flow PKCE S256 (JS natif) · Google IdP",
  },
  {
    couche: "Tests",
    items: "JUnit 5 · Mockito · AssertJ · WireMock (HTTP Pastell) · H2 · security-test",
  },
  {
    couche: "Infra",
    items: "Docker · Railway (4 services) · Netlify (2 fronts) · PostgreSQL",
  },
];

// Chiffres d'échelle
const stats = [
  { value: "4", label: "services Docker en prod" },
  { value: "~200", label: "tests automatisés" },
  { value: "13", label: "controllers REST" },
  { value: "7", label: "migrations Flyway" },
  { value: "27", label: "pages React" },
  { value: "30s / 5s", label: "polling bus / dashboard" },
];

// Ce que Libriciel cherche · ce que j'apporte (ancré sur le projet réel)
const alignments = [
  {
    libriciel: "Connaissance du produit Pastell",
    moi: "Bus instrumenté dans les deux sens · mock fidèle de l'API v2",
  },
  {
    libriciel: "REST / OAuth2 / OpenID Connect",
    moi: "Resource Server multi-émetteurs · Keycloak PKCE · JWT maison",
  },
  {
    libriciel: "Assistance technique API partenaires",
    moi: "Diagnostic 4xx/5xx · retry 2 niveaux · détection de divergence",
  },
  {
    libriciel: "Documentation & support pédagogique",
    moi: "Page /admin/docs embarquée · vocabulaire métier dans le code",
  },
  {
    libriciel: "Environnements sandbox / bac à sable",
    moi: "Mock Pastell déployable · Docker · 4 services isolés sur Railway",
  },
  {
    libriciel: "Curiosité logiciel libre & open source",
    moi: "Stack open source · Keycloak · choix d'archi documentés (.md)",
  },
];

/* ------------------------------------------------------------------ */
/*  VARIANTS                                                           */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: easeOut } },
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

function Libriciel() {
  return (
    <section
      id="libriciel"
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
        {/* ---------------- HERO ---------------- */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h5 className="text-[#d4af37] uppercase tracking-widest text-sm mb-3">
            Case study · candidature DEVREL
          </h5>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            J'ai branché une plateforme hôtelière
            <br className="hidden sm:block" /> sur le bus{" "}
            <span className="text-[#d4af37]">Pastell</span> de Libriciel
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Intégration <strong className="text-gray-200">bidirectionnelle</strong> du
            bus Pastell dans une application full-stack déployée en production,
            sécurisée par un Resource Server{" "}
            <strong className="text-gray-200">OAuth2 / Keycloak</strong>. Pas une
            démo jetable : 4 services Docker, ~200 tests, et le vocabulaire métier
            de Libriciel jusque dans le code.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {techBadges.map((b) => (
              <span
                key={b}
                className="text-[11px] bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#e3c770] px-3 py-1 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTA links */}
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <a
              href={links.app}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#e3c770] text-black rounded-full text-sm font-semibold hover:from-[#e3c770] hover:to-[#d4af37] transition"
            >
              Voir l'app →
            </a>
            <a
              href={links.dashboard}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 border border-[#d4af37] text-[#d4af37] rounded-full text-sm font-medium hover:bg-[#d4af37] hover:text-black transition"
            >
              Dashboard Pastell →
            </a>
            <a
              href={links.docs}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 border border-white/20 text-gray-300 rounded-full text-sm font-medium hover:border-white/50 transition"
            >
              Doc d'intégration →
            </a>
            {links.github !== "#" && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-white/20 text-gray-300 rounded-full text-sm font-medium hover:border-white/50 transition"
              >
                GitHub →
              </a>
            )}
          </div>
          <p className="text-gray-600 text-xs mt-4">
            Compte démo : demo@springhotel.fr · Malik971*
          </p>
        </motion.div>

        {/* ---------------- PREVIEW IMAGES ---------------- */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <figure className="rounded-xl overflow-hidden border border-[#d4af37]/20">
            <img
              src={IMG_HOTEL}
              alt="Plateforme hôtelière - vue principale"
              className="w-full h-48 object-cover"
            />
            <figcaption className="text-[11px] text-gray-500 px-3 py-2 bg-[#141414]">
              L'app hôtelière · carte Leaflet + 5 hôtels Montpellier
            </figcaption>
          </figure>
          <figure className="rounded-xl overflow-hidden border border-[#d4af37]/20">
            <img
              src={IMG_PASTELL}
              alt="Dashboard de supervision Pastell"
              className="w-full h-48 object-cover"
            />
            <figcaption className="text-[11px] text-gray-500 px-3 py-2 bg-[#141414]">
              Dashboard de supervision Pastell · état du bus en temps réel
            </figcaption>
          </figure>
        </motion.div>

        {/* ---------------- CE QU'EST PASTELL ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-[#1a1a1a] border-l-4 border-[#d4af37] rounded-r-xl px-7 py-6"
        >
          <h3 className="text-xl font-semibold text-[#e3c770] mb-3">
            Le contexte · qu'est-ce que Pastell ?
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Pastell est le <strong>bus d'orchestration de flux</strong> de Libriciel
            pour les collectivités : il reçoit un dossier, le fait transiter par une
            machine à états administrative (validation, signature via parapheur,
            archivage SAE, notification) et journalise chaque transition.
            <br />
            <br />
            J'ai instrumenté Pastell exactement comme une vraie collectivité le
            ferait : <strong className="text-gray-100">chaque réservation devient
            un « dossier »</strong> poussé dans le bus, et les agents peuvent agir
            dessus côté Pastell - actions répercutées sur la réservation. L'objectif
            n'est pas l'hôtellerie : c'est de prouver qu'on sait brancher une
            application métier sur le bus, <strong>dans les deux sens</strong>, de
            façon résiliente.
          </p>
        </motion.div>

        {/* ---------------- ARCHITECTURE / FLUX ---------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-center text-xl font-semibold text-[#e3c770] mb-2">
            L'architecture
          </h3>
          <p className="text-center text-gray-500 text-xs mb-8">
            Tout est REST / JSON synchrone · le « temps réel » est du polling, pas
            du WebSocket - choix assumé et documenté
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {flow.map((node, i) => (
              <motion.div key={node.layer} variants={cardVariants}>
                <div
                  className="bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 flex items-start gap-4 hover:border-[#d4af37]/40 transition-colors"
                  style={{ borderLeft: `3px solid ${node.accent}` }}
                >
                  <span
                    className="text-xs font-mono mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: `${node.accent}22`,
                      color: node.accent,
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {node.layer}
                    </p>
                    <p className="text-[11px] font-mono text-gray-500 mb-1">
                      {node.host}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {node.detail}
                    </p>
                  </div>
                </div>
                {i < flow.length - 1 && (
                  <div className="flex justify-center py-1">
                    <span className="text-[#d4af37]/40 text-lg leading-none">
                      ↓
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------------- PROUESSES TECHNIQUES ---------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-center text-xl font-semibold text-[#e3c770] mb-8">
            Ce qui n'est pas trivial là-dedans
          </h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map(({ icon, title, text, tag }) => (
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
                <h4 className="text-base font-semibold text-[#e3c770] leading-snug">
                  {title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------------- STATS ---------------- */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={cardVariants}
              className="bg-[#1a1a1a] border border-[#d4af37]/15 rounded-xl px-4 py-5 text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-[#d4af37]">
                {value}
              </p>
              <p className="text-[11px] text-gray-500 mt-1 leading-tight">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------------- STACK ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-center text-xl font-semibold text-[#e3c770] mb-6">
            La stack, couche par couche
          </h3>
          <div className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl overflow-hidden">
            {stack.map(({ couche, items }, i) => (
              <div
                key={couche}
                className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] px-6 py-4 ${
                  i < stack.length - 1 ? "border-b border-white/5" : ""
                } hover:bg-white/[0.02] transition-colors`}
              >
                <span className="text-sm font-semibold text-[#d4af37] mb-1 sm:mb-0">
                  {couche}
                </span>
                <span className="text-sm text-gray-400 font-mono leading-relaxed">
                  {items}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------------- STORYTELLING ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16"
        >
          <div className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl p-6">
            <h4 className="text-sm uppercase tracking-widest text-[#d4af37] mb-3">
              Avant → Après
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-gray-200">Avant :</strong> une app de
              réservation classique (CRUD + carte), sans interopérabilité ni auth
              robuste.
              <br />
              <br />
              <strong className="text-gray-200">Après :</strong> une plateforme en
              production qui orchestre chaque réservation via le bus Pastell de
              façon bidirectionnelle et résiliente, sécurisée par un Resource Server
              OAuth2 acceptant 3 émetteurs de tokens.
            </p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl p-6">
            <h4 className="text-sm uppercase tracking-widest text-[#d4af37] mb-3">
              L'obstacle le plus instructif
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Faire fonctionner l'HTTP Basic avec un password rotatif :{" "}
              <code className="text-[#e3c770]">BasicAuthenticationInterceptor</code>{" "}
              de Spring fige les credentials au constructeur - l'auth cassait après
              minuit UTC. D'où le{" "}
              <code className="text-[#e3c770]">RotatingBasicAuthInterceptor</code>{" "}
              maison qui recalcule l'en-tête à chaque requête, avec double-vérif{" "}
              <em>today / yesterday</em> pour absorber le changement de jour.
            </p>
          </div>
        </motion.div>

        {/* ---------------- ALIGNEMENT ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-center text-xl font-semibold text-[#e3c770] mb-6">
            Ce que Libriciel cherche · Ce que ce projet prouve
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
                  <span className="text-sm text-gray-300 flex items-start gap-2 pr-3">
                    <span className="text-[#d4af37] mt-0.5">✦</span> {libriciel}
                  </span>
                  <span className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span> {moi}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ---------------- QUOTE / CTA ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative border-l-4 border-[#d4af37] bg-[#1a1a1a] rounded-r-xl px-8 py-6"
        >
          <p className="text-gray-200 text-base leading-relaxed italic">
            "Je n'ai pas seulement consommé une API : j'ai reproduit le bus Pastell
            pour le comprendre de l'intérieur, je l'ai branché dans les deux sens,
            je l'ai rendu résilient, et j'ai écrit le code dans votre vocabulaire
            métier. Le pont entre deux systèmes qui ne se parlent pas encore, je
            sais le construire - j'en ai déjà construit un."
          </p>
          <cite className="block mt-3 text-[#d4af37] text-xs uppercase tracking-widest not-italic">
            - Malik Ibo, candidat Technicien API chez Libriciel
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
