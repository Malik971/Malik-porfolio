import photoMalik from "../assets/photo_malik.jpg";

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0e0e0e] text-[#f5f5f5]">
      <div className="text-center mb-10">
        <h5 className="text-sm text-[#cba135] uppercase tracking-wider">
          En savoir plus
        </h5>
        <h2 className="text-3xl font-bold text-white">À propos de moi</h2>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 max-w-6xl">
        {/* Image 3x4 + titre */}
        <div className="flex flex-col items-center">
          <div className="w-[200px] h-[270px] overflow-hidden rounded-2xl shadow-xl border-4 border-[#d4af37]">
            <img
              src={photoMalik}
              alt="Malik Ibo"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-4 text-lg font-semibold text-[#e3c770] text-center">
            Concepteur Développeur d’Application Full-Stack
          </p>
        </div>

        {/* Texte de présentation */}
        <div className="space-y-5 text-justify text-[#ccc]">
          <p>
            Je suis un développeur full-stack passionné, en formation en tant
            que Concepteur Développeur d’Application. J'ai déjà créé plusieurs
            projets concrets, notamment autour de la génération de documents,
            l’automatisation, et la gestion de flux éditiques avec Java, Spring
            Boot, React, FreeMarker, HTML/PDF.
          </p>
          <p>
            J’accorde une grande importance à l’apprentissage continu. J’ai
            pratiqué l’anglais chaque jour sur Duolingo pendant plus d’un an, je
            me forme à la CI/CD (Git, GitHub Actions, Jenkins) et je développe
            des solutions orientées utilisateurs.
          </p>
          <p>
            Ma force réside dans ma capacité à apprendre rapidement, à analyser
            des systèmes complexes, et à bâtir des applications robustes. J’aime
            rendre les choses simples, dynamiques et utiles.
          </p>
          <p>
            Actuellement, je travaille sur des projets personnels pour
            perfectionner mes compétences techniques, en intégrant de plus en
            plus de pratiques DevOps, de tests, et de déploiement cloud (Render,
            Vercel).
          </p>
          <div className="text-center">
            <button className="w-40 bg-[#d4af37] text-black font-semibold py-3 rounded-full shadow hover:bg-[#e3c770] transition duration-300">
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
