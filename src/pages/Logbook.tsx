const logbook = [
  {
    date: "Mai 2025",
    entries: [
      "Déploiement de mon projet React + Spring Boot sur Render",
      "Prise en main de GitHub Actions pour de l'intégration continue",
      "Refonte de mon portfolio avec thème noir-blanc-or et Tailwind",
    ],
  },
  {
    date: "Juin 2025",
    entries: [
      "Découverte et intégration de Framer Motion pour les animations UI",
      "Sécurisation de mon backend Spring Boot (gestion des accès, erreurs)",
      "Création d’un système de notation de compétences sur mon portfolio",
    ],
  },
  {
    date: "Juillet 2025",
    entries: [
      "Démarrage de ma formation Angular avec la documentation officielle",
      "Premier projet full-stack en Angular + Spring",
      "Approfondissement de Docker et déploiement localisé de microservices",
    ],
  },
];

function Logbook() {
  return (
    <section id="logbook" className="bg-[#0e0e0e] text-white py-20 px-6">
      <div className="text-center mb-12">
        <h5 className="text-[#d4af37] uppercase tracking-widest text-sm">
          Mon évolution
        </h5>
        <h2 className="text-4xl font-bold">Carnet d’apprentissage</h2>
      </div>

      <div className="container mx-auto max-w-4xl space-y-10">
        {logbook.map((month) => (
          <div
            key={month.date}
            className="bg-[#1a1a1a] rounded-lg p-6 border border-[#d4af37]/20 shadow-md"
          >
            <h3 className="text-2xl font-semibold text-[#e3c770] mb-4">
              {month.date}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {month.entries.map((entry, idx) => (
                <li key={idx} className="text-gray-200">
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Logbook;
