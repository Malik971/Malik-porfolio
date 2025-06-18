import IMG1 from "../assets/carnaval.jpg";
import IMG2 from "../assets/1-removebg-preview.png";
import IMG3 from "../assets/calculator.png";
import IMG4 from "../assets/jeuchess.png";
import IMG5 from "../assets/image_t-shirt_3D.jpg";
import IMG6 from "../assets/burger-baner.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "HTML | CSS Site Carnaval Montpellier",
    github: "https://github.com/Malik971/carnavalMontpellier",
    demo: "https://carnaval-montpellier.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Wordpress | PHP | JavaScript Site Web",
    github: "https://github.com/Malik971/CoursPython6",
    demo: "https://workinmusic.fr/",
  },
  {
    id: 3,
    image: IMG3,
    title: "JavaScript | HTML | CSS Calculator",
    github: "https://github.com/Malik971/calculatrices",
    demo: "https://fabulous-otter-35c137.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "JavaScript | HTML | Jeu d'échec",
    github: "https://github.com/Malik971/jeuChess",
    demo: "https://jeuchess.netlify.app/",
  },
  {
    id: 5,
    image: IMG6,
    title: "JavaScript | HTML | CSS SiteBurger",
    github: "https://github.com/Malik971/SiteBurger",
    demo: "https://main--site-burger.netlify.app/",
  },
  {
    id: 6,
    image: IMG5,
    title: "Node.js | React | OpenAI API",
    github: "https://github.com/Malik971/T-Shirt-3D",
    demo: "https://t-shirt3d.netlify.app",
  },
];

const Projet = () => {
  return (
    <section id="portfolio" className="bg-[#0e0e0e] text-white py-20 px-6">
      <div className="text-center mb-12">
        <h5 className="text-[#d4af37] uppercase tracking-widest text-sm">
          Mon travail le plus récent
        </h5>
        <h2 className="text-4xl font-bold">Portfolio</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {data.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="bg-[#1a1a1a] border border-[#d4af37]/20 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_15px_#d4af37] transition duration-300"
          >
            <img src={image} alt={title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <div className="flex justify-between items-center">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-black transition"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#e3c770] text-black rounded-full font-medium hover:from-[#e3c770] hover:to-[#d4af37] transition"
                >
                  Site Web
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projet;
