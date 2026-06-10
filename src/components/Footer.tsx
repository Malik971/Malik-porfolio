// src/components/Footer.tsx
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/*  CONFIG CONTACTS                                                    */
/*  → Pour activer LinkedIn : renseigne l'URL ci-dessous.             */
/* ------------------------------------------------------------------ */
const socials = {
  github: "https://github.com/Malik971",
  email: "malik97un@gmail.com",
  linkedin: "", // ← TODO Malik : colle ici l'URL de ton profil LinkedIn
};

/* Icônes SVG inline (pas de dépendance externe) */
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#d4af37]/20 text-gray-400 px-6 py-10">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identité */}
        <div className="text-center md:text-left">
          <p className="text-white font-semibold">Malik Ibo</p>
          <p className="text-xs text-gray-500 mt-1">
            Développeur Full-Stack · Java · React · Interopérabilité
          </p>
        </div>

        {/* Liens sociaux */}
        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d4af37]/25 text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
          >
            <GithubIcon />
          </a>

          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d4af37]/25 text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
            >
              <LinkedinIcon />
            </a>
          )}

          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d4af37]/25 text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
          >
            <MailIcon />
          </a>

          <Link
            to="/contact"
            className="ml-2 px-5 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#e3c770] text-black text-sm font-semibold rounded-full hover:from-[#e3c770] hover:to-[#d4af37] transition"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>

      {/* Bas de footer */}
      <div className="container mx-auto max-w-5xl mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
        <p>© {year} Malik Ibo · Tous droits réservés.</p>
        <p>Construit avec React · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}

export default Footer;
