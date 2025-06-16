import { Link } from "react-router";

function Home() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      <article className="bg-white text-center p-10 rounded-md shadow-md">
        <h1 className="text-3xl mb-6">GESTION DES NAISSANCES</h1>
        <Link
          to={"/private/declaration"}
          className="border-4 rounded-md border-blue-700 text-blue-700 px-46 py-4 hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          Déclaration
        </Link>
      </article>
    </section>
  );
}

export default Home;
