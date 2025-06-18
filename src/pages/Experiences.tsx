const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 4 },
      { name: "HTML/CSS", level: 5 },
      { name: "Tailwind CSS", level: 4 },
      { name: "JavaScript", level: 4 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java (Spring Boot)", level: 3 },
      { name: "Node.js", level: 3 },
      { name: "API REST", level: 4 },
    ],
  },
  {
    category: "CI / Outils",
    items: [
      { name: "Git / GitHub", level: 4 },
      { name: "Jenkins (notions)", level: 2 },
      { name: "FreeMarker / HTMLtoPDF", level: 3 },
    ],
  },
  {
    category: "Langages & Data",
    items: [
      { name: "SQL / MySQL", level: 5 },
      { name: "Python", level: 3 },
      { name: "MongoDB", level: 3 },
    ],
  },
];

const renderStars = (level: number) =>
  "★★★★★".split("").map((star, i) => (
    <span key={i} className={i < level ? "text-yellow-400" : "text-gray-400"}>
      {star}
    </span>
  ));

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0e0e0e] text-white py-20 px-6">
      <div className="text-center mb-12">
        <h5 className="text-[#d4af37] uppercase tracking-widest text-sm">
          Compétences techniques
        </h5>
        <h2 className="text-4xl font-bold">Mon expérience</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 max-w-5xl">
        {skills.map((section) => (
          <div key={section.category}>
            <h3 className="text-2xl font-semibold mb-6 text-[#e3c770]">
              {section.category}
            </h3>
            <ul className="space-y-4">
              {section.items.map(({ name, level }) => (
                <li
                  key={name}
                  className="flex items-center justify-between border-b border-white/10 pb-2"
                >
                  <span className="font-medium">{name}</span>
                  <span className="text-sm">{renderStars(level)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
