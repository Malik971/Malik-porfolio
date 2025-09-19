// src/pages/Logbook.tsx

const logbook = [
  {
    date: "Juillet – Août 2025",
    entries: [
      "Animateur en camping (Sandaya) pendant l’été",
      "Développement rapide d’un site de planning interne pour l’organisation",
      "Expérience mêlant animation et code : mise en pratique des compétences React et Tailwind",
    ],
  },
  {
    date: "Juin 2025",
    entries: [
      "Développement d’une API de blagues Carambar",
      "Test en local avec ma propre base de données",
      "Fonctionnalité : bouton générant une nouvelle blague à chaque clic",
    ],
  },
  {
    date: "Mai – Juin 2025",
    entries: [
      "Création d’un site e-commerce de vanille de Madagascar",
      "Projet orienté entrepreneuriat : idée d’associer des producteurs malgaches",
      "Expérimentation du parcours utilisateur et logique de boutique en ligne",
    ],
  },
  {
    date: "Mai 2025",
    entries: [
      "Lancement d’un projet personnel : DocuFlow (Java + Spring Boot)",
      "Objectif : automatiser la génération de formulaires et PDF envoyés par mail",
      "Premiers pas sérieux en Java et introduction à l’automatisation",
    ],
  },

  {
    date: "Avril 2025",
    entries: [
      "Début d’un bootcamp intensif pour réaliser un projet de gestion de déclarations de naissances",
      "Projet réalisé en ~15 jours avec TypeScript, React, Postman et MySQL",
      "Première vraie immersion full-stack avec API et gestion de données",
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
